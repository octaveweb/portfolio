{
    let menu_icon = document.getElementById("menu-icon"); 
    let robot = document.getElementById("robot"); 
    let menu_back = document.getElementById("menu-back"); 
    let menu_box = document.getElementById("menu-box"); 
    let settings_box = document.getElementById("settings"); 
    

    menu_icon.addEventListener("click", (event) => {
        if (menu_box.style.right === "" || menu_box.style.right === "-100%") {
            menu_box.style.right = "0%";
            settings_box.style.right = "-100%";
        }
        document.body.style.overflow = "hidden";
        event.stopPropagation(); 
    });  

    menu_back.addEventListener("click", () => {
        menu_box.style.right = "-100%";
        settings_box.style.right = "-100%";
        document.body.style.overflow = "";
    });   

    robot.addEventListener("click", (event) => {
        if (settings_box.style.right === "9%") {
            settings_box.style.right = "-100%"; 
        } else {
            settings_box.style.right = "9%"; 
            menu_box.style.right = "-100%";   
        }
        event.stopPropagation(); 
    });

    document.body.addEventListener("click", (event) => {
        if (!menu_box.contains(event.target) && event.target !== menu_icon && !settings_box.contains(event.target) && event.target !== robot) {
            menu_box.style.right = "-100%";
            settings_box.style.right = "-100%";
            document.body.style.overflow = "";
        }
    });
}
