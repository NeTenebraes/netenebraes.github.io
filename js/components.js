class Nav {
	static ITEMS = [
		{ file: 'index', labelKey: 'nav_home', iconId: 'home' },
		{ file: 'projects', labelKey: 'nav_projects', iconId: 'code' },
		{ file: 'about', labelKey: 'nav_about', iconId: 'user' },
	];

	constructor(activePage) {
		this.activePage = activePage;
		this.element = null;
	}

	render() {
		var self = this;
		var items = Nav.ITEMS.map(function (item) {
			var isActive = item.file === self.activePage;
			var icon = IconService.get(item.iconId);
			return (
				'<li>' +
				'<a href="' +
				item.file +
				'.html" class="nav-btn' +
				(isActive ? ' nav-btn--active' : '') +
				'"' +
				(isActive ? ' aria-current="page"' : '') +
				'>' +
				icon +
				'<span data-i18n="' +
				item.labelKey +
				'">' +
				item.labelKey +
				'</span>' +
				'</a></li>'
			);
		}).join('');

		this.element = document.createElement('header');
		this.element.className = 'header';
		this.element.innerHTML =
			'<nav aria-label="Main navigation">' +
			'<div class="nav-container">' +
			'<ul class="nav-buttons">' +
			items +
			'</ul>' +
			'</div>' +
			'</nav>' +
			'<div class="lang-toggle" id="langToggle">' +
			'<button class="lang-toggle__btn lang-toggle__btn--active" data-lang="en">EN</button>' +
			'<button class="lang-toggle__btn" data-lang="es">ES</button>' +
			'</div>';

		document.body.prepend(this.element);
		return this;
	}
}

class Footer {
	constructor() {
		this.element = null;
	}

	render() {
		this.element = document.createElement('footer');
		this.element.className = 'footer';
		this.element.innerHTML =
			'<div class="footer__social">' +
			'<a href="https://www.youtube.com/@NeTenebrae" aria-label="YouTube" target="_blank" rel="noopener noreferrer">' +
			IconService.get('youtube') +
			'</a>' +
			'<a href="https://github.com/NeTenebraes" aria-label="GitHub" target="_blank" rel="noopener noreferrer">' +
			IconService.get('github') +
			'</a>' +
			'<a href="https://www.linkedin.com/in/mauricio-alvarez-dev-backend/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">' +
			IconService.get('linkedin') +
			'</a>' +
			'</div>' +
			'<div class="footer__credit" data-i18n="footer_credit">&copy; Mauricio &Aacute;lvarez</div>';

		document.body.appendChild(this.element);
		return this;
	}
}
