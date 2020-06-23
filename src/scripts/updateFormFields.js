
const updateFormFields = entry => {
    const hiddenEntryID = document.querySelector("#entryId")
    const entryDateInput = document.querySelector("#journalDate")
    const entryConceptsInput = document.querySelector("#conceptsCovered")
    const entryMoodInput = document.querySelector("#mood")
    const entryJournalInput = document.querySelector("#journalEntry")


    hiddenEntryID.value = entry.id
    entryDateInput.value = entry.date
    entryConceptsInput.value = entry.concepts
    entryMoodInput.value = entry.mood
    entryJournalInput.value = entry.entry
}




export default updateFormFields