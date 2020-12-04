const fs = require('fs');
const dirName = process.argv[2];
// 转换成大写 test => Test ; test-page => TestPage
const capPirName = dirName.split('-').map(str => str.substring(0, 1).toUpperCase() + str.substring(1)).join('')

if (!dirName) {
    console.error('示例：npm run tep 名称');
    process.exit(0);
}

const config = `
export default {
  navigationBarTitleText: "${dirName}"
}
`
const scss = `
${dirName}-wrap {
    width: 100%;
    min-height: 100vh;
}
`

const tsx = `
import React, { Component, useState, useEffect, FC } from 'react'
import Taro from "@tarojs/taro";
import { View } from '@tarojs/components'
import { ${capPirName}Props } from './interface';
import { get${capPirName}List } from './service';
import "./index.scss";
const ${capPirName}: FC<${capPirName}Props> = (props) => {
    return (
        <View className="${dirName}-wrap" >
            ${dirName}
        </View>
    )
}
export default ${capPirName}
`

const interface = `
export interface ${capPirName}Props {
}
`

const model = `
import { Effect } from "dva";
import { Reducer } from "redux";
export interface ${capPirName}ModelState {
}
export interface ${capPirName}ModelType {
    namespace: "${dirName}";
    state: ${capPirName}ModelState;
    effects: {
        fetch${capPirName}: Effect;
    };
    reducers: {
        save${capPirName}: Reducer<${capPirName}ModelState>;
    };
}
const initState: ${capPirName}ModelState = {
};
const ${capPirName}Model: ${capPirName}ModelType = {
    namespace: "${dirName}",
    state: initState,
    effects: {
        *fetch${capPirName}(_, { call, put }) {
        },
    },
    reducers: {
        save${capPirName}(state = initState, action) {
            return { ...state, ...action.payload }
        }
    }
};
export default ${capPirName}Model;
`

const service = `
import fly from "@/utils/request";

export function get${capPirName}List() {
    return fly.request({
        url: "/api/${dirName}",
        method: "get"
    });
}
`

fs.mkdirSync(`./src/pages/${dirName}`);
process.chdir(`./src/pages/${dirName}`);
fs.writeFileSync('model.ts', model);
fs.writeFileSync(`index.tsx`, tsx);
fs.writeFileSync('service.ts', service);
fs.writeFileSync(`index.scss`, scss);
fs.writeFileSync('index.config.ts', config);
fs.writeFileSync(`interface.d.ts`, interface);

console.log(`执行完成：src/pages/${dirName}`)
process.exit(0);