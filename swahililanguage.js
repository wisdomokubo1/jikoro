// JavaScript code for Swahili

function search_swahililanguage() { 

    let input = document.getElementById('searchbarswahili').value 

    input=input.toLowerCase(); 

    let x = document.getElementsByClassName('swahililanguage'); 

      

    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.toLowerCase().includes(input)) { 

            x[i].style.display="none"; 

        } 

        else { 

            x[i].style.display="list-item";                  

        } 

    } 
} 
