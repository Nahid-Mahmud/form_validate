// console.log("hello");

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     checkInputs();
// })

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs(); 
});

function checkInputs(){
    //get valus from inputs  
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    if(usernameValue === ''){
        // show error
        //  and error class
        setErrorFor(username, 'User name can not be blank');
    }
    else{
        // Add success class 
        setSuccessFor(username);
    }
    if (emailValue === ''){
        setErrorFor(email, 'Email can not be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }
    else{
        setSuccessFor(email);
    }
    if(passwordValue === ''){
        // show error
        //  and error class
        setErrorFor(password, 'Password can not be blank');
    }
    else{
        // Add success class 
        setSuccessFor(password);
    }
    if(password2Value === ''){
        // show error
        //  and error class
        setErrorFor(password2, 'Password can not be blank');
    }
    else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Password Does not Match');
    }
    else{
        // Add success class 
        setSuccessFor(password2);
    }
    //Show success message
    
}
function setErrorFor(input,message){
    const formControl = input.parentElement;// .form-control
    const small = formControl.querySelector('small');
    // add the eror message inside small tag
    small.innerText = message;
    // add eror class
    formControl.className = 'form-control error';
} 
function setSuccessFor(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}