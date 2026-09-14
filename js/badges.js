class Badge {
	constructor(name, iconId) {
		this.name = name;
		this.iconId = iconId;
		this.element = null;
	}

	render() {
		var svg = IconService.get(this.iconId);
		this.element = document.createElement('span');
		this.element.className = 'badge';
		this.element.innerHTML =
			svg + '<span class="badge__text">' + this.name + '</span>';
		return this.element;
	}
}

class BadgeCollection {
	constructor(badgeConfigs) {
		this.badges = badgeConfigs.map(function (cfg) {
			return new Badge(cfg.name, cfg.iconId);
		});
	}

	renderTo(container) {
		var el =
			typeof container === 'string'
				? document.querySelector(container)
				: container;
		if (!el) return;
		el.innerHTML = '';
		this.badges.forEach(function (badge) {
			el.appendChild(badge.render());
		});
	}

	getNames() {
		return this.badges.map(function (b) {
			return b.name;
		});
	}
}
