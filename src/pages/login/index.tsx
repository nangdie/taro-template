import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui'
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch()
    const setToken = () => {
        if (token) Taro.navigateTo({ url: '/pages/personal/index' })
        dispatch({
            type: 'user/saveToken',
            payload: 'tokenxxxxxxxxxxxxx'
        })
    }
    useEffect(() => {
        if (token) Taro.navigateTo({ url: '/pages/personal/index' })
    }, [token])
    return (
        <View>
            <View>
                您没有登陆,请先登陆
            </View>
            <AtButton type="primary" onClick={setToken} >假装登陆</AtButton>
        </View>
    )
}

export default Login
