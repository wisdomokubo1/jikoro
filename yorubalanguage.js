// JavaScript code 

function search_yorubalanguage() { 

    let input = document.getElementById('searchbaryoruba').value 

    input=input.toLowerCase(); 

    let x = document.getElementsByClassName('yorubalanguage'); 

      

    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.toLowerCase().includes(input)) { 

            x[i].style.display="none"; 

        } 

        else { 

            x[i].style.display="list-item";                  

        } 

    } 
} 
