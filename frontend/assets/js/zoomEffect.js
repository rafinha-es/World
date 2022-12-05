const { body } = document;
let zoomActivated = false;

window.addEventListener('keydown', (e) => {
	if(e.key === 'z') {
		zoomActivated = !zoomActivated;
	}
});

window.addEventListener('mousemove', (e) => {
	const { clientX: x, clientY: y } = e;
		if(zoomActivated) {
			body.style.transformOrigin = `${x}px ${y}px`;
			body.style.transform = `scale(2)`;
			body.style.transition = `1.5s`
			
		} else {
			body.style.transform = `none`;
			body.style.transition = `1.5s`;
		}

});