import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { RootStackScreenProps } from './types/root'
import FavoriteButton from '../components/FavoriteButton'
import { addFavorite } from '../../api/api'
import ErrorMessage from '../components/ErrorMessage'

const ActivityDetailsScreen = ({
  route,
}: RootStackScreenProps<'ActivityDetailsScreen'>) => {
  const client = useQueryClient()

  const navigation = useNavigation()
  const { item } = route.params

  const {
    data: favorite,
    mutate,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: () => addFavorite(item.id),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ['activities'],
      })
    },
  })

  if (isError) {
    return <ErrorMessage message={error.message} />
  }
  return (
    <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
      <StatusBar hidden />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute bg-lightBlue w-14 h-14  left-2 top-2 justify-center items-center rounded-full z-10"
      >
        <Image source={require('../assets/icons/arrowLeft.png')} />
      </TouchableOpacity>
      <Image
        source={{ uri: item.photoUrl }}
        className="w-full h-96 rounded-b-3xl"
      />
      <View className="m-4 flex-1 border-b-2 border-lightBlue">
        <Text className="text-2xl font-abel font-normal mb-3">{item.name}</Text>
        <View className="flex-row justify-between">
          <Text className=" font-abel font-normal text-base font-black	">
            ${item.price}
          </Text>
          <Text className="font-normal text-xs font-sfProDisplay text-lightGrey ">
            Included taxes and fees
          </Text>
        </View>
      </View>
      <View className="mx-4 flex-1 flex-col border-b-2 border-lightBlue mb-4">
        <Text className="text-base font-abel font-normal mb-3 text-black">
          Description
        </Text>
        <View className="flex-row justify-between">
          <Text className="font-abel font-normal text-sm text-lightGrey">
            {item.description}
          </Text>
        </View>
      </View>
      <FavoriteButton onPress={() => mutate()} loading={isPending} />
    </ScrollView>
  )
}

export default ActivityDetailsScreen
