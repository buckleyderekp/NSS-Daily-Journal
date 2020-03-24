
import { EntriesList } from  "./journalEntryList.js";
import { useNotes, getNotes } from "./journalDataProvider.js";
import { RenderJounralForm } from "./JournalForm.js";
import { ShowNotesButton } from "./notes/showNotesButton.js";


getNotes().then(useNotes).then(EntriesList)

RenderJounralForm()
ShowNotesButton()