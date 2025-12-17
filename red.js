// prob.js
export const probModule = {
    id: 'prob',
    title: 'P, NP, and NP-Complete Problems',
    subtopics: [
        /* --- CORE CONCEPTS --- */
        { id: 'prob-p', title: 'The Class P (Polynomial)' },
        { id: 'prob-np', title: 'The Class NP' },
        { id: 'prob-npc', title: 'NP-Completeness (NPC)' },
        { id: 'prob-sat', title: 'Boolean Satisfiability (SAT)' },
        
        /* --- DETAILED REDUCTIONS (NEW CONTENT) --- */
        { id: 'prob-red-intro', title: 'Reduction: The Concept' },
        { id: 'prob-red-hp-tsp', title: 'Proof: HP ≤ TSP' },
        { id: 'prob-red-dp-de', title: 'Proof: Disjoint Paths ≤ Dist. Edge' },
        { id: 'prob-red-dhp-uhp', title: 'Proof: Directed HP ≤ Undirected HP' },

        /* --- EXAMPLES & CONTEXT --- */
        { id: 'prob-examples', title: 'Famous NPC Problems' },
        { id: 'prob-million', title: 'The Million Dollar Question' }
    ],
    content: {
        /* =================================================================
           EXISTING SECTIONS (Standard Theory)
           ================================================================= */
        'prob-p': {
            title: 'The Class P (Polynomial Time)',
            html: `
                <div class="space-y-6">
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl">
                        <h4 class="font-bold text-blue-400 text-lg mb-2">Definition</h4>
                        <p class="opacity-90">
                            <strong>P</strong> is the class of <em>Decision Problems</em> solvable by a deterministic algorithm in <strong>Polynomial Time</strong>, $O(n^k)$.
                        </p>
                    </div>
                    <div class="bg-white/5 p-4 rounded-lg">
                        <h5 class="font-bold text-accent mb-2">Why Polynomial?</h5>
                        <ul class="list-disc pl-5 text-sm space-y-2 opacity-80">
                            <li><strong>Efficiency:</strong> Solvable in reasonable time.</li>
                            <li><strong>Machine Independent:</strong> If it's P on a laptop, it's P on a supercomputer.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'prob-np': {
            title: 'The Class NP',
            html: `
                <div class="space-y-8">
                    <div class="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-xl">
                        <h4 class="font-bold text-purple-400 text-lg mb-2">Definition</h4>
                        <p class="opacity-90">
                            <strong>NP</strong> (Non-deterministic Polynomial) consists of problems where a proposed solution ("Certificate") can be <strong>VERIFIED</strong> in polynomial time.
                        </p>
                    </div>
                    <div class="text-center font-bold text-xl">$P \\subseteq NP$</div>
                    <p class="text-xs text-center opacity-60">Because if you can find a solution in poly-time, you can certainly verify it in poly-time.</p>
                </div>
            `
        },
        'prob-npc': {
            title: 'NP-Completeness (NPC)',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">The "Hardest" problems in NP.</p>
                    <div class="bg-red-900/20 border border-red-500/50 p-6 rounded-xl relative">
                        <h4 class="font-bold text-red-400 mb-2">To prove X is NPC:</h4>
                        <ol class="list-decimal pl-5 text-sm space-y-2">
                            <li>Show $X \\in NP$ (Verify solution in poly-time).</li>
                            <li>Pick a known NPC problem $Q$ (like SAT).</li>
                            <li>Reduce $Q$ to $X$ ($Q \\le_p X$).</li>
                        </ol>
                    </div>
                </div>
            `
        },
        'prob-sat': {
            title: 'Boolean Satisfiability (SAT)',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">The <strong>First</strong> NP-Complete problem (Cook's Theorem).</p>
                    <div class="bg-black/30 p-4 rounded border border-white/10 font-mono text-sm">
                        (A ∨ ¬B) ∧ (¬A ∨ C) ∧ ...
                    </div>
                    <p class="text-sm">Can you set A, B, C to True/False such that the formula evaluates to TRUE?</p>
                </div>
            `
        },

        /* =================================================================
           NEW SECTIONS: DETAILED REDUCTIONS (FROM PDF)
           ================================================================= */

        'prob-red-intro': {
            title: 'Polynomial Reduction: The Concept',
            html: `
                <div class="space-y-6">
                    <div class="bg-white/5 p-6 rounded-xl text-center">
                        <h3 class="text-2xl font-bold mb-2">Problem A $\\le_p$ Problem B</h3>
                        <p class="text-sm opacity-80">
                            "I can turn any instance of A into an instance of B."
                        </p>
                        <p class="mt-4 text-accent font-bold">Implication:</p>
                        <p class="text-sm">If B is easy, A is easy.<br>If A is hard, B is hard.</p>
                    </div>
                    
                    <div class="bg-yellow-900/20 p-4 rounded border border-yellow-500/30 text-sm">
                        <h5 class="font-bold text-yellow-400 mb-2">Exam Tips for Reductions</h5>
                        <ul class="list-disc pl-5 space-y-2 opacity-90">
                            <li><strong>Define</strong> the decision problems precisely.</li>
                            <li><strong>Construct</strong> the gadget/transformation explicitly.</li>
                            <li><strong>Prove Correctness</strong> in both directions ($\Rightarrow$ and $\Leftarrow$).</li>
                            <li><strong>State Complexity:</strong> Mention the construction is $O(n^k)$.</li>
                        </ul>
                    </div>
                </div>
            `
        },

        'prob-red-hp-tsp': {
            title: '1. Hamiltonian Path ≤ TSP',
            html: `
                <div class="space-y-8">
                    <div class="bg-black/30 p-4 rounded border border-white/10">
                        <h5 class="font-bold text-accent mb-2">The Goal</h5>
                        <p class="text-sm">We have a graph $G$ (unweighted). We want to know if it has a path visiting every node exactly once (HP). We will ask a TSP solver to figure this out.</p>
                    </div>

                    <!-- VISUALIZATION -->
                    <div class="flex flex-col items-center gap-6">
                        <!-- Original Graph -->
                        <div class="relative w-[300px] h-[150px] bg-white/5 rounded-xl border border-white/10 p-4">
                            <p class="text-xs text-center mb-2 font-bold">Input Graph G</p>
                            <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                <line x1="50" y1="100" x2="150" y2="50" stroke="white" stroke-width="2"/>
                                <line x1="150" y1="50" x2="250" y2="100" stroke="white" stroke-width="2"/>
                                <line x1="50" y1="100" x2="250" y2="100" stroke="white" stroke-width="2"/>
                                <circle cx="50" cy="100" r="10" fill="#333" stroke="white"/>
                                <circle cx="150" cy="50" r="10" fill="#333" stroke="white"/>
                                <circle cx="250" cy="100" r="10" fill="#333" stroke="white"/>
                            </svg>
                        </div>

                        <div class="text-2xl">↓ Transform</div>

                        <!-- Constructed TSP Graph -->
                        <div class="relative w-[300px] h-[180px] bg-white/5 rounded-xl border border-white/10 p-4">
                            <p class="text-xs text-center mb-2 font-bold">TSP Graph G' (Complete)</p>
                            <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                <!-- Original Edges (Weight 1) -->
                                <line x1="50" y1="100" x2="150" y2="50" stroke="#4ade80" stroke-width="3"/>
                                <text x="90" y="70" fill="#4ade80" font-size="12" font-weight="bold">1</text>
                                
                                <line x1="150" y1="50" x2="250" y2="100" stroke="#4ade80" stroke-width="3"/>
                                <text x="200" y="70" fill="#4ade80" font-size="12" font-weight="bold">1</text>

                                <line x1="50" y1="100" x2="250" y2="100" stroke="#4ade80" stroke-width="3"/>
                                <text x="150" y="95" fill="#4ade80" font-size="12" font-weight="bold">1</text>

                                <!-- New Non-Edges (Weight 2) -->
                                <!-- (Implicitly all other connections, technically none in a triangle, but imagine n=4) -->
                                <text x="150" y="140" fill="#f87171" font-size="12" text-anchor="middle">Non-edges get Weight = 2</text>

                                <circle cx="50" cy="100" r="10" fill="#333" stroke="white"/>
                                <circle cx="150" cy="50" r="10" fill="#333" stroke="white"/>
                                <circle cx="250" cy="100" r="10" fill="#333" stroke="white"/>
                            </svg>
                        </div>
                    </div>

                    <div class="bg-white/5 p-4 rounded-lg">
                        <h5 class="font-bold text-accent mb-2">The Logic</h5>
                        <ul class="list-disc pl-5 text-sm space-y-2 opacity-80">
                            <li><strong>Construction:</strong> Build a complete graph $G'$. If an edge existed in $G$, weight = 1. If not, weight = 2.</li>
                            <li><strong>The Question:</strong> Ask TSP "Is there a tour of weight $\le N$?" (where N is number of cities).</li>
                            <li><strong>Proof ($\Rightarrow$):</strong> If HP exists, we use only original edges (weight 1). Total weight = $N$. TSP says YES.</li>
                            <li><strong>Proof ($\Leftarrow$):</strong> If TSP says YES (weight $\le N$), we must have used only edges with weight 1. These correspond to real edges in $G$. Thus, HP exists.</li>
                        </ul>
                    </div>
                </div>
            `
        },

        'prob-red-dp-de': {
            title: '2. Disjoint Paths ≤ Distinguished Edge',
            html: `
                <div class="space-y-8">
                    <div class="bg-black/30 p-4 rounded border border-white/10">
                        <h5 class="font-bold text-accent mb-2">The Goal</h5>
                        <p class="text-sm">
                            <strong>DP:</strong> Can we find two disjoint paths ($s_1 \to t_1$ and $s_2 \to t_2$)?<br>
                            <strong>DE:</strong> Can we find <em>one</em> path from $S$ to $T$ that passes through specific edge $e^*$?
                        </p>
                    </div>

                    <!-- SCHEMATIC SVG -->
                    <div class="flex justify-center">
                        <div class="relative w-[320px] h-[220px] bg-white/5 rounded-xl border border-white/10 p-2">
                            <p class="text-xs text-center text-gray-400 mb-2">The "Chain" Construction</p>
                            <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                <defs>
                                    <marker id="arrow-sm" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                    </marker>
                                </defs>

                                <!-- Source S -->
                                <circle cx="30" cy="110" r="12" fill="#22c55e" stroke="white"/>
                                <text x="30" y="114" text-anchor="middle" font-size="10" fill="black" font-weight="bold">S</text>

                                <!-- S1 and S2 inputs -->
                                <rect x="80" y="60" width="20" height="20" fill="#333" stroke="white"/>
                                <text x="90" y="74" text-anchor="middle" font-size="10" fill="white">s1</text>
                                <rect x="80" y="140" width="20" height="20" fill="#333" stroke="white"/>
                                <text x="90" y="154" text-anchor="middle" font-size="10" fill="white">s2</text>

                                <!-- Links S to inputs -->
                                <line x1="42" y1="110" x2="80" y2="70" stroke="#555" stroke-width="1" marker-end="url(#arrow-sm)"/>
                                <line x1="42" y1="110" x2="80" y2="150" stroke="#555" stroke-width="1" marker-end="url(#arrow-sm)"/>

                                <!-- The Graph Copy (Abstract) -->
                                <rect x="110" y="40" width="40" height="140" fill="#333" stroke="white" stroke-dasharray="4"/>
                                <text x="130" y="110" text-anchor="middle" font-size="10" fill="white" transform="rotate(-90 130 110)">Graph G</text>

                                <!-- Bridge e* -->
                                <line x1="160" y1="110" x2="200" y2="110" stroke="#facc15" stroke-width="3" marker-end="url(#arrow-sm)"/>
                                <text x="180" y="100" text-anchor="middle" fill="#facc15" font-size="12" font-weight="bold">e*</text>
                                <circle cx="160" cy="110" r="3" fill="white"/>
                                <circle cx="200" cy="110" r="3" fill="white"/>

                                <!-- T1/T2 Outputs -->
                                <rect x="220" y="60" width="20" height="20" fill="#333" stroke="white"/>
                                <text x="230" y="74" text-anchor="middle" font-size="10" fill="white">t1</text>
                                <rect x="220" y="140" width="20" height="20" fill="#333" stroke="white"/>
                                <text x="230" y="154" text-anchor="middle" font-size="10" fill="white">t2</text>

                                <!-- Sink T -->
                                <circle cx="290" cy="110" r="12" fill="#ef4444" stroke="white"/>
                                <text x="290" y="114" text-anchor="middle" font-size="10" fill="black" font-weight="bold">T</text>

                                <!-- Links outputs to T -->
                                <line x1="240" y1="70" x2="278" y2="100" stroke="#555" stroke-width="1" marker-end="url(#arrow-sm)"/>
                                <line x1="240" y1="150" x2="278" y2="120" stroke="#555" stroke-width="1" marker-end="url(#arrow-sm)"/>
                            </svg>
                        </div>
                    </div>

                    <div class="bg-white/5 p-4 rounded-lg">
                        <h5 class="font-bold text-accent mb-2">The Intuition</h5>
                        <p class="text-sm opacity-80">
                            We force the single path in <strong>DE</strong> to behave like two paths. 
                            To get from $S$ to $T$ via $e^*$, you must enter the graph, reach the start of $e^*$, cross it, and then leave the graph.
                            Effectively, cutting $e^*$ gives you the two necessary paths for <strong>DP</strong> ($s \to t$).
                        </p>
                    </div>
                </div>
            `
        },

        'prob-red-dhp-uhp': {
            title: '3. Directed HP ≤ Undirected HP',
            html: `
                <div class="space-y-8">
                    <p class="text-sm opacity-80">How do we enforce direction in an undirected graph? We use a "Valve Gadget".</p>

                    <!-- GADGET SVG -->
                    <div class="flex flex-col items-center gap-6">
                        <div class="flex items-center gap-4">
                            <div class="flex flex-col items-center">
                                <div class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-bold">u</div>
                                <div class="h-8 w-0.5 bg-white relative">
                                    <div class="absolute bottom-0 left-[-3px] border-l-[4px] border-l-transparent border-t-[6px] border-t-white border-r-[4px] border-r-transparent"></div>
                                </div>
                                <div class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-bold">v</div>
                            </div>
                            <div class="text-2xl font-bold">→</div>
                            
                            <!-- The Expansion -->
                            <div class="bg-white/5 p-4 rounded-xl border border-white/10 relative h-[180px] w-[120px]">
                                <p class="text-xs text-center text-gray-400 absolute top-1 w-full">The Gadget</p>
                                <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                    <!-- Node U expansion -->
                                    <circle cx="60" cy="30" r="15" fill="#333" stroke="white"/>
                                    <text x="60" y="34" text-anchor="middle" font-size="10" fill="white">u_out</text>

                                    <!-- Connection -->
                                    <line x1="60" y1="45" x2="60" y2="75" stroke="#facc15" stroke-width="2"/>

                                    <!-- Node V expansion -->
                                    <circle cx="60" cy="90" r="15" fill="#333" stroke="white"/>
                                    <text x="60" y="94" text-anchor="middle" font-size="10" fill="white">v_in</text>
                                    
                                    <line x1="60" y1="105" x2="60" y2="135" stroke="white" stroke-width="2"/>
                                    
                                    <circle cx="60" cy="150" r="15" fill="#333" stroke="white"/>
                                    <text x="60" y="154" text-anchor="middle" font-size="10" fill="white">v_mid</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white/5 p-4 rounded-lg">
                        <h5 class="font-bold text-accent mb-2">Construction Logic</h5>
                        <ol class="list-decimal pl-5 text-sm space-y-2 opacity-80">
                            <li>Expand every vertex $v$ into 3 nodes: $v_{in} - v_{mid} - v_{out}$.</li>
                            <li>$v_{mid}$ is <strong>only</strong> connected to $v_{in}$ and $v_{out}$.</li>
                            <li>This forces any path entering $v$ to go all the way through ($in \to mid \to out$) to not get stuck.</li>
                            <li>Connect $u_{out}$ to $v_{in}$ if an edge $u \to v$ existed.</li>
                        </ol>
                    </div>
                </div>
            `
        },

        /* =================================================================
           EXAMPLES & WRAP UP
           ================================================================= */
        
        'prob-examples': {
            title: 'Famous NP-Complete Problems',
            html: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white/5 rounded border border-white/10">
                        <h5 class="font-bold text-red-400">3-SAT</h5>
                        <p class="text-xs opacity-70 mt-1">Satisfiability with exactly 3 literals per clause.</p>
                    </div>
                    <div class="p-4 bg-white/5 rounded border border-white/10">
                        <h5 class="font-bold text-red-400">Graph Coloring</h5>
                        <p class="text-xs opacity-70 mt-1">Can you color a graph with $k$ colors so no neighbors match?</p>
                    </div>
                    <div class="p-4 bg-white/5 rounded border border-white/10">
                        <h5 class="font-bold text-red-400">Knapsack</h5>
                        <p class="text-xs opacity-70 mt-1">Fit items into capacity $W$ to hit target Value $V$.</p>
                    </div>
                    <div class="p-4 bg-white/5 rounded border border-white/10">
                        <h5 class="font-bold text-red-400">Longest Path</h5>
                        <p class="text-xs opacity-70 mt-1">Finding the shortest path is easy (P). Finding the longest is Hard (NPC).</p>
                    </div>
                </div>
            `
        },
        'prob-million': {
            title: 'The Million Dollar Question',
            html: `
                <div class="flex flex-col items-center justify-center text-center space-y-8 h-full">
                    <h2 class="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        P vs NP
                    </h2>
                    <div class="bg-white/10 p-6 rounded-xl max-w-lg text-left text-sm opacity-90 space-y-4">
                        <p>If $P = NP$, it means every problem whose solution can be <em>verified</em> quickly can also be <em>found</em> quickly.</p>
                        <p class="text-yellow-400 font-bold">Most scientists believe P $\\neq$ NP.</p>
                    </div>
                    <div class="text-xs opacity-50">
                        Clay Mathematics Institute Prize: $1,000,000.
                    </div>
                </div>
            `
        }
    }
};