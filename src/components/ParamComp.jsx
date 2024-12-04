import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const ParamComp = () => {
    const {id}=useParams();
    const location = useLocation();
    const navigate=useNavigate();
    function handleClick(){
      navigate('/');
    }
  return (
    <div>
        Params: {id}
        <p>{location.pathname==="/student/abcd"? <button onClick={handleClick}>Go to Home</button>: null}</p>
        
        <p>{location.pathname==="/student/123"? <button onClick={handleClick}>Go to Home</button>: null}</p>

    </div>
  )
}

export default ParamComp