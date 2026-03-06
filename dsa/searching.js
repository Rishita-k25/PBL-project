/* =====================================================
   DSA Concept: Searching Algorithms
   File: searching.js
   =====================================================

   1. LINEAR SEARCH
      - Checks every element one by one until a match is found.
      - Works on UNSORTED arrays.
      - Time Complexity  : O(n)  — worst / average case
      - Space Complexity : O(1)
      - Best for         : Small or unsorted collections

   2. BINARY SEARCH
      - Uses divide-and-conquer on a SORTED array.
      - Halves the search space at each step.
      - Time Complexity  : O(log n)
      - Space Complexity : O(1)  (iterative version)
      - Best for         : Large sorted collections

   In this Job Finder project:
     • Linear Search  → Search job listings by title keyword
     • Binary Search  → Search pre-sorted salary array for a target
   ===================================================== */


// ╔══════════════════════════════════════════════════╗
// ║         1. LINEAR SEARCH (by keyword)            ║
// ╚══════════════════════════════════════════════════╝

/**
 * linearSearch
 * DSA Concept: Linear Search
 * Searches through all jobs and returns those whose title,
 * company, or category contains the given keyword.
 *
 * Algorithm:
 *   FOR each job in jobs array
 *     IF job.title OR job.company OR job.category includes keyword
 *       ADD to results
 *   RETURN results
 *
 * Time Complexity : O(n) — must inspect every element
 * Space Complexity: O(k) — k = number of matching results
 *
 * @param {Array}  jobs    - Array of job objects
 * @param {string} keyword - Search term (case-insensitive)
 * @returns {Array} Array of matching job objects
 */
function linearSearch(jobs, keyword) {
    console.log(`\n[LinearSearch] Searching for keyword: "${keyword}"`);

    if (!keyword || keyword.trim() === "") {
        console.log("[LinearSearch] Empty keyword — returning all jobs.");
        return jobs;
    }

    const term = keyword.toLowerCase().trim();
    const results = [];

    // Iterate through EVERY job (O(n))
    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        const titleMatch = job.title.toLowerCase().includes(term);
        const companyMatch = job.company.toLowerCase().includes(term);
        const categoryMatch = job.category.toLowerCase().includes(term);
        const locationMatch = job.location.toLowerCase().includes(term);

        if (titleMatch || companyMatch || categoryMatch || locationMatch) {
            results.push(job);
            console.log(`  ✔ Match found at index [${i}]: "${job.title}"`);
        }
    }

    console.log(`[LinearSearch] Search complete. Found ${results.length} result(s) out of ${jobs.length} jobs.`);
    return results;
}

/**
 * linearSearchByField
 * A more specific variant: search a single field for an exact value.
 * Demonstrates step-by-step comparison.
 *
 * @param {Array}  jobs       - Array of job objects
 * @param {string} field      - Field name to match (e.g., "category")
 * @param {string} target     - Exact value to match (case-insensitive)
 * @returns {Array} Matching jobs
 */
function linearSearchByField(jobs, field, target) {
    console.log(`\n[LinearSearch] Searching field "${field}" for "${target}"...`);
    const targetLower = target.toLowerCase();
    const results = [];

    for (let i = 0; i < jobs.length; i++) {
        const fieldValue = String(jobs[i][field] || "").toLowerCase();
        console.log(`  Checking index [${i}]: ${field} = "${fieldValue}" → ${fieldValue === targetLower ? "MATCH" : "no match"}`);
        if (fieldValue === targetLower) {
            results.push(jobs[i]);
        }
    }

    console.log(`[LinearSearch] Done. ${results.length} match(es) found.`);
    return results;
}


// ╔══════════════════════════════════════════════════╗
// ║        2. BINARY SEARCH (on sorted salary)       ║
// ╚══════════════════════════════════════════════════╝

/**
 * binarySearchBySalary
 * DSA Concept: Binary Search
 * Finds the FIRST job whose salary exactly matches the target
 * in a salary-sorted array.
 *
 * PRE-CONDITION: jobs array MUST be sorted by salary (ascending).
 *
 * Algorithm:
 *   SET low = 0, high = n-1
 *   WHILE low <= high
 *     mid = Math.floor((low + high) / 2)
 *     IF jobs[mid].salary === target → return mid (found)
 *     ELSE IF jobs[mid].salary < target → low = mid + 1  (search right)
 *     ELSE → high = mid - 1             (search left)
 *   RETURN -1 (not found)
 *
 * Time Complexity : O(log n) — halves search space each iteration
 * Space Complexity: O(1)    — no extra space needed
 *
 * @param {Array}  sortedJobs - Array sorted by salary (ascending)
 * @param {number} target     - Exact salary value to find
 * @returns {number} Index of the matched job, or -1 if not found
 */
function binarySearchBySalary(sortedJobs, target) {
    console.log(`\n[BinarySearch] Searching for salary = ₹${target} in ${sortedJobs.length} jobs...`);

    let low = 0;
    let high = sortedJobs.length - 1;
    let step = 0;

    while (low <= high) {
        step++;
        const mid = Math.floor((low + high) / 2);
        const midSalary = sortedJobs[mid].salary;

        console.log(`  Step ${step}: low=${low}, high=${high}, mid=${mid} → salary=₹${midSalary}`);

        if (midSalary === target) {
            console.log(`  ✔ Found "${sortedJobs[mid].title}" at index [${mid}] in ${step} step(s).`);
            return mid;
        } else if (midSalary < target) {
            low = mid + 1; // Target is in the right half
            console.log(`  → Target > mid salary. Moving low to ${low}.`);
        } else {
            high = mid - 1; // Target is in the left half
            console.log(`  → Target < mid salary. Moving high to ${high}.`);
        }
    }

    console.log(`[BinarySearch] Salary ₹${target} not found after ${step} step(s). Returning -1.`);
    return -1;
}

/**
 * binarySearchRange
 * Finds ALL jobs whose salary falls within [minSalary, maxSalary].
 * Uses binary search to find the start boundary, then collects matches.
 *
 * @param {Array}  sortedJobs - Jobs sorted ascending by salary
 * @param {number} minSalary  - Lower bound (inclusive)
 * @param {number} maxSalary  - Upper bound (inclusive)
 * @returns {Array} Jobs in the salary range
 */
function binarySearchRange(sortedJobs, minSalary, maxSalary) {
    console.log(`\n[BinarySearch] Range search: ₹${minSalary} – ₹${maxSalary}`);

    // Find the leftmost index where salary >= minSalary
    let lo = 0, hi = sortedJobs.length - 1, start = sortedJobs.length;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (sortedJobs[mid].salary >= minSalary) {
            start = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    // Collect all jobs from start up to maxSalary
    const results = [];
    for (let i = start; i < sortedJobs.length && sortedJobs[i].salary <= maxSalary; i++) {
        results.push(sortedJobs[i]);
    }

    console.log(`[BinarySearch] Range search complete. ${results.length} job(s) in range.`);
    return results;
}


// --------------------------------------------------
// EXPORT (browser globals for demo.js)
// --------------------------------------------------
if (typeof window !== "undefined") {
    window.DSA_Searching = {
        linearSearch,
        linearSearchByField,
        binarySearchBySalary,
        binarySearchRange,
    };
}
