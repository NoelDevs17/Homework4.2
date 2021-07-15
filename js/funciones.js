const para = document.querySelector('p');
const crear = document.querySelector('button');

para.addEventListener('click', updateName);
crear.addEventListener('click', updateName);


function updateName() {
   
    const names = [];
    const count = names.push(prompt('Enter a new name'));
    para.textContent = 'Player 1: ' + names;
    
}

updateName();


    

    
    


 

        