import React, {useState, useEffect} from "react";

function  Datapage (){
    const [details , setDetails] = useState([{
        name: '',
        phone: '',
        email: '',
        password: '',
    }])

    useEffect(() =>{
        fetch("/datapage").then(res =>{
            if(res.ok){
                return res.json()
            }

        }).then(jsonRes => setDetails(jsonRes));
    })
    

    return(
        <div>
            <h1>Data base details < a href="/">Home</a></h1>
            
            {
            details.map(content => 
            <div>
                <h5>{content.name}</h5>
                <p>{content.email}</p> 
                <p>{content.phone}</p>
                <p>{content.password}</p>   
            
            
            </div>
            
            )
            }


            
        </div>       
                
    );
}

export default Datapage;







