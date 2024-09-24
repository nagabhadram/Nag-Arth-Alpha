const TextArea = ({text, handleTextChange}) => (
  <textarea
    value={text}
    onChange={e => handleTextChange(e.target.value)}
    rows="10"
    cols="50"
    placeholder="Type your text here..."
  />
)

export default TextArea
