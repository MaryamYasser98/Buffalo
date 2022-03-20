let icon_search = document.querySelector('#search-btn');
let form_search = document.querySelector('.header .search-form');

let bar_btn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

let color_theme = document.querySelector('#toggle-theme');


icon_search.onclick = () =>{
    icon_search.classList.toggle('fa-times')
    form_search.classList.toggle('active');

    bar_btn.classList.remove('fa-times');
    navbar.classList.remove('active');
    cartitem.classList.remove('active')
}

bar_btn.onclick = () =>{
    bar_btn.classList.toggle('fa-times');
    navbar.classList.toggle('active');

    icon_search.classList.remove('fa-times')
    form_search.classList.remove('active');
    cartitem.classList.remove('active')
}


let cartitem =  document.querySelector('.cart-items-container');
let cartbtn = document.querySelector('#cart-btn')

cartbtn.onclick = () =>{
    cartitem.classList.toggle('active')

    bar_btn.classList.remove('fa-times');
    navbar.classList.remove('active');
    icon_search.classList.remove('fa-times')
    form_search.classList.remove('active');
}

document.onscroll = () =>{
    icon_search.classList.remove('fa-times')
    form_search.classList.remove('active');
    bar_btn.classList.remove('fa-times');
    navbar.classList.remove('active');
    cartitem.classList.remove('active')
}

color_theme.onclick = () =>{

    color_theme.classList.toggle('fa-sun');

    if(color_theme.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active')
    }
    else{
        document.querySelector('body').classList.remove('active')
    }
}
