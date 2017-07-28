/*---------------------------------scroll to start on-----------------------*/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/*---------------------------------new image divs-----------------------*/

for (var i = 0; i < 10; i++) {
	var newDiv = document.createElement('div');
	newDiv.setAttribute('class', `slide slide${i}`);
	newDiv.style.backgroundImage = `url('images/asset ${i}.jpeg')`
	document.querySelector('.slides').appendChild(newDiv);

/*---------------------------------text divs into image divs-----------------------*/
	var text = document.querySelector(`.text${i}`)
	document.querySelector(`.slide${i}`).appendChild(text);
}


/*--------------horizontal scroll----left/right arrow opacity------------------*/
var arrowLeft = document.querySelector('.left');
var moreLeft = document.querySelector('.more-left');

var arrowRight = document.querySelector('.right');
var moreRight = document.querySelector('.more-right');

var width = document.querySelector('.slide').offsetWidth;

window.onwheel = function (event) {
	if ((event.wheelDelta || event.detail) > 0){
        document.body.scrollLeft -= 100;
	}
	else {
		document.body.scrollLeft +=100;
	};

	if (document.body.scrollLeft<=(width/2)){
		arrowLeft.style.opacity = '0.2';
		moreLeft.style.visibility = 'hidden';
	}
	else {
		arrowLeft.style.opacity = '1';
		moreLeft.style.visibility = 'visible';
	}
	if (document.body.scrollLeft>=(width*7)){
		arrowRight.style.opacity = '0.2';
		moreRight.style.visibility = 'hidden';
	}
	else {
		arrowRight.style.opacity = '1';
		moreRight.style.visibility = 'visible';
	}
}


/*----------------------------scroll on arrow click--------------------------*/
arrowRight.addEventListener('click', scrollRight);



function scrollRight() {
	if (document.body.scrollLeft<(width*3)){
		document.body.scrollLeft = (width*3);
		arrowLeft.style.opacity = '1';
		moreLeft.style.visibility = 'visible';
	}
	else if (document.body.scrollLeft>=(width*6)){
		document.body.scrollLeft = (width*7);
		arrowRight.style.opacity = '0.2';
		moreRight.style.visibility = 'hidden';
	}
	else {
		document.body.scrollLeft = (width*6);
		arrowLeft.style.opacity = '1';
		moreLeft.style.visibility = 'visible';
	}

}
arrowLeft.addEventListener('click', scrollLeft);

function scrollLeft() {
	if (document.body.scrollLeft<=(width*3)){
		document.body.scrollLeft = 0;
		arrowLeft.style.opacity = '0.2';
		moreLeft.style.visibility = 'hidden';
	}
	else if (document.body.scrollLeft>(width*6)){
		document.body.scrollLeft = (width*6);
		arrowRight.style.opacity = '1';
		moreRight.style.visibility = 'visible';
	}
	else {
		document.body.scrollLeft = (width*3);
		arrowRight.style.opacity = '1';
		moreRight.style.visibility = 'visible';
	}
}


/*-----------------------------menu show/hide-------------------------------*/

var menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', showMenu);

var menuScreen = document.querySelector('.menu-container');
var exit = document.querySelector('.exit');
exit.addEventListener('click', hideMenu);

var body = document.querySelector('body');
var menuItem = document.querySelectorAll('.menu-item');

function showMenu() {
	menuScreen.style.visibility = 'visible';
	exit.style.display = 'block';
	menuItem.forEach(menuItem => menuItem.style.animation = 'show-menu 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both');

/*-----------------------------stop scrolling-------------------------------*/
	body.classList.add('stop-scrolling');
}

var menuText = document.querySelectorAll('.menu-text');

function hideMenu() {
	document.body.scrollLeft = 0;
	exit.style.display = 'none';
	menuScreen.style.visibility = 'hidden';
	body.classList.remove('stop-scrolling');
	menuItem.forEach(menuItem => menuItem.style.animation = 'hide-menu 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both');
}
