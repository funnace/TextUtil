import React from 'react'

function Alert(props) {
    const caps= (word) =>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
  return (<div style={{height:"50px"}}>
    {props.alert &&  <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert"> 
  <strong>{caps(props.alert.type)}</strong>: {props.alert.msg}
</div>}
</div>
  )
}

export default Alert