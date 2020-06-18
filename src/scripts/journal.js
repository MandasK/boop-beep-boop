/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/



// getEntriesData().then(
//     () => {
//         renderJournalEntries(journalEntries)
//     }
// )

import  API from './data.js'
import renderJournalEntries from './entryList.js'

API.getJournalEntries()
    .then((response) => renderJournalEntries(response))

// In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. When the user clicks the button, you need to create a new entry in your API. The HTTP method that you use to create resources is POST. Guidance on syntax is provided below.

