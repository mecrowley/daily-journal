/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
  entries: [
    {
      id: 1,
      date: "04/07/2021",
      concept: "HTML & CSS",
      entry:
        "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "positive",
    },
    {
      id: 2,
      date: "04/16/2021",
      concept: "For..Of Loops",
      entry:
        "Learned about iterating through objects and arrays with for..of loops",
      mood: "whatever",
    },
    {
      id: 3,
      date: "04/22/21",
      concept: "Debugging",
      entry:
      "Steve demonstrated how to debug Bey's Blog using the developer tools",
      mood: "ok"
    }
  ],
};

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getEntries = () => {
  const copyOfData = [...database.entries];
  return copyOfData;
};
