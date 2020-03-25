let notes = []

 const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}


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
    return fetch('http://localhost:3000/journalEntries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:3000/journalEntries/${entryId}`, {
        method: "DELETE"
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
}