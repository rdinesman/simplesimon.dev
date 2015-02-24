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
	}
};

var button_tl = new Button("button_tl")
var button_tr = new Button("button_tr")
var button_bl = new Button("button_bl")
var button_br = new Button("button_br")

var colorList = ["red", "blue", "green", "violet", "yellow", "black"];

var newColor = function (){
	var col = colorList[Math.round((Math.random() * (colorList.length - 1)))];
	colorList.splice(colorList.indexOf(col), 1);
	return col;
}

button_tl.ref.style['background-color'] = newColor();
button_tr.ref.style['background-color'] = newColor();
button_bl.ref.style['background-color'] = newColor();
button_br.ref.style['background-color'] = newColor();

var buttons = [
	button_tl, button_br, button_bl, button_tr
];

function flash(button){
	// console.log("flash");
	button.select();
	var delay = 1500;
	var flashTimeout = setTimeout( function () {
		button.unselect();
	}, delay);
}
var cont;
var choices = [];
var test = 0;
var num;
var count;


while(cont != 'n'){
	num = Math.round(Math.random() * 3);
	choices.push(buttons[num]);
	// console.log(num);
	// console.log(buttons[num]);
	// console.log(choices);
	

	function loop(element, index, array){
		// console.log(element);
		var loopTime = setTimeout(function(){
			console.log(element);
			flash(element);
		}, 1500 * (index + 1));
	}
	choices.forEach(loop);

	var promptDelay = setTimeout(function(){
		cont = prompt("Cont?");
	}, 1500 * (choices.length + 2));
	
}