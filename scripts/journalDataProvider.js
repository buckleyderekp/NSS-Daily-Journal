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