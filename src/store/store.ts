import { User } from '@/models/auth.model'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const userAtom = atom<User | null>(null)
export const isLoggedInAtom = atomWithStorage<boolean>('isLoggedIn', false)
export const refreshTokenAtom = atomWithStorage<string | null>(
  'refreshToken',
  null
)

export const isCollapsedAtom = atom<boolean>(
  window.innerWidth < 768 ? false : true
)
