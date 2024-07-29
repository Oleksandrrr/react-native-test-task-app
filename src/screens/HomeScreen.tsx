import ErrorMessage from '../components/ErrorMessage'
import CustomActivityIndicator from '../components/CustomActivityIndicator'

import ActivitiesList from '../components/ActivitiesList'
import { useDefaultServiceGetActivities } from '../../openapi/queries'

const HomeScreen = () => {
  const { data, isLoading, error } = useDefaultServiceGetActivities()

  if (isLoading) {
    return <CustomActivityIndicator />
  }

  if (error) {
    return <ErrorMessage message="Failed to Get all activities" />
  }
  return <ActivitiesList data={data} />
}

export default HomeScreen
