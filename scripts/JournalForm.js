const contentTargetJournalForm = document.querySelector(".container")

const eventHub = document.querySelector(".container")

export const RenderJounralForm = () => {
    contentTargetJournalForm.innerHTML = `
<header>
<div class="main">
<h1>Daily Journal</h1>
</header>
<form action="" class="form">
<fieldset class= "fieldsets">
    <label for="journalDate">Date of Entry:</label>
    <input type="date" name="journalDate" id="journalDate">
</fieldset>
<fieldset class="fieldsets">
    <label for="conecptsCovered" class ="concepts">Concepts Covered:</label>
    <input type="text" name="conceptsCovered" id="conceptsCovered" class ="concepts">
</fieldset>
<fieldset class="fieldsets">
    <label for="journalEntry" class="journalEntry">Journal Entry:</label>
    <textarea name="journalEntry" id="journalEntry" class = "journalEntry" cols="30" rows="5"></textarea>
</fieldset>
<fieldset class="fieldsets">
    <select name="moodOfTheDay" id="moodOfTheDay">
        <option value="ecstatic">Ecstatic</option>
        <option value="happy">Happy</option>
        <option value="indifferent">Indifferent</option>
        <option value="sad">Sad</option>
        <option value="abyssOfDespair">Abyss of Despair</option>
    </select>
</fieldset>
    <input type="submit"  id = "saveJournalEntry" value="Record Journal Entry">
</form>
</div>`
}

let visibility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

// Handle browser-generated click event in component
contentTargetJournalForm.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntry") {

        const journalDate = document.querySelector("#journalDate").value
        const conceptsCovered = document.querySelector("#conceptsCovered").value
        const journalEntry = document.querySelector("#journalEntry").value
        const moodOfTheyDay = document.querySelector("#moodOfTheDay").value

        // Make a new object representation of a note
        const newNote = {
            date: journalDate,
            concept: conceptsCovered,
            entry: journalEntry,
            mood: moodOfTheyDay
        }

        // Change API state and application state
        saveNote(newNote)
    }
})