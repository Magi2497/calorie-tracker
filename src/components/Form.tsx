import { categories } from '../data/categories';
export default function Form() {
  return (
    <form action="" className="space-y-5 bg-white p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Category:
        </label>
        <select
          name=""
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        >
          {categories.map((categori) => (
            <option key={categori.id} value={categori.id}>
              {categori.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">
          Activity:
        </label>
        <input
          type="text"
          id="activity"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Ex. Food, Orange juice, Salad, Training, Gym"
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
        />
      </div>
    </form>
  );
}
