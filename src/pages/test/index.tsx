
import React, { Component, useState, useEffect, FC } from 'react'
import Taro from "@tarojs/taro";
import { View } from '@tarojs/components'
import { TestProps } from './interface';
import { getTestList } from './service';
import "./index.scss";
const Test: FC<TestProps> = (props) => {
    return (
        <View className="test-wrap" >
            test
        </View>
    )
}
export default Test
