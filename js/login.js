const submit_button = document.querySelector('.btn')


submit_button.onclick = (e) => {

    e.preventDefault();
    const email = document.getElementById('email').value;

    const pass = document.getElementById('password').value;

    localStorage.setItem('email', email)
    localStorage.setItem('password', pass)

    localStorage.getItem('email')
    localStorage.getItem('password')

    let superAdmin = {
        email : 'ZackLeroi12@gmail.com',
        pass : 'ZackLeroi12'
    }
    if( email == '' && pass == ''){
        swal("Ops...", "veuillez saisir tout les champs", "error");
    }else if(email == "" || pass == ""){
        swal("Ops...", "veuillez remplir le champs", "error");
    }else if(email == "ZackLeroi12@gmail.com" && pass == "ZackLeroi12") {
        
        swal("Authentification confirmée", "Bienvenue super admin", "success");

        { location.href="../html/Tableau de bord.html"; }
        getElementByName('gts_utilisateur1.html')

    }else if( email != superAdmin.email || pass != superAdmin.pass){
        swal("Ops...", "Utilisateur inconnu", "error");
    }
}
 function superAdminZone(){
    
 }