/* =====================================================
   DSA Concept: Stack (LIFO) & Queue (FIFO)
   File: stackQueue.js
   =====================================================

   STACK — Last In, First Out (LIFO)
   ---------------------------------
   Think of a stack of plates: you always take the top
   plate first (the last one placed).
   Used here to track the HISTORY of recently applied jobs.
   Pressing "Undo Last Application" pops from the stack.

   Operations:
     push(item)  → Add to top   → O(1)
     pop()       → Remove top   → O(1)
     peek()      → View top     → O(1)
     isEmpty()   → Check empty  → O(1)

   QUEUE — First In, First Out (FIFO)
   -----------------------------------
   Think of a ticket counter queue: first person to arrive
   is processed first.
   Used here to simulate job APPLICATION PROCESSING ORDER
   (applications are processed in the order they were submitted).

   Operations:
     enqueue(item) → Add to rear    → O(1)
     dequeue()     → Remove from front → O(1)  (shift is O(n), see note)
     front()       → View front     → O(1)
     isEmpty()     → Check empty    → O(1)

   NOTE: JavaScript's Array.shift() is O(n) because it re-indexes
   every element. For production, a linked-list-based queue is
   preferred. Here we use it for clarity in academic demonstration.
   ===================================================== */


// ╔══════════════════════════════════════════════════╗
// ║              STACK IMPLEMENTATION                ║
// ╚══════════════════════════════════════════════════╝

class Stack {
    constructor() {
        // DSA Concept: Stack (LIFO)
        // The underlying storage is a plain array.
        // The "top" of the stack is the LAST element (high index).
        this.items = [];
    }

    /**
     * push - Add an item to the top of the stack.
     * Time Complexity: O(1)
     * @param {*} item - Any value to push
     */
    push(item) {
        this.items.push(item);
        console.log(`[Stack] PUSH → "${item.title || item}". Stack size: ${this.items.length}`);
    }

    /**
     * pop - Remove and return the top item (most recent).
     * Time Complexity: O(1)
     * @returns {*} The top item, or undefined if empty
     */
    pop() {
        if (this.isEmpty()) {
            console.warn("[Stack] POP attempted on an empty stack!");
            return undefined;
        }
        const removed = this.items.pop();
        console.log(`[Stack] POP ← "${removed.title || removed}". Stack size: ${this.items.length}`);
        return removed;
    }

    /**
     * peek - Return the top item WITHOUT removing it.
     * Time Complexity: O(1)
     */
    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    /**
     * isEmpty - Check whether the stack has no elements.
     * Time Complexity: O(1)
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * size - Return number of elements currently in the stack.
     */
    size() {
        return this.items.length;
    }

    /**
     * display - Print the full stack (bottom → top).
     */
    display() {
        if (this.isEmpty()) {
            console.log("[Stack] Stack is empty.");
            return;
        }
        console.log("[Stack] Contents (bottom → top):");
        this.items.forEach((item, idx) => {
            const label = item.title || JSON.stringify(item);
            console.log(`  [${idx}] ${label}`);
        });
    }
}


// ╔══════════════════════════════════════════════════╗
// ║              QUEUE IMPLEMENTATION                ║
// ╚══════════════════════════════════════════════════╝

class Queue {
    constructor() {
        // DSA Concept: Queue (FIFO)
        // The front of the queue is index 0;
        // new items are enqueued at the end (high index).
        this.items = [];
    }

    /**
     * enqueue - Add an item to the rear of the queue.
     * Time Complexity: O(1)
     * @param {*} item - Any value to enqueue
     */
    enqueue(item) {
        this.items.push(item);
        console.log(`[Queue] ENQUEUE → "${item.title || item}". Queue size: ${this.items.length}`);
    }

    /**
     * dequeue - Remove and return the front item (oldest entry).
     * Time Complexity: O(n) with Array.shift — acceptable for demo.
     * @returns {*} The front item, or undefined if empty
     */
    dequeue() {
        if (this.isEmpty()) {
            console.warn("[Queue] DEQUEUE attempted on an empty queue!");
            return undefined;
        }
        const processed = this.items.shift(); // removes index 0
        console.log(`[Queue] DEQUEUE ← "${processed.title || processed}" processed. Queue size: ${this.items.length}`);
        return processed;
    }

    /**
     * front - Peek at the front item without removing it.
     * Time Complexity: O(1)
     */
    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    /**
     * isEmpty - Return true if queue has no elements.
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * size - Return number of elements in the queue.
     */
    size() {
        return this.items.length;
    }

    /**
     * display - Print all items in the queue (front → rear).
     */
    display() {
        if (this.isEmpty()) {
            console.log("[Queue] Queue is empty.");
            return;
        }
        console.log("[Queue] Contents (front → rear):");
        this.items.forEach((item, idx) => {
            const label = item.title || JSON.stringify(item);
            console.log(`  [${idx}] ${label}`);
        });
    }
}


// --------------------------------------------------
// USAGE IN JOB FINDER CONTEXT
// --------------------------------------------------

// applicationHistory — Stack tracking recently applied jobs.
// When the user applies, push the job. Undo pops it.
const applicationHistory = new Stack();

// applicationQueue — Queue simulating backend processing order.
// Applications submitted first are processed first (FIFO).
const applicationQueue = new Queue();

/**
 * recordApplication
 * Called when a user applies for a job.
 * Pushes to history stack AND enqueues for processing.
 * @param {Object} job - The job object being applied to
 */
function recordApplication(job) {
    console.log(`\n[Application] User applied to: "${job.title}" @ ${job.company}`);
    applicationHistory.push(job);   // Track history (LIFO)
    applicationQueue.enqueue(job);  // Queue for processing (FIFO)
}

/**
 * undoLastApplication
 * Simulates an "undo" action — pops the most recent application.
 * NOTE: In a real app this would also remove from the queue.
 * @returns {Object|undefined} The un-applied job
 */
function undoLastApplication() {
    console.log("\n[Application] Undoing last application...");
    return applicationHistory.pop();
}

/**
 * processNextApplication
 * Simulates the backend processing the next queued application.
 * @returns {Object|undefined} The processed application
 */
function processNextApplication() {
    console.log("\n[Application] Processing next queued application...");
    return applicationQueue.dequeue();
}

// --------------------------------------------------
// EXPORT (browser globals for demo.js)
// --------------------------------------------------
if (typeof window !== "undefined") {
    window.DSA_StackQueue = {
        Stack,
        Queue,
        applicationHistory,
        applicationQueue,
        recordApplication,
        undoLastApplication,
        processNextApplication,
    };
}
