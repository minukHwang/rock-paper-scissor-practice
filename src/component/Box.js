import React from 'react'

const Box = (props) => {
    let result;

    if(props.title == "Computer"
    && props.judgement != "Tie"
    && props.judgement != "") {
        result = props.judgement == "Win"?"Lose":"Win"
    } else {
        result = props.judgement;
    }

  return (
    <div className={`box-item ${result}`}>
        <h1>{props.title}</h1>
        <img className='img-area' src = {props.item && props.item.img}/>
        <h2>{result}</h2>
    </div>
  )
}

export default Box