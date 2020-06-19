import journalList from "./entryList.js"

const API = {
    journalEntries: [],

    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => {
                return response.json()
            })
            .then (arrayOfEntries => {
                this.journalEntries = arrayOfEntries
            })
    },

    saveJournalEntry (newEntryObject) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(() => API.getJournalEntries()).then(()  => journalList.renderJournalEntries(this.journalEntries) )
    }
    
}

export default API;