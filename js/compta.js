document.getElementById('submit').addEventListener('click', payement)
const nom = document.getElementById('nomUser')
    const taches = document.getElementById('taskes')
    const remuneration = document.getElementById('remuns')
    const compte = document.getElementById('count')

function payement(){
    
    const tab = [];
    const objSalaire = {
        nom : nom.value,
        taches : taches.value,
        remuneration : remuneration.value,
        compte : compte.value,
        statut : 1,
    }

    const dataSalaire = localStorage.getItem('Salaire');
    let tabJ = JSON.parse(dataSalaire);
    if(!dataSalaire){
        tab.push(objSalaire);
        localStorage.setItem('Salaire',JSON.stringify(tab))
    }else{
        tabJ.push(objSalaire);
        localStorage.setItem("Salaire",JSON.stringify(tabJ));

        

    }
    const line = document.createElement('div');
        line.className='attributs';
       line.id='attributs'+objSalaire.id.replace('Admin','');
        const nomT = document.createElement('p')
        nomT.id='nomUser'+(tabJ.length+1);
        nomT.textContent=objSalaire.nom
        line.append(nom)
        
        const task = document.createElement('p')
        task.id='taskes'+(tabJ.length+1);
        task.textContent=objSalaire.taches
        line.append(task)

        const remun = document.createElement('p')
        remun.id='remuns'+(tabJ.length+1);
        remun.textContent=objSalaire.remuneration
        line.append(remun)

        const Cmoney = document.createElement('p')
        Cmoney.id='count'+(tabJ.length+1);
        Cmoney.textContent=objSalaire.remuneration
        line.append(Cmoney)

        const actions = document.createElement('p')
        actions.id='action'+(tabJ.length+1);
        line.append(actions)
        const option = document.createElement('div')
        option.className='option';
        option.id='option'+(tabJ.length+1);
        actions.append(option)
        const valid = document.createElement('div')
        valid.className='left';
        valid.textContent='Payé'
        valid.id='left'+(tabJ.length+1);
        option.append(valid)
        /*const right = document.createElement('div')
        right.className='right';
        right.textContent='supprimer';
        right.id='right'+(tabJ.length+1);
        action.append(right);*/
        document.getElementById("array").append(line)

}

const  selectUer =JSON.parse(localStorage.getItem('Salaire'))

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
            const Cmoney = document.createElement('p')
            Cmoney.id='count'+element.id;
            Cmoney.textContent=element.compte
            line.append(Cmoney)
            const actions = document.createElement('p')
            actions.id='action'+element.id;
            line.append(actions)
            const option = document.createElement('div')
            option.className='option';
            option.id='option'+element.id;
            actions.append(option)
            const valid = document.createElement('div')
            valid.className='left';
            valid.textContent='Payé'
            valid.id='left'+element.id;
            option.append(valid)
            /*const right = document.createElement('div')
            right.className='right';
            right.textContent='supprimer';
            right.id='right'+element.id;
            action.append(right);*/
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
            swal("Payement éffectué", "Salaire versé au travailleur", "success");
            formTog.classList.remove('active')
        }      
    })
    }





