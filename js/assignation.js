document.getElementById('submit').addEventListener('click', user_save)

function user_save(){
    const nom = document.getElementById('travailleur')
    const nbrTaches = document.getElementById('nombreTaches')
    const taches = document.getElementById('nombreTaches')
    const Descrip = document.getElementById('taches')
    const remuneration = document.getElementById('remuneration')

    const tab = [];
    const objEmpl = {
        id : "",
        nom : nom.value,
        nombre_tache : nbrTaches.value,
        taches : Descrip.value,
        remuneration : remuneration.value,
        statut : 1,
    }

    const dataEmpl = localStorage.getItem('administrateurs');
    let tabJ = JSON.parse(dataEmpl);
    if(!dataEmpl){
        objEmpl.id='Admin1';
        tab.push(objEmpl);
        localStorage.setItem('administrateurs',JSON.stringify(tab))
    }else{
        
        objEmpl.id="Admin"+(tabJ.length+1);
        tabJ.push(objEmpl);
        localStorage.setItem("administrateurs",JSON.stringify(tabJ));

        

    }
    const line = document.createElement('div');
        line.className='attributs';
        line.id='attribut'+objEmpl.id.replace('Admin','');
        const idt = document.createElement('p')
        idt.id="ids"+(tabJ.length+1);
        idt.textContent=objEmpl.id
        line.append(idt)
        const nomT = document.createElement('p')
        nomT.id='travailleur'+(tabJ.length+1);
        nomT.textContent=objEmpl.nom
        line.append(nom)
        const nbrT_T = document.createElement('p')
        nbrT_T.id='nombreTaches'+(tabJ.length+1);
        nbrT_T.textContent=objEmpl.nombre_tache
        line.append(nbrT_T)
        const task = document.createElement('p')
        task.id='taches'+(tabJ.length+1);
        task.textContent=objEmpl.taches
        line.append(task)
        const remuns = document.createElement('p')
        remuns.id='remuneration'+(tabJ.length+1);
        remuns.textContent=objEmpl.remuneration
        line.append(remuns)
        const action = document.createElement('p')
        action.id='action'+(tabJ.length+1);
        line.append(action)
        const option = document.createElement('div')
        option.className='option';
        option.id='option'+(tabJ.length+1);
        action.append(option)
        const left = document.createElement('div')
        left.className='left';
        left.textContent='modifier'
        left.id='left'+(tabJ.length+1);
        option.append(left)
        const right = document.createElement('div')
        right.className='right';
        right.textContent='supprimer';
        right.id='right'+(tabJ.length+1);
        action.append(right);
        document.getElementById("array").append(line)

}

const  selectUer =JSON.parse(localStorage.getItem('administrateurs'))
function affiche(params){
    if((params.length != 0)){
        params.forEach(element => {
            const line = document.createElement('div');
            line.className='attributs';
            line.id='attribut'+element.id.replace('Admin','');
            const idt = document.createElement('p')
            idt.id="ids"+element.id
            idt.textContent=element.id
            line.append(idt)
            const user = document.createElement('p')
            user.id='users'+element.id;
            user.textContent=element.nom
            line.append(user)
            const contacts = document.createElement('p')
            contacts.id='contacts'+element.id;
            contacts.textContent=element.contact
            line.append(contacts)
            const count = document.createElement('p')
            count.id='counts'+element.id;
            count.textContent=element.compte
            line.append(count)
            const action = document.createElement('p')
            action.id='action'+element.id;
            line.append(action)
            const option = document.createElement('div')
            option.className='option';
            option.id='option'+element.id;
            action.append(option)
            const left = document.createElement('div')
            left.className='left';
            left.textContent='modifier'
            left.id='left'+element.id;
            option.append(left)
            const right = document.createElement('div')
            right.className='right';
            right.textContent='supprimer';
            right.id='right'+element.id;
            action.append(right);
            document.getElementById("array").append(line) 
        });
    }
}
affiche(selectUer);





