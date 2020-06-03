/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntries = [
    {
    date: "5/18/2020",
    concepts: "html, CSS, how to learn",
    mood: "Grumpy Cat",
    entry: "I'm baby schlitz vape farm-to-table mumblecore cold-pressed. Thundercats shoreditch +1, microdosing tilde photo booth organic everyday carry helvetica cred cronut narwhal master cleanse art party aesthetic. Chicharrones migas copper mug before they sold out, selfies typewriter cold-pressed trust fund iceland 3 wolf moon echo park direct trade forage artisan tilde. Gluten-free live-edge farm-to-table craft beer locavore church-key etsy air plant gochujang messenger bag. Normcore fam post-ironic taiyaki cornhole. Food truck mixtape freegan, snackwave fanny pack normcore activated charcoal austin iceland put a bird on it tilde lumbersexual helvetica cred. Tumeric direct trade intelligentsia, messenger bag beard aesthetic tbh adaptogen synth polaroid biodiesel. 3 wolf moon iPhone freegan lyft disrupt, four dollar toast kitsch. Mlkshk banjo man bun adaptogen iceland brooklyn."
    },
    {
    date: "5/22/2020",
    concepts: "html, CSS, github",
    mood: "Godlike",
    entry: "I'm baby schlitz vape farm-to-table mumblecore cold-pressed. Thundercats shoreditch +1, microdosing tilde photo booth organic everyday carry helvetica cred cronut narwhal master cleanse art party aesthetic. Chicharrones migas copper mug before they sold out, selfies typewriter cold-pressed trust fund iceland 3 wolf moon echo park direct trade forage artisan tilde. Gluten-free live-edge farm-to-table craft beer locavore church-key etsy air plant gochujang messenger bag. Normcore fam post-ironic taiyaki cornhole. Food truck mixtape freegan, snackwave fanny pack normcore activated charcoal austin iceland put a bird on it tilde lumbersexual helvetica cred. Tumeric direct trade intelligentsia, messenger bag beard aesthetic tbh adaptogen synth polaroid biodiesel. 3 wolf moon iPhone freegan lyft disrupt, four dollar toast kitsch. Mlkshk banjo man bun adaptogen iceland brooklyn."
    },
    {
    date: "5/25/2020",
    concepts: "groupwork, CSS, git",
    mood: "Sad Panda",
    entry: "I'm baby schlitz vape farm-to-table mumblecore cold-pressed. Thundercats shoreditch +1, microdosing tilde photo booth organic everyday carry helvetica cred cronut narwhal master cleanse art party aesthetic. Chicharrones migas copper mug before they sold out, selfies typewriter cold-pressed trust fund iceland 3 wolf moon echo park direct trade forage artisan tilde. Gluten-free live-edge farm-to-table craft beer locavore church-key etsy air plant gochujang messenger bag. Normcore fam post-ironic taiyaki cornhole. Food truck mixtape freegan, snackwave fanny pack normcore activated charcoal austin iceland put a bird on it tilde lumbersexual helvetica cred. Tumeric direct trade intelligentsia, messenger bag beard aesthetic tbh adaptogen synth polaroid biodiesel. 3 wolf moon iPhone freegan lyft disrupt, four dollar toast kitsch. Mlkshk banjo man bun adaptogen iceland brooklyn."
    }
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
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

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    for (const entries of journalEntries) {

        const entriesHTML = makeJournalEntryComponent(entries)

        const entriesArticleElement = document.querySelector(".entryLog")

        entriesArticleElement.innerHTML += entriesHTML
}
}

// Invoke the render function
renderJournalEntries(journalEntries)