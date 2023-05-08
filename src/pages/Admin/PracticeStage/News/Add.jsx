import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Card";
import Tabs from "../../../../components/Tabs";

const tabs = [
  { name: 'Anunturi', href: '/practice-stage/news', current: true },
  { name: 'Teme', href: '/practice-stage/homework', current: false },
  { name: 'Evaluare', href: '/practice-stage/evaluation', current: false },
]

export default function Add() {
  const navigate = useNavigate()
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="my-6 px-10 h-full">
        <Card className="h-full">
          <div className="flex">
            <div>
              <input
                name="titlu anunt"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 px-2"
                placeholder="Titlu anunt..."
              />
            </div>
          </div>
          <div className="h-full my-4">
            <textarea
              name="lastName"
              type="text"
              required
              style={{ resize: 'none' }}
              className="inline-block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 px-2 h-full align-top"
              placeholder="Descriere anunt"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <button
                className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                onClick={() => navigate('/practice-stage/news')}
              >
                Anuleaza
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Adauga anunt
              </button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
