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


const Email=document.querySelector('.email');
const password=document.querySelector('.password');
const emailSpan=document.querySelector('.emailError');
const passwordSpan=document.querySelector('.passwordError');
const signUpform=document.querySelector('.signUp-form');
const EmailFactCheck=document.querySelector('.EmailFactCheck');
const PasswordFactCheck=document.querySelector('.PasswordFactCheck')
const submit=document.querySelector('.form-submit');
const details=document.querySelector('.details');
const passwordRequirment=document.querySelector('.Passowrd-requirments')


//form submission
submit.addEventListener('click',function(){
    ValidatingEMailAddress(Email.value);
    ValidatingPassword(password.value)
})

function ValidatingEMailAddress(email){
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(re.test(String(email).toLowerCase())){EmailFactCheck.style.opacity=1;
    emailSpan.style.display='none'}

else if(!email){emailSpan.style.opacity=1;
                emailSpan.innerHTML='Please type your email';}

else{emailSpan.style.opacity=1;
     emailSpan.innerHTML='invalid Email';
     }
}



function ValidatingPassword(psw){

    if(!psw){passwordSpan.innerHTML='Please type your Password';
             passwordSpan.style.opacity='1';}

    else{
        passwordSpan.style.opacity='0'
    }
}

//Hamburger menu
const Humburger=document.querySelector('.fa-bars');
const HumburgerMenu=document.querySelector('.hamburger-menu');

Humburger.addEventListener('click',function(){
    
    HumburgerMenu.classList.toggle('hamburger-menu-show-menu')
})

