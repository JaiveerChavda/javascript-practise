const button = document.querySelector('#add');

let list = document.querySelector('ul');

let input = document.querySelector('#item');

button.addEventListener('click',function () {

    let listItem = document.createElement( 'li' );  // Create a 
    let listText = document.createElement('span');
    let listbtn = document.createElement('button');

    listText.textContent=input.value;
    listbtn.textContent='Delete';
    listbtn.style.marginLeft="10px";

    listItem.appendChild(listText);   // Add the text to li
    listItem.appendChild(listbtn);

    listItem.style.marginTop="5px" ;
    
    list.appendChild(listItem);

    listbtn.addEventListener('click',() => {
        list.removeChild(listItem);
    });

    input.value = '';

    input.focus();
    
})


 