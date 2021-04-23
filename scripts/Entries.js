/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getEntries } from "./database.js"



export const Entries = () => {
    const entries = getEntries()
    let allEntriesAsHTML = '<h2 class="pastEntries">Past Entries</h2>'


    for (const entry of entries) {
        allEntriesAsHTML += `
           <section class="entry"><div class="date">Date: ${entry.date}</div>
           <div class="concept">Concept: ${entry.concept}</div>
           <div class="entryText">Entry: ${entry.entry}</div>
           <div class="mood">Mood: ${entry.mood}</div></section>
        `
    }

    return allEntriesAsHTML
}