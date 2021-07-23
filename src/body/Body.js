import React from 'react'
import {  Text, View } from 'react-native'
import styles from './styles'
import TopBar from '../topBar/topBar'
import InnerBox from './innerBox/innerBox' 
const Body = () => {
    return (
        <View style={styles.body}>
            <TopBar/>
            <InnerBox/>
        </View>
    )
}

export default Body

