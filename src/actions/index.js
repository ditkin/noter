export const requestNotebooks = () => ({
    type: 'REQUEST_NOTEBOOKS',
})

export const receiveNotebooks = notebooks => ({
    type: 'REQUEST_NOTEBOOKS',
    notebooks,
})

export const fetchNotebooks = dispatch => {
    dispatch(requestNotebooks())
    const fetch_url = 'localhost:8080/notebooks'
    return fetch(fetch_url)
        .then(response => response.json())
        .then(json => dispatch(receiveNotebooks()))
}


export const addNote = (notebook, text, title) => ({
    type: 'ADD_NOTE',
    notebook,
    text,
    title,
})

export const showNotes = () => ({
    type: 'SHOW_NOTES',
})
