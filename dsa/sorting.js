/* =====================================================
   DSA Concept: Sorting Algorithms
   File: sorting.js
   =====================================================

   1. BUBBLE SORT
      - Repeatedly compares adjacent elements and swaps them
        if they are in the wrong order.
      - After each full pass, the LARGEST unsorted element
        "bubbles up" to its correct position.
      - Time Complexity  : O(n²) worst/avg, O(n) best (optimised)
      - Space Complexity : O(1)  — in-place sort
      - Stable           : Yes

   2. SELECTION SORT
      - Finds the minimum element in the unsorted portion and
        places it at the start, expanding the sorted region.
      - Time Complexity  : O(n²) all cases
      - Space Complexity : O(1) — in-place
      - Stable           : No

   In this Job Finder project:
     • Bubble Sort    → Sort jobs by salary (ascending / descending)
     • Selection Sort → Sort jobs by title alphabetically
   ===================================================== */


// ╔══════════════════════════════════════════════════╗
// ║         1. BUBBLE SORT (by salary)               ║
// ╚══════════════════════════════════════════════════╝

/**
 * bubbleSortBySalary
 * DSA Concept: Bubble Sort
 * Sorts a copy of the jobs array by salary field.
 * Includes a verbose step-by-step console trace.
 *
 * Algorithm:
 *   FOR i = 0 TO n-1
 *     swapped = false
 *     FOR j = 0 TO n-i-2
 *       IF jobs[j].salary > jobs[j+1].salary
 *         SWAP jobs[j] and jobs[j+1]
 *         swapped = true
 *     IF NOT swapped → BREAK (already sorted)
 *
 * @param {Array}   jobs      - Array of job objects
 * @param {string}  order     - "asc" (default) or "desc"
 * @returns {Array} New sorted array (original is not mutated)
 */
function bubbleSortBySalary(jobs, order = "asc") {
    console.log(`\n[BubbleSort] Sorting ${jobs.length} jobs by salary (${order})...`);

    const arr = [...jobs]; // Work on a copy — do not mutate original
    const n = arr.length;
    let totalSwaps = 0;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        // Each pass guarantees the largest remaining element
        // moves to the end of the unsorted portion.
        for (let j = 0; j < n - i - 1; j++) {
            const shouldSwap = order === "asc"
                ? arr[j].salary > arr[j + 1].salary
                : arr[j].salary < arr[j + 1].salary;

            if (shouldSwap) {
                // SWAP
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                totalSwaps++;
            }
        }

        console.log(`  Pass ${i + 1}: [${arr.map(j => j.salary).join(", ")}]`);

        // Optimisation: if no swaps in this pass, array is sorted
        if (!swapped) {
            console.log(`  Early termination after pass ${i + 1} (no swaps).`);
            break;
        }
    }

    console.log(`[BubbleSort] Done. Total swaps: ${totalSwaps}`);
    console.log("[BubbleSort] Sorted order (salary):");
    arr.forEach((job, idx) => {
        console.log(`  [${idx}] ₹${job.salary.toLocaleString()} — ${job.title} @ ${job.company}`);
    });

    return arr;
}


// ╔══════════════════════════════════════════════════╗
// ║       2. SELECTION SORT (by title/alpha)         ║
// ╚══════════════════════════════════════════════════╝

/**
 * selectionSortByTitle
 * DSA Concept: Selection Sort
 * Sorts a copy of the jobs array alphabetically by title.
 *
 * Algorithm:
 *   FOR i = 0 TO n-1
 *     minIdx = i
 *     FOR j = i+1 TO n-1
 *       IF jobs[j].title < jobs[minIdx].title
 *         minIdx = j
 *     SWAP jobs[i] and jobs[minIdx]
 *
 * @param {Array} jobs - Array of job objects
 * @returns {Array} New sorted array (alphabetical by title)
 */
function selectionSortByTitle(jobs) {
    console.log(`\n[SelectionSort] Sorting ${jobs.length} jobs alphabetically by title...`);

    const arr = [...jobs]; // Copy — do not mutate original
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume current position holds the minimum
        let minIdx = i;

        // Scan the rest of the array to find the true minimum
        for (let j = i + 1; j < n; j++) {
            if (arr[j].title.toLowerCase() < arr[minIdx].title.toLowerCase()) {
                minIdx = j;
            }
        }

        // Swap current element with the found minimum
        if (minIdx !== i) {
            const temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
            console.log(`  Pass ${i + 1}: Swapped "${arr[i].title}" ↔ "${arr[minIdx].title}"`);
        } else {
            console.log(`  Pass ${i + 1}: "${arr[i].title}" already in correct position.`);
        }
    }

    console.log("[SelectionSort] Sorted order (alphabetical by title):");
    arr.forEach((job, idx) => {
        console.log(`  [${idx}] ${job.title}`);
    });

    return arr;
}


/**
 * sortJobsByDate
 * Sorts jobs by their posted date using JavaScript's built-in
 * Array.sort() — included for completeness and contrast.
 * (Array.sort uses TimSort: O(n log n))
 *
 * @param {Array}  jobs  - Array of job objects (with a `posted` field)
 * @param {string} order - "newest" or "oldest"
 * @returns {Array} Sorted array
 */
function sortJobsByDate(jobs, order = "newest") {
    console.log(`\n[JS Sort] Sorting ${jobs.length} jobs by date (${order})...`);

    const arr = [...jobs];
    arr.sort((a, b) => {
        const dateA = new Date(a.posted || 0);
        const dateB = new Date(b.posted || 0);
        return order === "newest" ? dateB - dateA : dateA - dateB;
    });

    console.log("[JS Sort] Sorted order (by date):");
    arr.forEach((job, idx) => {
        console.log(`  [${idx}] ${job.posted || "N/A"} — ${job.title}`);
    });

    return arr;
}


// --------------------------------------------------
// EXPORT (browser globals for demo.js)
// --------------------------------------------------
if (typeof window !== "undefined") {
    window.DSA_Sorting = {
        bubbleSortBySalary,
        selectionSortByTitle,
        sortJobsByDate,
    };
}
