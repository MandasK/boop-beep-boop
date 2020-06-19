import API from "./data.js"
import journalEntryHTMLRepresentation from './entryComponent.js'



const journalList = {

    renderJournalEntries (entries) {
        document.querySelector(".entryLog").innerHTML = ""
        for (const entry of API.journalEntries) {
        const entryHTML = journalEntryHTMLRepresentation.makeJournalEntryComponent(entry)
        document.querySelector(".entryLog").innerHTML += entryHTML
        }
    }
}
    

export default journalList;