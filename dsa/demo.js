/* =====================================================
   DSA DEMONSTRATION FILE
   File: demo.js
   =====================================================
   This file demonstrates ALL DSA concepts implemented
   in the Data-Structures-and-Algorithms module.

   HOW TO RUN:
     Option A (Browser):
       • Open dsa-demo.html (included in this folder)
       • Open DevTools → Console (F12)
       • The demo runs automatically on page load.

     Option B (Node.js):
       • node demo.js

   EXPECTED OUTPUT:
     All results are printed to the console so they can
     be shown during academic evaluation / viva.
   =====================================================

   FILES USED:
     arrays.js    → Array / List concept
     stackQueue.js → Stack (LIFO) & Queue (FIFO)
     searching.js  → Linear Search & Binary Search
     sorting.js    → Bubble Sort & Selection Sort
   ===================================================== */

// ── When running in Node.js, require the modules. ────
// In the browser these files are loaded via <script> tags
// before demo.js, so their globals (DSA_Arrays, etc.) are
// already available on window.
if (typeof require !== "undefined") {
    // Node environment — load with require using relative paths
    eval(require("fs").readFileSync(__dirname + "/arrays.js", "utf8"));
    eval(require("fs").readFileSync(__dirname + "/stackQueue.js", "utf8"));
    eval(require("fs").readFileSync(__dirname + "/searching.js", "utf8"));
    eval(require("fs").readFileSync(__dirname + "/sorting.js", "utf8"));
}

// ─────────────────────────────────────────────────────
// HELPER — access exported objects in either environment
// ─────────────────────────────────────────────────────
function getModule(name) {
    if (typeof window !== "undefined" && window[name]) return window[name];
    // In Node, each file sets its own variables directly in scope via eval
    const nodeModules = {
        DSA_Arrays: { jobListings, savedJobs, appliedJobs, saveJob, unsaveJob, applyToJob, getAppliedJobs, getAllJobListings },
        DSA_StackQueue: { Stack, Queue, applicationHistory, applicationQueue, recordApplication, undoLastApplication, processNextApplication },
        DSA_Searching: { linearSearch, linearSearchByField, binarySearchBySalary, binarySearchRange },
        DSA_Sorting: { bubbleSortBySalary, selectionSortByTitle, sortJobsByDate },
    };
    return nodeModules[name];
}

// ═══════════════════════════════════════════════════
//  DEMO START
// ═══════════════════════════════════════════════════
console.log("╔══════════════════════════════════════════════════╗");
console.log("║   Smart Internship & Job Finder — DSA Demo       ║");
console.log("╚══════════════════════════════════════════════════╝\n");


// ───────────────────────────────────────────────────
// STEP 1 — ARRAYS: Display & Manage Job Collections
// ───────────────────────────────────────────────────
console.log("━━━ STEP 1: ARRAYS (Job Listings) ━━━━━━━━━━━━━━━━");

const Arrays = getModule("DSA_Arrays");
const jobs = Arrays.getAllJobListings();

console.log(`[Arrays] Total jobs loaded: ${jobs.length}`);
console.log("[Arrays] First 3 job listings:");
jobs.slice(0, 3).forEach((job, i) => {
    console.log(`  [${i}] ${job.title} @ ${job.company} — ₹${job.salary.toLocaleString()}`);
});

// Save a couple of jobs
Arrays.saveJob(jobs[0]);  // Save Frontend Developer Intern
Arrays.saveJob(jobs[2]);  // Save UI/UX Design Intern
Arrays.saveJob(jobs[0]);  // Try saving duplicate (should be rejected)

console.log(`[Arrays] Saved jobs total: ${Arrays.savedJobs.length}`);

// Apply to some jobs (records to appliedJobs array)
const app1 = Arrays.applyToJob(jobs[0]);
const app2 = Arrays.applyToJob(jobs[3]);
const app3 = Arrays.applyToJob(jobs[5]);

console.log(`[Arrays] Total applications recorded: ${Arrays.appliedJobs.length}`);
console.log("[Arrays] Applications:", Arrays.getAppliedJobs().map(j => j.title));


// ───────────────────────────────────────────────────
// STEP 2 — STACK: Application History (LIFO)
// ───────────────────────────────────────────────────
console.log("\n━━━ STEP 2: STACK — Application History (LIFO) ━━━━");

const SQ = getModule("DSA_StackQueue");

// Apply to jobs — each application is pushed onto the stack
SQ.recordApplication(jobs[0]); // Frontend Developer Intern
SQ.recordApplication(jobs[1]); // Data Analyst Intern
SQ.recordApplication(jobs[4]); // Machine Learning Intern

// Display stack contents
SQ.applicationHistory.display();

// Peek at the most recent application (top of stack)
console.log(`\n[Stack] Most recent application (peek): "${SQ.applicationHistory.peek().title}"`);

// Undo the last application (pop)
const undone = SQ.undoLastApplication();
console.log(`[Stack] After undo — stack size: ${SQ.applicationHistory.size()}`);
console.log(`[Stack] Removed: "${undone.title}"`);

// Show remaining stack
SQ.applicationHistory.display();


// ───────────────────────────────────────────────────
// STEP 3 — QUEUE: Application Processing (FIFO)
// ───────────────────────────────────────────────────
console.log("\n━━━ STEP 3: QUEUE — Application Processing (FIFO) ━");

SQ.applicationQueue.display();

// Process applications one by one (simulates backend processing)
console.log("\n[Queue] Processing applications in submission order...");
SQ.processNextApplication(); // Should process Frontend Developer Intern first
SQ.processNextApplication(); // Should process Data Analyst Intern second

console.log(`[Queue] Remaining in queue: ${SQ.applicationQueue.size()}`);
SQ.applicationQueue.display();


// ───────────────────────────────────────────────────
// STEP 4 — SEARCHING: Linear Search
// ───────────────────────────────────────────────────
console.log("\n━━━ STEP 4: SEARCHING ALGORITHMS ━━━━━━━━━━━━━━━━━");

const Search = getModule("DSA_Searching");

// Linear search — find all "developer" jobs
const devJobs = Search.linearSearch(jobs, "developer");
console.log("\n[LinearSearch] Results for 'developer':");
devJobs.forEach(j => console.log(`  → ${j.title}`));

// Linear search — find jobs in Bangalore
const bangaloreJobs = Search.linearSearch(jobs, "Bangalore");
console.log("\n[LinearSearch] Results for 'Bangalore':");
bangaloreJobs.forEach(j => console.log(`  → ${j.title} @ ${j.company}`));

// Linear search by specific field
const techJobs = Search.linearSearchByField(jobs, "category", "Technology");
console.log(`\n[LinearSearch] Technology category jobs: ${techJobs.length} found.`);

// Binary search — first sort by salary, then search
const Search2 = getModule("DSA_Sorting");
const sortedForSearch = Search2.bubbleSortBySalary(jobs, "asc");
const idx = Search.binarySearchBySalary(sortedForSearch, 20000); // Look for ₹20,000
if (idx !== -1) {
    console.log(`[BinarySearch] Found at sorted index [${idx}]: "${sortedForSearch[idx].title}"`);
}

// Range search — jobs with salary between ₹10,000 and ₹20,000
const inRange = Search.binarySearchRange(sortedForSearch, 10000, 20000);
console.log(`[BinarySearch Range] Jobs ₹10,000–₹20,000: ${inRange.length} found.`);
inRange.forEach(j => console.log(`  → ₹${j.salary.toLocaleString()} — ${j.title}`));


// ───────────────────────────────────────────────────
// STEP 5 — SORTING: Bubble Sort & Selection Sort
// ───────────────────────────────────────────────────
console.log("\n━━━ STEP 5: SORTING ALGORITHMS ━━━━━━━━━━━━━━━━━━━");

const Sorting = getModule("DSA_Sorting");

// Bubble sort — ascending salary
console.log("\n[BubbleSort] Ascending by salary:");
const sortedAsc = Sorting.bubbleSortBySalary(jobs, "asc");
console.log("  Top 3 (lowest salary):", sortedAsc.slice(0, 3).map(j => `₹${j.salary}`).join(", "));

// Bubble sort — descending salary
console.log("\n[BubbleSort] Descending by salary:");
const sortedDesc = Sorting.bubbleSortBySalary(jobs, "desc");
console.log("  Top 3 (highest salary):", sortedDesc.slice(0, 3).map(j => `₹${j.salary}`).join(", "));

// Selection sort — alphabetical by title
const alphaJobs = Sorting.selectionSortByTitle(jobs);
console.log("\n[SelectionSort] First 3 jobs alphabetically:");
alphaJobs.slice(0, 3).forEach(j => console.log(`  → ${j.title}`));

// Built-in sort — by date (newest first)
const dateJobs = Sorting.sortJobsByDate(jobs, "newest");
console.log("\n[JS Sort] 3 most recently posted:");
dateJobs.slice(0, 3).forEach(j => console.log(`  → ${j.posted || "N/A"} — ${j.title}`));


// ───────────────────────────────────────────────────
// SUMMARY
// ───────────────────────────────────────────────────
console.log("\n╔══════════════════════════════════════════════════╗");
console.log("║            DSA DEMO COMPLETE ✓                   ║");
console.log("╠══════════════════════════════════════════════════╣");
console.log("║  Concepts demonstrated:                          ║");
console.log("║  1. Arrays  — Job listing, saved & applied lists ║");
console.log("║  2. Stack   — LIFO application history + undo    ║");
console.log("║  3. Queue   — FIFO application processing order  ║");
console.log("║  4. Search  — Linear (keyword) + Binary (salary) ║");
console.log("║  5. Sort    — Bubble (salary) + Selection (title)║");
console.log("╚══════════════════════════════════════════════════╝");
