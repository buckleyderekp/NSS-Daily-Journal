/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useNotes } from "./journalDataProvider.js"
import JournalEntryComponent from "./journalEntry.js"

// DOM reference to where all entries will be rendered and stored in variable entryLog
const entryLog = document.querySelector("#entryLog")

const EntryListComponent = () => {
    // storing function that returns array of entries sorted by date and storing in variable entries
    const entries = useNotes()
//for of loop that runs through each object in the array (entry) now stored in entries
    for (const entry of entries) {
        /*
        Invoke the component that returns an
        HTML representation of a single entry
        */
        const logHTMLRepresentation = JournalEntryComponent(entry)
        //takes DOM node now stored in entryLog and converts to html adding a new object from the array taken
        //from logHTMLRepresentation running through each object
        entryLog.innerHTML += logHTMLRepresentation
    }
}
    


export default EntryListComponent   