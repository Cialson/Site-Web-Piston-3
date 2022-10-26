let plusOuMoins = document.getElementsByClassName("plus-ou-moins");

for (let elt of plusOuMoins){
		elt.addEventListener('click', function() {
			if (elt.nextElementSibling.classList.contains("hidden")){
				elt.nextElementSibling.classList.remove("hidden");
				elt.nextElementSibling.classList.add("showed");
				elt.innerText = "-";
				elt.title = "Voire moins";
			}
			else{
				elt.nextElementSibling.classList.remove("showed");
				elt.nextElementSibling.classList.add("hidden");
				elt.innerText = "+";
				elt.title = "Voire plus";
			}
})}