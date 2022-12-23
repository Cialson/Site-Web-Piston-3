let matieres = ['maths', 'physique', 'chimie', 'SI', 'info', 'francais', 'anglais', 'allemand'];
let blocksMatieres = [];
let descriptionMatieres = [];



for (let matiere in matieres){
    blocksMatieres.push(document.getElementsByClassName(matiere));
    descriptionMatieres.push(document.getElementById(matiere));
    document.getElementById(matieres).classList.add('test');
    for (let block in document.getElementsByClassName(matiere)){
        block.classList.add("test");
    }
}

let fuck = document.getElementById('maths');
fuck.innerHTML = blocksMatieres;

for (let i = 0; i < blocksMatieres.length; i++){
    for (let block in blocksMatieres[i]){
        block.addEventListener("mouseover", function(){
            descriptionMatieres[i].classList.remove("hidden");
            descriptionMatieres[i].classList.add("full-screen");
        });
        block.classList.add("test");
    }
}

