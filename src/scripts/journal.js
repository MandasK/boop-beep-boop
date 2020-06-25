import API from './data.js'
import journalList from './entryList.js'
import makeEntry from './createEntry.js'
import updateFormFields from './updateFormFields.js'

const showEntries = () => {
  document.querySelector(".entryLog").innerHTML = ""
  API.getJournalEntries()
    .then(() => journalList.renderJournalEntries())
    
}

const clearInputs = () => {
  document.querySelector("#entryId").value = ""
  document.querySelector("#journalDate").value = ""
  document.querySelector("#conceptsCovered").value = ""
  document.querySelector("#mood").value = ""
  document.querySelector("#journalEntry").value = ""
}
const saveButton = document.querySelector("#submitdammit")
saveButton.addEventListener("click", clickevent => {
  const hiddenEntryID = document.querySelector("#entryId")
  const dateInput = document.querySelector("#journalDate")
    const conceptsInput = document.querySelector("#conceptsCovered")
    const moodInput = document.querySelector("#mood")
    const entryInput = document.querySelector("#journalEntry")

  if (hiddenEntryID.value !== "") {
    
    API.updateEntry(hiddenEntryID.value, makeEntry(dateInput.value, conceptsInput.value, moodInput.value, entryInput.value))
      .then(() => {
        API.getJournalEntries().then((response) => {
        journalList.renderJournalEntries(response)
        clearInputs()
      })
    })
  } else {
    if (dateInput.value !== "" && conceptsInput.value !== "" && moodInput.value !== "" && entryInput.value !== "") {
    const newEntry = makeEntry(dateInput.value, conceptsInput.value, moodInput.value, entryInput.value)
    API.saveJournalEntry(newEntry)

  } else {
    window.alert("Dwight, you ignorant slut--fill out the form!")

  }
}
})

const entriesContainer = document.querySelector(".entryLog")

export default {
  registerListeners() {
    entriesContainer.addEventListener("click", event => {
      if (event.target.id.startsWith("deleteEntry--")) {
        const entryToDelete =
          event.target.id.split("--")[1]
        API.deleteJournalEntry(entryToDelete)
          .then(showEntries)
      } else if (event.target.id.startsWith("editEntry--")) {
        const entryToEdit = event.target.id.split("--")[1]
        API.getSingleEntry(entryToEdit)
          .then(entry => updateFormFields(entry))
      }
    })
  }
  
}

makeEntry()
showEntries()

let searchBar = document.querySelector("#searchBar")

searchBar.addEventListener("keypress", event => {
  
  if (event.key === "Enter" && searchBar.value !== "") {
    const searchTerm = event.target.value
    let filteredSearch = ""
    API.getJournalEntries()
    .then(entries => {
      filteredSearch = entries.filter(entries => entries.concepts.includes(`${searchTerm}`) || entries.mood.includes(`${searchTerm}` || entries.entry.includes(`${searchTerm}`)))
      journalList.renderJournalEntries(filteredSearch)
    })
  }else {
    console.log("no match")
  }
})













// let radioButtons = document.getElementsByName("mood")

// radioButtons.forEach(button => {
//   button.addEventListener("click", event => {
//   const mood = event.target.value
//   API.getJournalEntries()
//   .then((response) => {
//         let filteredEntry = response.filter(filtered => {
//           return filtered.mood === mood
//         })
//         journalList.renderJournalEntries(filteredEntry)
//         searchElements.sortByObjectMaker()
//   })

// })
// })