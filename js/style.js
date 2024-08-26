{
    const cursor = document.getElementById("cursor");
    const cursor2 = document.getElementById("cursor2");
    const cursor3 = document.getElementById("cursor3");

    const ownerData = document.getElementById("ownerData");


    document.addEventListener("mousemove", (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor2.style.left = `${x}px`;
      cursor2.style.top = `${y}px`;
    });

    // ownwr

    ownerData.addEventListener("mousemove",(e)=>{
        
        const { clientX: x, clientY: y } = e;
       
        cursor3.style.left = `${x}px`;
        cursor3.style.top = `${y}px`;
        
        cursor3.style.display = "block";
        cursor.style.display = "none";
        cursor2.style.display = "none";
    })
    ownerData.addEventListener("mouseleave",(e)=>{
        cursor.style.display = "block";
        cursor2.style.display = "block";
        cursor3.style.display = "none";
        
    })




}



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


