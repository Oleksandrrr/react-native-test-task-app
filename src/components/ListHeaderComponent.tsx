import { Text } from 'react-native'

const ListHeaderComponent = ({ title }: { title: string }) => (
  <Text className="text-2xl font-abel font-normal bg-center mb-10 text-center">
    {title}
  </Text>
)

export default ListHeaderComponent
