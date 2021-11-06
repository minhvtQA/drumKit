// // JavaScript Drum Kit App
// var video = document.createElement('video');
// document.body.appendChild(video);
// console.log(video.currentTime);
// let colors = ['red', 'black', 'green'];

// colors.forEach(element =>{
//   console.log(element);
// });
// console.log(!null);
{
	const playingClass = 'playing',
		crashRide = document.getElementById('crash-ride'),
		hiHatTop = document.getElementById('hihat-top');

	const animateCrashOrRide = () => {
		crashRide.style.transform = 'rotate(0deg) scale(1.5)';
	};

	const animateHiHatClosed = () => {
		hiHatTop.style.top = '171px';//171px
        console.log("Open");
	};

	const playSound = e => {
		const keyCode = e.keyCode,
			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
            console.log("e.keyCode = ", keyCode);// e -> event
            console.log("playSound-keyElement = ", keyElement);
		if(!keyElement) return; // if is 'NULL' todo return;

		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
		audioElement.currentTime =0;
		audioElement.play();
        console.log("audioElement = ", audioElement);

		switch(keyCode) {
			case 69:
			case 82:
				animateCrashOrRide();
				break;
			case 75:
				animateHiHatClosed();
				break;
		}

		keyElement.classList.add(playingClass); // add class "playing"
	};
	const removeCrashRideTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
	};

	const removeHiHatTopTransition = e => {
		if(e.propertyName !== 'top') return;

		e.target.style.top = '166px';
        console.log("Close");
        console.log("e.target.(style.top) = ", e.target);
	};	

	const removeKeyTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.classList.remove(playingClass)
	};

	const drumKeys = Array.from(document.querySelectorAll('.key'));
    console.log("drumKeys= ",drumKeys);
	drumKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});

	crashRide.addEventListener('transitionend', removeCrashRideTransition);
	hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

	window.addEventListener('keydown', playSound); // 
}