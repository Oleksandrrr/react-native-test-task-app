import { useQuery } from '@tanstack/react-query'
import { fetchActivities } from '../../api/api'
import ErrorMessage from '../components/ErrorMessage'
import CustomActivityIndicator from '../components/CustomActivityIndicator'

import ActivitiesList from '../components/ActivitiesList'

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
  return <ActivitiesList data={data} />
}

export default HomeScreen
