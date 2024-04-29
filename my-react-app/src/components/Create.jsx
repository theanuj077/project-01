import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState(0);
  const [error,setError]=useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const addUser = {name,email,age}
    const response = await fetch("http://localhost:5002",{
      method:"POST",
      body : JSON.stringify(addUser),
      headers:{
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }
    if(response.ok){
      console.log(result);
      setError("");
      setName("");
      setEmail("");
      setAge(0);
      navigate('/all');
    }
  }

  return (
    <div >
    {error && <div class="alert alert-warning" >
  {error}
</div>}
     <h2 className="text-center">Enter data</h2>
     <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Name"
      value={name} onChange={(e)=>setName(e.target.value)}
    />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">E-mail</label>
    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="E-mail"
      value={email}  onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label >Age</label>
    <input type="number" className="form-control"  placeholder="Age"
      value={age}  onChange={(e)=>setAge(e.target.value)}
    />
  </div>
  {/* <div className="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Submit</button>
</form> 

    </div>
  )
  
}

export default Create
