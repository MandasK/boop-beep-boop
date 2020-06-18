const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry

    const journalEntryHTMLRepresentation =
     `<section class="entryLog__list">
    <ul>
        <li>Date: ${journalEntry.date}</li>
        <li>Mood: ${journalEntry.mood}</li>
        <li>Concepts Covered: ${journalEntry.concepts}  </li>
    </ul>
    </section>
    <section class="entrylog__entry">
    ${journalEntry.entry}
    </section>`

    return journalEntryHTMLRepresentation

}

export  default makeJournalEntryComponent;