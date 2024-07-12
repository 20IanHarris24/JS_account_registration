//## Global Reference variables ##
const createAccount = document.querySelector(".acc-input");
const elementInput = createAccount.querySelectorAll(".input"); //for accessing all element of class input. 
const elementLabel = createAccount.querySelectorAll(".label"); //for accessing all element of class label.
const btnPress = createAccount.querySelector(".btn-press"); 

const fullName = createAccount.querySelector(".name-input");
const userName = createAccount.querySelector(".uname-input");
const email = createAccount.querySelector(".email-input");
const password = createAccount.querySelector(".pwd-input");
const confirmedPassword = createAccount.querySelector(".pwd-confirm");


elementInput.forEach((input)=>{
    
    input.addEventListener("mouseenter",()=>{
    input.classList.add("input-highlight");
    });
});
elementInput.forEach((input)=>{
    
    input.addEventListener("mouseleave",()=>{
    input.classList.remove("input-highlight");
    });
});

elementLabel.forEach((label)=>{
  
  label.addEventListener("click",()=>{
    let input = label.firstElementChild;
    highlight(label, input);
    });
});

elementLabel.forEach((label)=>{
  
  label.addEventListener("mouseleave",()=>{
    let input = label.firstElementChild;
    unlight(label, input);
    });
});

password.addEventListener("input",()=>{                     //Checking for password input.
  let pword = password.value.trim();
 
  if(pword.length > 8)
  {

     password.classList.remove("pwd-is-invalid");
    password.classList.add("pwd-is-valid");                    //Styling for an invalid input.
  } else{

        password.classList.add("pwd-is-invalid");               //Styling for an valid input.
        }

  //console.log("Password",pword);
});  
  
  confirmedPassword.addEventListener("input",()=>{
    let cPword = confirmedPassword.value.trim();
    
        
    if(cPword === password.value)
      {
                
        confirmedPassword.classList.remove("pwd-is-invalid");
        confirmedPassword.classList.add("pwd-is-valid");
        buttonOpen();
        
        
      } else{
        
        confirmedPassword.classList.add("pwd-is-invalid");
        buttonclosed();
        
      }
     
     });
    
  
    
//form submit with check


createAccount.addEventListener("submit", (event)=>{
  event.preventDefault();  //stops the window console default refresh behaviour
  
  const formPrint = {      // crete a form object to check for a completed form
    
    name: fullName.value,
    userName: userName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmedPassword.value, 
  }; 
  
      buttonconfirm(); 
      console.log("This is the object data: ",formPrint);
       
});

 
 

//###### Functions ###



function highlight(hig1, hig2){
  
  hig1.classList.add("label-highlight");
  hig2.focus();
}

function unlight(unl1, unl2){
  
  unl1.classList.remove("label-highlight");
  unl2.blur();
}


function buttonOpen(){
  
  btnPress.disabled = false;
  //btnPress.classList.remove("disabled");
  btnPress.innerText = "Sign up today";
  btnPress.classList.add("btn-style-formready");
  btnPress.classList.remove("btn-style-std");
  btnPress.classList.remove("btn-style-press");
}


function buttonclosed(){

  btnPress.disabled = true;
  //btnPress.classList.add("disabled");
  btnPress.innerText = "Sign Up!";
  btnPress.classList.add("btn-style-std");
  btnPress.classList.remove("btn-style-formready");
  btnPress.classList.remove("btn-style-press");
}

function buttonconfirm(){

  btnPress.disabled = true;
  //btnPress.classList.add("disabled");
  btnPress.innerText = "Information submited";
  btnPress.classList.add("btn-style-press");
  btnPress.classList.remove("btn-style-std");
  btnPress.classList.remove("btn-style-formready");
}





