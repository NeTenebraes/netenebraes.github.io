class IconService {
	static cache = {};

	static ALIASES = {
		user: 'about',
		code: 'projects',
		pen: 'blog',
	};

	static async init() {
		const iconNames = [
			'home',
			'about',
			'projects',
			'blog',
			'youtube',
			'github',
			'linkedin',
			'email',
			'cv',
			'java',
			'spring',
			'linux',
			'bash',
			'docker',
			'python',
			'nosql',
			'git',
			'cybersecurity',
			'postgresql',
			'oauth2',
			'redis',
			'prometheus',
			'grafana',
			'nmap',
			'curl',
			'kubernetes',
			'terraform',
			'aws',
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
