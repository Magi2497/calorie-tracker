import { useMemo } from 'react'
import type { Activity } from '../types'
import CalorieDisplay from './CalorieDisplay'

type CaloriesTrackerProps = {
  activities: Activity[]
}

export default function CalorieTracker({ activities }: CaloriesTrackerProps) {
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0,
      ),
    [activities],
  )

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0,
      ),
    [activities],
  )

  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [caloriesBurned, caloriesConsumed],
  )

  return (
    // Counter

    <>
      <h2 className="text-4xl font-black text-white text-center">
        Calorie Summary
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5">
        <CalorieDisplay text="Consumed" calories={caloriesConsumed} />
        <CalorieDisplay text="Burned" calories={caloriesBurned} />
        <CalorieDisplay text="Balance" calories={netCalories} />
      </div>
    </>
  )
}
