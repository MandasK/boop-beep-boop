
// let journalEntries = []

// const getEntriesData = () => {
//     return fetch("http://localhost:8088/entries").then(
//         (httpResponse) => {
//             return httpResponse.json()
//         }
//     )

const url = "http://localhost:8088";



const API = {
    getJournalEntries () {
        return fetch(`${url}/entries`)
            .then(response => response.json());
    },

    addAJournal (journalObject) {
        return fetch(`${url}/entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalObject)
        }).then(response => response.json())
    }
    
}

export default API;
