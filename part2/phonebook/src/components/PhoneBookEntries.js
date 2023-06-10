const PhoneBookEntries = ({entries}) => {
    return (
       entries.map((entry)=> <Entry key={entry.name} entry={entry} />)

    )
}

const Entry = ({entry})=>{
    return (
        <p>{entry.name} {entry.number}</p>
    )
}

export default PhoneBookEntries