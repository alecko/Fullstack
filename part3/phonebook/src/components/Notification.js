const successStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 25,
    borderStyle: 'solid',
    borderWidth: 3,
    background: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
}

const errorStyle = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: 25,
    borderStyle: 'solid',
    borderWidth: 3,
    background: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
}

const Notification = ({ message, msgStyle }) => {
    if (message !== '') {
        return (
            <h3 style={msgStyle === 'success' ? successStyle : errorStyle}>{message}</h3>
        )
    } else {
        return null
    }
}

export default Notification