const hidepaths = ['/', '/feed/trending'];

function el(id) {
	return document.getElementById(id);
}

function update_style(el, css) {
	if (el) el.style.cssText = css;
}

function hide() {
	update_style(el('contents'), 'visibility: hidden;');
	update_style(el('page-manager'), 'visibility: hidden;');
}

function show() {
	update_style(el('contents'), 'visibility: visible;');
	update_style(el('page-manager'), 'visibility: visible;');
}

document.addEventListener('yt-page-data-updated', e => {
	// hide related videos
	update_style(el('related'), 'display: none;');

	// hide or show recommendations
	hidepaths.includes(location.pathname) ? hide() : show();

	// focus on search bar if homepage
	if (hidepaths.includes(location.pathname)) {
		// send '/' stroke to page to focus on search input
		const evt = new KeyboardEvent('keydown', { keyCode: 191 }); 
		document.dispatchEvent(evt); 
	}
});
