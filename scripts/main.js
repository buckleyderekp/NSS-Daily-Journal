
import EntryListComponent from  "./journalEntryList.js";
import { useNotes, getNotes } from "./journalDataProvider.js";
import { RenderJounralForm } from "./JournalForm.js";


getNotes().then(useNotes)
EntryListComponent()
RenderJounralForm()