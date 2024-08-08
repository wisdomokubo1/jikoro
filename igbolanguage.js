// JavaScript code for Igbo language

function search_igbolanguage() { 

    let input = document.getElementById('searchbarigbo').value 

    input=input.toLowerCase(); 

    let x = document.getElementsByClassName('igbolanguage'); 

      

    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.toLowerCase().includes(input)) { 

            x[i].style.display="none"; 

        } 

        else { 

            x[i].style.display="list-item";                  

        } 

    } 
} 
