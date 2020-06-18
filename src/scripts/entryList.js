import makeJournalEntryComponent from './entryComponent.js'

const renderJournalEntries = (allEntries) => {
    
for (const entries of allEntries) {

    const entriesHTML = makeJournalEntryComponent(entries)

    const entriesArticleElement = document.querySelector(".entryLog")

    entriesArticleElement.innerHTML += entriesHTML
    
}
}

export default renderJournalEntries;