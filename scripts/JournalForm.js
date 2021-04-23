export const JournalForm = () => {
    return `
    <form class="entryForm">
        <fieldset>
          <label for="entryDate">Date</label>
          <input type="date" name="entryDate" class="entryForm__date" />
        </fieldset>
        <fieldset>
          <label for="entryConcept">Concepts Covered</label>
          <input type="text" name="entryConcept" class="entryForm__concept" />
        </fieldset>
        <fieldset>
          <label for="journalEntry">Journal Entry</label>
          <textarea class="entryForm" name="jounralEntry"> </textarea>
        </fieldset>
        <fieldset>
          <label for="entryMood">Mood for the Day</label>
          <select name="entryMood" class="entryMood">
            <option value="positive">positive</option>
            <option value="ok">ok</option>
            <option value="ambivalent">ambivalent</option>
            <option value="whatever">whatever</option>
          </select>
        </fieldset>
        <button id="submit-entry">Record Journal Entry</button>
      </form>
    `
}