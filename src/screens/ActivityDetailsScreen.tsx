import { View, Text, StatusBar, Image, ScrollView } from 'react-native'
import { RootStackScreenProps } from './types/root'

const ActivityDetailsScreen = ({
  route,
}: RootStackScreenProps<'ActivityDetailsScreen'>) => {
  const { item } = route.params

  console.log('item*', item)
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Image
        source={{ uri: item.photoUrl }}
        className="w-full h-3/4 rounded-b-3xl"
      />
      <Text>ActivitiScreen</Text>
    </View>
  )
}

export default ActivityDetailsScreen
