import entryService from '../services/entries'

const PhoneBookEntries = ({ entries, handleEntryDelete }) => {
    return (
        entries.map((entry) => <Entry key={entry.id} entry={entry} handleEntryDelete={handleEntryDelete} />)
    )
}

const Entry = ({ entry, handleEntryDelete }) => {
    return (
        <p>{entry.name} {entry.number} <button onClick={() => handleEntryDelete(entry)}>Delete</button></p>
    )
}

export default PhoneBookEntries