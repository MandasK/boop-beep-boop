
let journalEntries = []
const getEntriesData = () => {
    return fetch("http://localhost:8088/entries").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )

    .then(
        (arrayOfEntries) => {
            journalEntries = arrayOfEntries
        }
    )
}

// const API = {
//     getJournalEntries ()  {
//         return fetch("http://localhost:8088/entries").then
//         (response => {return response.json()})
        
//         .then(
//             (arrayOfEntries) => {
//                 journalEntries = arrayOfEntries
//             }
//         )
   
// }

