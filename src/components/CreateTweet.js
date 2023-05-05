import React, {useState} from 'react'

const createTweetStyles = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px'
}


const buttonStyles = {
    backgroundColor: '#92d0f0',
    border: 'none',
    width: '100px',
    height: '40px',
    borderRadius: '5px',
    color: 'white',
    marginRight: '5px'
}

const CreateTweet = ({ onAdd }) => {
  const [wordCount, setWordCount] = useState(280)
  const [text, setText] = useState('')
  const [active, setActive] = useState(false)

  const handleChange = (e) => {
    setText(e.target.value)
    let maxWordCount = 280
    const count = e.target.value.length
    if(count > 0 && count <= 280) {
        setActive(true)
    } else {
        setActive(false)
    }
    const newCount = maxWordCount - count
    setWordCount(newCount)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    
    if(!text) {
        alert("Please write a tweet")
        return
    }
    onAdd({ text, date: new Date().toString().slice(3, 21)})
    setText("")
    setWordCount(280)
  }

  return (
    <form style={createTweetStyles}>
        <div>
            <div>
                <textarea placeholder="Tweet about something..."
                maxLength={280}
                cols='38'
                rows='10'
                onChange={handleChange}
                value={text}></textarea>
            </div>
            <p style={ wordCount > 0 ? {float: 'right', color: '#4ab3f4'} : {float:'right', color: 'red'}}>{wordCount}</p>
        </div>
        <button style={ active ? {...buttonStyles, backgroundColor: '#1da1f2'} : buttonStyles } onClick={handleAdd}>Tweet</button>
    </form>
  )
}

export default CreateTweet