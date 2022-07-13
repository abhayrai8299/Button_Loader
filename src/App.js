import React,{useState } from 'react';
import './App.css';
import { Circles } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {

  const [item,setitem]=useState("")
  const [disable, setDisable] = useState(false);
const [loading,setLoading]=useState(false);
const [active,setactive]=useState(false)

const handleInput=(e)=>{
    setitem(e.target.value);
}

const handlereset=()=>{
  setactive(false);
   setDisable(false);
}
 const handleLoader=()=>{
    setLoading(true);
    setDisable(true)
    setTimeout(()=>{
      setLoading(false)
      setactive(true)
    },3000)
 }


  return (
    <div className="App">
      {active===false?
      <>
       <input type="text" placeholder="Enter Name"  onChange={handleInput}/><br />
       <input type="number" placeholder="Enter Password" /><br />
       <button disabled={disable}   onClick={handleLoader} style={{cursor:"pointer"}} type="button">{loading===false?"Login":<Circles color="#00BFFF" height={10} width={25}/>}</button>
       </>:<div onClick={()=>handlereset()} style={{cursor:"pointer"}}><h1>Welcome {item}</h1></div>}
    </div>
  );
}

export default App;
