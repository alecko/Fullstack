import { useState } from 'react'
import PhoneBookEntries from './components/PhoneBookEntries'
import Filter from './components/Filter'
import EntryForm from './components/EntryForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  function ExistsEntry(name) {
    return persons.find((p) => p.name.toUpperCase().trim() === name.toUpperCase().trim()) !== undefined
  }

  const handleNewEntry = (event) => {
    event.preventDefault()
    if (!ExistsEntry(newName)) {
      const newEntry = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newEntry))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already in the book`)
    }
  }

  const shownPersons = persons.filter((p) => {
    return p.name.trim().toUpperCase().includes(search.trim().toUpperCase())
  })

  return (
    <div>
      <h2>Phonebook</h2>
      Search <Filter handleSearch={handleSearch} searhc={search} />
      <h3>Add a new</h3>
      <EntryForm handleNewEntry={handleNewEntry} handleNewNumber={handleNewNumber} handleNewName={handleNewName}
        newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <PhoneBookEntries entries={search.trim().length > 0 ? shownPersons : persons} />
    </div>
  )
}

export default App