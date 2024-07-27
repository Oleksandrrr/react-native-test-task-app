import { Text } from 'react-native'

interface IProps {
  message: string
}

const ErrorMessage = ({ message = 'Opps, something went wrong' }: IProps) => {
  return <Text children={message} className="text-red-500" />
}

export default ErrorMessage
