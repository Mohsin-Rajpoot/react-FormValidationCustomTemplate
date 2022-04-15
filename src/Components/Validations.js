

function Validations(values) {
   let error = {}
   if(!values.name){
       error.name = "name is required";
   }
   if(!values.email.includes("@")){
       error.email = "email is invalid";
   }
   else if(!values.email){
       error.email = "email is required";
  }
   if(!values.password){
       error.password = "password is required";
   }
   else if(values.password.length<5 || values.password.length>8){
         error.password = "password length should be 5 to 8";
   }
   if(values.confirmPassword !== values.password){
       error.confirmPassword = "confirm password should match"
   }

  return error;

}

export default Validations;
