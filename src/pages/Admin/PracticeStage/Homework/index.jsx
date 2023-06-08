import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../../../components/Card"
import Tabs from "../../../../components/Tabs"

const tabs = [
  { name: 'Anunturi', href: '/practice-stage/news', current: false },
  { name: 'Teme', href: '/practice-stage/homework', current: true },
  { name: 'Evaluare', href: '/practice-stage/evaluation', current: false },
]

function HomeworkCard({ homework: { title, deadline, description, weight }, index, setHomeworks }) {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="font-bold">
          {title}
        </div>
        <div className="font-semibold text-gray-500">
          Pondere: {weight}%
        </div>
        <div className="font-semibold text-gray-500">
          {deadline}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          {description}
        </div>
        <div>
          <button
            className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
            onClick={() => {
              setHomeworks((prevValue) => {
                const copy = [...prevValue]
                copy.splice(index, 1)
                return copy
              })
            }}
          >
            Sterge
          </button>
        </div>
      </div>
    </Card>
  )
}

export default function Assignments() {
  const navigate = useNavigate()
  const [homeworks, setHomeworks] = useState([
    {
      title: 'Tema 1',
      deadline: '25.05.2025',
      description: 'Cerinta tema...',
      weight: 25
    },
    {
      title: 'Tema 2',
      deadline: '15.06.2025',
      description: 'Cerinta tema...',
      weight: 25
    },
    {
      title: 'Tema 3',
      deadline: '20.06.2025',
      description: 'Cerinta tema...',
      weight: 50
    },
  ])
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="flex justify-center">
        <div className="mt-4 flex flex-col w-3/4">
          {
            homeworks.map((h, idx) => <HomeworkCard key={`homework_${idx}`} homework={h} setHomeworks={setHomeworks} index={idx} />)
          }
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
          onClick={() => navigate('/practice-stage/add-homework')}
        >
          Adauga tema
        </button>
      </div>
    </>
  )
}
