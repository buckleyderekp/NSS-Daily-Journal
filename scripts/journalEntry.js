/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.date}" class="journalEntry">
        <br>
        date: ${entry.date}<br>
        concept: ${entry.concept}<br>
        entry: ${entry.entry}<br>
        mood: ${entry.mood}<br>
        <br>

        </section>
    `
}

export default JournalEntryComponent