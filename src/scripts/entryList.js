
const renderJournalEntries = () => {
    
for (const entries of journalEntries) {

    const entriesHTML = makeJournalEntryComponent(entries)

    const entriesArticleElement = document.querySelector(".entryLog")

    entriesArticleElement.innerHTML += entriesHTML
    
}
}



