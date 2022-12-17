var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem('dark-theme',"yes");
        icon.src = "../Media/moon.png";
    }else{
        localStorage.setItem('dark-theme',"no");
        icon.src = "../Media/sun.png";
    }
}

function load1(){
    if(localStorage.getItem('dark-theme')) {
        const back = localStorage.getItem('dark-theme');
        if (back === "yes"){
            document.body.classList.toggle("dark-theme");
            icon.src = "../Media/moon.png";
        }
    }
}