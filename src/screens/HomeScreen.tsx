import { View, Text, FlatList } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { Activities, fetchActivities } from '../../api/api'
// import CustomActivityIndicator from 'components/CustomActivityIndicator'
import ErrorMessage from '../components/ErrorMessage'
import CustomActivityIndicator from '../components/CustomActivityIndicator'
import ActivitiesListItem from '../components/ActivitiesListItem'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['activities'],
    queryFn: fetchActivities,
  })

  if (isLoading) {
    return <CustomActivityIndicator />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }
  const ListHeaderComponent = ({ title }: { title: string }) => (
    <Text className="text-2xl font-abel font-normal bg-center mb-10 text-center">
      {title}
    </Text>
  )
  return (
    <FlatList
      ListHeaderComponent={<ListHeaderComponent title="Activities" />}
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingHorizontal: 20 }}
      data={data}
      keyExtractor={(item: Activities) => item.id.toString()}
      renderItem={({ item }) => <ActivitiesListItem item={item} />}
    />
  )
}

export default HomeScreen
