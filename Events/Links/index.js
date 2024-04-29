const links = document.querySelectorAll("a");
links.forEach((link)=>{
    if(link.getAttribute('href').startsWith('http://')){
        link.classList.add('external_link')
    }
})