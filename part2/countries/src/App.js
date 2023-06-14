import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import SearchResult from './components/SearchResult'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  
  const handleShowInfo = (name) => {
    setSearch(name)
  }

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <>
      <Filter handleSearch={handleSearch} search={search}></Filter>
      <SearchResult search={search} countries={countries} handleShowInfo={handleShowInfo}></SearchResult>
    </>
  )

}

export default App;
