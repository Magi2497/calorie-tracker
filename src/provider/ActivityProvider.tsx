import type { PropsWithChildren } from 'react'
import { useReducer, useRef } from 'react'
import { activityReducer, initialState } from '../reducers/activityReducer'
import { ActivityContext } from '../context/ActivityContext'

export const ActivityProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(activityReducer, initialState)
  const formRef = useRef<HTMLDivElement>(null)

  return (
    <ActivityContext.Provider value={{ state, dispatch, formRef }}>
      {children}
    </ActivityContext.Provider>
  )
}
