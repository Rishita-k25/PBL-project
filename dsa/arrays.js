/* =====================================================
   DSA Concept: Arrays / Lists
   File: arrays.js
   =====================================================
   Arrays are the most fundamental data structure used
   to store an ordered collection of elements.

   In this project, arrays are used to:
     1. Store all job listings (job cards)
     2. Maintain a list of saved/bookmarked jobs
     3. Track applied job records

   Time Complexity:
     - Access by index : O(1)
     - Search (linear) : O(n)
     - Insert at end   : O(1) amortized
     - Delete          : O(n)
   ===================================================== */

// --------------------------------------------------
// 1. JOB LISTINGS ARRAY
//    Stores a sample collection of job objects.
//    Each object represents one job card on the UI.
// --------------------------------------------------

const jobListings = [
    { id: 1, title: "Frontend Developer Intern", company: "TechNova Solutions", location: "Bangalore", salary: 15000, type: "Internship", category: "Technology" },
    { id: 2, title: "Data Analyst Intern", company: "DataBridge Analytics", location: "Hyderabad", salary: 12000, type: "Internship", category: "Data" },
    { id: 3, title: "UI/UX Design Intern", company: "Pixel Studio", location: "Mumbai", salary: 10000, type: "Internship", category: "Design" },
    { id: 4, title: "Cloud Engineer Intern", company: "CloudFirst Technologies", location: "Pune", salary: 18000, type: "Internship", category: "Technology" },
    { id: 5, title: "Machine Learning Intern", company: "NeuralPath AI", location: "Bangalore", salary: 20000, type: "Internship", category: "AI/ML" },
    { id: 6, title: "Backend Developer Intern", company: "CodeCraft Systems", location: "Hyderabad", salary: 16000, type: "Internship", category: "Technology" },
    { id: 7, title: "FinTech Software Engineer", company: "Razorpay", location: "Bangalore", salary: 100000, type: "Full-time", category: "FinTech" },
    { id: 8, title: "Full Stack Developer", company: "Zoho Corporation", location: "Chennai", salary: 66667, type: "Full-time", category: "Technology" },
];

// --------------------------------------------------
// 2. SAVED JOBS ARRAY
//    Stores references to jobs the user bookmarks.
//    Elements are added/removed as the user saves jobs.
// --------------------------------------------------

const savedJobs = []; // Initially empty; populated when user saves a job

/**
 * saveJob - Adds a job to the savedJobs array (if not already saved).
 * Demonstrates: Array push, includes-check via find.
 * @param {Object} job - Job object to save
 */
function saveJob(job) {
    // Check if the job is already saved (avoid duplicates)
    const alreadySaved = savedJobs.find(j => j.id === job.id);
    if (!alreadySaved) {
        savedJobs.push(job); // O(1) amortized
        console.log(`[Arrays] Job saved: "${job.title}" → savedJobs length = ${savedJobs.length}`);
    } else {
        console.log(`[Arrays] Job "${job.title}" is already in savedJobs.`);
    }
}

/**
 * unsaveJob - Removes a job from the savedJobs array by id.
 * Demonstrates: Array filter (creates new array without the element).
 * @param {number} jobId - ID of the job to remove
 */
function unsaveJob(jobId) {
    const before = savedJobs.length;
    // filter returns a NEW array that excludes the matching element
    const idx = savedJobs.findIndex(j => j.id === jobId);
    if (idx !== -1) {
        savedJobs.splice(idx, 1); // O(n) — shifts elements
        console.log(`[Arrays] Job id=${jobId} removed from savedJobs. Length: ${before} → ${savedJobs.length}`);
    }
}

// --------------------------------------------------
// 3. APPLIED JOBS ARRAY
//    Keeps a record of every job the user has applied to,
//    along with the timestamp of application.
// --------------------------------------------------

const appliedJobs = []; // Populated when the user clicks "Apply"

/**
 * applyToJob - Records an application in the appliedJobs array.
 * @param {Object} job - Job object being applied to
 */
function applyToJob(job) {
    const application = {
        ...job,
        appliedAt: new Date().toISOString(), // ISO timestamp
        status: "Pending"
    };
    appliedJobs.push(application);
    console.log(`[Arrays] Applied to "${job.title}". Total applications: ${appliedJobs.length}`);
    return application;
}

/**
 * getAppliedJobs - Returns the full appliedJobs array.
 * Useful for rendering the application tracker screen.
 */
function getAppliedJobs() {
    return appliedJobs;
}

/**
 * getAllJobListings - Returns all job listings (read-only snapshot).
 */
function getAllJobListings() {
    return [...jobListings]; // spread to avoid direct mutation
}

// --------------------------------------------------
// EXPORT (for use in demo.js)
// --------------------------------------------------
// In a browser environment we attach exports to window
// so that demo.js (loaded after this script) can access them.
if (typeof window !== "undefined") {
    window.DSA_Arrays = {
        jobListings,
        savedJobs,
        appliedJobs,
        saveJob,
        unsaveJob,
        applyToJob,
        getAppliedJobs,
        getAllJobListings,
    };
}
