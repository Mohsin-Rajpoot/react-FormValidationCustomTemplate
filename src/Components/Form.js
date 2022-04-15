import React, { useState } from 'react';
import Validations from './Validations';

function Form() {
  //states
    const[values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    
    const[errors,setErrors] = useState({});
    //submit keep track if the user press the submit button after
    //that it will check if the obj is empty or not
    const[isSubmit,setIsSubmit] = useState(false);
    
    //methods
    const setText = (e)=>{
      const {name,value} = e.target;
        setValues({...values,[name]: value});
    }
    const handleSubmit = (e) =>{
             e.preventDefault();
             setErrors( Validations(values));
             if(Object.keys(errors).length === 0 ){
        setIsSubmit(true);
      }
    } 

  return (
    <form>
      <h1>your form state</h1>
      {(Object.keys(errors).length === 0 && isSubmit)?
      <pre>submitted <h3 style={{display: "inline"}}>&#128054;</h3></pre>
      :<pre>{JSON.stringify(values)}</pre>}
      
        <label>name</label>
        <input type = "text" name = "name"
         value = {values.name} onChange={setText}/>
         {errors.name ? <small>{errors.name}</small>:""}
          <br/>
        <label>email</label>
        <input type ="email" name = "email"
         value = {values.email} onChange={setText}/> 
         {errors.email ? <small>{errors.email}</small>: ""}
         <br/>
        <label>password</label>
        <input type = "password" name = "password"
         value = {values.password} onChange={setText}/>
         {errors.password ? <small>{errors.password}</small>:""}
          <br/>
          <label>Confirm password</label>
        <input type = "password" name = "confirmPassword"
         value = {values.confirmPassword} onChange={setText}/>
         {errors.confirmPassword ? <small>{errors.confirmPassword}</small>:""}
          <br/>
          <button onClick={handleSubmit}>submit</button>
    </form>
  )
}

export default Form;