let plusOuMoins = document.getElementsByClassName("plus-ou-moins");
let matiereDevoileur = document.getElementById('matiere-devoileur');
let tableau = document.getElementById('emploi-du-temps');
let descriptionMatieres = document.getElementById('description-matieres');
let devoileurMatieres = document.getElementById('devoileur-matieres');
descriptionMatieres.classList.remove("showed");
descriptionMatieres.classList.add("hidden");
devoileurMatieres.innerText = "+"
devoileurMatieres.title = "Voir plus"


for (let elt of plusOuMoins){
		elt.addEventListener('click', function() {
			if (elt.parentElement.nextElementSibling.classList.contains("hidden")){
				elt.parentElement.nextElementSibling.classList.remove("hidden");
				elt.parentElement.nextElementSibling.classList.add("showed");
				elt.innerText = "-"
				elt.title = "Voir moins"
			}
			else{
				elt.parentElement.nextElementSibling.classList.remove("showed");
				elt.parentElement.nextElementSibling.classList.add("hidden");
				elt.innerText = "+"
				elt.title = "Voir plus"
			}
});}

tableau.addEventListener('click', function(){
    if (descriptionMatieres.classList.contains("hidden")){
        descriptionMatieres.classList.remove("hidden");
        descriptionMatieres.classList.add("showed");
        devoileurMatieres.innerText = "-"
        devoileurMatieres.title = "Voir moins"
    }
});

