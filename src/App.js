import { useEffect, useState } from 'react';
import './App.css';
import { Circles } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {

  
const [loading,setLoading]=useState(false);
const [active,setactive]=useState(false)
 const handleLoader=()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
      setactive(true)
    },3000)
 }


  return (
    <div className="App">
      {active===false?
      <>
       <input type="text" placeholder="Enter Name" /><br />
       <input type="number" placeholder="Enter Password" /><br />
       <button onClick={handleLoader} style={{cursor:"pointer"}} type="button">{loading===false?"Click Me!!":<Circles color="#00BFFF" height={15} width={15}/> }</button>
       </>:<div onClick={()=>setactive(false)} style={{cursor:"pointer"}}><h1>Welcome</h1></div>}
    </div>
  );
}

export default App;
