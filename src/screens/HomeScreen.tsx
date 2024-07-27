import { FlatList } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { Activities, fetchActivities } from '../../api/api'
import ErrorMessage from '../components/ErrorMessage'
import CustomActivityIndicator from '../components/CustomActivityIndicator'
import ActivitiesListItem from '../components/ActivitiesListItem'
import ListHeaderComponent from '../components/ListHeaderComponent'

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
  return (
    <FlatList
      ListHeaderComponent={<ListHeaderComponent title="Activities" />}
      showsVerticalScrollIndicator={false}
      className="bg-white p-4"
      style={{ backgroundColor: 'white' }}
      data={data}
      keyExtractor={(item: Activities) => item.id.toString()}
      renderItem={({ item }) => <ActivitiesListItem item={item} />}
    />
  )
}

export default HomeScreen
