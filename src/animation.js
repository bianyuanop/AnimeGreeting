const anime = require('animejs');

function randomTransformGen(rangeX, rangeY) {
	var x = Math.random() * (rangeX.end - rangeX.start) + rangeX.start;	
	var y = Math.random() * (rangeY.end - rangeY.start) + rangeY.start;	

	return 'translate(' + x + 'px, ' + y + 'px)';
}

function pushToCanvas(elem) {

}

function startAnime(delay) {

}
