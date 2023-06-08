import { useState } from "react";
import Card from "../../../components/Card";

export default function Profile({ professor: { title, firstName, lastName, description } }) {
  const [localTitle, setLocalTitle] = useState(title)
  const [localFirstName, setLocalFirstName] = useState(firstName)
  const [localLastName, setLocalLastName] = useState(lastName)
  const [localDescription, setLocalDescription] = useState(description)
  return (
    <div className="my-10 px-10 h-full flex flex-col items-center">
      <Card className="h-1/2 w-3/4 lg:w-1/2">
        <div className="flex">
          <div>
            <select
              id="titles"
              className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 px-2"
              value={localTitle}
              onChange={e => setLocalTitle(e.target.value)}
            >
              <option selected>Alege un titlu</option>
              <option value="Asist.">Asist.</option>
              <option value="Lect.">Lect.</option>
              <option value="Conf.">Conf.</option>
              <option value="Prof.">Prof.</option>
              <option value="Dr.">Dr.</option>
            </select>
          </div>
          <div className="pl-2">
            <input
              name="firstName"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 px-2"
              value={localFirstName}
              onChange={(e) => setLocalFirstName(e.target.value)}
            />
          </div>
          <div className="pl-2">
            <input
              name="lastName"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 px-2"
              value={localLastName}
              onChange={(e) => setLocalLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="h-full my-4">
          <textarea
            name="lastName"
            type="text"
            required
            style={{ resize: 'none' }}
            className="inline-block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 px-2 h-full align-top"
            value={localDescription}
            onChange={(e) => setLocalDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Salvare
          </button>
        </div>
      </Card>
    </div>
  )
}
