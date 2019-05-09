var player_turn = true;

var played_cases = [];

var index = 0;

var taille = $_GET('taille');

var hardmode = $_GET('hardmode');

var darkmode = $_GET('darkmode');

var is_finished = false;

var showWinMessage = false;

var winnerIsPlayer = null;

var imageCroix = "";

var imageRond = "";

window.onload = init;

function init() {
	if (darkmode == "on") {
		imageRond = "url(resources/rond_darkmode.png)";
		imageCroix = "url(resources/croix_darkmode.png)";
	} else {
		imageRond = "url(resources/rond.png)";
		imageCroix = "url(resources/croix.png)";
	}
}

function play($case) {
	checkFinishGame();
	if (!is_finished) {
		if (player_turn) {
			let elementCase = document.getElementById($case.id);
			if (elementCase.hasAttribute("played")) {
				alert("Cette case a déjà été jouée !");
			} else {
				elementCase.style.backgroundImage = imageCroix;
				played_cases[index] = elementCase.id;
				index += 1;
				elementCase.setAttribute("played", "byPlayer");
				player_turn = false;
				setTimeout(computer_play, 1000);
			}
			if (played_cases.length == taille*taille) {
				is_finished = true;
				finishedGame();
			}
		} else {
			alert("Ce n'est pas à votre tour de jouer !");
		}
	}
}

function computer_play() {
	//let int = Math.floor(Math.random() * 9) + 1;
	//let computer_case = "case"+int;
	let computer_case = selectComputerCase();
	let elementCase = document.getElementById(computer_case);
	checkFinishGame();
	if (!is_finished) {
		if (!elementCase.hasAttribute("played")) {
			if (played_cases.length != taille*taille) {
				elementCase.style.backgroundImage = imageRond;
				played_cases[index] = computer_case;
				index += 1;
				elementCase.setAttribute("played", "byBot");
				checkFinishGame();
				player_turn = true;
			} else {
				is_finished = true;
				finishedGame();
			}
		} else {
			computer_play();
		}
	}
}

function checkFinishGame() {
	let cases = document.querySelectorAll("td");
	if (!is_finished) {
		if (taille == 3) {
			if (cases[0].getAttribute("played") == "byPlayer" && cases[1].getAttribute("played") == "byPlayer" && cases[2].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[3].getAttribute("played") == "byPlayer" && cases[4].getAttribute("played") == "byPlayer" && cases[5].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[6].getAttribute("played") == "byPlayer" && cases[7].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[0].getAttribute("played") == "byPlayer" && cases[4].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[2].getAttribute("played") == "byPlayer" && cases[4].getAttribute("played") == "byPlayer" && cases[6].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[0].getAttribute("played") == "byPlayer" && cases[3].getAttribute("played") == "byPlayer" && cases[6].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[1].getAttribute("played") == "byPlayer" && cases[4].getAttribute("played") == "byPlayer" && cases[7].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[2].getAttribute("played") == "byPlayer" && cases[5].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}

			// Séparation entre la victoire du joueur et celle de l'ordinateur

			else if (cases[0].getAttribute("played") == "byBot" && cases[1].getAttribute("played") == "byBot" && cases[2].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;			
				is_finished = true;
				finishedGame();
			}
			else if (cases[3].getAttribute("played") == "byBot" && cases[4].getAttribute("played") == "byBot" && cases[5].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[6].getAttribute("played") == "byBot" && cases[7].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[0].getAttribute("played") == "byBot" && cases[4].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[2].getAttribute("played") == "byBot" && cases[4].getAttribute("played") == "byBot" && cases[6].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[0].getAttribute("played") == "byBot" && cases[3].getAttribute("played") == "byBot" && cases[6].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[1].getAttribute("played") == "byBot" && cases[4].getAttribute("played") == "byBot" && cases[7].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[2].getAttribute("played") == "byBot" && cases[5].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else {
				is_finished = false;
			}
		}

		// Dans le cas où c'est la taille 5

		else {
			if (cases[0].getAttribute("played") == "byPlayer" && cases[1].getAttribute("played") == "byPlayer" && cases[2].getAttribute("played") == "byPlayer" 
				&& cases[3].getAttribute("played") == "byPlayer" && cases[4].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[5].getAttribute("played") == "byPlayer" && cases[6].getAttribute("played") == "byPlayer" && cases[7].getAttribute("played") == "byPlayer" 
				&& cases[8].getAttribute("played") == "byPlayer" && cases[9].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[10].getAttribute("played") == "byPlayer" && cases[11].getAttribute("played") == "byPlayer" && cases[12].getAttribute("played") == "byPlayer" 
				&& cases[13].getAttribute("played") == "byPlayer" && cases[14].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished=true;
				finishedGame();
			}
			else if (cases[15].getAttribute("played") == "byPlayer" && cases[16].getAttribute("played") == "byPlayer" && cases[17].getAttribute("played") == "byPlayer" 
				&& cases[18].getAttribute("played") == "byPlayer" && cases[19].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[20].getAttribute("played") == "byPlayer" && cases[21].getAttribute("played") == "byPlayer" && cases[22].getAttribute("played") == "byPlayer" 
				&& cases[23].getAttribute("played") == "byPlayer" && cases[24].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[0].getAttribute("played") == "byPlayer" && cases[5].getAttribute("played") == "byPlayer" && cases[10].getAttribute("played") == "byPlayer"
				&& cases[15].getAttribute("played") == "byPlayer" && cases[20].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[1].getAttribute("played") == "byPlayer" && cases[6].getAttribute("played") == "byPlayer" && cases[11].getAttribute("played") == "byPlayer"
				&& cases[16].getAttribute("played") == "byPlayer" && cases[21].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[2].getAttribute("played")=="byPlayer" && cases[7].getAttribute("played") == "byPlayer" && cases[12].getAttribute("played") == "byPlayer"
				&& cases[17].getAttribute("played")=="byPlayer" && cases[22].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[3].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer" && cases[13].getAttribute("played") == "byPlayer"
				&& cases[18].getAttribute("played") == "byPlayer" && cases[23].getAttribute("played") == "byPlayer"){
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[4].getAttribute("played") == "byPlayer" && cases[9].getAttribute("played") == "byPlayer" && cases[14].getAttribute("played") == "byPlayer"
				&& cases[19].getAttribute("played") == "byPlayer" && cases[24].getAttribute("played") == "byPlayer"){
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[0].getAttribute("played") == "byPlayer" && cases[6].getAttribute("played") == "byPlayer" && cases[12].getAttribute("played") == "byPlayer"
				&& cases[18].getAttribute("played") == "byPlayer" && cases[24].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}
			else if (cases[4].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer" && cases[12].getAttribute("played") == "byPlayer"
				&& cases[16].getAttribute("played") == "byPlayer" && cases[20].getAttribute("played") == "byPlayer") {
				winnerIsPlayer = true;
				is_finished = true;
				finishedGame();
			}

			// Séparation entre la victoire du joueur et celle de l'ordinateur

			else if (cases[0].getAttribute("played") == "byBot" && cases[1].getAttribute("played") == "byBot" && cases[2].getAttribute("played") == "byBot" 
				&& cases[3].getAttribute("played") == "byBot" && cases[4].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[5].getAttribute("played") == "byBot" && cases[6].getAttribute("played") == "byBot" && cases[7].getAttribute("played") == "byBot" 
				&& cases[8].getAttribute("played") == "byBot" && cases[9].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[10].getAttribute("played") == "byBot" && cases[11].getAttribute("played") == "byBot" && cases[12].getAttribute("played") == "byBot" 
				&& cases[13].getAttribute("played") == "byBot" && cases[14].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished=true;
				finishedGame();
			}
			else if (cases[15].getAttribute("played") == "byBot" && cases[16].getAttribute("played") == "byBot" && cases[17].getAttribute("played") == "byBot" 
				&& cases[18].getAttribute("played") == "byBot" && cases[19].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[20].getAttribute("played") == "byBot" && cases[21].getAttribute("played") == "byBot" && cases[22].getAttribute("played") == "byBot" 
				&& cases[23].getAttribute("played") == "byBot" && cases[24].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[0].getAttribute("played") == "byBot" && cases[5].getAttribute("played") == "byBot" && cases[10].getAttribute("played") == "byBot"
				&& cases[15].getAttribute("played") == "byBot" && cases[20].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[1].getAttribute("played") == "byBot" && cases[6].getAttribute("played") == "byBot" && cases[11].getAttribute("played") == "byBot"
				&& cases[16].getAttribute("played") == "byBot" && cases[21].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[2].getAttribute("played")=="byBot" && cases[7].getAttribute("played") == "byBot" && cases[12].getAttribute("played") == "byBot"
				&& cases[17].getAttribute("played")=="byBot" && cases[22].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[3].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot" && cases[13].getAttribute("played") == "byBot"
				&& cases[18].getAttribute("played") == "byBot" && cases[23].getAttribute("played") == "byBot"){
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[4].getAttribute("played") == "byBot" && cases[9].getAttribute("played") == "byBot" && cases[14].getAttribute("played") == "byBot"
				&& cases[19].getAttribute("played") == "byBot" && cases[24].getAttribute("played") == "byBot"){
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[0].getAttribute("played") == "byBot" && cases[6].getAttribute("played") == "byBot" && cases[12].getAttribute("played") == "byBot"
				&& cases[18].getAttribute("played") == "byBot" && cases[24].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}
			else if (cases[4].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot" && cases[12].getAttribute("played") == "byBot"
				&& cases[16].getAttribute("played") == "byBot" && cases[20].getAttribute("played") == "byBot") {
				winnerIsPlayer = false;
				is_finished = true;
				finishedGame();
			}


			else {
				is_finished=false;
			}
		}

	} 
}

function selectComputerCase() {
	let computer_case = "case";
	let id;
	let cases = document.querySelectorAll("td");
	if (taille == 3) {
		if ((cases[0].getAttribute("played") == "byBot" && cases[1].getAttribute("played") == "byBot") && !cases[2].hasAttribute("played")) {
			id = 3;
		}
		else if ((cases[1].getAttribute("played") == "byBot" && cases[2].getAttribute("played") == "byBot") && !cases[0].hasAttribute("played")) {
			id = 1;
		}
		else if ((cases[0].getAttribute("played") == "byBot" && cases[2].getAttribute("played") == "byBot") && !cases[1].hasAttribute("played")) {
			id = 2;
		}
		else if ((cases[3].getAttribute("played") == "byBot" && cases[4].getAttribute("played") == "byBot") && !cases[5].hasAttribute("played")) {
			id = 6;
		}
		else if ((cases[4].getAttribute("played") == "byBot" && cases[5].getAttribute("played") == "byBot") && !cases[3].hasAttribute("played")) {
			id = 4;
		}
		else if ((cases[3].getAttribute("played") == "byBot" && cases[5].getAttribute("played") == "byBot") && !cases[4].hasAttribute("played")) {
			id = 5;
		}
		else if ((cases[6].getAttribute("played") == "byBot" && cases[7].getAttribute("played") == "byBot") && !cases[8].hasAttribute("played")) {
			id = 9;
		}
		else if ((cases[7].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot") && !cases[6].hasAttribute("played")) {
			id = 7;
		}
		else if ((cases[6].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot") && !cases[7].hasAttribute("played")) {
			id = 8;
		}
		else if ((cases[0].getAttribute("played") == "byBot" && cases[4].getAttribute("played") == "byBot") && !cases[8].hasAttribute("played")) {
			id = 9;
		}
		else if ((cases[4].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot") && !cases[0].hasAttribute("played")) {
			id = 1;
		}
		else if ((cases[0].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot") && !cases[4].hasAttribute("played")) {
			id = 5;
		}
		else if ((cases[2].getAttribute("played") == "byBot" && cases[4].getAttribute("played") == "byBot") && !cases[6].hasAttribute("played")) {
			id = 7;
		}
		else if ((cases[4].getAttribute("played") == "byBot" && cases[6].getAttribute("played") == "byBot") && !cases[2].hasAttribute("played")) {
			id = 3;
		}
		else if ((cases[2].getAttribute("played") == "byBot" && cases[6].getAttribute("played") == "byBot") && !cases[4].hasAttribute("played")) {
			id = 5;
		}
		else if ((cases[0].getAttribute("played") == "byBot" && cases[3].getAttribute("played") == "byBot") && !cases[6].hasAttribute("played")) {
			id = 7;
		}
		else if ((cases[3].getAttribute("played") == "byBot" && cases[6].getAttribute("played") == "byBot") && !cases[0].hasAttribute("played")) {
			id = 1;
		}
		else if ((cases[0].getAttribute("played") == "byBot" && cases[6].getAttribute("played") == "byBot") && !cases[3].hasAttribute("played")) {
			id = 4;
		}
		else if ((cases[1].getAttribute("played") == "byBot" && cases[4].getAttribute("played") == "byBot") && !cases[7].hasAttribute("played")) {
			id = 8;
		}
		else if ((cases[4].getAttribute("played") == "byBot" && cases[7].getAttribute("played") == "byBot") && !cases[1].hasAttribute("played")) {
			id = 2;
		}
		else if ((cases[1].getAttribute("played") == "byBot" && cases[7].getAttribute("played") == "byBot") && !cases[4].hasAttribute("played")) {
			id = 5;
		}
		else if ((cases[2].getAttribute("played") == "byBot" && cases[5].getAttribute("played") == "byBot") && !cases[8].hasAttribute("played")) {
			id = 9;
		}
		else if ((cases[5].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot") && !cases[2].hasAttribute("played")) {
			id = 3;
		}
		else if ((cases[2].getAttribute("played") == "byBot" && cases[8].getAttribute("played") == "byBot") && !cases[5].hasAttribute("played")) {
			id = 6;
		}

		// Séparation entre la stratégie offensive et la stratégie défensive de la taille 3

		else if ((cases[0].getAttribute("played") == "byPlayer" && cases[1].getAttribute("played") == "byPlayer") && !cases[2].hasAttribute("played")) {
			id = 3;
		}
		else if ((cases[1].getAttribute("played") == "byPlayer" && cases[2].getAttribute("played") == "byPlayer") && !cases[0].hasAttribute("played")) {
			id = 1;
		}
		else if ((cases[0].getAttribute("played") == "byPlayer" && cases[2].getAttribute("played") == "byPlayer") && !cases[1].hasAttribute("played")) {
			id = 2;
		}
		else if ((cases[3].getAttribute("played") == "byPlayer" && cases[4].getAttribute("played") == "byPlayer") && !cases[5].hasAttribute("played")) {
			id = 6;
		}
		else if ((cases[4].getAttribute("played") == "byPlayer" && cases[5].getAttribute("played") == "byPlayer") && !cases[3].hasAttribute("played")) {
			id = 4;
		}
		else if ((cases[3].getAttribute("played") == "byPlayer" && cases[5].getAttribute("played") == "byPlayer") && !cases[4].hasAttribute("played")) {
			id = 5;
		}
		else if ((cases[6].getAttribute("played") == "byPlayer" && cases[7].getAttribute("played") == "byPlayer") && !cases[8].hasAttribute("played")) {
			id = 9;
		}
		else if ((cases[7].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer") && !cases[6].hasAttribute("played")) {
			id = 7;
		}
		else if ((cases[6].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer") && !cases[7].hasAttribute("played")) {
			id = 8;
		}
		else if ((cases[0].getAttribute("played") == "byPlayer" && cases[4].getAttribute("played") == "byPlayer") && !cases[8].hasAttribute("played")) {
			id = 9;
		}
		else if ((cases[4].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer") && !cases[0].hasAttribute("played")) {
			id = 1;
		}
		else if ((cases[0].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer") && !cases[4].hasAttribute("played")) {
			id = 5;
		}
		else if ((cases[2].getAttribute("played") == "byPlayer" && cases[4].getAttribute("played") == "byPlayer") && !cases[6].hasAttribute("played")) {
			id = 7;
		}
		else if ((cases[4].getAttribute("played") == "byPlayer" && cases[6].getAttribute("played") == "byPlayer") && !cases[2].hasAttribute("played")) {
			id = 3;
		}
		else if ((cases[2].getAttribute("played") == "byPlayer" && cases[6].getAttribute("played") == "byPlayer") && !cases[4].hasAttribute("played")) {
			id = 5;
		}
		else if ((cases[0].getAttribute("played") == "byPlayer" && cases[3].getAttribute("played") == "byPlayer") && !cases[6].hasAttribute("played")) {
			id = 7;
		}
		else if ((cases[3].getAttribute("played") == "byPlayer" && cases[6].getAttribute("played") == "byPlayer") && !cases[0].hasAttribute("played")) {
			id = 1;
		}
		else if ((cases[0].getAttribute("played") == "byPlayer" && cases[6].getAttribute("played") == "byPlayer") && !cases[3].hasAttribute("played")) {
			id = 4;
		}
		else if ((cases[1].getAttribute("played") == "byPlayer" && cases[4].getAttribute("played") == "byPlayer") && !cases[7].hasAttribute("played")) {
			id = 8;
		}
		else if ((cases[4].getAttribute("played") == "byPlayer" && cases[7].getAttribute("played") == "byPlayer") && !cases[1].hasAttribute("played")) {
			id = 2;
		}
		else if ((cases[1].getAttribute("played") == "byPlayer" && cases[7].getAttribute("played") == "byPlayer") && !cases[4].hasAttribute("played")) {
			id = 5;
		}
		else if ((cases[2].getAttribute("played") == "byPlayer" && cases[5].getAttribute("played") == "byPlayer") && !cases[8].hasAttribute("played")) {
			id = 9;
		}
		else if ((cases[5].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer") && !cases[2].hasAttribute("played")) {
			id = 3;
		}
		else if ((cases[2].getAttribute("played") == "byPlayer" && cases[8].getAttribute("played") == "byPlayer") && !cases[5].hasAttribute("played")) {
			id = 6;
		}
		else {
			if (hardmode == "on") {
				if (!cases[4].hasAttribute("played")) {
					id = 5;
				} else {
					id = Math.floor(Math.random() * 9) + 1;
				}
			} else {
				id = Math.floor(Math.random() * 9) + 1;
			}
		}
	}

	// Dans le cas où la taille vaut 5

	else {

		if (cases[0].getAttribute("played")=="byBot" && cases[5].getAttribute("played")=="byBot" && cases[10].getAttribute("played")=="byBot" 
			&& cases[15].getAttribute("played")=="byBot" && !cases[20].hasAttribute("played")) {
			id=21;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases[6].getAttribute("played")=="byBot" && cases[18].getAttribute("played")=="byBot" 
			&& cases[24].getAttribute("played")=="byBot" && !cases[12].hasAttribute("played")){
			id=13;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases[5].getAttribute("played")=="byBot" && cases[15].getAttribute("played")=="byBot" 
			&& cases[20].getAttribute("played")=="byBot" && !cases[10].hasAttribute("played")){
			id=11;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases[5].getAttribute("played")=="byBot" && cases[10].getAttribute("played")=="byBot" 
			&& cases[20].getAttribute("played")=="byBot" && !cases[15].hasAttribute("played")){
			id=16;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases[5].getAttribute("played")=="byBot" && cases[10].getAttribute("played")=="byBot" 
			&& cases[15].getAttribute("played")=="byBot" && !cases[20].hasAttribute("played")){
			id=21;
		}


		else if(cases[0].getAttribute("played")=="byBot" && cases [6].getAttribute("played")=="byBot" && cases [12].getAttribute("played")=="byBot"
			&& cases[18].getAttribute("played")=="byBot" && !cases[24].hasAttribute("played")){
			id=25;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases [12].getAttribute("played")=="byBot" && cases [18].getAttribute("played")=="byBot"
			&& cases[24].getAttribute("played")=="byBot" && !cases[6].hasAttribute("played")){
			id=7;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases [6].getAttribute("played")=="byBot" && cases [12].getAttribute("played")=="byBot"
			&& cases[24].getAttribute("played")=="byBot" && !cases[18].hasAttribute("played")){
			id=19;
		}

		else if(cases[6].getAttribute("played")=="byBot" && cases [12].getAttribute("played")=="byBot" && cases [18].getAttribute("played")=="byBot"
			&& cases[24].getAttribute("played")=="byBot" && !cases[0].hasAttribute("played")){
			id=1;
		} 

		else if(cases[0].getAttribute("played")=="byBot" && cases [1].getAttribute("played")=="byBot" && cases [2].getAttribute("played")=="byBot"
			&& cases[3].getAttribute("played")=="byBot" && !cases[4].hasAttribute("played")){
			id=5;
		} 

		else if(cases[5].getAttribute("played")=="byBot" && cases [6].getAttribute("played")=="byBot" && cases [7].getAttribute("played")=="byBot"
			&& cases[8].getAttribute("played")=="byBot" && !cases[9].hasAttribute("played")){
			id=10;
		} 
		else if(cases[10].getAttribute("played")=="byBot" && cases [11].getAttribute("played")=="byBot" && cases [12].getAttribute("played")=="byBot"
			&& cases[13].getAttribute("played")=="byBot" && !cases[14].hasAttribute("played")){
			id=15;
		}
		else if(cases[15].getAttribute("played")=="byBot" && cases [16].getAttribute("played")=="byBot" && cases [17].getAttribute("played")=="byBot"
			&& cases[18].getAttribute("played")=="byBot"  && !cases[19].hasAttribute("played")){
			id=20;
		} 

		else if(cases[20].getAttribute("played")=="byBot" && cases [21].getAttribute("played")=="byBot" && cases [22].getAttribute("played")=="byBot"
			&& cases[23].getAttribute("played")=="byBot"  && !cases[24].hasAttribute("played")){
			id=25;
		} 

		else if(cases[1].getAttribute("played")=="byBot" && cases[6].getAttribute("played")=="byBot" && cases[11].getAttribute("played")=="byBot" 
			&& cases[16].getAttribute("played")=="byBot" && !cases[21].hasAttribute("played")){
			id=22;
		}

		else if(cases[2].getAttribute("played")=="byBot" && cases[7].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" 
			&& cases[17].getAttribute("played")=="byBot" && !cases[22].hasAttribute("played")){
			id=23;
		}

		else if(cases[3].getAttribute("played")=="byBot" && cases[8].getAttribute("played")=="byBot" && cases[13].getAttribute("played")=="byBot" 
			&& cases[18].getAttribute("played")=="byBot" && !cases[23].hasAttribute("played")){
			id=24;
		}

		else if(cases[4].getAttribute("played")=="byBot" && cases[9].getAttribute("played")=="byBot" && cases[14].getAttribute("played")=="byBot" 
			&& cases[19].getAttribute("played")=="byBot" && !cases[24].hasAttribute("played")){
			id=25;
		}

		else if(cases[5].getAttribute("played")=="byBot" && cases[10].getAttribute("played")=="byBot" && cases[15].getAttribute("played")=="byBot" 
			&& cases[20].getAttribute("played")=="byBot" && !cases[0].hasAttribute("played")){
			id=1;
		}

		else if(cases[6].getAttribute("played")=="byBot" && cases[11].getAttribute("played")=="byBot" && cases[16].getAttribute("played")=="byBot" 
			&& cases[21].getAttribute("played")=="byBot" && !cases[1].hasAttribute("played")){
			id=2;
		}

		else if(cases[7].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" && cases[17].getAttribute("played")=="byBot" 
			&& cases[22].getAttribute("played")=="byBot" && !cases[6].hasAttribute("played")){
			id=3;
		}

		else if(cases[8].getAttribute("played")=="byBot" && cases[13].getAttribute("played")=="byBot" && cases[18].getAttribute("played")=="byBot" 
			&& cases[23].getAttribute("played")=="byBot" && !cases[7].hasAttribute("played")){
			id=4;
		}

		else if(cases[9].getAttribute("played")=="byBot" && cases[14].getAttribute("played")=="byBot" && cases[19].getAttribute("played")=="byBot" 
			&& cases[24].getAttribute("played")=="byBot" && !cases[6].hasAttribute("played")){
			id=5;
		}

		else if(cases[1].getAttribute("played")=="byBot" && cases[11].getAttribute("played")=="byBot" && cases[16].getAttribute("played")=="byBot" 
			&& cases[21].getAttribute("played")=="byBot" && !cases[6].hasAttribute("played")){
			id=7;
		}

		else if(cases[1].getAttribute("played")=="byBot" && cases[6].getAttribute("played")=="byBot" && cases[16].getAttribute("played")=="byBot" 
			&& cases[21].getAttribute("played")=="byBot" && !cases[11].hasAttribute("played")){
			id=12;
		}

		else if(cases[1].getAttribute("played")=="byBot" && cases[6].getAttribute("played")=="byBot" && cases[11].getAttribute("played")=="byBot" 
			&& cases[21].getAttribute("played")=="byBot" && !cases[16].hasAttribute("played")){
			id=17;
		}

		else if(cases[2].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" && cases[17].getAttribute("played")=="byBot" 
			&& cases[22].getAttribute("played")=="byBot" && !cases[7].hasAttribute("played")){
			id=8;
		}

		else if(cases[2].getAttribute("played")=="byBot" && cases[7].getAttribute("played")=="byBot" && cases[17].getAttribute("played")=="byBot" 
			&& cases[22].getAttribute("played")=="byBot" && !cases[12].hasAttribute("played")){
			id=13;
		}

		else if(cases[2].getAttribute("played")=="byBot" && cases[7].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" 
			&& cases[22].getAttribute("played")=="byBot" && !cases[17].hasAttribute("played")){
			id=18;
		}

		else if(cases[3].getAttribute("played")=="byBot" && cases[13].getAttribute("played")=="byBot" && cases[18].getAttribute("played")=="byBot" 
			&& cases[23].getAttribute("played")=="byBot" && !cases[8].hasAttribute("played")){
			id=9;
		}

		else if(cases[3].getAttribute("played")=="byBot" && cases[8].getAttribute("played")=="byBot" && cases[18].getAttribute("played")=="byBot" 
			&& cases[23].getAttribute("played")=="byBot" && !cases[13].hasAttribute("played")){
			id=14;
		}

		else if(cases[3].getAttribute("played")=="byBot" && cases[8].getAttribute("played")=="byBot" && cases[13].getAttribute("played")=="byBot" 
			&& cases[23].getAttribute("played")=="byBot" && !cases[18].hasAttribute("played")){
			id=19;
		}

		else if(cases[4].getAttribute("played")=="byBot" && cases[14].getAttribute("played")=="byBot" && cases[19].getAttribute("played")=="byBot" 
			&& cases[24].getAttribute("played")=="byBot" && !cases[9].hasAttribute("played")){
			id=10;
		}

		else if(cases[4].getAttribute("played")=="byBot" && cases[9].getAttribute("played")=="byBot" && cases[19].getAttribute("played")=="byBot" 
			&& cases[24].getAttribute("played")=="byBot" && !cases[14].hasAttribute("played")){
			id=15;
		}

		else if(cases[4].getAttribute("played")=="byBot" && cases[9].getAttribute("played")=="byBot" && cases[14].getAttribute("played")=="byBot" 
			&& cases[24].getAttribute("played")=="byBot" && !cases[19].hasAttribute("played")){
			id=20;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases[2].getAttribute("played")=="byBot" && cases[3].getAttribute("played")=="byBot" 
			&& cases[4].getAttribute("played")=="byBot" && !cases[1].hasAttribute("played")){
			id=2;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases[1].getAttribute("played")=="byBot" && cases[3].getAttribute("played")=="byBot" 
			&& cases[4].getAttribute("played")=="byBot" && !cases[2].hasAttribute("played")){
			id=3;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases[1].getAttribute("played")=="byBot" && cases[2].getAttribute("played")=="byBot" 
			&& cases[4].getAttribute("played")=="byBot" && !cases[3].hasAttribute("played")){
			id=4;
		}

		else if(cases[0].getAttribute("played")=="byBot" && cases[10].getAttribute("played")=="byBot" && cases[15].getAttribute("played")=="byBot" 
			&& cases[20].getAttribute("played")=="byBot" && !cases[5].hasAttribute("played")){
			id=6;
		}

		else if(cases[5].getAttribute("played")=="byBot" && cases[7].getAttribute("played")=="byBot" && cases[8].getAttribute("played")=="byBot" 
			&& cases[9].getAttribute("played")=="byBot" && !cases[6].hasAttribute("played")){
			id=7;
		}

		else if(cases[5].getAttribute("played")=="byBot" && cases[6].getAttribute("played")=="byBot" && cases[8].getAttribute("played")=="byBot" 
			&& cases[9].getAttribute("played")=="byBot" && !cases[7].hasAttribute("played")){
			id=8;
		}

		else if(cases[5].getAttribute("played")=="byBot" && cases[6].getAttribute("played")=="byBot" && cases[7].getAttribute("played")=="byBot" 
			&& cases[9].getAttribute("played")=="byBot" && !cases[8].hasAttribute("played")){
			id=9;
		}

		else if(cases[10].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" && cases[13].getAttribute("played")=="byBot" 
			&& cases[14].getAttribute("played")=="byBot" && !cases[11].hasAttribute("played")){
			id=12;
		}

		else if(cases[10].getAttribute("played")=="byBot" && cases[11].getAttribute("played")=="byBot" && cases[13].getAttribute("played")=="byBot" 
			&& cases[14].getAttribute("played")=="byBot" && !cases[12].hasAttribute("played")){
			id=13;
		}

		else if(cases[10].getAttribute("played")=="byBot" && cases[11].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" 
			&& cases[14].getAttribute("played")=="byBot" && !cases[13].hasAttribute("played")){
			id=14;
		}

		else if(cases[15].getAttribute("played")=="byBot" && cases[17].getAttribute("played")=="byBot" && cases[18].getAttribute("played")=="byBot" 
			&& cases[19].getAttribute("played")=="byBot" && !cases[16].hasAttribute("played")){
			id=17;
		}

		else if(cases[15].getAttribute("played")=="byBot" && cases[16].getAttribute("played")=="byBot" && cases[18].getAttribute("played")=="byBot" 
			&& cases[19].getAttribute("played")=="byBot" && !cases[17].hasAttribute("played")){
			id=18;
		}

		else if(cases[15].getAttribute("played")=="byBot" && cases[16].getAttribute("played")=="byBot" && cases[17].getAttribute("played")=="byBot" 
			&& cases[19].getAttribute("played")=="byBot" && !cases[18].hasAttribute("played")){
			id=19;
		}

		else if(cases[20].getAttribute("played")=="byBot" && cases[22].getAttribute("played")=="byBot" && cases[23].getAttribute("played")=="byBot" 
			&& cases[24].getAttribute("played")=="byBot" && !cases[21].hasAttribute("played")){
			id=22;
		}

		else if(cases[20].getAttribute("played")=="byBot" && cases[21].getAttribute("played")=="byBot" && cases[23].getAttribute("played")=="byBot" 
			&& cases[24].getAttribute("played")=="byBot" && !cases[22].hasAttribute("played")){
			id=23;
		}

		else if(cases[20].getAttribute("played")=="byBot" && cases[21].getAttribute("played")=="byBot" && cases[22].getAttribute("played")=="byBot" 
			&& cases[24].getAttribute("played")=="byBot" && !cases[23].hasAttribute("played")){
			id=24;
		}

		else if(cases[4].getAttribute("played")=="byBot" && cases[8].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" 
			&& cases[16].getAttribute("played")=="byBot" && !cases[20].hasAttribute("played")){
			id=21;
		}

		else if(cases[4].getAttribute("played")=="byBot" && cases[8].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" 
			&& cases[20].getAttribute("played")=="byBot" && !cases[16].hasAttribute("played")){
			id=17;
		}

		else if(cases[4].getAttribute("played")=="byBot" && cases[8].getAttribute("played")=="byBot" && cases[16].getAttribute("played")=="byBot" 
			&& cases[20].getAttribute("played")=="byBot" && !cases[12].hasAttribute("played")){
			id=13;
		}

		else if(cases[4].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" && cases[16].getAttribute("played")=="byBot" 
			&& cases[20].getAttribute("played")=="byBot" && !cases[8].hasAttribute("played")){
			id=9;
		}

		else if(cases[8].getAttribute("played")=="byBot" && cases[12].getAttribute("played")=="byBot" && cases[16].getAttribute("played")=="byBot" 
			&& cases[20].getAttribute("played")=="byBot" && !cases[4].hasAttribute("played")){
			id=5;
		}

		// Séparation entre la stratégie offensive et la stratégie défensive de la taille 5

		else if(cases[0].getAttribute("played")=="byPlayer" && cases[5].getAttribute("played")=="byPlayer" && cases[10].getAttribute("played")=="byPlayer" 
			&& cases[15].getAttribute("played")=="byPlayer" && !cases[20].hasAttribute("played")) {
			id=21;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases[6].getAttribute("played")=="byPlayer" && cases[18].getAttribute("played")=="byPlayer" 
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[12].hasAttribute("played")){
			id=13;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases[5].getAttribute("played")=="byPlayer" && cases[15].getAttribute("played")=="byPlayer" 
			&& cases[20].getAttribute("played")=="byPlayer" && !cases[10].hasAttribute("played")){
			id=11;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases[5].getAttribute("played")=="byPlayer" && cases[10].getAttribute("played")=="byPlayer" 
			&& cases[20].getAttribute("played")=="byPlayer" && !cases[15].hasAttribute("played")){
			id=16;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases[5].getAttribute("played")=="byPlayer" && cases[10].getAttribute("played")=="byPlayer" 
			&& cases[15].getAttribute("played")=="byPlayer" && !cases[20].hasAttribute("played")){
			id=21;
		}


		else if(cases[0].getAttribute("played")=="byPlayer" && cases [6].getAttribute("played")=="byPlayer" && cases [12].getAttribute("played")=="byPlayer"
			&& cases[18].getAttribute("played")=="byPlayer" && !cases[24].hasAttribute("played")){
			id=25;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases [12].getAttribute("played")=="byPlayer" && cases [18].getAttribute("played")=="byPlayer"
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[6].hasAttribute("played")){
			id=7;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases [6].getAttribute("played")=="byPlayer" && cases [12].getAttribute("played")=="byPlayer"
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[18].hasAttribute("played")){
			id=19;
		}

		else if(cases[6].getAttribute("played")=="byPlayer" && cases [12].getAttribute("played")=="byPlayer" && cases [18].getAttribute("played")=="byPlayer"
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[0].hasAttribute("played")){
			id=1;
		} 

		else if(cases[0].getAttribute("played")=="byPlayer" && cases [1].getAttribute("played")=="byPlayer" && cases [2].getAttribute("played")=="byPlayer"
			&& cases[3].getAttribute("played")=="byPlayer" && !cases[4].hasAttribute("played")){
			id=5;
		} 

		else if(cases[5].getAttribute("played")=="byPlayer" && cases [6].getAttribute("played")=="byPlayer" && cases [7].getAttribute("played")=="byPlayer"
			&& cases[8].getAttribute("played")=="byPlayer" && !cases[9].hasAttribute("played")){
			id=10;
		} 
		else if(cases[10].getAttribute("played")=="byPlayer" && cases [11].getAttribute("played")=="byPlayer" && cases [12].getAttribute("played")=="byPlayer"
			&& cases[13].getAttribute("played")=="byPlayer" && !cases[14].hasAttribute("played")){
			id=15;
		}
		else if(cases[15].getAttribute("played")=="byPlayer" && cases [16].getAttribute("played")=="byPlayer" && cases [17].getAttribute("played")=="byPlayer"
			&& cases[18].getAttribute("played")=="byPlayer"  && !cases[19].hasAttribute("played")){
			id=20;
		} 

		else if(cases[20].getAttribute("played")=="byPlayer" && cases [21].getAttribute("played")=="byPlayer" && cases [22].getAttribute("played")=="byPlayer"
			&& cases[23].getAttribute("played")=="byPlayer"  && !cases[24].hasAttribute("played")){
			id=25;
		} 

		else if(cases[1].getAttribute("played")=="byPlayer" && cases[6].getAttribute("played")=="byPlayer" && cases[11].getAttribute("played")=="byPlayer" 
			&& cases[16].getAttribute("played")=="byPlayer" && !cases[21].hasAttribute("played")){
			id=22;
		}

		else if(cases[2].getAttribute("played")=="byPlayer" && cases[7].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" 
			&& cases[17].getAttribute("played")=="byPlayer" && !cases[22].hasAttribute("played")){
			id=23;
		}

		else if(cases[3].getAttribute("played")=="byPlayer" && cases[8].getAttribute("played")=="byPlayer" && cases[13].getAttribute("played")=="byPlayer" 
			&& cases[18].getAttribute("played")=="byPlayer" && !cases[23].hasAttribute("played")){
			id=24;
		}

		else if(cases[4].getAttribute("played")=="byPlayer" && cases[9].getAttribute("played")=="byPlayer" && cases[14].getAttribute("played")=="byPlayer" 
			&& cases[19].getAttribute("played")=="byPlayer" && !cases[24].hasAttribute("played")){
			id=25;
		}

		else if(cases[5].getAttribute("played")=="byPlayer" && cases[10].getAttribute("played")=="byPlayer" && cases[15].getAttribute("played")=="byPlayer" 
			&& cases[20].getAttribute("played")=="byPlayer" && !cases[0].hasAttribute("played")){
			id=1;
		}

		else if(cases[6].getAttribute("played")=="byPlayer" && cases[11].getAttribute("played")=="byPlayer" && cases[16].getAttribute("played")=="byPlayer" 
			&& cases[21].getAttribute("played")=="byPlayer" && !cases[1].hasAttribute("played")){
			id=2;
		}

		else if(cases[7].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" && cases[17].getAttribute("played")=="byPlayer" 
			&& cases[22].getAttribute("played")=="byPlayer" && !cases[6].hasAttribute("played")){
			id=3;
		}

		else if(cases[8].getAttribute("played")=="byPlayer" && cases[13].getAttribute("played")=="byPlayer" && cases[18].getAttribute("played")=="byPlayer" 
			&& cases[23].getAttribute("played")=="byPlayer" && !cases[7].hasAttribute("played")){
			id=4;
		}

		else if(cases[9].getAttribute("played")=="byPlayer" && cases[14].getAttribute("played")=="byPlayer" && cases[19].getAttribute("played")=="byPlayer" 
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[6].hasAttribute("played")){
			id=5;
		}

		else if(cases[1].getAttribute("played")=="byPlayer" && cases[11].getAttribute("played")=="byPlayer" && cases[16].getAttribute("played")=="byPlayer" 
			&& cases[21].getAttribute("played")=="byPlayer" && !cases[6].hasAttribute("played")){
			id=7;
		}

		else if(cases[1].getAttribute("played")=="byPlayer" && cases[6].getAttribute("played")=="byPlayer" && cases[16].getAttribute("played")=="byPlayer" 
			&& cases[21].getAttribute("played")=="byPlayer" && !cases[11].hasAttribute("played")){
			id=12;
		}

		else if(cases[1].getAttribute("played")=="byPlayer" && cases[6].getAttribute("played")=="byPlayer" && cases[11].getAttribute("played")=="byPlayer" 
			&& cases[21].getAttribute("played")=="byPlayer" && !cases[16].hasAttribute("played")){
			id=17;
		}

		else if(cases[2].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" && cases[17].getAttribute("played")=="byPlayer" 
			&& cases[22].getAttribute("played")=="byPlayer" && !cases[7].hasAttribute("played")){
			id=8;
		}

		else if(cases[2].getAttribute("played")=="byPlayer" && cases[7].getAttribute("played")=="byPlayer" && cases[17].getAttribute("played")=="byPlayer" 
			&& cases[22].getAttribute("played")=="byPlayer" && !cases[12].hasAttribute("played")){
			id=13;
		}

		else if(cases[2].getAttribute("played")=="byPlayer" && cases[7].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" 
			&& cases[22].getAttribute("played")=="byPlayer" && !cases[17].hasAttribute("played")){
			id=18;
		}

		else if(cases[3].getAttribute("played")=="byPlayer" && cases[13].getAttribute("played")=="byPlayer" && cases[18].getAttribute("played")=="byPlayer" 
			&& cases[23].getAttribute("played")=="byPlayer" && !cases[8].hasAttribute("played")){
			id=9;
		}

		else if(cases[3].getAttribute("played")=="byPlayer" && cases[8].getAttribute("played")=="byPlayer" && cases[18].getAttribute("played")=="byPlayer" 
			&& cases[23].getAttribute("played")=="byPlayer" && !cases[13].hasAttribute("played")){
			id=14;
		}

		else if(cases[3].getAttribute("played")=="byPlayer" && cases[8].getAttribute("played")=="byPlayer" && cases[13].getAttribute("played")=="byPlayer" 
			&& cases[23].getAttribute("played")=="byPlayer" && !cases[18].hasAttribute("played")){
			id=19;
		}

		else if(cases[4].getAttribute("played")=="byPlayer" && cases[14].getAttribute("played")=="byPlayer" && cases[19].getAttribute("played")=="byPlayer" 
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[9].hasAttribute("played")){
			id=10;
		}

		else if(cases[4].getAttribute("played")=="byPlayer" && cases[9].getAttribute("played")=="byPlayer" && cases[19].getAttribute("played")=="byPlayer" 
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[14].hasAttribute("played")){
			id=15;
		}

		else if(cases[4].getAttribute("played")=="byPlayer" && cases[9].getAttribute("played")=="byPlayer" && cases[14].getAttribute("played")=="byPlayer" 
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[19].hasAttribute("played")){
			id=20;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases[2].getAttribute("played")=="byPlayer" && cases[3].getAttribute("played")=="byPlayer" 
			&& cases[4].getAttribute("played")=="byPlayer" && !cases[1].hasAttribute("played")){
			id=2;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases[1].getAttribute("played")=="byPlayer" && cases[3].getAttribute("played")=="byPlayer" 
			&& cases[4].getAttribute("played")=="byPlayer" && !cases[2].hasAttribute("played")){
			id=3;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases[1].getAttribute("played")=="byPlayer" && cases[2].getAttribute("played")=="byPlayer" 
			&& cases[4].getAttribute("played")=="byPlayer" && !cases[3].hasAttribute("played")){
			id=4;
		}

		else if(cases[0].getAttribute("played")=="byPlayer" && cases[10].getAttribute("played")=="byPlayer" && cases[15].getAttribute("played")=="byPlayer" 
			&& cases[20].getAttribute("played")=="byPlayer" && !cases[5].hasAttribute("played")){
			id=6;
		}

		else if(cases[5].getAttribute("played")=="byPlayer" && cases[7].getAttribute("played")=="byPlayer" && cases[8].getAttribute("played")=="byPlayer" 
			&& cases[9].getAttribute("played")=="byPlayer" && !cases[6].hasAttribute("played")){
			id=7;
		}

		else if(cases[5].getAttribute("played")=="byPlayer" && cases[6].getAttribute("played")=="byPlayer" && cases[8].getAttribute("played")=="byPlayer" 
			&& cases[9].getAttribute("played")=="byPlayer" && !cases[7].hasAttribute("played")){
			id=8;
		}

		else if(cases[5].getAttribute("played")=="byPlayer" && cases[6].getAttribute("played")=="byPlayer" && cases[7].getAttribute("played")=="byPlayer" 
			&& cases[9].getAttribute("played")=="byPlayer" && !cases[8].hasAttribute("played")){
			id=9;
		}

		else if(cases[10].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" && cases[13].getAttribute("played")=="byPlayer" 
			&& cases[14].getAttribute("played")=="byPlayer" && !cases[11].hasAttribute("played")){
			id=12;
		}

		else if(cases[10].getAttribute("played")=="byPlayer" && cases[11].getAttribute("played")=="byPlayer" && cases[13].getAttribute("played")=="byPlayer" 
			&& cases[14].getAttribute("played")=="byPlayer" && !cases[12].hasAttribute("played")){
			id=13;
		}

		else if(cases[10].getAttribute("played")=="byPlayer" && cases[11].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" 
			&& cases[14].getAttribute("played")=="byPlayer" && !cases[13].hasAttribute("played")){
			id=14;
		}

		else if(cases[15].getAttribute("played")=="byPlayer" && cases[17].getAttribute("played")=="byPlayer" && cases[18].getAttribute("played")=="byPlayer" 
			&& cases[19].getAttribute("played")=="byPlayer" && !cases[16].hasAttribute("played")){
			id=17;
		}

		else if(cases[15].getAttribute("played")=="byPlayer" && cases[16].getAttribute("played")=="byPlayer" && cases[18].getAttribute("played")=="byPlayer" 
			&& cases[19].getAttribute("played")=="byPlayer" && !cases[17].hasAttribute("played")){
			id=18;
		}

		else if(cases[15].getAttribute("played")=="byPlayer" && cases[16].getAttribute("played")=="byPlayer" && cases[17].getAttribute("played")=="byPlayer" 
			&& cases[19].getAttribute("played")=="byPlayer" && !cases[18].hasAttribute("played")){
			id=19;
		}

		else if(cases[20].getAttribute("played")=="byPlayer" && cases[22].getAttribute("played")=="byPlayer" && cases[23].getAttribute("played")=="byPlayer" 
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[21].hasAttribute("played")){
			id=22;
		}

		else if(cases[20].getAttribute("played")=="byPlayer" && cases[21].getAttribute("played")=="byPlayer" && cases[23].getAttribute("played")=="byPlayer" 
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[22].hasAttribute("played")){
			id=23;
		}

		else if(cases[20].getAttribute("played")=="byPlayer" && cases[21].getAttribute("played")=="byPlayer" && cases[22].getAttribute("played")=="byPlayer" 
			&& cases[24].getAttribute("played")=="byPlayer" && !cases[23].hasAttribute("played")){
			id=24;
		}

		else if(cases[4].getAttribute("played")=="byPlayer" && cases[8].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" 
			&& cases[16].getAttribute("played")=="byPlayer" && !cases[20].hasAttribute("played")){
			id=21;
		}

		else if(cases[4].getAttribute("played")=="byPlayer" && cases[8].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" 
			&& cases[20].getAttribute("played")=="byPlayer" && !cases[16].hasAttribute("played")){
			id=17;
		}

		else if(cases[4].getAttribute("played")=="byPlayer" && cases[8].getAttribute("played")=="byPlayer" && cases[16].getAttribute("played")=="byPlayer" 
			&& cases[20].getAttribute("played")=="byPlayer" && !cases[12].hasAttribute("played")){
			id=13;
		}

		else if(cases[4].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" && cases[16].getAttribute("played")=="byPlayer" 
			&& cases[20].getAttribute("played")=="byPlayer" && !cases[8].hasAttribute("played")){
			id=9;
		}

		else if(cases[8].getAttribute("played")=="byPlayer" && cases[12].getAttribute("played")=="byPlayer" && cases[16].getAttribute("played")=="byPlayer" 
			&& cases[20].getAttribute("played")=="byPlayer" && !cases[4].hasAttribute("played")){
			id=5;
		}

		else {
			id=Math.floor(Math.random() * 24)+1;
		}
	}

	return computer_case+id;	
}

function finishedGame() {
	if (is_finished && !showWinMessage) {
		showWinMessage = true;
		let div = document.createElement("div");
		div.id = "result";
		let cases = document.getElementsByClassName("jeu");
		let titre = document.getElementById("titre");
		cases[0].style.animation = "animateHide 1s linear forwards";
		titre.style.animation = "animateHide 1s linear forwards";
		div.style.animation = "animateShow 3s linear forwards";
		if (winnerIsPlayer) {
			div.innerHTML = "Bravo, vous avez gagné la partie !\nCliquez <a href='javascript:location.reload()'>ici</a> pour relancer une partie, ou <a href='index.html'>ici</a> pour revenir à la page d'accueil.";
		}
		else if (winnerIsPlayer == null) {
			div.innerHTML = "Vous avez fini sur une égalité !\nCliquez <a href='javascript:location.reload()'>ici</a> pour relancer une partie, ou <a href='index.html'>ici</a> pour revenir à la page d'accueil.";			
		}
		else {
			div.innerHTML = "Dommage, vous avez perdu la partie !\nCliquez <a href='javascript:location.reload()'>ici</a> pour relancer une partie, ou <a href='index.html'>ici</a> pour revenir à la page d'accueil.";
		}
		document.body.appendChild(div);
	}
}

function $_GET(param) {
	var vars = {};
	window.location.href.replace(location.hash, '').replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi,
		function(m, key, value) {
			vars[key] = value !== undefined ? value : '';
		}
	);
	if (param) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}