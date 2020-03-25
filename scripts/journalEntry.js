/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.date}" class="journalEntry">
        <p> date: ${entry.date}</p>
        <p> concept: ${entry.concept} </p>
        <p> entry: ${entry.entry}</p>
        <p> mood: ${entry.mood}</p>
        <p>
        <button id="deleteEntry--${entry.id}">Delete This Entry</button>
        </p>
        </section>
    `
}

export default JournalEntryComponent