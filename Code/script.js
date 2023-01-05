var icon = document.getElementById("icon");

function load1() {
    if (localStorage.getItem('dark-theme')) {
        const back = localStorage.getItem('dark-theme');
        if (back === "yes") {
            document.body.classList.toggle("dark-theme");
            icon.src = "Media/moon.png";
        }
    }
}

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem('dark-theme',"yes");
        icon.src = "Media/moon.png";
    } else {
        localStorage.setItem('dark-theme',"no");
        icon.src = "Media/sun.png";
    }
}


let topButton = document.getElementById("top_button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
