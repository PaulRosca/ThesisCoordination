import { useState } from "react"
import Card from "../../components/Card"
import { PaperClipIcon } from '@heroicons/react/24/outline'
import { Disclosure } from "@headlessui/react"

function ChatCard({ info }) {
  const getCardClassName = () => {
    if (info.isActive) {
      return "bg-indigo-700"
    }
    else {
      return "bg-gray-300 hover:bg-gray-200 active:bg-gray-100"
    }
  }
  return (
    <div className={"rounded p-2 hover:cursor-pointer shadow-md mb-2 " + getCardClassName()}>
      <div className={"font-bold" + (info.isActive ? " text-white" : "")}>
        {info.name}
      </div>
      <div className={"text-end " + (info.isActive ? "text-slate-200" : "text-slate-800")}>
        {info.lastMessage}
      </div>
    </div>
  )
}

const chatCards = [
  {
    name: 'Dr. Alina Pop',
    lastMessage: 'Sigur!',
    isActive: true
  },
  {
    name: 'Administrator',
    lastMessage: 'Buna ziua!'
  }
]

function ChatMessage({ message }) {
  return (
    <div className={"flex my-1" + (message.user ? " justify-end" : " justify-start")}>
      <div className={(message.user ? "bg-indigo-700 text-white" : "bg-gray-300") + " rounded-lg px-3 py-1"}>
        {message.msg}
      </div>
    </div>
  )
}

export default function Chat() {
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
  {
    msg: 'Buna Andrei!',
  },
  {
    msg: 'Buna ziua!',
    user: true
  },
  {
    msg: 'Ai inceput lucrul pentru lucrarea de licenta?'
  },
  {
    msg: 'Sigur!',
    user: true
  }
])
  return (
    <div className="flex my-4 h-full">
      <div className="w-1/5 px-2">
        {
          chatCards.map((cc, idx) => <ChatCard key={`cc_${idx}`} info={cc} />)
        }
      </div>
      <div className="w-4/5 pl-2 pr-4">
        <Card className="h-full">
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <div className="font-bold text-lg">
              Dr. Alina Pop
            </div>
            <div className="font-semibold text-gray-400">
              pop.alina@ubb.ro
            </div>
          </div>
          <div className="flex flex-col py-4 grow">
            {
              chatMessages.map((cm, idx) => <ChatMessage key={`cm_${idx}`} message={cm} />)
            }
          </div>
          <div className="border-t-2 border-gray-200 flex justify-between pt-4">
            <div className="grow">
              <input
                id="message"
                name="message"
                type="text"
                placeholder="Introduceti mesajul..."
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 px-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex px-2">
              <div className="flex items-center pr-1">
                <PaperClipIcon className="h-6 w-6 hover:text-slate-400 hover:cursor-pointer"/>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => {
                  setChatMessages((prevValue) => [...prevValue, { msg: message, user: true }])
                  setMessage('')
                }}
              >
                Trimite
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
