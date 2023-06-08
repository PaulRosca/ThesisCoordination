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
      <div className="flex justify-center mt-4">
        <div className="w-3/4">
          <Card>
            <div className="flex justify-between">
              <div className="font-bold">
                Detalii evaluare
              </div>
              <div className="font-bold px-2">
                <div>
                  Nota sesiune normala
                </div>
                <div className="text-end text-red-600">
                  4
                </div>
              </div>
              <div className="font-bold px-2">
                <div>
                  Nota sesiune de restante
                </div>
                <div className="text-end text-blue-800">
                  6
                </div>
              </div>
            </div>
            <div className="mt-4" style={{ height: '25rem' }}>
              Criterii de evaluare
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
