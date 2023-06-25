const Filter = ({handleSearch, search})=>{
    return (<input onChange={handleSearch} value={search} />)
}

export default Filter