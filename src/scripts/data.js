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
    },

    getSingleEntry: (id) => {
        return fetch(`http://localhost:8088/entries/${id}`)
        .then(response => response.json())
    },

    updateEntry: (id, updatedEntryObject) => {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "PUT",
        	headers: {
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify(updatedEntryObject)
        })
    },

    deleteJournalEntry: (id) => {
		return fetch(`http://localhost:8088/entries/${id}`, {
			method: "DELETE"
		}).then(response => response.json());
}
}

export default API;