import Card from "../../../components/Card"

const students = [
  {
    firstName: 'Andrei',
    lastName: 'Popescu',
    comment: 'Comentariu...'
  },
  {
    firstName: 'Alex',
    lastName: 'Ionescu',
    comment: 'Comentariu...'
  },
  {
    firstName: 'Bogdan',
    lastName: 'Grigorescu',
    comment: 'Comentariu...'
  }
]

function StudentCard({ student: { firstName, lastName, comment } }) {
  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <div className="font-bold">
            {lastName} {firstName}
          </div>
          <div className="py-2 mt-6">
            {comment}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Accepta
            </button>
          </div>
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
            >
              Respinge
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function ThesisCoordination() {
  return (
    <div className="flex justify-center">
      <div className="mt-8 flex flex-col w-3/4">
        <div className="font-bold text-right mb-4">
          Studenti 25/30
        </div>
        {
          students.map((s, idx) => <StudentCard key={`student_card_${idx}`} student={s} />)
        }
      </div>
    </div>
  )
}
