////////////////////////////////////////////////////////
// Button CONSTRUCTOR AND PROTOTYPE ////////////////////
	var Button = function(ref){
		this.ref = document.getElementById(ref);
		this.name = ref;
	};

	Button.prototype = {
		select: function(){
			this.ref.style["opacity"] = 1;	
		},

		unselect: function(){
			this.ref.style["opacity"] = .5;	
		},

		flash: function(flashTime){
			var button = this;
			button.select();
			var delay = 600;
			var flashTimeout = setTimeout( function () {
				button.unselect();
			}, flashTime);
		}
	};
//                                                    //
// GLOBAL VARIABLES ////////////////////////////////////
	var button_tl = new Button("button_tl")
	var button_tr = new Button("button_tr")
	var button_bl = new Button("button_bl")
	var button_br = new Button("button_br")

	var buttons = [
		button_tl, button_tr, button_bl, button_br  
	];
	var toggle = document.getElementById('startStop');

	var running = false;
	var choices = [];
	var playChoices = [];
	var turn = 0;
	var validInput = true;
//                                                    //
// BODY ////////////////////////////////////////////////
	toggle.addEventListener("click", startGame, false);
	for (var i = 0; i < buttons.length; i++){
		buttons[i].ref.addEventListener("click", clickFlash, false);
	}
//                                                    //
// GLOBAL FUNCTIONS ////////////////////////////////////
	function flash(button){
		// console.log("flash");
		button.select();
		var delay = 500;
		var flashTimeout = setTimeout( function () {
			button.unselect();
		}, delay);
	}

	function clickFlash(event){
		buttons[this.value].flash(100); 
		if (validInput){
			playChoices.push(buttons[this.value]);
		};
	}


	function loop(element, index, array){
		// flash(element);
		element.flash(600);
	}

	function addAndFlash(event){
		validInput = false;
		choices.push(buttons[Math.round(Math.random() * 3)]);
		flashChoices(choices);
	}

	function flashChoices(choices){
		var i = 0;
		var interval = 1000;
		var choiceLoop = setInterval(function(){
			if (i >= choices.length){
				validInput = true;
				clearInterval(choiceLoop);
			}
			else{
				choices[i].flash(600);
				i++;
			}
		}, interval);
	}

	function check(){
		if (choices.length != playChoices.length){
			return false;
		}
		else{
			for (var i = 0; i < choices.length; i++){
				if (choices[i] != playChoices[i]){
					return false;
				}
			}
		}
		return true;
	}

	function startGame(event){
		if (!running){
			running = true;
			turn = 0;
			choices = [];
			playChoices = [];
			gameLoop();
		}
	}

	function gameLoop(){
		console.log("Starting game loop");
		addAndFlash();
		playChoices = [];
		turn++;
		document.getElementById("turn").innerHTML = "This is turn: " + turn;
		var time = 5000 + (choices.length * 1000);
		var gameTimeout = setTimeout(function() {
			alert("You lose!");
			running = false;
			clearInterval(checkInterval)
			
		}, time);
			
		var checkInterval = setInterval(function(){
			if (check()){
				clearTimeout(gameTimeout);
				clearInterval(checkInterval);
				gameLoop();
			}
			else if (choices.length < playChoices.length){
				alert("You Lose");
				running = false;
				clearTimeout(gameTimeout);
				clearInterval(checkInterval);

			}
		}, 1);
	}
////////////////////////////////////////////////////////