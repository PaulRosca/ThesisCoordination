import Card from "../../../components/Card"

function AssignmentCard({ assignment: { student: { firstName, lastName }, title, document, grade } }) {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="font-bold">
          {lastName} {firstName}
        </div>
        <div className="font-semibold text-gray-500">
          {title}
        </div>
      </div>
      <div className="flex mt-4 justify-between">
        <div className="bg-gray-400 text-white px-2 rounded-lg flex items-center">
          {document}
        </div>
        <div className="flex justify-end">
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
            >
              Descarca documente
            </button>
          </div>
          <div className="px-4 w-1/5">
            <input
              name="grade"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 px-2"
              placeholder="Nota..."
              value={grade}
            />
          </div>
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
            >
              Acorda nota
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

const assignments = [
  {
    student: {
      firstName: 'Alex',
      lastName: 'Pop'
    },
    title: 'Tema 1',
    document: 'arhiva.zip',
    grade: '9'
  },
  {
    student: {
      firstName: 'Ionut',
      lastName: 'Georgescu'
    },
    title: 'Tema 1',
    document: 'tema.zip',
    grade: ''
  },
  {
    student: {
      firstName: 'Alex',
      lastName: 'Pop'
    },
    title: 'Tema 2',
    document: 'arhiva 2.zip',
    grade: ''
  },
  {
    student: {
      firstName: 'Ionut',
      lastName: 'Georgescu'
    },
    title: 'Tema 2',
    document: 'tema2.zip',
    grade: '5'
  }

]
export default function PracticeStage() {
  return (
    <div className="flex justify-center">
      <div className="mt-8 flex flex-col w-3/4">
        {
          assignments.map((a, idx) => <AssignmentCard key={`assignment_${idx}`} assignment={a} />)
        }
      </div>
    </div>
  )
}
