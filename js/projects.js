class ProjectManager {
	constructor() {
		this.projects = [];
		this.container = null;
		this.currentLang = 'en';
	}

	init(i18nInstance) {
		this.i18n = i18nInstance;
		this.container = document.getElementById('projectsContent');
		if (!this.container) return;

		this.currentLang = this.i18n ? this.i18n.currentLang : 'en';
		this.loadData();
		this.bindEvents();
		this.bindLangChange();
	}

	bindEvents() {
		var self = this;
		window.addEventListener('hashchange', function () {
			self.route();
		});
	}

	bindLangChange() {
		var self = this;
		window.addEventListener('langchange', function () {
			self.currentLang = self.i18n ? self.i18n.currentLang : 'en';
			self.route();
		});
	}

	loadData() {
		var self = this;
		fetch('proyectos/data.json')
			.then(function (res) {
				if (!res.ok) throw new Error('data.json not found');
				return res.json();
			})
			.then(function (data) {
				self.projects = data;
				self.route();
			})
			.catch(function (err) {
				console.warn('Projects: no data.json found.');
				self.renderEmpty();
			});
	}

	route() {
		var hash = window.location.hash.slice(1);
		if (hash) {
			this.renderDetail(hash);
		} else {
			this.renderList();
		}
	}

	getLang() {
		return this.i18n ? this.i18n.currentLang : 'en';
	}

	getTitle(project) {
		var t = I18n.TRANSLATIONS[this.getLang()];
		return t[project.titleKey] || project.titleKey;
	}

	renderEmpty() {
		this.container.innerHTML =
			'<div class="project-empty">' +
			'<div class="terminal">' +
			'<div class="terminal__header">' +
			'<div class="terminal__dots">' +
			'<span class="terminal__dot terminal__dot--red"></span>' +
			'<span class="terminal__dot terminal__dot--yellow"></span>' +
			'<span class="terminal__dot terminal__dot--green"></span>' +
			'</div>' +
			'<span class="terminal__title">root@projects:~$ ls proyectos/</span>' +
			'</div>' +
			'<div class="terminal__body">' +
			'<div style="color: var(--color-accent);">$ echo "No projects found"</div>' +
			'</div>' +
			'</div>' +
			'</div>';
	}

	renderList() {
		var self = this;
		if (this.projects.length === 0) {
			this.renderEmpty();
			return;
		}

		var heading = document.getElementById('projectsHeading');
		if (heading) heading.style.display = '';

		var html = '<div class="project-grid">';

		this.projects.forEach(function (project) {
			var title = self.getTitle(project);
			var tags = project.tagNames || [];
			var iconId =
				project.tagIds && project.tagIds.length > 0
					? project.tagIds[0]
					: null;
			var iconSvg = iconId ? IconService.get(iconId) : '';

			var card =
				'<article class="project-card" data-slug="' +
				project.slug +
				'">';

			if (project.image) {
				card +=
					'<div class="project-card__image"><img src="proyectos/' +
					encodeURIComponent(project.slug) +
					'/' +
					encodeURIComponent(project.image) +
					'" alt="' +
					title +
					'" loading="lazy" /></div>';
			}

			card += '<div class="project-card__body">';
			card += '<h2 class="project-card__title">';
			if (iconSvg) {
				card +=
					'<span class="project-card__icon">' + iconSvg + '</span>';
			}
			card += title;
			card += '</h2>';

			if (tags.length > 0) {
				card += '<div class="project-card__tags">';
				tags.forEach(function (tag) {
					card +=
						'<span class="project-card__tag">' + tag + '</span>';
				});
				card += '</div>';
			}

			card += '<div class="project-card__actions">';
			card +=
				'<a href="' +
				(project.githubUrl || '#') +
				'" class="btn btn--primary btn--sm" onclick="event.stopPropagation()" target="_blank" rel="noopener noreferrer">GitHub</a>';
			if (project.demoUrl) {
				card +=
					'<a href="' +
					project.demoUrl +
					'" class="btn btn--ghost btn--sm" onclick="event.stopPropagation()" target="_blank" rel="noopener noreferrer">Live Demo</a>';
			}
			card += '</div>';

			card += '</div></article>';

			html += card;
		});

		html += '</div>';
		this.container.innerHTML = html;

		this.container
			.querySelectorAll('.project-card')
			.forEach(function (card) {
				card.addEventListener('click', function () {
					window.location.hash = card.getAttribute('data-slug');
				});
			});
	}

	renderDetail(slug) {
		var self = this;
		var project = this.projects.find(function (p) {
			return p.slug === slug;
		});
		if (!project) {
			this.renderList();
			return;
		}

		var heading = document.getElementById('projectsHeading');
		if (heading) heading.style.display = 'none';

		var lang = this.getLang();
		var mdFile = 'README.' + lang + '.md';

		fetch('proyectos/' + encodeURIComponent(project.slug) + '/' + mdFile)
			.then(function (res) {
				if (!res.ok) {
					return fetch(
						'proyectos/' +
							encodeURIComponent(project.slug) +
							'/README.en.md',
					);
				}
				return res;
			})
			.then(function (res) {
				if (!res.ok) throw new Error('README not found');
				return res.text();
			})
			.then(function (content) {
				var parsed = self.parseFrontmatter(content);
				var html = marked.parse(parsed.body);

				var backText =
					self.i18n && self.i18n.currentLang === 'es'
						? '\u2190 Volver a proyectos'
						: '\u2190 Back to projects';
				var title = self.getTitle(project);
				var tags = project.tagNames || [];

				var detailHtml =
					'<div class="project-detail">' +
					'<a href="projects.html" class="project-detail__back">' +
					backText +
					'</a>' +
					'<header class="project-detail__header">' +
					'<h1 class="project-detail__title">' +
					title +
					'</h1>' +
					(tags.length > 0
						? '<div class="project-detail__tags">' +
							tags
								.map(function (t) {
									return (
										'<span class="project-card__tag">' +
										t +
										'</span>'
									);
								})
								.join('') +
							'</div>'
						: '') +
					'<div class="project-detail__actions">' +
					'<a href="' +
					(project.githubUrl || '#') +
					'" class="btn btn--primary" target="_blank" rel="noopener noreferrer">GitHub</a>';
				if (project.demoUrl) {
					detailHtml +=
						'<a href="' +
						project.demoUrl +
						'" class="btn btn--ghost" target="_blank" rel="noopener noreferrer">Live Demo</a>';
				}
				detailHtml +=
					'</div>' +
					'</header>' +
					'<div class="project-detail__content markdown-body">' +
					html +
					'</div>' +
					'</div>';

				self.container.innerHTML = detailHtml;
				self.resolveImages(project.slug);
				self.initLightbox();
				window.scrollTo(0, 0);
			})
			.catch(function (err) {
				console.error('Error loading project README:', err);
				self.renderList();
			});
	}

	resolveImages(projectSlug) {
		var prefix = 'proyectos/' + encodeURIComponent(projectSlug) + '/';
		this.container
			.querySelectorAll('.markdown-body img')
			.forEach(function (img) {
				var src = img.getAttribute('src');
				if (!src) return;
				if (
					src.startsWith('http://') ||
					src.startsWith('https://') ||
					src.startsWith('data:')
				)
					return;
				if (src.startsWith('proyectos/')) return;
				img.setAttribute('src', prefix + encodeURIComponent(src));
			});
	}

	initLightbox() {
		var self = this;
		var images = this.container.querySelectorAll('.markdown-body img');
		if (images.length === 0) return;

		var overlay = document.createElement('div');
		overlay.className = 'lightbox-overlay';
		overlay.innerHTML =
			'<button class="lightbox-close" aria-label="Close">&times;</button>' +
			'<img class="lightbox-img" src="" alt="" />';
		document.body.appendChild(overlay);

		var lightboxImg = overlay.querySelector('.lightbox-img');
		var closeBtn = overlay.querySelector('.lightbox-close');

		images.forEach(function (img) {
			var wrapper = document.createElement('a');
			wrapper.className = 'lightbox-link';
			wrapper.href = img.getAttribute('src');
			wrapper.setAttribute('role', 'button');
			wrapper.setAttribute('tabindex', '0');
			img.parentNode.insertBefore(wrapper, img);
			wrapper.appendChild(img);
		});

		function openLightbox(src, alt) {
			lightboxImg.setAttribute('src', src);
			lightboxImg.setAttribute('alt', alt || '');
			overlay.classList.add('active');
			document.documentElement.style.overflow = 'hidden';
		}

		function closeLightbox() {
			overlay.classList.remove('active');
			document.documentElement.style.overflow = '';
			lightboxImg.setAttribute('src', '');
		}

		this.container.addEventListener('click', function (e) {
			var link = e.target.closest('.lightbox-link');
			if (link) {
				e.preventDefault();
				openLightbox(
					link.getAttribute('href'),
					link.querySelector('img').getAttribute('alt'),
				);
			}
		});

		overlay.addEventListener('click', function (e) {
			if (e.target === overlay || e.target === closeBtn) {
				closeLightbox();
			}
		});

		document.addEventListener('keydown', function handler(e) {
			if (e.key === 'Escape' && overlay.classList.contains('active')) {
				closeLightbox();
			}
		});
	}

	parseFrontmatter(content) {
		var match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
		if (!match) return { data: {}, body: content };

		var raw = match[1];
		var data = {};
		raw.split('\n').forEach(function (line) {
			var idx = line.indexOf(':');
			if (idx === -1) return;
			var key = line.slice(0, idx).trim();
			var val = line.slice(idx + 1).trim();

			if (val.startsWith('[') && val.endsWith(']')) {
				val = val
					.slice(1, -1)
					.split(',')
					.map(function (s) {
						return s.trim().replace(/^["']|["']$/g, '');
					});
			} else {
				val = val.replace(/^["']|["']$/g, '');
			}
			data[key] = val;
		});

		var body = content.slice(match[0].length).trim();
		return { data: data, body: body };
	}
}
