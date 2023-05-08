import Card from "../../../../components/Card";
import Tabs from "../../../../components/Tabs";

const tabs = [
  { name: 'Anunturi', href: '/practice-stage/news', current: false },
  { name: 'Teme', href: '/practice-stage/homework', current: true },
  { name: 'Evaluare', href: '/practice-stage/evaluation', current: false },
]

const assignments = [
  {
    title: 'Tema 1',
    deadline: '15.05.2024',
    description: 'Cerinte tema',
    grade: 8
  },
  {
    title: 'Tema 2',
    deadline: '25.05.2024',
    description: 'Cerinte tema'
  },
  {
    title: 'Tema 3',
    deadline: '01.06.2024',
    description: 'Cerinte tema'
  }
]

export default function Homework() {
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="flex justify-center">
        <div className="mt-4 flex flex-col w-3/4">
          {
            assignments.map((asg, idx) =>
              <Card key={`assignemnt_${idx}`}>
                <div className="flex justify-between">
                  <div className="font-bold">
                    {asg.title}
                  </div>
                  <div className="font-semibold text-gray-500">
                    Deadline {asg.deadline}
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <div>
                    {asg.description}
                  </div>
                  {
                    asg.grade ? (
                      <div className="font-bold">{asg.grade}/10</div>
                    ) : (
                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                        >
                          Incarca document
                        </button>
                      </div>
                    )
                  }
                </div>
              </Card>
            )
          }
        </div>
      </div>
    </>
  )
}
