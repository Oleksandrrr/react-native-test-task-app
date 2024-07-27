import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { RootStackScreenProps } from '@screens/types/root'
import { RootStackScreenProps } from '@react-navigation/stack'

import { useNavigation } from '@react-navigation/native'
import { Activities } from '../../api/api'

interface IProps {
  item: Activities
}
const ActivitiesListItem = ({ item }: IProps) => {
  const navigation =
    useNavigation<RootStackScreenProps<'ActivityDetailsScreen'>>()

  console.log('I', item)
  return (
    <TouchableOpacity
      className="flex-co mb-3"
      onPress={() => navigation.navigate('ActivityDetailsScreen', { item })}
    >
      <Image
        source={{ uri: item.photoUrl }}
        className="w-full h-40 rounded-2xl"
      />
      <View className="flex-1 rounded-2xl bg-lightBlue px-8 py-8">
        <View className="flex-row justify-between">
          <Text className="text-base font-abel ext-base">{item.name}</Text>
          <View className="flex-row items-center justify-center">
            <Image source={require('../assets/icons/starIcon.png')} />
            <Text className="ml-1 text-xs font-sfProDisplay">
              {item.rating}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-between mt-2">
          <View className="flex-row justify-start">
            <Image source={require('../assets/icons/locationIcon.png')} />
            <Text className="ml-1 text-xs font-sfProDisplay ">Location</Text>
          </View>
          <View className="flex-row justify-start align-middle">
            <Text className="ml-1 text-sm font-abel ">${item.price}</Text>

            <Text className="ml-1 text-xs font-sfProDisplay text-lightGrey ">
              / nigth
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ActivitiesListItem
