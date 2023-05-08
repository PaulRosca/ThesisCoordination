import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Card";
import Tabs from "../../../../components/Tabs";

const tabs = [
  { name: 'Anunturi', href: '/practice-stage/news', current: false },
  { name: 'Teme', href: '/practice-stage/homework', current: true },
  { name: 'Evaluare', href: '/practice-stage/evaluation', current: false },
]

export default function Add() {
  const navigate = useNavigate()
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="my-6 px-10 h-full">
        <Card className="h-full">
          <div className="flex justify-between">
            <div>
              <input
                name="titlu tema"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 px-2"
                placeholder="Titlu tema..."
              />
            </div>
            <div>
              <input
                name="deadline tema"
                type="date"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>
          <div className="h-full my-4">
            <textarea
              name="creinte"
              type="text"
              required
              style={{ resize: 'none' }}
              className="inline-block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 px-2 h-full align-top"
              placeholder="Cerinte tema"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <button
                className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                onClick={() => navigate('/practice-stage/homework')}
              >
                Anuleaza
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Adauga tema
              </button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
