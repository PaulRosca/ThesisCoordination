import Card from "../../../components/Card";

const professors = [
  {
    title: 'Dr',
    lastName: 'Pop',
    firstName: 'Ionescu',
    students: {
      accepted: 15,
      total: 30
    },
    email: 'pop.ionescu@ubb.ro',
    description: 'Cercetare in domeniile X, Y si Z'
  },
  {
    title: 'Dr',
    lastName: 'Nicolet',
    firstName: 'Ionescu',
    students: {
      accepted: 20,
      total: 30
    },
    email: 'nico.ionescu@ubb.ro',
    description: 'Cercetare in domeniile A, B si C'
  },
  {
    title: 'Lect',
    lastName: 'Alexandrescu',
    firstName: 'Ionut',
    students: {
      accepted: 0,
      total: 30
    },
    email: 'alexandrescu.ionut@ubb.ro',
    description: 'Cercetare in domeniile P, R si S'
  },
  {
    title: 'Conf',
    lastName: 'Popa',
    firstName: 'Maria',
    students: {
      accepted: 9,
      total: 30
    },
    email: 'popa.maria@ubb.ro',
    description: 'Cercetare in domeniile T, U si V'
  },

]
function ProfessorCard({ professor: { title, lastName, firstName, students, email, description } }) {
  return (
    <Card>
      <div className="flex">
        <div className="w-1/3 font-bold">
          {title}. {lastName} {firstName}
        </div>
        <div className="w-1/3 text-center font-semibold text-gray-400">
          {email}
        </div>
        <div className="w-1/3 text-right">
          Studenti coordonati {students.accepted}/{students.total}
        </div>
      </div>
      <div className="flex pt-4 justify-between">
        <div>
          {description}
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Solicita acord
          </button>
        </div>
      </div>
    </Card>
  )
}
export default function ThesisCoordination() {
  return (
    <div className="flex justify-center">
      <div className="mt-8 flex flex-col w-3/4">
        {
          professors.map((professor, idx) => <ProfessorCard key={`prof_${idx}`} professor={professor} />)
        }
      </div>
    </div>
  )
}
