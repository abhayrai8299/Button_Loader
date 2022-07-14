import React,{useState } from 'react';
import './App.css';
import { Circles } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Modal} from 'react-bootstrap';


function App() {


  const [show, setShow] = useState(false);
  const [showpass,setShowPass]=useState(false)

  const [item,setitem]=useState("")
  const [pass,setpass]=useState("")
  const [disable, setDisable] = useState(false);
const [loading,setLoading]=useState(false);
const [active,setactive]=useState(false)


const handleInput=(e)=>{
   e.preventDefault();
    setitem(e.target.value);
}
const handlePassword=(e)=>{
  setpass(e.target.value);
}

 const handleLoader=()=>{
  if(item==="")
  {
    setShow(true)
    setTimeout(()=>{
      setShow(false)
    },2000)
  }
  else if(pass==="")
  {
    setShowPass(true)
    setTimeout(()=>{
      setShowPass(false)
    },3000)
  }
  else
  {
    setLoading(true);
    setDisable(true)
    setTimeout(()=>{
      setLoading(false)
      setactive(true)
    },3000)
  }
 }


  return (
    <div className="App">
      {active===false?
      <>
       <input type="text" placeholder="Enter Name"  onChange={handleInput}/><br />
       <input type="number" placeholder="Enter Password" onChange={handlePassword} /><br />
       <button disabled={disable}   onClick={handleLoader} style={{cursor:"pointer"}} type="button">{loading===false?"Login":<Circles color="#00BFFF" height={10} width={25}/>}</button>
       </>:<div style={{cursor:"pointer"}}>
        
       <Form className="d-flex justify-content-center mb-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        <h1>Welcome {item}</h1></div>}
       <Modal show={show} >
        <Modal.Header >
        </Modal.Header>
        <Modal.Body>Oooooppsss! Input cannot be Empty</Modal.Body>
      </Modal>
      <Modal show={showpass} >
        <Modal.Header >
        </Modal.Header>
        <Modal.Body>Oooooppsss! Password cannot be Empty</Modal.Body>
      </Modal>
    </div>

  );
}

export default App;
