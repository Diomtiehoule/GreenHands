let btn = document.querySelector('.button')
let tab = document.querySelector('.array')
let UserId = document.querySelector('.id')
let UserName = document.querySelector('.user')
let UserContact = document.querySelector('.contact')
let UserCount = document.querySelector('.count')
let adminAction = document.querySelector('#action')

/* creer une nouvelle div pour un autre utilisateur */

btn.addEventListener('click', (e)=>{

    var div = document.createElement('div');
    div.style.marginLeft="250px";
    div.style.border="1px solid"
    div.style.paddingLeft="10px";
    div.style.paddingRight="70px";
    div.style.fontSize="1.3rem";
    div.style.width="1000px";
    div.style.height ="50px";
    div.style.display="flex";
    div.style.justifyContent="space-between";
    div.style.backgroundColor = 'white';
    console.log(div);

    tab.appendChild(div)

    
let id = document.createElement('label')
let nom = document.createElement('label')
let contact = document.createElement('label')
let compte = document.createElement('label')

id.textContent = UserId.value
nom.textContent = UserName.value
contact.textContent = UserContact.value
compte.textContent = UserCount.value

tab.appendChild(div)
div.appendChild(id)
div.appendChild(nom)
div.appendChild(contact)
div.appendChild(compte)

return false
})



