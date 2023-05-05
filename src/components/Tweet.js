import React from 'react';
import Avatar from '@mui/material/Avatar';


const footerStyles = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '15px'
}

const headerStyles = {
    display: 'flex',
    alignItems: 'center'
}

const Tweet = ({tweet, onEdit, onDelete}) => {
  return (
    <div className="tweet">
        <header style={headerStyles}>
            <Avatar style={{marginRight:"10px", cursor:"pointer"}}/>
            <h4>{tweet.user}
                <span className="handler">@{tweet.user.split(" ")[0]}</span>
            </h4>
        </header>
        <p>{tweet.text}</p>
        <footer style={footerStyles}>
            <div className="options">
                <i className="fa-regular fa-pen-to-square fa-xl icons"
                    onMouseEnter={(e)=> e.target.style.color="#21a2f2"} 
                    onMouseLeave={(e)=> e.target.style.color="#92d0f0"}
                    onClick={()=> onEdit(tweet.id)}></i>
                <i className="fa-regular fa-trash-can fa-xl icons" 
                    onMouseEnter={(e)=> e.target.style.color="#c73e3e"} 
                    onMouseLeave={(e)=> e.target.style.color='#92d0f0'}
                    onClick={()=> onDelete(tweet.id)}></i>
            </div>
            <div className="options">
                <i className="fa-regular fa-comment fa-xl icons"
                    onMouseEnter={(e)=> e.target.style.color="#21a2f2"} 
                    onMouseLeave={(e)=> e.target.style.color='#92d0f0'}></i>
                <i className="fa-regular fa-heart fa-xl icons"
                    onMouseEnter={(e)=> e.target.style.color="#c73e3e"} 
                    onMouseLeave={(e)=> e.target.style.color='#92d0f0'}></i>
                <i className="fa-sharp fa-solid fa-retweet fa-xl icons"
                    onMouseEnter={(e)=> e.target.style.color="#21c169"} 
                    onMouseLeave={(e)=> e.target.style.color='#92d0f0'}></i>
            </div>            
            <p>{tweet.date}</p>
        </footer>
    </div>
  )
}

export default Tweet