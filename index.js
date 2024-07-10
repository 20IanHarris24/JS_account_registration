//## Global Reference variables ##
const createAccount = document.querySelector(".acc-input");
const elementInput = createAccount.querySelectorAll(".input"); //for accessing all element of class input. 
const elementLabel = createAccount.querySelectorAll(".label"); //for accessing all element of class label.
const btnPress = createAccount.querySelectorAll(".btn-press"); 




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


//console.log(elementLabel);
elementLabel.forEach((label)=>{
  label.addEventListener("click",()=>{
    let input = label.firstElementChild;
    highlight(label, input);
    });
});

elementLabel.forEach((label)=>{
  label.addEventListener("dblclick",()=>{
    let input = label.firstElementChild;
    unlight(label, input);
    });
});





console.log(elementLabel);
//console.log(btnPress);


elementLabel.forEach((label)=>{
    let button = label.firstElementChild;
    console.log(button);
    
    btn-press.addEventListener("click",()=>{
      emptyFields(button);
     
    console.log("reached this part of code");
    
   
    });
});






//###### Functions ###
function highlight(hig1, hig2){
  hig1.classList.add("label-highlight");
  hig2.classList.add("label-highlight-rim");
  hig2.focus();
  
}

function unlight(unl1, unl2){
  unl1.classList.remove("label-highlight");
  unl2.classList.remove("label-highlight-rim");
  unl2.blur();
  
}

function emptyFields(btn){
     let test = btn.value;
    if (test == null || test ==""){

      alert("Each field must be completed");
    }
  }

  function verifyPassword(){

      var pw = document.getElementById("password").value;
      //check empty password field
      if(pw == "") {
         alert("This field needs to be completed");
         return false;
      }
     
     //minimum password length validation
      if(pw.length < 8) {
         document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
         return false;
      }
    
    //maximum length of password validation
      if(pw.length > 15) {
         document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
         return false;
      } else {
         alert("Password is correct");
      }
    }
  }





// createAccount.addEventListener("submit", (event)=>{
//     event.preventDefault();

// const name = createAccount.querySelector("#name");
// const username = createAccount.querySelector("#username");
// const email = createAccount.querySelector("#email");
// const password = createAccount.querySelector("#password");
// const confirmedPassword = createAccount.querySelector("#confirmP");

// createAccount.addEventListener("click",()=>{
//   if (passwordSubmitted.length >=8) {
//     password.classList.add("pwd-is-valid");
      
//       return;
//     }
//     password.classList.remove("pwd-is-valid");
//     password.classList.add("pwd-is-invalid");

// })


// const nameSubmitted = name.value;
// const usernameSubmitted = username.value;
// const emailSubmitted = email.value;
// const passwordSubmitted = password.value;
// const confirmedPasswordSubmitted = passwordSubmitted.value;

// btnPress.addEventListener("click",()=>{
//         if(btnPress.classList.contains("btn-style-std"))
            
//           {
//             btnPress.classList.remove("btn-style-std");
//             btnPress.classList.add("btn-style-press");
//             btnPress.innerText = "You've signed up!";
//             return;
//           }
            
//             btnPress.classList.remove("btn-style-press");
//             btnPress.classList.add("btn-style-std");
//             btnPress.innerText = "Sign up!";

//             const formSubmit = {
            
//                         name: nameSubmitted,
//                         username: usernameSubmitted,
//                         email: emailSubmitted,
//                         password: passwordSubmitted,
//                         } 
                        
                        
//                         console.log(formSubmit);
 
//       });





// }); 