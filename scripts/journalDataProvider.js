let notes = []

export const getNotes = () => {
    return fetch('http://localhost:3000/journalEntries')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}


export const useNotes = () => {
   return notes.slice()
}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}