import Card from "../../../../components/Card"
import Tabs from "../../../../components/Tabs"

const tabs = [
  { name: 'Anunturi', href: '/practice-stage/news', current: true },
  { name: 'Teme', href: '/practice-stage/homework', current: false },
  { name: 'Evaluare', href: '/practice-stage/evaluation', current: false },
]

const news = [
  {
    title: 'Titlu anunt',
    content: 'Text anunt'
  },
  {
    title: 'Titlu anunt',
    content: 'Text anunt'
  },
  {
    title: 'Titlu anunt',
    content: 'Text anunt'
  },
  {
    title: 'Titlu anunt',
    content: 'Text anunt'
  }
]

export default function News() {
  return (
    <>
      <Tabs tabs={tabs}/>
      <div className="flex justify-center">
        <div className="mt-4 flex flex-col w-3/4">
          {
            news.map((n, idx) =>
              <Card key={`news_card_${idx}`}>
                <div className="font-bold">
                  {n.title}
                </div>
                <div className="pt-4">
                  {n.content}
                </div>
              </Card>
            )
          }
        </div>
      </div>
    </>
  )
}
