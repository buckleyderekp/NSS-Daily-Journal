/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ecstatic"
    },
    {
        date: "02/27/2020",
        concept: "automating html rendering using javascript",
        entry: "we automated fish entry for martins aquarium using java script and it was confusing",
        mood: "Happy"
    },
    {
        date: "02/26/2020",
        concept: "hello world group project final",
        entry: "we played around with our hello world and tried key fram anumations",
        mood: "Indifferent"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}