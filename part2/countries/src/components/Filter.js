
const Filter = ({search, handleSearch }) => {
    return (
        <div>Search Countries: <input onChange={handleSearch} value={search}></input></div>
    )
}

export default Filter