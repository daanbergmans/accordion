const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', (e) => {
	const activePanel = e.target.closest('.accordion-panel');

	if (!activePanel) return;

	toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
	const panels = document.querySelectorAll('.accordion-panel');
	const buttons = panelToActivate.parentElement.querySelectorAll('button');
	const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content');

	panels.forEach((panel) => {
		removeClass(panel, 'accordion-panel-expanded');
	});

	buttons.forEach((button) => {
		button.setAttribute('aria-expanded', false);
	});

	contents.forEach((content) => {
		content.setAttribute('aria-hidden', true);
	});

	addClass(panelToActivate, 'accordion-panel-expanded');
	panelToActivate.querySelector('button').setAttribute('aria-expanded', true);
	panelToActivate.querySelector('.accordion-content').setAttribute('aria-hidden', false);
}

function addClass(element, className) {
	element.classList.add(className);
}

function removeClass(element, className) {
	element.classList.remove(className);
}