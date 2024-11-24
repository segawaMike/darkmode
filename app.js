const icon = document.getElementById("mode");

icon.addEventListener('click', ()=>{
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mode.src = "./assets/sun.png";  
    }else{
        mode.src = "./assets/moon.png";
    }
})