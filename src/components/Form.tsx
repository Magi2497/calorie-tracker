import { useState } from 'react'
import { categories } from '../data/categories'
import type { Activity } from '../types'

export default function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: '',
    calories: 0,
  })

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const isNumberField = ['category', 'calories'].includes(event.target.id)

    setActivity({
      ...activity,
      [event.target.id]: isNumberField
        ? +event.target.value
        : event.target.value,
    })
  }

  const isValidActivity = () => {
    const { name, calories } = activity
    console.log(name.trim() !== '')

    return name.trim() !== '' && calories > 0
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <form
      className="space-y-5 bg-white p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Category:
        </label>
        <select
          name=""
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map(categori => (
            <option key={categori.id} value={categori.id}>
              {categori.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Activity:
        </label>
        <input
          type="text"
          id="name"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Ex. Food, Orange juice, Salad, Training, Gym"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calories:
        </label>
        <input
          type="number"
          id="calories"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Calories Ex. 500 or 300"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        value={activity.category === 1 ? 'Save Food' : 'Save Training'}
        disabled={!isValidActivity()}
      />
    </form>
  )
}
