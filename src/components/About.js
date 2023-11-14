import React, {useState} from 'react'
import './Homesty.css'

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

 const [details,setDetails] = useState({counter:0, name:""})
 function incremntCounter(){
  setDetails((prev)=>({
    ...prev,
    counter:prev.counter + 1,
  }));
 }  
 console.log(details);
 
 
 return (
    <><div>USESTATE HOOK
     <div>
       <input type="text" placeholder='Enter any word' onChange={(e) => setName(e.target.value)} />   {/*usestae in inputText */}
       <h1>{name} is clicked {counter} times</h1>
       <button onClick={increaeingCounter}>Increment</button>                     {/*usestae in onclickevent */}
     </div>
   </div><div>USESTATE HOOK using object method
       <div>
         <input type="text" placeholder='Enter any word' onChange={(e) => setDetails(e.target.value)} />   {/*usestae in inputText */}
         <h1>{details.name} is clicked {details.counter} times</h1>
         <button onClick={incremntCounter}>Increment</button>                     {/*usestae in onclickevent */}
       </div> 

     </div></>
  )
}

export default About