// coping.js
export const copingModule = {
    id: 'cop',
    title: 'Coping with Limitations',
    subtopics: [
        { id: 'cop-strategies', title: 'Strategies for Hard Problems' },
        { id: 'cop-backtracking', title: 'Backtracking' },
        { id: 'cop-nqueens', title: 'Ex: N-Queens Problem' },
        { id: 'cop-hamiltonian', title: 'Ex: Hamiltonian Circuit' },
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
            title: 'Backtracking: The Concept',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">Build candidates one step at a time. If a partial candidate <em>cannot</em> possibly lead to a valid solution, <strong>abandon (prune)</strong> it immediately and backtrack.</p>

                    <div class="bg-white/5 p-6 rounded-xl relative flex flex-col items-center">
                        <h5 class="font-bold text-accent mb-4">State Space Tree Visualization</h5>
                        
                        <!-- Simple Tree SVG -->
                        <div class="relative w-[300px] h-[200px]">
                            <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                <defs>
                                    <marker id="arrow-bt" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                        <polygon points="0 0, 8 3, 0 6" fill="#888" />
                                    </marker>
                                </defs>
                                
                                <!-- Root -->
                                <circle cx="150" cy="20" r="15" fill="#333" stroke="white" />
                                <text x="150" y="25" text-anchor="middle" fill="white" font-size="10">Start</text>

                                <!-- Level 1 -->
                                <line x1="150" y1="35" x2="80" y2="80" stroke="#888" stroke-width="1.5" />
                                <line x1="150" y1="35" x2="220" y2="80" stroke="#888" stroke-width="1.5" />
                                
                                <circle cx="80" cy="80" r="15" fill="#333" stroke="white" />
                                <circle cx="220" cy="80" r="15" fill="#333" stroke="white" />

                                <!-- Level 2 (Left - Dead End) -->
                                <line x1="80" y1="95" x2="50" y2="140" stroke="#f87171" stroke-width="2" />
                                <circle cx="50" cy="140" r="15" fill="#333" stroke="#f87171" stroke-width="2" />
                                <text x="50" y="170" text-anchor="middle" fill="#f87171" font-size="10">Dead End</text>
                                <text x="20" y="115" fill="#f87171" font-size="14">❌</text>

                                <!-- Level 2 (Right - Success) -->
                                <line x1="220" y1="95" x2="250" y2="140" stroke="#4ade80" stroke-width="2" />
                                <circle cx="250" cy="140" r="15" fill="#333" stroke="#4ade80" stroke-width="2" />
                                <text x="250" y="170" text-anchor="middle" fill="#4ade80" font-size="10">Solution!</text>
                            </svg>
                        </div>
                    </div>

                    <div class="bg-black/30 p-4 rounded border border-white/10 text-sm">
                        <strong>Key Idea:</strong> We avoid generating the entire tree (which is exponential). We only explore promising branches.
                    </div>
                </div>
            `
        },
        'cop-nqueens': {
            title: 'Example: The N-Queens Problem',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">Place $n$ queens on an $n \\times n$ board so no two queens threaten each other (no shared row, column, or diagonal).</p>

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
                    <p class="text-xs text-center opacity-60">Visualizing a valid 4-Queen Solution</p>
                </div>
            `
        },
        'cop-hamiltonian': {
            title: 'Example: Hamiltonian Circuit',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">Find a circuit in a graph that visits <strong>every node exactly once</strong> and returns to the start.</p>

                    <div class="bg-black/30 p-4 rounded border border-white/10">
                        <h5 class="font-bold text-accent mb-2">Backtracking Logic</h5>
                        <ol class="list-decimal pl-5 text-sm space-y-2">
                            <li>Start at node <strong>a</strong>.</li>
                            <li>Move to an adjacent node (e.g., <strong>b</strong>).</li>
                            <li>Continue moving to unvisited nodes.</li>
                            <li>If you get stuck (no unvisited neighbors) and haven't visited everyone: <strong>Backtrack</strong>.</li>
                            <li>If you visit everyone and can return to <strong>a</strong>: <strong>Success!</strong></li>
                        </ol>
                    </div>
                </div>
            `
        },
        'cop-bnb': {
            title: 'Branch-and-Bound (Optimization)',
            html: `
                <div class="space-y-8">
                    <div class="bg-yellow-900/10 border-l-4 border-yellow-500 p-4 rounded">
                        <h4 class="font-bold text-yellow-400">Backtracking vs. Branch-and-Bound</h4>
                        <ul class="list-disc pl-5 text-sm opacity-80 mt-2 space-y-2">
                            <li><strong>Backtracking:</strong> Cuts off a branch if it leads to an <em>invalid</em> solution.</li>
                            <li><strong>Branch-and-Bound:</strong> Cuts off a branch if it leads to a <em>sub-optimal</em> solution (worse than the best one found so far).</li>
                        </ul>
                    </div>

                    <div class="bg-white/5 p-4 rounded-lg">
                        <h4 class="font-bold text-accent mb-2">The 3 Ingredients</h4>
                        <ol class="list-decimal pl-5 text-sm space-y-2 opacity-80">
                            <li><strong>Best Solution So Far:</strong> Keeps track of the best value found.</li>
                            <li><strong>Bounding Function:</strong> Calculates the <em>best possible</em> value a branch could hypothetically yield.</li>
                            <li><strong>Pruning:</strong> If <em>Bound</em> is worse than <em>Best Solution So Far</em>, kill the branch.</li>
                        </ol>
                    </div>
                </div>
            `
        },
        'cop-assignment': {
            title: 'Example: The Assignment Problem',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">Assign $n$ people to $n$ jobs to minimize total cost. (1 person per job).</p>

                    <!-- Cost Matrix -->
                    <div class="overflow-x-auto">
                        <table class="w-full text-center text-sm font-mono border-collapse">
                            <caption class="mb-2 text-accent font-bold">Cost Matrix</caption>
                            <thead>
                                <tr class="bg-white/10 text-white">
                                    <th class="p-2 border border-white/20"></th>
                                    <th class="p-2 border border-white/20">Job 1</th>
                                    <th class="p-2 border border-white/20">Job 2</th>
                                    <th class="p-2 border border-white/20">Job 3</th>
                                    <th class="p-2 border border-white/20">Job 4</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border border-white/20 font-bold">A</td>
                                    <td class="p-2 border border-white/20">9</td>
                                    <td class="p-2 border border-white/20 text-green-400 font-bold border-2 border-green-500">2</td>
                                    <td class="p-2 border border-white/20">7</td>
                                    <td class="p-2 border border-white/20">8</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-white/20 font-bold">B</td>
                                    <td class="p-2 border border-white/20">6</td>
                                    <td class="p-2 border border-white/20">4</td>
                                    <td class="p-2 border border-white/20 text-green-400 font-bold border-2 border-green-500">3</td>
                                    <td class="p-2 border border-white/20">7</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-white/20 font-bold">C</td>
                                    <td class="p-2 border border-white/20">5</td>
                                    <td class="p-2 border border-white/20">8</td>
                                    <td class="p-2 border border-white/20 text-green-400 font-bold border-2 border-green-500">1</td>
                                    <td class="p-2 border border-white/20">8</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-white/20 font-bold">D</td>
                                    <td class="p-2 border border-white/20">7</td>
                                    <td class="p-2 border border-white/20">6</td>
                                    <td class="p-2 border border-white/20">9</td>
                                    <td class="p-2 border border-white/20 text-green-400 font-bold border-2 border-green-500">4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-black/30 p-4 rounded border border-white/10">
                        <h5 class="font-bold text-accent mb-2">Lower Bound Calculation</h5>
                        <p class="text-sm">Sum of the smallest element in each row (Best case scenario).</p>
                        <p class="font-mono text-lg mt-2 text-center text-green-400">LB = 2 + 3 + 1 + 4 = 10</p>
                        <p class="text-xs opacity-60 text-center mt-1">If a partial solution already costs more than 10 (plus estimates), we might prune it.</p>
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