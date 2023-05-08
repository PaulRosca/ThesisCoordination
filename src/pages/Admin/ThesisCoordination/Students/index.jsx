import { useNavigate } from "react-router-dom"
import Card from "../../../../components/Card"
import Tabs from "../../../../components/Tabs"

const tabs = [
  { name: 'Anunturi', href: '/thesis-coordination', current: false },
  { name: 'Coordonatori', href: '/thesis-coordination/coordinators', current: false },
  { name: 'Studenti', href: '/thesis-coordination/students', current: true },
]

const students = [
  {
    firstName: 'Alex',
    lastName: 'Pop',
    applications: 15,
    accepted: true
  },
  {
    firstName: 'Alex',
    lastName: 'Pop',
    applications: 15,
    accepted: true
  },
  {
    firstName: 'Alex',
    lastName: 'Pop',
    applications: 15,
    accepted: true
  },
  {
    firstName: 'Alex',
    lastName: 'Pop',
    applications: 15,
    accepted: true
  },
]

function StudentCard({ student: { firstName, lastName, applications, accepted } }) {
  const navigate = useNavigate()
  return (
    <Card>
      <div className="flex">
        <div className="w-2/6 flex items-center font-bold">
          {lastName} {firstName}
        </div>
        <div className="w-2/6 flex items-center">
          Numar aplicari: {applications}
        </div>
        <div className="w-1/6 flex items-center">
          Acceptat: {accepted ? <span className="text-blue-500 font-semibold">DA</span> : <span className="text-red-400 font-semibold">NU</span>}
        </div>
        <div className="w-1/6">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            onClick={() => navigate('/thesis-coordination/students/details')}
          >
            Detalii
          </button>
        </div>
      </div>
    </Card>
  )
}

export default function Students() {
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="flex justify-center">
        <div className="mt-4 flex flex-col w-3/4">
          {
            students.map((s, idx) => <StudentCard key={`student_${idx}`} student={s} />)
          }
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Descarca situatie
        </button>
      </div>
    </>
  )
}
