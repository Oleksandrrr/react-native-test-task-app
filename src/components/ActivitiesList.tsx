import { FlatList } from 'react-native'
import { Activities } from '../../api/api'
import ListHeaderComponent from './ListHeaderComponent'
import ActivitiesListItem from './ActivitiesListItem'

interface IProps {
  data: Activities[] | undefined
}

const ActivitiesList = ({ data }: IProps) => {
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

export default ActivitiesList
