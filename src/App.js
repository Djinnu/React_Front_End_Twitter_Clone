import React, { useState } from 'react'
import './App.css'
import CreateTweet from './components/CreateTweet'
import Tweet from './components/Tweet'
import Edit from './components/Edit'

const App = (props) => {
  const [tweets, setTweets] = useState([
    {

      id: 1,
      user: 'Scary Bruxa',
      text: "Wolves asleep amidst the trees. Bats all aswayin' in the breeze. But one soul lies anxious wide awake, fearing all manner of ghouls, hags and wraiths",
      edit: false,
      date: new Date().toString().slice(3, 21)
    },
    {
      id: 2,
      user: 'Geralt of Rivia',
      text: "Evil is evil. Lesser, greater, middling... Makes no difference. The degree is arbitrary. The definition's blurred. If I'm to choose between one evil and another... I'd rather not choose at all.",
      edit: false,
      date: new Date().toString().slice(3, 21)
    },
    {
      id: 3,
      user: 'Yennefer of Vengerberg',
      text: "Once you say 'I love you,' a kiss has to taste differently.",
      edit: false,
      date: new Date().toString().slice(3, 21)
    },
    {
      id: 4,
      user: 'Dandelion',
      text: "Sooner or later they'll come for everyone. Anyone they deem the 'other.'",
      edit: false,
      date: new Date().toString().slice(3, 21)
    },
    {
      id: 5,
      user: 'Geralt of Rivia',
      text: "I don't believe in Melitele, don't believe in the existence of other gods either...You ask what I believe in, in that case. I believe in the sword.",
      edit: false,
      date: new Date().toString().slice(3, 21)
    }
  ])
  
  
  const addTweet = (tweet) => {
    const id = tweets.length + 1
    const user = 'Lel alot'
    const newTweet = {id, user, ...tweet}
    setTweets([...tweets, newTweet])
  }

  const deleteTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id))
  }

  const toggleEdit = (id) => {
    setTweets(tweets.map((tweet) => {
      if(tweet.id === id) {
        let editedTweet = {...tweet}
        editedTweet.edit = !editedTweet.edit
        return editedTweet 
      } else {
        return tweet
      }
    }))
  }

  const saveChanges = (id, text) => {
    setTweets(tweets.map((tweet) => {
      if(tweet.id === id) {
        let newTweet = {...tweet, text: text, edit: false}
        return newTweet
      } else {
        return tweet
      }
    }))
  }

  return (
    <div className='App'>
      <CreateTweet onAdd={addTweet}/>
      {tweets.map(tweet => tweet.edit ? <Edit tweet={tweet} key={tweet.id} onEdit={saveChanges} onCancel={toggleEdit}/> : <Tweet tweet={tweet} key={tweet.id} onEdit={toggleEdit} onDelete={deleteTweet} />)}
    </div>
  )
}


export default App;
