
// factory function that generate an object of journalentry
 const makeEntry = (date, concepts, mood, entry) => {
     const newEntry = {
         date: date,
         concepts: concepts,
         mood: mood,
         entry: entry
     }
     return newEntry
 }

 export default makeEntry