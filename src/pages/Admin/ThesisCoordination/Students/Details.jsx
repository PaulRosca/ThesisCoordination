import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Card";
import Tabs from "../../../../components/Tabs";

const tabs = [
  { name: 'Anunturi', href: '/thesis-coordination', current: false },
  { name: 'Coordonatori', href: '/thesis-coordination/coordinators', current: false },
  { name: 'Studenti', href: '/thesis-coordination/students', current: true },
]

const applications = [
  {
    professor: {
      title: 'Dr.',
      lastName: 'Popescu',
      firstName: 'Maria'
    },
    date: '15.05.2025'
  },
  {
    professor: {
      title: 'Dr.',
      lastName: 'Ionescu',
      firstName: 'Vlat'
    },
    date: '25.05.2025'
  },
  {
    professor: {
      title: 'Lect.',
      lastName: 'Georgescu',
      firstName: 'Ionut'
    },
    date: '25.05.2025'
  },
  {
    professor: {
      title: 'Asist.',
      lastName: 'Pop',
      firstName: 'George'
    },
    date: '30.05.2025'
  },
]

export default function Details() {
  const navigate = useNavigate()
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="h-full m-10">
        <Card className="h-full">
          <div className="flex justify-between">
            <div className="font-bold">
              Pop Alex
            </div>
            <div className="flex">
              <div className="pr-4">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Atribuie coordonator
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  onClick={() => navigate('/chat')}
                >
                  Chat
                </button>
              </div>
            </div>
          </div>
          <div className="border-y-2 h-full my-2 py-2">
            <div>
              Numar aplicari: {applications.length}
            </div>
            {
              applications.map((a, idx) =>
                <div key={`application_${idx}`} className="flex justify-center py-2">
                  <div className="font-bold text-blue-500 pr-2">
                    {a.professor.title} {a.professor.lastName} {a.professor.firstName}
                  </div>
                  <div className="font-semibold">
                    {a.date}
                  </div>
                </div>
              )
            }
          </div>
          <div className="flex justify-start">
            <button
              className="flex justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              onClick={() => navigate('/thesis-coordination/students')}
            >
              Inapoi
            </button>
          </div>
        </Card>
      </div>
    </>
  )
}
