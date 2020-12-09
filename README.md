# 开始使用 Taro-Template

> 前提需要安装Node.js环境

## 概览

- [x] 使用 Redux+dva
- [x] 使用Flyio （请求拦截）
- [x] Proxy全局拦截路由跳转
- [x] 快速创建页面
- [ ] ...
## 关联

- [语雀](https://www.yuque.com/nangdie/wdisqd)
- [Github](https://github.com/nangdie/taro-template)
- 喜欢的可以点个star 、收藏什么的，不迷路还可以接收更新信息。动力满满
##### nestjs封装&使用

- nestjs [语雀](https://www.yuque.com/nangdie/datrmc)
- nestjs [Github](https://github.com/nangdie/nestjs-template)
## 初始化
### 执行命令安装 [ Tarojs ]
使用下面的其中一个命令都可以，如果有错误可尝试切换其他安装方式。
```git
 使用 npm 安装 CLI
 npm install -g @tarojs/cli
 OR 使用 yarn 安装 CLI
 yarn global add @tarojs/cli
 OR 安装了 cnpm，使用 cnpm 安装 CLI
 cnpm install -g @tarojs/cli

```
我选择使用了 **Yarn**
```git
yarn global add @tarojs/cli
```
安装完成后开始构建项目，myApp 为你的项目名称
```git
taro init myApp  
```
执行后会出现一个对话框，选择你需要的配置

1. 写一个你的项目名称，按回车
1. 询问使用的框架，选中React，按回车
1. 询问是否使用typescript ，输入y，按回车，
1. 询问使用的css预处理器，选中sass，按回车
1. 模板选用taro-ui，按回车
> 接下来等待完成， 如果出现错误，当前目录会出现一个myApp文件夹，进入到文件夹输入 **yarn **重新安装

![image.png](https://cdn.nlark.com/yuque/0/2020/png/2991766/1606897409237-2c506615-6cf2-4847-88f6-0edcdc32f9f7.png#align=left&display=inline&height=574&margin=%5Bobject%20Object%5D&name=image.png&originHeight=574&originWidth=572&size=55252&status=done&style=none&width=572)
### 目录结构
不出意外，你看到的目录结构应该是这样的
![image.png](https://cdn.nlark.com/yuque/0/2020/png/2991766/1606897847718-f14ea239-475b-4f08-9ffd-fc9894941d46.png#align=left&display=inline&height=223&margin=%5Bobject%20Object%5D&name=image.png&originHeight=223&originWidth=277&size=10001&status=done&style=none&width=277)
### 将UI样式导入到全局
如果你不想频繁引入taro-ui的样式的话，可以在 app.scss 目录引入taro-ui的整个css文件
> src/app.scss

```css
@import "~taro-ui/dist/style/index.scss";
```
![image.png](https://cdn.nlark.com/yuque/0/2020/png/2991766/1606898158163-f8c8d763-ce89-48e3-8373-d49378aaf910.png#align=left&display=inline&height=145&margin=%5Bobject%20Object%5D&name=image.png&originHeight=145&originWidth=439&size=7327&status=done&style=none&width=439)
### 运行项目
接下来可通过下面的其中一个命令运行项目
> 我选择使用： yarn dev:weapp




1. "dev:weapp": "npm run build:weapp -- --watch",
1. "dev:swan": "npm run build:swan -- --watch",
1. "dev:alipay": "npm run build:alipay -- --watch",
1. "dev:tt": "npm run build:tt -- --watch",
1. "dev:h5": "npm run build:h5 -- --watch",
1. "dev:rn": "npm run build:rn -- --watch",
1. "dev:qq": "npm run build:qq -- --watch",
1. "dev:jd": "npm run build:jd -- --watch",
1. "dev:quickapp": "npm run build:quickapp -- --watch"



成功后会显示编译成功
![image.png](https://cdn.nlark.com/yuque/0/2020/png/2991766/1606898623268-78f4a1ee-9871-4c7a-aba2-545dcce6bbae.png#align=left&display=inline&height=218&margin=%5Bobject%20Object%5D&name=image.png&originHeight=218&originWidth=392&size=12959&status=done&style=none&width=392)
