import React, { useState, useEffect } from 'react';

/*
Quick Description:
Component responsible for loading more Questions if there is more than 1 per product ID. Similar LoadMoreAns component, it takes in props that has a function and length.
The onClick handler allows it to change from More to Less questions based on a boolean flag set up in Q&A-items.

*/

const style = {
  float: 'left',
  maxWidth: '200px',
  // position: 'relative',
	// display: 'flex',
	// flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '15.5rem',
	margin: '0',
	padding: '1.5rem 2.125rem',
	backgroundColor: '#BDC3C7',
	border: '1px',
	borderRadius: '0.3125rem',
	boxShadow: '0 12px 24px 0 rgba(0,0,0,0.2)'
}



function LoadMoreQs(props) {
  console.log(props);
  const [isLoaded, setLoaded] = useState(false)

  const handleIfLoaded = (event) => {
    setLoaded(!isLoaded)
  }

  if (props.loadMore.leng < 3) {
    return (<button>THERE ARE NO MORE QUESTIONS</button>)
  }

  if (isLoaded) {
    return (
      <div>
      <button className='addQuestions' style={style} type='submit' onClick={(event) => {props.loadMore.func(), handleIfLoaded()} } >LESS ANSWERED QUESTIONS</button>
    </div>
    )
  }


  return(
    <div>
      <button className='addQuestions' style={style} type='submit' onClick={(event) => {props.loadMore.func(), handleIfLoaded()} } >MORE ANSWERED QUESTIONS</button>
    </div>
  )


};

export default LoadMoreQs;