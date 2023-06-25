import { useEffect, useState } from 'react'
import PhoneBookEntries from './components/PhoneBookEntries'
import Filter from './components/Filter'
import EntryForm from './components/EntryForm'
import entryService from './services/entries'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    entryService
      .getAll()
      .then(response => setPersons(response.data))
  }, [])

  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState({ text: '', msgStyle: '' })

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  function GetEntry(name) {
    return persons.find((p) => p.name.toUpperCase().trim() === name.toUpperCase().trim())
  }

  function handleEntryDelete(entry) {
    if (window.confirm(`Confirm the deletion of ${entry.name} - ${entry.number}`)) {
      entryService.deleteEntry(entry.id)
        .catch(error => {
          console.log(error)
          setMessage({ text: `${error.response.data.error}`, msgStyle: 'error' })
        })
      setPersons(persons.filter(p => p.id !== entry.id))
    }
  }

  const handleNewEntry = (event) => {
    event.preventDefault()
    const newEntry = {
      name: newName,
      number: newNumber
    }

    
    if (GetEntry(newName) === undefined) {
      entryService
        .create(newEntry)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setMessage({ text: `${response.data.name} was added to the phonebook`, msgStyle: 'success' })
        }).catch(error => {
          setMessage({ text: `${error.response.data.error}`, msgStyle: 'error' })
        })

    } else {
      if (window.confirm(`${newName} is already in the book, you want to update the information?`)) {
        entryService
          .update(GetEntry(newName).id, newEntry)
          .then(response => {
            setPersons(persons.map(p => p.id !== response.data.id ? p : response.data))
            setNewName('')
            setNewNumber('')
            setMessage({ text: `${response.data.name} info was updated in the phonebook`, msgStyle: 'success' })
            console.log('m', message)
          }).catch(error => {
            setMessage({ text: `${error.response.data.error}`, msgStyle: 'error' })
          })
      }
    }
    setTimeout(() => {
      setMessage({ text: '', msgStyle: '' })
    }, 5000)
  }

  const shownPersons = persons.filter((p) => {
    return p.name.trim().toUpperCase().includes(search.trim().toUpperCase())
  })

  return (
    <div>
      <Notification message={message.text} msgStyle={message.msgStyle} />
      <h2>Phonebook</h2>
      Search <Filter handleSearch={handleSearch} searhc={search} />
      <h3>Add a new</h3>
      <EntryForm handleNewEntry={handleNewEntry} handleNewNumber={handleNewNumber} handleNewName={handleNewName}
        newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <PhoneBookEntries entries={search.trim().length > 0 ? shownPersons : persons} handleEntryDelete={handleEntryDelete} />
    </div>
  )
}

export default App