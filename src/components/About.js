import React, {useState} from 'react'

const About = () => {
    // const array = useState(0);
    // const counter =array[0];
    // const setCounter = array[1];
    // /console.log(array) ---it gives (2)[0,f]==> 0:0,1:f() len=2
    const [counter,setCounter] =  useState(0)
    const [name,setName] = useState("")
    
    function increaeingCounter(){
        setCounter(counter + 1);
    }

 
    return (
    <div>USESTATE HOOK
      <div>  
            <input type="text" placeholder='Enter any word' onChange={(e)=> setName(e.target.value)}/>   {/*usestae in inputText */}
            <h1>{name} is clicked {counter} times</h1>
            <button onClick={increaeingCounter}>Increment</button>                     {/*usestae in onclickevent */}  
        </div>
    </div>
  )
}

export default About