// turing.js
export const turingModule = {
    id: 'tm',
    title: 'Turing Machines',
    subtopics: [
        { id: 'tm-intro', title: 'Introduction & History' },
        { id: 'tm-def', title: 'Formal Definition (Visuals)' },
        { id: 'tm-schematic', title: 'Schematic & Operation' },
        { id: 'tm-diagrams', title: 'Transition Diagrams' },
        { id: 'tm-regex', title: 'Regular Expressions' },
        { id: 'tm-ex-ab', title: 'Example: a*b* Machine' },
        { id: 'tm-incrementer', title: 'Example: Binary Incrementer' },
        { id: 'tm-macros', title: 'Building Blocks & Combining' },
        { id: 'tm-combine-ex', title: 'Ex: Complex Combiner' },
        { id: 'tm-multitape', title: 'Multi-Tape Machines' },
        { id: 'tm-ntm', title: 'Nondeterministic TMs' }
    ],
    content: {
        'tm-intro': {
            title: 'Introduction to Turing Machines',
            html: `
                <div class="space-y-6">
                    <div class="p-4 bg-white/5 rounded-lg border-l-4 border-accent">
                        <h3 class="text-xl font-bold mb-2">What are they?</h3>
                        <p class="opacity-80">An idealized type of machine designed by <strong>Alan Turing in 1936</strong> with the aim of capturing the essential elements of algorithms.</p>
                        <p class="opacity-80 mt-2">It represents the minimum requirements for maximum algorithmic power, similar to a human solving a problem with unlimited pen and paper.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-black/20 rounded-lg">
                            <h4 class="font-bold text-accent mb-2">Church-Turing Thesis</h4>
                            <p class="text-sm opacity-70">"Any algorithm or computation can be represented by a Turing Machine."</p>
                            <p class="text-xs text-green-400 mt-1">• Accepted by most computer scientists.</p>
                        </div>
                        <div class="p-4 bg-black/20 rounded-lg">
                            <h4 class="font-bold text-accent mb-2">Capability</h4>
                            <p class="text-sm opacity-70">Turing Machines can do everything a computer can do.</p>
                            <p class="text-xs text-red-400 mt-1">However, there are problems Turing Machines cannot solve!</p>
                        </div>
                    </div>
                </div>
            `
        },
        'tm-def': {
            title: 'A Turing Machine Comprises:',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">A formal Turing Machine $M$ is defined as a tuple. Here are the visual components:</p>

                    <div class="grid grid-cols-1 gap-4">
                        
                        <!-- 1. The Tape -->
                        <div class="bg-white/5 p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 border border-white/10">
                            <div class="flex-1">
                                <h4 class="text-accent font-bold">1. The Tape</h4>
                                <p class="text-sm opacity-70">Infinite memory divided into discrete cells. It extends infinitely to the right.</p>
                            </div>
                            <div class="bg-black/40 p-2 rounded w-full md:w-1/2 flex justify-center overflow-hidden">
                                <div class="flex border-t border-b border-white/50 font-mono text-lg">
                                    <div class="w-10 h-10 border-r border-white/30 flex items-center justify-center">a</div>
                                    <div class="w-10 h-10 border-r border-white/30 flex items-center justify-center">b</div>
                                    <div class="w-10 h-10 border-r border-white/30 flex items-center justify-center">a</div>
                                    <div class="w-10 h-10 border-r border-white/30 flex items-center justify-center text-gray-500">◊</div>
                                    <div class="w-10 h-10 border-r border-white/30 flex items-center justify-center text-gray-500">◊</div>
                                    <div class="w-10 h-10 flex items-center justify-center opacity-50">...</div>
                                </div>
                            </div>
                        </div>

                        <!-- 2. The Tape Head -->
                        <div class="bg-white/5 p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 border border-white/10">
                            <div class="flex-1">
                                <h4 class="text-accent font-bold">2. The Tape Head</h4>
                                <p class="text-sm opacity-70">Reads and writes symbols on the current cell. Can move <strong>Left (L)</strong> or <strong>Right (R)</strong>.</p>
                            </div>
                            <div class="bg-black/40 p-2 rounded w-full md:w-1/2 flex justify-center pt-6">
                                <div class="relative">
                                    <!-- Cell -->
                                    <div class="w-12 h-12 border border-white flex items-center justify-center font-mono text-xl bg-white/10">b</div>
                                    <!-- Arrow -->
                                    <div class="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                        <span class="text-xs uppercase font-bold text-accent">Head</span>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 24l-12-12h24z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 3. Alphabets -->
                        <div class="bg-white/5 p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 border border-white/10">
                            <div class="flex-1">
                                <h4 class="text-accent font-bold">3. Alphabets (Σ and Γ)</h4>
                                <ul class="text-sm opacity-70 list-disc pl-4">
                                    <li><strong>Input Alphabet (Σ):</strong> Symbols allowed on input (e.g., {0, 1}).</li>
                                    <li><strong>Tape Alphabet (Γ):</strong> All symbols allowed, including Blank (◊).</li>
                                </ul>
                            </div>
                            <div class="bg-black/40 p-4 rounded w-full md:w-1/2 flex flex-wrap gap-2 justify-center">
                                <span class="px-2 py-1 bg-blue-500/20 border border-blue-500 rounded text-xs">0</span>
                                <span class="px-2 py-1 bg-blue-500/20 border border-blue-500 rounded text-xs">1</span>
                                <span class="px-2 py-1 bg-gray-500/20 border border-gray-500 rounded text-xs text-gray-400">◊ (Blank)</span>
                                <span class="px-2 py-1 bg-green-500/20 border border-green-500 rounded text-xs">X</span>
                            </div>
                        </div>

                        <!-- 4. States -->
                        <div class="bg-white/5 p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 border border-white/10">
                            <div class="flex-1">
                                <h4 class="text-accent font-bold">4. Set of States (S)</h4>
                                <p class="text-sm opacity-70">The "brain" of the machine. Includes a Start State and Halt States.</p>
                            </div>
                            <div class="bg-black/40 p-2 rounded w-full md:w-1/2 flex justify-around items-center h-20">
                                <!-- Normal State -->
                                <div class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm">q0</div>
                                <span class="text-xs opacity-50">→</span>
                                <!-- Halt State -->
                                <div class="w-10 h-10 rounded-full border-4 double-border border-accent flex items-center justify-center text-sm shadow-[0_0_10px_currentColor] text-accent">qH</div>
                            </div>
                        </div>

                        <!-- 5. State Table -->
                        <div class="bg-white/5 p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 border border-white/10">
                            <div class="flex-1">
                                <h4 class="text-accent font-bold">5. State Table (Transition Function δ)</h4>
                                <p class="text-sm opacity-70">The rules: "If I am in State X and read Symbol Y, write Symbol Z, Move L/R, and go to State W."</p>
                            </div>
                            <div class="bg-black/40 p-2 rounded w-full md:w-1/2 text-xs font-mono">
                                <table class="w-full text-center">
                                    <tr class="border-b border-white/20"><th class="p-1">State</th><th class="p-1">Read</th><th class="p-1">→</th><th class="p-1">Action</th><th class="p-1">Next</th></tr>
                                    <tr><td>q0</td><td>a</td><td>→</td><td>b, R</td><td>q1</td></tr>
                                </table>
                            </div>
                        </div>

                    </div>
                    
                    <div class="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-700 text-center">
                        <h4 class="font-bold mb-2 text-white">Definition Tuple</h4>
                        <code class="text-accent text-lg">M = ( S, Σ, Γ, δ, s0, {H} )</code>
                    </div>
                </div>
            `
        },
        'tm-schematic': {
            title: 'Schematic & State Tables',
            html: `
                <div class="space-y-8">
                    <!-- TAPE VISUALIZATION -->
                    <div>
                        <h4 class="font-bold mb-4 text-accent">1. The Tape Schematic</h4>
                        <div class="flex flex-col items-center">
                            <div class="border border-white p-2 mb-2 w-24 text-center bg-gray-800">Control</div>
                            <div class="h-8 w-0.5 bg-white mb-1 relative">
                                <div class="absolute -bottom-1 -left-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-white border-r-[6px] border-r-transparent"></div>
                            </div>
                            <div class="flex font-mono text-xl border-t border-b border-l border-white bg-white/5">
                                <div class="w-10 h-10 border-r border-white flex items-center justify-center">a</div>
                                <div class="w-10 h-10 border-r border-white flex items-center justify-center">b</div>
                                <div class="w-10 h-10 border-r border-white flex items-center justify-center">a</div>
                                <div class="w-10 h-10 border-r border-white flex items-center justify-center">b</div>
                                <div class="w-10 h-10 border-r border-white flex items-center justify-center text-gray-500">◊</div>
                                <div class="w-10 h-10 border-r border-white flex items-center justify-center text-gray-500">◊</div>
                                <div class="w-10 h-10 border-r-0 flex items-center justify-center relative">
                                    <span class="absolute left-1">...</span>
                                    <svg class="h-full w-4 absolute -right-4 text-white overflow-visible" viewBox="0 0 10 40">
                                        <path d="M0,0 L10,5 L0,10 L10,15 L0,20 L10,25 L0,30 L10,35 L0,40" fill="none" stroke="currentColor" stroke-width="1"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- STATE TABLE VISUALIZATION -->
                    <div>
                        <h4 class="font-bold mb-4 text-accent">2. State Table (Transition Function δ)</h4>
                        <p class="text-sm mb-2 opacity-70">Example M = ({p, q}, {x,y}, {x,y,◊}, δ, p, {q})</p>
                        
                        <table class="w-full text-center border-collapse">
                            <thead>
                                <tr class="bg-white/10 text-accent">
                                    <th class="p-2 border border-white/20">Current State</th>
                                    <th class="p-2 border border-white/20">Read Symbol</th>
                                    <th class="p-2 border border-white/20">Action (Write/Move)</th>
                                    <th class="p-2 border border-white/20">Next State</th>
                                </tr>
                            </thead>
                            <tbody class="font-mono">
                                <tr>
                                    <td class="p-2 border border-white/20">p</td>
                                    <td class="p-2 border border-white/20">◊</td>
                                    <td class="p-2 border border-white/20">R</td>
                                    <td class="p-2 border border-white/20">p</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-white/20">p</td>
                                    <td class="p-2 border border-white/20">x</td>
                                    <td class="p-2 border border-white/20">x</td>
                                    <td class="p-2 border border-white/20">q</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-white/20">p</td>
                                    <td class="p-2 border border-white/20">y</td>
                                    <td class="p-2 border border-white/20">y</td>
                                    <td class="p-2 border border-white/20">q</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="mt-2 text-sm font-mono opacity-80">
                            δ(p, ◊) = (p, R)<br>
                            δ(p, x) = (q, x)<br>
                            δ(p, y) = (q, y)
                        </div>
                    </div>
                </div>
            `
        },
        'tm-diagrams': {
            title: 'Transition Diagrams & Execution',
            html: `
                <div class="space-y-8">
                    <!-- LEGEND -->
                    <div class="bg-black/30 p-4 rounded border border-white/10 flex flex-wrap gap-4 text-xs md:text-sm items-center justify-center">
                        <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white"></div> <span>State</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border-4 double-border border-accent"></div> <span>Halt State</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span>⟶</span> <span>Transition</span>
                        </div>
                        <div class="px-2 py-1 bg-white/10 rounded">Label <strong>s/A</strong>: Read 's', Action 'A'</div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        
                        <!-- LEFT: DIAGRAM -->
                        <div class="bg-white/5 p-6 rounded-xl flex flex-col items-center">
                            <h5 class="text-accent font-bold mb-4">Diagram</h5>
                            <div class="relative w-[250px] h-[150px]">
                                <!-- SVG Arrows -->
                                <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                    <defs>
                                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                        </marker>
                                    </defs>
                                    <!-- Loop on p -->
                                    <path d="M 60 75 C 30 20, 90 20, 80 50" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                    <text x="50" y="30" fill="white" font-family="monospace" font-size="12">◊/R</text>

                                    <!-- Top arc p to q -->
                                    <path d="M 90 70 Q 150 30 210 70" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                    <text x="145" y="45" fill="white" font-family="monospace" font-size="12">x/x</text>

                                    <!-- Bottom arc p to q -->
                                    <path d="M 90 80 Q 150 120 210 80" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                    <text x="145" y="115" fill="white" font-family="monospace" font-size="12">y/y</text>
                                </svg>
                                
                                <!-- Nodes -->
                                <div class="absolute left-[50px] top-[60px] w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black z-10">p</div>
                                <div class="absolute right-[50px] top-[60px] w-10 h-10 rounded-full border-4 double-border border-accent flex items-center justify-center bg-black z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]">q</div>
                            </div>
                        </div>

                        <!-- RIGHT: STATE TABLE -->
                        <div class="bg-white/5 p-6 rounded-xl">
                            <h5 class="text-accent font-bold mb-4">Corresponding Table</h5>
                            <table class="w-full text-center text-sm font-mono border-collapse">
                                <thead>
                                    <tr class="border-b border-white/20 text-xs text-gray-400">
                                        <th class="p-1">Current</th>
                                        <th class="p-1">Read</th>
                                        <th class="p-1">Action</th>
                                        <th class="p-1">Next</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-1">p</td>
                                        <td class="p-1">◊</td>
                                        <td class="p-1 text-yellow-400">R</td>
                                        <td class="p-1">p</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1">p</td>
                                        <td class="p-1">x</td>
                                        <td class="p-1 text-green-400">x</td>
                                        <td class="p-1 font-bold">q</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1">p</td>
                                        <td class="p-1">y</td>
                                        <td class="p-1 text-green-400">y</td>
                                        <td class="p-1 font-bold">q</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- SIMULATION WALKTHROUGH -->
                    <div class="bg-blue-900/20 p-4 rounded border-l-4 border-blue-500">
                        <h4 class="font-bold text-blue-300 mb-2">Simulation: Start to End</h4>
                        <p class="text-sm opacity-80 mb-2">Input Tape: <code>◊ ◊ x y ...</code></p>
                        <ol class="list-decimal pl-5 text-sm space-y-2 font-mono">
                            <li><strong>Start at p:</strong> Read '◊'. Table says: Move Right, Stay in p. <span class="text-gray-500">(Looping)</span></li>
                            <li><strong>Still in p:</strong> Read next '◊'. Move Right, Stay in p. <span class="text-gray-500">(Looping)</span></li>
                            <li><strong>Still in p:</strong> Read 'x'. Table says: Write 'x' (no change), Go to q.</li>
                            <li><strong>Now in q:</strong> q is a Halt State (Double Circle). <strong>STOP.</strong></li>
                        </ol>
                    </div>
                </div>
            `
        },
        'tm-regex': {
            title: 'Regular Expressions (Regex)',
            html: `
                <div class="space-y-8">
                    <!-- Intro -->
                    <div>
                        <p class="opacity-80">Regular expressions denote languages using a compact syntax. Consider the input alphabet Σ = {a, b}.</p>
                    </div>

                    <!-- Operations -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white/5 p-4 rounded-lg">
                            <h4 class="font-bold text-accent mb-3">Core Operations</h4>
                            <ul class="space-y-3 text-sm">
                                <li><strong>Alternation (|):</strong> <code class="bg-black/30 px-1 rounded">a|b</code> <br> Means "a" or "b".</li>
                                <li><strong>Concatenation:</strong> <code class="bg-black/30 px-1 rounded">ab</code> <br> Means "a" followed by "b".</li>
                                <li><strong>Kleene Closure (*):</strong> <code class="bg-black/30 px-1 rounded">a*</code> <br> Means zero or more "a"s (includes empty string ε).</li>
                                <li><strong>Epsilon (ε):</strong> Represents the empty string.</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white/5 p-4 rounded-lg">
                            <h4 class="font-bold text-accent mb-3">Abbreviations</h4>
                            <ul class="space-y-3 text-sm">
                                <li><code class="bg-black/30 px-1 rounded">[abc]</code> = a | b | c</li>
                                <li><code class="bg-black/30 px-1 rounded">M?</code> = (M | ε) (Optional)</li>
                                <li><code class="bg-black/30 px-1 rounded">M+</code> = M • M* (One or more)</li>
                                <li><code class="bg-black/30 px-1 rounded">.</code> = Any single character (except newline)</li>
                            </ul>
                            <p class="text-xs mt-2 text-gray-400">Note: Abbreviations do not add power, just convenience.</p>
                        </div>
                    </div>

                    <!-- Precedence -->
                    <div>
                        <h4 class="font-bold text-accent mb-2">Operator Precedence</h4>
                        <table class="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr class="bg-white/10">
                                    <th class="p-2 border border-white/20">Operation</th>
                                    <th class="p-2 border border-white/20">Type</th>
                                    <th class="p-2 border border-white/20">Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border border-white/20 font-mono">r*, r+</td>
                                    <td class="p-2 border border-white/20">Closures</td>
                                    <td class="p-2 border border-white/20 text-green-400">Highest</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-white/20 font-mono">r s</td>
                                    <td class="p-2 border border-white/20">Concatenation</td>
                                    <td class="p-2 border border-white/20 text-yellow-400">Medium</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-white/20 font-mono">r | s</td>
                                    <td class="p-2 border border-white/20">Alternation</td>
                                    <td class="p-2 border border-white/20 text-red-400">Lowest</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Examples -->
                    <div class="bg-black/30 p-5 rounded-lg border border-white/10">
                        <h4 class="font-bold mb-3">Quick Quiz: What matches these?</h4>
                        <ul class="space-y-4 text-sm font-mono">
                            <li class="flex flex-col sm:flex-row sm:items-center gap-2">
                                <span class="text-accent w-24">(a|b)(a|b)</span> 
                                <span class="text-gray-400">→ aa, ab, ba, bb (Length 2)</span>
                            </li>
                            <li class="flex flex-col sm:flex-row sm:items-center gap-2">
                                <span class="text-accent w-24">(a|b)*</span> 
                                <span class="text-gray-400">→ Any string of a's and b's (any length)</span>
                            </li>
                            <li class="flex flex-col sm:flex-row sm:items-center gap-2">
                                <span class="text-accent w-24">(ab)*</span> 
                                <span class="text-gray-400">→ ε, ab, abab, ababab...</span>
                            </li>
                            <li class="flex flex-col sm:flex-row sm:items-center gap-2">
                                <span class="text-accent w-24">a|a*b</span> 
                                <span class="text-gray-400">→ Just "a", OR any number of "a"s followed by one "b"</span>
                            </li>
                        </ul>
                    </div>
                </div>
            `
        },
        'tm-ex-ab': {
            title: 'Example: a*b* Machine',
            html: `
                <div class="space-y-8">
                    <p class="opacity-90">This Turing Machine accepts the language denoted by the regular expression <strong>a*b*</strong> (any number of 'a's followed by any number of 'b's). 
                    <br><span class="text-sm opacity-60">Alphabet = {◊, a, b}. Missing transitions imply a crash (reject).</span></p>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        
                        <!-- LEFT: DIAGRAM -->
                        <div class="bg-white/5 p-6 rounded-xl flex flex-col items-center border border-white/10">
                            <h5 class="text-accent font-bold mb-4">Transition Diagram</h5>
                            <div class="relative w-[300px] h-[200px]">
                                 <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                    <defs>
                                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                        </marker>
                                    </defs>
                                    
                                    <!-- q0 loop (a/R) -->
                                    <path d="M 60 70 C 30 15, 90 15, 80 45" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                    <text x="50" y="25" fill="white" font-family="monospace" font-size="14">a/R</text>

                                    <!-- q0 to q1 (b/R) -->
                                    <path d="M 90 75 L 150 75" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                    <text x="110" y="65" fill="white" font-family="monospace" font-size="14">b/R</text>

                                    <!-- q1 loop (b/R) -->
                                    <path d="M 170 70 C 140 15, 200 15, 190 45" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                    <text x="160" y="25" fill="white" font-family="monospace" font-size="14">b/R</text>

                                    <!-- q1 to q2 (◊/R) -->
                                    <path d="M 200 75 L 270 75" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                    <text x="225" y="65" fill="white" font-family="monospace" font-size="14">◊/R</text>

                                    <!-- q0 to q2 (◊/R) - Curved Bottom -->
                                    <path d="M 70 95 Q 185 180 290 95" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                    <text x="180" y="140" fill="white" font-family="monospace" font-size="14">◊/R</text>

                                </svg>

                                <!-- Nodes -->
                                <div class="absolute left-[50px] top-[60px] w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black z-10">q0</div>
                                <div class="absolute left-[160px] top-[60px] w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black z-10">q1</div>
                                <div class="absolute left-[280px] top-[60px] w-10 h-10 rounded-full border-4 double-border border-accent flex items-center justify-center bg-black z-10 shadow-[0_0_15px_rgba(255,255,255,0.4)]">q2</div>
                            </div>
                        </div>

                        <!-- RIGHT: STATE TABLE -->
                        <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h5 class="text-accent font-bold mb-4">State Table</h5>
                            <table class="w-full text-center text-sm font-mono border-collapse">
                                <thead>
                                    <tr class="border-b border-white/20 text-xs text-gray-400">
                                        <th class="p-2">Current</th>
                                        <th class="p-2">Read</th>
                                        <th class="p-2">Action</th>
                                        <th class="p-2">Next</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-white/5">
                                        <td class="p-2">q0</td>
                                        <td class="p-2 text-blue-300">a</td>
                                        <td class="p-2">R</td>
                                        <td class="p-2">q0</td>
                                    </tr>
                                    <tr class="hover:bg-white/5">
                                        <td class="p-2">q0</td>
                                        <td class="p-2 text-blue-300">b</td>
                                        <td class="p-2">R</td>
                                        <td class="p-2">q1</td>
                                    </tr>
                                    <tr class="hover:bg-white/5">
                                        <td class="p-2">q0</td>
                                        <td class="p-2 text-gray-500">◊</td>
                                        <td class="p-2">R</td>
                                        <td class="p-2 font-bold text-accent">q2</td>
                                    </tr>
                                    <tr class="border-t border-white/10 hover:bg-white/5">
                                        <td class="p-2">q1</td>
                                        <td class="p-2 text-blue-300">b</td>
                                        <td class="p-2">R</td>
                                        <td class="p-2">q1</td>
                                    </tr>
                                    <tr class="hover:bg-white/5">
                                        <td class="p-2">q1</td>
                                        <td class="p-2 text-gray-500">◊</td>
                                        <td class="p-2">R</td>
                                        <td class="p-2 font-bold text-accent">q2</td>
                                    </tr>
                                    <tr class="hover:bg-red-900/20 border-t border-white/10">
                                        <td class="p-2 opacity-50">q1</td>
                                        <td class="p-2 opacity-50">a</td>
                                        <td class="p-2 text-red-400" colspan="2">Crash (Reject)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <ul class="list-disc pl-5 text-sm space-y-2 opacity-80 bg-black/20 p-4 rounded-lg">
                        <li><strong>Start (q0):</strong> Reads 'a's. If it sees a 'b', moves to q1. If it sees blank (◊), accepts immediately.</li>
                        <li><strong>State q1:</strong> Reads remaining 'b's. If it sees blank (◊), accepts.</li>
                        <li><strong>Rejection:</strong> If we see an 'a' while in q1 (meaning 'a' after 'b'), no rule exists → <strong>Crash</strong>.</li>
                    </ul>
                </div>
            `
        },
        'tm-incrementer': {
            title: 'Example: Binary Incrementer',
            html: `
                <div class="space-y-8">
                    <!-- Intro -->
                    <div class="bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400">
                        <h4 class="font-bold text-blue-300">Goal</h4>
                        <p class="text-sm opacity-90">Increment a binary number stored in <strong>reverse order</strong> on the tape.</p>
                        <div class="mt-3 flex gap-4 text-xs font-mono">
                            <div class="bg-black/40 p-2 rounded">
                                <span class="text-gray-400">Input (3):</span> 1 1 ◊ ...<br>
                                <span class="text-gray-400">Logic:</span> 1+1=0 (carry)
                            </div>
                            <div class="bg-black/40 p-2 rounded">
                                <span class="text-gray-400">Output (4):</span> 0 0 1 ◊ ...
                            </div>
                        </div>
                    </div>

                    <!-- Grid Layout: Table vs Diagram -->
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        
                        <!-- LEFT: STATE TABLE -->
                        <div>
                            <h4 class="font-bold text-accent mb-4">State Table</h4>
                            <div class="overflow-x-auto border border-white/10 rounded-xl">
                                <table class="w-full text-center border-collapse text-sm">
                                    <thead>
                                        <tr class="bg-white/10 text-white font-bold text-xs uppercase">
                                            <th class="p-2 border-b border-white/20">Current</th>
                                            <th class="p-2 border-b border-white/20">Read</th>
                                            <th class="p-2 border-b border-white/20">Write/Move</th>
                                            <th class="p-2 border-b border-white/20">Next</th>
                                        </tr>
                                    </thead>
                                    <tbody class="font-mono">
                                        <!-- Start -->
                                        <tr class="hover:bg-white/5"><td class="p-1">Initial</td><td>◊</td><td>R</td><td>Start</td></tr>
                                        
                                        <!-- Start Logic -->
                                        <tr class="hover:bg-white/5 border-t border-white/10"><td class="p-1">Start</td><td>0</td><td>1</td><td class="text-green-400">GotZero</td></tr>
                                        <tr class="hover:bg-white/5"><td class="p-1">Start</td><td>1</td><td>0</td><td class="text-yellow-400">GotOne</td></tr>
                                        <tr class="hover:bg-white/5"><td class="p-1">Start</td><td>◊</td><td>L</td><td class="text-red-400">Halt</td></tr>

                                        <!-- Carrying Logic -->
                                        <tr class="hover:bg-white/5 border-t border-white/10"><td class="p-1">GotOne</td><td>0</td><td>R</td><td>Carry</td></tr>
                                        
                                        <tr class="hover:bg-white/5 border-t border-white/10"><td class="p-1">Carry</td><td>1</td><td>0</td><td class="text-yellow-400">GotOne</td></tr>
                                        <tr class="hover:bg-white/5"><td class="p-1">Carry</td><td>0</td><td>1</td><td class="text-green-400">GotZero</td></tr>
                                        <tr class="hover:bg-white/5"><td class="p-1">Carry</td><td>◊</td><td>1</td><td class="text-blue-400">Finish</td></tr>

                                        <!-- Cleanup -->
                                        <tr class="hover:bg-white/5 border-t border-white/10"><td class="p-1">GotZero</td><td>1</td><td>L</td><td class="text-blue-400">Finish</td></tr>
                                        <tr class="hover:bg-white/5"><td class="p-1">Finish</td><td>Any</td><td>L</td><td>Finish</td></tr>
                                        <tr class="hover:bg-white/5"><td class="p-1">Finish</td><td>◊</td><td>◊</td><td class="text-red-400">Halt</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- RIGHT: TRANSITION DIAGRAM -->
                        <div class="flex flex-col h-full">
                            <h4 class="font-bold text-accent mb-4">Transition Diagram</h4>
                            <div class="flex-1 bg-white/5 rounded-xl border border-white/10 relative min-h-[300px]">
                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 500 350">
                                    <defs>
                                        <marker id="arrow-inc" markerWidth="10" markerHeight="7" refX="14" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                        </marker>
                                    </defs>

                                    <!-- NODES -->
                                    <!-- Initial -->
                                    <g transform="translate(50, 175)">
                                        <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="8">Init</text>
                                    </g>

                                    <!-- Start -->
                                    <g transform="translate(130, 175)">
                                        <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="8">Start</text>
                                    </g>

                                    <!-- GotZero (Top) -->
                                    <g transform="translate(230, 80)">
                                        <circle r="20" fill="#333" stroke="#4ade80" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="8">Got0</text>
                                    </g>

                                    <!-- GotOne (Bottom) -->
                                    <g transform="translate(230, 270)">
                                        <circle r="20" fill="#333" stroke="#facc15" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="8">Got1</text>
                                    </g>

                                    <!-- Carry (Far Right Bottom) -->
                                    <g transform="translate(350, 270)">
                                        <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="8">Carry</text>
                                    </g>

                                    <!-- Finish (Far Right Top) -->
                                    <g transform="translate(350, 80)">
                                        <circle r="20" fill="#333" stroke="#60a5fa" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="8">Finish</text>
                                    </g>

                                    <!-- Halt (Center) -->
                                    <g transform="translate(240, 175)">
                                        <circle r="18" fill="#333" stroke="#f87171" stroke-width="2"/>
                                        <circle r="22" fill="none" stroke="#f87171" stroke-width="2"/>
                                        <text y="4" text-anchor="middle" fill="white" font-size="8">Halt</text>
                                    </g>

                                    <!-- EDGES -->
                                    
                                    <!-- Init -> Start -->
                                    <path d="M 70 175 L 110 175" stroke="white" marker-end="url(#arrow-inc)"/>
                                    <text x="90" y="165" text-anchor="middle" fill="white" font-size="10">◊/R</text>

                                    <!-- Start -> GotZero (0->1) -->
                                    <path d="M 145 160 L 215 95" stroke="white" marker-end="url(#arrow-inc)"/>
                                    <text x="160" y="120" fill="#4ade80" font-size="10">0/1</text>

                                    <!-- Start -> GotOne (1->0) -->
                                    <path d="M 145 190 L 215 255" stroke="white" marker-end="url(#arrow-inc)"/>
                                    <text x="160" y="230" fill="#facc15" font-size="10">1/0</text>

                                    <!-- GotOne -> Carry -->
                                    <path d="M 250 270 L 330 270" stroke="white" marker-end="url(#arrow-inc)"/>
                                    <text x="290" y="260" text-anchor="middle" fill="white" font-size="10">0/R</text>

                                    <!-- Carry -> GotOne (Loop back: Read 1, Write 0) -->
                                    <path d="M 350 290 Q 290 340 240 285" fill="none" stroke="white" marker-end="url(#arrow-inc)"/>
                                    <text x="300" y="320" text-anchor="middle" fill="#facc15" font-size="10">1/0</text>

                                    <!-- Carry -> GotZero (Read 0, Write 1) -->
                                    <path d="M 350 250 L 250 100" stroke="white" marker-end="url(#arrow-inc)" stroke-dasharray="4"/>
                                    <text x="310" y="180" fill="#4ade80" font-size="10">0/1</text>

                                    <!-- Carry -> Finish (Read ◊, Write 1) -->
                                    <path d="M 350 250 L 350 100" stroke="white" marker-end="url(#arrow-inc)"/>
                                    <text x="360" y="175" fill="#60a5fa" font-size="10">◊/1</text>

                                    <!-- GotZero -> Finish -->
                                    <path d="M 250 80 L 330 80" stroke="white" marker-end="url(#arrow-inc)"/>
                                    <text x="290" y="70" text-anchor="middle" fill="white" font-size="10">1/L</text>

                                    <!-- Finish -> Loop (Rewind) -->
                                    <path d="M 365 70 C 390 40 330 40 345 65" fill="none" stroke="white" marker-end="url(#arrow-inc)"/>
                                    <text x="360" y="45" fill="white" font-size="10">Any/L</text>

                                    <!-- Finish -> Halt -->
                                    <path d="M 335 90 L 260 160" stroke="white" marker-end="url(#arrow-inc)"/>
                                    <text x="280" y="120" fill="#f87171" font-size="10">◊/◊</text>

                                </svg>
                            </div>
                            <p class="text-xs text-center mt-2 opacity-60">
                                <strong>Flow:</strong> Read LSB → If 1, make 0 and carry (Loop lower right). If 0, make 1 and finish (Go top right).
                            </p>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-black/30 rounded border border-white/10">
                            <h5 class="font-bold mb-2 text-accent">Logic Rule 1</h5>
                            <p class="text-sm">Flip 1s to 0s and move Right (Carry over) until you find a 0.</p>
                        </div>
                        <div class="p-4 bg-black/30 rounded border border-white/10">
                             <h5 class="font-bold mb-2 text-accent">Logic Rule 2</h5>
                            <p class="text-sm">Once a 0 is found, flip it to 1. The addition is complete.</p>
                        </div>
                    </div>
                </div>
            `
        },
        'tm-macros': {
            title: 'Building Blocks & Combining Machines',
            html: `
                <div class="space-y-8">
                    <!-- BASIC MACHINES -->
                    <div>
                        <h4 class="font-bold text-accent mb-4">1. Basic Turing Machines (Macros)</h4>
                        <p class="mb-4 opacity-80">We can define small, reusable machines to perform common tasks:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-white/5 p-3 rounded border-l-2 border-green-400">
                                <span class="font-mono font-bold text-lg">Rx</span>
                                <p class="text-sm opacity-70">Move Right until symbol <strong>x</strong> is found.</p>
                            </div>
                            <div class="bg-white/5 p-3 rounded border-l-2 border-green-400">
                                <span class="font-mono font-bold text-lg">Lx</span>
                                <p class="text-sm opacity-70">Move Left until symbol <strong>x</strong> is found.</p>
                            </div>
                            <div class="bg-white/5 p-3 rounded border-l-2 border-yellow-400">
                                <span class="font-mono font-bold text-lg">R~x</span>
                                <p class="text-sm opacity-70">Move Right until <strong>NOT x</strong> is found.</p>
                            </div>
                            <div class="bg-white/5 p-3 rounded border-l-2 border-purple-400">
                                <span class="font-mono font-bold text-lg">SR / SL</span>
                                <p class="text-sm opacity-70">Shift the entire string Right or Left.</p>
                            </div>
                        </div>
                    </div>

                    <!-- COMBINING ALGORITHM -->
                    <div>
                        <h4 class="font-bold text-accent mb-4">2. The "Complex" Machine Combiner</h4>
                        <p class="mb-2 opacity-80">Algorithm to merge machines (M1, M2... Mn) into a larger machine:</p>
                        <ul class="list-decimal pl-5 space-y-2 text-sm opacity-90 bg-black/30 p-4 rounded-lg">
                            <li>Remove <strong>initial state</strong> designation from M2...Mn.</li>
                            <li>Remove <strong>halt designation</strong> from M1...Mn-1.</li>
                            <li>For each old halt state ($S_h$) in a machine:
                                <ul class="list-disc pl-5 mt-1 text-gray-400">
                                    <li>If logic dictates stopping: Draw arc $x/x$ to the final Halt state.</li>
                                    <li>If logic dictates transferring to $M_i$: Draw arc $x/z$ from $S_h$ to the start of $M_i$.</li>
                                </ul>
                            </li>
                        </ul>
                        <div class="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded text-sm">
                            <strong>Advantages:</strong> Flexibility (combine in any order) and Efficiency (bypass initial states).
                        </div>
                    </div>
                </div>
            `
        },
       'tm-combine-ex': {
            title: 'Example: Combining Machines (Slides 8-12)',
            html: `
                <div class="space-y-8">
                    <!-- Problem Statement -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl">
                        <h4 class="font-bold text-blue-300 text-lg mb-2">The Problem</h4>
                        <p class="opacity-90">
                            Find the <strong>second occurrence</strong> of the non-blank symbol to the right of the initial head position.
                        </p>
                        <p class="text-sm mt-2 font-mono">Alphabet Σ = {x, y, ◊}</p>
                    </div>
          <!-- RECREATION OF SLIDE 8 -->
                    <div class="bg-white p-6 rounded-xl relative overflow-hidden">
                        <!-- Header -->
                        <h4 class="text-black font-bold text-xl mb-6">Components:</h4>

                        <!-- The Diagram Container -->
                        <div class="grid grid-cols-[3fr_2fr] gap-4 items-center">
                            
                            <!-- LEFT COLUMN: THE SVG DIAGRAMS -->
                            <div class="relative h-[450px]">
                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 350 400">
                                    <defs>
                                        <marker id="arrow-blk" markerWidth="10" markerHeight="7" refX="26" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                                        </marker>
                                        <marker id="arrow-loop" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                                        </marker>
                                    </defs>

                                    <!-- ROW 1: s -> t -->
                                    <!-- Start Arrow -->
                                    <line x1="0" y1="50" x2="30" y2="50" stroke="black" stroke-width="2" marker-end="url(#arrow-loop)" />
                                    
                                    <!-- Node s -->
                                    <ellipse cx="60" cy="50" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                                    <text x="60" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black">s</text>

                                    <!-- Node t (Halt - Pinkish Glow) -->
                                    <ellipse cx="250" cy="50" rx="30" ry="20" fill="#fce7f3" stroke="#be185d" stroke-width="4"/>
                                    <ellipse cx="250" cy="50" rx="30" ry="20" fill="none" stroke="black" stroke-width="1"/>
                                    <text x="250" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-weight="bold">t</text>

                                    <!-- Transitions s->t -->
                                    <!-- Top (x/R) -->
                                    <path d="M 60 30 Q 155 -10 250 30" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-blk)"/>
                                    <text x="155" y="15" text-anchor="middle" font-size="16" fill="black" font-style="italic">x/R</text>
                                    <!-- Middle (y/R) -->
                                    <line x1="90" y1="50" x2="220" y2="50" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop)"/>
                                    <text x="155" y="45" text-anchor="middle" font-size="16" fill="black" font-style="italic">y/R</text>
                                    <!-- Bottom (◊/R) -->
                                    <path d="M 60 70 Q 155 110 250 70" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-blk)"/>
                                    <text x="155" y="95" text-anchor="middle" font-size="16" fill="black" font-style="italic">◊/R</text>


                                    <!-- ROW 2: l -> m -> n -->
                                    <g transform="translate(0, 150)">
                                        <!-- Start Arrow -->
                                        <line x1="0" y1="50" x2="30" y2="50" stroke="black" stroke-width="2" marker-end="url(#arrow-loop)" />

                                        <!-- Node l -->
                                        <ellipse cx="60" cy="50" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                                        <text x="60" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">l</text>

                                        <!-- Node m -->
                                        <ellipse cx="200" cy="50" rx="25" ry="20" fill="white" stroke="black" stroke-width="2"/>
                                        <text x="200" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">m</text>

                                        <!-- Node n (Halt) -->
                                        <ellipse cx="320" cy="50" rx="25" ry="18" fill="#fce7f3" stroke="#be185d" stroke-width="4"/>
                                        <ellipse cx="320" cy="50" rx="25" ry="18" fill="none" stroke="black" stroke-width="1"/>
                                        <text x="320" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-weight="bold">n</text>

                                        <!-- Transitions l->m -->
                                        <path d="M 60 30 Q 130 0 200 30" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-blk)"/>
                                        <text x="130" y="15" text-anchor="middle" font-size="16" fill="black" font-style="italic">x/R</text>
                                        <line x1="90" y1="50" x2="175" y2="50" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop)"/>
                                        <text x="130" y="45" text-anchor="middle" font-size="16" fill="black" font-style="italic">y/R</text>
                                        <path d="M 60 70 Q 130 100 200 70" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-blk)"/>
                                        <text x="130" y="95" text-anchor="middle" font-size="16" fill="black" font-style="italic">◊/R</text>

                                        <!-- Loops on m -->
                                        <!-- Top Loop (◊/R) -->
                                        <path d="M 200 30 C 180 -10, 220 -10, 200 30" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop)"/>
                                        <text x="200" y="5" text-anchor="middle" font-size="14" fill="black">◊/R</text>
                                        <!-- Bottom Loop (y/R) -->
                                        <path d="M 200 70 C 180 110, 220 110, 200 70" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop)"/>
                                        <text x="200" y="105" text-anchor="middle" font-size="14" fill="black">y/R</text>

                                        <!-- Transition m->n -->
                                        <line x1="225" y1="50" x2="295" y2="50" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop)"/>
                                        <text x="260" y="45" text-anchor="middle" font-size="16" fill="black">x/x</text>
                                    </g>


                                    <!-- ROW 3: p -> q -> r -->
                                    <g transform="translate(0, 300)">
                                        <!-- Start Arrow -->
                                        <line x1="0" y1="50" x2="30" y2="50" stroke="black" stroke-width="2" marker-end="url(#arrow-loop)" />

                                        <!-- Node p -->
                                        <ellipse cx="60" cy="50" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                                        <text x="60" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">p</text>

                                        <!-- Node q -->
                                        <ellipse cx="200" cy="50" rx="25" ry="20" fill="white" stroke="black" stroke-width="2"/>
                                        <text x="200" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">q</text>

                                        <!-- Node r (Halt) -->
                                        <ellipse cx="320" cy="50" rx="25" ry="18" fill="#fce7f3" stroke="#be185d" stroke-width="4"/>
                                        <ellipse cx="320" cy="50" rx="25" ry="18" fill="none" stroke="black" stroke-width="1"/>
                                        <text x="320" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-weight="bold">r</text>

                                        <!-- Transitions p->q -->
                                        <path d="M 60 30 Q 130 0 200 30" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-blk)"/>
                                        <text x="130" y="15" text-anchor="middle" font-size="16" fill="black" font-style="italic">x/R</text>
                                        <line x1="90" y1="50" x2="175" y2="50" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop)"/>
                                        <text x="130" y="45" text-anchor="middle" font-size="16" fill="black" font-style="italic">y/R</text>
                                        <path d="M 60 70 Q 130 100 200 70" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-blk)"/>
                                        <text x="130" y="95" text-anchor="middle" font-size="16" fill="black" font-style="italic">◊/R</text>

                                        <!-- Loops on q -->
                                        <!-- Top Loop (◊/R) -->
                                        <path d="M 200 30 C 180 -10, 220 -10, 200 30" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop)"/>
                                        <text x="200" y="5" text-anchor="middle" font-size="14" fill="black">◊/R</text>
                                        <!-- Bottom Loop (x/R) -->
                                        <path d="M 200 70 C 180 110, 220 110, 200 70" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop)"/>
                                        <text x="200" y="105" text-anchor="middle" font-size="14" fill="black">x/R</text>

                                        <!-- Transition q->r -->
                                        <line x1="225" y1="50" x2="295" y2="50" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop)"/>
                                        <text x="260" y="45" text-anchor="middle" font-size="16" fill="black">y/y</text>
                                    </g>

                                </svg>
                            </div>

                            <!-- RIGHT COLUMN: TEXT DESCRIPTIONS -->
                            <div class="flex flex-col justify-around h-[450px] text-black">
                                <div class="h-[100px] flex items-center">
                                    <p class="text-lg leading-tight">
                                        Moves the tape head one cell to the right
                                    </p>
                                </div>
                                <div class="h-[150px] flex items-center">
                                    <p class="text-lg leading-tight">
                                        Finds the first <strong>x</strong> to the right of the current cell
                                    </p>
                                </div>
                                <div class="h-[150px] flex items-center">
                                    <p class="text-lg leading-tight">
                                        Finds the first <strong>y</strong> to the right of the current cell
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <!-- RECREATION OF SLIDE 10 -->
<div class="bg-white/5 p-6 rounded-xl border border-white/10 mt-8">
    <h4 class="font-bold text-accent mb-4">The Expanded Components</h4>
    <p class="text-sm opacity-80 mb-6">Before wiring them together, we define the specific logic for each potential path.</p>

    <!-- SVG DIAGRAM -->
    <div class="relative w-full h-[450px] bg-white rounded-lg flex justify-center p-4">
        <svg width="600" height="400" viewBox="0 0 600 400">
            <defs>
                <marker id="arrow-blk-10" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
                <marker id="arrow-loop-10" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
            </defs>

            <!-- ==========================
                 TOP ROW: l -> m -> n
                 (Logic: Move Right, then Find X)
                 ========================== -->
            <g transform="translate(100, 50)">
                <!-- Node l -->
                <ellipse cx="50" cy="50" rx="35" ry="20" fill="white" stroke="black" stroke-width="1.5"/>
                <text x="50" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">l</text>

                <!-- Node m -->
                <ellipse cx="250" cy="50" rx="35" ry="20" fill="white" stroke="black" stroke-width="1.5"/>
                <text x="250" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">m</text>

                <!-- Node n -->
                <ellipse cx="400" cy="50" rx="35" ry="20" fill="white" stroke="black" stroke-width="1.5"/>
                <text x="400" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">n</text>

                <!-- Transitions l -> m -->
                <path d="M 70 35 Q 160 5 225 35" fill="none" stroke="black" marker-end="url(#arrow-blk-10)"/>
                <text x="150" y="25" text-anchor="middle" font-size="16" font-style="italic">x/R</text>
                
                <line x1="85" y1="50" x2="215" y2="50" stroke="black" marker-end="url(#arrow-loop-10)"/>
                <text x="150" y="45" text-anchor="middle" font-size="16" font-style="italic">y/R</text>

                <path d="M 70 65 Q 160 95 225 65" fill="none" stroke="black" marker-end="url(#arrow-blk-10)"/>
                <text x="150" y="85" text-anchor="middle" font-size="16" font-style="italic">◊/R</text>

                <!-- Loops on m -->
                <path d="M 250 30 C 230 -10, 270 -10, 250 30" fill="none" stroke="black" marker-end="url(#arrow-loop-10)"/>
                <text x="250" y="5" text-anchor="middle" font-size="14">◊/R</text>

                <path d="M 250 70 C 230 110, 270 110, 250 70" fill="none" stroke="black" marker-end="url(#arrow-loop-10)"/>
                <text x="250" y="100" text-anchor="middle" font-size="14">y/R</text>

                <!-- Transition m -> n -->
                <line x1="285" y1="50" x2="365" y2="50" stroke="black" marker-end="url(#arrow-loop-10)"/>
                <text x="325" y="45" text-anchor="middle" font-size="16" font-style="italic">x/x</text>
            </g>


            <!-- ==========================
                 MIDDLE ROW: s -> t
                 (Logic: Move Right)
                 ========================== -->
            <g transform="translate(0, 200)">
                <!-- Start Arrow -->
                <line x1="10" y1="50" x2="40" y2="50" stroke="black" stroke-width="2" marker-end="url(#arrow-loop-10)"/>

                <!-- Node s -->
                <ellipse cx="80" cy="50" rx="35" ry="20" fill="white" stroke="black" stroke-width="1.5"/>
                <text x="80" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black">s</text>

                <!-- Node t -->
                <ellipse cx="280" cy="50" rx="35" ry="20" fill="white" stroke="black" stroke-width="1.5"/>
                <text x="280" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black">t</text>

                <!-- Transitions s -> t -->
                <path d="M 105 35 Q 190 5 255 35" fill="none" stroke="black" marker-end="url(#arrow-blk-10)"/>
                <text x="180" y="25" text-anchor="middle" font-size="16" font-style="italic">x/R</text>
                
                <line x1="115" y1="50" x2="245" y2="50" stroke="black" marker-end="url(#arrow-loop-10)"/>
                <text x="180" y="45" text-anchor="middle" font-size="16" font-style="italic">y/R</text>

                <path d="M 105 65 Q 190 95 255 65" fill="none" stroke="black" marker-end="url(#arrow-blk-10)"/>
                <text x="180" y="85" text-anchor="middle" font-size="16" font-style="italic">◊/R</text>
            </g>


            <!-- ==========================
                 BOTTOM ROW: p -> q -> r
                 (Logic: Move Right, then Find Y)
                 ========================== -->
            <g transform="translate(100, 300)">
                <!-- Node p -->
                <ellipse cx="50" cy="50" rx="35" ry="20" fill="white" stroke="black" stroke-width="1.5"/>
                <text x="50" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">p</text>

                <!-- Node q -->
                <ellipse cx="250" cy="50" rx="35" ry="20" fill="white" stroke="black" stroke-width="1.5"/>
                <text x="250" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">q</text>

                <!-- Node r -->
                <ellipse cx="400" cy="50" rx="35" ry="20" fill="white" stroke="black" stroke-width="1.5"/>
                <text x="400" y="55" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">r</text>

                <!-- Transitions p -> q -->
                <path d="M 70 35 Q 160 5 225 35" fill="none" stroke="black" marker-end="url(#arrow-blk-10)"/>
                <text x="150" y="25" text-anchor="middle" font-size="16" font-style="italic">x/R</text>
                
                <line x1="85" y1="50" x2="215" y2="50" stroke="black" marker-end="url(#arrow-loop-10)"/>
                <text x="150" y="45" text-anchor="middle" font-size="16" font-style="italic">y/R</text>

                <path d="M 70 65 Q 160 95 225 65" fill="none" stroke="black" marker-end="url(#arrow-blk-10)"/>
                <text x="150" y="85" text-anchor="middle" font-size="16" font-style="italic">◊/R</text>

                <!-- Loops on q -->
                <path d="M 250 30 C 230 -10, 270 -10, 250 30" fill="none" stroke="black" marker-end="url(#arrow-loop-10)"/>
                <text x="250" y="5" text-anchor="middle" font-size="14">◊/R</text>

                <path d="M 250 70 C 230 110, 270 110, 250 70" fill="none" stroke="black" marker-end="url(#arrow-loop-10)"/>
                <text x="250" y="100" text-anchor="middle" font-size="14">x/R</text>

                <!-- Transition q -> r -->
                <line x1="285" y1="50" x2="365" y2="50" stroke="black" marker-end="url(#arrow-loop-10)"/>
                <text x="325" y="45" text-anchor="middle" font-size="16" font-style="italic">y/y</text>
            </g>

        </svg>
    </div>

    <!-- EXPLANATION -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div class="bg-blue-900/30 p-4 rounded border border-blue-500/30">
            <h5 class="font-bold text-blue-300 mb-2">Why are they positioned this way?</h5>
            <ul class="list-disc pl-5 text-sm space-y-1 opacity-80">
                <li><strong>Middle Row ($s$):</strong> Represents the "Start" state. It hasn't made a decision yet.</li>
                <li><strong>Top Row ($l \to m$):</strong> Represents the logic branch for "The first symbol was an <strong>x</strong>". It moves right ($l$) then searches exclusively for another <strong>x</strong> ($m$).</li>
                <li><strong>Bottom Row ($p \to q$):</strong> Represents the logic branch for "The first symbol was a <strong>y</strong>". It moves right ($p$) then searches exclusively for another <strong>y</strong> ($q$).</li>
            </ul>
        </div>

        <div class="bg-purple-900/30 p-4 rounded border border-purple-500/30">
            <h5 class="font-bold text-purple-300 mb-2">How do we determine which to join?</h5>
            <p class="text-sm opacity-80 mb-2">
                We use the <strong>Complex Combiner</strong> method. We look at the transitions leaving the Start State ($s$).
            </p>
            <ul class="list-disc pl-5 text-sm space-y-1 opacity-80">
                <li>If $s$ reads <strong>x</strong>, we want to activate the "Find X" machine. So we wire the $x/R$ transition from $s$ to the start of the Top Row ($l$).</li>
                <li>If $s$ reads <strong>y</strong>, we want to activate the "Find Y" machine. So we wire the $y/R$ transition from $s$ to the start of the Bottom Row ($p$).</li>
            </ul>
        </div>
    </div>
</div>
<!-- RECREATION OF FINAL SOLUTION (SLIDE 11/12) -->
<div class="bg-white/5 p-6 rounded-xl border border-white/10 mt-8">
    <h4 class="font-bold text-accent mb-4">Final Solution: The Wired Machine</h4>
    <p class="text-sm opacity-80 mb-6">Here is the fully assembled machine. Notice how the Start State ($s$) acts as a router, sending the tape head to specific sub-machines based on the first symbol read.</p>

    <!-- SVG DIAGRAM -->
    <div class="relative w-full h-[500px] bg-white rounded-lg flex justify-center p-4">
        <svg width="700" height="450" viewBox="0 0 700 450">
            <defs>
                <marker id="arrow-fin" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
                <marker id="arrow-loop-fin" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
            </defs>

            <!-- START NODE (s) -->
            <g transform="translate(80, 225)">
                <line x1="-40" y1="0" x2="-30" y2="0" stroke="black" stroke-width="2" marker-end="url(#arrow-loop-fin)"/>
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black">s</text>
            </g>

            <!-- MIDDLE NODE (t) -->
            <g transform="translate(250, 225)">
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black">t</text>
            </g>

            <!-- FINAL HALT (Double Circle) -->
            <g transform="translate(620, 225)">
                <ellipse cx="0" cy="0" rx="30" ry="22" fill="#fce7f3" stroke="#be185d" stroke-width="4"/>
                <ellipse cx="0" cy="0" rx="30" ry="22" fill="none" stroke="black" stroke-width="1"/>
                <text x="0" y="5" text-anchor="middle" font-size="14" font-family="sans-serif" fill="black" font-weight="bold">HALT</text>
            </g>


            <!-- ==========================
                 TOP PATH (The "X" Logic)
                 ========================== -->
            
            <!-- Node l -->
            <g transform="translate(220, 100)">
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">l</text>
            </g>

            <!-- Node m -->
            <g transform="translate(380, 100)">
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">m</text>
            </g>

            <!-- Node n -->
            <g transform="translate(520, 100)">
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">n</text>
            </g>

            <!-- EDGES TOP -->
            <!-- s -> l (x/R) -->
            <path d="M 90 205 Q 150 100 190 100" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="160" y="125" text-anchor="middle" font-size="16" font-style="italic">x/R</text>

            <!-- l -> m (y/R, x/R, ◊/R) -->
            <path d="M 250 85 Q 300 60 350 85" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="300" y="75" text-anchor="middle" font-size="14" font-style="italic">x/R</text>
            <line x1="250" y1="100" x2="350" y2="100" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop-fin)"/>
            <text x="300" y="95" text-anchor="middle" font-size="14" font-style="italic">y/R</text>
            <path d="M 250 115 Q 300 140 350 115" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="300" y="135" text-anchor="middle" font-size="14" font-style="italic">◊/R</text>

            <!-- Loop on m -->
            <path d="M 380 80 C 360 40, 400 40, 380 80" fill="none" stroke="black" marker-end="url(#arrow-loop-fin)"/>
            <text x="380" y="55" text-anchor="middle" font-size="14">◊/R</text>
            <path d="M 380 120 C 360 160, 400 160, 380 120" fill="none" stroke="black" marker-end="url(#arrow-loop-fin)"/>
            <text x="380" y="155" text-anchor="middle" font-size="14">y/R</text>

            <!-- m -> n -->
            <line x1="410" y1="100" x2="490" y2="100" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop-fin)"/>
            <text x="450" y="95" text-anchor="middle" font-size="16" font-style="italic">x/x</text>

            <!-- n -> HALT -->
            <path d="M 540 115 Q 580 150 610 200" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="590" y="140" text-anchor="middle" font-size="14" transform="rotate(45 590 140)">x/x</text>
            <path d="M 550 100 Q 620 120 635 195" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="610" y="120" text-anchor="middle" font-size="14">y/y</text>
            <path d="M 530 120 Q 560 200 600 220" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="560" y="190" text-anchor="middle" font-size="14">◊/◊</text>


            <!-- ==========================
                 BOTTOM PATH (The "Y" Logic)
                 ========================== -->

            <!-- Node p -->
            <g transform="translate(220, 350)">
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">p</text>
            </g>

            <!-- Node q -->
            <g transform="translate(380, 350)">
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">q</text>
            </g>

            <!-- Node r -->
            <g transform="translate(520, 350)">
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="white" stroke="black" stroke-width="2"/>
                <text x="0" y="5" text-anchor="middle" font-size="20" font-family="sans-serif" fill="black" font-style="italic">r</text>
            </g>

            <!-- EDGES BOTTOM -->
            <!-- s -> p (y/R) -->
            <path d="M 90 245 Q 150 350 190 350" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="160" y="325" text-anchor="middle" font-size="16" font-style="italic">y/R</text>

            <!-- p -> q (y/R, x/R, ◊/R) -->
            <path d="M 250 335 Q 300 310 350 335" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="300" y="325" text-anchor="middle" font-size="14" font-style="italic">x/R</text>
            <line x1="250" y1="350" x2="350" y2="350" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop-fin)"/>
            <text x="300" y="345" text-anchor="middle" font-size="14" font-style="italic">y/R</text>
            <path d="M 250 365 Q 300 390 350 365" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="300" y="385" text-anchor="middle" font-size="14" font-style="italic">◊/R</text>

            <!-- Loop on q -->
            <path d="M 380 330 C 360 290, 400 290, 380 330" fill="none" stroke="black" marker-end="url(#arrow-loop-fin)"/>
            <text x="380" y="305" text-anchor="middle" font-size="14">◊/R</text>
            <path d="M 380 370 C 360 410, 400 410, 380 370" fill="none" stroke="black" marker-end="url(#arrow-loop-fin)"/>
            <text x="380" y="405" text-anchor="middle" font-size="14">x/R</text>

            <!-- q -> r -->
            <line x1="410" y1="350" x2="490" y2="350" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop-fin)"/>
            <text x="450" y="345" text-anchor="middle" font-size="16" font-style="italic">y/y</text>

            <!-- r -> HALT -->
            <path d="M 540 335 Q 580 300 610 250" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="580" y="310" text-anchor="middle" font-size="14" transform="rotate(-45 580 310)">y/y</text>
            <path d="M 550 350 Q 620 330 635 255" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="610" y="340" text-anchor="middle" font-size="14">x/x</text>
            <path d="M 530 330 Q 560 250 600 230" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrow-fin)"/>
            <text x="560" y="270" text-anchor="middle" font-size="14">◊/◊</text>


            <!-- EDGES MIDDLE -->
            <!-- s -> t (◊/R) -->
            <line x1="110" y1="225" x2="220" y2="225" stroke="black" stroke-width="1.5" marker-end="url(#arrow-loop-fin)"/>
            <text x="165" y="220" text-anchor="middle" font-size="16" font-style="italic">◊/R</text>

        </svg>
    </div>

    <!-- EXPLANATION -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div class="bg-blue-900/30 p-4 rounded border border-blue-500/30">
            <h5 class="font-bold text-blue-300 mb-2">Wiring Logic (How it Joins)</h5>
            <p class="text-sm opacity-80 mb-2">
                We used the <strong>Complex Combiner Algorithm</strong>. We essentially "unplugged" the halt states of the original Start Machine ($s$) and "plugged" them into the start states of the helper machines.
            </p>
            <ul class="list-disc pl-5 text-sm space-y-2 opacity-80">
                <li><strong>Start State ($s$):</strong> Acts as a decision maker. It reads the first symbol.</li>
                <li><strong>If $s$ reads 'x':</strong> We transition to state $l$ (Start of Top Machine). This activates the "Find second X" logic.</li>
                <li><strong>If $s$ reads 'y':</strong> We transition to state $p$ (Start of Bottom Machine). This activates the "Find second Y" logic.</li>
            </ul>
        </div>

        <div class="bg-green-900/30 p-4 rounded border border-green-500/30">
            <h5 class="font-bold text-green-300 mb-2">Execution Flow</h5>
            <p class="text-sm opacity-80 mb-2">Example Input: <code>x a b x y</code></p>
            <ol class="list-decimal pl-5 text-sm space-y-1 opacity-80">
                <li>Start at <strong>s</strong>. Read <code>x</code>.</li>
                <li>Follow upper path ($x/R$) to <strong>l</strong>.</li>
                <li><strong>l</strong> moves right (skips 'a'). Now at <strong>m</strong>.</li>
                <li><strong>m</strong> loops while reading 'a', 'b', etc.</li>
                <li>When <strong>m</strong> finally sees <code>x</code>, it follows transition $x/x$ to <strong>n</strong>.</li>
                <li><strong>n</strong> connects to the <strong>HALT</strong> state. Success.</li>
            </ol>
        </div>
    </div>
</div>

                    <!-- Slide 12 Recreation -->
                    <div>
                        <h4 class="font-bold text-accent mb-4">The Solution Diagram</h4>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 relative overflow-hidden flex justify-center">
                            
                            <!-- SVG CONTAINER -->
                            <svg width="600" height="350" viewBox="0 0 600 350">
                                <defs>
                                    <marker id="arrow-slide" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                    </marker>
                                </defs>

                                <!-- START NODE (s) -->
                                <g transform="translate(50, 175)">
                                    <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">s</text>
                                </g>

                                <!-- NODE t (Blank/Halt) -->
                                <g transform="translate(150, 175)">
                                    <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">t</text>
                                </g>

                                <!-- ============ UPPER PATH (Finding X) ============ -->
                                
                                <!-- NODE l (Move Right) -->
                                <g transform="translate(180, 80)">
                                    <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">l</text>
                                </g>

                                <!-- NODE m (Search Loop) -->
                                <g transform="translate(320, 80)">
                                    <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">m</text>
                                </g>

                                <!-- NODE n (Found) -->
                                <g transform="translate(460, 80)">
                                    <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">n</text>
                                </g>

                                <!-- ============ LOWER PATH (Finding Y) ============ -->

                                <!-- NODE p (Move Right) -->
                                <g transform="translate(180, 270)">
                                    <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">p</text>
                                </g>

                                <!-- NODE q (Search Loop) -->
                                <g transform="translate(320, 270)">
                                    <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">q</text>
                                </g>

                                <!-- NODE r (Found) -->
                                <g transform="translate(460, 270)">
                                    <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-weight="bold">r</text>
                                </g>

                                <!-- FINAL HALT (Convergence) -->
                                <g transform="translate(560, 175)">
                                    <circle r="25" fill="none" stroke="#f43f5e" stroke-width="4"/>
                                    <circle r="20" fill="#333" stroke="#f43f5e" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-size="10">HALT</text>
                                </g>


                                <!-- ============ TRANSITIONS ============ -->

                                <!-- s -> t (Blank) -->
                                <line x1="50" y1="175" x2="150" y2="175" stroke="white" stroke-width="2" marker-end="url(#arrow-slide)"/>
                                <text x="100" y="165" text-anchor="middle" fill="white" font-size="12">◊ / R</text>

                                <!-- s -> l (Read x) -->
                                <path d="M 50 175 Q 100 80 180 80" fill="none" stroke="white" stroke-width="2" marker-end="url(#arrow-slide)"/>
                                <text x="90" y="100" text-anchor="middle" fill="white" font-size="12">x / R</text>

                                <!-- s -> p (Read y) -->
                                <path d="M 50 175 Q 100 270 180 270" fill="none" stroke="white" stroke-width="2" marker-end="url(#arrow-slide)"/>
                                <text x="90" y="250" text-anchor="middle" fill="white" font-size="12">y / R</text>

                                <!-- l -> m (Move Right) -->
                                <line x1="180" y1="80" x2="320" y2="80" stroke="white" stroke-width="2" marker-end="url(#arrow-slide)"/>
                                <text x="250" y="70" text-anchor="middle" fill="white" font-size="12">x/R, y/R, ◊/R</text>

                                <!-- m -> m (Loop) -->
                                <path d="M 320 80 C 300 30 340 30 320 60" fill="none" stroke="white" stroke-width="2"/> 
                                <text x="320" y="40" text-anchor="middle" fill="white" font-size="12">y/R, ◊/R</text>

                                <!-- m -> n (Found x) -->
                                <line x1="320" y1="80" x2="460" y2="80" stroke="white" stroke-width="2" marker-end="url(#arrow-slide)"/>
                                <text x="390" y="70" text-anchor="middle" fill="white" font-size="12">x / x</text>

                                <!-- p -> q (Move Right) -->
                                <line x1="180" y1="270" x2="320" y2="270" stroke="white" stroke-width="2" marker-end="url(#arrow-slide)"/>
                                <text x="250" y="260" text-anchor="middle" fill="white" font-size="12">x/R, y/R, ◊/R</text>

                                <!-- q -> q (Loop) -->
                                <path d="M 320 270 C 300 320 340 320 320 290" fill="none" stroke="white" stroke-width="2"/> 
                                <text x="320" y="330" text-anchor="middle" fill="white" font-size="12">x/R, ◊/R</text>

                                <!-- q -> r (Found y) -->
                                <line x1="320" y1="270" x2="460" y2="270" stroke="white" stroke-width="2" marker-end="url(#arrow-slide)"/>
                                <text x="390" y="260" text-anchor="middle" fill="white" font-size="12">y / y</text>

                                <!-- n, r, t -> HALT -->
                                <path d="M 460 80 Q 510 80 560 175" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4"/>
                                <path d="M 460 270 Q 510 270 560 175" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4"/>
                                <path d="M 170 175 L 560 175" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4"/>

                            </svg>
                        </div>
                    </div>

                    <!-- Step-by-Step Logic Explanation -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <!-- Top Path Explanation -->
                        <div class="bg-black/30 p-4 rounded-lg border-l-4 border-green-500">
                            <h5 class="font-bold text-green-400 mb-2">Upper Path (Starts with x)</h5>
                            <ol class="list-decimal pl-5 text-sm space-y-2 opacity-80">
                                <li><strong>Start (s):</strong> Reads <strong>x</strong>. Moves Right. Transfers to state <strong>l</strong>.</li>
                                <li><strong>State l:</strong> Moves Right (unconditionally) to skip the first symbol. Transfers to <strong>m</strong>.</li>
                                <li><strong>State m:</strong> Scans the tape. 
                                    <ul class="list-disc pl-4 text-xs mt-1 text-gray-400">
                                        <li>Reads y or ◊? Move Right (Ignore).</li>
                                        <li>Reads <strong>x</strong>? Found the second x! Stop (Go to n).</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <!-- Bottom Path Explanation -->
                        <div class="bg-black/30 p-4 rounded-lg border-l-4 border-yellow-500">
                            <h5 class="font-bold text-yellow-400 mb-2">Lower Path (Starts with y)</h5>
                            <ol class="list-decimal pl-5 text-sm space-y-2 opacity-80">
                                <li><strong>Start (s):</strong> Reads <strong>y</strong>. Moves Right. Transfers to state <strong>p</strong>.</li>
                                <li><strong>State p:</strong> Moves Right (unconditionally) to skip the first symbol. Transfers to <strong>q</strong>.</li>
                                <li><strong>State q:</strong> Scans the tape. 
                                    <ul class="list-disc pl-4 text-xs mt-1 text-gray-400">
                                        <li>Reads x or ◊? Move Right (Ignore).</li>
                                        <li>Reads <strong>y</strong>? Found the second y! Stop (Go to r).</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div class="text-center text-xs opacity-50 mt-4">
                        *Note: Transitions t, n, and r are conceptually final states (Halt).
                    </div>
                </div>
            `
        },
       'tm-multitape': {
            title: 'Multi-Tape Turing Machines',
            html: `
                <div class="space-y-10">
                    <!-- CONCEPT DEFINITION -->
                    <div class="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-xl">
                        <h4 class="font-bold text-purple-300 text-lg mb-2">What is a Multi-Tape Machine?</h4>
                        <p class="opacity-90">
                            Instead of a single tape, the machine has <strong>$k$ independent tapes</strong>.
                            Each tape has its own Read/Write Head.
                        </p>
                        <ul class="list-disc pl-5 mt-2 text-sm opacity-80">
                            <li>The input starts on Tape 1.</li>
                            <li>The other tapes usually start blank.</li>
                            <li>In one step, the machine reads all $k$ symbols, changes state, writes $k$ new symbols, and moves each head independently (L, R, or Stay).</li>
                        </ul>
                    </div>

                    <!-- SLIDE 15 RECREATION -->
                    <div>
                        <h4 class="font-bold text-accent mb-4">Example: 3-Tape Machine (Slide 15)</h4>
                        
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            
                            <!-- LEFT: STATE TABLE -->
                            <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                                <h5 class="text-sm font-bold text-center mb-2 text-gray-400">Transition Logic</h5>
                                <table class="w-full text-center text-sm font-mono border-collapse">
                                    <thead>
                                        <tr class="bg-white/10 text-white text-xs">
                                            <th class="p-2 border border-white/20">State</th>
                                            <th class="p-2 border border-white/20">Tape 1</th>
                                            <th class="p-2 border border-white/20">Tape 2</th>
                                            <th class="p-2 border border-white/20">Tape 3</th>
                                            <th class="p-2 border border-white/20">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="hover:bg-white/5">
                                            <td class="p-2 border border-white/20">S1</td>
                                            <td class="p-2 border border-white/20">X</td>
                                            <td class="p-2 border border-white/20">X</td>
                                            <td class="p-2 border border-white/20">X</td>
                                            <td class="p-2 border border-white/20 text-purple-300">S2, 2L</td>
                                        </tr>
                                        <tr class="hover:bg-white/5">
                                            <td class="p-2 border border-white/20">S1</td>
                                            <td class="p-2 border border-white/20">X</td>
                                            <td class="p-2 border border-white/20">X</td>
                                            <td class="p-2 border border-white/20">Y</td>
                                            <td class="p-2 border border-white/20 text-green-300">S2, 1R</td>
                                        </tr>
                                        <tr class="hover:bg-white/5">
                                            <td class="p-2 border border-white/20">S2</td>
                                            <td class="p-2 border border-white/20">Y</td>
                                            <td class="p-2 border border-white/20">X</td>
                                            <td class="p-2 border border-white/20">Y</td>
                                            <td class="p-2 border border-white/20 text-yellow-300">S1, 2Y</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="mt-2 text-xs opacity-60 bg-black/30 p-2 rounded">
                                    <strong>Legend:</strong><br>
                                    <span class="text-purple-300">S2, 2L</span>: Goto S2, Move Head 2 Left.<br>
                                    <span class="text-green-300">S2, 1R</span>: Goto S2, Move Head 1 Right.<br>
                                    <span class="text-yellow-300">S1, 2Y</span>: Goto S1, Write 'Y' on Tape 2.
                                </div>
                            </div>

                            <!-- RIGHT: VISUALIZATION -->
                            <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-4">
                                <h5 class="text-sm font-bold text-center text-gray-400">Tape Visualization</h5>
                                
                                <!-- Tape 1 -->
                                <div class="relative">
                                    <span class="text-xs absolute -top-4 left-0">Tape 1</span>
                                    <div class="flex border border-white/30 font-mono">
                                        <div class="w-8 h-8 flex items-center justify-center border-r border-white/30">X</div>
                                        <div class="w-8 h-8 flex items-center justify-center border-r border-white/30 bg-green-500/30">X</div>
                                        <div class="w-8 h-8 flex items-center justify-center border-r border-white/30">Y</div>
                                    </div>
                                    <!-- Arrow -->
                                    <div class="absolute -bottom-3 left-10 text-green-400 text-lg">▲</div>
                                </div>

                                <!-- Tape 2 -->
                                <div class="relative">
                                    <span class="text-xs absolute -top-4 left-0">Tape 2</span>
                                    <div class="flex border border-white/30 font-mono">
                                        <div class="w-8 h-8 flex items-center justify-center border-r border-white/30 bg-purple-500/30">X</div>
                                        <div class="w-8 h-8 flex items-center justify-center border-r border-white/30">X</div>
                                        <div class="w-8 h-8 flex items-center justify-center border-r border-white/30">Y</div>
                                    </div>
                                    <div class="absolute -bottom-3 left-2 text-purple-400 text-lg">▲</div>
                                </div>

                                <!-- Tape 3 -->
                                <div class="relative">
                                    <span class="text-xs absolute -top-4 left-0">Tape 3</span>
                                    <div class="flex border border-white/30 font-mono">
                                        <div class="w-8 h-8 flex items-center justify-center border-r border-white/30">X</div>
                                        <div class="w-8 h-8 flex items-center justify-center border-r border-white/30">X</div>
                                        <div class="w-8 h-8 flex items-center justify-center border-r border-white/30 bg-yellow-500/30">Y</div>
                                    </div>
                                    <div class="absolute -bottom-3 left-18 text-yellow-400 text-lg">▲</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- SLIDE 16 PROOF -->
                    <div class="bg-black/30 p-6 rounded-xl border border-white/10">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="text-3xl">📜</div>
                            <div>
                                <h4 class="text-xl font-bold text-white">Theorem: Multi = Single</h4>
                                <p class="text-sm opacity-80">Multi-tape Turing Machines are <span class="text-red-400 font-bold underline">NOT</span> more powerful than single-tape machines.</p>
                            </div>
                        </div>

                        <div class="bg-white/5 p-4 rounded-lg mb-6">
                            <h5 class="font-bold text-accent mb-2">Summary of Proof (Slide 16)</h5>
                            <ol class="list-decimal pl-5 space-y-3 text-sm opacity-90">
                                <li><strong>Represent tapes as an array:</strong> We squash all $k$ tapes onto one single tape.</li>
                                <li><strong>Column Symbols:</strong> For every possible combination of symbols in a column (e.g., Column 1 has 'a' on tape 1, 'b' on tape 2...), we define a new unique symbol.</li>
                                <li><strong>Precise Correspondence:</strong> We ensure the single tape contains markers indicating where the "virtual heads" are for each track.</li>
                                <li><strong>Compound States:</strong> The single machine needs to "remember" what all $k$ virtual heads are seeing, so its state space grows.</li>
                                <li><strong>Execute Transition:</strong> To simulate 1 step of the multi-tape machine:
                                    <ul class="list-disc pl-5 mt-1 text-gray-400">
                                        <li>Scan the whole tape to find all $k$ virtual heads.</li>
                                        <li>Store their symbols in the state.</li>
                                        <li>Calculate the new symbols and moves.</li>
                                        <li>Scan the tape again to update the virtual heads.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <!-- Proof Visualization -->
                        <div class="text-center">
                            <p class="text-xs text-gray-400 mb-2">Visualizing 3 Tapes on 1 Physical Tape (Interleaved/Track Method)</p>
                            <div class="inline-block border border-white/30 rounded p-1 bg-black">
                                <div class="flex font-mono text-sm">
                                    <!-- Cell 1 -->
                                    <div class="flex flex-col border-r border-white/30 px-2 py-1">
                                        <span class="text-green-400">Head1</span>
                                        <span>a</span>
                                        <span>x</span>
                                        <span>0</span>
                                    </div>
                                    <!-- Cell 2 -->
                                    <div class="flex flex-col border-r border-white/30 px-2 py-1">
                                        <span>.</span>
                                        <span>b</span>
                                        <span class="text-purple-400">Head2</span>
                                        <span>1</span>
                                    </div>
                                    <!-- Cell 3 -->
                                    <div class="flex flex-col border-r border-white/30 px-2 py-1">
                                        <span>.</span>
                                        <span>a</span>
                                        <span>y</span>
                                        <span class="text-yellow-400">Head3</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-xs mt-2 opacity-50">Simulation Cost: Quadratic Time loss $O(t^2)$ (but functionally equivalent).</p>
                        </div>
                    </div>
                </div>
            `
        },
       'tm-ntm': {
            title: 'Nondeterministic Turing Machines (NTM)',
            html: `
                <div class="space-y-10">
                    <!-- SECTION 1: EXAMPLE (Diagram & Table) -->
                    <div class="space-y-6">
                        <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-xl">
                            <h4 class="font-bold text-blue-300 text-lg">Example: Accepting $X^+$</h4>
                            <p class="opacity-90 mt-2">
                                This machine accepts a string of one or more <strong>X</strong>'s.
                                <br>It is <strong>nondeterministic</strong> because in state <strong>p</strong>, reading symbol <strong>X</strong>, the machine has <strong>two valid moves</strong>.
                            </p>
                        </div>

                        <!-- Split View: Diagram & Table -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            
                            <!-- LEFT: DIAGRAM RECREATION -->
                            <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
                                <h5 class="text-accent font-bold mb-4">Transition Diagram</h5>
                                <div class="relative w-[350px] h-[200px]">
                                    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 350 200">
                                        <defs>
                                            <marker id="arrow-ntm" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                                                <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                            </marker>
                                        </defs>

                                        <!-- Node s -->
                                        <g transform="translate(50, 100)">
                                            <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                            <text y="5" text-anchor="middle" fill="white">s</text>
                                            <line x1="-30" y1="-30" x2="-15" y2="-15" stroke="white" stroke-width="2" marker-end="url(#arrow-ntm)" />
                                        </g>

                                        <!-- Node p -->
                                        <g transform="translate(150, 100)">
                                            <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                            <text y="5" text-anchor="middle" fill="white">p</text>
                                        </g>

                                        <!-- Node q -->
                                        <g transform="translate(250, 100)">
                                            <circle r="20" fill="#333" stroke="white" stroke-width="2"/>
                                            <text y="5" text-anchor="middle" fill="white">q</text>
                                        </g>

                                        <!-- Node h (Halt) -->
                                        <g transform="translate(330, 100)">
                                            <circle r="18" fill="#333" stroke="#f43f5e" stroke-width="2"/>
                                            <circle r="22" fill="none" stroke="#f43f5e" stroke-width="2"/>
                                            <text y="5" text-anchor="middle" fill="white">h</text>
                                        </g>

                                        <!-- TRANSITIONS -->
                                        <line x1="50" y1="100" x2="150" y2="100" stroke="white" stroke-width="1.5" marker-end="url(#arrow-ntm)"/>
                                        <text x="100" y="90" text-anchor="middle" fill="white" font-size="12">◊ / R</text>

                                        <!-- p -> p (LOOP) -->
                                        <path d="M 150 80 C 120 30, 180 30, 150 80" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrow-ntm)"/>
                                        <text x="150" y="45" text-anchor="middle" fill="white" font-size="12">X / R</text>

                                        <!-- p -> q -->
                                        <line x1="150" y1="100" x2="250" y2="100" stroke="white" stroke-width="1.5" marker-end="url(#arrow-ntm)"/>
                                        <text x="200" y="90" text-anchor="middle" fill="white" font-size="12">X / R</text>

                                        <line x1="250" y1="100" x2="330" y2="100" stroke="white" stroke-width="1.5" marker-end="url(#arrow-ntm)"/>
                                        <text x="290" y="90" text-anchor="middle" fill="white" font-size="12">◊ / ◊</text>
                                    </svg>
                                </div>
                            </div>

                            <!-- RIGHT: STATE TABLE -->
                            <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h5 class="text-accent font-bold mb-4">State Table</h5>
                                <p class="text-sm opacity-80 mb-4">The state table explicitly includes <strong>both</strong> transitions below!</p>
                                
                                <table class="w-full text-center border-collapse text-sm font-mono">
                                    <thead>
                                        <tr class="bg-blue-600/30 text-white font-bold">
                                            <th class="p-3 border-b border-blue-500/50">Current State</th>
                                            <th class="p-3 border-b border-blue-500/50">Symbol</th>
                                            <th class="p-3 border-b border-blue-500/50">Action</th>
                                            <th class="p-3 border-b border-blue-500/50">Next State</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- The Conflict -->
                                        <tr class="bg-white/10 hover:bg-white/20">
                                            <td class="p-3 border-b border-white/10 font-bold">p</td>
                                            <td class="p-3 border-b border-white/10">X</td>
                                            <td class="p-3 border-b border-white/10">R</td>
                                            <td class="p-3 border-b border-white/10 font-bold text-green-400">p</td>
                                        </tr>
                                        <tr class="bg-white/10 hover:bg-white/20">
                                            <td class="p-3 border-b border-white/10 font-bold">p</td>
                                            <td class="p-3 border-b border-white/10">X</td>
                                            <td class="p-3 border-b border-white/10">R</td>
                                            <td class="p-3 border-b border-white/10 font-bold text-yellow-400">q</td>
                                        </tr>
                                        <tr class="opacity-50"><td class="p-2">s</td><td class="p-2">◊</td><td class="p-2">R</td><td class="p-2">p</td></tr>
                                        <tr class="opacity-50"><td class="p-2">q</td><td class="p-2">◊</td><td class="p-2">◊</td><td class="p-2">h</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- DIVIDER -->
                    <div class="w-full h-px bg-white/20"></div>

                    <!-- SECTION 2: THE EQUIVALENCE -->
                    <div class="bg-black/30 p-8 rounded-xl border border-white/10">
                        <h3 class="text-2xl font-bold text-white mb-6 text-center">Nondeterminism = Determinism</h3>
                        
                        <div class="flex flex-col md:flex-row gap-8 items-center">
                            
                            <!-- Visual Explanation: Tree Simulation -->
                            <div class="relative w-[300px] h-[200px] bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center">
                                <div class="absolute top-2 left-2 text-xs text-gray-400">DTM Simulation (Breadth-First)</div>
                                <svg class="w-full h-full" viewBox="0 0 200 150">
                                    <!-- Level 0 -->
                                    <circle cx="100" cy="20" r="10" fill="#333" stroke="white" />
                                    
                                    <!-- Level 1 -->
                                    <line x1="100" y1="30" x2="60" y2="70" stroke="#666" />
                                    <line x1="100" y1="30" x2="140" y2="70" stroke="#666" />
                                    <circle cx="60" cy="70" r="10" fill="#333" stroke="white" />
                                    <circle cx="140" cy="70" r="10" fill="#333" stroke="white" />

                                    <!-- Level 2 -->
                                    <line x1="60" y1="80" x2="40" y2="120" stroke="#666" />
                                    <line x1="60" y1="80" x2="80" y2="120" stroke="#666" />
                                    <line x1="140" y1="80" x2="140" y2="120" stroke="#666" />
                                    
                                    <circle cx="40" cy="120" r="8" fill="#333" stroke="white" />
                                    <circle cx="80" cy="120" r="8" fill="#333" stroke="white" />
                                    <circle cx="140" cy="120" r="8" fill="#facc15" stroke="#facc15" /> <!-- Accept -->
                                </svg>
                                <p class="text-xs text-center mt-2 opacity-60">DTM tracks ALL branches in parallel</p>
                            </div>

                            <!-- Text Content -->
                            <div class="flex-1 space-y-4">
                                <p class="text-lg leading-relaxed">
                                    A <strong>Non-Deterministic Turing Machine (NTM)</strong> can be simulated on a <strong>Deterministic single-tape TM (DTM)</strong>.
                                </p>
                                
                                <div class="bg-blue-600/10 p-4 rounded-lg border-l-4 border-blue-500">
                                    <p class="text-sm">
                                        The DTM simulates each transition of the NTM by making <strong>multiple copies of the simulated state</strong> when multiple transitions are possible, and simulating them all in parallel.
                                    </p>
                                </div>

                                <p class="font-bold text-center text-red-400 text-xl border-t border-white/10 pt-4 mt-4">
                                    Conclusion: Nondeterministic Turing Machines are <span class="underline">NOT</span> more powerful/capable than deterministic machines!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
};