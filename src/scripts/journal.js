// /*
//     Define the keys and value for a JavaScript object that
//     represents a journal entry about what you learned today
// */
// let journalEntries = []

// const getEntriesData = () => {
//     return fetch("http://localhost:3000/entries").then(
//         (httpResponse) => {
//             return httpResponse.json()
//         }
//     )

//     .then(
//         (arrayOfEntries) => {
//             journalEntries = arrayOfEntries
//         }
//     )
// }

// // /*
// //     Purpose: To create, and return, a string template that
// //     represents a single journal entry object as HTML

// //     Arguments: journalEntry (object)
// // */
// const makeJournalEntryComponent = (journalEntry) => {
//     // Create your own HTML structure for a journal entry

//     const journalEntryHTMLRepresentation =
//      `<section class="entryLog__list">
//     <ul>
//         <li>Date: ${journalEntry.date}</li>
//         <li>Mood: ${journalEntry.mood}</li>
//         <li>Concepts Covered: ${journalEntry.concepts}  </li>
//     </ul>
//     </section>
//     <section class="entrylog__entry">
//     ${journalEntry.entry}
//     </section>`

//     return journalEntryHTMLRepresentation

// }

// // /*
// //     Purpose: To render all journal entries to the DOM

// //     Arguments: entries (array of objects)
// // */
// const renderJournalEntries = (entries) => {
//     for (const entries of journalEntries) {

//         const entriesHTML = makeJournalEntryComponent(entries)

//         const entriesArticleElement = document.querySelector(".entryLog")

//         entriesArticleElement.innerHTML += entriesHTML
// }
// }

// // // Invoke the render function



// getEntriesData().then(
//     () => {
//         renderJournalEntries(journalEntries)
//     }
// )
