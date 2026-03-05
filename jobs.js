/* =====================================================
   JOBS.JS — Job Listings Page Logic
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    let filteredJobs = [...JOBS];

    // ── DOM refs ──────────────────────────────────────
    const searchInput = document.getElementById('searchInput');
    const filterType = document.getElementById('filterType');
    const filterLoc = document.getElementById('filterLocation');
    const filterSalary = document.getElementById('filterSalary');
    const jobsGrid = document.getElementById('jobsGrid');
    const jobsCount = document.getElementById('jobsCount');
    const clearBtn = document.getElementById('clearFilters');
    const sortSelect = document.getElementById('sortSelect');

    // ── Populate filter dropdowns ─────────────────────
    const locations = [...new Set(JOBS.map(j => j.location))].sort();
    locations.forEach(loc => {
        const opt = document.createElement('option');
        opt.value = loc; opt.textContent = loc;
        filterLoc?.appendChild(opt);
    });

    // ── Render cards ──────────────────────────────────
    function renderJobs(jobs) {
        if (!jobsGrid) return;
        jobsGrid.innerHTML = '';

        if (jobs.length === 0) {
            jobsGrid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <div class="empty-icon">🔍</div>
          <h3>No jobs found</h3>
          <p>Try adjusting your search or filters.</p>
          <button class="btn btn-outline" onclick="clearAll()" style="margin-top:1rem">Clear Filters</button>
        </div>`;
            if (jobsCount) jobsCount.textContent = '0 jobs found';
            return;
        }

        jobs.forEach((job, i) => {
            const saved = isJobSaved(job.id);
            const applied = hasApplied(job.id);
            const card = document.createElement('article');
            card.className = 'job-card animate-slideUp';
            card.style.animationDelay = `${i * 0.04}s`;
            card.setAttribute('role', 'article');
            card.setAttribute('aria-label', `${job.title} at ${job.company}`);

            card.innerHTML = `
        <div class="job-card-header">
          <div class="job-company-logo" aria-hidden="true">${job.emoji}</div>
          <button class="job-save-btn ${saved ? 'saved' : ''}"
                  data-id="${job.id}"
                  aria-label="${saved ? 'Unsave' : 'Save'} ${job.title}"
                  title="${saved ? 'Remove from saved' : 'Save job'}">
            ${saved ? '⭐' : '☆'}
          </button>
        </div>
        <h3>${job.title}</h3>
        <div class="job-company">🏢 ${job.company}</div>
        <div class="job-meta">
          <span class="job-meta-item">📍 ${job.location}</span>
          <span class="job-meta-item">📅 ${formatDate(job.posted)}</span>
        </div>
        <div class="job-tags">
          <span class="badge badge-type">${job.type}</span>
          <span class="badge badge-salary">💰 ${job.salary}</span>
        </div>
        <div class="job-card-footer">
          <span class="job-salary">${job.salary}</span>
          <div style="display:flex;gap:.4rem">
            ${applied
                    ? `<span class="badge badge-applied" style="padding:.4rem .8rem">✅ Applied</span>`
                    : `<button class="btn btn-primary btn-sm quick-apply-btn" data-id="${job.id}" aria-label="Quick apply for ${job.title}">Apply</button>`
                }
            <a href="job-details.html?id=${job.id}" class="btn btn-ghost btn-sm" aria-label="View details for ${job.title}">Details</a>
          </div>
        </div>`;

            // Save toggle
            card.querySelector('.job-save-btn').addEventListener('click', e => {
                e.stopPropagation();
                const id = Number(e.currentTarget.dataset.id);
                const btn = e.currentTarget;
                const nowSaved = toggleSaveJob(id);
                btn.classList.toggle('saved', nowSaved);
                btn.textContent = nowSaved ? '⭐' : '☆';
                btn.setAttribute('aria-label', `${nowSaved ? 'Unsave' : 'Save'} ${job.title}`);
                showToast(nowSaved ? `${job.title} saved! ⭐` : 'Job removed from saved.', nowSaved ? 'success' : '', nowSaved ? '⭐' : '🗑️');
            });

            // Quick apply
            const applyBtn = card.querySelector('.quick-apply-btn');
            if (applyBtn) {
                applyBtn.addEventListener('click', e => {
                    e.stopPropagation();
                    const id = Number(applyBtn.dataset.id);
                    const job = JOBS.find(j => j.id === id);
                    if (job) {
                        addApplication(job);
                        showToast(`Applied to ${job.title}! 🎉`, 'success', '✅');
                        setTimeout(() => renderJobs(filteredJobs), 400);
                    }
                });
            }

            // Clicking card → details
            card.addEventListener('click', () => {
                window.location.href = `job-details.html?id=${job.id}`;
            });

            jobsGrid.appendChild(card);
        });

        if (jobsCount) jobsCount.textContent = `${jobs.length} job${jobs.length !== 1 ? 's' : ''} found`;
    }

    // ── Filter & Search logic ─────────────────────────
    function applyFilters() {
        const query = (searchInput?.value || '').toLowerCase().trim();
        const type = filterType?.value || '';
        const loc = filterLoc?.value || '';
        const salary = filterSalary?.value || '';
        const sort = sortSelect?.value || 'newest';

        filteredJobs = JOBS.filter(job => {
            // Search
            if (query) {
                const haystack = `${job.title} ${job.company} ${job.location} ${job.skills.join(' ')} ${job.category}`.toLowerCase();
                if (!haystack.includes(query)) return false;
            }
            // Type
            if (type && job.type !== type) return false;
            // Location
            if (loc && job.location !== loc) return false;
            // Salary
            if (salary) {
                const [min, max] = salary.split('-').map(Number);
                if (max) { if (job.salaryNum < min || job.salaryNum > max) return false; }
                else { if (job.salaryNum < min) return false; }
            }
            return true;
        });

        // Sort
        filteredJobs.sort((a, b) => {
            if (sort === 'newest') return new Date(b.posted) - new Date(a.posted);
            if (sort === 'oldest') return new Date(a.posted) - new Date(b.posted);
            if (sort === 'salary_hi') return b.salaryNum - a.salaryNum;
            if (sort === 'salary_lo') return a.salaryNum - b.salaryNum;
            return 0;
        });

        renderJobs(filteredJobs);
    }

    // ── Event listeners ───────────────────────────────
    searchInput?.addEventListener('input', applyFilters);
    filterType?.addEventListener('change', applyFilters);
    filterLoc?.addEventListener('change', applyFilters);
    filterSalary?.addEventListener('change', applyFilters);
    sortSelect?.addEventListener('change', applyFilters);

    window.clearAll = function () {
        if (searchInput) searchInput.value = '';
        if (filterType) filterType.value = '';
        if (filterLoc) filterLoc.value = '';
        if (filterSalary) filterSalary.value = '';
        applyFilters();
    };
    clearBtn?.addEventListener('click', window.clearAll);

    // ── Initial render ────────────────────────────────
    applyFilters();

    // ── Helpers ───────────────────────────────────────
    function formatDate(dateStr) {
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }
});
