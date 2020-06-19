
// factory function that generate an object of journalentry
 const makeEntry = (date, concepts, mood, entry) => {
     return {
         "date": date,
         "concepts": concepts,
         "mood": mood,
         "entry": entry
     }
 }

 export default makeEntry
