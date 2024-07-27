import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FavoriteButton: React.FC<{ onPress: () => void; loading: boolean }> = ({
  onPress,
  loading = false,
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      className="mx-4 my-2 rounded-full p-5 justify-center bg-black"
    >
      <Text className="text-lightBlue text-base font-abel font-normal mx-auto">
        {loading ? 'Adding...' : 'Add to Favorites'}
      </Text>
    </TouchableOpacity>
  )
}

export default FavoriteButton
