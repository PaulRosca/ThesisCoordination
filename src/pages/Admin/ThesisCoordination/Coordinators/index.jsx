import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Card";
import Tabs from "../../../../components/Tabs";

const tabs = [
  { name: 'Anunturi', href: '/thesis-coordination', current: false },
  { name: 'Coordonatori', href: '/thesis-coordination/coordinators', current: true },
  { name: 'Studenti', href: '/thesis-coordination/students', current: false },
]

const coordinators = [
  {
    title: 'Dr.',
    lastName: 'Pop',
    firstName: 'Alina',
    description: 'Cercetare in domeniul X, Y si Z',
    requests: {
      rejected: 15,
      accepted: 5,
      recieved: 20
    }
  },
  {
    title: 'Lect.',
    lastName: 'Ionescu',
    firstName: 'Vlad',
    description: 'Cercetare in domeniul A, B si C',
    requests: {
      rejected: 30,
      accepted: 0,
      recieved: 30
    }
  },
  {
    title: 'Dr.',
    lastName: 'Georgescu',
    firstName: 'Ionut',
    description: 'Cercetare in domeniul D, E si F',
    requests: {
      rejected: 0,
      accepted: 3,
      recieved: 10
    }
  },
  {
    title: 'Asist.',
    lastName: 'Moldovean',
    firstName: 'Bogdan',
    description: 'Cercetare in domeniul G, H si I',
    requests: {
      rejected: 20,
      accepted: 10,
      recieved: 30
    }
  },
]

function CoordinatorCard({ coordinator: { title, lastName, firstName, description, requests: { rejected, accepted, recieved } } }) {
  const navigate = useNavigate()
  return (
    <Card>
      <div className="flex justify-between">
        <div className="font-bold">
          {title} {lastName} {firstName}
        </div>
        <div>
          <span>
            {recieved}
          </span>
          /
          <span className="text-blue-500">
            {accepted}
          </span>
          /
          <span className="text-red-400">
            {rejected}
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          {description}
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
    </Card>
  )
}
export default function Coordinators() {
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="flex justify-center">
        <div className="mt-4 flex flex-col w-3/4">
          {coordinators.map((c, idx) => <CoordinatorCard key={`coord_${idx}`} coordinator={c} />)}
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
