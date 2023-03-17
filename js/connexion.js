const formulaire = document.querySelectorAll('.formLogIn')
const email = document.querySelectorAll('#email')
const key = document.querySelectorAll('#password')

const button = document.querySelector('.btn')




button.addEventListener('click', e =>{

    ValidateInputs();

})
 
const ValidateInputs = () => {
    const emailValue = email.value.trim();
    const keyValue = key.value.trim();

    if(emailValue === 'ZackLeroi12@gmail.com'){
        setSuccess(email)
    }else{
        alert('aucun compte associé')
    }

    if(keyValue === 'Zack15'){
        setSuccess(key)
    }else{
        alert('incorrect')
    }
}
console.log(ValidateInputs)

formulaire.addEventListener('submit', e =>{

    e.preventDefault();

    ValidateInputs();
})

