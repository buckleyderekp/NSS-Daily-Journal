
import EntryListComponent from  "./journalEntryList.js";
import { useNotes, getNotes } from "./journalDataProvider.js";


getNotes().then(useNotes)
EntryListComponent()