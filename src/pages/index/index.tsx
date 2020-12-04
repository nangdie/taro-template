import React, { Component, useState, useEffect } from 'react'
import Taro from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
import { useSelector, useDispatch } from "react-redux";
import { AtButton } from 'taro-ui'
import { getList } from './service';

const Index = () => {
  const count = useSelector(state => state.app.count);
  const dispatch = useDispatch()
  const addCount = () => {
    dispatch({
      type: 'app/saveCount',
      payload: count + 1
    })
  }

  const requestCount = () => {
    dispatch({ type: 'app/fetchCount' })
  }

  useEffect(() => {
    getList().then(res => {
      console.log(res, '返回了')
    }).catch(err => {
      console.log(err, '有错误')
    })

  }, [])



  return <View>
    <View>当前数字： {count}</View>
    <AtButton type="primary" onClick={addCount}> 加1</AtButton>
    <AtButton onClick={requestCount}> 模拟请求</AtButton>

    <AtButton className="margin-top" onClick={() => Taro.navigateTo({ url: '/pages/personal/index' })} >前往personal</AtButton>
  </View>
}

export default Index
