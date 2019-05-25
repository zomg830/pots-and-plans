import React from 'react'
//does this need to be a class if using a styles object? 
function RandEventImg(props) {

  const styles = {
      width: "20vw",
      display: "block",
      margin: "0 Auto"
  }

  return (
    <img  
        src = { props.imgURL } 
        style = { styles }
    />
  )
}

export default RandEventImg
