const preloaderFunction = () => {
    const preloader = document.querySelector(".preloader-container");
    const content = document.getElementById("content");
    content.style.display = "none"
    setTimeout(()=> {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 3000)

  
}
preloaderFunction();



