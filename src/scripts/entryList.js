import API from "./data.js"
import journalEntryHTMLRepresentation from './entryComponent.js'
import registerListeners from './journal.js'


const journalList = {

    renderJournalEntries (entries) {
        document.querySelector(".entryLog").innerHTML = ""
        for (const entry of API.journalEntries) {
        const entryHTML = journalEntryHTMLRepresentation.makeJournalEntryComponent(entry)
        document.querySelector(".entryLog").innerHTML += entryHTML
        }
        registerListeners.registerListeners()
    }
}
    
export default journalList;