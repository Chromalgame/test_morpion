tab_victoire = [
    ["1", "2", "3"], 
    ["1", "4",  "7"], 
    ["1", "5", "9"], 

    ["2", "5", "8"], 

    ["3", "5", "7"], 
    ["3", "6", "9"], 

    ["4", "5", "6"], 

    ["7", "8", "9"]
]

carre_select_cross = [];
carre_select_circle = [];

const carres = document.querySelectorAll(".carre");

const carre_1 = document.querySelector(".carre_1");
const carre_2 = document.querySelector(".carre_2");
const carre_3 = document.querySelector(".carre_3");

const carre_4 = document.querySelector(".carre_4");
const carre_5 = document.querySelector(".carre_5");
const carre_6 = document.querySelector(".carre_6");

const carre_7 = document.querySelector(".carre_7");
const carre_8 = document.querySelector(".carre_8");
const carre_9 = document.querySelector(".carre_9");

const reset = document.querySelector(".reset");

const checkbox = document.querySelector("#checkbox");

const cross = document.querySelector(".cross_btn");
const circle = document.querySelector(".circle_btn");

reset.addEventListener("click", () =>{
    resetAll();
})

carres.forEach((carre) => {
    carre.addEventListener("click", () => {
        if(carre.innerHTML == ""){
            if (checkbox.checked == false){   
                carre.innerHTML = '<div class="cross"><div class="bar1"></div><div class="bar2"></div></div>';
                circle.classList.add('anim_right');
                cross.classList.add('anim_left');
                checkbox.checked = true;
                carre.classList.add("cross_etat");
            } else{
                carre.innerHTML = '<div class="circle"></div>';
                circle.classList.remove('anim_right');
                cross.classList.remove('anim_left');
                checkbox.checked = false;
                carre.classList.add("circle_etat");
            }
        }

        if(carre.classList[3] == "cross_etat"){
            carre_select_cross.push(carre.classList[2]);
        }else{
            if(carre.classList[3] == "circle_etat"){
                carre_select_circle.push(carre.classList[2]);
            } 
        }

        console.log(carre_select_circle);
        console.log(carre_select_cross);

        if(win(carre_select_circle)){
            alert("Les Cercle ont gagné !");
            resetAll();
        }else{
            if(win(carre_select_cross)){
                alert("Les Croix ont gagné !");
                resetAll();
            }
        }
    })
});

checkbox.addEventListener("change", () => {
    if (checkbox.checked == true){
        circle.classList.add('anim_right');
        cross.classList.add('anim_left');
    }else{
        circle.classList.remove('anim_right');
        cross.classList.remove('anim_left');
    }
});

function resetAll(){
    carres.forEach((carre) => {
        carre.innerHTML = "";
        circle.classList.remove('anim_right');
        cross.classList.remove('anim_left');
        carre.classList.remove('cross_etat');
        carre.classList.remove('circle_etat');
        checkbox.checked = false;
        carre_select_cross = [];
        carre_select_circle = [];
    });
}

function win(carre_select){
    result = false;
    carre_select.sort();
    if(carre_select.includes('1')){
        if(carre_select.includes('2')){
            if(carre_select.includes('3')){
                result = true;
            }
        }
        if(carre_select.includes('4')){
            if(carre_select.includes('7')){
                result = true;}

        }
        if(carre_select.includes('5')){
            if(carre_select.includes('9')){
                result = true;
            }
        }
    }else{
        if(carre_select.includes('2')){
            if(carre_select.includes('5')){
                if(carre_select.includes('8')){
                    result = true;
                }
            }
        }else{
            if(carre_select.includes('3')){
                if(carre_select.includes('5')){
                    if(carre_select.includes('7')){
                        result = true;
                    }
                }
                if(carre_select.includes('6')){
                    if(carre_select.includes('9')){
                        result = true;
                    }
                }
            }else{
                if(carre_select.includes('4')){
                    if(carre_select.includes('5')){
                        if(carre_select.includes('6')){
                            result = true;
                        }
                    }
                }else{
                    if(carre_select[0] == '7'){
                        if(carre_select.includes('8')){
                            if(carre_select.includes('9')){
                                result = true;
                            }
                        }
                    }
                }
            }
        }
    }
    return result
}