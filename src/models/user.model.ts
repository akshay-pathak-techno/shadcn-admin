import { PaginationState } from '@tanstack/react-table'
import { GenericResponse } from './generic'
import { User } from './auth.model'

export type UsersRequest = {
  pagination: PaginationState
}

export type UserResponse = GenericResponse<{
  users: User[]
  count: number
}>
