// limit.js
export const limitModule = {
    id: 'lim',
    title: 'Limitations of Algorithmic Power',
    subtopics: [
        /* --- ORIGINAL TOPICS --- */
        { id: 'lim-countability', title: 'Countability & Infinity' },
        { id: 'lim-diagonal', title: 'Cantor\'s Diagonalization' },
        { id: 'lim-decidable', title: 'Decidable vs. Acceptable' },
        { id: 'lim-halting', title: 'The Halting Problem' },
        
        /* --- EFFICIENCY & COMPLEXITY --- */
        { id: 'lim-efficiency', title: 'Analysis of Algorithms' },
        { id: 'lim-tractability', title: 'Tractable vs. Intractable' },
        { id: 'lim-types', title: 'Decision vs. Optimization' },

        /* --- NEW TOPICS FROM LATEST PDF --- */
        { id: 'lim-lowerbounds', title: 'Lower Bounds & Gaps' },
        { id: 'lim-adversary', title: 'Adversary Arguments' },
            { id: 'lim-decisiontrees', title: 'Decision Trees & Sorting' },
        { id: 'lim-reduction', title: 'Problem Reduction' }

        
    ],
    content: {
        'lim-countability': {
            title: 'Countability: TMs vs. Languages',
            html: `
                <div class="space-y-6">
                    <!-- TMs are Countable -->
                    <div class="bg-white/5 p-5 rounded-lg border-l-4 border-blue-400">
                        <h4 class="font-bold text-accent text-lg mb-2">1. Turing Machines are Countable</h4>
                        <p class="opacity-80 mb-2">We can list every Deterministic TM. How?</p>
                        <ul class="list-disc pl-5 text-sm space-y-1 opacity-70">
                            <li>Every state, symbol, and move (L/R) can be assigned a binary number.</li>
                            <li>Concatenate these to form a unique "Turing Number" for every machine.</li>
                            <li>Since they can be listed ($M_1, M_2, M_3...$), the set of TMs is <strong>Countably Infinite</strong> (like Integers).</li>
                        </ul>
                    </div>

                    <!-- Languages are Uncountable -->
                    <div class="bg-white/5 p-5 rounded-lg border-l-4 border-red-400">
                        <h4 class="font-bold text-accent text-lg mb-2">2. Languages are Uncountable</h4>
                        <p class="opacity-80 mb-2">The set of all possible languages (the Power Set of all strings) is <strong>Uncountably Infinite</strong> (like Real Numbers).</p>
                        <p class="text-sm mt-2 font-mono bg-black/30 p-2 rounded">
                            |Languages| > |Turing Machines|
                        </p>
                    </div>

                    <!-- Conclusion -->
                    <div class="p-4 text-center">
                        <h3 class="text-xl font-bold text-white">The Scary Conclusion:</h3>
                        <p class="text-red-300 mt-2">There are infinitely many languages (problems) that NO Turing Machine can recognize.</p>
                    </div>
                </div>
            `
        },
        'lim-diagonal': {
            title: 'Proof: Cantor\'s Diagonalization',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">How do we prove something is uncountable? We assume it IS countable (listed in a table), and then prove we missed something.</p>

                    <div class="overflow-x-auto bg-black/40 p-4 rounded-xl border border-white/10">
                        <h5 class="text-center font-bold mb-4 text-gray-400">The Power Set Table (Listing all Subsets)</h5>
                        <table class="w-full text-center font-mono text-lg">
                            <thead>
                                <tr class="text-gray-500 border-b border-gray-700">
                                    <th class="p-2">Subset</th>
                                    <th class="p-2">e1</th>
                                    <th class="p-2">e2</th>
                                    <th class="p-2">e3</th>
                                    <th class="p-2">e4</th>
                                    <th class="p-2">...</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 text-accent">S1</td>
                                    <td class="p-2 text-red-500 font-bold border border-red-500/50 rounded bg-red-900/20">T</td>
                                    <td class="p-2 opacity-50">T</td>
                                    <td class="p-2 opacity-50">T</td>
                                    <td class="p-2 opacity-50">F</td>
                                    <td class="p-2 opacity-50">...</td>
                                </tr>
                                <tr>
                                    <td class="p-2 text-accent">S2</td>
                                    <td class="p-2 opacity-50">F</td>
                                    <td class="p-2 text-red-500 font-bold border border-red-500/50 rounded bg-red-900/20">F</td>
                                    <td class="p-2 opacity-50">F</td>
                                    <td class="p-2 opacity-50">T</td>
                                    <td class="p-2 opacity-50">...</td>
                                </tr>
                                <tr>
                                    <td class="p-2 text-accent">S3</td>
                                    <td class="p-2 opacity-50">T</td>
                                    <td class="p-2 opacity-50">T</td>
                                    <td class="p-2 text-red-500 font-bold border border-red-500/50 rounded bg-red-900/20">F</td>
                                    <td class="p-2 opacity-50">F</td>
                                    <td class="p-2 opacity-50">...</td>
                                </tr>
                                <tr>
                                    <td class="p-2 text-accent">S4</td>
                                    <td class="p-2 opacity-50">T</td>
                                    <td class="p-2 opacity-50">T</td>
                                    <td class="p-2 opacity-50">T</td>
                                    <td class="p-2 text-red-500 font-bold border border-red-500/50 rounded bg-red-900/20">F</td>
                                    <td class="p-2 opacity-50">...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-white/5 p-4 rounded-lg">
                        <h4 class="font-bold text-accent mb-2">The "New" Subset</h4>
                        <p class="text-sm opacity-80 mb-2">We construct a new subset <strong>D</strong> by taking the diagonal (red boxes) and <span class="text-red-400 font-bold">FLIPPING</span> them.</p>
                        <div class="flex gap-2 items-center justify-center font-mono text-xl my-4">
                            <span class="text-red-400">D = </span>
                            <span class="border-b-2 border-green-500">F</span>
                            <span class="border-b-2 border-green-500">T</span>
                            <span class="border-b-2 border-green-500">T</span>
                            <span class="border-b-2 border-green-500">T</span>
                            <span>...</span>
                        </div>
                        <p class="text-sm opacity-80">
                            <strong>D</strong> differs from S1 in the 1st position, S2 in the 2nd, S3 in the 3rd, etc.
                            <br>Therefore, <strong>D is not in the list</strong>. The list was incomplete.
                        </p>
                    </div>
                </div>
            `
        },
        'lim-decidable': {
            title: 'Decidable vs. Acceptable',
            html: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                    <!-- Acceptable -->
                    <div class="bg-yellow-900/10 border border-yellow-500/30 p-6 rounded-xl flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-yellow-400 mb-4">Acceptable</h3>
                            <p class="opacity-80 mb-4">A language $L$ is acceptable if there exists a TM that:</p>
                            <ul class="list-disc pl-5 space-y-2 text-sm">
                                <li><strong>Halts & Accepts</strong> if input is in $L$.</li>
                                <li><strong>Halts & Rejects</strong> OR <strong>Loops Forever</strong> if input is NOT in $L$.</li>
                            </ul>
                        </div>
                        <div class="mt-4 text-center text-xs opacity-50 uppercase tracking-widest">Risky</div>
                    </div>

                    <!-- Decidable -->
                    <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-xl flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-green-400 mb-4">Decidable</h3>
                            <p class="opacity-80 mb-4">A language $L$ is decidable if there exists a TM that:</p>
                            <ul class="list-disc pl-5 space-y-2 text-sm">
                                <li><strong>Halts & Accepts</strong> if input is in $L$.</li>
                                <li><strong>Halts & Rejects</strong> if input is NOT in $L$.</li>
                                <li class="text-green-300 font-bold">Never Loops Forever.</li>
                            </ul>
                        </div>
                        <div class="mt-4 text-center text-xs opacity-50 uppercase tracking-widest">Safe</div>
                    </div>
                </div>
                <div class="mt-6 text-center opacity-70 italic">
                    "Is every decidable language acceptable? <strong class="text-white">Yes</strong>."<br>
                    "Is every acceptable language decidable? <strong class="text-red-400">No</strong>."
                </div>
            `
        },
        'lim-halting': {
            title: 'The Halting Problem',
            html: `
                <div class="space-y-8">
                    <div class="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                        <h4 class="font-bold text-red-300">The Problem</h4>
                        <p class="text-sm opacity-90">Does a specific TM ($M$) halt on a specific input ($w$)?<br>We will prove that <strong>no algorithm exists</strong> to solve this generally.</p>
                    </div>

                    <!-- Visual Proof -->
                    <div class="bg-white/5 p-6 rounded-xl relative">
                        <h4 class="text-center font-bold mb-6">Proof by Contradiction</h4>
                        
                        <div class="flex flex-col items-center">
                            <!-- Step 1: The Hypothetical Machine -->
                            <div class="flex items-center gap-4 mb-8">
                                <div class="w-32 h-20 border-2 border-dashed border-gray-500 rounded flex items-center justify-center text-center text-sm p-2">
                                    Hypothetical<br>Decider <strong>H</strong>
                                </div>
                                <span class="text-2xl">→</span>
                                <div class="flex flex-col gap-2">
                                    <div class="text-green-400 text-sm">Output 1 (Yes, it halts)</div>
                                    <div class="text-red-400 text-sm">Output 0 (No, it loops)</div>
                                </div>
                            </div>

                            <!-- Step 2: The Logic Trap -->
                            <p class="text-sm opacity-60 mb-4">Now we wrap <strong>H</strong> inside a new machine <strong>W</strong> (Opposite):</p>
                            
                            <div class="relative w-[500px] h-[250px] bg-black/30 rounded-xl border border-white/10">
                                <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                    <defs>
                                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                        </marker>
                                    </defs>

                                    <!-- Input -->
                                    <text x="30" y="125" fill="white" font-size="14">Input M</text>
                                    <line x1="80" y1="120" x2="130" y2="120" stroke="white" stroke-width="2" marker-end="url(#arrowhead)" />

                                    <!-- Machine H box -->
                                    <rect x="130" y="80" width="80" height="80" fill="#333" stroke="white" stroke-width="2" />
                                    <text x="170" y="125" text-anchor="middle" fill="white" font-weight="bold">H</text>

                                    <!-- Path YES (Top) -->
                                    <path d="M 210 100 L 280 60" fill="none" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowhead)" />
                                    <text x="230" y="70" fill="#4ade80" font-size="12">Says "Halt"</text>

                                    <!-- Loop Trap -->
                                    <circle cx="330" cy="60" r="30" fill="none" stroke="white" stroke-width="2" />
                                    <path d="M 350 50 Q 370 20 340 35" fill="none" stroke="white" stroke-width="2" marker-end="url(#arrowhead)" />
                                    <text x="330" y="65" text-anchor="middle" fill="white" font-size="12">Loop</text>
                                    <text x="330" y="110" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">If H says Yes -> LOOP</text>

                                    <!-- Path NO (Bottom) -->
                                    <path d="M 210 140 L 280 180" fill="none" stroke="#f87171" stroke-width="2" marker-end="url(#arrowhead)" />
                                    <text x="230" y="190" fill="#f87171" font-size="12">Says "Loop"</text>

                                    <!-- Halt Node -->
                                    <circle cx="330" cy="180" r="25" stroke="#f87171" stroke-width="4" stroke-dasharray="4 2" fill="#111" />
                                    <text x="330" y="185" text-anchor="middle" fill="white">STOP</text>
                                    <text x="330" y="230" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">If H says No -> HALT</text>
                                </svg>
                            </div>

                            <div class="mt-6 p-4 bg-red-900/40 rounded border border-red-500/50 text-center">
                                <h5 class="font-bold mb-2">The Contradiction</h5>
                                <p class="text-sm">
                                    Feed <strong>W</strong> as input to itself: <span class="font-mono bg-black p-1 rounded">W(W)</span>.<br>
                                    1. If W halts, H says "Yes", so W loops. (Contradiction)<br>
                                    2. If W loops, H says "No", so W halts. (Contradiction)<br>
                                    <span class="text-white font-bold block mt-2">Therefore, H cannot exist.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'lim-church': {
            title: 'The Church-Turing Thesis',
            html: `
                <div class="flex flex-col items-center justify-center h-full text-center space-y-6">
                    <div class="text-6xl opacity-20">📜</div>
                    <blockquote class="text-2xl font-serif italic max-w-2xl">
                        "Any function that is naturally regarded as computable can be computed by a Turing Machine."
                    </blockquote>
                    <div class="space-y-2 opacity-80">
                        <p>There is no machine with greater computational power than a Turing Machine.</p>
                        <p class="text-sm text-yellow-500">Note: This is a thesis (hypothesis), not a mathematical theorem, but it is universally accepted.</p>
                    </div>
                </div>
            `
        },
         'lim-countability': {
            title: 'Countability: TMs vs. Languages',
            html: `
                <div class="space-y-6">
                    <div class="bg-white/5 p-5 rounded-lg border-l-4 border-blue-400">
                        <h4 class="font-bold text-accent text-lg mb-2">1. Turing Machines are Countable</h4>
                        <p class="opacity-80 mb-2">Every TM has a unique "Turing Number" (binary encoding). Since they can be listed ($M_1, M_2...$), the set of TMs is <strong>Countably Infinite</strong>.</p>
                    </div>
                    <div class="bg-white/5 p-5 rounded-lg border-l-4 border-red-400">
                        <h4 class="font-bold text-accent text-lg mb-2">2. Languages are Uncountable</h4>
                        <p class="opacity-80 mb-2">The set of all possible languages (Power Set of strings) is <strong>Uncountably Infinite</strong>.</p>
                        <p class="text-sm mt-2 font-mono bg-black/30 p-2 rounded">|Languages| > |Turing Machines|</p>
                    </div>
                    <div class="p-4 text-center">
                        <p class="text-red-300 mt-2 font-bold">Conclusion: There are infinitely many problems that NO Turing Machine can solve.</p>
                    </div>
                </div>
            `
        },
        'lim-diagonal': {
            title: 'Proof: Cantor\'s Diagonalization',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">To prove Uncountability, we assume a list exists, then prove a contradiction.</p>
                    <div class="overflow-x-auto bg-black/40 p-4 rounded-xl border border-white/10">
                        <table class="w-full text-center font-mono text-lg">
                            <thead><tr class="text-gray-500"><th class="p-2">Sub</th><th class="p-2">e1</th><th class="p-2">e2</th><th class="p-2">e3</th></tr></thead>
                            <tbody>
                                <tr><td class="text-accent">S1</td><td class="text-red-500 font-bold bg-red-900/20">T</td><td class="opacity-50">T</td><td class="opacity-50">T</td></tr>
                                <tr><td class="text-accent">S2</td><td class="opacity-50">F</td><td class="text-red-500 font-bold bg-red-900/20">F</td><td class="opacity-50">F</td></tr>
                                <tr><td class="text-accent">S3</td><td class="opacity-50">T</td><td class="opacity-50">T</td><td class="text-red-500 font-bold bg-red-900/20">F</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bg-white/5 p-4 rounded-lg">
                        <p class="text-sm opacity-80">Construct <strong>D</strong> by flipping the diagonal: <strong>F, T, T...</strong></p>
                        <p class="text-sm text-accent mt-2">D differs from every row. The list is incomplete.</p>
                    </div>
                </div>
            `
        },
        'lim-decidable': {
            title: 'Decidable vs. Acceptable',
            html: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-yellow-900/10 border border-yellow-500/30 p-6 rounded-xl">
                        <h3 class="text-2xl font-bold text-yellow-400 mb-4">Acceptable</h3>
                        <ul class="list-disc pl-5 space-y-2 text-sm opacity-80">
                            <li><strong>In Language:</strong> Machine Halts & Accepts.</li>
                            <li><strong>Not In Language:</strong> Machine Rejects OR <span class="text-red-400">Loops Forever</span>.</li>
                        </ul>
                    </div>
                    <div class="bg-green-900/10 border border-green-500/30 p-6 rounded-xl">
                        <h3 class="text-2xl font-bold text-green-400 mb-4">Decidable</h3>
                        <ul class="list-disc pl-5 space-y-2 text-sm opacity-80">
                            <li><strong>In Language:</strong> Machine Halts & Accepts.</li>
                            <li><strong>Not In Language:</strong> Machine Halts & Rejects.</li>
                            <li class="text-green-300">Never Loops Forever.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'lim-halting': {
            title: 'The Halting Problem',
            html: `
                <div class="space-y-8">
                    <p class="text-sm opacity-90">Can we write a program <strong>H</strong> that determines if ANY program halts?</p>
                    <div class="bg-white/5 p-6 rounded-xl relative flex flex-col items-center">
                        <div class="p-4 bg-red-900/40 rounded border border-red-500/50 text-center">
                            <h5 class="font-bold mb-2">The Contradiction Machine (W)</h5>
                            <p class="text-sm">
                                1. Feed <strong>W</strong> into itself.<br>
                                2. If H says "W will Halt", W enters an infinite loop.<br>
                                3. If H says "W will Loop", W halts immediately.<br>
                                <span class="text-white font-bold block mt-2">W does the opposite of what H predicts. Therefore H cannot exist.</span>
                            </p>
                        </div>
                    </div>
                </div>
            `
        },

        /* --- NEW CONTENT STARTS HERE --- */

        'lim-efficiency': {
            title: 'Analysis of Algorithms',
            html: `
                <div class="space-y-8">
                    <!-- CASES -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div class="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                            <div class="text-2xl mb-2">🚀</div>
                            <h4 class="font-bold text-green-400">Best Case</h4>
                            <p class="font-mono text-sm opacity-70">B(n)</p>
                            <p class="text-xs mt-2">Min ops for input size n.</p>
                        </div>
                        <div class="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                            <div class="text-2xl mb-2">🎲</div>
                            <h4 class="font-bold text-yellow-400">Average Case</h4>
                            <p class="font-mono text-sm opacity-70">A(n)</p>
                            <p class="text-xs mt-2">Expected ops on typical input.</p>
                        </div>
                        <div class="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                            <div class="text-2xl mb-2">🐢</div>
                            <h4 class="font-bold text-red-400">Worst Case</h4>
                            <p class="font-mono text-sm opacity-70">W(n)</p>
                            <p class="text-xs mt-2">Max ops for input size n.</p>
                        </div>
                    </div>

                    <!-- SEQUENTIAL SEARCH EXAMPLE -->
                    <div class="bg-white/5 p-4 rounded-lg">
                        <h4 class="font-bold text-accent mb-2">Example: Sequential Search</h4>
                        <p class="text-sm opacity-80 mb-4">Scanning a list of $n$ elements for key $K$.</p>
                        <div class="space-y-2 text-sm font-mono">
                            <div class="flex justify-between border-b border-white/10 pb-1">
                                <span>Best Case</span>
                                <span class="text-green-400">1 (Found at start)</span>
                            </div>
                            <div class="flex justify-between border-b border-white/10 pb-1">
                                <span>Worst Case</span>
                                <span class="text-red-400">n (Found at end or not found)</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Average Case</span>
                                <span class="text-yellow-400">n/2 (Probabilistic)</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'lim-tractability': {
            title: 'Tractable vs. Intractable',
            html: `
                <div class="space-y-8">
                    <p class="opacity-80">Just because a problem is <em>Decidable</em> (solvable), doesn't mean it is <em>Tractable</em> (solvable in reasonable time).</p>

                    <!-- DEFINITIONS -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-4 rounded border-l-4 border-blue-500 bg-blue-900/10">
                            <h4 class="font-bold text-blue-400 mb-1">Tractable (Polynomial)</h4>
                            <p class="text-sm opacity-80">Solvable in $O(n^k)$ time.</p>
                            <p class="font-mono text-xs mt-2 text-blue-300">n, n log n, n², n¹⁰⁰</p>
                        </div>
                        <div class="p-4 rounded border-l-4 border-red-500 bg-red-900/10">
                            <h4 class="font-bold text-red-400 mb-1">Intractable (Super-poly)</h4>
                            <p class="text-sm opacity-80">Worse than any polynomial.</p>
                            <p class="font-mono text-xs mt-2 text-red-300">2ⁿ, n!, nⁿ</p>
                        </div>
                    </div>

                    <!-- COMPARISON TABLE -->
                    <div class="overflow-x-auto">
                        <h4 class="font-bold text-center mb-4 text-accent">Impact of Input Size (n)</h4>
                        <table class="w-full text-center text-sm">
                            <thead>
                                <tr class="bg-white/10">
                                    <th class="p-2">Complexity</th>
                                    <th class="p-2">n = 10</th>
                                    <th class="p-2">n = 50</th>
                                    <th class="p-2">n = 60</th>
                                </tr>
                            </thead>
                            <tbody class="font-mono">
                                <tr class="text-blue-400">
                                    <td class="p-2 border-b border-white/10">n²</td>
                                    <td class="p-2 border-b border-white/10">Instant</td>
                                    <td class="p-2 border-b border-white/10">Instant</td>
                                    <td class="p-2 border-b border-white/10">Instant</td>
                                </tr>
                                <tr class="text-blue-400">
                                    <td class="p-2 border-b border-white/10">n⁵</td>
                                    <td class="p-2 border-b border-white/10">0.1s</td>
                                    <td class="p-2 border-b border-white/10">5 mins</td>
                                    <td class="p-2 border-b border-white/10">13 mins</td>
                                </tr>
                                <tr class="text-red-400 font-bold">
                                    <td class="p-2 border-b border-white/10">2ⁿ</td>
                                    <td class="p-2 border-b border-white/10">Instant</td>
                                    <td class="p-2 border-b border-white/10">35 Years</td>
                                    <td class="p-2 border-b border-white/10">366 Centuries</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },
        'lim-types': {
            title: 'Problem Types: Optimization vs. Decision',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">Many hard problems come in two flavors. Complexity theory usually focuses on the <strong>Decision</strong> version.</p>

                    <div class="relative bg-white/5 p-6 rounded-xl">
                        <div class="absolute -top-3 left-6 bg-accent text-black px-2 py-1 text-xs font-bold rounded">Example: Traveling Salesman</div>
                        
                        <div class="space-y-6 mt-2">
                            <div>
                                <h4 class="font-bold text-purple-400">1. Optimization Problem</h4>
                                <p class="text-sm opacity-70">"Find the route with the <strong>minimum</strong> weight."</p>
                                <div class="bg-black/30 p-2 mt-2 rounded border border-red-500/30 text-xs">
                                    <span class="text-red-400 font-bold">Hard to Verify:</span> If I give you a solution, can you quickly prove it is the <em>absolute minimum</em>? No.
                                </div>
                            </div>

                            <div class="w-full h-px bg-white/10"></div>

                            <div>
                                <h4 class="font-bold text-purple-400">2. Decision Problem</h4>
                                <p class="text-sm opacity-70">"Does a route of weight <strong>< k</strong> exist?"</p>
                                <div class="bg-black/30 p-2 mt-2 rounded border border-green-500/30 text-xs">
                                    <span class="text-green-400 font-bold">Easy to Verify:</span> If I give you a solution (a route), you can quickly add it up and check if it is < k.
                                </div>
                            </div>
                        </div>
                    </div>

                    <p class="text-sm text-center opacity-60 italic">
                        "If we could solve the decision problem efficiently, we could solve the optimization problem efficiently (using binary search on k)."
                    </p>
                </div>
            `
        },
        'lim-lowerbounds': {
            title: 'Lower Bounds & Algorithmic Gaps',
            html: `
                <div class="space-y-8">
                    <!-- DEFINITIONS -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded">
                            <h4 class="font-bold text-blue-400">Upper Bound (Algorithm)</h4>
                            <p class="text-sm opacity-80">The worst-case complexity of the <em>best known algorithm</em>.</p>
                            <p class="text-xs mt-2 text-blue-300">"We know it's possible to solve it this fast."</p>
                        </div>
                        <div class="bg-red-900/10 border-l-4 border-red-500 p-4 rounded">
                            <h4 class="font-bold text-red-400">Lower Bound (Problem)</h4>
                            <p class="text-sm opacity-80">The limit on efficiency for <em>ANY possible algorithm</em>.</p>
                            <p class="text-xs mt-2 text-red-300">"It is impossible to solve it faster than this."</p>
                        </div>
                    </div>

                    <!-- TIGHTNESS VS GAP -->
                    <div class="bg-white/5 p-6 rounded-xl">
                        <h4 class="font-bold text-accent mb-4 text-center">Is the Problem "Tight"?</h4>
                        
                        <div class="flex flex-col md:flex-row items-center justify-around gap-4 text-center">
                            <!-- TIGHT -->
                            <div class="w-full">
                                <div class="text-green-400 font-bold mb-1">Tight Problem</div>
                                <div class="text-xs opacity-60 mb-2">Lower Bound ≈ Upper Bound</div>
                                <div class="bg-black/30 p-3 rounded border border-green-500/30">
                                    <p class="font-mono text-sm">Sorting</p>
                                    <p class="text-xs mt-1">Both are $O(n \log n)$</p>
                                </div>
                            </div>
                            
                            <div class="text-2xl opacity-30 hidden md:block">|</div>

                            <!-- GAP -->
                            <div class="w-full">
                                <div class="text-yellow-400 font-bold mb-1">Algorithmic Gap</div>
                                <div class="text-xs opacity-60 mb-2">Lower Bound < Upper Bound</div>
                                <div class="bg-black/30 p-3 rounded border border-yellow-500/30">
                                    <p class="font-mono text-sm">Matrix Mult.</p>
                                    <p class="text-xs mt-1">Gap between $n^2$ and $n^{2.37}$</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- TRIVIAL LOWER BOUND -->
                    <div>
                        <h4 class="font-bold text-accent mb-2">Trivial Lower Bounds</h4>
                        <p class="text-sm opacity-80 mb-2">Found by counting input/output size. An algorithm <em>must</em> at least read the input and write the output.</p>
                        <ul class="list-disc pl-5 text-sm font-mono opacity-70">
                            <li>Matrix Multiplication: Input is $2n^2$, so LB is $\Omega(n^2)$.</li>
                            <li>Permutations: Output is $n!$, so LB is $\Omega(n!)$.</li>
                        </ul>
                        <p class="text-xs mt-2 text-red-400">Warning: Trivial bounds are often too low to be useful (e.g. TSP input is $n^2$, but the problem is much harder).</p>
                    </div>
                </div>
            

                  <div class="space-y-8">
                    <!-- DEFINITIONS -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded">
                            <h4 class="font-bold text-blue-400">Upper Bound (Algorithm)</h4>
                            <p class="text-sm opacity-80">The complexity of the <em>best known algorithm</em>.</p>
                            <p class="text-xs mt-2 text-blue-300">"Sufficient: We know we can do it this fast."</p>
                        </div>
                        <div class="bg-red-900/10 border-l-4 border-red-500 p-4 rounded">
                            <h4 class="font-bold text-red-400">Lower Bound (Problem)</h4>
                            <p class="text-sm opacity-80">The limit on efficiency for <em>ANY possible algorithm</em>.</p>
                            <p class="text-xs mt-2 text-red-300">"Necessary: Impossible to be faster than this."</p>
                        </div>
                    </div>

                    <!-- TIGHTNESS VS GAP -->
                    <div class="bg-white/5 p-6 rounded-xl">
                        <h4 class="font-bold text-accent mb-4 text-center">Is the Problem "Tight"?</h4>
                        
                        <div class="flex flex-col md:flex-row items-center justify-around gap-4 text-center">
                            <!-- TIGHT -->
                            <div class="w-full">
                                <div class="text-green-400 font-bold mb-1">Tight Problem</div>
                                <div class="text-xs opacity-60 mb-2">Lower Bound ≈ Upper Bound</div>
                                <div class="bg-black/30 p-3 rounded border border-green-500/30">
                                    <p class="font-mono text-sm">Sorting</p>
                                    <p class="text-xs mt-1">Both are $O(n \log n)$</p>
                                </div>
                            </div>
                            
                            <div class="text-2xl opacity-30 hidden md:block">|</div>

                            <!-- GAP -->
                            <div class="w-full">
                                <div class="text-yellow-400 font-bold mb-1">Algorithmic Gap</div>
                                <div class="text-xs opacity-60 mb-2">Lower Bound < Upper Bound</div>
                                <div class="bg-black/30 p-3 rounded border border-yellow-500/30">
                                    <p class="font-mono text-sm">Matrix Mult.</p>
                                    <p class="text-xs mt-1">Gap between $n^2$ and $n^{2.37}$</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- TRIVIAL LOWER BOUND -->
                    <div>
                        <h4 class="font-bold text-accent mb-2">Trivial Lower Bounds</h4>
                        <p class="text-sm opacity-80 mb-2">Found by counting input/output size. An algorithm <em>must</em> at least read the input and write the output.</p>
                        <ul class="list-disc pl-5 text-sm font-mono opacity-70">
                            <li>Matrix Multiplication: Input is $2n^2$, so LB is $\Omega(n^2)$.</li>
                            <li>Permutations: Output is $n!$, so LB is $\Omega(n!)$.</li>
                        </ul>
                    </div>
                </div>
            
                `
            
        },
        'lim-adversary': {
            title: 'Adversary Arguments',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">How do we prove a Lower Bound? We imagine a <strong>Malevolent but Honest Adversary</strong>.</p>
                    
                    <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                        <h4 class="font-bold text-white mb-2">The Concept</h4>
                        <ul class="list-disc pl-5 text-sm space-y-2 opacity-80">
                            <li>The Adversary makes up the input <em>as the algorithm runs</em>.</li>
                            <li>They always force the algorithm down the <strong>worst/longest path</strong>.</li>
                            <li>They must stay consistent with their previous answers.</li>
                        </ul>
                    </div>

                    <!-- VISUAL EXAMPLE: GUESSING GAME -->
                    <div class="bg-black/30 p-6 rounded-xl border border-white/10 relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-accent text-black text-xs font-bold px-2 py-1">Example: Guess Number 1-25</div>
                        
                        <div class="space-y-4">
                            <!-- Step 1 -->
                            <div class="flex items-start gap-3">
                                <div class="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg text-sm rounded-tl-none">
                                    Algorithm: "Is it 8?"
                                </div>
                            </div>
                            <div class="flex items-start gap-3 flex-row-reverse">
                                <div class="bg-red-600/20 text-red-300 px-3 py-1 rounded-lg text-sm rounded-tr-none text-right">
                                    Adversary (Thinking): <span class="italic text-gray-400">Range 1-7 (7 nums) vs 9-25 (17 nums). I'll choose the bigger set.</span><br>
                                    <strong class="text-white">"No, it is Bigger."</strong>
                                </div>
                            </div>

                            <!-- Step 2 -->
                            <div class="flex items-start gap-3">
                                <div class="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg text-sm rounded-tl-none">
                                    Algorithm: "Is it 20?"
                                </div>
                            </div>
                            <div class="flex items-start gap-3 flex-row-reverse">
                                <div class="bg-red-600/20 text-red-300 px-3 py-1 rounded-lg text-sm rounded-tr-none text-right">
                                    Adversary (Thinking): <span class="italic text-gray-400">Range 9-19 (11 nums) vs 21-25 (5 nums).</span><br>
                                    <strong class="text-white">"No, it is Smaller."</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-3 bg-white/5 rounded border border-white/10">
                            <h5 class="font-bold text-accent text-sm">Finding Max (of n items)</h5>
                            <p class="text-xs opacity-70 mt-1">To be the winner, you must beat everyone else. If $m$ hasn't lost yet, it could still be the winner. Adversary ensures $n-1$ comparisons are strictly necessary.</p>
                        </div>
                        <div class="p-3 bg-white/5 rounded border border-white/10">
                            <h5 class="font-bold text-accent text-sm">Merging Sorted Lists</h5>
                            <p class="text-xs opacity-70 mt-1">Adversary arranges data such that you cannot skip comparing any adjacent pairs ($2n-1$ comparisons needed).</p>
                        </div>
                    </div>
                </div>
            `
        },
         'lim-decisiontrees': {
            title: 'Decision Trees & Sorting',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">Any comparison-based algorithm can be visualized as a tree where every node is a comparison ($a < b$).</p>

                    <div class="flex justify-center">
                        <div class="relative w-[300px] h-[150px] bg-black/40 rounded border border-white/10 flex items-center justify-center">
                            <div class="text-center">
                                <div class="font-bold text-white mb-1">Height = Worst Case</div>
                                <div class="text-xs opacity-70">Path from Root to Deepest Leaf</div>
                                <div class="w-full h-px bg-white/20 my-2"></div>
                                <div class="font-bold text-white mb-1">Avg Depth = Average Case</div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white/5 p-6 rounded-xl border-l-4 border-yellow-500">
                        <h4 class="font-bold text-xl mb-4">Sorting Complexity Proof</h4>
                        <ol class="list-decimal pl-5 space-y-3 text-sm font-mono">
                            <li>To sort <strong>n</strong> items, there are <strong>n!</strong> possible orderings (permutations).</li>
                            <li>A binary decision tree must have at least <strong>n!</strong> leaves.</li>
                            <li>Height <strong>h</strong> of binary tree with <strong>L</strong> leaves: <span class="text-accent">h ≥ log₂(L)</span></li>
                            <li>Thus: <span class="text-accent">h ≥ log₂(n!) ≈ n log n</span> (Stirling's approx).</li>
                        </ol>
                        <p class="mt-4 text-center font-bold text-yellow-400">
                            Lower Bound = Ω(n log n)
                        </p>
                    </div>
                </div>
            `
        },
        'lim-reduction': {
            title: 'Problem Reduction',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">A powerful technique: "If I can solve Problem Q, I can solve Problem P."</p>

                    <div class="flex flex-col items-center gap-4 bg-white/5 p-6 rounded-xl">
                        <div class="flex items-center gap-2">
                            <div class="bg-gray-700 px-4 py-2 rounded">Problem P</div>
                            <span>&le;</span>
                            <div class="bg-accent text-black px-4 py-2 rounded font-bold">Problem Q</div>
                        </div>
                        <p class="text-sm text-center">
                            "P is reducible to Q"<br>
                            <span class="text-xs opacity-60">Implies P is no harder than Q. If we know Q's lower bound, it applies to P.</span>
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-black/30 p-4 rounded border border-white/10">
                            <h5 class="font-bold text-accent mb-2">Example: Euclidean MST</h5>
                            <p class="text-xs opacity-80">We can reduce <strong>Element Uniqueness</strong> (Sorting) to MST. Since Sorting is $\Omega(n \log n)$, MST is also at least $\Omega(n \log n)$.</p>
                        </div>
                        <div class="bg-black/30 p-4 rounded border border-white/10">
                            <h5 class="font-bold text-accent mb-2">Squaring vs Multiplying</h5>
                            <p class="text-xs opacity-80 font-mono mb-1">x*y = ((x+y)² - (x-y)²) / 4</p>
                            <p class="text-xs opacity-80">Multiplication reduces to Squaring. Squaring is not harder than Multiplying.</p>
                        </div>
                    </div>
                </div>
            `
        }
    
    }
};