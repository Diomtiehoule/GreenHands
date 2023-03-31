document.getElementById('submit').addEventListener('click', payement)
const btn = document.getElementById('button')
const nom = document.getElementById('nomUser')
    const taches = document.getElementById('taskes')
    const remuneration = document.getElementById('remuns')

function payement(){
    
    const tab = [];
    const resultat = {
        nom : nom.value,
        taches : taches.value,
        remuneration : remuneration.value,
        statut : 1,
    }

    const dataResultat = localStorage.getItem('resultat');
    let tabJ = JSON.parse(dataResultat);
    if(!dataResultat){
        tab.push(resultat);
        localStorage.setItem('resultat',JSON.stringify(tab))
    }else{
        tabJ.push(resultat);
        localStorage.setItem("resultat",JSON.stringify(tabJ));

        

    }
    const line = document.createElement('div');
        line.className='attribut';
       line.id='attributs'+resultat.id.replace('vu','');
        const nomT = document.createElement('p')
        nomT.id='nomUser'+(tabJ.length+1);
        nomT.textContent=resultat.nom
        line.append(nom)
        
        const task = document.createElement('p')
        task.id='taskes'+(tabJ.length+1);
        task.textContent=resultat.taches
        line.append(task)

        const remun = document.createElement('p')
        remun.id='remuns'+(tabJ.length+1);
        remun.textContent=resultat.remuneration
        line.append(remun)

        // const Cmoney = document.createElement('p')
        // Cmoney.id='count'+(tabJ.length+1);
        // Cmoney.textContent=resultat.remuneration
        // line.append(Cmoney)

        const actions = document.createElement('p')
        actions.id='action'+(tabJ.length+1);
        line.append(actions)
        const option = document.createElement('div')
        option.className='option';
        option.id='option'+(tabJ.length+1);
        actions.append(option)
        const valid = document.createElement('radio')
        valid.className='done';
        valid.textContent=''
        valid.id='dones'+(tabJ.length+1);
        option.append(valid)
        const right = document.createElement('radio')
        right.className='right';
        right.textContent='';
        right.id='rights'+(tabJ.length+1);
        action.append(right);
        document.getElementById("array").append(line)

}

const  selectUser =JSON.parse(localStorage.getItem('resultat'))

function affiche(params){
    if((params.length != 0)){
        params.forEach(element => {
            const line = document.createElement('div');
            line.className='attribut';
            /*line.id='attribut'+element.id.replace('tch','');
            const idt = document.createElement('p')
            idt.id="ids"+element.id
            idt.textContent=element.id
            line.append(idt)*/
            const user = document.createElement('p')
            user.id='nomUser'+element.id;
            user.textContent=element.nom
            line.append(user)
           
            const task = document.createElement('p')
            task.id='taskes'+element.id;
            task.textContent=element.taches
            line.append(task)
            const remun = document.createElement('p')
            remun.id='remuns'+element.id;
            remun.textContent=element.remuneration
            line.append(remun)
            // const Cmoney = document.createElement('p')
            // Cmoney.id='count'+element.id;
            // Cmoney.textContent=element.compte
            // line.append(Cmoney)
            const actions = document.createElement('p')
            actions.id='action'+element.id;
            line.append(actions)
            const option = document.createElement('div')
            option.className='option';
            option.id='option'+element.id;
            actions.append(option)
            const valid = document.createElement('radio')
            valid.className='done';
            valid.textContent=''
            valid.id='dones'+element.id;
            option.append(valid)
            const right = document.createElement('radio')
            right.className='right';
            right.textContent='';
            right.id='rights'+element.id;
            action.append(right);
            document.getElementById("array").append(line) 
        });
    }
}
affiche(selectUer);

function formToggle(){

    const formTog = document.querySelector('#form_user')
  formTog.classList.toggle('active')

  const button = document.querySelector('#submit')
    button.addEventListener('click', () =>{
        if(nom =="" || taches =="" || remuneration ==""){
            return false;
        }else if(nom && taches && remuneration)
        {
            swal("Payement éffectué", "resultat versé au travailleur", "success");
            formTog.classList.remove('active')
        }      
    })
    }





    if(sessionStorage.session){
        const valeur = JSON.parse(localStorage.superAdmin);
        const type = JSON.parse(sessionStorage.session)
        if(type.email == valeur.email && type.pass == valeur.pass){
           btn.style.display='none';
        }
      }