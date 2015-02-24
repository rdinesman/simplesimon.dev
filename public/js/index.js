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

		flash: function(){
			var button = this;
			button.select();
			var delay = 600;
			var flashTimeout = setTimeout( function () {
				button.unselect();
			}, delay);
		}
	};
// GLOBAL VARIABLES ////////////////////////////////////
	var button_tl = new Button("button_tl")
	var button_tr = new Button("button_tr")
	var button_bl = new Button("button_bl")
	var button_br = new Button("button_br")

	var buttons = [
		button_tl, button_tr, button_bl, button_br  
	];

	var toggle = document.getElementById('startStop');

	var cont = true;
	var choices = [];
	var test = 0;
	var num;
	var count;
// BODY ////////////////////////////////////////////////
	// buttons.forEach(loop);
	toggle.addEventListener("click", toggleLoop, false);
	for (var i = 0; i < buttons.length; i++){
		buttons[i].ref.addEventListener("click", clickFlash, false);
	}

	// choices = [button_tl, button_tr, button_bl, button_br, button_tl, button_tr, button_bl, button_br];
	var intervalIter = 1;
	var interval = 3000;
	// var gameLoop = setInterval(function(){
	// 	if (intervalIter >= 10){
	// 		console.log("Loop done");
	// 		clearInterval(gameLoop);
	// 		console.log("Final choice flash");
	// 		flashChoices(choices);
	// 		console.log(choices);
	// 	}
	// 	else{
	// 		choices.push(buttons[Math.round(Math.random() * 3)]);
	// 		console.log("Flashing choice round " + intervalIter);
	// 		flashChoices(choices);
	// 		interval *= intervalIter;
	// 		intervalIter++;	
	// 		console.log("Interval: " + interval);
	// 	}
	// }, interval)

	
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
		buttons[this.value].flash();
	}


	function loop(element, index, array){
		// flash(element);
		element.flash();
	}

	function toggleLoop(event){
		cont = !cont;
		console.log("Cont: " + cont);
		choices.push(buttons[Math.round(Math.random() * 3)]);
		flashChoices(choices);
	}

	function flashChoices(choices){
		var i = 0;
		var interval = 1000;
		var choiceLoop = setInterval(function(){
			if (i >= choices.length){
				// console.log("Loop done");
				clearInterval(choiceLoop);
			}
			else{
				choices[i].flash();
				// console.log("Flashing " + i);
				i++;
			}
		}, interval);
	}

	function gameLoopInterval(intervalIter, interval){
		choices.push(buttons[Math.round(Math.random() * 3)]);
		console.log("Flashing choice round " + intervalIter);
		flashChoices(choices);
		interval *= intervalIter;
		intervalIter++;	
		console.log("Interval: " + interval);
	}

// TRASH 
	// while(cont != 'n'){
	// 	num = Math.round(Math.random() * 3);
	// 	choices.push(buttons[num]);
	// 	// console.log(num);
	// 	// console.log(buttons[num]);
	// 	// console.log(choices);
		

	// 	function loop(element, index, array){
	// 		// console.log(element);
	// 		var loopTime = setTimeout(function(){
	// 			console.log(element);
	// 			flash(element);
	// 		}, 1500 * (index + 1));
	// 	}
	// 	choices.forEach(loop);

	// 	var promptDelay = setTimeout(function(){
	// 		cont = prompt("Cont?");
	// 	}, 1500 * (choices.length + 2));
		
	// }