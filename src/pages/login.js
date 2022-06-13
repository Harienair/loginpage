import React , {useState}  from "react";
import { useNavigate } from "react-router-dom";



function Login(){
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    
    async function loginUser(event){
        event.preventDefault()
        const response = await fetch("http://localhost:3001/login",{

        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email,
            password

        })
        })

        const data = await response.json()

        if(data.user){
            
           Navigate("/datapage")
        }
        else{
            alert('please check your username and password')
        }
        //console.log(data);

    } 

    let Navigate=useNavigate();


    
    return(
<div>
 
    <form onSubmit={loginUser} >
       
            <div className="log-form ">
            <h1> Login Here</h1>
                <label>
                        <input type="email"   name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </label>
                    <br/>
                    <label>
                        <input type="password"  name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br/>
                   
                    <button  type="submit">Login in</button> 
              
               

            </div>

    </form>

</div>

    );
}

export default Login;