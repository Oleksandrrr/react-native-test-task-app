import { Image, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Activities } from '../../api/api'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@screens/types/root'

interface IProps {
  item: Activities
}
type activitiesScreenProp = StackNavigationProp<
  RootStackParamList,
  'ActivityDetailsScreen'
>

const ActivitiesListItem = ({ item }: IProps) => {
  const navigation = useNavigation<activitiesScreenProp>()

  const handlePress = () => {
    navigation.navigate('ActivityDetailsScreen', {
      id: item.id,
    })
  }
  return (
    <TouchableOpacity className="flex-co mb-3" onPress={() => handlePress()}>
      <Image
        source={{ uri: item.photoUrl }}
        className="w-full h-40 rounded-2xl"
      />
      <View className="flex-1 rounded-2xl bg-lightBlue px-6 pt-4 pb-4">
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
            <Text className="ml-1 text-xs font-sfProDisplay ">
              {item.location}
            </Text>
          </View>
          <View className="flex-row justify-start  content-center items-center">
            <Text className="ml-1 text-sm font-abel ">${item.price}</Text>
            <Text className="ml-1 text-xs font-sfProDisplay text-lightGrey text-end">
              / nigth
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ActivitiesListItem
