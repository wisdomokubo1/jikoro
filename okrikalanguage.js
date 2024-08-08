// JavaScript code for Okrika language

function search_okrikalanguage() { 

    let input = document.getElementById('searchbarokrika').value 

    input=input.toLowerCase(); 

    let x = document.getElementsByClassName('okrikalanguage'); 

      

    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.toLowerCase().includes(input)) { 

            x[i].style.display="none"; 

        } 

        else { 

            x[i].style.display="list-item";                  

        } 

    } 
} 
