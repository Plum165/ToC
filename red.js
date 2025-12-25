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

      
    ],
    content: {
        /* =================================================================
           EXISTING SECTIONS (Standard Theory)
           ================================================================= */
       'prob-p': {
            title: 'The Class P (Polynomial Time)',
            html: `
                <div class="space-y-8">
                    
                    <!-- Definition -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl">
                        <h4 class="font-bold text-blue-400 text-lg mb-2">Definition</h4>
                        <p class="opacity-90">
                            <strong>P</strong> is the class of <em>Decision Problems</em> solvable by a deterministic algorithm in <strong>Polynomial Time</strong> ($O(n^k)$ for some constant $k$).
                        </p>
                    </div>

                    <!-- Why Decision Problems? (Slide 5) -->
                    <div class="bg-white/5 p-5 rounded-xl border border-white/10">
                        <h5 class="font-bold text-accent mb-2">Why do we define P using "Decision Problems"?</h5>
                        <p class="text-sm opacity-80 mb-3">
                            Complexity theory restricts the definition to problems with a simple <strong>YES/NO</strong> answer.
                        </p>
                        <ul class="list-disc pl-5 text-sm space-y-2 opacity-70">
                            <li><strong>To Exclude Massive Outputs:</strong> Some problems (like "List all subsets") have exponentially large outputs. Even printing the answer takes too long, which skews the complexity analysis.</li>
                            <li><strong>Equivalence:</strong> Optimization problems (e.g., "Find the shortest path") can usually be transformed into a series of decision problems (e.g., "Is there a path length < K?") without changing the difficulty class.</li>
                        </ul>
                    </div>

                    <!-- Why Polynomial? (Slide 4) -->
                    <div class="bg-white/5 p-5 rounded-xl border border-white/10">
                        <h5 class="font-bold text-accent mb-4">Why is "Polynomial" the benchmark?</h5>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <div class="bg-black/30 p-4 rounded border border-white/5">
                                <h6 class="text-blue-300 font-bold text-xs uppercase mb-2">Efficiency vs. Inefficiency</h6>
                                <p class="text-xs opacity-70 leading-relaxed">
                                    Polynomial time ($n^2, n^3$) is generally considered "feasible" for computers. Super-polynomial time ($2^n, n!$) becomes impossible to solve very quickly as $n$ grows.
                                </p>
                            </div>

                            <div class="bg-black/30 p-4 rounded border border-white/5">
                                <h6 class="text-purple-300 font-bold text-xs uppercase mb-2">Closure Properties</h6>
                                <p class="text-xs opacity-70 leading-relaxed">
                                    Polynomials are mathematically robust.
                                    <br>The sum or product of two polynomials is still a polynomial.
                                    <br><em>(If you plug the output of one Poly algorithm into another Poly algorithm, the total time is still Poly).</em>
                                </p>
                            </div>

                        </div>
                    </div>

                    <!-- Examples -->
                    <div class="text-center pt-4 border-t border-white/10">
                        <p class="text-sm font-bold text-gray-400 mb-3">Famous Problems in Class P</p>
                        <div class="flex flex-wrap justify-center gap-2">
                            <span class="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded text-xs text-green-300">Sorting ($n \\log n$)</span>
                            <span class="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded text-xs text-green-300">Shortest Path ($E \\log V$)</span>
                            <span class="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded text-xs text-green-300">Minimum Spanning Tree</span>
                            <span class="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded text-xs text-green-300">Matrix Multiplication ($n^3$)</span>
                            <span class="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded text-xs text-green-300">GCD</span>
                        </div>
                    </div>

                </div>
            `
        },
       'prob-np': {
            title: 'The Class NP (Non-Deterministic Polynomial)',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. DETAILED DEFINITION (Slide 6) -->
                    <div class="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-xl">
                        <h4 class="font-bold text-purple-400 text-lg mb-4">Two Ways to Define NP</h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Definition A -->
                            <div>
                                <h5 class="font-bold text-white text-sm mb-2 uppercase tracking-wide">1. The Verifier Definition</h5>
                                <p class="text-sm opacity-90 leading-relaxed">
                                    NP is the class of problems where, if you are given a proposed solution (called a <strong>Certificate</strong>), you can <strong>VERIFY</strong> if it is correct in polynomial time.
                                </p>
                                <div class="mt-3 p-2 bg-black/30 rounded text-xs text-gray-300 italic">
                                    "Checking a Sudoku solution is easy, even if solving it is hard."
                                </div>
                            </div>

                            <!-- Definition B -->
                            <div class="border-l border-white/10 pl-6 md:border-l-0 md:pl-0">
                                <h5 class="font-bold text-white text-sm mb-2 uppercase tracking-wide">2. The Solver Definition</h5>
                                <p class="text-sm opacity-90 leading-relaxed">
                                    NP is the class of problems solvable by a <strong>Non-Deterministic Algorithm</strong> in polynomial time.
                                </p>
                                <div class="mt-3 p-2 bg-black/30 rounded text-xs text-gray-300 italic">
                                    "Imagine a machine that can magically guess the correct path instantly."
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2. THE CURRENT REALITY (Slide 11) -->
                    <div class="bg-white/5 p-5 rounded-lg border border-white/10 text-center">
                        <h5 class="font-bold text-white mb-2">The "Unknown" Status</h5>
                        <p class="text-sm opacity-80 max-w-2xl mx-auto">
                            For the hardest problems in NP, no one has ever found an algorithm faster than <strong>Exponential Time</strong> ($O(2^n)$).
                            <br><br>
                            <span class="text-yellow-400">HOWEVER:</span> No one has ever proved that a polynomial-time algorithm is impossible.
                        </p>
                    </div>

                    <!-- 3. EXAMPLES CATALOG (Slide 12) -->
                    <div>
                        <h4 class="font-bold text-accent mb-4">Famous Problems in NP</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <div class="bg-black/30 p-3 rounded border-l-2 border-purple-500">
                                <span class="text-purple-300 font-bold text-sm block">Hamiltonian Circuit</span>
                                <span class="text-xs opacity-70">Visit every vertex in a graph exactly once and return to the start.</span>
                            </div>

                            <div class="bg-black/30 p-3 rounded border-l-2 border-purple-500">
                                <span class="text-purple-300 font-bold text-sm block">Traveling Salesman (TSP)</span>
                                <span class="text-xs opacity-70">Find the <strong>cheapest</strong> round trip route visiting every city.</span>
                            </div>

                            <div class="bg-black/30 p-3 rounded border-l-2 border-purple-500">
                                <span class="text-purple-300 font-bold text-sm block">Partition Problem</span>
                                <span class="text-xs opacity-70">Can you split $n$ integers into two subsets that have the <strong>same sum</strong>?</span>
                            </div>

                            <div class="bg-black/30 p-3 rounded border-l-2 border-purple-500">
                                <span class="text-purple-300 font-bold text-sm block">Bin Packing</span>
                                <span class="text-xs opacity-70">Fit items of various sizes into the smallest number of fixed-size bins.</span>
                            </div>

                            <div class="bg-black/30 p-3 rounded border-l-2 border-purple-500">
                                <span class="text-purple-300 font-bold text-sm block">Graph Coloring</span>
                                <span class="text-xs opacity-70">Color graph vertices so no neighbors share a color (using min colors).</span>
                            </div>

                            <div class="bg-black/30 p-3 rounded border-l-2 border-purple-500">
                                <span class="text-purple-300 font-bold text-sm block">CNF Satisfiability (SAT)</span>
                                <span class="text-xs opacity-70">Find True/False assignments for variables to make a complex logic formula TRUE.</span>
                                <div class="mt-1 font-mono text-[10px] text-gray-500">(A OR B OR ~C) AND (D OR E)...</div>
                            </div>

                        </div>
                    </div>

                    <!-- 4. RELATIONSHIP TO P -->
                    <div class="text-center pt-4 border-t border-white/10">
                        <span class="text-2xl font-bold">$P \\subseteq NP$</span>
                        <p class="text-xs text-gray-400 mt-1">
                            Every problem in P is also in NP. (If you can find the solution fast, you can definitely check it fast).
                        </p>
                    </div>

                </div>
            `
        },
       'prob-npc': {
            title: 'NP-Completeness & The P vs NP Question',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. HIERARCHY -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
                        <div class="flex-1">
                            <h4 class="font-bold text-blue-400 text-lg mb-2">$P \\subseteq NP$</h4>
                            <p class="text-sm opacity-90 mb-4">
                                <strong>Why?</strong> Because if a problem is solvable in polynomial time (P), then a solution is definitely <em>verifiable</em> in polynomial time (NP).
                            </p>
                            <ul class="text-xs space-y-1 opacity-70 font-mono">
                                <li>NP: Exponential Upper Bound</li>
                                <li>P: Polynomial Lower Bound</li>
                            </ul>
                        </div>
                        
                        <!-- Venn Diagram -->
                        <div class="relative w-[250px] h-[180px]">
                            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 250 180">
                                <!-- NP Oval -->
                                <ellipse cx="125" cy="90" rx="120" ry="85" fill="#3b0764" stroke="#a855f7" stroke-width="2" />
                                <text x="125" y="30" text-anchor="middle" fill="#d8b4fe" font-weight="bold">NP (Exponential Bound)</text>
                                
                                <!-- P Oval -->
                                <ellipse cx="125" cy="110" rx="70" ry="40" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2" />
                                <text x="125" y="115" text-anchor="middle" fill="#93c5fd" font-weight="bold">P (Polynomial)</text>
                            </svg>
                        </div>
                    </div>

                    <!-- 2. HARD VS EASY (MATCHING EXAMPLE) -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 class="font-bold text-accent mb-4">Hard vs. Easy: A Fine Line</h4>
                        
                        <!-- Visual Comparison: Matching -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            
                            <!-- Easy: Bipartite -->
                            <div class="flex flex-col items-center">
                                <h5 class="text-green-400 font-bold mb-2">Bipartite Matching (Class P)</h5>
                                <div class="relative w-[150px] h-[100px] bg-black/20 rounded-lg p-2">
                                    <svg class="w-full h-full" viewBox="0 0 150 100">
                                        <!-- Column 1 -->
                                        <circle cx="40" cy="20" r="5" fill="#fff"/>
                                        <circle cx="40" cy="50" r="5" fill="#fff"/>
                                        <circle cx="40" cy="80" r="5" fill="#fff"/>
                                        <!-- Column 2 -->
                                        <circle cx="110" cy="20" r="5" fill="#4ade80"/>
                                        <circle cx="110" cy="50" r="5" fill="#4ade80"/>
                                        <circle cx="110" cy="80" r="5" fill="#4ade80"/>
                                        <!-- Edges -->
                                        <line x1="40" y1="20" x2="110" y2="50" stroke="#666" stroke-width="2"/>
                                        <line x1="40" y1="50" x2="110" y2="20" stroke="#666" stroke-width="2"/>
                                        <line x1="40" y1="80" x2="110" y2="80" stroke="#666" stroke-width="2"/>
                                    </svg>
                                </div>
                                <p class="text-xs text-center mt-2 opacity-70">"Edges connect 2 points."</p>
                            </div>

                            <!-- Hard: 3D Matching -->
                            <div class="flex flex-col items-center">
                                <h5 class="text-red-400 font-bold mb-2">3D Matching (Class NP)</h5>
                                <div class="relative w-[150px] h-[100px] bg-black/20 rounded-lg p-2">
                                    <svg class="w-full h-full" viewBox="0 0 150 100">
                                        <!-- Col 1 -->
                                        <circle cx="30" cy="20" r="4" fill="#fff"/>
                                        <circle cx="30" cy="50" r="4" fill="#fff"/>
                                        <circle cx="30" cy="80" r="4" fill="#fff"/>
                                        <!-- Col 2 -->
                                        <circle cx="75" cy="20" r="4" fill="#f87171"/>
                                        <circle cx="75" cy="50" r="4" fill="#f87171"/>
                                        <circle cx="75" cy="80" r="4" fill="#f87171"/>
                                        <!-- Col 3 -->
                                        <circle cx="120" cy="20" r="4" fill="#60a5fa"/>
                                        <circle cx="120" cy="50" r="4" fill="#60a5fa"/>
                                        <circle cx="120" cy="80" r="4" fill="#60a5fa"/>
                                        
                                        <!-- Hyper-Edge (Triangle) -->
                                        <path d="M 30 20 L 75 50 L 120 20 Z" fill="rgba(255,255,255,0.2)" stroke="#fff" stroke-width="1"/>
                                    </svg>
                                </div>
                                <p class="text-xs text-center mt-2 opacity-70">"Edges connect 3 points."</p>
                            </div>
                        </div>

                        <!-- Comparison Table -->
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm text-left border-collapse">
                                <thead>
                                    <tr class="text-xs uppercase border-b border-white/20">
                                        <th class="p-2 text-red-400">Hard (NP-Complete)</th>
                                        <th class="p-2 text-green-400">Easy (in P)</th>
                                    </tr>
                                </thead>
                                <tbody class="font-mono text-xs">
                                    <tr class="bg-white/5"><td class="p-2">3-SAT</td><td class="p-2">2-SAT, Horn SAT</td></tr>
                                    <tr><td class="p-2">Travelling Salesman</td><td class="p-2">Min Spanning Tree</td></tr>
                                    <tr class="bg-white/5"><td class="p-2">Longest Path</td><td class="p-2">Shortest Path</td></tr>
                                    <tr><td class="p-2">3D Matching</td><td class="p-2">Bipartite Matching</td></tr>
                                    <tr class="bg-white/5"><td class="p-2">Knapsack</td><td class="p-2">Unary Knapsack</td></tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="mt-4 text-xs opacity-70 bg-black/30 p-3 rounded">
                            <strong>Key Insight:</strong> 
                            <br>• <strong>Easy Problems:</strong> Solved by diverse, specialized algorithms.
                            <br>• <strong>Hard Problems:</strong> Are all "the same problem in disguise". They are equivalent via reduction.
                        </div>
                    </div>

                    <!-- 3. THE BIG QUESTION -->
                    <div class="bg-black/30 p-8 rounded-xl border border-white/20 text-center">
                        <h3 class="text-2xl font-extrabold text-white mb-6">Is P = NP?</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                            
                            <!-- Scenario 1: P != NP -->
                            <div class="flex flex-col items-center">
                                <div class="relative w-[180px] h-[120px]">
                                    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
                                        <ellipse cx="100" cy="75" rx="95" ry="70" fill="#3b0764" stroke="#a855f7" /> <!-- NP -->
                                        <text x="100" y="25" text-anchor="middle" fill="#d8b4fe" font-size="12">NP</text>
                                        
                                        <circle cx="60" cy="85" r="35" fill="#1e3a8a" stroke="#60a5fa" /> <!-- P -->
                                        <text x="60" y="90" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">P</text>
                                        
                                        <circle cx="140" cy="85" r="35" fill="#991b1b" stroke="#f87171" /> <!-- NPC -->
                                        <text x="140" y="90" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="bold">NPC</text>
                                    </svg>
                                </div>
                                <p class="text-sm font-bold text-accent mt-3">Scenario A: P ≠ NP</p>
                                <p class="text-xs opacity-60">"Most Likely"</p>
                            </div>

                            <!-- Scenario 2: P = NP -->
                            <div class="flex flex-col items-center">
                                <div class="relative w-[180px] h-[120px]">
                                    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
                                        <ellipse cx="100" cy="75" rx="90" ry="60" fill="#1e3a8a" stroke="#60a5fa" />
                                        <text x="100" y="80" text-anchor="middle" fill="white" font-weight="bold">P = NP = NPC</text>
                                    </svg>
                                </div>
                                <p class="text-sm font-bold text-red-400 mt-3">Scenario B: P = NP</p>
                                <p class="text-xs opacity-60">"Very Unlikely"</p>
                            </div>
                        </div>

                        <div class="mt-8 text-sm opacity-80 max-w-lg mx-auto bg-white/5 p-4 rounded-lg">
                            <p><strong>NP-Complete (NPC):</strong> The hardest problems in NP.</p>
                            <p class="mt-2">
                                If <strong>ANY</strong> NPC problem can be solved in polynomial time, then <strong>ALL</strong> problems in NP can be solved in polynomial time ($P=NP$).
                            </p>
                        </div>
                    </div>

                    <!-- 4. HISTORY & PRIZE -->
                    <div class="bg-yellow-900/10 border-l-4 border-yellow-500 p-4 rounded-xl flex justify-between items-center">
                        <div class="text-sm">
                            <h5 class="font-bold text-yellow-400 mb-1">Historical Context</h5>
                            <p class="opacity-80"><strong>Cook's Theorem (1971):</strong> Proved SAT is NP-Complete.</p>
                            <p class="opacity-80 mt-1"><strong>Clay Math Institute:</strong> Offers <span class="text-green-400 font-bold">$1 Million</span> for a proof.</p>
                        </div>
                        <div class="text-3xl opacity-50">💰</div>
                    </div>

                </div>
            `
        },
        'prob-sat': {
            title: 'Boolean Satisfiability (SAT)',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. DEFINITION & CONTEXT -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl">
                        <div class="flex justify-between items-start">
                            <div>
                                <h4 class="font-bold text-blue-400 text-lg mb-2">The Definition</h4>
                                <p class="text-sm opacity-90">
                                    <strong>SAT</strong> is the problem of determining if there exists an interpretation (assignment of True/False to variables) that satisfies a given Boolean formula.
                                </p>
                            </div>
                            <div class="bg-blue-600/30 px-3 py-1 rounded text-xs border border-blue-400">Cook's Theorem (1971)</div>
                        </div>
                        
                        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono bg-black/30 p-4 rounded-lg">
                            <div>
                                <span class="text-gray-400 uppercase font-bold">Vocabulary</span><br>
                                <span class="text-purple-400">• Literal:</span> Variable ($x$) or Negation ($\\neg x$)<br>
                                <span class="text-green-400">• Clause:</span> OR of literals $(x \\vee y)$<br>
                                <span class="text-yellow-400">• CNF:</span> AND of Clauses
                            </div>
                            <div>
                                <span class="text-gray-400 uppercase font-bold">Variations</span><br>
                                <span class="text-white">• 3-SAT:</span> 3 literals per clause (NP-Complete)<br>
                                <span class="text-white">• 2-SAT:</span> 2 literals per clause (Polynomial/P)<br>
                                <span class="text-white">• k-CNF:</span> Max $k$ literals per clause
                            </div>
                        </div>
                    </div>

                    <!-- 2. NEAT LOGIC CIRCUIT VISUALIZATION -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
                        <h4 class="font-bold text-accent mb-4">Visualizing: $(a \\vee \\neg b) \\wedge (\\neg a \\vee b)$</h4>
                        <p class="text-xs opacity-60 mb-6">This formula is true only when $a = b$ (both True or both False).</p>
                        
                        <div class="relative w-full max-w-[600px] h-[250px] bg-white rounded-lg p-4 border border-gray-300">
                            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 600 250">
                                <defs>
                                    <marker id="arrow-logic-clean" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
                                        <polygon points="0,0 8,4 0,8" fill="#333" />
                                    </marker>
                                </defs>

                                <!-- === INPUTS (Left) === -->
                                <g transform="translate(50, 60)">
                                    <circle r="15" fill="#2563eb" stroke="black" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">a</text>
                                </g>
                                <g transform="translate(50, 180)">
                                    <circle r="15" fill="#2563eb" stroke="black" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">b</text>
                                </g>

                                <!-- === NOT GATES (Inverters) === -->
                                <!-- NOT b (Top path) -->
                                <g transform="translate(140, 90)">
                                    <polygon points="0,0 20,10 0,20" fill="white" stroke="black" stroke-width="2"/>
                                    <circle cx="24" cy="10" r="4" fill="white" stroke="black" stroke-width="2"/>
                                    <text x="10" y="-10" text-anchor="middle" font-size="10" font-weight="bold">NOT</text>
                                </g>
                                <!-- NOT a (Bottom path) -->
                                <g transform="translate(140, 150)">
                                    <polygon points="0,0 20,10 0,20" fill="white" stroke="black" stroke-width="2"/>
                                    <circle cx="24" cy="10" r="4" fill="white" stroke="black" stroke-width="2"/>
                                    <text x="10" y="35" text-anchor="middle" font-size="10" font-weight="bold">NOT</text>
                                </g>

                                <!-- === OR GATES (Clauses) === -->
                                <!-- Clause 1 (Top) -->
                                <g transform="translate(280, 50)">
                                    <path d="M0,0 L20,0 Q40,20 20,40 L0,40 Q10,20 0,0" fill="#facc15" stroke="black" stroke-width="2"/>
                                    <text x="20" y="25" text-anchor="middle" font-size="10" font-weight="bold">OR</text>
                                </g>
                                <!-- Clause 2 (Bottom) -->
                                <g transform="translate(280, 150)">
                                    <path d="M0,0 L20,0 Q40,20 20,40 L0,40 Q10,20 0,0" fill="#facc15" stroke="black" stroke-width="2"/>
                                    <text x="20" y="25" text-anchor="middle" font-size="10" font-weight="bold">OR</text>
                                </g>

                                <!-- === AND GATE (Result) === -->
                                <g transform="translate(450, 100)">
                                    <path d="M0,0 L20,0 A20,20 0 0,1 20,40 L0,40 L0,0" fill="#16a34a" stroke="black" stroke-width="2"/>
                                    <text x="20" y="25" text-anchor="middle" fill="white" font-size="10" font-weight="bold">AND</text>
                                </g>


                                <!-- === WIRES (Orthogonal & Clean) === -->
                                
                                <!-- a -> OR1 (Top Input) -->
                                <polyline points="65,60 100,60 100,60 280,60" fill="none" stroke="black" stroke-width="2" />
                                
                                <!-- a -> NOT (For Bottom OR) -->
                                <polyline points="100,60 100,160 140,160" fill="none" stroke="black" stroke-width="2" />
                                <circle cx="100" cy="60" r="3" fill="black"/> <!-- Joint -->

                                <!-- b -> OR2 (Bottom Input) -->
                                <polyline points="65,180 100,180 100,180 280,180" fill="none" stroke="black" stroke-width="2" />

                                <!-- b -> NOT (For Top OR) -->
                                <polyline points="100,180 100,100 140,100" fill="none" stroke="black" stroke-width="2" />
                                <circle cx="100" cy="180" r="3" fill="black"/> <!-- Joint -->

                                <!-- NOT b -> OR1 -->
                                <line x1="170" y1="100" x2="280" y2="80" stroke="black" stroke-width="2" /> <!-- Diagonal just for connection visual -->

                                <!-- NOT a -> OR2 -->
                                <line x1="170" y1="160" x2="280" y2="160" stroke="black" stroke-width="2" />

                                <!-- OR1 -> AND -->
                                <polyline points="320,70 380,70 380,110 450,110" fill="none" stroke="black" stroke-width="2" />

                                <!-- OR2 -> AND -->
                                <polyline points="320,170 380,170 380,130 450,130" fill="none" stroke="black" stroke-width="2" />
                                
                                <!-- AND -> Output -->
                                <line x1="490" y1="120" x2="550" y2="120" stroke="#16a34a" stroke-width="4" marker-end="url(#arrow-logic-clean)" />
                                <text x="520" y="110" text-anchor="middle" font-weight="bold" font-size="12" fill="#16a34a">TRUE</text>

                            </svg>
                        </div>
                    </div>

                    <!-- 3. STEP-BY-STEP ALGORITHM (Non-Deterministic) -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <!-- The Strategy -->
                        <div class="bg-black/30 p-5 rounded-lg border-l-4 border-purple-500">
                            <h5 class="font-bold text-purple-400 mb-3">The Non-Deterministic Algorithm</h5>
                            <ol class="list-decimal pl-5 text-sm space-y-3 opacity-90">
                                <li>
                                    <strong>Guess:</strong> Non-deterministically generate a binary string of assignments. 
                                    <br><span class="text-xs text-gray-500">(e.g., "Guess" $a=T, b=F$)</span>
                                </li>
                                <li>
                                    <strong>Verify:</strong> Plug these values into the formula. Check if every single clause evaluates to TRUE.
                                    <br><span class="text-xs text-gray-500">(Polynomial Time operation)</span>
                                </li>
                                <li>
                                    <strong>Output:</strong> If the formula is TRUE, output "Yes". Otherwise, the branch dies.
                                </li>
                            </ol>
                        </div>

                        <!-- Concrete Example -->
                        <div class="bg-black/30 p-5 rounded-lg border-l-4 border-green-500">
                            <h5 class="font-bold text-green-400 mb-3">Example Trace</h5>
                            <p class="text-xs font-mono mb-2 text-white bg-white/10 p-1 rounded inline-block">$(a \\vee \\neg b) \\wedge (\\neg a \\vee b)$</p>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between border-b border-white/10 pb-1">
                                    <span>Try $a=T, b=F$:</span>
                                    <span class="text-red-400">Fail (Clause 2 is F)</span>
                                </div>
                                <div class="flex justify-between border-b border-white/10 pb-1">
                                    <span>Try $a=F, b=T$:</span>
                                    <span class="text-red-400">Fail (Clause 1 is F)</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Try $a=T, b=T$:</span>
                                    <span class="text-green-400 font-bold">Success!</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- SLIDE EXAMPLE RECREATION -->
<div class="bg-white/5 p-6 rounded-xl border border-white/10 mt-8">
    <h4 class="font-bold text-accent mb-4">Example: CNF SAT</h4>
    
    <!-- 1. The Formula -->
    <div class="mb-6">
        <p class="text-sm opacity-70 mb-2">Check if this Boolean formula is satisfiable:</p>
        <div class="bg-black/40 p-4 rounded border border-white/20 font-mono text-sm md:text-base text-center text-blue-200">
            (A ∨ ¬B ∨ ¬C) ∧ (¬A ∨ B) ∧ (¬B ∨ D ∨ F) ∧ (F ∨ ¬D)
        </div>
    </div>

    <!-- 2. Truth Assignments Table -->
    <div class="overflow-x-auto">
        <table class="w-full text-center text-sm font-mono border-collapse">
            <thead>
                <tr class="bg-white/10 text-white font-bold">
                    <th class="p-2 border-b border-white/20">#</th>
                    <th class="p-2 border-b border-white/20">A</th>
                    <th class="p-2 border-b border-white/20">B</th>
                    <th class="p-2 border-b border-white/20">C</th>
                    <th class="p-2 border-b border-white/20">D</th>
                    <th class="p-2 border-b border-white/20">E</th>
                    <th class="p-2 border-b border-white/20">F</th>
                    <th class="p-2 border-b border-white/20 text-yellow-400">Result (Check)</th>
                </tr>
            </thead>
            <tbody>
                <!-- Row 1 -->
                <tr class="hover:bg-white/5">
                    <td class="p-2 text-gray-400">1.</td>
                    <td class="p-2">0</td>
                    <td class="p-2">1</td>
                    <td class="p-2">1</td>
                    <td class="p-2">0</td>
                    <td class="p-2">1</td>
                    <td class="p-2">0</td>
                    <td class="p-2 text-red-400">
                        <strong>False</strong> 
                        <span class="text-[10px] opacity-60 block">(Clause 1 fails)</span>
                    </td>
                </tr>
                <!-- Row 2 -->
                <tr class="hover:bg-white/5">
                    <td class="p-2 text-gray-400">2.</td>
                    <td class="p-2">1</td>
                    <td class="p-2">0</td>
                    <td class="p-2">0</td>
                    <td class="p-2">0</td>
                    <td class="p-2">0</td>
                    <td class="p-2">1</td>
                    <td class="p-2 text-red-400">
                        <strong>False</strong>
                        <span class="text-[10px] opacity-60 block">(Clause 2 fails)</span>
                    </td>
                </tr>
                <!-- Row 3 -->
                <tr class="bg-green-900/20 border-l-2 border-green-500">
                    <td class="p-2 text-gray-400">3.</td>
                    <td class="p-2 font-bold text-white">1</td>
                    <td class="p-2 font-bold text-white">1</td>
                    <td class="p-2 font-bold text-white">0</td>
                    <td class="p-2 font-bold text-white">0</td>
                    <td class="p-2 font-bold text-white">0</td>
                    <td class="p-2 font-bold text-white">1</td>
                    <td class="p-2 text-green-400 font-bold">
                        TRUE (Solution)
                    </td>
                </tr>
                <!-- Row 4 -->
                <tr class="opacity-50">
                    <td class="p-2">4.</td>
                    <td class="p-2" colspan="6">... how many more? ($2^n = 64$ total)</td>
                    <td class="p-2">?</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 3. Notes -->
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs opacity-80">
        <div class="bg-black/30 p-3 rounded">
            <span class="text-accent font-bold">Checking Phase: Θ(n)</span><br>
            Verifying one row is fast (polynomial). Generating all rows is slow (exponential).
        </div>
        <div class="bg-black/30 p-3 rounded">
            <span class="text-accent font-bold">3-CNF</span><br>
            This is a <strong>3-CNF</strong> formula because the longest clause has 3 literals (e.g., ¬B ∨ D ∨ F).
        </div>
    </div>
</div>

                </div>
            `
        },

        /* =================================================================
           NEW SECTIONS: DETAILED REDUCTIONS (FROM PDF)
           ================================================================= */

       'prob-red-intro': {
            title: 'Polynomial Reduction & NP-Completeness',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. FORMAL DEFINITION (Slide 20) -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl">
                        <h4 class="font-bold text-blue-400 text-lg mb-2">Definition: Polynomial Reduction ($\le_p$)</h4>
                        <p class="text-sm opacity-90 mb-4">
                            A decision problem $D_1$ is <strong>polynomially reducible</strong> to $D_2$ ($D_1 \le_p D_2$) if there exists a function $t$ that transforms instances of $D_1$ to instances of $D_2$ such that:
                        </p>
                        <div class="bg-black/30 p-4 rounded-lg font-mono text-sm space-y-2">
                            <p>1. $t$ maps all <span class="text-green-400">YES</span> instances of $D_1$ to <span class="text-green-400">YES</span> instances of $D_2$.</p>
                            <p>   (And all <span class="text-red-400">NO</span> instances to <span class="text-red-400">NO</span> instances).</p>
                            <div class="w-full h-px bg-white/10 my-2"></div>
                            <p>2. $t$ is computable by a <strong>polynomial-time</strong> algorithm.</p>
                        </div>
                    </div>

                    <!-- 2. VISUALIZING THE MAPPING -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
                        <h5 class="font-bold text-accent mb-4">The Transformation Function $t$</h5>
                        
                        <div class="relative w-full max-w-[600px] h-[200px]">
                            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 600 200">
                                <defs>
                                    <marker id="arrow-map" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#888" />
                                    </marker>
                                </defs>

                                <!-- Domain D1 -->
                                <ellipse cx="100" cy="100" rx="80" ry="90" fill="none" stroke="white" stroke-dasharray="4"/>
                                <text x="100" y="20" text-anchor="middle" font-weight="bold" fill="white">Problem D1</text>
                                
                                <!-- Instance I1 -->
                                <circle cx="100" cy="100" r="5" fill="white"/>
                                <text x="100" y="120" text-anchor="middle" font-size="12" fill="white">Input I</text>

                                <!-- Transformation Box -->
                                <rect x="220" y="70" width="160" height="60" fill="#333" stroke="#4ade80" stroke-width="2" rx="5"/>
                                <text x="300" y="95" text-anchor="middle" font-weight="bold" fill="#4ade80">Function t(I)</text>
                                <text x="300" y="115" text-anchor="middle" font-size="10" fill="#aaa">(Polynomial Time)</text>

                                <!-- Arrows -->
                                <line x1="110" y1="100" x2="210" y2="100" stroke="white" stroke-width="2" marker-end="url(#arrow-map)"/>
                                <line x1="390" y1="100" x2="490" y2="100" stroke="white" stroke-width="2" marker-end="url(#arrow-map)"/>

                                <!-- Domain D2 -->
                                <ellipse cx="500" cy="100" rx="80" ry="90" fill="none" stroke="white" stroke-dasharray="4"/>
                                <text x="500" y="20" text-anchor="middle" font-weight="bold" fill="white">Problem D2</text>

                                <!-- Instance I2 -->
                                <circle cx="500" cy="100" r="5" fill="white"/>
                                <text x="500" y="120" text-anchor="middle" font-size="12" fill="white">Output t(I)</text>

                                <!-- Logic Labels -->
                                <text x="300" y="180" text-anchor="middle" font-size="12" fill="#aaa">"If D2 is easy to solve, D1 is easy to solve."</text>

                            </svg>
                        </div>
                    </div>

                    <!-- 3. NP-COMPLETE DEFINITION (Slide 21) -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        
                        <div>
                            <h4 class="font-bold text-red-400 text-lg mb-2">NP-Complete (NPC)</h4>
                            <p class="text-sm opacity-90 mb-4">
                                A decision problem $D$ is <strong>NP-Complete</strong> if and only if:
                            </p>
                            <ol class="list-decimal pl-5 text-sm space-y-2 opacity-80">
                                <li>$D \in NP$ (It is verifiable).</li>
                                <li><strong>Every</strong> problem in NP is polynomial-time reducible to $D$.</li>
                            </ol>
                            <div class="mt-4 p-3 bg-purple-900/20 rounded border border-purple-500/30">
                                <span class="text-xs font-bold text-purple-300">Cook's Theorem (1971):</span>
                                <p class="text-xs opacity-70">CNF-SAT was the first problem proven to be NP-Complete.</p>
                            </div>
                        </div>

                        <!-- DIAGRAM RECREATION (Slide 21) -->
                        <div class="relative w-full h-[250px] bg-white/5 rounded-xl border border-white/10 flex justify-center items-center">
                            <svg width="300" height="250" viewBox="0 0 300 250">
                                <defs>
                                    <marker id="arrow-npc" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                                    </marker>
                                </defs>

                                <!-- NP Bubble -->
                                <ellipse cx="150" cy="125" rx="140" ry="110" fill="#e9d5ff" stroke="#a855f7" stroke-width="2"/>
                                <text x="150" y="40" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="16">NP Problems</text>

                                <!-- NPC Bubble -->
                                <ellipse cx="150" cy="150" rx="50" ry="30" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
                                <text x="150" y="155" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">NP-Complete</text>

                                <!-- Random Problems reducing to NPC -->
                                <circle cx="50" cy="100" r="6" fill="#555"/>
                                <line x1="56" y1="105" x2="110" y2="140" stroke="black" stroke-width="2" marker-end="url(#arrow-npc)"/>

                                <circle cx="250" cy="100" r="6" fill="#555"/>
                                <line x1="244" y1="105" x2="190" y2="140" stroke="black" stroke-width="2" marker-end="url(#arrow-npc)"/>

                                <circle cx="150" cy="80" r="6" fill="#555"/>
                                <line x1="150" y1="86" x2="150" y2="120" stroke="black" stroke-width="2" marker-end="url(#arrow-npc)"/>

                                <circle cx="50" cy="180" r="6" fill="#555"/>
                                <line x1="56" y1="175" x2="105" y2="160" stroke="black" stroke-width="2" marker-end="url(#arrow-npc)"/>

                                <circle cx="250" cy="180" r="6" fill="#555"/>
                                <line x1="244" y1="175" x2="195" y2="160" stroke="black" stroke-width="2" marker-end="url(#arrow-npc)"/>

                            </svg>
                        </div>
                    </div>

                    <!-- 4. THE CONSEQUENCE (Slide 27) -->
                    <div class="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-xl text-center">
                        <h4 class="font-bold text-white text-lg mb-2">Polynomial or Worse?</h4>
                        <p class="text-sm opacity-80 mb-4">
                            We have ~1000 diverse problems (TSP, Knapsack, etc.) with exponential solutions, but <strong>no one has proven</strong> they require super-polynomial time.
                        </p>
                        <div class="inline-block bg-black/40 p-4 rounded-lg border border-red-500/50">
                            <span class="text-red-400 font-bold text-lg">The "Domino Effect"</span>
                            <p class="text-sm text-white mt-2">
                                If <strong>ONE</strong> NP-Complete problem is shown to be in P...
                                <br>Then <strong>ALL</strong> NP problems are in P.
                                <br>$\Rightarrow P = NP$
                            </p>
                        </div>
                    </div>

                </div>
                <!-- PROVING NP-COMPLETENESS (SLIDES 25 & 26) -->
<div class="space-y-8 mt-10 border-t border-white/10 pt-10">
    
    <h4 class="font-bold text-white text-xl text-center">How to Prove a Problem is NP-Complete</h4>

    <!-- 1. VISUAL PROOF LOGIC (SLIDE 25) -->
    <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
        <h5 class="text-accent font-bold mb-4">The Logic of Reduction</h5>
        
        <div class="relative w-full max-w-[500px] h-[300px]">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
                <defs>
                    <marker id="arrow-proof" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                    </marker>
                </defs>

                <!-- Big Oval: NP Problems -->
                <ellipse cx="250" cy="150" rx="240" ry="140" fill="#e9d5ff" stroke="#a855f7" stroke-width="2" />
                <text x="250" y="40" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="16">All NP Problems</text>

                <!-- Random NP Problems (Dots) -->
                <circle cx="100" cy="100" r="5" fill="#555" />
                <circle cx="100" cy="200" r="5" fill="#555" />
                <circle cx="80" cy="150" r="5" fill="#555" />

                <!-- Known NPC Problem (Q) -->
                <g transform="translate(200, 150)">
                    <circle r="35" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2" />
                    <text x="0" y="-5" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Known</text>
                    <text x="0" y="10" text-anchor="middle" font-size="10" fill="white">NPC (Q)</text>
                </g>

                <!-- Candidate Problem (X) -->
                <g transform="translate(380, 150)">
                    <circle r="35" fill="#22c55e" stroke="#14532d" stroke-width="2" />
                    <text x="0" y="-5" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Candidate</text>
                    <text x="0" y="10" text-anchor="middle" font-size="10" fill="white">X</text>
                </g>

                <!-- Arrows from NP to Known (Pre-established) -->
                <line x1="105" y1="100" x2="165" y2="135" stroke="black" stroke-width="1.5" marker-end="url(#arrow-proof)" />
                <line x1="105" y1="200" x2="165" y2="165" stroke="black" stroke-width="1.5" marker-end="url(#arrow-proof)" />
                <line x1="85" y1="150" x2="160" y2="150" stroke="black" stroke-width="1.5" marker-end="url(#arrow-proof)" />

                <!-- THE CRITICAL REDUCTION ARROW -->
                <line x1="235" y1="150" x2="340" y2="150" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow-proof)" />
                
                <text x="290" y="135" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="12">Reduce Q to X</text>

            </svg>
        </div>
        <p class="text-xs text-center opacity-60 mt-4 max-w-md">
            Since every problem reduces to $Q$, and $Q$ reduces to $X$, then by transitivity, <strong>every problem reduces to $X$</strong>.
        </p>
    </div>

    <!-- 2. THE RECIPE (SLIDE 26) -->
    <div class="bg-black/30 p-6 rounded-xl border-l-4 border-green-500">
        <h5 class="font-bold text-green-400 mb-4 text-lg">The Recipe: To show Problem X is NPC</h5>
        <ol class="space-y-4 text-sm font-mono opacity-90">
            <li class="flex gap-3">
                <span class="bg-white/10 w-6 h-6 flex items-center justify-center rounded-full font-bold">1</span>
                <div>
                    <span class="text-white font-bold">Show X is in NP</span>
                    <br><span class="text-gray-400 text-xs">Prove you can verify a solution ("certificate") in polynomial time.</span>
                </div>
            </li>
            <li class="flex gap-3">
                <span class="bg-white/10 w-6 h-6 flex items-center justify-center rounded-full font-bold">2</span>
                <div>
                    <span class="text-white font-bold">Choose a Known NPC problem ($Q$)</span>
                    <br><span class="text-gray-400 text-xs">Example: Pick 3-SAT or Hamiltonian Cycle. We already know all NP problems reduce to this.</span>
                </div>
            </li>
            <li class="flex gap-3">
                <span class="bg-red-500/20 w-6 h-6 flex items-center justify-center rounded-full font-bold text-red-400">3</span>
                <div>
                    <span class="text-red-300 font-bold">Show $Q \le_p X$ (The Reduction)</span>
                    <br><span class="text-gray-400 text-xs">Construct a function that transforms an instance of $Q$ into an instance of $X$ in polynomial time.</span>
                    <br><span class="text-red-400 text-[10px] uppercase font-bold">Important: Reduce Known $\to$ New (Not the other way around!)</span>
                </div>
            </li>
            <li class="flex gap-3">
                <span class="bg-white/10 w-6 h-6 flex items-center justify-center rounded-full font-bold">4</span>
                <div>
                    <span class="text-white font-bold">Conclusion</span>
                    <br><span class="text-gray-400 text-xs">Since all NP problems reduce to $Q$, and $Q$ reduces to $X$, all NP problems reduce to $X$. Therefore, $X$ is NP-Complete.</span>
                </div>
            </li>
        </ol>
    </div>

</div>
            `
        },

      'prob-red-hp-tsp': {
            title: 'Detailed Reduction: Hamiltonian Path $\\le_p$ TSP',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. DEFINITIONS (Slides 26, 30, 31) -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <!-- HP Definition -->
                        <div class="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-xl">
                            <h4 class="font-bold text-red-400 text-lg mb-2">Hamiltonian Path (Hard)</h4>
                            <p class="text-sm opacity-90">
                                Does a graph $G$ have a simple path that visits <strong>every node exactly once</strong>?
                            </p>
                            <p class="text-xs font-bold text-red-300 mt-2">Status: NP-Complete</p>
                        </div>

                        <!-- Eulerian Contrast -->
                        <div class="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-xl">
                            <h4 class="font-bold text-green-400 text-lg mb-2">Eulerian Path (Easy)</h4>
                            <p class="text-sm opacity-90">
                                Does a graph visit <strong>every edge exactly once</strong>?
                            </p>
                            <p class="text-xs font-bold text-green-300 mt-2">Status: P (Check node degrees)</p>
                        </div>

                        <!-- Longest Path -->
                        <div class="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-xl">
                            <h4 class="font-bold text-red-400 text-lg mb-2">Longest Path (Hard)</h4>
                            <p class="text-sm opacity-90">
                                Does $G$ contain a simple path with $\\ge K$ edges?
                            </p>
                            <p class="text-xs font-bold text-red-300 mt-2">Status: NP-Complete</p>
                        </div>

                         <!-- Shortest Path -->
                         <div class="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-xl">
                            <h4 class="font-bold text-green-400 text-lg mb-2">Shortest Path (Easy)</h4>
                            <p class="text-sm opacity-90">
                                Find the path with minimum weight.
                            </p>
                            <p class="text-xs font-bold text-green-300 mt-2">Status: P (Dijkstra's Algo)</p>
                        </div>

                    </div>

                    <!-- 2. THE REDUCTION LOGIC (Slide 33) -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 class="font-bold text-white mb-4">The Reduction: How to solve HP using TSP</h4>
                        <p class="text-sm opacity-80 mb-4">
                            We want to know if Graph $G$ has a Hamiltonian Path. We will construct a TSP instance $G'$ such that solving TSP on $G'$ answers our question about $G$.
                        </p>

                        <div class="bg-black/30 p-4 rounded-lg font-mono text-sm space-y-3">
                            <p><strong class="text-accent">Step 1:</strong> Create $G'$ with the same nodes as $G$.</p>
                            <p><strong class="text-accent">Step 2:</strong> Make $G'$ a <strong>Complete Graph</strong> (connect every node to every other node).</p>
                            <p><strong class="text-accent">Step 3:</strong> Assign Weights:</p>
                            <ul class="list-disc pl-8 text-xs text-gray-400">
                                <li>If edge existed in $G$: <strong>Cost = 1</strong></li>
                                <li>If edge did NOT exist in $G$: <strong>Cost = 2</strong></li>
                            </ul>
                            <p><strong class="text-accent">Step 4:</strong> Ask TSP: "Is there a tour of cost $\\le N+1$?"</p>
                        </div>
                    </div>

                    <!-- 2. THE REDUCTION LOGIC (VISUALIZED) -->
<div class="bg-white/5 p-6 rounded-xl border border-white/10">
    <h4 class="font-bold text-white mb-6 text-center">Visualizing the Reduction: HP $\to$ TSP</h4>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- STEP 1: INPUT G -->
        <div class="bg-black/30 p-4 rounded-lg border border-white/5 flex flex-col items-center">
            <h5 class="text-accent font-bold mb-2 text-sm">Step 1: Input Graph G</h5>
            <p class="text-xs opacity-60 mb-2 text-center">We check: Does this have a Hamiltonian Path?</p>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <!-- Edges (A path exists: A-B-C-D) -->
                <line x1="50" y1="50" x2="150" y2="50" stroke="white" stroke-width="2" />
                <line x1="150" y1="50" x2="150" y2="150" stroke="white" stroke-width="2" />
                <line x1="150" y1="150" x2="50" y2="150" stroke="white" stroke-width="2" />
                
                <!-- Nodes -->
                <circle cx="50" cy="50" r="15" fill="#333" stroke="white"/>
                <text x="50" y="55" text-anchor="middle" fill="white" font-size="12">A</text>
                <circle cx="150" cy="50" r="15" fill="#333" stroke="white"/>
                <text x="150" y="55" text-anchor="middle" fill="white" font-size="12">B</text>
                <circle cx="150" cy="150" r="15" fill="#333" stroke="white"/>
                <text x="150" y="155" text-anchor="middle" fill="white" font-size="12">C</text>
                <circle cx="50" cy="150" r="15" fill="#333" stroke="white"/>
                <text x="50" y="155" text-anchor="middle" fill="white" font-size="12">D</text>
            </svg>
        </div>

        <!-- STEP 2: MAKE COMPLETE -->
        <div class="bg-black/30 p-4 rounded-lg border border-white/5 flex flex-col items-center">
            <h5 class="text-accent font-bold mb-2 text-sm">Step 2: Make G' Complete</h5>
            <p class="text-xs opacity-60 mb-2 text-center">Add missing edges (dotted) so every node connects.</p>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <!-- Original Edges -->
                <line x1="50" y1="50" x2="150" y2="50" stroke="white" stroke-width="2" />
                <line x1="150" y1="50" x2="150" y2="150" stroke="white" stroke-width="2" />
                <line x1="150" y1="150" x2="50" y2="150" stroke="white" stroke-width="2" />

                <!-- New Edges -->
                <line x1="50" y1="50" x2="50" y2="150" stroke="#666" stroke-width="1" stroke-dasharray="4" />
                <line x1="50" y1="50" x2="150" y2="150" stroke="#666" stroke-width="1" stroke-dasharray="4" /> <!-- Diagonal -->
                <line x1="150" y1="50" x2="50" y2="150" stroke="#666" stroke-width="1" stroke-dasharray="4" /> <!-- Diagonal -->
                
                <!-- Nodes -->
                <circle cx="50" cy="50" r="15" fill="#333" stroke="white"/> <text x="50" y="55" text-anchor="middle" fill="white" font-size="12">A</text>
                <circle cx="150" cy="50" r="15" fill="#333" stroke="white"/> <text x="150" y="55" text-anchor="middle" fill="white" font-size="12">B</text>
                <circle cx="150" cy="150" r="15" fill="#333" stroke="white"/> <text x="150" y="155" text-anchor="middle" fill="white" font-size="12">C</text>
                <circle cx="50" cy="150" r="15" fill="#333" stroke="white"/> <text x="50" y="155" text-anchor="middle" fill="white" font-size="12">D</text>
            </svg>
        </div>

        <!-- STEP 3: ASSIGN WEIGHTS -->
        <div class="bg-black/30 p-4 rounded-lg border border-white/5 flex flex-col items-center">
            <h5 class="text-accent font-bold mb-2 text-sm">Step 3: Assign Weights</h5>
            <p class="text-xs opacity-60 mb-2 text-center">Original = <span class="text-green-400">1</span>. New = <span class="text-red-400">2</span>.</p>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <!-- Weight 1 Edges -->
                <line x1="50" y1="50" x2="150" y2="50" stroke="#4ade80" stroke-width="3" />
                <text x="100" y="45" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">1</text>
                
                <line x1="150" y1="50" x2="150" y2="150" stroke="#4ade80" stroke-width="3" />
                <text x="160" y="100" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">1</text>

                <line x1="150" y1="150" x2="50" y2="150" stroke="#4ade80" stroke-width="3" />
                <text x="100" y="165" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">1</text>

                <!-- Weight 2 Edges -->
                <line x1="50" y1="50" x2="50" y2="150" stroke="#f87171" stroke-width="1" />
                <text x="40" y="100" fill="#f87171" font-size="10" text-anchor="middle">2</text>

                <line x1="50" y1="50" x2="150" y2="150" stroke="#f87171" stroke-width="1" />
                <text x="90" y="90" fill="#f87171" font-size="10" text-anchor="middle">2</text>

                <!-- Nodes -->
                <circle cx="50" cy="50" r="12" fill="#333" stroke="white"/>
                <circle cx="150" cy="50" r="12" fill="#333" stroke="white"/>
                <circle cx="150" cy="150" r="12" fill="#333" stroke="white"/>
                <circle cx="50" cy="150" r="12" fill="#333" stroke="white"/>
            </svg>
        </div>

        <!-- STEP 4: SOLVE TSP -->
        <div class="bg-black/30 p-4 rounded-lg border border-white/5 flex flex-col items-center">
            <h5 class="text-accent font-bold mb-2 text-sm">Step 4: Solve TSP</h5>
            <p class="text-xs opacity-60 mb-2 text-center">Find tour cost. Path: 1+1+1. Return: 2. Total: 5.</p>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <!-- The Tour Path -->
                <path d="M 50 50 L 150 50 L 150 150 L 50 150 Z" stroke="#60a5fa" stroke-width="4" fill="none" stroke-linejoin="round" />
                
                <!-- Labels -->
                <text x="100" y="40" fill="white" font-size="10" text-anchor="middle">1</text>
                <text x="160" y="100" fill="white" font-size="10" text-anchor="middle">1</text>
                <text x="100" y="170" fill="white" font-size="10" text-anchor="middle">1</text>
                <text x="35" y="100" fill="#f87171" font-size="10" text-anchor="middle">2</text>

                <!-- Nodes -->
                <circle cx="50" cy="50" r="12" fill="#2563eb" stroke="white"/>
                <circle cx="150" cy="50" r="12" fill="#2563eb" stroke="white"/>
                <circle cx="150" cy="150" r="12" fill="#2563eb" stroke="white"/>
                <circle cx="50" cy="150" r="12" fill="#2563eb" stroke="white"/>
                
                <!-- Result -->
                <rect x="60" y="80" width="80" height="40" fill="rgba(0,0,0,0.8)" rx="5" />
                <text x="100" y="105" text-anchor="middle" fill="#4ade80" font-weight="bold" font-size="12">Total = 5</text>
            </svg>
        </div>

    </div>
</div>

                    <!-- 3. VISUAL EXAMPLE (Slides 35-36) -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
                        <h4 class="font-bold text-accent mb-6">Visual Proof </h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                            
                            <!-- LEFT: Original Graph -->
                            <div class="flex flex-col items-center">
                                <h5 class="text-sm font-bold text-white mb-2">Input Graph G</h5>
                                <div class="relative w-[200px] h-[200px]">
                                    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                                        <!-- Edges -->
                                        <line x1="100" y1="20" x2="40" y2="100" stroke="white" stroke-width="2"/>
                                        <line x1="100" y1="20" x2="160" y2="100" stroke="white" stroke-width="2"/>
                                        <line x1="40" y1="100" x2="160" y2="100" stroke="white" stroke-width="2"/> <!-- The Triangle -->
                                        <line x1="40" y1="100" x2="100" y2="180" stroke="white" stroke-width="2"/>
                                        <line x1="160" y1="100" x2="100" y2="180" stroke="white" stroke-width="2"/>
                                        
                                        <!-- Nodes -->
                                        <circle cx="100" cy="20" r="8" fill="#333" stroke="white"/>
                                        <circle cx="40" cy="100" r="8" fill="#333" stroke="white"/>
                                        <circle cx="160" cy="100" r="8" fill="#333" stroke="white"/>
                                        <circle cx="100" cy="180" r="8" fill="#333" stroke="white"/>
                                    </svg>
                                </div>
                                <p class="text-xs text-center mt-2 opacity-60">Does this have a Hamiltonian Path?</p>
                            </div>

                            <!-- RIGHT: TSP Graph -->
                            <div class="flex flex-col items-center">
                                <h5 class="text-sm font-bold text-accent mb-2">Transformed TSP Graph G'</h5>
                                <div class="relative w-[200px] h-[200px]">
                                    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                                        <!-- Original Edges (Weight 1) -->
                                        <line x1="100" y1="20" x2="40" y2="100" stroke="#4ade80" stroke-width="2"/>
                                        <text x="60" y="50" fill="#4ade80" font-size="10" font-weight="bold">1</text>

                                        <line x1="100" y1="20" x2="160" y2="100" stroke="#4ade80" stroke-width="2"/>
                                        <text x="140" y="50" fill="#4ade80" font-size="10" font-weight="bold">1</text>

                                        <line x1="40" y1="100" x2="160" y2="100" stroke="#4ade80" stroke-width="2"/>
                                        <text x="100" y="90" fill="#4ade80" font-size="10" font-weight="bold">1</text>

                                        <line x1="40" y1="100" x2="100" y2="180" stroke="#4ade80" stroke-width="2"/>
                                        <text x="60" y="150" fill="#4ade80" font-size="10" font-weight="bold">1</text>

                                        <line x1="160" y1="100" x2="100" y2="180" stroke="#4ade80" stroke-width="2"/>
                                        <text x="140" y="150" fill="#4ade80" font-size="10" font-weight="bold">1</text>

                                        <!-- New Edges (Weight 2) - Dotted -->
                                        <path d="M 100 20 Q 180 100 100 180" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4"/>
                                        <text x="160" y="140" fill="#f87171" font-size="10">2</text>
                                        
                                        <!-- Nodes -->
                                        <circle cx="100" cy="20" r="8" fill="#333" stroke="white"/>
                                        <circle cx="40" cy="100" r="8" fill="#333" stroke="white"/>
                                        <circle cx="160" cy="100" r="8" fill="#333" stroke="white"/>
                                        <circle cx="100" cy="180" r="8" fill="#333" stroke="white"/>
                                    </svg>
                                </div>
                                <p class="text-xs text-center mt-2 opacity-60">Is there a tour of cost $\le (N+1)$?</p>
                            </div>

                        </div>
                    </div>

                    <!-- 4. LOGIC EXPLANATION (Slide 37) -->
                    <div class="bg-black/30 p-6 rounded-xl border-l-4 border-yellow-500">
                        <h4 class="font-bold text-yellow-400 mb-2">The Logical Conclusion</h4>
                        <ul class="list-disc pl-5 text-sm space-y-2 opacity-90">
                            <li>A Hamiltonian Path visits $N$ nodes using $N-1$ edges.</li>
                            <li>If these edges exist in $G$, they cost <strong>1</strong> in $G'$. Total cost = $N-1$.</li>
                            <li>To make it a TSP Tour (cycle), we add 1 more edge to return to start.</li>
                            <li>If that return edge exists in G, cost is 1. If not, cost is 2.</li>
                            <li>Thus, if HP exists, we can find a tour of cost $N$ or $N+1$.</li>
                            <li>If HP does <strong>not</strong> exist, we are forced to use "bad" edges (Cost 2), making the total $> N+1$.</li>
                        </ul>
                        <p class="mt-4 font-bold text-white text-center">
                            Therefore: Solving TSP solves HP. Since HP is hard, TSP is hard.
                        </p>
                    </div>

                </div>
            `
        },

       'prob-red-dp-de': {
            title: '2. Disjoint Paths $\\le_p$ Distinguished Edge',
            html: `
            <!-- EXPANDED EXPLANATIONS -->
<div class="space-y-8 mt-10 border-t border-white/10 pt-10">

    <!-- 1. UNDERSTANDING THE PROBLEMS -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- DP Explanation -->
        <div class="bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
            <h5 class="font-bold text-blue-300 text-lg mb-2">Algorithm 1: Disjoint Paths (DP)</h5>
            <p class="text-sm opacity-90 mb-3">
                <strong>Goal:</strong> Find two separate routes in a graph that never touch.
            </p>
            <ul class="list-disc pl-5 text-sm space-y-2 opacity-80">
                <li><strong>Input:</strong> Graph $G$, Start/End pairs $(s_1, t_1)$ and $(s_2, t_2)$.</li>
                <li><strong>Condition:</strong> The paths cannot share any nodes (except maybe endpoints).</li>
                <li><strong>Difficulty:</strong> NP-Complete (very hard to solve generally).</li>
            </ul>
        </div>

        <!-- DE Explanation -->
        <div class="bg-yellow-900/20 p-5 rounded-xl border-l-4 border-yellow-500">
            <h5 class="font-bold text-yellow-300 text-lg mb-2">Algorithm 2: Distinguished Edge (DE)</h5>
            <p class="text-sm opacity-90 mb-3">
                <strong>Goal:</strong> Find a single path that is forced to cross a specific bridge.
            </p>
            <ul class="list-disc pl-5 text-sm space-y-2 opacity-80">
                <li><strong>Input:</strong> Graph $H$, Start $S$, End $T$, and a specific edge $e^*=(u, v)$.</li>
                <li><strong>Condition:</strong> The path must go from $S$ to $T$ and <em>must</em> use the edge $e^*$.</li>
                <li><strong>Difficulty:</strong> Also NP-Complete (as we are proving).</li>
            </ul>
        </div>
    </div>

    <!-- 2. STEP-BY-STEP REDUCTION (DP -> DE) -->
    <div class="bg-black/30 p-6 rounded-xl border border-white/10">
        <h4 class="font-bold text-white mb-4 text-center">How to Reduce DP to DE (Step-by-Step)</h4>
        
        <div class="space-y-4">
            <!-- Step 1 -->
            <div class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                <div>
                    <h6 class="font-bold text-accent">Prepare the Graph</h6>
                    <p class="text-sm opacity-70">Take the original graph $G$ from the DP problem. This contains our target nodes $s_1, t_1, s_2, t_2$.</p>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                <div>
                    <h6 class="font-bold text-accent">Create Super-Nodes</h6>
                    <p class="text-sm opacity-70">Add a new global <strong>Source (S)</strong> and a new global <strong>Sink (T)</strong>.</p>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                <div>
                    <h6 class="font-bold text-accent">Create the "Bridge" (Distinguished Edge)</h6>
                    <p class="text-sm opacity-70">
                        Add a new edge $e^*$ connecting two existing nodes (say $x$ and $y$). 
                        <br><em>Wait!</em> In the reduction shown above, we actually just <strong>connect the end of Path 1 to the start of Path 2</strong>.
                        <br>We add a directed edge from $t_1$ to $s_2$. Let's call this edge $e^*$.
                    </p>
                </div>
            </div>

            <!-- Step 4 -->
            <div class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">4</div>
                <div>
                    <h6 class="font-bold text-accent">Wire it Up</h6>
                    <ul class="list-disc pl-5 text-sm opacity-70 mt-1">
                        <li>Connect <strong>S</strong> $\to$ $s_1$ (Start of Path 1).</li>
                        <li>Connect $t_2$ (End of Path 2) $\to$ <strong>T</strong>.</li>
                        <li>Ensure the only way to get from Path 1 to Path 2 is via our new bridge $e^*$.</li>
                    </ul>
                </div>
            </div>

            <!-- Step 5 -->
            <div class="flex gap-4 border-t border-white/10 pt-4 mt-2">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center font-bold text-white">✓</div>
                <div>
                    <h6 class="font-bold text-green-400">The Logic</h6>
                    <p class="text-sm opacity-80">
                        If DE finds a simple path $S \to T$ through $e^*$, it effectively found a path $s_1 \to t_1$, crossed the bridge, and found a path $s_2 \to t_2$.
                        <br>Since the DE path must be <strong>simple</strong> (no repeated nodes), the two sub-paths must be <strong>disjoint</strong>.
                        <br>Thus, solving DE solves DP.
                    </p>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- VISUAL STEP-BY-STEP REDUCTION -->
<div class="space-y-8 mt-10 border-t border-white/10 pt-10">
    <h4 class="font-bold text-white text-xl text-center mb-6">Visualizing the Reduction: DP $\to$ DE</h4>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- STEP 1: INPUT -->
        <div class="bg-black/30 p-4 rounded-xl border border-white/5 flex flex-col items-center">
            <h5 class="font-bold text-blue-300 mb-2">Step 1: The Input (DP)</h5>
            <p class="text-xs opacity-60 mb-3 text-center">We need two disjoint paths: $s_1 \to t_1$ and $s_2 \to t_2$.</p>
            <svg width="200" height="150" viewBox="0 0 200 150">
                <!-- Path 1 Nodes -->
                <circle cx="40" cy="40" r="10" fill="#333" stroke="#3b82f6" stroke-width="2"/>
                <text x="40" y="44" text-anchor="middle" font-size="8" fill="white">s1</text>
                <circle cx="160" cy="40" r="10" fill="#333" stroke="#3b82f6" stroke-width="2"/>
                <text x="160" y="44" text-anchor="middle" font-size="8" fill="white">t1</text>
                
                <!-- Path 2 Nodes -->
                <circle cx="40" cy="110" r="10" fill="#333" stroke="#ef4444" stroke-width="2"/>
                <text x="40" y="114" text-anchor="middle" font-size="8" fill="white">s2</text>
                <circle cx="160" cy="110" r="10" fill="#333" stroke="#ef4444" stroke-width="2"/>
                <text x="160" y="114" text-anchor="middle" font-size="8" fill="white">t2</text>

                <!-- Hypothetical Paths -->
                <path d="M 50 40 Q 100 10 150 40" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3" fill="none" marker-end="url(#arrow-sm)"/>
                <path d="M 50 110 Q 100 140 150 110" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3" fill="none" marker-end="url(#arrow-sm)"/>
            </svg>
        </div>

        <!-- STEP 2: SUPER NODES -->
        <div class="bg-black/30 p-4 rounded-xl border border-white/5 flex flex-col items-center">
            <h5 class="font-bold text-accent mb-2">Step 2: Add Super-Nodes</h5>
            <p class="text-xs opacity-60 mb-3 text-center">Create Source $S$ and Sink $T$.</p>
            <svg width="200" height="150" viewBox="0 0 200 150">
                <!-- S and T -->
                <circle cx="20" cy="75" r="12" fill="#22c55e" stroke="white"/>
                <text x="20" y="79" text-anchor="middle" font-size="10" font-weight="bold">S</text>
                
                <circle cx="180" cy="75" r="12" fill="#ef4444" stroke="white"/>
                <text x="180" y="79" text-anchor="middle" font-size="10" font-weight="bold">T</text>

                <!-- Original Nodes (Faded) -->
                <g opacity="0.5">
                    <circle cx="60" cy="40" r="8" fill="#333" stroke="white"/> <text x="60" y="43" font-size="6" text-anchor="middle" fill="white">s1</text>
                    <circle cx="140" cy="40" r="8" fill="#333" stroke="white"/> <text x="140" y="43" font-size="6" text-anchor="middle" fill="white">t1</text>
                    <circle cx="60" cy="110" r="8" fill="#333" stroke="white"/> <text x="60" y="113" font-size="6" text-anchor="middle" fill="white">s2</text>
                    <circle cx="140" cy="110" r="8" fill="#333" stroke="white"/> <text x="140" y="113" font-size="6" text-anchor="middle" fill="white">t2</text>
                </g>
            </svg>
        </div>

        <!-- STEP 3: THE BRIDGE -->
        <div class="bg-black/30 p-4 rounded-xl border border-white/5 flex flex-col items-center">
            <h5 class="font-bold text-yellow-400 mb-2">Step 3: The "Bridge" Edge</h5>
            <p class="text-xs opacity-60 mb-3 text-center">Connect $t_1$ (End of Path 1) to $s_2$ (Start of Path 2).</p>
            <svg width="200" height="150" viewBox="0 0 200 150">
                <!-- Path 1 Nodes -->
                <circle cx="40" cy="40" r="8" fill="#333" stroke="white"/>
                <text x="40" y="43" text-anchor="middle" font-size="6" fill="white">s1</text>
                <circle cx="100" cy="40" r="8" fill="#333" stroke="white"/> <!-- t1 moved closer -->
                <text x="100" y="43" text-anchor="middle" font-size="6" fill="white">t1</text>
                
                <!-- Path 2 Nodes -->
                <circle cx="100" cy="110" r="8" fill="#333" stroke="white"/> <!-- s2 moved closer -->
                <text x="100" y="113" text-anchor="middle" font-size="6" fill="white">s2</text>
                <circle cx="160" cy="110" r="8" fill="#333" stroke="white"/>
                <text x="160" y="113" text-anchor="middle" font-size="6" fill="white">t2</text>

                <!-- THE BRIDGE -->
                <line x1="100" y1="48" x2="100" y2="102" stroke="#facc15" stroke-width="3" marker-end="url(#arrow-sm)"/>
                <text x="115" y="80" fill="#facc15" font-size="10" font-weight="bold">e*</text>
            </svg>
        </div>

        <!-- STEP 4: FINAL WIRING -->
        <div class="bg-black/30 p-4 rounded-xl border border-white/5 flex flex-col items-center">
            <h5 class="font-bold text-green-400 mb-2">Step 4: Wire Everything</h5>
            <p class="text-xs opacity-60 mb-3 text-center">Connect $S \to s_1$ and $t_2 \to T$. Now finding ONE path solves BOTH.</p>
            <svg width="200" height="150" viewBox="0 0 200 150">
                
                <!-- Full Path Highlight -->
                <path d="M 20 75 L 45 40 L 95 40 L 95 110 L 145 110 L 180 75" stroke="#22c55e" stroke-width="2" fill="none" marker-end="url(#arrow-sm)"/>

                <!-- Nodes -->
                <circle cx="20" cy="75" r="8" fill="#22c55e" /> <text x="20" y="78" font-size="8" text-anchor="middle" font-weight="bold">S</text>
                <circle cx="180" cy="75" r="8" fill="#ef4444" /> <text x="180" y="78" font-size="8" text-anchor="middle" font-weight="bold">T</text>

                <circle cx="45" cy="40" r="5" fill="#333" stroke="white"/> <text x="45" y="30" font-size="6" text-anchor="middle" fill="white">s1</text>
                <circle cx="95" cy="40" r="5" fill="#333" stroke="white"/> <text x="95" y="30" font-size="6" text-anchor="middle" fill="white">t1</text>
                
                <circle cx="95" cy="110" r="5" fill="#333" stroke="white"/> <text x="85" y="113" font-size="6" text-anchor="middle" fill="white">s2</text>
                <circle cx="145" cy="110" r="5" fill="#333" stroke="white"/> <text x="145" y="120" font-size="6" text-anchor="middle" fill="white">t2</text>

                <!-- Bridge Label -->
                <text x="105" y="80" fill="#facc15" font-size="10" font-weight="bold">e*</text>
            </svg>
        </div>

    </div>
</div>

                <div class="space-y-8">
                    <!-- PROBLEM STATEMENT -->
                    <div class="bg-black/30 p-4 rounded border border-white/10">
                        <h5 class="font-bold text-accent mb-2">The Problem (DP)</h5>
                        <p class="text-sm opacity-80">
                            Given a graph $G$ and pairs $(w,x)$ and $(y,z)$, are there two <strong>node-disjoint</strong> paths?
                            <br>1. From $w$ to $x$.
                            <br>2. From $y$ to $z$.
                        </p>
                    </div>

                    <!-- SLIDE EXAMPLE RECREATION -->
                    <div class="flex flex-col lg:flex-row gap-8 items-center bg-white/5 p-6 rounded-xl border border-white/10">
                        
                        <!-- LEFT: SPECIFIC GRAPH EXAMPLE -->
                        <div class="flex flex-col items-center w-full">
                            <h5 class="font-bold text-white mb-4">Disjoint Path (DP) Example</h5>
                            <div class="relative w-[300px] h-[250px] bg-white rounded-xl border border-gray-300 p-2">
                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 250">
                                    <defs>
                                        <marker id="arrow-dp" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                                        </marker>
                                        <marker id="arrow-dp-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                                        </marker>
                                        <marker id="arrow-dp-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                                        </marker>
                                    </defs>

                                    <!-- NODES -->
                                    <!-- Left Column -->
                                    <circle cx="50" cy="50" r="6" fill="#a5f3fc" stroke="black" /> <!-- w -->
                                    <text x="35" y="55" font-size="12" font-weight="bold">w</text>

                                    <circle cx="50" cy="125" r="6" fill="#a5f3fc" stroke="black" /> <!-- mid-left -->

                                    <circle cx="50" cy="200" r="6" fill="#a5f3fc" stroke="black" /> <!-- y -->
                                    <text x="35" y="220" font-size="12" font-weight="bold">y</text>

                                    <!-- Center Column -->
                                    <circle cx="150" cy="50" r="6" fill="#a5f3fc" stroke="black" /> <!-- top-mid -->
                                    <circle cx="150" cy="125" r="6" fill="#a5f3fc" stroke="black" /> <!-- center -->
                                    <circle cx="150" cy="200" r="6" fill="#a5f3fc" stroke="black" /> <!-- bot-mid -->

                                    <!-- Right Column -->
                                    <circle cx="250" cy="50" r="6" fill="#a5f3fc" stroke="black" /> <!-- x -->
                                    <text x="265" y="55" font-size="12" font-weight="bold">x</text>

                                    <circle cx="250" cy="125" r="6" fill="#a5f3fc" stroke="black" /> <!-- mid-right -->

                                    <circle cx="250" cy="200" r="6" fill="#a5f3fc" stroke="black" /> <!-- z -->
                                    <text x="265" y="220" font-size="12" font-weight="bold">z</text>


                                    <!-- EDGES (Based on Image) -->
                                    
                                    <!-- y -> mid-left -->
                                    <line x1="50" y1="200" x2="50" y2="131" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>
                                    <!-- mid-left -> w -->
                                    <line x1="50" y1="125" x2="50" y2="56" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>
                                    <!-- mid-left -> center -->
                                    <line x1="50" y1="125" x2="144" y2="125" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>
                                    
                                    <!-- w -> top-mid -->
                                    <line x1="50" y1="50" x2="144" y2="50" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>
                                    <!-- w -> center -->
                                    <line x1="50" y1="50" x2="144" y2="119" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>

                                    <!-- top-mid -> mid-right -->
                                    <line x1="150" y1="50" x2="244" y2="119" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>

                                    <!-- center -> mid-right -->
                                    <line x1="150" y1="125" x2="244" y2="125" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>
                                    <!-- center -> bot-mid -->
                                    <line x1="150" y1="125" x2="150" y2="194" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>

                                    <!-- bot-mid -> z -->
                                    <line x1="150" y1="200" x2="244" y2="200" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>

                                    <!-- mid-right -> x -->
                                    <line x1="250" y1="125" x2="250" y2="56" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>
                                    <!-- mid-right -> z -->
                                    <line x1="250" y1="125" x2="250" y2="194" stroke="black" stroke-width="1.5" marker-end="url(#arrow-dp)"/>


                                    <!-- SOLUTION HIGHLIGHTS (Overlays) -->
                                    <!-- Path 1: w -> top-mid -> mid-right -> x (BLUE) -->
                                    <path d="M 50 50 L 150 50 L 250 125 L 250 50" stroke="#3b82f6" stroke-width="3" fill="none" opacity="0.4" />
                                    
                                    <!-- Path 2: y -> mid-left -> center -> bot-mid -> z (RED) -->
                                    <path d="M 50 200 L 50 125 L 150 125 L 150 200 L 250 200" stroke="#ef4444" stroke-width="3" fill="none" opacity="0.4" />

                                </svg>
                            </div>
                            <div class="flex gap-4 mt-2 text-xs">
                                <div class="flex items-center gap-1"><div class="w-3 h-3 bg-blue-500/50"></div> Path $w \\to x$</div>
                                <div class="flex items-center gap-1"><div class="w-3 h-3 bg-red-500/50"></div> Path $y \\to z$</div>
                            </div>
                        </div>

                        <div class="text-2xl text-gray-500 font-bold hidden lg:block">→</div>
                        
<!-- VISUALIZATION: DP REDUCED TO DE (EXACT RECREATION) -->
<div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center mt-8">
    <h4 class="font-bold text-accent mb-2">The Reduction: Adding the Edge $x \to y$</h4>
    <p class="text-sm opacity-80 mb-6 text-center">
        Question: Is there a simple path from $w$ to $z$ that passes through the specific edge $x \to y$?
    </p>

    <div class="relative w-full max-w-[400px] h-[300px] bg-white rounded-xl border border-gray-300 p-4">
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 250">
            <defs>
                <marker id="arrow-blk-41" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                </marker>
                <marker id="arrow-path" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                </marker>
            </defs>

            <!-- === NODES === -->
            <!-- Left Col -->
            <g transform="translate(50, 50)"> <!-- w -->
                <circle r="6" fill="#a5f3fc" stroke="black" />
                <text x="-15" y="5" font-size="12" font-weight="bold">w</text>
            </g>
            <g transform="translate(50, 125)"> <!-- mid-left -->
                <circle r="6" fill="#a5f3fc" stroke="black" />
            </g>
            <g transform="translate(50, 200)"> <!-- y -->
                <circle r="6" fill="#a5f3fc" stroke="black" />
                <text x="-15" y="5" font-size="12" font-weight="bold">y</text>
            </g>

            <!-- Center Col -->
            <g transform="translate(150, 50)"> <!-- top-mid -->
                <circle r="6" fill="#a5f3fc" stroke="black" />
            </g>
            <g transform="translate(150, 125)"> <!-- center -->
                <circle r="6" fill="#a5f3fc" stroke="black" />
            </g>
            <g transform="translate(150, 200)"> <!-- bot-mid -->
                <circle r="6" fill="#a5f3fc" stroke="black" />
            </g>

            <!-- Right Col -->
            <g transform="translate(250, 50)"> <!-- x -->
                <circle r="6" fill="#a5f3fc" stroke="black" />
                <text x="15" y="5" font-size="12" font-weight="bold">x</text>
            </g>
            <g transform="translate(250, 125)"> <!-- mid-right -->
                <circle r="6" fill="#a5f3fc" stroke="black" />
            </g>
            <g transform="translate(250, 200)"> <!-- z -->
                <circle r="6" fill="#a5f3fc" stroke="black" />
                <text x="15" y="5" font-size="12" font-weight="bold">z</text>
            </g>


            <!-- === EDGES (Standard Graph) === -->
            
            <!-- Left Vertical (Up) -->
            <line x1="50" y1="200" x2="50" y2="131" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>
            <line x1="50" y1="125" x2="50" y2="56" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>

            <!-- Top Horizontal -->
            <line x1="50" y1="50" x2="144" y2="50" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>

            <!-- Middle Horizontal -->
            <line x1="50" y1="125" x2="144" y2="125" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>
            <line x1="150" y1="125" x2="244" y2="125" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>

            <!-- Bottom Horizontal -->
            <line x1="150" y1="200" x2="244" y2="200" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>

            <!-- Diagonals -->
            <!-- w -> center -->
            <line x1="50" y1="50" x2="144" y2="119" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>
            <!-- top-mid -> mid-right -->
            <line x1="150" y1="50" x2="244" y2="119" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>
            <!-- center -> bot-mid -->
            <line x1="150" y1="125" x2="150" y2="194" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>

            <!-- Right Vertical -->
            <!-- mid-right -> x (Up) -->
            <line x1="250" y1="125" x2="250" y2="56" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>
            <!-- mid-right -> z (Down) -->
            <line x1="250" y1="125" x2="250" y2="194" stroke="black" stroke-width="1" marker-end="url(#arrow-blk-41)"/>


            <!-- === THE REDUCTION EDGE (x -> y) === -->
            <!-- This is the diagonal line crossing the whole graph -->
            <line x1="250" y1="50" x2="56" y2="194" stroke="black" stroke-width="1.5" marker-end="url(#arrow-blk-41)"/>
            
            <!-- PATH HIGHLIGHT (Optional: Shows w->x->y->z flow) -->
            <path d="M 50 50 L 150 50 L 250 125 L 250 50 L 50 200 L 50 125 L 150 125 L 150 200 L 250 200" 
                  stroke="#3b82f6" stroke-width="3" fill="none" opacity="0.3" stroke-linecap="round" stroke-linejoin="round"/>

        </svg>
    </div>
    
    <div class="mt-4 text-center">
        <span class="inline-block px-3 py-1 bg-black/40 rounded border border-white/20 text-xs font-mono">
            New Path = (Path $w \to x$) + (Edge $x \to y$) + (Path $y \to z$)
        </span>
    </div>
</div>
                    </div>

                    <!-- 4. EXPLANATION -->
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h5 class="font-bold text-accent mb-2">How the Reduction Works</h5>
                        <p class="text-sm opacity-80 mb-2">
                            To solve <strong>Disjoint Paths</strong> using <strong>Distinguished Edge</strong>:
                        </p>
                        <ol class="list-decimal pl-5 text-sm space-y-2 opacity-80">
                            <li>We add a source $S$ and connect it to starts $w, y$.</li>
                            <li>We add a sink $T$ and connect ends $x, z$ to it.</li>
                            <li>We pick an edge $e^*$ in the middle.</li>
                            <li><strong>The Trick:</strong> A path from $S \to T$ that goes through $e^*$ effectively enters the graph, does the first path, crosses $e^*$, and does the second path. Removing $e^*$ recovers the two original disjoint paths.</li>
                        </ol>
                    </div>

                </div>
            `
        },
'prob-red-dhp-uhp': {
            title: '3. Directed HP $\\le_p$ Undirected HP',
            html: `
            <!-- PROBLEM DESCRIPTIONS & ALGORITHM -->
<div class="space-y-8">

    <!-- 1. PROBLEM DESCRIPTIONS -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- DHP Card -->
        <div class="bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-xl">
            <h5 class="font-bold text-blue-300 text-lg mb-2">1. Directed Hamiltonian Path (DHP)</h5>
            <p class="text-sm opacity-90 mb-3">
                <strong>Input:</strong> A Directed Graph $G = (V, E)$.
            </p>
            <p class="text-sm opacity-80">
                <strong>Goal:</strong> Find a path that visits every vertex exactly once, following the specific direction of the arrows ($u \to v$).
            </p>
            <div class="mt-3 text-xs bg-black/30 p-2 rounded text-blue-200 font-mono">
                Constraint: One-way streets only.
            </div>
        </div>

        <!-- UHP Card -->
        <div class="bg-purple-900/20 border-l-4 border-purple-500 p-5 rounded-xl">
            <h5 class="font-bold text-purple-300 text-lg mb-2">2. Undirected Hamiltonian Path (UHP)</h5>
            <p class="text-sm opacity-90 mb-3">
                <strong>Input:</strong> An Undirected Graph $G' = (V', E')$.
            </p>
            <p class="text-sm opacity-80">
                <strong>Goal:</strong> Find a simple path that visits every vertex exactly once. You can traverse edges in either direction ($u - v$ or $v - u$).
            </p>
            <div class="mt-3 text-xs bg-black/30 p-2 rounded text-purple-200 font-mono">
                Constraint: Two-way streets.
            </div>
        </div>

    </div>
                <!-- DHP TO UHP REDUCTION -->
<div class="space-y-10">

    <!-- 1. DEFINITIONS -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-xl">
            <h4 class="font-bold text-blue-400 text-lg mb-2">Problem A: Directed HP</h4>
            <p class="text-sm opacity-90">
                Given a <strong>Directed Graph</strong>, is there a path that visits every node exactly once?
            </p>
            <p class="text-xs mt-2 text-blue-300">Constraint: Must follow arrow direction ($u \to v$).</p>
        </div>

        <div class="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-xl">
            <h4 class="font-bold text-purple-400 text-lg mb-2">Problem B: Undirected HP</h4>
            <p class="text-sm opacity-90">
                Given an <strong>Undirected Graph</strong>, is there a simple path that visits every node exactly once?
            </p>
            <p class="text-xs mt-2 text-purple-300">Constraint: Can move both ways ($u - v$).</p>
        </div>
    </div>


    <!-- 2. THE REDUCTION ALGORITHM -->
    <div class="bg-white/5 p-6 rounded-xl border border-white/10">
        <h4 class="font-bold text-white mb-6 text-center text-lg">The Reduction Algorithm ($DHP \to UHP$)</h4>
        <p class="text-sm opacity-70 mb-6 text-center">
            Since UHP allows moving backwards, we need to design a graph structure that physically prevents the path from going the "wrong way".
        </p>

        <div class="space-y-6">
            
            <!-- Step 1 -->
            <div class="flex gap-4 items-start">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent">1</div>
                <div>
                    <h6 class="font-bold text-white text-sm">Vertex Expansion (The "Valve")</h6>
                    <p class="text-xs opacity-80 mt-1">
                        For every vertex $v$ in the original directed graph, create <strong>three</strong> vertices in the new graph: 
                        <span class="font-mono text-green-400">$v_{in}$</span>, 
                        <span class="font-mono text-blue-400">$v_{mid}$</span>, and 
                        <span class="font-mono text-red-400">$v_{out}$</span>.
                    </p>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="flex gap-4 items-start">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent">2</div>
                <div>
                    <h6 class="font-bold text-white text-sm">Internal Connections</h6>
                    <p class="text-xs opacity-80 mt-1">
                        Add undirected edges connecting them in a chain:
                        <br><strong>$v_{in} - v_{mid}$</strong> and <strong>$v_{mid} - v_{out}$</strong>.
                    </p>
                    <p class="text-xs text-yellow-500 mt-1 italic">
                        Why? This forces any path that enters $v$ to go through the middle and leave the other side. You cannot enter $v_{mid}$ and turn back without visiting a node twice.
                    </p>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="flex gap-4 items-start">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent">3</div>
                <div>
                    <h6 class="font-bold text-white text-sm">External Connections (Simulating Direction)</h6>
                    <p class="text-xs opacity-80 mt-1">
                        For every directed edge $u \to v$ in the original graph, draw an undirected edge from <strong>$u_{out}$</strong> to <strong>$v_{in}$</strong>.
                    </p>
                    <p class="text-xs text-green-400 mt-1">
                        Result: The only way to move between "valves" is to leave an Output and enter an Input. The flow is preserved.
                    </p>
                </div>
            </div>

        </div>
    </div>

</div>

<!-- VISUAL STEPS: THE TRANSFORMATION -->
<div class="space-y-6 mt-8 border-t border-white/10 pt-8">
    <h4 class="font-bold text-white text-center mb-6">Visualizing the Steps</h4>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- VISUAL 1: NODE EXPANSION -->
        <div class="bg-black/30 p-4 rounded-xl border border-white/10 flex flex-col items-center">
            <h5 class="text-accent font-bold mb-4 text-sm">Step 1 & 2: The Node "Explosion"</h5>
            <div class="relative w-full h-[150px] bg-white rounded-lg p-2">
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
                    <defs>
                        <marker id="arrow-step" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                        </marker>
                    </defs>

                    <!-- BEFORE -->
                    <g transform="translate(60, 75)">
                        <text x="0" y="-35" text-anchor="middle" font-size="10" font-weight="bold" fill="#666">Original</text>
                        <circle r="20" fill="#3b82f6" stroke="black" stroke-width="2"/>
                        <text y="5" text-anchor="middle" fill="white" font-weight="bold">v</text>
                    </g>

                    <!-- ARROW -->
                    <line x1="100" y1="75" x2="140" y2="75" stroke="#333" stroke-width="2" marker-end="url(#arrow-step)" />

                    <!-- AFTER -->
                    <g transform="translate(220, 75)">
                        <text x="0" y="-35" text-anchor="middle" font-size="10" font-weight="bold" fill="#666">Gadget</text>
                        
                        <!-- Internal Edges -->
                        <line x1="-50" y1="0" x2="0" y2="0" stroke="black" stroke-width="2"/>
                        <line x1="0" y1="0" x2="50" y2="0" stroke="black" stroke-width="2"/>

                        <!-- Nodes -->
                        <circle cx="-50" cy="0" r="10" fill="#22c55e" stroke="black"/>
                        <text x="-50" y="25" text-anchor="middle" font-size="8">In</text>

                        <circle cx="0" cy="0" r="10" fill="#3b82f6" stroke="black"/>
                        <text x="0" y="25" text-anchor="middle" font-size="8">Mid</text>

                        <circle cx="50" cy="0" r="10" fill="#ef4444" stroke="black"/>
                        <text x="50" y="25" text-anchor="middle" font-size="8">Out</text>
                    </g>
                </svg>
            </div>
            <p class="text-xs text-center mt-2 opacity-60">Every single node becomes a chain of 3.</p>
        </div>

        <!-- VISUAL 2: EDGE CONNECTION -->
        <div class="bg-black/30 p-4 rounded-xl border border-white/10 flex flex-col items-center">
            <h5 class="text-accent font-bold mb-4 text-sm">Step 3: The Directional Link</h5>
            <div class="relative w-full h-[150px] bg-white rounded-lg p-2">
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
                    
                    <!-- Left Gadget (U) -->
                    <g transform="translate(50, 75)">
                        <!-- Out Node -->
                        <circle cx="20" cy="0" r="10" fill="#ef4444" stroke="black"/>
                        <text x="20" y="4" text-anchor="middle" font-size="10" fill="white" font-weight="bold">u</text>
                        <text x="20" y="25" text-anchor="middle" font-size="8">Out</text>
                    </g>

                    <!-- The Link -->
                    <line x1="70" y1="75" x2="230" y2="75" stroke="#facc15" stroke-width="3" />
                    <text x="150" y="65" text-anchor="middle" font-size="10" font-weight="bold">Undirected Edge</text>
                    <text x="150" y="90" text-anchor="middle" font-size="9" fill="#666">Connects u_out to v_in</text>

                    <!-- Right Gadget (V) -->
                    <g transform="translate(250, 75)">
                        <!-- In Node -->
                        <circle cx="-20" cy="0" r="10" fill="#22c55e" stroke="black"/>
                        <text x="-20" y="4" text-anchor="middle" font-size="10" fill="white" font-weight="bold">v</text>
                        <text x="-20" y="25" text-anchor="middle" font-size="8">In</text>
                    </g>

                    <!-- Flow Arrows (Decor) -->
                    <path d="M 90 110 L 210 110" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow-step)"/>
                    <text x="150" y="125" text-anchor="middle" font-size="8" fill="#3b82f6">Effective Flow Direction</text>

                </svg>
            </div>
            <p class="text-xs text-center mt-2 opacity-60">Connecting <strong>Out</strong> to <strong>In</strong> simulates a one-way arrow.</p>
        </div>

    </div>
</div>

<!-- CONCLUSION: THE BIG PICTURE (REDESIGNED) -->
<div class="mt-10 p-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl">
    <div class="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
        <h4 class="font-bold text-white text-center mb-2 text-lg">Conclusion: The "One-Way Valve" Effect</h4>
        <p class="text-xs text-gray-400 text-center mb-6">Even in an undirected graph, this structure forces a specific direction.</p>

        <!-- VISUAL FLOW -->
        <div class="relative w-full h-[220px] bg-[#0f172a] rounded-lg border border-slate-700 overflow-hidden flex flex-col items-center justify-center">
            
            <svg class="w-full h-full" viewBox="0 0 600 150">
                <defs>
                    <!-- Green Gradient for Flow -->
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#4ade80;stop-opacity:1" />
                    </linearGradient>
                    <!-- Marker -->
                    <marker id="arrow-flow-final" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#4ade80" />
                    </marker>
                </defs>

                <!-- === GADGET A === -->
                <g transform="translate(80, 75)">
                    <!-- Container -->
                    <rect x="-60" y="-30" width="120" height="60" rx="15" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                    <text x="0" y="-40" text-anchor="middle" font-size="10" font-weight="bold" fill="#94a3b8">Node A</text>
                    
                    <!-- Nodes -->
                    <circle cx="-40" cy="0" r="8" fill="#3b82f6" stroke="white" stroke-width="1.5"/> <!-- In -->
                    <circle cx="0" cy="0" r="8" fill="#3b82f6" stroke="white" stroke-width="1.5"/>   <!-- Mid -->
                    <circle cx="40" cy="0" r="8" fill="#ef4444" stroke="white" stroke-width="1.5"/>   <!-- Out -->
                    
                    <!-- Internal Flow -->
                    <line x1="-32" y1="0" x2="-8" y2="0" stroke="white" stroke-width="2" />
                    <line x1="8" y1="0" x2="32" y2="0" stroke="white" stroke-width="2" />
                    
                    <!-- Flow Highlight -->
                    <path d="M -50 15 Q 0 25 50 15" fill="none" stroke="url(#flowGrad)" stroke-width="2" marker-end="url(#arrow-flow-final)" opacity="0.8"/>
                </g>

                <!-- Connection A -> B -->
                <path d="M 120 75 L 200 75" stroke="#facc15" stroke-width="3" stroke-dasharray="4 2" />
                <circle cx="160" cy="75" r="3" fill="#facc15" />

                <!-- === GADGET B === -->
                <g transform="translate(260, 75)">
                    <rect x="-60" y="-30" width="120" height="60" rx="15" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                    <text x="0" y="-40" text-anchor="middle" font-size="10" font-weight="bold" fill="#94a3b8">Node B</text>
                    
                    <circle cx="-40" cy="0" r="8" fill="#22c55e" stroke="white" stroke-width="1.5"/> <!-- In -->
                    <circle cx="0" cy="0" r="8" fill="#3b82f6" stroke="white" stroke-width="1.5"/>   <!-- Mid -->
                    <circle cx="40" cy="0" r="8" fill="#ef4444" stroke="white" stroke-width="1.5"/>   <!-- Out -->
                    
                    <line x1="-32" y1="0" x2="-8" y2="0" stroke="white" stroke-width="2" />
                    <line x1="8" y1="0" x2="32" y2="0" stroke="white" stroke-width="2" />

                    <path d="M -50 15 Q 0 25 50 15" fill="none" stroke="url(#flowGrad)" stroke-width="2" marker-end="url(#arrow-flow-final)" opacity="0.8"/>
                </g>

                <!-- Connection B -> C -->
                <path d="M 300 75 L 380 75" stroke="#facc15" stroke-width="3" stroke-dasharray="4 2" />
                <circle cx="340" cy="75" r="3" fill="#facc15" />

                <!-- === GADGET C === -->
                <g transform="translate(440, 75)">
                    <rect x="-60" y="-30" width="120" height="60" rx="15" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                    <text x="0" y="-40" text-anchor="middle" font-size="10" font-weight="bold" fill="#94a3b8">Node C</text>
                    
                    <circle cx="-40" cy="0" r="8" fill="#22c55e" stroke="white" stroke-width="1.5"/> <!-- In -->
                    <circle cx="0" cy="0" r="8" fill="#3b82f6" stroke="white" stroke-width="1.5"/>   <!-- Mid -->
                    <circle cx="40" cy="0" r="8" fill="#3b82f6" stroke="white" stroke-width="1.5"/>   <!-- Out -->
                    
                    <line x1="-32" y1="0" x2="-8" y2="0" stroke="white" stroke-width="2" />
                    <line x1="8" y1="0" x2="32" y2="0" stroke="white" stroke-width="2" />

                    <path d="M -50 15 Q 0 25 50 15" fill="none" stroke="url(#flowGrad)" stroke-width="2" marker-end="url(#arrow-flow-final)" opacity="0.8"/>
                </g>

                <!-- Blocked Path Visual -->
                <path d="M 270 45 Q 260 20 200 45" stroke="#ef4444" stroke-width="2" stroke-dasharray="4" fill="none" marker-end="url(#arrow-flow-final)" />
                <text x="235" y="30" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">BLOCKED</text>
                <text x="235" y="42" text-anchor="middle" font-size="8" fill="#ef4444">Cannot enter 'Out'</text>

            </svg>
            
            <div class="absolute bottom-2 left-0 w-full flex justify-center gap-6 text-[10px] text-gray-400 font-mono">
                <div class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-green-500"></span> In</div>
                <div class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-blue-500"></span> Mid</div>
                <div class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500"></span> Out</div>
            </div>
        </div>

        <!-- FINAL EXPLANATION -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-300 font-bold mb-2 text-sm flex items-center gap-2">
                    <span class="text-xl">👀</span> What the User Sees
                </h5>
                <p class="text-sm opacity-80 leading-relaxed">
                    Instead of simple dots, we now have complex <strong>"Valve Gadgets"</strong>. 
                    <br>The yellow connections link the <strong class="text-red-400">EXIT</strong> of one node to the <strong class="text-green-400">ENTRY</strong> of the next.
                </p>
            </div>

            <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                <h5 class="text-green-300 font-bold mb-2 text-sm flex items-center gap-2">
                    <span class="text-xl">✅</span> The Result
                </h5>
                <p class="text-sm opacity-80 leading-relaxed">
                    Even though all lines are technically two-way streets, the layout makes it impossible to go backwards without getting stuck inside a node.
                    <br><strong>Direction is enforced by geometry.</strong>
                </p>
            </div>

        </div>
    </div>
</div>

 

    <!-- 3. STEP-BY-STEP REDUCTION -->
    <div class="bg-black/30 p-6 rounded-xl border border-white/10">
        <h4 class="font-bold text-white mb-4">The Reduction Algorithm</h4>
        
        <div class="space-y-4 text-sm opacity-90">
            <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                <div>
                    <h6 class="font-bold text-accent">Explode Vertices</h6>
                    <p class="text-xs opacity-70">For every vertex $v$ in the directed graph, create 3 vertices in the new graph: $v_{in}, v_{mid}, v_{out}$.</p>
                </div>
            </div>

            <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                <div>
                    <h6 class="font-bold text-accent">Add Internal Edges</h6>
                    <p class="text-xs opacity-70">Connect $v_{in} - v_{mid}$ and $v_{mid} - v_{out}$ with undirected edges.</p>
                </div>
            </div>

            <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                <div>
                    <h6 class="font-bold text-accent">Add External Edges</h6>
                    <p class="text-xs opacity-70">
                        For every directed edge $u \to v$ in the original graph:
                        <br>Add an undirected edge connecting $u_{out}$ to $v_{in}$.
                    </p>
                </div>
            </div>

            <div class="bg-white/5 p-3 rounded mt-2 border border-white/10">
                <p class="font-bold text-yellow-400 text-xs uppercase mb-1">Conclusion</p>
                <p class="text-xs">
                    This forces the path to always flow from an <strong>Out</strong> node to an <strong>In</strong> node. 
                    <br>A Hamiltonian Path exists in the Directed Graph $\iff$ A Hamiltonian Path exists in the constructed Undirected Graph.
                </p>
            </div>
        </div>
    </div>

</div>
                <div class="space-y-10">
                    
                    <!-- 1. THE PROBLEM -->
                    <div class="bg-black/30 p-4 rounded border border-white/10">
                        <h5 class="font-bold text-accent mb-2">The Goal</h5>
                        <p class="text-sm opacity-80">
                            <strong>DHP:</strong> Given a <em>Directed</em> graph, is there a path visiting every node exactly once? (Direction matters: $u \to v \neq v \to u$).
                            <br><strong>UHP:</strong> Given an <em>Undirected</em> graph, is there a simple path visiting every node? (Direction doesn't matter: $u-v$ is same as $v-u$).
                        </p>
                        <p class="text-xs text-yellow-400 mt-2">Challenge: How do we force an undirected edge to behave like a one-way street?</p>
                    </div>

                    <!-- 2. THE GADGET VISUALIZATION -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
                        <h4 class="font-bold text-white mb-6">The "3-Node Valve" Gadget</h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
                            
                            <!-- BEFORE: Single Node -->
                            <div class="flex flex-col items-center justify-center">
                                <p class="text-xs opacity-60 mb-2">Original Directed Node $v$</p>
                                <svg width="100" height="100" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="20" fill="#3b82f6" stroke="white" stroke-width="2"/>
                                    <text x="50" y="55" text-anchor="middle" font-weight="bold" fill="white">v</text>
                                    <!-- Incoming -->
                                    <line x1="10" y1="50" x2="25" y2="50" stroke="white" stroke-width="2" marker-end="url(#arrow-sm)"/>
                                    <!-- Outgoing -->
                                    <line x1="75" y1="50" x2="90" y2="50" stroke="white" stroke-width="2" marker-end="url(#arrow-sm)"/>
                                </svg>
                            </div>

                            <!-- AFTER: The Gadget -->
                            <div class="flex flex-col items-center justify-center bg-black/20 rounded-xl p-4 border border-blue-500/30">
                                <p class="text-xs opacity-60 mb-2">Transformed Undirected Gadget</p>
                                <svg width="250" height="100" viewBox="0 0 250 100">
                                    <!-- v_in -->
                                    <circle cx="40" cy="50" r="15" fill="#333" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="40" y="54" text-anchor="middle" font-size="10" fill="white">$v_{in}$</text>

                                    <!-- v_mid -->
                                    <circle cx="125" cy="50" r="15" fill="#333" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="125" y="54" text-anchor="middle" font-size="10" fill="white">$v_{mid}$</text>

                                    <!-- v_out -->
                                    <circle cx="210" cy="50" r="15" fill="#333" stroke="#3b82f6" stroke-width="2"/>
                                    <text x="210" y="54" text-anchor="middle" font-size="10" fill="white">$v_{out}$</text>

                                    <!-- Internal Edges -->
                                    <line x1="55" y1="50" x2="110" y2="50" stroke="#4ade80" stroke-width="3"/>
                                    <line x1="140" y1="50" x2="195" y2="50" stroke="#4ade80" stroke-width="3"/>
                                </svg>
                                <p class="text-[10px] text-green-400 mt-1">Internal edges must be traversed to visit $v_{mid}$</p>
                            </div>
                        </div>

                        <!-- ARROW DOWN -->
                        <div class="my-4 text-2xl opacity-50">↓ Connecting Two Nodes ($u \to v$)</div>

                        <!-- CONNECTION DIAGRAM -->
                        <div class="relative w-full max-w-[500px] h-[150px] bg-white rounded-lg p-2">
                            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 500 150">
                                <defs>
                                    <marker id="arrow-sm" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                    </marker>
                                </defs>

                                <!-- NODE U -->
                                <g transform="translate(0, 0)">
                                    <circle cx="40" cy="75" r="12" fill="#fff" stroke="#333"/> <text x="40" y="79" text-anchor="middle" font-size="8">u_in</text>
                                    <line x1="52" y1="75" x2="88" y2="75" stroke="#333" stroke-width="2"/>
                                    <circle cx="100" cy="75" r="12" fill="#fff" stroke="#333"/> <text x="100" y="79" text-anchor="middle" font-size="8">u_mid</text>
                                    <line x1="112" y1="75" x2="148" y2="75" stroke="#333" stroke-width="2"/>
                                    <circle cx="160" cy="75" r="12" fill="#fff" stroke="#333"/> <text x="160" y="79" text-anchor="middle" font-size="8">u_out</text>
                                </g>

                                <!-- EDGE U->V -->
                                <line x1="172" y1="75" x2="328" y2="75" stroke="#facc15" stroke-width="4"/>
                                <text x="250" y="65" text-anchor="middle" font-size="10" font-weight="bold" fill="#facc15">Cross Edge</text>

                                <!-- NODE V -->
                                <g transform="translate(300, 0)">
                                    <circle cx="40" cy="75" r="12" fill="#fff" stroke="#333"/> <text x="40" y="79" text-anchor="middle" font-size="8">v_in</text>
                                    <line x1="52" y1="75" x2="88" y2="75" stroke="#333" stroke-width="2"/>
                                    <circle cx="100" cy="75" r="12" fill="#fff" stroke="#333"/> <text x="100" y="79" text-anchor="middle" font-size="8">v_mid</text>
                                    <line x1="112" y1="75" x2="148" y2="75" stroke="#333" stroke-width="2"/>
                                    <circle cx="160" cy="75" r="12" fill="#fff" stroke="#333"/> <text x="160" y="79" text-anchor="middle" font-size="8">v_out</text>
                                </g>

                                <!-- PATH FLOW -->
                                <path d="M 30 95 Q 100 130 160 95" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4"/>
                                <path d="M 170 90 L 330 90" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow-sm)"/>
                                <text x="250" y="110" text-anchor="middle" font-size="10" fill="#2563eb">Flow Direction Enforced</text>
                            </svg>
                        </div>
                    </div>

                    <!-- 3. THE LOGIC -->
                    <div class="bg-black/30 p-5 rounded-xl border border-l-4 border-green-500">
                        <h5 class="font-bold text-green-400 mb-2">Why this works</h5>
                        <ul class="list-disc pl-5 text-sm space-y-2 opacity-90">
                            <li><strong>Problem:</strong> In an undirected graph, you can enter a node and leave immediately.</li>
                            <li><strong>Solution:</strong> We replace node $v$ with $v_{in} - v_{mid} - v_{out}$.</li>
                            <li><strong>The Trap:</strong> $v_{mid}$ is only connected to $v_{in}$ and $v_{out}$. Once you enter $v_{in}$ and go to $v_{mid}$, you <em>must</em> exit via $v_{out}$ (or vice versa) to avoid getting stuck at $v_{mid}$.</li>
                            <li><strong>Direction:</strong> By connecting $u_{out}$ only to $v_{in}$, we ensure the path flows "forward" from gadget to gadget.</li>
                        </ul>
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