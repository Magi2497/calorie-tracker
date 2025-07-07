import { createContext, type Dispatch } from 'react'
import type {
  ActivityState,
  ActivityActions,
} from '../reducers/activityReducer'

type ActivityContextProps = {
  state: ActivityState
  dispatch: Dispatch<ActivityActions>
  formRef: React.RefObject<HTMLDivElement | null>
}

export const ActivityContext = createContext<ActivityContextProps>(null!)
