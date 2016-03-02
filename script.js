document.body.onmousemove = function(e){
	e = e || event; // для кроссбраузерности

	var x = e.offsetX || e.layerX;
	var y = e.offsetY || e.layerY;

	var cur = e.clientX;
	var wBody = document.body.offsetWidth;
	var coord = cur * 100 / wBody; // координата курсора в процентах относительного всего документа

	document.body.style.backgroundPosition = coord+'% 0';

}
