class I18n {
	static TRANSLATIONS = {
		en: {
			nav_home: 'Home',
			nav_about: 'About',
			nav_projects: 'Projects',
			hero_badge: 'Freelance',
			hero_subtitle: 'Fullstack Developer | SecOps',
			hero_description:
				'Backend developer with a hacker\'s mindset. I build secure APIs and automate Linux systems, then turn what I learn into content for 64k+ developers across YouTube and TikTok.',
			hero_email: 'Email',
			hero_cv: 'CV',
			about_terminal_title: 'root@portfolio:~$ skill --list --verbose',
			about_profile: 'PROFILE:',
			about_alias: 'ALIAS:',
			about_enfoque: 'FOCUS:',
			about_status: 'STATUS:',
			about_heading: 'PROFILE: MAURICIO \u00c1LVAREZ',
			about_p1:
				'Fullstack developer with a backend focus, specialized in Java & Spring Boot and building secure REST APIs. My cybersecurity and SecOps background allows me to create robust applications with security built in from the start.',
			about_p2:
				'As a Linux systems administrator, I build and maintain optimized Arch Linux workspaces, automating tasks with custom scripts and configuring servers for development and production environments.',
			about_p3:
				'I create educational content about ethical hacking, Linux, and system administration on YouTube (17k+ subscribers) and TikTok (47k+ followers). I also manage AI agents like OpenCode and Claude Code to optimize development workflows.',
			about_tech_label: 'CORE TECHNOLOGIES',
			about_video_title: 'Latest YouTube Video',
			about_activity_30: 'ACTIVITY LAST 30 DAYS:',
			about_recent_commits: 'RECENT COMMITS:',
			about_legend_less: 'Less',
			about_legend_more: 'More',
			projects_heading: 'PROJECTS',
			project_1_title: 'devPortes',
			project_2_title: 'neBSPWM-dotfiles',
			project_3_title: 'Intel Legacy Buffer Fix',
			project_4_title: 'nenvim',
			project_5_title: 'neCyberWiki',
			project_6_title: 'NASA APOD Explorer',
			project_7_title: 'nvim-html-css PR #64 (Merged)',
			footer_credit: '\u00a9 Mauricio \u00c1lvarez',
		},
		es: {
			nav_home: 'Inicio',
			nav_about: 'Sobre m\u00ed',
			nav_projects: 'Proyectos',
			hero_badge: 'Freelance',
			hero_subtitle: 'Fullstack Developer | SecOps',
			hero_description:
				'Desarrollador backend con mentalidad de hacker. Construyo APIs seguras y automatizo sistemas Linux, luego comparto lo que aprendo con 64k+ desarrolladores a trav\u00e9s de YouTube y TikTok.',
			hero_email: 'Correo',
			hero_cv: 'CV',
			about_terminal_title: 'root@portfolio:~$ skill --list --verbose',
			about_profile: 'PERFIL:',
			about_alias: 'ALIAS:',
			about_enfoque: 'ENFOQUE:',
			about_status: 'ESTADO:',
			about_heading: 'ENFOQUE PROFESIONAL',
			about_p1:
				'Desarrollador fullstack con enfoque en backend, especializado en Java & Spring Boot y construcci\u00f3n de APIs REST seguras. Mi experiencia en ciberseguridad y SecOps me permite crear aplicaciones robustas con seguridad integrada desde el inicio.',
			about_p2:
				'Como administrador de sistemas Linux, construyo y mantengo entornos de trabajo optimizados en Arch Linux, automatizando tareas con scripts personalizados y configurando servidores para desarrollo y producci\u00f3n.',
			about_p3:
				'Creo contenido educativo sobre hacking \u00e9tico, Linux y administraci\u00f3n de sistemas en YouTube (17k+ suscriptores) y TikTok (47k+ seguidores). Tambi\u00e9n gestiono agentes de IA como OpenCode y Claude Code para optimizar flujos de trabajo de desarrollo.',
			about_tech_label: 'TECNOLOG\u00cdAS PRINCIPALES',
			about_video_title: '\u00daltimo video de YouTube',
			about_activity_30: 'ACTIVIDAD \u00daltimos 30 D\u00cdAS:',
			about_recent_commits: '\u00daltimos COMMITS:',
			about_legend_less: 'Menos',
			about_legend_more: 'M\u00e1s',
			projects_heading: 'PROYECTOS',
			project_1_title: 'devPortes',
			project_2_title: 'neBSPWM-dotfiles',
			project_3_title: 'Intel Legacy Buffer Fix',
			project_4_title: 'nenvim',
			project_5_title: 'neCyberWiki',
			project_6_title: 'NASA APOD Explorer',
			project_7_title: 'PR #64 nvim-html-css (Mergeado)',
			footer_credit: '\u00a9 Mauricio \u00c1lvarez',
		},
	};

	constructor() {
		this.currentLang = localStorage.getItem('lang') || 'en';
	}

	setLang(lang) {
		this.currentLang = lang;
		localStorage.setItem('lang', lang);
		document.documentElement.lang = lang;
		this.apply();
		this.updateToggle();
		window.dispatchEvent(new CustomEvent('langchange'));
	}

	apply() {
		var t = I18n.TRANSLATIONS[this.currentLang];
		document.querySelectorAll('[data-i18n]').forEach(function (el) {
			var key = el.getAttribute('data-i18n');
			if (t[key]) el.textContent = t[key];
		});
	}

	updateToggle() {
		var lang = this.currentLang;
		document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
			btn.classList.toggle(
				'lang-toggle__btn--active',
				btn.getAttribute('data-lang') === lang,
			);
		});
	}

	init() {
		document.documentElement.lang = this.currentLang;
		this.apply();
		this.updateToggle();
		var self = this;
		document.addEventListener('click', function (e) {
			if (e.target.classList.contains('lang-toggle__btn')) {
				self.setLang(e.target.getAttribute('data-lang'));
			}
		});
	}
}
