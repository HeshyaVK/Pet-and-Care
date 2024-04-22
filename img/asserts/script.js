let header = document.querySelector("header");

document.querySelector().onclick = () =>{
    
    navbar.classList.remove('active');
}

let navbar = document.querySelector("header navbar");

document.querySelector().onclick = () =>{
    navbar.classList.toggle('active');    
   
}

window.onscroll = () =>{
   
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector("header").classList.add('active');
    }else{
        document.querySelector("header").classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector("header").classList.add('active');
    }else{
        document.querySelector("header").classList.remove('active');
    }
}