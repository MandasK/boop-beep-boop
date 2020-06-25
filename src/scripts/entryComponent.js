
    // Create your own HTML structure for a journal entry

const journalEntryHTMLRepresentation = {
    makeJournalEntryComponent (journalEntry) {
    return `<section class="entryLog__list">
    <ul>
        <li>Date: ${journalEntry.date}</li>
        <li>Mood: ${journalEntry.mood}</li>
        <li>Concepts Covered: ${journalEntry.concepts}  </li>
    </ul>
    </section>
    <section class="entrylog__entry">
    ${journalEntry.entry}
    <button id="editEntry--${journalEntry.id}">Edit</button>
    <button id="deleteEntry--${journalEntry.id}">Delete</button>
    </section>`
}
}

export  default journalEntryHTMLRepresentation;