
// menu box
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

// AllOvermYdetails
{
    var i1 = document.getElementById("i_1");
    var i2 = document.getElementById("i_2");
    var i3 = document.getElementById("i_3");
    var i4 = document.getElementById("i_4");
    var i5 = document.getElementById("i_5");


    var s1 = document.getElementById("sector-1");
    var s2 = document.getElementById("sector-2");
    var s3 = document.getElementById("sector-3");
    var s4 = document.getElementById("sector-4");
    var s5 = document.getElementById("sector-5");


    function changes(data, section){
        i1.classList.remove("b_active");
        i2.classList.remove("b_active");
        i3.classList.remove("b_active");
        i4.classList.remove("b_active");
        i5.classList.remove("b_active");
    
        data.classList.add("b_active");
        data.classList.remove("n_active");
    
        s1.style.display = "none";
        s2.style.display = "none";
        s3.style.display = "none";
        s4.style.display = "none";
        s5.style.display = "none";
     
        section.style.display = "block";
      
    }
}
i1.addEventListener("click", () => {
    changes(i1, s1);
});

i2.addEventListener("click", () => {
    changes(i2, s2);
});

i3.addEventListener("click", () => {
    changes(i3, s3);
});

i4.addEventListener("click", () => {
    changes(i4, s4);
});

i5.addEventListener("click", () => {
    changes(i5, s5);
});
