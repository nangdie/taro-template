import React from 'react'
import { View } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui';


const Personal = () => {
    return (
        <View>
            您已登陆,这是个人中心
            <AtButton onClick={() => Taro.navigateTo({ url: '/pages/index/index' })} >回到Index</AtButton>
            <AtButton onClick={() => Taro.navigateTo({ url: '/pages/login/index' })} >回到登录页</AtButton>
        </View>
    )
}

export default Personal
