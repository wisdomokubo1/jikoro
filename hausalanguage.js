 // JavaScript code for Hausa Language
function search_hausalanguage() { 

    let input = document.getElementById('searchbarhausa').value 

    input=input.toLowerCase(); 

    let x = document.getElementsByClassName('hausalanguage'); 

      

    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.toLowerCase().includes(input)) { 

            x[i].style.display="none"; 

        } 

        else { 

            x[i].style.display="list-item";                  

        } 

    } 
} 