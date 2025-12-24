// coping.js
export const copingModule = {
    id: 'cop',
    title: 'Coping with Limitations',
    subtopics: [
        { id: 'cop-strategies', title: 'Strategies for Hard Problems' },
        { id: 'cop-backtracking', title: 'Backtracking' },
        { id: 'cop-nqueens', title: 'Ex: N-Queens Problem' },
         { id: 'cop-hamiltonian', title: 'Ex: Hamiltonian Circuit' }, // Updated
        { id: 'cop-subset', title: 'Ex: Subset Sum' }, // New
        { id: 'cop-bnb', title: 'Branch-and-Bound' },
        { id: 'cop-assignment', title: 'Ex: Assignment Problem' },
        { id: 'cop-knapsack', title: 'Ex: Knapsack Problem' }
    ],
    content: {
        'cop-strategies': {
            title: 'How to Tackle Hard (NP-Hard) Problems',
            html: `
                <div class="space-y-8">
                    <p class="opacity-80">When a problem is intractable (super-polynomial time), we have two main coping strategies:</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Strategy 1 -->
                        <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl">
                            <h4 class="font-bold text-blue-400 text-lg mb-2">1. Exact Solutions (Smarter Search)</h4>
                            <p class="text-sm opacity-80 mb-4">
                                Solves the problem exactly but may still take exponential time in the worst case.
                            </p>
                            <ul class="list-disc pl-5 text-sm space-y-2">
                                <li><strong>Brute Force:</strong> Try everything (only for small n).</li>
                                <li><strong>Backtracking:</strong> Eliminate dead-end paths early.</li>
                                <li><strong>Branch-and-Bound:</strong> Use bounds to prune non-promising branches.</li>
                            </ul>
                        </div>

                        <!-- Strategy 2 -->
                        <div class="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-xl">
                            <h4 class="font-bold text-purple-400 text-lg mb-2">2. Approximation Algorithms</h4>
                            <p class="text-sm opacity-80 mb-4">
                                Finds an <em>approximate</em> (sub-optimal) solution in polynomial time.
                            </p>
                            <ul class="list-disc pl-5 text-sm space-y-2">
                                <li>"Good enough" answers.</li>
                                <li>Always fast (Polynomial time).</li>
                                <li>Used when exactness is not critical.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
       'cop-backtracking': {
            title: 'Backtracking & State Space Trees',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. WHAT IS A STATE SPACE TREE? -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl">
                        <h4 class="font-bold text-blue-300 text-lg mb-4">What is a State Space Tree?</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            <ul class="list-disc pl-5 text-sm space-y-3 opacity-90">
                                <li><strong>Nodes:</strong> Represent <em>Partial Solutions</em> (a component of the final answer).</li>
                                <li><strong>Edges:</strong> Represent <em>Choices</em> made to extend the solution (e.g., "Add x", "Don't add x").</li>
                                <li><strong>Path:</strong> A sequence from Root to Leaf representing a complete candidate solution.</li>
                                <li><strong>Leaf:</strong> Either a <em>Complete Solution</em> or a dead end.</li>
                            </ul>
                            
                            <!-- GENERAL CONCEPT SVG -->
                            <div class="relative w-full h-[200px] bg-white/5 rounded-lg flex justify-center">
                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                                    <defs>
                                        <marker id="arrow-bt" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                            <polygon points="0 0, 8 3, 0 6" fill="#aaa" />
                                        </marker>
                                        <marker id="arrow-stop" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                            <polygon points="0 0, 8 3, 0 6" fill="#f87171" />
                                        </marker>
                                    </defs>

                                    <!-- Root -->
                                    <circle cx="200" cy="30" r="20" fill="#333" stroke="white" stroke-width="2"/>
                                    <text x="200" y="35" text-anchor="middle" fill="white" font-size="12">Start</text>

                                    <!-- Left Branch (Invalid) -->
                                    <line x1="185" y1="45" x2="100" y2="100" stroke="#f87171" stroke-width="2" marker-end="url(#arrow-stop)"/>
                                    <circle cx="100" cy="100" r="20" fill="#333" stroke="#f87171" stroke-width="2"/>
                                    <text x="100" y="105" text-anchor="middle" fill="#f87171" font-size="10">Invalid</text>
                                    
                                    <!-- Prune Symbol -->
                                    <text x="100" y="140" text-anchor="middle" fill="#f87171" font-size="24" font-weight="bold">Ø</text>
                                    <text x="100" y="160" text-anchor="middle" fill="#f87171" font-size="10">Prune & Backtrack</text>

                                    <!-- Right Branch (Valid) -->
                                    <line x1="215" y1="45" x2="300" y2="100" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow-bt)"/>
                                    <circle cx="300" cy="100" r="20" fill="#333" stroke="#4ade80" stroke-width="2"/>
                                    <text x="300" y="105" text-anchor="middle" fill="#4ade80" font-size="10">Valid</text>

                                    <!-- Solution Leaf -->
                                    <line x1="300" y1="120" x2="300" y2="170" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow-bt)"/>
                                    <rect x="270" y="170" width="60" height="25" rx="5" fill="#333" stroke="#4ade80"/>
                                    <text x="300" y="186" text-anchor="middle" fill="#4ade80" font-size="10">Solution!</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- 2. THE ALGORITHM -->
                    <div class="bg-black/30 p-6 rounded-xl border border-white/10">
                        <h4 class="font-bold text-accent mb-4">The Backtracking Strategy</h4>
                        <p class="text-sm opacity-80 mb-4">
                            We don't build the whole tree at once. We explore it dynamically using <strong>Depth-First Search (DFS)</strong>.
                        </p>
                        
                        <div class="space-y-4">
                            <div class="flex items-start gap-4">
                                <div class="bg-white/10 px-3 py-1 rounded text-lg font-bold">1</div>
                                <div>
                                    <h5 class="font-bold text-white">Expand</h5>
                                    <p class="text-xs opacity-70">Make a choice. Add a component to your partial solution. Move down the tree.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-red-500/20 px-3 py-1 rounded text-lg font-bold text-red-400">2</div>
                                <div>
                                    <h5 class="font-bold text-red-400">Check (Prune)</h5>
                                    <p class="text-xs opacity-70">Check if the partial solution is still valid. If constraints are violated, <strong>Stop!</strong> Do not go deeper. This subtree is "dead".</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-500/20 px-3 py-1 rounded text-lg font-bold text-blue-400">3</div>
                                <div>
                                    <h5 class="font-bold text-blue-400">Backtrack</h5>
                                    <p class="text-xs opacity-70">If you hit a dead end (or finished a solution), go back up to the parent node and try the <em>next</em> available choice.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 3. STEP-BY-STEP EXAMPLE WITH TREE -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="font-bold text-white">Example: Subset Sum</h4>
                            <span class="text-xs bg-accent text-black px-2 py-1 rounded">Set = {2, 4, 3}, Target = 5</span>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            
                            <!-- TREE VISUALIZATION -->
                            <div class="relative h-[300px] bg-black/20 rounded-lg flex justify-center items-center">
                                <svg width="350" height="280" viewBox="0 0 350 280">
                                    
                                    <!-- Level 0: Root -->
                                    <g transform="translate(175, 30)">
                                        <circle r="15" fill="#333" stroke="white" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">0</text>
                                    </g>

                                    <!-- Level 1: Choice {2} -->
                                    <!-- Left: With 2 -->
                                    <line x1="165" y1="40" x2="100" y2="100" stroke="white" />
                                    <g transform="translate(100, 100)">
                                        <circle r="15" fill="#333" stroke="white" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">2</text>
                                        <text x="-25" y="-10" fill="gray" font-size="9">+2</text>
                                    </g>

                                    <!-- Level 2: Choice {4} from {2} -->
                                    <!-- Left: With 4 -->
                                    <line x1="90" y1="110" x2="50" y2="180" stroke="#f87171" />
                                    <g transform="translate(50, 180)">
                                        <circle r="15" fill="#333" stroke="#f87171" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="#f87171" font-size="10">6</text>
                                        <text y="30" text-anchor="middle" fill="#f87171" font-size="10">> 5 (Stop)</text>
                                        <text x="-20" y="-10" fill="#f87171" font-size="9">+4</text>
                                    </g>

                                    <!-- Right: Without 4 -->
                                    <line x1="110" y1="110" x2="150" y2="180" stroke="white" />
                                    <g transform="translate(150, 180)">
                                        <circle r="15" fill="#333" stroke="white" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">2</text>
                                        <text x="10" y="-10" fill="gray" font-size="9">no 4</text>
                                    </g>

                                    <!-- Level 3: Choice {3} from {2} -->
                                    <!-- Left: With 3 -->
                                    <line x1="150" y1="195" x2="150" y2="250" stroke="#4ade80" />
                                    <g transform="translate(150, 250)">
                                        <rect x="-20" y="-15" width="40" height="30" rx="5" fill="#333" stroke="#4ade80" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">5</text>
                                        <text x="15" y="-5" fill="#4ade80" font-size="9">+3</text>
                                    </g>

                                </svg>
                            </div>

                            <!-- TEXT WALKTHROUGH -->
                            <div class="space-y-2 text-xs font-mono">
                                <div class="bg-black/40 p-3 rounded border-l-2 border-gray-500">
                                    <span class="text-gray-400 font-bold">1. Root (0)</span><br>
                                    Expand: Add 2? Yes.
                                </div>
                                <div class="bg-black/40 p-3 rounded border-l-2 border-blue-500">
                                    <span class="text-blue-400 font-bold">2. Node (2)</span><br>
                                    Expand: Add 4? Yes.
                                </div>
                                <div class="bg-black/40 p-3 rounded border-l-2 border-red-500">
                                    <span class="text-red-400 font-bold">3. Node (6)</span><br>
                                    Sum 6 > 5. <span class="font-bold">PRUNE!</span><br>
                                    Backtrack to Node (2).
                                </div>
                                <div class="bg-black/40 p-3 rounded border-l-2 border-blue-500">
                                    <span class="text-blue-400 font-bold">4. Node (2) again</span><br>
                                    Choice: Don't add 4. Move down right branch.
                                </div>
                                <div class="bg-black/40 p-3 rounded border-l-2 border-blue-500">
                                    <span class="text-blue-400 font-bold">5. Node (2)</span><br>
                                    Expand: Add 3? Yes.
                                </div>
                                <div class="bg-black/40 p-3 rounded border-l-2 border-green-500">
                                    <span class="text-green-400 font-bold">6. Node (5)</span><br>
                                    Sum 5 == 5. <span class="font-bold">SOLUTION FOUND!</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            `
        },
       'cop-nqueens': {
            title: 'Example: The N-Queens Problem',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. INTRO & APPLICATIONS -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-xl">
                        <h4 class="font-bold text-blue-300 text-lg mb-2">The Problem</h4>
                        <p class="text-sm opacity-90">
                            Place $n$ queens on an $n \\times n$ chess board so that no two queens threaten each other (no shared row, column, or diagonal).
                        </p>
                        <div class="mt-4 border-t border-white/10 pt-2">
                            <h5 class="font-bold text-white text-xs uppercase mb-1">Why is this useful? (Real World)</h5>
                            <p class="text-xs opacity-70">
                                The N-Queens problem is the "Hello World" of <strong>Constraint Satisfaction Problems (CSP)</strong>. The techniques used here (Backtracking) are the same ones used for:
                                <ul class="list-disc pl-4 mt-1 inline-block">
                                    <li>School/Job Scheduling</li>
                                    <li>VLSI Chip Layout (Circuit design)</li>
                                    <li>Traffic Control Systems</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                     <div class="flex flex-col md:flex-row gap-6 items-center">
                        <div class="bg-white/5 p-4 rounded-xl flex-1">
                            <h5 class="font-bold text-accent mb-2">4-Queens Constraints</h5>
                            <ul class="list-disc pl-5 text-sm space-y-1 opacity-80">
                                <li>Start with empty board.</li>
                                <li>Place Q in Row 1.</li>
                                <li>Place Q in Row 2 (safe column).</li>
                                <li>If no safe column exists, <strong>Backtrack</strong> to Row 1 and move that Queen.</li>
                            </ul>
                        </div>

                        <!-- Mini Board Visualization -->
                        <div class="bg-white p-1 rounded w-[150px] h-[150px] grid grid-cols-4 grid-rows-4 gap-0.5 border-2 border-gray-500">
                            <!-- R1 -->
                            <div class="bg-gray-300 flex items-center justify-center text-black font-bold"></div>
                            <div class="bg-white flex items-center justify-center text-black font-bold">Q</div>
                            <div class="bg-gray-300 flex items-center justify-center text-black font-bold"></div>
                            <div class="bg-white flex items-center justify-center text-black font-bold"></div>
                            <!-- R2 -->
                            <div class="bg-white flex items-center justify-center text-black font-bold"></div>
                            <div class="bg-gray-300 flex items-center justify-center text-black font-bold text-red-500 text-xs">X</div>
                            <div class="bg-white flex items-center justify-center text-black font-bold text-red-500 text-xs">X</div>
                            <div class="bg-gray-300 flex items-center justify-center text-black font-bold">Q</div>
                            <!-- R3 -->
                            <div class="bg-gray-300 flex items-center justify-center text-black font-bold">Q</div>
                            <div class="bg-white flex items-center justify-center text-black font-bold text-red-500 text-xs">X</div>
                            <div class="bg-gray-300 flex items-center justify-center text-black font-bold"></div>
                            <div class="bg-white flex items-center justify-center text-black font-bold text-red-500 text-xs">X</div>
                            <!-- R4 -->
                            <div class="bg-white flex items-center justify-center text-black font-bold"></div>
                            <div class="bg-gray-300 flex items-center justify-center text-black font-bold"></div>
                            <div class="bg-white flex items-center justify-center text-black font-bold">Q</div>
                            <div class="bg-gray-300 flex items-center justify-center text-black font-bold"></div>
                        </div>
                    </div>

                    <!-- 2. STATE SPACE TREE -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
                        <h4 class="font-bold text-accent mb-4">State-Space Tree (Following Slide 12)</h4>
                        <p class="text-xs text-center opacity-60 mb-6">
                            Nodes represent partial boards. <span class="text-red-400">Red Lines</span> denote dead ends. <span class="text-green-400">Green Line</span> denotes the successful path.
                        </p>

                        <!-- CONTAINER -->
                        <div class="relative w-full h-[600px] bg-white rounded-lg overflow-hidden border border-gray-300">
                            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
                                <defs>
                                    <marker id="arrow-n" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                        <path d="M0,0 L0,6 L9,3 z" fill="#333" />
                                    </marker>
                                    <marker id="arrow-success" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                        <path d="M0,0 L0,6 L9,3 z" fill="#16a34a" />
                                    </marker>
                                    <!-- Board Grid Pattern -->
                                    <g id="miniBoard">
                                        <rect x="0" y="0" width="60" height="60" fill="none" stroke="#333" stroke-width="2"/>
                                        <!-- Vertical Lines -->
                                        <line x1="15" y1="0" x2="15" y2="60" stroke="#ccc" stroke-width="1"/>
                                        <line x1="30" y1="0" x2="30" y2="60" stroke="#ccc" stroke-width="1"/>
                                        <line x1="45" y1="0" x2="45" y2="60" stroke="#ccc" stroke-width="1"/>
                                        <!-- Horizontal Lines -->
                                        <line x1="0" y1="15" x2="60" y2="15" stroke="#ccc" stroke-width="1"/>
                                        <line x1="0" y1="30" x2="60" y2="30" stroke="#ccc" stroke-width="1"/>
                                        <line x1="0" y1="45" x2="60" y2="45" stroke="#ccc" stroke-width="1"/>
                                    </g>
                                </defs>

                                <!-- === LEVEL 0: ROOT (Node 0) === -->
                                <g transform="translate(370, 20)">
                                    <text x="30" y="-5" text-anchor="middle" font-weight="bold" font-size="12">0</text>
                                    <use href="#miniBoard" />
                                </g>

                                <!-- === LEFT BRANCH (Failure) === -->
                                <path d="M 370 50 L 230 100" stroke="#333" stroke-width="2" marker-end="url(#arrow-n)" />
                                <g transform="translate(170, 100)">
                                    <text x="-15" y="30" font-weight="bold" font-size="14">1</text>
                                    <use href="#miniBoard" />
                                    <text x="7.5" y="11" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                </g>
                                <path d="M 200 160 L 200 200" stroke="#333" stroke-width="2" marker-end="url(#arrow-n)" />
                                <g transform="translate(170, 200)">
                                    <text x="-15" y="30" font-weight="bold" font-size="14">2</text>
                                    <use href="#miniBoard" />
                                    <text x="7.5" y="11" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                    <text x="37.5" y="26" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                </g>
                                <path d="M 200 260 L 200 300" stroke="#f87171" stroke-width="2" stroke-dasharray="4" />
                                <text x="200" y="320" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">X (Dead End)</text>

                                <!-- === RIGHT BRANCH (Success) === -->
                                <path d="M 430 50 L 570 100" stroke="#16a34a" stroke-width="3" marker-end="url(#arrow-success)" />
                                <g transform="translate(570, 100)">
                                    <text x="75" y="30" font-weight="bold" font-size="14">5</text>
                                    <use href="#miniBoard" />
                                    <text x="22.5" y="11" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                </g>
                                <path d="M 600 160 L 600 200" stroke="#16a34a" stroke-width="3" marker-end="url(#arrow-success)" />
                                <g transform="translate(570, 200)">
                                    <text x="75" y="30" font-weight="bold" font-size="14">6</text>
                                    <use href="#miniBoard" />
                                    <text x="22.5" y="11" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                    <text x="52.5" y="26" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                </g>
                                <path d="M 600 260 L 600 300" stroke="#16a34a" stroke-width="3" marker-end="url(#arrow-success)" />
                                <g transform="translate(570, 300)">
                                    <text x="75" y="30" font-weight="bold" font-size="14">7</text>
                                    <use href="#miniBoard" />
                                    <text x="22.5" y="11" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                    <text x="52.5" y="26" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                    <text x="7.5" y="41" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                </g>
                                <path d="M 600 360 L 600 400" stroke="#16a34a" stroke-width="3" marker-end="url(#arrow-success)" />
                                <g transform="translate(570, 400)">
                                    <text x="75" y="30" font-weight="bold" font-size="14" fill="#16a34a">8</text>
                                    <use href="#miniBoard" />
                                    <rect x="0" y="0" width="60" height="60" fill="none" stroke="#16a34a" stroke-width="3"/>
                                    <text x="22.5" y="11" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                    <text x="52.5" y="26" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                    <text x="7.5" y="41" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                    <text x="37.5" y="56" text-anchor="middle" font-size="10" font-weight="bold">Q</text>
                                </g>
                                <text x="600" y="480" text-anchor="middle" fill="#16a34a" font-weight="bold">Solution Found!</text>
                            </svg>
                        </div>
                    </div>

                    <!-- 3. EXPLANATION OF ALGORITHM -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <!-- LEFT: LOGIC RULES -->
                        <div class="bg-black/30 p-6 rounded-xl border border-white/10">
                            <h5 class="font-bold text-accent mb-4">1. How we add a Queen</h5>
                            <p class="text-sm opacity-80 mb-4">We place queens one row at a time. Before placing a Queen at row $r$, column $c$, we check:</p>
                            <ul class="list-disc pl-5 text-sm space-y-2 opacity-80">
                                <li><strong>Column Check:</strong> Is there already a Queen in column $c$?</li>
                                <li><strong>Diagonal Check:</strong> Is there a Queen at $(i, j)$ such that $|r - i| == |c - j|$?</li>
                            </ul>
                            <div class="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded text-xs">
                                If <strong>ANY</strong> check fails, the spot is invalid. If all spots in a row are invalid, we <strong>Backtrack</strong>.
                            </div>
                        </div>

                        <!-- RIGHT: TRACE -->
                        <div class="bg-black/30 p-6 rounded-xl border border-white/10">
                            <h5 class="font-bold text-green-400 mb-4">2. Tracing the Green Path</h5>
                            <ul class="space-y-3 text-sm font-mono opacity-80">
                                <li>
                                    <span class="text-accent font-bold">Node 5:</span> Start Row 1. Col 1 was a dead end. Try Col 2. <span class="text-green-400">Valid.</span>
                                </li>
                                <li>
                                    <span class="text-accent font-bold">Node 6:</span> Move to Row 2. Cols 1, 2, 3 are attacked. Try Col 4. <span class="text-green-400">Valid.</span>
                                </li>
                                <li>
                                    <span class="text-accent font-bold">Node 7:</span> Move to Row 3. Col 1 is safe! <span class="text-green-400">Valid.</span>
                                </li>
                                <li>
                                    <span class="text-accent font-bold">Node 8:</span> Move to Row 4. Col 1, 2 are attacked. Col 3 is safe! <span class="text-green-400">Success!</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 4. THE TWO SOLUTIONS -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center">
                            <h5 class="text-green-400 font-bold mb-2">Solution 1 (Node 8)</h5>
                            <div class="grid grid-cols-4 grid-rows-4 w-32 h-32 border-2 border-white">
                                <div class="bg-gray-400"></div><div class="bg-white flex items-center justify-center font-bold text-black">Q</div><div class="bg-gray-400"></div><div class="bg-white"></div>
                                <div class="bg-white"></div><div class="bg-gray-400"></div><div class="bg-white"></div><div class="bg-gray-400 flex items-center justify-center font-bold text-black">Q</div>
                                <div class="bg-gray-400 flex items-center justify-center font-bold text-black">Q</div><div class="bg-white"></div><div class="bg-gray-400"></div><div class="bg-white"></div>
                                <div class="bg-white"></div><div class="bg-gray-400"></div><div class="bg-white flex items-center justify-center font-bold text-black">Q</div><div class="bg-gray-400"></div>
                            </div>
                            <p class="text-xs font-mono mt-2">[2, 4, 1, 3]</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center">
                            <h5 class="text-green-400 font-bold mb-2">Solution 2 (Mirror)</h5>
                            <div class="grid grid-cols-4 grid-rows-4 w-32 h-32 border-2 border-white">
                                <div class="bg-gray-400"></div><div class="bg-white"></div><div class="bg-gray-400 flex items-center justify-center font-bold text-black">Q</div><div class="bg-white"></div>
                                <div class="bg-white flex items-center justify-center font-bold text-black">Q</div><div class="bg-gray-400"></div><div class="bg-white"></div><div class="bg-gray-400"></div>
                                <div class="bg-gray-400"></div><div class="bg-white"></div><div class="bg-gray-400"></div><div class="bg-white flex items-center justify-center font-bold text-black">Q</div>
                                <div class="bg-white"></div><div class="bg-gray-400 flex items-center justify-center font-bold text-black">Q</div><div class="bg-white"></div><div class="bg-gray-400"></div>
                            </div>
                            <p class="text-xs font-mono mt-2">[3, 1, 4, 2]</p>
                        </div>
                    </div>
                </div>
            `
        },
       // coping.js


   
        /* =================================================================
           NEW: HAMILTONIAN CIRCUIT (Based on Slides 14-21)
           ================================================================= */
        'cop-hamiltonian': {
            title: 'Example: Hamiltonian Circuit',
            html: `
                <div class="space-y-10">
                    
                    <!-- THE PROBLEM -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-xl">
                        <h4 class="font-bold text-blue-300 text-lg mb-2">The Problem</h4>
                        <p class="text-sm opacity-90">
                            Find a path in the graph that visits <strong>every node exactly once</strong> and returns to the start node (a).
                        </p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        
                        <!-- LEFT: THE GRAPH -->
                        <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
                            <h5 class="font-bold text-accent mb-4">The Graph Input</h5>
                            <div class="relative w-[300px] h-[250px]">
                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 250">
                                    <!-- Edges -->
                                    <line x1="50" y1="50" x2="150" y2="50" stroke="#666" stroke-width="2" /> <!-- a-b -->
                                    <line x1="50" y1="50" x2="50" y2="150" stroke="#666" stroke-width="2" /> <!-- a-c -->
                                    <line x1="50" y1="50" x2="250" y2="150" stroke="#666" stroke-width="2" /> <!-- a-f -->
                                    <line x1="150" y1="50" x2="50" y2="150" stroke="#666" stroke-width="2" /> <!-- b-c -->
                                    <line x1="150" y1="50" x2="150" y2="150" stroke="#666" stroke-width="2" /> <!-- b-d -->
                                    <line x1="150" y1="50" x2="250" y2="150" stroke="#666" stroke-width="2" /> <!-- b-f -->
                                    <line x1="50" y1="150" x2="25" y2="220" stroke="#666" stroke-width="2" /> <!-- c-d (visual adjust) -->
                                    <line x1="50" y1="150" x2="150" y2="220" stroke="#666" stroke-width="2" /> <!-- c-e -->
                                    <line x1="25" y1="220" x2="150" y2="220" stroke="#666" stroke-width="2" /> <!-- d-e -->
                                    <line x1="150" y1="220" x2="250" y2="150" stroke="#666" stroke-width="2" /> <!-- e-f -->

                                    <!-- Nodes -->
                                    <circle cx="50" cy="50" r="15" fill="#ddd" stroke="black" />
                                    <text x="50" y="55" text-anchor="middle" font-weight="bold">a</text>

                                    <circle cx="150" cy="50" r="15" fill="#facc15" stroke="black" />
                                    <text x="150" y="55" text-anchor="middle" font-weight="bold">b</text>

                                    <circle cx="50" cy="150" r="15" fill="#ddd" stroke="black" />
                                    <text x="50" y="155" text-anchor="middle" font-weight="bold">c</text>

                                    <circle cx="25" cy="220" r="15" fill="#ddd" stroke="black" />
                                    <text x="25" y="225" text-anchor="middle" font-weight="bold">d</text>

                                    <circle cx="150" cy="220" r="15" fill="#ddd" stroke="black" />
                                    <text x="150" y="225" text-anchor="middle" font-weight="bold">e</text>

                                    <circle cx="250" cy="150" r="15" fill="#ddd" stroke="black" />
                                    <text x="250" y="155" text-anchor="middle" font-weight="bold">f</text>
                                </svg>
                            </div>
                        </div>

                        <!-- RIGHT: THE STATE SPACE TREE -->
                        <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h5 class="font-bold text-accent mb-4">State Space Tree (Slide 21)</h5>
                            <div class="relative w-full h-[400px] overflow-hidden">
                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 450">
                                    <defs>
                                        <marker id="arrow-ham" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                            <polygon points="0 0, 8 3, 0 6" fill="white" />
                                        </marker>
                                    </defs>

                                    <!-- NODE 0: Start (a) -->
                                    <g transform="translate(250, 30)">
                                        <text x="0" y="-15" fill="white" font-size="10">0</text>
                                        <circle r="12" fill="#333" stroke="white" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">a</text>
                                    </g>

                                    <!-- NODE 1: b -->
                                    <line x1="240" y1="40" x2="180" y2="80" stroke="white" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(180, 80)">
                                        <text x="-15" y="-5" fill="white" font-size="10">1</text>
                                        <circle r="12" fill="#facc15" stroke="black" />
                                        <text y="4" text-anchor="middle" fill="black" font-size="10">b</text>
                                    </g>

                                    <!-- LEFT BRANCH (Fail) -->
                                    <!-- Node 2: c -->
                                    <line x1="170" y1="90" x2="100" y2="130" stroke="white" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(100, 130)">
                                        <text x="-10" y="-15" fill="white" font-size="10">2</text>
                                        <circle r="12" fill="#333" stroke="white" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">c</text>
                                    </g>

                                    <!-- Node 3: d -->
                                    <line x1="90" y1="140" x2="60" y2="180" stroke="white" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(60, 180)">
                                        <text x="-10" y="-10" fill="white" font-size="10">3</text>
                                        <circle r="12" fill="#333" stroke="white" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">d</text>
                                    </g>

                                    <!-- Node 4: e -->
                                    <line x1="60" y1="195" x2="60" y2="230" stroke="white" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(60, 230)">
                                        <text x="-15" y="0" fill="white" font-size="10">4</text>
                                        <circle r="12" fill="#333" stroke="white" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">e</text>
                                    </g>

                                    <!-- Node 5: f (DEAD) -->
                                    <line x1="60" y1="245" x2="60" y2="280" stroke="white" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(60, 280)">
                                        <text x="-15" y="0" fill="white" font-size="10">5</text>
                                        <circle r="12" fill="#333" stroke="#f87171" stroke-width="2" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">f</text>
                                    </g>
                                    <text x="60" y="310" text-anchor="middle" fill="#f87171" font-size="10">Dead End</text>

                                    <!-- Backtrack from C -> Node 6: e -->
                                    <line x1="110" y1="140" x2="140" y2="180" stroke="white" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(140, 180)">
                                        <text x="15" y="-10" fill="white" font-size="10">6</text>
                                        <circle r="12" fill="#333" stroke="white" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">e</text>
                                    </g>
                                    <!-- Nodes 7, 8 (Dead) -->
                                    <text x="140" y="210" text-anchor="middle" fill="#f87171" font-size="10">Dead Ends (7, 8)</text>


                                    <!-- RIGHT BRANCH (Success) -->
                                    <!-- Node 9: f -->
                                    <line x1="190" y1="90" x2="300" y2="150" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(300, 150)">
                                        <text x="15" y="-10" fill="white" font-size="10">9</text>
                                        <circle r="12" fill="#333" stroke="#4ade80" stroke-width="2" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">f</text>
                                    </g>

                                    <!-- Node 10: e -->
                                    <line x1="300" y1="165" x2="300" y2="210" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(300, 210)">
                                        <text x="15" y="-5" fill="white" font-size="10">10</text>
                                        <circle r="12" fill="#333" stroke="#4ade80" stroke-width="2" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">e</text>
                                    </g>

                                    <!-- Node 11: c -->
                                    <line x1="300" y1="225" x2="300" y2="270" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(300, 270)">
                                        <text x="15" y="-5" fill="white" font-size="10">11</text>
                                        <circle r="12" fill="#333" stroke="#4ade80" stroke-width="2" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">c</text>
                                    </g>

                                    <!-- Node 12: d -->
                                    <line x1="300" y1="285" x2="300" y2="330" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow-ham)" />
                                    <g transform="translate(300, 330)">
                                        <text x="15" y="-5" fill="white" font-size="10">12</text>
                                        <circle r="12" fill="#333" stroke="#4ade80" stroke-width="2" />
                                        <text y="4" text-anchor="middle" fill="white" font-size="10">d</text>
                                    </g>

                                    <!-- RETURN TO A -->
                                    <line x1="300" y1="345" x2="300" y2="380" stroke="#4ade80" stroke-width="2" stroke-dasharray="4" />
                                    <g transform="translate(300, 390)">
                                        <rect x="-15" y="-10" width="30" height="20" fill="#4ade80" stroke="none" />
                                        <text y="4" text-anchor="middle" fill="black" font-weight="bold" font-size="10">a</text>
                                    </g>
                                    <text x="300" y="420" text-anchor="middle" fill="#4ade80" font-weight="bold" font-size="12">Solution</text>

                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- STEP BY STEP EXPLANATION -->
                    <div class="bg-black/30 p-6 rounded-xl border border-white/10">
                        <h4 class="font-bold text-white mb-4">Step-by-Step Backtracking Process</h4>
                        <div class="space-y-3 text-sm font-mono opacity-80">
                            <p><span class="text-blue-400">Step 0-1 (a→b):</span> Start at <strong>a</strong>, move to <strong>b</strong>.</p>
                            <p><span class="text-red-400">Step 2-5 (b→c→d→e→f):</span> Try greedy path. Reached <strong>f</strong>. Neighbors of f are {a, b, e}. 'a' is start, 'b, e' visited. Can we close loop? Only if ALL nodes visited. We missed <strong>f</strong> in this branch? No, we are at f. But we cannot go to a because graph edges might not exist or we missed someone. Actually, from <strong>d</strong> we went to <strong>e</strong> then <strong>f</strong>. From f, we can only go to a. But wait, did we visit everyone? a,b,c,d,e,f. Yes. Why is 5 dead end? Ah, check the graph: <strong>f is not connected to a!</strong> (See graph: f connects to b, e, c). So we are stuck at f.</p>
                            <p><span class="text-yellow-400">Backtrack:</span> Go back up to <strong>c</strong>. Try going to <strong>e</strong> first (Node 6). Then <strong>d</strong> (7) or <strong>f</strong> (8). Both lead to dead ends.</p>
                            <p><span class="text-green-400">Step 9 (b→f):</span> Backtrack to <strong>b</strong>. Try going to <strong>f</strong> instead of c.</p>
                            <p><span class="text-green-400">Step 10-12 (f→e→c→d):</span> From f go to e, then c, then d.</p>
                            <p><span class="text-green-400">Finish:</span> From <strong>d</strong>, there is an edge back to <strong>a</strong>. All nodes visited. <strong>Circuit Complete.</strong></p>
                        </div>
                    </div>
                </div>
            `
        },

        /* =================================================================
           NEW: SUBSET SUM (Based on Slide 22)
           ================================================================= */
        'cop-subset': {
            title: 'Example: Subset Sum',
            html: `
                <div class="space-y-8">
                    <!-- PROBLEM DEFINITION -->
                    <div class="bg-white/5 p-4 rounded-xl border-l-4 border-green-500">
                        <h4 class="font-bold text-green-300">The Problem</h4>
                        <p class="text-sm opacity-90">
                            Given Set $S = \\{3, 5, 6, 7\\}$ and Target $d = 15$.
                            <br>Find a subset of numbers that sums exactly to 15.
                        </p>
                    </div>

                    <!-- TREE DIAGRAM (Slide 22 Recreation) -->
                    <div class="relative w-full h-[450px] bg-white rounded-lg p-2 overflow-hidden flex justify-center">
                        <svg width="700" height="450" viewBox="0 0 700 450">
                            <defs>
                                <marker id="arrow-sub" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                                </marker>
                            </defs>

                            <!-- Root -->
                            <circle cx="350" cy="30" r="18" fill="white" stroke="black" stroke-width="2"/>
                            <text x="350" y="35" text-anchor="middle" font-size="12" font-weight="bold">0</text>

                            <!-- Level 1: Item 3 -->
                            <!-- Left (With 3) -->
                            <line x1="335" y1="40" x2="175" y2="100" stroke="black" />
                            <text x="230" y="60" font-size="11" fill="black">with 3</text>
                            <circle cx="175" cy="100" r="18" fill="white" stroke="black" stroke-width="2"/>
                            <text x="175" y="105" text-anchor="middle" font-size="12" font-weight="bold">3</text>

                            <!-- Right (Without 3) -->
                            <line x1="365" y1="40" x2="525" y2="100" stroke="black" />
                            <text x="470" y="60" font-size="11" fill="black">w/o 3</text>
                            <circle cx="525" cy="100" r="18" fill="white" stroke="black" stroke-width="2"/>
                            <text x="525" y="105" text-anchor="middle" font-size="12" font-weight="bold">0</text>

                            <!-- Level 2: Item 5 -->
                            <!-- From 3 (Left Branch) -->
                            <line x1="165" y1="115" x2="100" y2="180" stroke="black" /> <!-- With 5 -->
                            <text x="100" y="140" font-size="10" fill="black">with 5</text>
                            <circle cx="100" cy="180" r="18" fill="white" stroke="black" stroke-width="2"/>
                            <text x="100" y="185" text-anchor="middle" font-size="12" font-weight="bold">8</text>

                            <line x1="185" y1="115" x2="250" y2="180" stroke="black" /> <!-- W/O 5 -->
                            <text x="230" y="140" font-size="10" fill="black">w/o 5</text>
                            <circle cx="250" cy="180" r="18" fill="white" stroke="black" stroke-width="2"/>
                            <text x="250" y="185" text-anchor="middle" font-size="12" font-weight="bold">3</text>
                            <!-- Dead End Annotation for Node 3 -->
                            <text x="250" y="215" text-anchor="middle" fill="red" font-size="10" font-weight="bold">X</text>
                            <text x="250" y="230" text-anchor="middle" fill="red" font-size="10">3 + 7 < 15</text>

                            <!-- From 0 (Right Branch) -->
                            <line x1="515" y1="115" x2="450" y2="180" stroke="black" /> <!-- With 5 -->
                            <circle cx="450" cy="180" r="18" fill="white" stroke="black" stroke-width="2"/>
                            <text x="450" y="185" text-anchor="middle" font-size="12" font-weight="bold">5</text>
                            <!-- Dead End Annotation for Node 5 -->
                            <text x="450" y="215" text-anchor="middle" fill="red" font-size="10" font-weight="bold">X</text>
                            <text x="450" y="230" text-anchor="middle" fill="red" font-size="10">5 + 7 < 15</text>

                            <line x1="535" y1="115" x2="600" y2="180" stroke="black" /> <!-- W/O 5 -->
                            <circle cx="600" cy="180" r="18" fill="white" stroke="black" stroke-width="2"/>
                            <text x="600" y="185" text-anchor="middle" font-size="12" font-weight="bold">0</text>
                            <!-- Dead End Annotation for Node 0 -->
                            <text x="600" y="215" text-anchor="middle" fill="red" font-size="10" font-weight="bold">X</text>
                            <text x="600" y="230" text-anchor="middle" fill="red" font-size="10">0 + 13 < 15</text>


                            <!-- Level 3: Item 6 -->
                            <!-- From 8 -->
                            <line x1="90" y1="195" x2="50" y2="260" stroke="black" /> <!-- With 6 -->
                            <text x="40" y="220" font-size="10" fill="black">with 6</text>
                            <circle cx="50" cy="260" r="18" fill="white" stroke="black" stroke-width="2"/>
                            <text x="50" y="265" text-anchor="middle" font-size="12" font-weight="bold">14</text>

                            <line x1="110" y1="195" x2="150" y2="260" stroke="black" /> <!-- W/O 6 -->
                            <text x="130" y="220" font-size="10" fill="black">w/o 6</text>
                            <circle cx="150" cy="260" r="18" fill="white" stroke="black" stroke-width="2"/>
                            <text x="150" y="265" text-anchor="middle" font-size="12" font-weight="bold">8</text>

                            <!-- Pruned Node from 14 (adding 7) -->
                            <line x1="50" y1="278" x2="30" y2="320" stroke="black" stroke-dasharray="2" />
                            <text x="30" y="335" text-anchor="middle" fill="red" font-size="10" font-weight="bold">X</text>
                            <text x="30" y="350" text-anchor="middle" fill="red" font-size="10">14+7 > 15</text>

                            <!-- Level 4: Item 7 (From 8) -->
                            <line x1="150" y1="278" x2="150" y2="330" stroke="black" /> <!-- With 7 -->
                            <text x="160" y="300" font-size="10" fill="black">with 7</text>
                            <circle cx="150" cy="330" r="20" fill="#4ade80" stroke="black" stroke-width="3" />
                            <text x="150" y="335" text-anchor="middle" font-size="12" font-weight="bold">15</text>
                            <text x="150" y="365" text-anchor="middle" fill="#16a34a" font-weight="bold" font-size="14">Solution Found</text>

                        </svg>
                    </div>

                    <!-- ALGORITHM EXPLANATION -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <!-- Logic Rules -->
                        <div class="bg-black/30 p-5 rounded-lg border border-white/10">
                            <h5 class="font-bold text-accent mb-3">1. The Algorithm Logic</h5>
                            <p class="text-sm opacity-80 mb-2">We perform a Depth-First Search (Backtracking). At each node, we decide for the next item in the list:</p>
                            <ul class="list-disc pl-5 text-sm space-y-1 mb-4">
                                <li><strong>Left Child:</strong> Include the item ("with").</li>
                                <li><strong>Right Child:</strong> Exclude the item ("w/o").</li>
                            </ul>
                            
                            <h5 class="font-bold text-red-400 mb-2">Pruning Rules (Bounding)</h5>
                            <p class="text-xs opacity-70 mb-2">Stop exploring a branch if:</p>
                            <ul class="list-disc pl-5 text-sm space-y-2 text-red-200">
                                <li><strong>Too Large:</strong> $Current Sum > Target$ (e.g., $14+7 > 15$).</li>
                                <li><strong>Too Small:</strong> $Current Sum + Remaining Sum < Target$.<br>
                                <span class="text-xs opacity-60">(Even if we take ALL remaining numbers, we won't reach 15).</span></li>
                            </ul>
                        </div>

                        <!-- Step-by-Step Trace -->
                        <div class="bg-black/30 p-5 rounded-lg border border-white/10">
                            <h5 class="font-bold text-green-400 mb-3">2. Tracing the Graph</h5>
                            <div class="space-y-2 text-sm font-mono opacity-90">
                                <p><strong>Path 1:</strong> 0 $\to$ 3 (with 3) $\to$ 8 (with 5).</p>
                                <p><strong>Node 8 Check:</strong> Add next item (6). $8+6=14$. Keep going.</p>
                                <p><strong>Node 14 Check:</strong> Add next item (7). $14+7=21$. <span class="text-red-400">21 > 15. PRUNE!</span></p>
                                <p><strong>Backtrack to 8:</strong> Try "w/o 6". Sum is still 8.</p>
                                <p><strong>Node 8 Check:</strong> Add next item (7). $8+7=15$.</p>
                                <p class="text-green-400 font-bold border-t border-white/20 pt-2">TARGET REACHED! Solution: {3, 5, 7}</p>
                                
                                <div class="mt-4 pt-2 border-t border-white/20">
                                    <p class="text-xs text-gray-400">Why was Node 3 (Right Branch) Pruned?</p>
                                    <p class="text-xs text-red-300">At Node 3 (w/o 5), remaining items are {6, 7} (Sum=13). But we already skipped 6? No, remaining sum logic: Max possible add is 7. $3+7 = 10 < 15$. Impossible to solve.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            `
        },
        'cop-bnb': {
            title: 'Branch-and-Bound (Optimization)',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. COMPARISON -->
                    <div class="bg-gradient-to-r from-blue-900/20 to-yellow-900/20 p-6 rounded-xl border border-white/10">
                        <h4 class="font-bold text-white text-lg mb-4">The Optimization Upgrade</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-black/30 p-4 rounded-lg">
                                <h5 class="text-blue-400 font-bold mb-2">Backtracking</h5>
                                <p class="text-sm opacity-80">
                                    "Is this path <strong>Valid</strong>?"
                                    <br><br>
                                    Cuts off a branch only if it breaks the rules (infeasible).
                                </p>
                            </div>
                            <div class="bg-black/30 p-4 rounded-lg border border-yellow-500/50">
                                <h5 class="text-yellow-400 font-bold mb-2">Branch-and-Bound</h5>
                                <p class="text-sm opacity-80">
                                    "Is this path <strong>Better</strong>?"
                                    <br><br>
                                    Cuts off a branch if it cannot possibly beat the <strong>Best Solution Found So Far</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                     <div class="bg-white/5 p-4 rounded-lg">
                        <h4 class="font-bold text-accent mb-2">The 3 Ingredients</h4>
                        <ol class="list-decimal pl-5 text-sm space-y-2 opacity-80">
                            <li><strong>Best Solution So Far:</strong> Keeps track of the best value found.</li>
                            <li><strong>Bounding Function:</strong> Calculates the <em>best possible</em> value a branch could hypothetically yield.</li>
                            <li><strong>Pruning:</strong> If <em>Bound</em> is worse than <em>Best Solution So Far</em>, kill the branch.</li>
                        </ol>
                    </div>

                    <!-- 2. VISUALIZATION -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
                        <h4 class="font-bold text-accent mb-4">Visualizing the "Cut"</h4>
                        
                        <div class="relative w-full h-[300px] bg-white rounded-lg p-2 overflow-hidden">
                            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
                                <defs>
                                    <marker id="arrow-bnb" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                                    </marker>
                                </defs>

                                <!-- SCOREBOARD -->
                                <g transform="translate(350, 20)">
                                    <rect x="0" y="0" width="120" height="50" fill="#facc15" stroke="black" stroke-width="2" rx="5"/>
                                    <text x="60" y="20" text-anchor="middle" font-size="10" font-weight="bold">BEST SOLUTION SO FAR</text>
                                    <text x="60" y="40" text-anchor="middle" font-size="16" font-weight="bold">$50</text>
                                </g>

                                <!-- ROOT -->
                                <circle cx="250" cy="40" r="20" fill="#333" stroke="black" />
                                <text x="250" y="45" text-anchor="middle" fill="white" font-size="10">Root</text>

                                <!-- LEFT BRANCH (Promising) -->
                                <line x1="235" y1="50" x2="150" y2="120" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow-bnb)"/>
                                <g transform="translate(150, 120)">
                                    <circle r="25" fill="white" stroke="#16a34a" stroke-width="3" />
                                    <text x="0" y="-5" text-anchor="middle" font-size="10" font-weight="bold">Node A</text>
                                    <text x="0" y="10" text-anchor="middle" font-size="9">Bound: $80</text>
                                </g>
                                <text x="120" y="170" text-anchor="middle" fill="#16a34a" font-size="12" font-weight="bold">Keep Going</text>
                                <text x="120" y="185" text-anchor="middle" fill="#555" font-size="10">(80 > 50)</text>

                                <!-- RIGHT BRANCH (Pruned) -->
                                <line x1="265" y1="50" x2="350" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow-bnb)"/>
                                <g transform="translate(350, 120)">
                                    <circle r="25" fill="#fee2e2" stroke="#ef4444" stroke-width="2" />
                                    <text x="0" y="-5" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">Node B</text>
                                    <text x="0" y="10" text-anchor="middle" font-size="9" fill="#991b1b">Bound: $40</text>
                                </g>
                                
                                <!-- Scissors/Cut -->
                                <g transform="translate(350, 160)">
                                    <text x="0" y="0" text-anchor="middle" font-size="30">✂️</text>
                                    <text x="0" y="20" text-anchor="middle" fill="#ef4444" font-weight="bold">PRUNE!</text>
                                    <text x="0" y="35" text-anchor="middle" fill="#555" font-size="10">Even if perfect,</text>
                                    <text x="0" y="45" text-anchor="middle" fill="#555" font-size="10">40 < 50</text>
                                </g>

                            </svg>
                        </div>
                    </div>

                    <!-- 3. THE LOGIC (SLIDE 27) -->
                    <div>
                        <h4 class="font-bold text-white mb-4">When do we stop exploring a node? (Pruning Rules)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            
                            <div class="bg-red-900/30 p-4 rounded border border-red-500/30">
                                <h5 class="font-bold text-red-400 mb-2">1. Bound is Worse</h5>
                                <p class="text-sm opacity-80">
                                    The <strong>Optimistic Guess</strong> (Bound) for this branch is worse than a solution we already found.
                                    <br><em>(Example: Bound is 40, but we already have a 50).</em>
                                </p>
                            </div>

                            <div class="bg-red-900/30 p-4 rounded border border-red-500/30">
                                <h5 class="font-bold text-red-400 mb-2">2. Infeasible</h5>
                                <p class="text-sm opacity-80">
                                    The partial solution breaks the problem constraints.
                                    <br><em>(Example: Knapsack is already overflowing).</em>
                                </p>
                            </div>

                            <div class="bg-green-900/30 p-4 rounded border border-green-500/30">
                                <h5 class="font-bold text-green-400 mb-2">3. Solution Found</h5>
                                <p class="text-sm opacity-80">
                                    No further choices can be made. This is a complete leaf.
                                    <br><strong>Action:</strong> Compare its value to the "Best So Far" and update if it's better.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            `
        },
       'cop-assignment': {
            title: 'Example: The Assignment Problem (Full Walkthrough)',
            html: `
                <div class="space-y-12">
                    
                    <!-- 1. PROBLEM SETUP -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl">
                            <h4 class="font-bold text-blue-300 text-lg mb-2">The Goal</h4>
                            <p class="text-sm opacity-90">
                                Assign 4 People (A, B, C, D) to 4 Jobs (1, 2, 3, 4).
                                <br><strong>Constraint:</strong> 1 Person per Job.
                                <br><strong>Objective:</strong> Minimize Total Cost.
                            </p>
                        </div>
                        
                        <!-- Mini Matrix -->
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                            <h5 class="text-xs text-gray-400 uppercase font-bold mb-2">Cost Matrix & Row Mins</h5>
                            <div class="grid grid-cols-5 text-sm font-mono gap-1">
                                <div></div><div class="text-accent">1</div><div class="text-accent">2</div><div class="text-accent">3</div><div class="text-accent">4</div>
                                <div class="font-bold">A</div><div class="bg-black/30">9</div><div class="bg-green-900/30 text-green-400 font-bold border border-green-500/50">2</div><div class="bg-black/30">7</div><div class="bg-black/30">8</div>
                                <div class="font-bold">B</div><div class="bg-black/30">6</div><div class="bg-black/30">4</div><div class="bg-green-900/30 text-green-400 font-bold border border-green-500/50">3</div><div class="bg-black/30">7</div>
                                <div class="font-bold">C</div><div class="bg-black/30">5</div><div class="bg-black/30">8</div><div class="bg-green-900/30 text-green-400 font-bold border border-green-500/50">1</div><div class="bg-black/30">8</div>
                                <div class="font-bold">D</div><div class="bg-black/30">7</div><div class="bg-black/30">6</div><div class="bg-black/30">9</div><div class="bg-green-900/30 text-green-400 font-bold border border-green-500/50">4</div>
                            </div>
                            <p class="text-xs mt-2 text-green-300">Initial Lower Bound = 2+3+1+4 = <strong>10</strong></p>
                        </div>
                    </div>

                    <!-- STEP 1: EXPAND ROOT (Person A) -->
                    <div class="border-t border-white/10 pt-6">
                        <h4 class="text-xl font-bold text-white mb-4"><span class="text-accent">Step 1:</span> Assign Person A</h4>
                        <p class="text-sm opacity-80 mb-4">We create 4 branches (A takes Job 1, 2, 3, or 4). We calculate the Lower Bound ($lb$) for each.</p>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <!-- Node 1 -->
                            <div class="bg-white/5 p-3 rounded opacity-50">
                                <div class="font-bold">A → 1</div>
                                <div class="text-xs mt-1">Cost: 9</div>
                                <div class="text-xs text-red-400 font-bold">lb = 17</div>
                            </div>
                            <!-- Node 2 (Best) -->
                            <div class="bg-green-900/20 p-3 rounded border-2 border-green-500 scale-105">
                                <div class="font-bold text-green-300">A → 2</div>
                                <div class="text-xs mt-1">Cost: 2</div>
                                <div class="text-xs text-green-400 font-bold">lb = 10</div>
                                <div class="text-[10px] mt-1 text-gray-300">Best! Expand this.</div>
                            </div>
                            <!-- Node 3 -->
                            <div class="bg-white/5 p-3 rounded opacity-50">
                                <div class="font-bold">A → 3</div>
                                <div class="text-xs mt-1">Cost: 7</div>
                                <div class="text-xs text-red-400 font-bold">lb = 20</div>
                            </div>
                            <!-- Node 4 -->
                            <div class="bg-white/5 p-3 rounded opacity-50">
                                <div class="font-bold">A → 4</div>
                                <div class="text-xs mt-1">Cost: 8</div>
                                <div class="text-xs text-red-400 font-bold">lb = 18</div>
                            </div>
                        </div>
                    </div>

                    <!-- STEP 2: EXPAND NODE A->2 (Person B) -->
                    <div class="border-t border-white/10 pt-6">
                        <h4 class="text-xl font-bold text-white mb-4"><span class="text-accent">Step 2:</span> Assign Person B</h4>
                        <p class="text-sm opacity-80 mb-4">
                            We are locked into <strong>A → 2</strong>. Now B needs a job. 
                            <br><span class="text-red-300">Constraint: Job 2 is taken!</span>
                        </p>

                        <div class="flex justify-center mb-6">
                             <div class="relative w-[500px] h-[200px] bg-white/5 rounded-lg border border-white/10">
                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 500 200">
                                    <defs>
                                        <marker id="arrow-st2" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#888" /></marker>
                                    </defs>
                                    
                                    <!-- Parent -->
                                    <g transform="translate(250, 30)">
                                        <rect x="-40" y="-15" width="80" height="30" fill="#333" stroke="#4ade80" stroke-width="2" rx="5"/>
                                        <text x="0" y="5" text-anchor="middle" fill="white" font-size="12">A → 2 (lb=10)</text>
                                    </g>

                                    <!-- Children -->
                                    <!-- B->1 -->
                                    <line x1="230" y1="45" x2="100" y2="100" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow-st2)"/>
                                    <g transform="translate(100, 130)">
                                        <rect x="-40" y="-20" width="80" height="40" fill="#333" stroke="#4ade80" stroke-width="2" rx="5"/>
                                        <text x="0" y="-5" text-anchor="middle" fill="white" font-weight="bold">B → 1</text>
                                        <text x="0" y="10" text-anchor="middle" fill="#4ade80" font-size="10">lb = 13 (Best)</text>
                                    </g>

                                    <!-- B->3 -->
                                    <line x1="250" y1="45" x2="250" y2="100" stroke="#888" marker-end="url(#arrow-st2)"/>
                                    <g transform="translate(250, 130)">
                                        <rect x="-40" y="-20" width="80" height="40" fill="#333" stroke="#888" rx="5"/>
                                        <text x="0" y="-5" text-anchor="middle" fill="white">B → 3</text>
                                        <text x="0" y="10" text-anchor="middle" fill="#f87171" font-size="10">lb = 14</text>
                                    </g>

                                    <!-- B->4 -->
                                    <line x1="270" y1="45" x2="400" y2="100" stroke="#888" marker-end="url(#arrow-st2)"/>
                                    <g transform="translate(400, 130)">
                                        <rect x="-40" y="-20" width="80" height="40" fill="#333" stroke="#888" rx="5"/>
                                        <text x="0" y="-5" text-anchor="middle" fill="white">B → 4</text>
                                        <text x="0" y="10" text-anchor="middle" fill="#f87171" font-size="10">lb = 17</text>
                                    </g>
                                </svg>
                             </div>
                        </div>

                        <div class="bg-black/30 p-4 rounded text-sm font-mono border-l-4 border-green-500">
                            <strong>Calculation for B → 1:</strong><br>
                            Cost so far: 2 (A->2) + 6 (B->1) = 8<br>
                            Rem Rows: C, D. <br>
                            Taken Cols: 2, 1.<br>
                            Min(C, excluding 1,2) = 1 (Job 3)<br>
                            Min(D, excluding 1,2) = 4 (Job 4)<br>
                            <span class="text-green-400">Total lb = 8 + 1 + 4 = 13.</span> (Better than 14 and 17).
                        </div>
                    </div>

                    <!-- STEP 3: EXPAND NODE B->1 (Person C) -->
                    <div class="border-t border-white/10 pt-6">
                        <h4 class="text-xl font-bold text-white mb-4"><span class="text-accent">Step 3:</span> Assign Person C</h4>
                        <p class="text-sm opacity-80 mb-4">
                            We are locked into <strong>A→2, B→1</strong>. Next is C.
                            <br><span class="text-red-300">Constraints: Jobs 1 and 2 taken.</span> Only Jobs 3 and 4 remain.
                        </p>

                        <div class="grid grid-cols-2 gap-4">
                            <!-- C->3 -->
                            <div class="bg-green-900/20 p-4 rounded border-2 border-green-500">
                                <h5 class="text-green-300 font-bold">Option 1: C → 3</h5>
                                <ul class="text-xs mt-2 space-y-1 opacity-80">
                                    <li>Cost So Far: 2 + 6 + 1 = 9</li>
                                    <li>Remaining: D must take Job 4.</li>
                                    <li>Cost(D->4) = 4.</li>
                                    <li class="font-bold text-white pt-1">Total Cost = 9 + 4 = 13</li>
                                </ul>
                            </div>

                            <!-- C->4 -->
                            <div class="bg-red-900/10 p-4 rounded border border-red-500/30 opacity-60">
                                <h5 class="text-red-300 font-bold">Option 2: C → 4</h5>
                                <ul class="text-xs mt-2 space-y-1 opacity-80">
                                    <li>Cost So Far: 2 + 6 + 8 = 16</li>
                                    <li>Remaining: D must take Job 3.</li>
                                    <li>Cost(D->3) = 9.</li>
                                    <li class="font-bold text-white pt-1">Total Cost = 16 + 9 = 25</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- CONCLUSION -->
                    <div class="bg-green-600/20 p-6 rounded-xl border border-green-500 flex flex-col items-center">
                        <h4 class="text-2xl font-bold text-green-400 mb-2">Solution Found!</h4>
                        <p class="text-white text-lg">Total Cost = 13</p>
                        <div class="flex gap-4 mt-4">
                            <span class="bg-black/40 px-3 py-1 rounded border border-green-500/50">A → 2</span>
                            <span class="bg-black/40 px-3 py-1 rounded border border-green-500/50">B → 1</span>
                            <span class="bg-black/40 px-3 py-1 rounded border border-green-500/50">C → 3</span>
                            <span class="bg-black/40 px-3 py-1 rounded border border-green-500/50">D → 4</span>
                        </div>
                        <p class="text-xs mt-4 opacity-70">
                            We found a complete solution with cost 13. All other open nodes (like B->3 with lb=14) have bounds <strong>higher</strong> than 13, so we can prune them all. We are done!
                        </p>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                            <h5 class="text-xs text-gray-400 uppercase font-bold mb-2">Cost Matrix & Row Mins</h5>
                            <div class="grid grid-cols-5 text-sm font-mono gap-1">
                                <div></div><div class="text-accent">1</div><div class="text-accent">2</div><div class="text-accent">3</div><div class="text-accent">4</div>
                                <div class="font-bold">A</div><div class="bg-black/30">9</div><div class="bg-green-900/30 text-green-400 font-bold border border-green-500/50">2</div><div class="bg-black/30">7</div><div class="bg-black/30">8</div>
                                <div class="font-bold">B</div><div class="bg-green-900/30 text-green-400 font-bold border border-green-500/50">6</div><div class="bg-black/30">4</div><div class="bg-black/30">3</div><div class="bg-black/30">7</div>
                                <div class="font-bold">C</div><div class="bg-black/30">5</div><div class="bg-black/30">8</div><div class="bg-green-900/30 text-green-400 font-bold border border-green-500/50">1</div><div class="bg-black/30">8</div>
                                <div class="font-bold">D</div><div class="bg-black/30">7</div><div class="bg-black/30">6</div><div class="bg-black/30">9</div><div class="bg-green-900/30 text-green-400 font-bold border border-green-500/50">4</div>
                            </div>
                            <p class="text-xs mt-2 text-green-300">Solution = 2+6+1+4 = <strong>13</strong></p>
                        </div>
                    </div>
                <!-- COMPLETE STATE-SPACE TREE VISUALIZATION -->
<div class="relative w-full h-[550px] bg-white rounded-lg overflow-hidden border border-gray-300 flex justify-center p-4">
    <svg width="800" height="530" viewBox="0 0 800 530">
        <defs>
            <marker id="arrow-tree-full" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
            </marker>
            <marker id="arrow-pointer" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="black" />
            </marker>
            <marker id="arrow-pointer-red" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
            </marker>
        </defs>

        <!-- === NODE 0 (ROOT) === -->
        <g transform="translate(400, 30)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">0</text>
            <rect x="-40" y="0" width="80" height="40" fill="white" stroke="black" stroke-width="1.5"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">Start</text>
            <line x1="-40" y1="22" x2="40" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12" font-weight="bold">lb = 10</text>
        </g>

        <!-- === LEVEL 1 BRANCHES === -->
        
        <!-- Edge 0 -> 1 -->
        <line x1="380" y1="70" x2="100" y2="120" stroke="black" stroke-width="1.5" />
        <!-- Node 1 (Pruned) -->
        <g transform="translate(100, 120)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">1</text>
            <rect x="-35" y="0" width="70" height="40" fill="white" stroke="black" stroke-width="1.5"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">a → 1</text>
            <line x1="-35" y1="22" x2="35" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12">lb = 17</text>
            <text x="0" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="red">X</text>
        </g>

        <!-- Edge 0 -> 2 -->
        <line x1="400" y1="70" x2="300" y2="120" stroke="black" stroke-width="2" />
        <!-- Node 2 (Expanded) -->
        <g transform="translate(300, 120)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">2</text>
            <rect x="-35" y="0" width="70" height="40" fill="#dcfce7" stroke="black" stroke-width="2"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">a → 2</text>
            <line x1="-35" y1="22" x2="35" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12" font-weight="bold">lb = 10</text>
        </g>

        <!-- Edge 0 -> 3 -->
        <line x1="420" y1="70" x2="500" y2="120" stroke="black" stroke-width="1.5" />
        <!-- Node 3 (Pruned) -->
        <g transform="translate(500, 120)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">3</text>
            <rect x="-35" y="0" width="70" height="40" fill="white" stroke="black" stroke-width="1.5"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">a → 3</text>
            <line x1="-35" y1="22" x2="35" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12">lb = 20</text>
            <text x="0" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="red">X</text>
        </g>

        <!-- Edge 0 -> 4 -->
        <line x1="440" y1="70" x2="700" y2="120" stroke="black" stroke-width="1.5" />
        <!-- Node 4 (Pruned) -->
        <g transform="translate(700, 120)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">4</text>
            <rect x="-35" y="0" width="70" height="40" fill="white" stroke="black" stroke-width="1.5"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">a → 4</text>
            <line x1="-35" y1="22" x2="35" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12">lb = 18</text>
            <text x="0" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="red">X</text>
        </g>


        <!-- === LEVEL 2 BRANCHES (From Node 2) === -->

        <!-- Edge 2 -> 5 -->
        <line x1="285" y1="160" x2="200" y2="220" stroke="black" stroke-width="2" />
        <!-- Node 5 (Expanded) -->
        <g transform="translate(200, 220)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">5</text>
            <rect x="-35" y="0" width="70" height="40" fill="#dcfce7" stroke="black" stroke-width="2"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">b → 1</text>
            <line x1="-35" y1="22" x2="35" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12" font-weight="bold">lb = 13</text>
        </g>

        <!-- Edge 2 -> 6 -->
        <line x1="300" y1="160" x2="320" y2="220" stroke="black" stroke-width="1.5" />
        <!-- Node 6 -->
        <g transform="translate(320, 220)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">6</text>
            <rect x="-35" y="0" width="70" height="40" fill="white" stroke="black" stroke-width="1.5"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">b → 3</text>
            <line x1="-35" y1="22" x2="35" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12">lb = 14</text>
            <text x="0" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="red">X</text>
        </g>

        <!-- Edge 2 -> 7 -->
        <line x1="315" y1="160" x2="440" y2="220" stroke="black" stroke-width="1.5" />
        <!-- Node 7 -->
        <g transform="translate(440, 220)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">7</text>
            <rect x="-35" y="0" width="70" height="40" fill="white" stroke="black" stroke-width="1.5"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">b → 4</text>
            <line x1="-35" y1="22" x2="35" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12">lb = 17</text>
            <text x="0" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="red">X</text>
        </g>


        <!-- === LEVEL 3 BRANCHES (From Node 5) === -->

        <!-- Edge 5 -> 8 (SOLUTION) -->
        <line x1="185" y1="260" x2="130" y2="330" stroke="black" stroke-width="2" />
        <!-- Node 8 -->
        <g transform="translate(130, 330)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">8</text>
            <rect x="-35" y="0" width="70" height="40" fill="white" stroke="black" stroke-width="1.5"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">c → 3</text>
            <line x1="-35" y1="22" x2="35" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12">d → 4</text>
            
            <!-- Result Box -->
            <rect x="-35" y="40" width="70" height="25" rx="5" fill="none" stroke="black" stroke-width="2"/>
            <text x="0" y="57" text-anchor="middle" font-size="12" font-weight="bold">cost = 13</text>
        </g>

        <!-- Solution Label (Red Arrow Pointing LEFT to cost) -->
        <text x="250" y="380" text-anchor="middle" fill="#dc2626" font-size="16" font-weight="bold">solution</text>
        <!-- Arrow: From Text (210, 375) to Box Right Edge (165, 385) -->
        <path d="M 210 375 Q 190 375 175 380" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-pointer-red)" />


        <!-- Edge 5 -> 9 (INFERIOR) -->
        <line x1="215" y1="260" x2="270" y2="330" stroke="black" stroke-width="1.5" />
        <!-- Node 9 -->
        <g transform="translate(270, 330)">
            <text x="0" y="-5" text-anchor="middle" font-size="12" font-weight="bold">9</text>
            <rect x="-35" y="0" width="70" height="40" fill="white" stroke="black" stroke-width="1.5"/>
            <text x="0" y="18" text-anchor="middle" font-size="12">c → 4</text>
            <line x1="-35" y1="22" x2="35" y2="22" stroke="black" stroke-width="1"/>
            <text x="0" y="36" text-anchor="middle" font-size="12">d → 3</text>

             <!-- Result Box -->
             <rect x="-35" y="40" width="70" height="25" rx="5" fill="none" stroke="black" stroke-width="1.5"/>
             <text x="0" y="57" text-anchor="middle" font-size="12">cost = 25</text>
        </g>

        <!-- Inferior Label (Arrow Pointing UP-LEFT to box bottom) -->
        <text x="360" y="440" text-anchor="middle" fill="black" font-size="14">inferior solution</text>
        <!-- Arrow: From Text (300, 430) to Box Bottom (280, 400) -->
        <path d="M 300 430 Q 290 420 280 405" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-pointer)" />

    </svg>
</div>

                </div>
            `
        },
        'cop-knapsack': {
            title: 'Example: The Knapsack Problem',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">Maximize value of items in a knapsack with capacity $W$.</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white/5 p-4 rounded">
                            <h5 class="font-bold text-accent mb-2">Branching</h5>
                            <p class="text-sm">For each item, we have 2 choices:</p>
                            <ul class="list-disc pl-5 text-sm">
                                <li>Take item.</li>
                                <li>Leave item.</li>
                            </ul>
                        </div>
                        <div class="bg-white/5 p-4 rounded">
                            <h5 class="font-bold text-accent mb-2">Bounding</h5>
                            <p class="text-sm">
                                Upper Bound = Current Value + (Remaining Capacity × Best Ratio of remaining items).
                            </p>
                        </div>
                    </div>
                    
                    <p class="text-xs text-center opacity-60">We prioritize exploring nodes with the <strong>Highest Upper Bound</strong> (Best-First Search).</p>
                </div>
            `
        }
    }
};