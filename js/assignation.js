document.getElementById('submit').addEventListener('click', assignation)

function assignation(){
    const nom = document.getElementById('nomUser')
    const nbrTaches = document.getElementById('nbrsTaskes')
    const taches = document.getElementById('taskes')

    const tab = [];
    const objEmpl = {
        //id : "",
        nom : nom.value,
        nbrTaches : nbrTaches.value,
        taches : taches.value,
        statut : 1,
    }

    const dataEmpl = localStorage.getItem('travailleur');
    let tabJ = JSON.parse(dataEmpl);
    if(!dataEmpl){
        objEmpl.id='tch';
        tab.push(objEmpl);
        localStorage.setItem('travailleur',JSON.stringify(tab))
    }else{
        
        objEmpl.id="tch"+(tabJ.length+1);
        tabJ.push(objEmpl);
        localStorage.setItem("travailleur",JSON.stringify(tabJ));

        

    }
    const line = document.createElement('div');
        line.className='attributs';
       line.id='attributs'+objEmpl.id.replace('Admin','');
        /*const idt = document.createElement('p')
        idt.id="ids"+(tabJ.length+1);
        idt.textContent=objEmpl.id
        line.append(idt)*/
        const nomT = document.createElement('p')
        nomT.id='nomUser'+(tabJ.length+1);
        nomT.textContent=objEmpl.nom
        line.append(nomT)
        const nbrT_T = document.createElement('p')
        nbrT_T.id='nbrsTaskes'+(tabJ.length+1);
        nbrT_T.textContent=objEmpl.nbrTaches
        line.append(nbrT_T)
        const task = document.createElement('p')
        task.id='taskes'+(tabJ.length+1);
        task.textContent=objEmpl.taches
        line.append(task)
        // const remuns = document.createElement('p')
        // remuns.id='remuns'+(tabJ.length+1);
        // remuns.textContent=objEmpl.remuneration
        // line.append(remuns)
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

const  selectUer =JSON.parse(localStorage.getItem('travailleur'))

function affiche(params){
    if((params.length != 0)){
        params.forEach(element => {
            const line = document.createElement('div');
            line.className='attributs';
            /*line.id='attribut'+element.id.replace('tch','');
            const idt = document.createElement('p')
            idt.id="ids"+element.id
            idt.textContent=element.id
            line.append(idt)*/
            const user = document.createElement('p')
            user.id='nomUsers'+element.id;
            user.textContent=element.nom
            line.append(user)
            const nbrT_T = document.createElement('p')
            nbrT_T.id='nbrsTaskes'+element.id;
            nbrT_T.textContent=element.nbrTaches
            line.append(nbrT_T)
            const task = document.createElement('p')
            task.id='taskes'+element.id;
            task.textContent=element.taches
            line.append(task)
            // const remuns = document.createElement('p')
            // remuns.id='remuns'+element.id;
            // remuns.textContent=element.remuneration
            // line.append(remuns)
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


