import React, { Component, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { useSelector, useDispatch } from "react-redux";
import { AtButton } from 'taro-ui'

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

  return <View>
    <View>当前数字： {count}</View>
    <AtButton type="primary" onClick={addCount}> 加1</AtButton>
    <AtButton onClick={requestCount}> 模拟请求</AtButton>
  </View>
}

export default Index
