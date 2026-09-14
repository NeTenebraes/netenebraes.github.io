class StatBarAnimator {
	constructor() {
		this.observer = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.style.width =
							entry.target.getAttribute('data-percent') + '%';
						this.unobserve(entry.target);
					}
				});
			}.bind(this),
			{ threshold: 0.5 },
		);
	}

	init() {
		var fills = document.querySelectorAll('.mono-chart__fill');
		var observer = this.observer;
		fills.forEach(function (fill) {
			observer.observe(fill);
		});
	}
}

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

class MagneticHover {
	constructor(element, range, strength) {
		this.element = element;
		this.range = range || 45;
		this.strength = strength || 0.35;
		this.bindEvents();
	}

	bindEvents() {
		var self = this;
		this.element.addEventListener('mousemove', function (e) {
			var rect = self.element.getBoundingClientRect();
			var centerX = rect.left + rect.width / 2;
			var centerY = rect.top + rect.height / 2;
			var dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

			if (dist < self.range) {
				var targetX = (e.clientX - centerX) * self.strength;
				var targetY = (e.clientY - centerY) * self.strength;
				self.element.style.transform =
					'translate(' + targetX + 'px, ' + targetY + 'px)';
			} else {
				self.element.style.transform = 'translate(0, 0)';
			}
		});

		this.element.addEventListener('mouseleave', function () {
			self.element.style.transform = 'translate(0, 0)';
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

class TextRevealAnimator {
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

		document.querySelectorAll('.text-reveal').forEach(function (el) {
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
		var msg = lang === 'es' ? 'Copiado' : 'Copied';

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
