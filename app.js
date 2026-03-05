/* =====================================================
   APP.JS — Global Init: Navbar, Auth State, Nav Links
   ===================================================== */

(function () {
    'use strict';

    // ── Determine paths relative to current page ──────
    const isRoot = !window.location.pathname.includes('/pages/');
    const ROOT = isRoot ? './' : '../';

    // ── Navbar HTML ───────────────────────────────────
    function buildNavbar(user) {
        const loginHref = `${ROOT}pages/login.html`;
        const jobsHref = `${ROOT}pages/jobs.html`;
        const trackerHref = `${ROOT}pages/tracker.html`;
        const resumeHref = `${ROOT}pages/resume.html`;
        const homeHref = `${ROOT}index.html`;

        const authSection = user
            ? `<span class="nav-user">👤 ${user.name}</span>
         <button class="btn btn-ghost btn-sm" id="logoutBtn">Logout</button>`
            : `<a href="${loginHref}" class="btn btn-outline btn-sm">Login</a>
         <a href="${loginHref}?tab=register" class="btn btn-primary btn-sm">Register</a>`;

        return `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="container">
    <a class="nav-logo" href="${homeHref}" aria-label="InternHub Home">
      <div class="logo-icon" aria-hidden="true">🎯</div>
      <span class="logo-text">InternHub</span>
    </a>

    <ul class="nav-links" role="list">
      <li><a href="${homeHref}"    id="navHome">🏠 Home</a></li>
      <li><a href="${jobsHref}"    id="navJobs">💼 Jobs</a></li>
      <li><a href="${resumeHref}"  id="navResume">📄 Resume</a></li>
      <li><a href="${trackerHref}" id="navTracker">📊 Tracker</a></li>
    </ul>

    <div class="nav-actions">${authSection}</div>

    <button class="burger" id="burgerBtn" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="mobile-nav" id="mobileNav" role="navigation" aria-label="Mobile navigation">
    <a href="${homeHref}">🏠 Home</a>
    <a href="${jobsHref}">💼 Jobs</a>
    <a href="${resumeHref}">📄 Resume</a>
    <a href="${trackerHref}">📊 Tracker</a>
    ${user
                ? `<span style="padding:.6rem 1rem;color:var(--text-muted);font-size:var(--fs-sm)">👤 ${user.name}</span>
         <button class="btn btn-ghost btn-sm" id="mobileLogoutBtn" style="margin:.4rem .75rem">Logout</button>`
                : `<a href="${loginHref}" class="btn btn-outline btn-sm" style="margin:.4rem .75rem">Login</a>
         <a href="${loginHref}?tab=register" class="btn btn-primary btn-sm" style="margin:.4rem .75rem">Register</a>`
            }
  </div>
</nav>`;
    }

    // ── Insert Navbar ─────────────────────────────────
    function initNavbar() {
        const user = getCurrentUser();
        const placeholder = document.getElementById('navbar-placeholder');
        if (placeholder) {
            placeholder.outerHTML = buildNavbar(user);
        } else {
            document.body.insertAdjacentHTML('afterbegin', buildNavbar(user));
        }

        // Highlight active link
        const path = window.location.pathname;
        const links = {
            navHome: '/index.html',
            navJobs: '/jobs.html',
            navResume: '/resume.html',
            navTracker: '/tracker.html'
        };
        Object.entries(links).forEach(([id, segment]) => {
            const el = document.getElementById(id);
            if (el && path.includes(segment)) el.classList.add('active');
        });
        // Root is "Home"
        if ((path === '/' || path.endsWith('index.html')) && document.getElementById('navHome')) {
            document.getElementById('navHome')?.classList.add('active');
        }

        // Burger menu
        const burgerBtn = document.getElementById('burgerBtn');
        const mobileNav = document.getElementById('mobileNav');
        burgerBtn?.addEventListener('click', () => {
            const open = burgerBtn.classList.toggle('open');
            mobileNav?.classList.toggle('open', open);
            burgerBtn.setAttribute('aria-expanded', String(open));
        });

        // Logout buttons
        const handleLogout = () => {
            clearCurrentUser();
            showToast('Logged out successfully. See you soon! 👋', '', '🚪');
            setTimeout(() => { window.location.href = `${ROOT}pages/login.html`; }, 600);
        };
        document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);
        document.getElementById('mobileLogoutBtn')?.addEventListener('click', handleLogout);
    }

    // ── Run on DOM ready ──────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbar);
    } else {
        initNavbar();
    }
})();
