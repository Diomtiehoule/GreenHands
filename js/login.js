const submit_button = document.querySelector('.btn')

submit_button.onclick = (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value;

    const pass = document.getElementById('password').value;


    const dataAdmin = localStorage.getItem('administrateur');

    
 localStorage.setItem('email', email)
 localStorage.setItem('password', pass)

 localStorage.getItem('email')
 localStorage.getItem('password')

 let  superAdmin = {
     email : 'ZackLeroi12@gmail.com',
     pass : 'ZackLeroi12'
 }
 let admin = {
     email : 'DiomKarim@gmail.com',
     pass : 'Diom10'
 }

    let tab = JSON.parse(dataAdmin);

    if( email == '' && pass == ''){
        swal("Ops...", "veuillez saisir tout les champs", "error");
    }else if(email == "" || pass == ""){
        swal("Ops...", "veuillez remplir le champs", "error");
    }else if(email == superAdmin.email && pass == superAdmin.pass) {
        
        swal("Authentification confirmée", "Bienvenue super admin", "success");

        window.location.replace("Tableau de bord.html");

        button_register.style.display = 'none';

    }else if( email != superAdmin.email || pass != superAdmin.pass){
        swal("Ops...", "Utilisateur inconnu", "error");
        
    }
}
 function superAdminZone(){
    
 }