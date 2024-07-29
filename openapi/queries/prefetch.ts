// generated with @7nohe/openapi-react-query-codegen@1.4.1

import { type QueryClient } from '@tanstack/react-query'
import { DefaultService } from '../requests/services.gen'
import * as Common from './common'
/**
 * get all activities
 * @returns unknown A list of activities
 * @throws ApiError
 */
export const prefetchUseDefaultServiceGetActivities = (
  queryClient: QueryClient,
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDefaultServiceGetActivitiesKeyFn(),
    queryFn: () => DefaultService.getActivities(),
  })
