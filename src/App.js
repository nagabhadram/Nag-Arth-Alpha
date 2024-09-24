import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import TextArea from './components/TextArea'
import Statistics from './components/Statistics'
import StringReplacement from './components/StringReplacement'
import HighlightedText from './components/HighlightedText'

function App() {
  const [text, setText] = useState('')
  const [searchString, setSearchString] = useState('')
  const [replaceString, setReplaceString] = useState('')
  const [uniqueWordCount, setUniqueWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [highlightedText, setHighlightedText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const computeUniqueWordCount = inputText => {
    const words = inputText
      .replace(/[^\w\s]/gi, '')
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
    const uniqueWords = new Set(words)
    setUniqueWordCount(uniqueWords.size)
  }

  const computeCharCount = inputText => {
    const chars = inputText.replace(/[^A-Za-z0-9]/g, '')
    setCharCount(chars.length)
  }

  useEffect(() => {
    computeUniqueWordCount(text)
    computeCharCount(text)
  }, [text])

  const highlightReplacedWords = (search, replace) => {
    const parts = text.split(search)
    const highlighted = parts.map((part, index) => (
      <React.Fragment key={uuidv4()}>
        {part}
        {index < parts.length - 1 && (
          <span className="highlight">{replace}</span>
        )}
      </React.Fragment>
    ))
    setHighlightedText(highlighted)
  }

  const handleReplace = () => {
    if (searchString.trim() === '') {
      setErrorMessage('Please enter a search string.')
      return
    }

    setErrorMessage('')
    const replacedText = text.split(searchString).join(replaceString)
    setText(replacedText)
    highlightReplacedWords(searchString, replaceString)
  }

  return (
    <div className="container">
      <h1>Real-Time Text Analysis and String Replacement</h1>
      <TextArea text={text} handleTextChange={setText} />
      <Statistics uniqueWordCount={uniqueWordCount} charCount={charCount} />
      <StringReplacement
        searchString={searchString}
        setSearchString={setSearchString}
        replaceString={replaceString}
        setReplaceString={setReplaceString}
        handleReplace={handleReplace}
      />
      {highlightedText && <HighlightedText highlightedText={highlightedText} />}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  )
}

export default App
