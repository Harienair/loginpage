
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register(){
    const [name , setName] = useState('')
    const [phone , setPhone] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    
    
    async function registerUser(event){
        event.preventDefault()


        const response = await fetch("http://localhost:3001/register",{

        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },

        body: JSON.stringify({
            name,
            phone,
            email,
            password

        })
        })

 // eslint-disable-next-line
        const data = await response.json()
        //console.log(data);
        Navigate("/")


    } 

    let Navigate=useNavigate();

    


    return(
<div>
    <form onSubmit={registerUser}>
          <div className="sign-form ">
            <h1>signup Here</h1>
                    <label>
                        <input type="text"  name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                
                    </label>
                    <br/>
                    <label>
                        <input type="text"    name="phone" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <br/>
                    <label>
                        <input type="email"   name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </label>
                    <br/>
                    <label>
                        <input type="password"  name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                     </label>
                    <br/>
                    
                    <button   type="submit"  >Register</button> 
                  

            </div>
    
    
    </form>
</div>


    );
}

export default Register;