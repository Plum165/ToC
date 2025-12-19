// turing.js
export const turingModule = {
    id: 'tm',
    title: 'Turing Machines',
    subtopics: [
        { id: 'tm-intro', title: 'Introduction & History' },
        { id: 'tm-def', title: 'Formal Definition' },
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
        <div class="space-y-8">

            <!-- Definition List -->
            <ul class="list-disc pl-5 space-y-2 opacity-90">
                <li><strong>A Tape:</strong> Equal-sized cells extending indefinitely to the right.</li>
                <li><strong>A Tape Head:</strong> Reads from and writes to one cell at a time.</li>
                <li><strong>Input Alphabet:</strong> Symbols initially placed on the tape.</li>
                <li><strong>Tape Alphabet:</strong> Symbols allowed on the tape (includes blanks).</li>
                <li><strong>Set of States (S):</strong> Includes a start state and halt states.</li>
                <li><strong>State Table (δ):</strong> Defines actions based on (state, symbol).</li>
            </ul>

            <!-- Visual Illustration -->
            <div class="p-4 border border-white/20 rounded bg-black/30 space-y-4">
                <h4 class="font-bold text-center">Illustration: How a Turing Machine Looks</h4>

                <!-- Tape -->
                <div class="flex justify-center gap-1 font-mono text-sm">
                    <div class="px-3 py-2 border border-white/30">◊</div>
                    <div class="px-3 py-2 border border-white/30">x</div>
                    <div class="px-3 py-2 border border-accent bg-accent/20">y</div>
                    <div class="px-3 py-2 border border-white/30">x</div>
                    <div class="px-3 py-2 border border-white/30">◊</div>
                    <div class="px-3 py-2 border border-white/30 opacity-50">...</div>
                </div>

                <!-- Tape Head -->
                <div class="text-center font-mono text-accent">
                    ▲<br/>
                    Tape Head (reads / writes)
                </div>

                <!-- State Box -->
                <div class="flex justify-center">
                    <div class="px-6 py-3 border border-blue-400/40 rounded bg-blue-900/20 font-mono text-sm">
                        Current State: <strong>p</strong>
                    </div>
                </div>

                <!-- Transition Explanation -->
                <div class="text-center font-mono text-sm opacity-80">
                    δ(p, y) → (q, x, R)
                </div>

                <div class="text-center text-xs opacity-70">
                    If in state <strong>p</strong> reading <strong>y</strong>:<br/>
                    write <strong>x</strong>, move <strong>Right</strong>, go to state <strong>q</strong>
                </div>
            </div>

            <!-- Formal Definition -->
            <div class="p-4 border border-white/20 rounded bg-black/30 text-center font-mono text-lg text-accent">
                M = ( {p, q}, {x, y}, {x, y, ◊}, δ , p, {q} )
            </div>

            <!-- Ending Conditions -->
            <div>
                <h4 class="font-bold mb-2">How will it all end?</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                    <div class="bg-green-900/30 p-3 rounded border border-green-500/30">
                        1. Terminate in a <strong>Halt State</strong>.
                    </div>
                    <div class="bg-red-900/30 p-3 rounded border border-red-500/30">
                        2. <strong>Crash</strong> (undefined action or left-edge error).
                    </div>
                    <div class="bg-yellow-900/30 p-3 rounded border border-yellow-500/30">
                        3. <strong>Loop Forever</strong>.
                    </div>
                </div>
            </div>

        </div>
    `
}
,
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
            title: 'Transition Diagrams',
            html: `
                <div class="space-y-10">
                    <p class="opacity-80">Arc labels take the form <strong>s/A</strong>, where <strong>s</strong> is the symbol read, and <strong>A</strong> is the action (write symbol or move L/R).</p>
                    
                    <!-- DIAGRAM 1: From Slide 14 -->
                    <div class="bg-white/5 p-6 rounded-xl flex flex-col items-center">
                        <h5 class="text-accent font-bold mb-4">Example 1</h5>
                        <div class="relative w-[300px] h-[150px]">
                            <!-- SVG Arrows -->
                            <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                    </marker>
                                </defs>
                                <!-- Loop on p -->
                                <path d="M 60 75 C 30 20, 90 20, 80 50" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                <text x="50" y="30" fill="white" font-family="monospace" font-size="14">◊/R</text>

                                <!-- Top arc p to q -->
                                <path d="M 90 70 Q 150 30 210 70" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                <text x="145" y="45" fill="white" font-family="monospace" font-size="14">x/x</text>

                                <!-- Bottom arc p to q -->
                                <path d="M 90 80 Q 150 120 210 80" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                <text x="145" y="115" fill="white" font-family="monospace" font-size="14">y/y</text>
                            </svg>
                            
                            <!-- Nodes -->
                            <div class="absolute left-[50px] top-[60px] w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black z-10">p</div>
                            <div class="absolute right-[50px] top-[60px] w-10 h-10 rounded-full border-4 double-border border-accent flex items-center justify-center bg-black z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]">q</div>
                        </div>
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
                <div class="space-y-6">
                    <p class="opacity-90">This Turing Machine accepts the language denoted by the regular expression <strong>a*b*</strong>. 
                    <br><span class="text-sm opacity-60">Alphabet = {◊, a, b}. Missing transition implies crash.</span></p>

                    <div class="bg-white/5 p-8 rounded-xl flex flex-col items-center">
                        <div class="relative w-[400px] h-[200px]">
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
                                <path d="M 90 75 L 160 75" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                <text x="115" y="65" fill="white" font-family="monospace" font-size="14">b/R</text>

                                <!-- q1 loop (b/R) -->
                                <path d="M 170 70 C 140 15, 200 15, 190 45" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                <text x="160" y="25" fill="white" font-family="monospace" font-size="14">b/R</text>

                                <!-- q1 to q2 (◊/R) -->
                                <path d="M 200 75 L 280 75" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                <text x="225" y="65" fill="white" font-family="monospace" font-size="14">◊/R</text>

                                <!-- q0 to q2 (◊/R) - Curved Bottom -->
                                <path d="M 70 95 Q 185 180 300 95" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead)"/>
                                <text x="180" y="140" fill="white" font-family="monospace" font-size="14">◊/R</text>

                            </svg>

                            <!-- Nodes -->
                            <div class="absolute left-[50px] top-[60px] w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black z-10">q0</div>
                            <div class="absolute left-[160px] top-[60px] w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black z-10">q1</div>
                            <div class="absolute left-[290px] top-[60px] w-10 h-10 rounded-full border-4 double-border border-accent flex items-center justify-center bg-black z-10 shadow-[0_0_15px_rgba(255,255,255,0.4)]">q2</div>
                        </div>
                    </div>
                    
                    <ul class="list-disc pl-5 text-sm space-y-2 opacity-80">
                        <li><strong>Start (q0):</strong> Reads 'a's. If it sees a 'b', moves to q1. If it sees blank (◊), done.</li>
                        <li><strong>State q1:</strong> Reads remaining 'b's. If it sees blank (◊), done.</li>
                        <li><strong>Halt (q2):</strong> Accepting state.</li>
                        <li>Any other input (e.g., 'a' after 'b') crashes the machine (rejects).</li>
                    </ul>
                </div>
            `
        },
        'tm-incrementer': {
            title: 'Example: Binary Incrementer',
            html: `
                <div class="space-y-8">
                    <div class="bg-blue-900/20 p-4 rounded border-l-4 border-blue-400">
                        <h4 class="font-bold text-blue-300">Goal</h4>
                        <p class="text-sm">Increment a binary number. <br> 
                        <strong>Important:</strong> The numbers are stored <em>reversed</em> on the tape.</p>
                        <div class="mt-2 font-mono text-xs bg-black/40 p-2 rounded inline-block">
                            Value 3 = 11 (Binary) → Stored as: 1 1 ◊ ...<br>
                            Value 4 = 100 (Binary) → Stored as: 0 0 1 ◊ ...
                        </div>
                    </div>

                    <div>
                        <h4 class="font-bold text-accent mb-4">State Table</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full text-center border-collapse text-sm">
                                <thead>
                                    <tr class="bg-white/10 text-white font-bold">
                                        <th class="p-2 border border-white/20">Current</th>
                                        <th class="p-2 border border-white/20">Read</th>
                                        <th class="p-2 border border-white/20">Action</th>
                                        <th class="p-2 border border-white/20">Next</th>
                                    </tr>
                                </thead>
                                <tbody class="font-mono">
                                    <!-- Start Phase -->
                                    <tr class="bg-green-900/30">
                                        <td class="p-2 border border-white/20">Initial</td>
                                        <td class="p-2 border border-white/20">◊</td>
                                        <td class="p-2 border border-white/20">R</td>
                                        <td class="p-2 border border-white/20">Start</td>
                                    </tr>
                                    <tr class="bg-red-900/20">
                                        <td class="p-2 border border-white/20">Start</td>
                                        <td class="p-2 border border-white/20">0</td>
                                        <td class="p-2 border border-white/20">1</td>
                                        <td class="p-2 border border-white/20">GotZero</td>
                                    </tr>
                                    <tr class="bg-red-900/20">
                                        <td class="p-2 border border-white/20">Start</td>
                                        <td class="p-2 border border-white/20">1</td>
                                        <td class="p-2 border border-white/20">0</td>
                                        <td class="p-2 border border-white/20">GotOne</td>
                                    </tr>
                                    <tr class="bg-red-900/20">
                                        <td class="p-2 border border-white/20">Start</td>
                                        <td class="p-2 border border-white/20">◊</td>
                                        <td class="p-2 border border-white/20">L</td>
                                        <td class="p-2 border border-white/20">Halt</td>
                                    </tr>
                                    <!-- Logic -->
                                    <tr class="bg-purple-900/20">
                                        <td class="p-2 border border-white/20">GotOne</td>
                                        <td class="p-2 border border-white/20">0</td>
                                        <td class="p-2 border border-white/20">R</td>
                                        <td class="p-2 border border-white/20">Carry</td>
                                    </tr>
                                    <!-- Carry Phase -->
                                    <tr class="bg-yellow-900/20">
                                        <td class="p-2 border border-white/20">Carry</td>
                                        <td class="p-2 border border-white/20">1</td>
                                        <td class="p-2 border border-white/20">0</td>
                                        <td class="p-2 border border-white/20">GotOne</td>
                                    </tr>
                                    <tr class="bg-yellow-900/20">
                                        <td class="p-2 border border-white/20">Carry</td>
                                        <td class="p-2 border border-white/20">0</td>
                                        <td class="p-2 border border-white/20">1</td>
                                        <td class="p-2 border border-white/20">GotZero</td>
                                    </tr>
                                    <tr class="bg-yellow-900/20">
                                        <td class="p-2 border border-white/20">Carry</td>
                                        <td class="p-2 border border-white/20">◊</td>
                                        <td class="p-2 border border-white/20">1</td>
                                        <td class="p-2 border border-white/20">Finish</td>
                                    </tr>
                                    <!-- Finish Phase -->
                                    <tr class="bg-gray-700/50">
                                        <td class="p-2 border border-white/20">Finish</td>
                                        <td class="p-2 border border-white/20">Any</td>
                                        <td class="p-2 border border-white/20">L</td>
                                        <td class="p-2 border border-white/20">Finish/Halt</td>
                                    </tr>
                                </tbody>
                            </table>
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
            title: 'Example: Find 2nd Non-Blank Symbol',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">
                        <strong>Goal:</strong> Find the second occurrence of a non-blank symbol ({x, y}) to the right.
                        <br>We combine three sub-machines: 
                        <span class="font-mono text-accent">l</span> (move right), 
                        <span class="font-mono text-accent">m</span> (find x), 
                        <span class="font-mono text-accent">q</span> (find y).
                    </p>

                    <div class="bg-white/5 p-6 rounded-xl flex flex-col items-center overflow-hidden">
                        <div class="relative w-[500px] h-[300px] scale-90 md:scale-100">
                            <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 300">
                                <defs>
                                    <marker id="arrowhead-sm" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                    </marker>
                                </defs>

                                <!-- Start Node s -->
                                <circle cx="50" cy="150" r="20" stroke="white" stroke-width="2" fill="#111" />
                                <text x="50" y="155" text-anchor="middle" fill="white">s</text>

                                <!-- Split to l (top) and p (bottom) -->
                                <path d="M 70 140 Q 120 80 150 80" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead-sm)" />
                                <text x="90" y="100" fill="white" font-size="12">x/R</text>

                                <path d="M 70 160 Q 120 220 150 220" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead-sm)" />
                                <text x="90" y="210" fill="white" font-size="12">y/R</text>

                                <!-- Node l (top path) -->
                                <circle cx="170" cy="80" r="20" stroke="white" stroke-width="2" fill="#111" />
                                <text x="170" y="85" text-anchor="middle" fill="white">l</text>

                                <!-- l to m (find x) -->
                                <path d="M 190 80 L 250 80" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead-sm)" />
                                <text x="210" y="70" fill="white" font-size="12">x/R</text>

                                <!-- Node m (top middle) -->
                                <circle cx="270" cy="80" r="20" stroke="white" stroke-width="2" fill="#111" />
                                <text x="270" y="85" text-anchor="middle" fill="white">m</text>
                                <!-- Loop on m -->
                                <path d="M 260 65 C 240 30 300 30 280 65" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead-sm)" />

                                <!-- Node p (bottom path) -->
                                <circle cx="170" cy="220" r="20" stroke="white" stroke-width="2" fill="#111" />
                                <text x="170" y="225" text-anchor="middle" fill="white">p</text>

                                <!-- p to q (find y) -->
                                <path d="M 190 220 L 250 220" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead-sm)" />
                                <text x="210" y="210" fill="white" font-size="12">y/R</text>

                                <!-- Node q (bottom middle) -->
                                <circle cx="270" cy="220" r="20" stroke="white" stroke-width="2" fill="#111" />
                                <text x="270" y="225" text-anchor="middle" fill="white">q</text>

                                <!-- Convergence to Halt -->
                                <circle cx="450" cy="150" r="25" stroke="#f43f5e" stroke-width="4" stroke-dasharray="4 2" fill="#111" />
                                <text x="450" y="155" text-anchor="middle" fill="white">H</text>

                                <!-- m to H -->
                                <path d="M 290 80 Q 370 80 430 135" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead-sm)" />
                                <text x="350" y="90" fill="white" font-size="12">x/x</text>

                                <!-- q to H -->
                                <path d="M 290 220 Q 370 220 430 165" fill="none" stroke="white" stroke-width="1.5" marker-end="url(#arrowhead-sm)" />
                                <text x="350" y="210" fill="white" font-size="12">y/y</text>

                            </svg>
                        </div>
                    </div>
                    <p class="text-xs text-center opacity-60">Schematic representation of Slide 12 logic.</p>
                </div>
            `
        },
        'tm-multitape': {
            title: 'Multi-Tape Turing Machines',
            html: `
                <div class="space-y-6">
                    <div class="p-4 bg-white/5 border-l-4 border-purple-500 rounded">
                        <h4 class="font-bold mb-2">Concept</h4>
                        <p class="text-sm opacity-80">Instead of one tape, the machine has <strong>k</strong> tapes, each with its own independent read/write head.</p>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-center border-collapse text-sm font-mono">
                            <caption class="text-left text-accent font-bold mb-2">Example State Table (2 Tapes)</caption>
                            <thead>
                                <tr class="bg-white/10 text-white">
                                    <th class="p-2 border border-white/20">State</th>
                                    <th class="p-2 border border-white/20">Tape 1</th>
                                    <th class="p-2 border border-white/20">Tape 2</th>
                                    <th class="p-2 border border-white/20">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border border-white/20">S1</td>
                                    <td class="p-2 border border-white/20">X</td>
                                    <td class="p-2 border border-white/20">X</td>
                                    <td class="p-2 border border-white/20">S2, 2L (Move Tape 2 Left)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-white/20">S2</td>
                                    <td class="p-2 border border-white/20">Y</td>
                                    <td class="p-2 border border-white/20">X</td>
                                    <td class="p-2 border border-white/20">S1, 1R (Move Tape 1 Right)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="p-5 bg-black/40 rounded border border-white/20 text-center">
                        <h4 class="text-xl font-bold text-red-400 mb-2">Crucial Theorem</h4>
                        <p>Multi-tape Turing Machines are <br><span class="text-white font-bold underline decoration-red-500">NOT</span> more powerful than single-tape machines.</p>
                        <p class="text-xs mt-3 opacity-60 text-left">
                            <strong>Proof Summary:</strong> A single tape can simulate $k$ tapes by storing them as an array (interleaved or marked symbols) and creating "compound states" to track head positions.
                        </p>
                    </div>
                </div>
            `
        },
        'tm-ntm': {
            title: 'Nondeterministic Turing Machines (NTM)',
            html: `
                <div class="space-y-6">
                    <p class="opacity-80">In a Deterministic TM, every state/symbol pair has exactly <strong>one</strong> transition. In an NTM, a state/symbol pair can have <strong>multiple</strong> possible transitions.</p>

                    <div class="flex justify-center my-6">
                        <div class="relative w-[300px] h-[150px]">
                            <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                <defs>
                                    <marker id="arrowhead-ntm" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                    </marker>
                                </defs>

                                <!-- Node p -->
                                <circle cx="100" cy="75" r="25" stroke="white" stroke-width="2" fill="#111" />
                                <text x="100" y="80" text-anchor="middle" fill="white">p</text>

                                <!-- Loop on p (Transition 1) -->
                                <path d="M 85 55 C 60 10, 140 10, 115 55" fill="none" stroke="#facc15" stroke-width="2" marker-end="url(#arrowhead-ntm)"/>
                                <text x="100" y="30" text-anchor="middle" fill="#facc15" font-size="12">X / R</text>

                                <!-- p to q (Transition 2) -->
                                <line x1="125" y1="75" x2="190" y2="75" stroke="#facc15" stroke-width="2" marker-end="url(#arrowhead-ntm)" />
                                <text x="160" y="65" text-anchor="middle" fill="#facc15" font-size="12">X / R</text>

                                <!-- Node q -->
                                <circle cx="220" cy="75" r="25" stroke="white" stroke-width="2" fill="#111" />
                                <text x="220" y="80" text-anchor="middle" fill="white">q</text>
                            </svg>
                        </div>
                    </div>

                    <div class="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded text-center">
                        <p class="text-sm font-mono text-yellow-200">
                            δ(p, X) = { (p, R), (q, R) }
                        </p>
                        <p class="text-xs opacity-70 mt-1">Two choices for the same input!</p>
                    </div>

                    <div class="p-5 bg-black/40 rounded border border-white/20 text-center">
                        <h4 class="text-xl font-bold text-red-400 mb-2">Equivalence Theorem</h4>
                        <p>Nondeterministic Turing Machines are <br><span class="text-white font-bold underline decoration-red-500">NOT</span> more powerful than deterministic machines.</p>
                        <p class="text-xs mt-3 opacity-60 text-left">
                            <strong>Proof Summary:</strong> A Deterministic TM can simulate an NTM by exploring all possible branches (usually using Breadth-First Search) to see if <em>any</em> branch reaches an accept state.
                        </p>
                    </div>
                </div>
            `
        }
    }
};