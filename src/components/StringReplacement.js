// src/components/StringReplacement.js

const StringReplacement = ({
  searchString,
  setSearchString,
  replaceString,
  setReplaceString,
  handleReplace,
}) => (
  <div className="string-replacement">
    <h2>String Replacement</h2>
    <input
      type="text"
      value={searchString}
      onChange={e => setSearchString(e.target.value)}
      placeholder="Search for..."
    />
    <input
      type="text"
      value={replaceString}
      onChange={e => setReplaceString(e.target.value)}
      placeholder="Replace with..."
    />
    {/* Add type attribute to the button */}
    <button type="button" onClick={handleReplace}>
      Replace All
    </button>
  </div>
)

export default StringReplacement
