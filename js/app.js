{
    
    let menu_icon1 = document.getElementById("menu-icon"); 
    let robot1 = document.getElementById("robot"); 
    let menu_back1 = document.getElementById("menu-back"); 
    let menu_box1 = document.getElementById("menu-box"); 
    let settings_box1 = document.getElementById("settings"); 
    

    menu_icon1.addEventListener("click", (event) => {
        if (menu_box1.style.left === "" || menu_box1.style.left === "100%") {
            menu_box1.style.left = "0%";
            settings_box1.style.left = "100%";
        }
        document.body.style.overflow = "hidden";
        event.stopPropagation(); 
    });  

    menu_back1.addEventListener("click", () => {
        menu_box1.style.left = "100%";
        settings_box1.style.left = "100%";
        document.body.style.overflow = "";
    });   

    // robot.addEventListener("click", (event) => {
    //     if (settings_box.style.left === "9%") {
    //         settings_box.style.left = "100%"; 
    //     } else {
    //         settings_box.style.left = "9%"; 
    //         menu_box.style.left = "100%";   
    //     }
    //     event.stopPropagation(); 
    // });

    document.body.addEventListener("click", (event) => {
        if (!menu_box1.contains(event.target) && event.target !== menu_icon1 && !settings_box.contains(event.target) && event.target !== robot) {
            menu_box1.style.left = "100%";
            settings_box1.style.left = "100%";
            document.body.style.overflow = "";
        }
    });
}

