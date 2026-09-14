/* =============================================
   Micro-interactions (Amicro-inspired)
   ============================================= */

class TiltCard {
	constructor(element, maxTilt) {
		this.element = element;
		this.maxTilt = maxTilt || 15;
		this.bindEvents();
	}

	bindEvents() {
		var self = this;
		this.element.addEventListener('mousemove', function (e) {
			var rect = self.element.getBoundingClientRect();
			var x = (e.clientX - rect.left) / rect.width - 0.5;
			var y = (e.clientY - rect.top) / rect.height - 0.5;
			self.element.style.transform =
				'rotateY(' +
				x * self.maxTilt +
				'deg) rotateX(' +
				-y * self.maxTilt +
				'deg)';
		});

		this.element.addEventListener('mouseleave', function () {
			self.element.style.transform = 'rotateY(0deg) rotateX(0deg)';
		});
	}
}

class FadeUpAnimator {
	static init() {
		var observer = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 },
		);

		document.querySelectorAll('.fade-up').forEach(function (el) {
			observer.observe(el);
		});
	}
}

var emailBtn = document.getElementById('emailBtn');
if (emailBtn) {
	emailBtn.style.position = 'relative';
	emailBtn.addEventListener('click', function () {
		var email = 'contact' + '@' + 'netenebrae.dev';
		var lang = document.documentElement.lang || 'en';
		var msg = (I18n.TRANSLATIONS[lang] && I18n.TRANSLATIONS[lang].email_copied) || 'Copied';

		var oldTooltip = emailBtn.querySelector('.email-tooltip');
		if (oldTooltip) oldTooltip.remove();

		var tooltip = document.createElement('div');
		tooltip.className = 'email-tooltip';
		tooltip.textContent = msg;
		emailBtn.appendChild(tooltip);

		requestAnimationFrame(function () {
			requestAnimationFrame(function () {
				tooltip.classList.add('show');
			});
		});

		navigator.clipboard.writeText(email);

		setTimeout(function () {
			tooltip.classList.remove('show');
			tooltip.classList.add('hide');
			setTimeout(function () {
				if (tooltip.parentNode) tooltip.remove();
			}, 300);
		}, 2000);
	});
}
