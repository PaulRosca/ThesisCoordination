import Card from "../../../../components/Card"
import Tabs from "../../../../components/Tabs"

const tabs = [
  { name: 'Anunturi', href: '/practice-stage/news', current: false },
  { name: 'Teme', href: '/practice-stage/homework', current: false },
  { name: 'Evaluare', href: '/practice-stage/evaluation', current: true },
]

export default function Evaluation() {
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="h-full my-10 px-10">
        <Card className="h-full">
          <div className="font-bold">
            Detalii evaluare
          </div>
          <div className="h-full mt-4">
            <textarea
              name="cirterii"
              type="text"
              required
              style={{ resize: 'none' }}
              className="inline-block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 px-2 h-full align-top"
              placeholder="Criterii de evaluare..."
            />
          </div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              <div className="pr-4">
                <input
                  name="pondere teme"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 px-2"
                  placeholder="Pondere teme..."
                />
              </div>
              <div>
                <input
                  name="pondere nota finala"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 px-2"
                  placeholder="Pondere nota finala..."
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Salvare
              </button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
