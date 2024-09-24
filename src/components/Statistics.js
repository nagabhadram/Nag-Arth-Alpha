// src/components/Statistics.js

const Statistics = ({uniqueWordCount, charCount}) => (
  <div className="statistics">
    <p>Unique Word Count: {uniqueWordCount}</p>
    <p>Character Count (Excluding Spaces and Punctuation): {charCount}</p>
  </div>
)

export default Statistics
