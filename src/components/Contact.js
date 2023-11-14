import React, {useState, useEffect} from 'react'
import './Homesty.css'

const Contact = () => {
     const [count, setCount] = useState(0)
     const [otherCount, setOtherCount] = useState(5)
// //useEffect without dependencies
//      useEffect(() => {
//       document.title = `${count} new message`;
//      }); //  everytime render takes place




// //useEffect with empty array
//      useEffect(() => {
//       document.title = `${count} new message`;
//      },[]); // onlyonce render takes place





// //useEffect with  array
useEffect(() => {
  document.title = `${otherCount} new message`;
 },[otherCount,count]); // onlyonce render takes place



  return (
    <>
    <div>USEEFFECT HOOK <br />
      useEffect(callback( Function Side Effect-Logic),dependencies(Array of variables)) <br />
      useEffect(callback(what to run), dependecies(when to run))
      <h1>variations of useEffect</h1>
      <p>useEffect without dependencies <br />
        useEffect with empty  array<br />
        useEffect with variables<br /></p>
    </div>
    <div>
          <h3>{count}old message</h3>
          <button onClick={()=>setCount(count +2 ) }>increase</button>
          <h3>{otherCount}new message</h3>
          <button onClick={()=>setOtherCount(otherCount + 10) }>increases  by 10</button>
   
    
    </div>
   </>
  )
}

export default Contact