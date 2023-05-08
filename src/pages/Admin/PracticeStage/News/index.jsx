import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Card";
import Tabs from "../../../../components/Tabs";

const tabs = [
  { name: 'Anunturi', href: '/practice-stage/news', current: true },
  { name: 'Teme', href: '/practice-stage/homework', current: false },
  { name: 'Evaluare', href: '/practice-stage/evaluation', current: false },
]


function NewsCard({ news: { title, createdAt, description }, index, setNews }) {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="font-bold">
          {title}
        </div>
        <div className="font-semibold text-gray-500">
          Postat pe {createdAt}
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
              setNews((prevValue) => {
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

export default function News() {
  const [news, setNews] = useState([
    {
      title: 'Anunt 1',
      createdAt: '15.05.2024',
      description: 'Detalii anunt'
    },
    {
      title: 'Anunt 2',
      createdAt: '20.05.2024',
      description: 'Detalii anunt'
    },
    {
      title: 'Anunt 3',
      createdAt: '25.05.2024',
      description: 'Detalii anunt'
    },
    {
      title: 'Anunt 4',
      createdAt: '30.05.2024',
      description: 'Detalii anunt'
    },
  ])
  const navigate = useNavigate()
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="flex justify-center">
        <div className="mt-4 flex flex-col w-3/4">
          {
            news.map((n, idx) => <NewsCard key={`news_${idx}`} setNews={setNews} index={idx} news={n} />)
          }
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
          onClick={() => navigate('/practice-stage/add-news')}
        >
          Adauga anunt
        </button>
      </div>
    </>
  )
}
