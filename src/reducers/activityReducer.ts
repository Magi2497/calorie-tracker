import type { Activity } from '../types'

export type ActivityActions =
  | {
      type: 'save-activity'
      payload: { newActivity: Activity }
    }
  | {
      type: 'set-activeId'
      payload: { id: Activity['id'] }
    }
  | {
      type: 'delete-activity'
      payload: { id: Activity['id'] }
    }
  | {
      type: 'restart-app'
    }

export type ActivitiyState = {
  activities: Activity[]
  activeId: Activity['id']
}

const localStorageActivities = (): Activity[] => {
  const activities = localStorage.getItem('activities')
  return activities ? JSON.parse(activities) : []
}
export const initialState: ActivitiyState = {
  activities: localStorageActivities(),
  activeId: '',
}

export const activityReducer = (
  state: ActivitiyState = initialState,
  action: ActivityActions,
) => {
  if (action.type === 'save-activity') {
    let updatedActivity: Activity[] = []

    if (state.activeId) {
      updatedActivity = state.activities.map(activity =>
        activity.id === state.activeId ? action.payload.newActivity : activity,
      )
    } else {
      updatedActivity = [...state.activities, action.payload.newActivity]
    }

    return {
      ...state,
      activities: updatedActivity,
      activeId: '',
    }
  }
  if (action.type === 'set-activeId') {
    return {
      ...state,
      activeId: action.payload.id,
    }
  }

  if (action.type === 'delete-activity') {
    return {
      ...state,
      activities: state.activities.filter(
        activity => activity.id !== action.payload.id,
      ),
    }
  }

  if (action.type === 'restart-app') {
    return {
      activities: [],
      activeId: '',
    }
  }
  return state
}
