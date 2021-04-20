import React,{useState} from 'react';
import "bulma";
import { useHistory } from "react-router-dom";
 const SignInComponent = () =>{
  let history = useHistory();
  
  const [values, setValues] = useState([]);

  // form Sigin Button 
    const handleSignIn  = (e) => {
     e.preventDefault();
    //  console.log(values);
     history.push("products");
     }

    return(
              <section class="hero is-primary is-fullheight ">
                   <div class="container " style={{ width:"80%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} >
                        <div class="box " style={{backgroundColor:"black" , width:"40%"}} >
                            <h1 class="title">Sign In</h1>
                            <p class="subtitle">Welcome in Ecommerce App</p>
                        </div>
                         <div style={{width:"40%"}}>

                            <form class="box" onSubmit={handleSignIn} >
                                <div class="field">
                                  <label class="label">Email</label>
                                  <div class="control">
                                    <input class="input" name="email" value={values.email} onChange= { (e) => setValues({ ...values, email : e.target.value }) } type="email" placeholder="e.g. alex@example.com"/>
                                  </div>
                                </div>

                                <div class="field">
                                  <label class="label">Password</label>
                                  <div class="control">
                                    <input class="input" NAME="password" value={values.password} onChange= { (e) => setValues({ ...values, password : e.target.value }) } type="password" placeholder="********"/>
                                  </div>
                                </div>

                                 <button class="button is-primary" type="submit">Sign in</button>
                             </form>
                          </div>
                    </div>
               </section>
           )
}

export default  SignInComponent;