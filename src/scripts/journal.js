
import  API from './data.js'
import renderJournalEntries from './entryList.js'
import makeEntry from './createEntry.js'

    // API.getJournalEntries()
    // .then((entries) => renderJournalEntries(entries))

// In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. When the user clicks the button, you need to create a new entry in your API. The HTTP method that you use to create resources is POST. Guidance on syntax is provided below.

document.querySelector(".submitButton").addEventListener("click", clickevent =>
{

// use .value propery and document.querySelector to select input fields  and get what was typed/chosen
const date = document.querySelector("#journalDate").value
const concepts = document.querySelector("#conceptsCovered").value
const mood = document.querySelector("#mood").value
const entry = document.querySelector(".JournalEntry").value

// Use a conditional to ensure no blank entries. If any of the variables that you are using to store the .value property of the input fields is an empty string (""), then alert the user that the fields need to be complete.
  if(date === "" || concepts === "" || mood === "" || entry === "") {
    alert("You must fill out all forms and resubmit")
    
  } else {
      let newEntry = makeEntry(date, concepts, mood, entry)

      API.saveJournalEntry(newEntry)
         .then(() => {
            return API.getJournalEntries()
    })
         .then((allObjectsFromAPI) => {
            return renderJournalEntries(allObjectsFromAPI)
    })
  }
})

