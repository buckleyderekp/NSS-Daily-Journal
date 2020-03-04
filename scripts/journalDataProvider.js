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
        id: 1,
        date: "07/24/2025",
        concept: "Test",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ecstatic"
    },
    {
        id: 2,
        date: "02/27/2020",
        concept: "automating html rendering using javascript",
        entry: "we automated fish entry for martins aquarium using java script and it was confusing",
        mood: "Happy"
    },
    {
        id: 3,
        date: "02/26/2020",
        concept: "hello world group project final",
        entry: "we played around with our hello world and tried key fram anumations",
        mood: "Indifferent"
    },
    {
        id: 4,
        date: "02/28/2020",
        concept: "automating event listeners",
        entry: "automated event listeners for martins aquarium also went out as a group friday evening and met some people from other cohorts",
        mood: "Happy"
    },
    {
        id:5,
        date: "03/02/2020",
        concept: "ordering fish by length",
        entry: "changed fish to be ordered by multiples of 3 then 5 and then everything else. Didn't get it to work before EOD",
        mood: "Happy"
    },
    {
        id: 6,
        date: "03/03/2020",
        concept: "classes cancelled",
        entry: "Tornadoes",
        mood: "Sad",
    },
    {
        id: 7,
        date: "03/04/2020",
        concept: "Automating Hello World",
        entry: "classes cancelled again but I cam in anyway. finished ordering the fish and used javascript to automate html for lists on country page",
        mood: "Happy",
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