var getJumbo = document.querySelector('.jumbo'),
	jumboWidth = getJumbo.offsetWidth;
getJumbo.style.height = (1195 / 1920) * jumboWidth + "px";

window.addEventListener('resize', function() {
	jumboWidth = getJumbo.offsetWidth;
	getJumbo.style.height = (1195 / 1920) * jumboWidth + "px";
}, false );