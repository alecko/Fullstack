const CountryDetails = ({ country }) => {
    console.log(country)

    const flagStyle = {
        width: 230,
        height: 150,
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 5
    }

    let text = "";
    for (const x in country.languages) {
        text += country.languages[x] + ','
    }

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <hr></hr>
            <h3>Languajes:</h3>
            <ul>{text.split(',').filter(l => l.length !== 0).map(l => <li key={l}>{l}</li>)}</ul>
            <img style={flagStyle} src={country.flags.svg}></img>
        </div>
    )
}

const SearchResult = ({ search, countries, handleShowInfo }) => {
    const result = countries.filter(c => c.name.common.trim().toUpperCase().includes(search.trim().toUpperCase()))
    if (!result || !search) return null
    if (result.length === 1) {
        return (
            <CountryDetails country={result[0]}></CountryDetails>
        )
    }
    if (result.length > 10) {
        return (
            <h2>Too many results, refine the search please</h2>
        )
    }

    if (result.length <= 10) {
        return (
            <div>{result.map(r => <p key={r.area}> {r.name.common} <button onClick={()=>handleShowInfo(r.name.common)}>Show info</button></p>)}</div>
        )
    }

}

export default SearchResult