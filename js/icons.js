class IconService {
	static cache = {};

	static ALIASES = {
		user: 'about',
		code: 'projects',
	};

	static async init() {
		const iconNames = [
			'home',
			'about',
			'projects',
			'youtube',
			'github',
			'linkedin',
			'java',
			'spring',
			'linux',
			'bash',
			'docker',
			'nosql',
			'git',
			'cybersecurity',
			'postgresql',
			'javascript',
			'lua',
			'html5',
			'css3',
			'sql',
			'api-rest',
			'neovim',
			'quartz',
			'astro',
		];

		const loadPromises = iconNames.map(async (name) => {
			try {
				const res = await fetch('assets/icons/' + name + '.svg');
				if (res.ok) {
					IconService.cache[name] = await res.text();
				}
			} catch (_) {}
		});

		await Promise.all(loadPromises);
	}

	static get(iconId) {
		var fileName = IconService.ALIASES[iconId] || iconId;
		return IconService.cache[fileName] || '';
	}
}
