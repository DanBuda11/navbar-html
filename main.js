navLinks = document.querySelector('.navNarrow');
narrowLinks = document.querySelector('.narrowLinks');

navLinks.addEventListener('click', toggle);

function toggle() {
	$(narrowLinks).toggle();
};