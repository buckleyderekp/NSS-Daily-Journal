const contentTarget = document.querySelector("#showEntriesButton")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllEntries") {
        // Create a custom event to tell any interested component that the user wants to see notes
        const allNotesEvent = new CustomEvent("allEntriesClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(allNotesEvent)
    }
})

export const ShowNotesButton = () => {
    contentTarget.innerHTML = "<button id='showAllEntries'>Show All Entries</button>"
}