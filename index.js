
const createAccount = document.querySelector(".acc-input");
const elementLabel = createAccount.querySelector(".label");
const elementInput = createAccount.querySelector(".input");
const btnPress = createAccount.querySelector(".btn-press"); 


createAccount.addEventListener("submit", (event)=>{
    event.preventDefault();

const name = createAccount.querySelector("#name");
const username = createAccount.querySelector("#username");
const email = createAccount.querySelector("#email");
const password = createAccount.querySelector("#password");
const confirmedPassword = createAccount.querySelector("#confirmP");

createAccount.addEventListener("click",()=>{
  if (passwordSubmitted.length >=8) {
    password.classList.add("pwd-is-valid");
      
      return;
    }
    password.classList.remove("pwd-is-valid");
    password.classList.add("pwd-is-invalid");

})


const nameSubmitted = name.value;
const usernameSubmitted = username.value;
const emailSubmitted = email.value;
const passwordSubmitted = password.value;
const confirmedPasswordSubmitted = passwordSubmitted.value;

btnPress.addEventListener("click",()=>{
        if(btnPress.classList.contains("btn-style-std"))
            
          {
            btnPress.classList.remove("btn-style-std");
            btnPress.classList.add("btn-style-press");
            btnPress.innerText = "You've signed up!";
            return;
          }
            
            btnPress.classList.remove("btn-style-press");
            btnPress.classList.add("btn-style-std");
            btnPress.innerText = "Sign up!";

            const formSubmit = {
            
                        name: nameSubmitted,
                        username: usernameSubmitted,
                        email: emailSubmitted,
                        password: passwordSubmitted,
                        } 
                        
                        
                        console.log(formSubmit);
 
      });





});     


 




