
let delet = document.querySelector('.right')
let modif =  document.querySelector(".left")
let elem = document.querySelector('.attribut')


delet.forEach(key=>{
    key.addEventListener('click', supprimer)
})

function supprimer (e){
    document.getElementById(e.target.id.replace("right","attribut")).remove()
}

modif.forEach(key=>{
    key.addEventListener('click', modifier)
})

function modifier (e){
    if(document.querySelector(".annuler")){
        const btnAnnuler = document.querySelector('.annuler')

        var inpValName = document.getElementById(btnAnnuler.id.replace('annuler','nom')).value;
        document.getElementById(btnAnnuler.id.replace('annuler','nom')).remove();
        document.getElementById(btnAnnuler.id.replace('annuler','users')).textContent=inpValName;

        var inpValEmail = document.getElementById(btnAnnuler.id.replace('annuler','email')).value;
        document.getElementById(btnAnnuler.id.replace('annuler','email')).remove();
        document.getElementById(btnAnnuler.id.replace('annuler','contacts')).textContent=inpValEmail;

        var inpValMotPass = document.getElementById(btnAnnuler.id.replace('annuler','motPass')).value;
        document.getElementById(btnAnnuler.id.replace('annuler','motPass')).remove();
        document.getElementById(btnAnnuler.id.replace('annuler','counts')).textContent=inpValMotPass;


        let supp = document.createElement('button')
        supp.className='right'
        supp.id=btnAnnuler.id.replace('annuler','right')
        supp.textContent='supprimer'

        let btnModif = document.createElement('button')
        btnModif.id=btnAnnuler.id.replace('annuler','left')
        btnModif.className='left';
        btnModif.textContent='modifier';
        btnModif.addEventListener('click', modifier)
        const opt = document.getElementById(btnAnnuler.id.replace('annuler','option'));
        opt.append(btnModif);
        opt.append(supp)
        document.getElementById(btnAnnuler.id.replace('annuler','envoyer')).remove()
        btnAnnuler.remove()
        
    }
    let nom =  document.getElementById(e.target.id.replace('left',"users"));
    const inputName = document.createElement('input');
    inputName.value = nom.textContent;
    inputName.id = e.target.id.replace('left', 'nom')
    document.getElementById(e.target.id.replace('left','users')).textContent=""
    document.getElementById(e.target.id.replace('left','users')).append(inputName)

    let email =  document.getElementById(e.target.id.replace('left',"contacts"));
    const inputEmail = document.createElement('input');
    inputEmail.value = email.textContent;
    inputEmail.id = e.target.id.replace('left', 'email')
    document.getElementById(e.target.id.replace('left','contacts')).textContent=""
    document.getElementById(e.target.id.replace('left','contacts')).append(inputEmail)

    let motPass =  document.getElementById(e.target.id.replace('left',"counts"));
    const inputMotPass = document.createElement('input');
    inputMotPass.value = motPass.textContent;
    inputMotPass.id = e.target.id.replace('left', 'motPass')
    document.getElementById(e.target.id.replace('left','counts')).textContent=""
    document.getElementById(e.target.id.replace('left','counts')).append(inputMotPass)

    const envoyer = document.createElement('div')
    envoyer.className='envoyer'
    envoyer.id=e.target.id.replace('left','envoyer')
    envoyer.textContent="envoyer";
    console.log(envoyer)
    var option = document.getElementById(e.target.id.replace('left','option'))
    option.append(envoyer)

    
    const annuler = document.createElement('div')
    annuler.className= 'annuler'
    annuler.id=e.target.id.replace('left','annuler')
    annuler.textContent="annuler";
    option.append(annuler)

    document.getElementById(e.target.id.replace('left','right')).remove()
    document.getElementById(e.target.id).remove()







}




/*delet.addEventListener('click', e =>{
    elem.remove('active');
    
})*/

