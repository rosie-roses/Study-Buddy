import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from '../components/CarouselItem'

const { width, height } = Dimensions.get('window')
let flatList

const CarouselFunctionality = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollY, width)
    const [dataList, setDataList] = useState(data)

    useEffect(() => {
        setDataList(data)
    })

    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                ref = {(flatList) => {this.flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment='center'
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item ={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
        
                />
                <View style={StyleSheet.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'identity'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 50, width: 50, backgroundColor: '#e534eb',
                                margin: 8, borderRadius: 5}}
                                />
                        )
                    })}
                </View>
            </View>
        )
    }

    console.log("Images are missing, please provide them")
    return null
}

const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})

export default CarouselFunctionality;

