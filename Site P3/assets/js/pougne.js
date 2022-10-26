let plusOuMoins = document.getElementsByClassName("plus-ou-moins");

for (let elt of plusOuMoins){
		elt.addEventListener('click', function() {
			if (elt.nextElementSibling.classList.contains("histoire-ban-cache")){
				elt.nextElementSibling.classList.remove("histoire-ban-cache");
				elt.nextElementSibling.classList.add("histoire-ban-montre");
				elt.innerText = "-";
				elt.title = "Voire moins";
			}
			else{
				elt.nextElementSibling.classList.remove("histoire-ban-montre");
				elt.nextElementSibling.classList.add("histoire-ban-cache");
				elt.innerText = "+";
				elt.title = "Voire plus";
			}
})}