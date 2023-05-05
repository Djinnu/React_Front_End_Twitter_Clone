import React, {useState} from 'react'

const Edit = ({tweet, onEdit, onCancel}) => {
  const [changedText, setChangedText] = useState(tweet.text)
  
  const handleChange = (e) => {
    setChangedText(e.target.value)
  }

  return (
    <div>
        <textarea onChange={handleChange} value={changedText}></textarea>
        <button onClick={()=>onEdit(tweet.id, changedText)} style={{backgroundColor: '#109de4'}}>Save</button>
        <button onClick={()=>onCancel(tweet.id)} style={{backgroundColor: '#808080'}}>Cancel</button>
    </div>
  )
}

export default Edit