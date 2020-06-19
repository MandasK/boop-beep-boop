
import  API from './data.js'
import journalList from './entryList.js'
import makeEntry from './createEntry.js'

    API.getJournalEntries()
    .then(() => journalList.renderJournalEntries())


document.querySelector("#submitdammit").addEventListener("click", clickevent => {

const dateInput = document.querySelector("#journalDate")
const conceptsInput = document.querySelector("#conceptsCovered")
const moodInput = document.querySelector("#mood")
const entryInput = document.querySelector("#journalEntry")

  if(dateInput.value !== "" && conceptsInput.value !== "" && moodInput.value !== "" && entryInput.value !== "") {
    const newEntry = makeEntry(dateInput.value, conceptsInput.value, moodInput.value, entryInput.value)
      API.saveJournalEntry(newEntry)
    
  } else { window.alert("You're piece of shit fill out the form!")
         
    }
})


