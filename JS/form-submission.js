


const formContainer=document.querySelector('.form-container');
//changing background images
window.addEventListener('load',function(){
    let randomNumber=Math.floor(Math.random()*3)
    formContainer.style.backgroundImage=`url(img${randomNumber}.jpg)`;
    formContainer.classList.add('FixingBackgroundImage')
})


const explore=document.querySelector('.explore');
const menu=document.querySelector('.menu');
const signup=document.querySelector('.signup')
const form=document.querySelector('.signUp-form')

//showing menu when explore button is clicked on
explore.addEventListener('click',function(){
    menu.classList.toggle('show-menu');
})


const User=document.querySelector('.user');
const Email=document.querySelector('.email');
const password=document.querySelector('.password');
const emailSpan=document.querySelector('.emailError');
const userSpan=document.querySelector('.usernameError');
const passwordSpan=document.querySelector('.passwordError');
const signUpform=document.querySelector('.signUp-form');
const usernameFactCheck=document.querySelector('.usernameFactCheck');
const EmailFactCheck=document.querySelector('.EmailFactCheck');
const PasswordFactCheck=document.querySelector('.PasswordFactCheck')
const submit=document.querySelector('.form-submit');
const passwordRequirment=document.querySelector('.Passowrd-requirments')
const details=document.querySelector('.details');




//form submission
submit.addEventListener('click',function(){
    ValidatingEMailAddress(Email.value);
    ValidatingUserName(User.value)
    ValidatingPassword(password.value)
})

function ValidatingEMailAddress(email){
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(re.test(String(email).toLowerCase()))

{EmailFactCheck.style.opacity=1;
emailSpan.style.display='none'
    }
else if(!email){emailSpan.style.opacity=1;
                emailSpan.innerHTML='Please type your email';}

else{emailSpan.style.opacity=1;
     emailSpan.innerHTML='invalid Email';
     }
}

function ValidatingUserName(user){
    if(!user){userSpan.innerHTML='please type your username';
                    userSpan.style.opacity='1'}

    else if(user.length>15){userSpan.style.opacity='1';
                                  userSpan.innerHTML='the username should not exceed 15 characters'}

    else{usernameFactCheck.style.opacity=1;
        userSpan.style.display='none'}

}


function ValidatingPassword(psw){

    let validpassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,18}$/;
    if(!psw){passwordSpan.innerHTML='Please type your Password';
             passwordSpan.style.opacity='1';}

    else if(psw.match(validpassword)){PasswordFactCheck.style.opacity=1;
    passwordRequirment.classList.remove('show-Password-requirments');
    details.style.height='30vh'
    signUpform.style.height='80vh';
    passwordSpan.style.display='none'
   


}

    else{
        passwordRequirment.classList.add('show-Password-requirments')
        details.style.height='38vh'
        signUpform.style.height='95vh';
    }
}

//Hamburger menu
const Humburger=document.querySelector('.fa-bars');
const HumburgerMenu=document.querySelector('.hamburger-menu');

Humburger.addEventListener('click',function(){
    
    HumburgerMenu.classList.toggle('hamburger-menu-show-menu')
})