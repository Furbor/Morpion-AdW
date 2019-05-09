function addDivForm() {
	let div = document.createElement("div");
	div.id = "form";

	let form = document.createElement("form");
	form.setAttribute("action", "morpion.php");
	form.setAttribute("method", "get");

	let hardmodeCheckbox = document.createElement("input");
	hardmodeCheckbox.setAttribute("type", "checkbox");
	hardmodeCheckbox.id = "hardmode";
	hardmodeCheckbox.setAttribute("name", "hardmode");
	hardmodeCheckbox.value = "on";

	let darkmodeCheckbox = document.createElement("input");
	darkmodeCheckbox.setAttribute("type", "checkbox");
	darkmodeCheckbox.id = "darkmode";
	darkmodeCheckbox.setAttribute("name", "darkmode");
	darkmodeCheckbox.value = "on";

	let darkmodeCheckboxLabel = document.createElement("label");
	darkmodeCheckboxLabel.setAttribute("for", "darkmode");
	darkmodeCheckboxLabel.innerHTML = "Mode nuit";

	let br1 = document.createElement("br");

	let hardmodeCheckboxLabel = document.createElement("label");
	hardmodeCheckboxLabel.setAttribute("for", "hardmode");
	hardmodeCheckboxLabel.innerHTML = "Mode difficile (uniquement pour le 3×3)";

	let br2 = document.createElement("br");

	let tailleLabel = document.createElement("label");
	tailleLabel.innerHTML = "Taille de la grille (3 ou 5) : ";

	let tailleInput = document.createElement("input");
	tailleInput.setAttribute("type", "text");
	tailleInput.id = "taille";
	tailleInput.setAttribute("name", "taille");
	tailleInput.value = "3";

	let br3 = document.createElement("br");

	let list = document.createElement("ul");
	let rules = document.createElement("li");
	let informations = document.createElement("li");
	rules.innerHTML = '<a href="#">Règles \n			<span>Alignez avant votre adversaire 3 ou 5 croix (suivant la taille de la grille) horizontalement, verticalement ou en diagonale</span>\n				</a>';
	informations.innerHTML = `<a href="#">Informations\n			<span>Site créé dans le cadre du projet d'Applications du Web, par RAKOTOMALALA Lucas et RAIGE-VERGER Julien</span>\n		</a>`;
	list.appendChild(rules);
	list.appendChild(document.createTextNode(" "));
	list.appendChild(informations);

	let br4 = document.createElement("br");

	let submitButton = document.createElement("input");
	submitButton.setAttribute("type", "submit");
	submitButton.value = "Jouer";

	form.appendChild(darkmodeCheckbox);
	form.appendChild(darkmodeCheckboxLabel);
	form.appendChild(br1);
	form.appendChild(hardmodeCheckbox);
	form.appendChild(hardmodeCheckboxLabel);
	form.appendChild(br2);
	form.appendChild(tailleLabel);
	form.appendChild(tailleInput);
	form.appendChild(br3);
	form.appendChild(list);
	form.appendChild(br4);
	form.appendChild(submitButton);

	div.appendChild(form);

	document.body.appendChild(div);
}

setTimeout(addDivForm, 5000);