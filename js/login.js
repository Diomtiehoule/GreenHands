const submit_button = document.querySelector('.btn')
const     button_register = document.getElementById('button')

submit_button.onclick = (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value;

    const pass = document.getElementById('password').value;

    let obj = {
        email : email,
        pass : pass
    }
    const dataAdmin = localStorage.getItem('administrateur');

 let  superAdmin = {
     email : 'ZackLeroi12@gmail.com',
     pass : 'ZackLeroi12',
     statut : 'superAdmin'
 }
 let admin = {
     email : 'DiomKarim@gmail.com',
     pass : 'Diom10',
     statut : 'admin'
 }
 
 localStorage.setItem('superAdmin' , JSON.stringify(superAdmin))
 localStorage.setItem('admin', JSON.stringify(admin))
    let tab = JSON.parse(dataAdmin);

    if( email == '' && pass == ''){
        swal("Ops...", "veuillez saisir tout les champs", "error");
    }else if(email == "" || pass == ""){
        swal("Ops...", "veuillez remplir le champs", "error");
    }else if(email == superAdmin.email && pass == superAdmin.pass) {
        sessionStorage.setItem('session', JSON.stringify(obj))
        swal("Authentification confirmée", "Bienvenue super administrateur", "success");
        window.location.replace("Tableau de bord.html");

    }else if(email == admin.email && pass == admin.pass){
        sessionStorage.setItem('session', JSON.stringify(obj))
        swal("Authentification confirmée", "Bienvenue administrateur", "success");
        window.location.replace("Tableau de bord.html");

    } else if( email != superAdmin.email || pass != superAdmin.pass){
        swal("Ops...", "Utilisateur inconnu", "error");
        
    }
}