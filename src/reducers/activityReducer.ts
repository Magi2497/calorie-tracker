import type { Activity } from '../types'

export type ActivityActions = {}

type ActivitiyState = {
  activities: Activity[]
}

export const inicialState: ActivitiyState = {
  activities: [],
}

export const activityReducer = (
  state: ActivitiyState = inicialState,
  action: ActivityActions,
) => {}
