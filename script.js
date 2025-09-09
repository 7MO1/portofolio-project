(function () {
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('primaryNav');

    // Apply stored theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
        root.classList.add('theme-light');
    }

    // Toggle theme
    themeToggle?.addEventListener('click', () => {
        root.classList.toggle('theme-light');
        const isLight = root.classList.contains('theme-light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Mobile nav toggle
    navToggle?.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu on link click (mobile)
    nav?.addEventListener('click', (e) => {
        const target = e.target;
        if (target.matches('a')) {
            nav.classList.remove('open');
            navToggle?.setAttribute('aria-expanded', 'false');
        }
    });

    // Smooth scroll offset handling for sticky header
    function scrollToHash(hash) {
        const el = document.querySelector(hash);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 70; // header offset
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    document.querySelectorAll('a[data-link]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                // Set active to clicked link only
                const linksLocal = Array.from(document.querySelectorAll('.nav-link'));
                linksLocal.forEach(l => l.classList.remove('active'));
                a.classList.add('active');
                history.pushState(null, '', href);
                scrollToHash(href);
            }
        });
    });

    // Keep active state in sync with URL hash on load/back-forward
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const linkById = new Map(links.map((a) => [a.getAttribute('href')?.slice(1), a]));

    function applyActiveFromHash() {
        const id = location.hash.slice(1) || 'home';
        links.forEach(l => l.classList.remove('active'));
        linkById.get(id)?.classList.add('active');
        if (location.hash) scrollToHash('#' + id);
    }

    window.addEventListener('load', applyActiveFromHash);
    window.addEventListener('popstate', applyActiveFromHash);

    // Reveal on scroll
    const revealObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        }
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));
    
    // Subtle card tilt interaction
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
        const cards = document.querySelectorAll('.card');
        const maxTiltDeg = 6;
        const resetTransform = (el) => {
            el.style.transform = '';
            el.classList.remove('tilted');
        };
        cards.forEach((card) => {
            card.addEventListener('pointermove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;  // 0..1
                const y = (e.clientY - rect.top) / rect.height;  // 0..1
                const rotateY = (0.5 - x) * maxTiltDeg * 2; // left/right
                const rotateX = (y - 0.5) * maxTiltDeg * 2; // up/down
                card.style.transform = `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
                card.classList.add('tilted');
            });
            card.addEventListener('pointerleave', () => resetTransform(card));
            card.addEventListener('pointerdown', () => resetTransform(card));
        });
    }
})();

