document.getElementById('submit').addEventListener('click', user_save)

function user_save(){
    const nom = document.getElementById('nomAdmin')
    const email = document.getElementById('emailAdmin')
    const pass = document.getElementById('passAdmin')

    const tab = [];
    const objEmpl = {
        id : "",
        nom : nom.value,
        email : email.value,
        // pass : pass.value,
        statut : 1,
    }

    const dataEmpl = localStorage.getItem('administrateur');
    let tabJ = JSON.parse(dataEmpl);
    if(!dataEmpl){
        objEmpl.id='Admin1';
        tab.push(objEmpl);
        localStorage.setItem('administrateur',JSON.stringify(tab))
    }else{
        
        objEmpl.id="Admin"+(tabJ.length+1);
        tabJ.push(objEmpl);
        localStorage.setItem("administrateur",JSON.stringify(tabJ));

        

    }
    const line = document.createElement('div');
        line.className='attribut';
        line.id='attributs'+objEmpl.id.replace('Admin','');
        // const idt = document.createElement('p')
        // idt.id="ids"+(tabJ.length+1);
        // idt.textContent=objEmpl.id
        // line.append(idt)

        const user = document.createElement('p')
        user.id='nomAdmin'+(tabJ.length+1);
        user.textContent=objEmpl.nom
        line.append(user)

        const emails = document.createElement('p')
        emails.id='emailAdmin'+(tabJ.length+1);
        emails.textContent=objEmpl.email
        line.append(emails)

        // const key = document.createElement('p')
        // key.id='passAdmin'+(tabJ.length+1);
        // key.textContent=objEmpl.pass
        // line.append(key)

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

const  selectUer =JSON.parse(localStorage.getItem('administrateur'))
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
            user.id='nomAdmin'+element.id;
            user.textContent=element.nom
            line.append(user)

            const emails = document.createElement('p')
            emails.id='emailAdmin'+element.id;
            emails.textContent=element.email
            line.append(emails)

            // const key = document.createElement('p')
            // key.id='passAdmin'+element.id;
            // key.textContent=element.pass
            // line.append(key)

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

            right.addEventListener('click', supprimer)

            function supprimer(e){
                document.getElementsByClassName(e.target.id.replace('right','attribut')).remove('div')
            }
        });
    }
}
affiche(selectUer);





