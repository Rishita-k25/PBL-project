/* =====================================================
   STORAGE.JS — localStorage Helper Functions
   ===================================================== */

// ─── User / Auth ─────────────────────────────────────

function getUsers() {
    try { return JSON.parse(localStorage.getItem('sij_users') || '[]'); }
    catch { return []; }
}

function saveUsers(users) {
    localStorage.setItem('sij_users', JSON.stringify(users));
}

function getCurrentUser() {
    try { return JSON.parse(sessionStorage.getItem('sij_current_user') || 'null'); }
    catch { return null; }
}

function setCurrentUser(user) {
    sessionStorage.setItem('sij_current_user', JSON.stringify(user));
}

function clearCurrentUser() {
    sessionStorage.removeItem('sij_current_user');
}

// ─── Saved Jobs ──────────────────────────────────────

function getSavedJobs() {
    try { return JSON.parse(localStorage.getItem('sij_saved_jobs') || '[]'); }
    catch { return []; }
}

function isJobSaved(id) {
    return getSavedJobs().includes(Number(id));
}

function toggleSaveJob(id) {
    const saved = getSavedJobs();
    const idx = saved.indexOf(Number(id));
    if (idx === -1) {
        saved.push(Number(id));
        localStorage.setItem('sij_saved_jobs', JSON.stringify(saved));
        return true;   // now saved
    } else {
        saved.splice(idx, 1);
        localStorage.setItem('sij_saved_jobs', JSON.stringify(saved));
        return false;  // now unsaved
    }
}

// ─── Applications ─────────────────────────────────────

function getApplications() {
    try { return JSON.parse(localStorage.getItem('sij_applications') || '[]'); }
    catch { return []; }
}

function hasApplied(jobId) {
    return getApplications().some(a => a.id === Number(jobId));
}

function addApplication(job) {
    const apps = getApplications();
    if (!hasApplied(job.id)) {
        apps.unshift({
            id: job.id,
            title: job.title,
            company: job.company,
            location: job.location,
            type: job.type,
            salary: job.salary,
            emoji: job.emoji,
            appliedDate: new Date().toISOString().slice(0, 10),
            status: 'Applied'
        });
        localStorage.setItem('sij_applications', JSON.stringify(apps));
        return true;
    }
    return false;
}

function updateApplicationStatus(jobId, status) {
    const apps = getApplications();
    const app = apps.find(a => a.id === Number(jobId));
    if (app) {
        app.status = status;
        localStorage.setItem('sij_applications', JSON.stringify(apps));
        return true;
    }
    return false;
}

function removeApplication(jobId) {
    const apps = getApplications().filter(a => a.id !== Number(jobId));
    localStorage.setItem('sij_applications', JSON.stringify(apps));
}

// ─── Resume ───────────────────────────────────────────

function getResume() {
    try { return JSON.parse(localStorage.getItem('sij_resume') || 'null'); }
    catch { return null; }
}

function saveResume(info) {
    localStorage.setItem('sij_resume', JSON.stringify(info));
}

function removeResume() {
    localStorage.removeItem('sij_resume');
}

// ─── Toast Notification ──────────────────────────────

function showToast(message, type = 'primary', icon = '✅') {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3200);
}
