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
            title: 'Countability & The Limits of Computation',
            html: `
                <div class="space-y-8">
                    <!-- SECTION 1: WHAT IS COUNTABLE? -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-xl">
                        <h4 class="font-bold text-blue-300 text-lg">1. Countable vs. Uncountable</h4>
                        <p class="text-sm opacity-90 mt-2">
                            <strong>Countable:</strong> Any set that can be put into a 1-to-1 correspondence with the Natural Numbers ($0, 1, 2, 3...$). 
                            <br><span class="opacity-60 text-xs">Examples: Integers, Rational Numbers (Fractions), Strings.</span>
                        </p>
                        <p class="text-sm opacity-90 mt-2">
                            <strong>Uncountable:</strong> Sets that are "too big" to be counted. No matter how you list them, you miss some.
                            <br><span class="opacity-60 text-xs">Examples: Real Numbers ($\mathbb{R}$), The Power Set of Natural Numbers.</span>
                        </p>
                    </div>

                    <!-- SECTION 2: TMs ARE COUNTABLE -->
                    <div>
                        <h4 class="font-bold text-accent mb-4">2. Why are Turing Machines Countable?</h4>
                        <p class="text-sm opacity-80 mb-4">
                            Every TM can be converted into a unique binary string (and thus a number). This is called its <strong>Turing Number</strong>.
                        </p>

                        <!-- Slide 55 Example -->
                        <div class="bg-black/30 p-4 rounded-xl border border-white/10">
                            <h5 class="text-xs uppercase font-bold text-gray-400 mb-2">Example: Encoding a Transition (Slide 55)</h5>
                            
                            <div class="grid grid-cols-2 gap-4 text-xs font-mono mb-4">
                                <div>
                                    <span class="text-green-400">Map:</span><br>
                                    ◊ = 000<br>
                                    x = 001<br>
                                    y = 010
                                </div>
                                <div>
                                    <span class="text-purple-400">Map:</span><br>
                                    Left = 011<br>
                                    Right = 100<br>
                                    State 1 = 101<br>
                                    State 2 = 110
                                </div>
                            </div>

                            <div class="p-3 bg-white/5 rounded">
                                <p class="mb-1 text-sm"><strong>Rule:</strong> In State 1, read 'x' $\to$ Write 'y', Move Right, Goto State 2</p>
                                <div class="flex flex-wrap gap-1 mt-2">
                                    <span class="bg-blue-600/30 px-2 rounded border border-blue-500/50">101</span>
                                    <span class="bg-blue-600/30 px-2 rounded border border-blue-500/50">001</span>
                                    <span class="text-gray-500">→</span>
                                    <span class="bg-purple-600/30 px-2 rounded border border-purple-500/50">110</span>
                                    <span class="bg-purple-600/30 px-2 rounded border border-purple-500/50">010</span>
                                    <span class="bg-purple-600/30 px-2 rounded border border-purple-500/50">100</span>
                                </div>
                                <p class="text-xs mt-2 text-gray-400">Result: One giant binary integer. Therefore, TMs are Countable.</p>
                            </div>
                        </div>
                    </div>

                    <!-- SECTION 3: LANGUAGES ARE UNCOUNTABLE -->
                    <div class="bg-red-900/10 border-l-4 border-red-500 p-4 rounded-xl">
                        <h4 class="font-bold text-red-400 text-lg">3. Why are Languages Uncountable?</h4>
                        <p class="text-sm opacity-90 mt-2">
                            A "Language" is a set of strings. The set of <em>all possible</em> languages is the <strong>Power Set</strong> of all strings.
                        </p>
                        <p class="text-sm opacity-90 mt-2">
                            Cantor's Theorem proves that the Power Set of a countable set is <strong>Uncountable</strong>.
                        </p>
                        <div class="mt-3 text-center font-mono text-xl">
                            |Languages| $\gg$ |Turing Machines|
                        </div>
                    </div>

                    <!-- SECTION 4: THE PIGEONHOLE PRINCIPLE -->
                    <div class="flex flex-col items-center gap-4">
                        <h4 class="font-bold text-white">The Mathematical Consequence</h4>
                        <div class="flex items-center gap-8 text-center">
                            <div class="flex flex-col items-center">
                                <div class="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center bg-blue-900/20 text-xs">
                                    TMs<br>(Integers)
                                </div>
                                <span class="text-xs mt-1">Infinite</span>
                            </div>
                            
                            <div class="text-2xl text-red-500 font-bold">⇏</div>

                            <div class="flex flex-col items-center">
                                <div class="w-24 h-24 rounded-full border-2 border-red-500 flex items-center justify-center bg-red-900/20 text-xs">
                                    Languages<br>(Reals)
                                </div>
                                <span class="text-xs mt-1">BIGGER Infinite</span>
                            </div>
                        </div>
                        <p class="text-sm text-center max-w-md opacity-80 bg-white/5 p-3 rounded">
                            There are infinitely more problems (Languages) than there are programs (TMs) to solve them.
                            <br><span class="text-red-400 font-bold">Most problems are unsolvable!</span>
                        </p>
                    </div>
                </div>
            `
        },'lim-diagonal': {
            title: 'Proof: Cantor\'s Diagonalization',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. THE GOAL -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-xl">
                        <h4 class="font-bold text-blue-300 text-lg">The Goal</h4>
                        <p class="opacity-90 mt-2">
                            We want to prove that the set of all possible languages (or subsets) is <strong>Uncountable</strong>. 
                            <br>In simple terms: <strong>"We cannot make a numbered list of every possible subset. We will always miss one."</strong>
                        </p>
                    </div>

                    <!-- 2. THE SETUP -->
                    <div>
                        <h4 class="font-bold text-accent mb-2">Step 1: The Assumption (Proof by Contradiction)</h4>
                        <p class="text-sm opacity-80 mb-4">
                            Let's pretend we <em>CAN</em> list every possible subset. We create a master table. 
                            <br><strong>Rows</strong> = The Subsets ($S_1, S_2...$)
                            <br><strong>Columns</strong> = The Elements ($e_1, e_2...$)
                            <br><strong>T/F</strong> = Is element $e$ inside Subset $S$?
                        </p>

                        <!-- THE TABLE -->
                        <div class="overflow-x-auto bg-black/40 p-6 rounded-xl border border-white/10 relative">
                            <table class="w-full text-center font-mono text-lg border-collapse">
                                <thead>
                                    <tr class="text-gray-500 border-b border-gray-700">
                                        <th class="p-3 text-left">Subset Name</th>
                                        <th class="p-3">e1</th>
                                        <th class="p-3">e2</th>
                                        <th class="p-3">e3</th>
                                        <th class="p-3">e4</th>
                                        <th class="p-3">...</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Row 1 -->
                                    <tr class="hover:bg-white/5">
                                        <td class="p-3 text-left text-accent">S1</td>
                                        <td class="p-3 relative">
                                            <span class="text-red-500 font-bold text-xl border-2 border-red-500 rounded px-2 bg-red-900/30">T</span>
                                            <span class="absolute -top-2 -right-2 text-[10px] text-red-300 w-max">1. Flip T→F</span>
                                        </td>
                                        <td class="p-3 opacity-30">F</td>
                                        <td class="p-3 opacity-30">F</td>
                                        <td class="p-3 opacity-30">T</td>
                                        <td class="p-3 opacity-30">...</td>
                                    </tr>
                                    <!-- Row 2 -->
                                    <tr class="hover:bg-white/5">
                                        <td class="p-3 text-left text-accent">S2</td>
                                        <td class="p-3 opacity-30">T</td>
                                        <td class="p-3 relative">
                                            <span class="text-red-500 font-bold text-xl border-2 border-red-500 rounded px-2 bg-red-900/30">F</span>
                                            <span class="absolute -top-2 -right-2 text-[10px] text-red-300 w-max">2. Flip F→T</span>
                                        </td>
                                        <td class="p-3 opacity-30">T</td>
                                        <td class="p-3 opacity-30">F</td>
                                        <td class="p-3 opacity-30">...</td>
                                    </tr>
                                    <!-- Row 3 -->
                                    <tr class="hover:bg-white/5">
                                        <td class="p-3 text-left text-accent">S3</td>
                                        <td class="p-3 opacity-30">F</td>
                                        <td class="p-3 opacity-30">F</td>
                                        <td class="p-3 relative">
                                            <span class="text-red-500 font-bold text-xl border-2 border-red-500 rounded px-2 bg-red-900/30">F</span>
                                            <span class="absolute -top-2 -right-2 text-[10px] text-red-300 w-max">3. Flip F→T</span>
                                        </td>
                                        <td class="p-3 opacity-30">T</td>
                                        <td class="p-3 opacity-30">...</td>
                                    </tr>
                                    <!-- Row 4 -->
                                    <tr class="hover:bg-white/5">
                                        <td class="p-3 text-left text-accent">S4</td>
                                        <td class="p-3 opacity-30">T</td>
                                        <td class="p-3 opacity-30">T</td>
                                        <td class="p-3 opacity-30">T</td>
                                        <td class="p-3 relative">
                                            <span class="text-red-500 font-bold text-xl border-2 border-red-500 rounded px-2 bg-red-900/30">T</span>
                                            <span class="absolute -top-2 -right-2 text-[10px] text-red-300 w-max">4. Flip T→F</span>
                                        </td>
                                        <td class="p-3 opacity-30">...</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-gradient-to-br from-transparent via-red-500/10 to-transparent"></div>
                        </div>
                    </div>

                    <!-- 3. THE CONSTRUCTION -->
                    <div>
                        <h4 class="font-bold text-accent mb-2">Step 2: Create the "Nemesis" Subset ($D$)</h4>
                        <p class="text-sm opacity-80 mb-4">
                            We construct a new subset $D$ by walking down the <strong>Diagonal</strong> (the red boxes) and doing the <span class="text-red-400 font-bold">OPPOSITE</span>.
                        </p>
                        
                        <div class="flex flex-col items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
                            <div class="flex gap-4 items-center">
                                <div class="text-sm opacity-50">Diagonal seen:</div>
                                <div class="font-mono text-xl tracking-widest text-gray-400">T F F T ...</div>
                            </div>
                            <div class="text-2xl font-bold text-white">⬇ FLIP ⬇</div>
                            <div class="flex gap-4 items-center">
                                <div class="text-sm font-bold text-accent">New Subset D:</div>
                                <div class="font-mono text-xl tracking-widest text-red-400 font-bold bg-black/50 px-4 py-2 rounded">F T T F ...</div>
                            </div>
                        </div>
                    </div>

                    <!-- 4. THE CONTRADICTION -->
                    <div class="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-xl">
                        <h4 class="font-bold text-red-400 text-lg mb-2">Step 3: The "Gotcha" (Contradiction)</h4>
                        <p class="opacity-90 mb-4">
                            We claimed our table listed <strong>EVERY</strong> possible subset. So, our new subset $D$ must be somewhere in the table, right?
                        </p>
                        <ul class="space-y-2 text-sm font-mono">
                            <li class="flex gap-3">
                                <span class="text-red-400 font-bold">Is D == S1?</span> 
                                <span>NO. They differ at column 1 (T vs F).</span>
                            </li>
                            <li class="flex gap-3">
                                <span class="text-red-400 font-bold">Is D == S2?</span> 
                                <span>NO. They differ at column 2 (F vs T).</span>
                            </li>
                            <li class="flex gap-3">
                                <span class="text-red-400 font-bold">Is D == Si?</span> 
                                <span>NO. They differ at column i.</span>
                            </li>
                        </ul>
                        <p class="mt-4 font-bold text-white">
                            Conclusion: $D$ is a brand new subset that was NOT in the list. Our list was incomplete. The set is Uncountable.
                        </p>
                    </div>

                    <!-- 5. WHY IMPORTANT -->
                    <div class="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-xl">
                        <h4 class="font-bold text-yellow-400 text-lg mb-2">Why is this important for Computer Science?</h4>
                        <div class="flex flex-col gap-4 text-sm opacity-90">
                            <p>
                                1. <strong>Turing Machines are Countable.</strong> We can list every possible program ($M_1, M_2, ...$).
                            </p>
                            <p>
                                2. <strong>Problems (Languages) are Uncountable.</strong> We just proved there are way more problems than there are integers.
                            </p>
                            <p class="text-center font-bold text-lg text-white border-t border-yellow-500/30 pt-4">
                                There are more Problems than Programs.<br>
                                Therefore, there are problems that computers CANNOT solve.
                            </p>
                        </div>
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
                <div class="space-y-10">
                    
                    <!-- 1. THE DEFINITION -->
                    <div class="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                        <h4 class="font-bold text-red-300 text-lg">The Problem</h4>
                        <p class="text-sm opacity-90 mt-2">
                            Can we write a program (let's call it <strong>H</strong>) that takes <em>any</em> other program code as input and determines—without running it forever—whether that program will eventually <strong>Halt</strong> (stop) or <strong>Loop Forever</strong>?
                        </p>
                        <p class="text-sm font-bold mt-2 text-white">Answer: No. It is mathematically impossible.</p>
                    </div>

                    <!-- 2. THE VISUAL PROOF (Existing SVG) -->
                    <div class="bg-white/5 p-6 rounded-xl relative flex flex-col items-center border border-white/10">
                        <h4 class="text-center font-bold mb-6 text-accent">The Visual Proof (Contradiction)</h4>
                        
                        <div class="relative w-[500px] h-[250px]">
                            <svg class="absolute inset-0 w-full h-full pointer-events-none">
                                <defs>
                                    <marker id="arrowhead-h" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                                    </marker>
                                </defs>

                                <!-- Input -->
                                <text x="30" y="125" fill="white" font-size="14">Input M</text>
                                <line x1="80" y1="120" x2="130" y2="120" stroke="white" stroke-width="2" marker-end="url(#arrowhead-h)" />

                                <!-- Machine H box -->
                                <rect x="130" y="80" width="80" height="80" fill="#333" stroke="white" stroke-width="2" />
                                <text x="170" y="125" text-anchor="middle" fill="white" font-weight="bold">H</text>

                                <!-- Path YES (Top) -->
                                <path d="M 210 100 L 280 60" fill="none" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowhead-h)" />
                                <text x="230" y="70" fill="#4ade80" font-size="12">Says "Halt"</text>

                                <!-- Loop Trap -->
                                <circle cx="330" cy="60" r="30" fill="none" stroke="white" stroke-width="2" />
                                <path d="M 350 50 Q 370 20 340 35" fill="none" stroke="white" stroke-width="2" marker-end="url(#arrowhead-h)" />
                                <text x="330" y="65" text-anchor="middle" fill="white" font-size="12">Loop</text>
                                <text x="330" y="110" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">If H says Yes -> LOOP</text>

                                <!-- Path NO (Bottom) -->
                                <path d="M 210 140 L 280 180" fill="none" stroke="#f87171" stroke-width="2" marker-end="url(#arrowhead-h)" />
                                <text x="230" y="190" fill="#f87171" font-size="12">Says "Loop"</text>

                                <!-- Halt Node -->
                                <circle cx="330" cy="180" r="25" stroke="#f87171" stroke-width="4" stroke-dasharray="4 2" fill="#111" />
                                <text x="330" y="185" text-anchor="middle" fill="white">STOP</text>
                                <text x="330" y="230" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">If H says No -> HALT</text>
                            </svg>
                        </div>
                    </div>

                    <!-- 3. THE VERBAL EXPLANATION (New) -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <!-- Explanation A: The Logic -->
                        <div class="bg-black/30 p-5 rounded-xl border border-white/10">
                            <h5 class="font-bold text-blue-400 mb-3 text-lg">In Simple Words: "The Opposite Game"</h5>
                            <p class="text-sm leading-relaxed opacity-80">
                                Imagine we build a machine <strong>H</strong> that is a perfect predictor. It can look at any program and tell you exactly what it will do.
                                <br><br>
                                Now, we build a "Prankster" machine <strong>W</strong>. 
                                <strong>W</strong> asks the predictor: <em>"What am I going to do?"</em>
                                <ul class="list-disc pl-5 mt-2 space-y-2">
                                    <li>If <strong>H</strong> says "You will stop", <strong>W</strong> decides to run forever on purpose.</li>
                                    <li>If <strong>H</strong> says "You will run forever", <strong>W</strong> decides to stop immediately.</li>
                                </ul>
                                <br>
                                <strong>The Paradox:</strong> <strong>H</strong> cannot be right. Whatever it predicts, <strong>W</strong> does the opposite. Therefore, a perfect predictor <strong>H</strong> cannot exist.
                            </p>
                        </div>

                        <!-- Explanation B: The Steps -->
                        <div class="bg-black/30 p-5 rounded-xl border border-white/10">
                            <h5 class="font-bold text-green-400 mb-3 text-lg">Step-by-Step Proof</h5>
                            <ol class="list-decimal pl-5 text-sm space-y-3 opacity-80">
                                <li>
                                    <strong>Assume</strong> a machine $H(P, i)$ exists that decides if Program $P$ halts on input $i$.
                                </li>
                                <li>
                                    <strong>Construct</strong> a new machine $W(P)$ that calls $H$ on itself: $H(P, P)$.
                                </li>
                                <li>
                                    <strong>Design W's behavior:</strong>
                                    <ul class="list-disc pl-4 mt-1 text-xs text-gray-400">
                                        <li>If $H$ says "Halt", $W$ loops forever.</li>
                                        <li>If $H$ says "Loop", $W$ halts.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Feed W to itself:</strong> What happens when we run $W(W)$?
                                </li>
                                <li>
                                    <strong>Contradiction:</strong>
                                    <br>If $W$ halts $\rightarrow$ $H$ said "Loop" $\rightarrow$ Contradiction.
                                    <br>If $W$ loops $\rightarrow$ $H$ said "Halt" $\rightarrow$ Contradiction.
                                </li>
                            </ol>
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
         

        /* --- NEW CONTENT STARTS HERE --- */

       'lim-efficiency': {
            title: 'Analysis of Algorithms',
            html: `
                <div class="space-y-8">
                    
                    <!-- 1. EFFICIENCY CASES -->
                    <div>
                        <h4 class="font-bold text-accent mb-4">Best, Average, and Worst Cases</h4>
                        <p class="text-sm opacity-80 mb-4">For some algorithms, efficiency depends on the <em>type</em> of input, not just the size $n$.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center h-full">
                            
                            <!-- WORST CASE -->
                            <div class="p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex flex-col justify-between">
                                <div>
                                    <div class="text-2xl mb-2">🐢</div>
                                    <h4 class="font-bold text-red-400">Worst Case</h4>
                                    <p class="font-mono text-lg opacity-90">$W(n)$</p>
                                </div>
                                <div class="text-xs mt-3 text-left opacity-80">
                                    <p><strong>Max</strong> over inputs of size n.</p>
                                    <p class="mt-1">Guarantees the algorithm never takes longer than this.</p>
                                </div>
                            </div>

                            <!-- AVERAGE CASE -->
                            <div class="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg flex flex-col justify-between">
                                <div>
                                    <div class="text-2xl mb-2">🎲</div>
                                    <h4 class="font-bold text-yellow-400">Average Case</h4>
                                    <p class="font-mono text-lg opacity-90">$A(n)$</p>
                                </div>
                                <div class="text-xs mt-3 text-left opacity-80 space-y-2">
                                    <p><strong>"Average"</strong> over inputs of size n.</p>
                                    <p class="bg-black/40 p-1 rounded text-yellow-200"><strong>⚠️ NOT</strong> (Best + Worst) / 2</p>
                                    <p>It is the <strong>expected number of operations</strong> considered as a <em>random variable</em> based on probability distribution.</p>
                                    <p class="italic opacity-60">Most difficult to estimate.</p>
                                </div>
                            </div>

                            <!-- BEST CASE -->
                            <div class="p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex flex-col justify-between">
                                <div>
                                    <div class="text-2xl mb-2">🚀</div>
                                    <h4 class="font-bold text-green-400">Best Case</h4>
                                    <p class="font-mono text-lg opacity-90">$B(n)$</p>
                                </div>
                                <div class="text-xs mt-3 text-left opacity-80">
                                    <p><strong>Min</strong> over inputs of size n.</p>
                                    <p class="mt-1">e.g., finding the item at the very first index.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2. SEQUENTIAL SEARCH EXERCISE -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 class="font-bold text-accent mb-4">Exercise: Sequential Search</h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            <div class="text-sm space-y-3 opacity-90">
                                <div>
                                    <span class="text-blue-300 font-bold">Problem:</span><br>
                                    Given a list of $n$ elements and a search key $K$, find an element equal to $K$, if any exists.
                                </div>
                                <div>
                                    <span class="text-blue-300 font-bold">Algorithm:</span><br>
                                    Scan the list and compare successive elements with $K$ until either a matching element is found (success) or the list is exhausted.
                                </div>
                            </div>

                            <div class="bg-black/30 p-4 rounded-lg font-mono text-sm space-y-2">
                                <h5 class="text-xs text-gray-500 font-bold uppercase mb-2">Complexity Analysis</h5>
                                <div class="flex justify-between border-b border-white/10 pb-1">
                                    <span>Best Case ($B(n)$)</span>
                                    <span class="text-green-400">1</span>
                                </div>
                                <div class="flex justify-between border-b border-white/10 pb-1">
                                    <span>Worst Case ($W(n)$)</span>
                                    <span class="text-red-400">n</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Average Case ($A(n)$)</span>
                                    <span class="text-yellow-400">$\approx n/2$</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 3. HOW GOOD IS YOUR ALGORITHM? -->
                    <div class="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-xl">
                        <h4 class="font-bold text-purple-300 text-lg mb-2">How good is your algorithm?</h4>
                        <p class="text-sm opacity-90 mb-4">
                            Finding an algorithm to solve a problem is great, but efficiency is key.
                        </p>
                        <ul class="list-disc pl-5 text-sm space-y-2 opacity-80">
                            <li>Some problems can’t be solved by <em>any</em> algorithm (Undecidable).</li>
                            <li>Others have algorithms, but they are <strong class="text-white">Superpolynomial</strong>.</li>
                        </ul>

                        <div class="mt-4 p-3 bg-black/40 rounded border border-purple-500/30 text-sm">
                            <span class="text-accent font-bold">Definition: Superpolynomial</span><br>
                            An algorithm is superpolynomial if its complexity is worse than polynomial.<br>
                            i.e., worse than $O(n^K)$ for any integer $K$.
                            <br><span class="text-red-400 text-xs mt-1 block">Examples: $O(2^n)$, $O(n!)$</span>
                        </div>
                    </div>

                </div>
            `
        },
       'lim-tractability': {
            title: 'Tractable vs. Intractable vs. Unsolvable',
            html: `
                <div class="space-y-8">
                    
                    <!-- 1. THE THREE CATEGORIES -->
                    <div>
                        <h4 class="font-bold text-accent mb-4">The Hierarchy of Difficulty</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            
                            <!-- Tractable -->
                            <div class="p-4 rounded-xl border-l-4 border-green-500 bg-green-900/10 flex flex-col">
                                <h4 class="font-bold text-green-400 mb-2">1. Tractable</h4>
                                <p class="text-sm opacity-80 flex-grow">
                                    Solvable in <strong>Polynomial</strong> time ($O(n^k)$).
                                </p>
                                <div class="mt-3 text-xs font-mono text-green-300 bg-green-900/30 p-2 rounded">
                                    "Reasonable Time"
                                </div>
                            </div>

                            <!-- Intractable -->
                            <div class="p-4 rounded-xl border-l-4 border-red-500 bg-red-900/10 flex flex-col">
                                <h4 class="font-bold text-red-400 mb-2">2. Intractable</h4>
                                <p class="text-sm opacity-80 flex-grow">
                                    Solvable <em>only</em> in <strong>Super-Polynomial</strong> time ($O(2^n)$).
                                </p>
                                <div class="mt-3 text-xs font-mono text-red-300 bg-red-900/30 p-2 rounded">
                                    "Theoretically possible, practically impossible."
                                </div>
                            </div>

                            <!-- Unsolvable -->
                            <div class="p-4 rounded-xl border-l-4 border-gray-500 bg-gray-800 flex flex-col">
                                <h4 class="font-bold text-gray-400 mb-2">3. Unsolvable</h4>
                                <p class="text-sm opacity-80 flex-grow">
                                    No algorithm exists to solve this, even with infinite time.
                                </p>
                                <div class="mt-3 text-xs font-mono text-gray-500 bg-black/30 p-2 rounded">
                                    "Forever is not enough."
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2. THE "STAND OR FALL TOGETHER" CONCEPT -->
                    <div class="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl">🔗</div>
                        <h4 class="font-bold text-blue-300 text-lg mb-2">The Great Unknown (NP-Complete)</h4>
                        <p class="text-sm opacity-90 mb-4">
                            For many important problems (like TSP, SAT), we <strong>suspect</strong> they are intractable, but we <strong>cannot prove it</strong>.
                        </p>
                        
                        <div class="bg-black/30 p-4 rounded-lg border-l-4 border-yellow-400">
                            <h5 class="font-bold text-yellow-400 text-sm uppercase tracking-wider mb-1">They Stand or Fall Together</h5>
                            <p class="text-sm opacity-80">
                                These problems are mathematically linked.
                                <br>
                                <span class="text-white font-bold">"If we could solve ONE of them in polynomial time, we can solve ALL of them in polynomial time."</span>
                            </p>
                        </div>
                    </div>

                    <!-- 3. IMPACT OF N (Comparison Table) -->
                    <div class="overflow-x-auto bg-white/5 rounded-xl p-4 border border-white/10">
                        <h4 class="font-bold text-center mb-4 text-accent text-sm uppercase">Why "Super-Polynomial" is bad</h4>
                        <table class="w-full text-center text-sm">
                            <thead>
                                <tr class="bg-white/5">
                                    <th class="p-2 border-b border-white/10">Complexity</th>
                                    <th class="p-2 border-b border-white/10">n = 10</th>
                                    <th class="p-2 border-b border-white/10">n = 50</th>
                                    <th class="p-2 border-b border-white/10">n = 60</th>
                                </tr>
                            </thead>
                            <tbody class="font-mono text-xs md:text-sm">
                                <tr class="text-blue-300">
                                    <td class="p-2 border-b border-white/10">n² (Poly)</td>
                                    <td class="p-2 border-b border-white/10">Instant</td>
                                    <td class="p-2 border-b border-white/10">Instant</td>
                                    <td class="p-2 border-b border-white/10">Instant</td>
                                </tr>
                                <tr class="text-blue-300">
                                    <td class="p-2 border-b border-white/10">n⁵ (Poly)</td>
                                    <td class="p-2 border-b border-white/10">0.1s</td>
                                    <td class="p-2 border-b border-white/10">5 mins</td>
                                    <td class="p-2 border-b border-white/10">13 mins</td>
                                </tr>
                                <tr class="text-red-400 font-bold bg-red-900/10">
                                    <td class="p-2 border-b border-white/10">2ⁿ (Super-Poly)</td>
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
                <div class="space-y-8">
                    <p class="opacity-80">
                        Many hard problems exist in two versions. Complexity theory focuses on the <strong>Decision</strong> version because it simplifies the math (output is just 1 bit: Yes/No), but they are computationally related.
                    </p>

                    <!-- Comparison Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <!-- Optimization Card -->
                        <div class="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-red-500/20 p-2 rounded text-2xl">🏆</div>
                                <h4 class="font-bold text-red-400 text-lg">1. Optimization</h4>
                            </div>
                            
                            <p class="text-sm font-bold text-white mb-2">"Find the BEST solution."</p>
                            <p class="text-sm opacity-80 mb-4">Construct a solution that maximizes or minimizes an objective function.</p>
                            
                            <div class="bg-black/30 p-3 rounded border border-white/5">
                                <span class="text-xs font-bold text-accent uppercase">Example (TSP):</span>
                                <p class="text-sm font-mono mt-1 text-gray-300">"Find the tour with the <strong>minimum total weight</strong>."</p>
                            </div>

                            <div class="mt-4 text-xs text-red-300 bg-red-900/20 p-2 rounded">
                                <strong>Problem:</strong> Hard to Verify. If I give you a tour of length 100, can you prove efficiently that there isn't one of length 99? (No).
                            </div>
                        </div>

                        <!-- Decision Card -->
                        <div class="bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-blue-500/20 p-2 rounded text-2xl">❓</div>
                                <h4 class="font-bold text-blue-400 text-lg">2. Decision</h4>
                            </div>
                            
                            <p class="text-sm font-bold text-white mb-2">"Is there a VALID solution?"</p>
                            <p class="text-sm opacity-80 mb-4">Answer a <strong>Yes/No</strong> question based on a parameter $k$.</p>
                            
                            <div class="bg-black/30 p-3 rounded border border-white/5">
                                <span class="text-xs font-bold text-accent uppercase">Example (TSP):</span>
                                <p class="text-sm font-mono mt-1 text-gray-300">"Does a tour of weight <strong>&le; k</strong> exist?"</p>
                            </div>

                            <div class="mt-4 text-xs text-blue-300 bg-blue-900/20 p-2 rounded">
                                <strong>Benefit:</strong> Easy to Verify. If I give you a tour of length 50 and ask "is it $\le 60$?", you can check that instantly.
                            </div>
                        </div>

                    </div>

                    <!-- The Bridge -->
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <h5 class="font-bold text-white mb-2">The Connection</h5>
                        <p class="text-sm opacity-80">
                            "If we could solve the <strong>Decision</strong> problem efficiently, we could solve the <strong>Optimization</strong> problem efficiently."
                        </p>
                        <p class="text-xs mt-2 text-gray-500">
                            (How? By running the Decision algorithm multiple times using <strong>Binary Search</strong> on the value $k$.)
                        </p>
                    </div>
                </div>
            `
        },
       'lim-lowerbounds': {
            title: 'Lower Bounds & Algorithmic Gaps',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. DEFINITIONS -->
                    <div>
                        <h4 class="font-bold text-accent mb-4 text-center">Defining the Limits</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <!-- UPPER BOUND -->
                            <div class="bg-blue-900/10 border-l-4 border-blue-500 p-5 rounded-r-xl">
                                <h5 class="font-bold text-blue-400 text-lg mb-2">Upper Bound $U(n)$</h5>
                                <p class="text-sm opacity-90 mb-3">
                                    The complexity of the <strong>best algorithm we currently know</strong>.
                                </p>
                                <div class="bg-black/30 p-2 rounded text-xs text-blue-200">
                                    <strong>"Sufficient":</strong> We know checking $n$ items is <em>sufficient</em> to solve the problem because we have code that does it.
                                </div>
                            </div>

                            <!-- LOWER BOUND -->
                            <div class="bg-red-900/10 border-l-4 border-red-500 p-5 rounded-r-xl">
                                <h5 class="font-bold text-red-400 text-lg mb-2">Lower Bound $L(n)$</h5>
                                <p class="text-sm opacity-90 mb-3">
                                    A proof that <strong>NO algorithm</strong> (past, present, or future) can possibly solve the problem faster than this.
                                </p>
                                <div class="bg-black/30 p-2 rounded text-xs text-red-200">
                                    <strong>"Necessary":</strong> It is <em>necessary</em> to do at least this much work to find a solution.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2. THE RELATIONSHIP (Tightness vs Gap) -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 class="font-bold text-white mb-6 text-center">How close is our knowledge?</h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                            <!-- Vertical Divider -->
                            <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10"></div>

                            <!-- TIGHT -->
                            <div class="text-center">
                                <div class="text-green-400 font-bold text-lg mb-1">Tight Problem</div>
                                <div class="text-sm opacity-60 font-mono mb-3">$L(n) = \\Theta(U(n))$</div>
                                <p class="text-xs opacity-80 mb-3">
                                    We have found an algorithm that matches the theoretical limit. The problem is "Solved".
                                </p>
                                <div class="inline-block bg-black/40 px-3 py-1 rounded border border-green-500/30 text-xs">
                                    Ex: Sorting ($n \\log n$)
                                </div>
                            </div>

                            <!-- GAP -->
                            <div class="text-center">
                                <div class="text-yellow-400 font-bold text-lg mb-1">Algorithmic Gap</div>
                                <div class="text-sm opacity-60 font-mono mb-3">$L(n) < U(n)$</div>
                                <p class="text-xs opacity-80 mb-3">
                                    There is a gap between what we <em>think</em> is possible and what we can <em>do</em>. We need a faster algorithm OR a better proof.
                                </p>
                                <div class="inline-block bg-black/40 px-3 py-1 rounded border border-yellow-500/30 text-xs">
                                    Ex: Matrix Mult ($n^2$ vs $n^{2.37}$)
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 3. TRIVIAL LOWER BOUNDS -->
                    <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 class="font-bold text-gray-300 mb-4">Establishing "Trivial" Lower Bounds</h4>
                        
                        <div class="mb-4">
                            <p class="text-sm opacity-80 mb-2"><strong>The Logic:</strong> You have to read the input and write the output. Therefore, the complexity must be <em>at least</em> the size of the input/output.</p>
                            <div class="text-center font-mono text-xs bg-black/30 p-2 rounded text-accent">
                                Lower Bound = $\\max(|Input|, |Output|)$
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <!-- Ex 1 -->
                            <div class="bg-white/5 p-3 rounded border border-white/10">
                                <h5 class="text-xs font-bold text-white mb-1">1. Permutations</h5>
                                <p class="text-xs opacity-70 mb-2">Generate all orderings of $n$ items.</p>
                                <p class="text-xs font-mono text-green-400">Output Size: $n!$<br>Limit: $\\Omega(n!)$</p>
                            </div>
                            <!-- Ex 2 -->
                            <div class="bg-white/5 p-3 rounded border border-white/10">
                                <h5 class="text-xs font-bold text-white mb-1">2. Matrix Mult</h5>
                                <p class="text-xs opacity-70 mb-2">Multiply two $n \\times n$ matrices.</p>
                                <p class="text-xs font-mono text-green-400">Input Size: $2n^2$<br>Limit: $\\Omega(n^2)$</p>
                            </div>
                            <!-- Ex 3 -->
                            <div class="bg-white/5 p-3 rounded border border-white/10">
                                <h5 class="text-xs font-bold text-white mb-1">3. Max Element</h5>
                                <p class="text-xs opacity-70 mb-2">Find largest item in array.</p>
                                <p class="text-xs font-mono text-green-400">Input Size: $n$<br>Limit: $\\Omega(n)$</p>
                            </div>
                        </div>

                        <div class="bg-red-900/20 border border-red-500/30 p-3 rounded flex items-start gap-3">
                            <span class="text-xl">⚠️</span>
                            <div>
                                <h6 class="text-sm font-bold text-red-400">The Trap</h6>
                                <p class="text-xs opacity-80 mt-1">
                                    Trivial bounds are often <strong>too low</strong> to be useful.
                                    <br>Example: <strong>Traveling Salesman (TSP)</strong>.
                                    <br>Input is $n^2$ distances $\\to$ Trivial LB is $\\Omega(n^2)$.
                                    <br>Actual complexity is Exponential! The trivial bound misses the difficulty of the logic.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            `
        },
       'lim-adversary': {
            title: 'Adversary Arguments',
            html: `
                <div class="space-y-8">
                    <!-- CONCEPT -->
                    <div class="bg-white/5 p-4 rounded-lg border-l-4 border-purple-500">
                        <h4 class="font-bold text-purple-300 mb-2">The Concept</h4>
                        <p class="text-sm opacity-90">
                            To prove a Lower Bound, we play a game against a <strong>Malevolent Adversary</strong>. 
                            The Adversary constructs the input <em>dynamically</em> as the algorithm runs, always giving the answer that forces the algorithm to do the <strong>most work possible</strong>.
                        </p>
                    </div>

                    <!-- EXAMPLE 1: GUESSING GAME (Existing) -->
                    <div class="bg-black/30 p-6 rounded-xl border border-white/10 relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-accent text-black text-xs font-bold px-2 py-1">Ex 1: Binary Search</div>
                        <h5 class="font-bold text-white mb-4">Guess a Number (1-25)</h5>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between items-center bg-white/5 p-2 rounded">
                                <span class="text-blue-300">Alg: "Is it 8?"</span>
                                <span class="text-red-400 text-right">Adv: "No, Bigger." <br><span class="text-xs text-gray-500">(Keeps 17 candidates alive)</span></span>
                            </div>
                            <div class="flex justify-between items-center bg-white/5 p-2 rounded">
                                <span class="text-blue-300">Alg: "Is it 20?"</span>
                                <span class="text-red-400 text-right">Adv: "No, Smaller." <br><span class="text-xs text-gray-500">(Keeps 11 candidates alive)</span></span>
                            </div>
                        </div>
                    </div>

                    <!-- NEW ILLUSTRATIONS FOR THE OTHER 2 EXAMPLES -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <!-- EXAMPLE 2: FINDING MAX -->
                        <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col">
                            <h5 class="font-bold text-accent mb-4">Ex 2: Finding the Maximum</h5>
                            
                            <!-- SVG -->
                            <div class="relative h-[180px] bg-black/20 rounded-lg mb-4 flex justify-center items-center">
                                <svg width="250" height="150" viewBox="0 0 250 150">
                                    <!-- Nodes -->
                                    <circle cx="50" cy="40" r="15" fill="#333" stroke="white" />
                                    <text x="50" y="45" text-anchor="middle" fill="white" font-size="12">A</text>
                                    
                                    <circle cx="100" cy="40" r="15" fill="#333" stroke="gray" stroke-dasharray="2" />
                                    <text x="100" y="45" text-anchor="middle" fill="gray" font-size="12">B</text>
                                    <line x1="90" y1="30" x2="110" y2="50" stroke="red" stroke-width="2" /> <!-- X out B -->

                                    <circle cx="150" cy="40" r="15" fill="#333" stroke="white" />
                                    <text x="150" y="45" text-anchor="middle" fill="white" font-size="12">C</text>

                                    <circle cx="200" cy="40" r="15" fill="#333" stroke="gray" stroke-dasharray="2" />
                                    <text x="200" y="45" text-anchor="middle" fill="gray" font-size="12">D</text>
                                    <line x1="190" y1="30" x2="210" y2="50" stroke="red" stroke-width="2" /> <!-- X out D -->

                                    <!-- Comparisons -->
                                    <!-- A vs B -->
                                    <path d="M 65 40 L 85 40" stroke="#666" stroke-width="1" />
                                    <text x="75" y="30" text-anchor="middle" fill="#666" font-size="10">1</text>

                                    <!-- C vs D -->
                                    <path d="M 165 40 L 185 40" stroke="#666" stroke-width="1" />
                                    <text x="175" y="30" text-anchor="middle" fill="#666" font-size="10">2</text>

                                    <!-- Final A vs C -->
                                    <path d="M 50 55 Q 100 120 150 55" fill="none" stroke="white" stroke-width="2" />
                                    <text x="100" y="100" text-anchor="middle" fill="white" font-size="12">3. Final Fight</text>
                                </svg>
                            </div>

                            <p class="text-sm opacity-90 mb-2"><strong>The Logic:</strong></p>
                            <p class="text-xs opacity-70 leading-relaxed">
                                To declare a winner, everyone else must lose at least once.
                                <br>The Adversary ensures that every comparison eliminates <strong>only one</strong> candidate.
                                <br>To eliminate $n-1$ losers, you need <strong>$n-1$ comparisons</strong>.
                            </p>
                        </div>

                        <!-- EXAMPLE 3: MERGING LISTS -->
                        <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col">
                            <h5 class="font-bold text-accent mb-4">Ex 3: Merging Sorted Lists</h5>
                            
                            <!-- SVG -->
                            <div class="relative h-[180px] bg-black/20 rounded-lg mb-4 flex justify-center items-center">
                                <svg width="250" height="150" viewBox="0 0 250 150">
                                    <defs>
                                        <marker id="arrow-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" fill="#f87171" />
                                        </marker>
                                    </defs>

                                    <!-- List A -->
                                    <text x="20" y="40" fill="white" font-weight="bold">A:</text>
                                    <rect x="50" y="25" width="30" height="25" fill="#333" stroke="white"/>
                                    <text x="65" y="42" text-anchor="middle" fill="white" font-size="12">10</text>
                                    <rect x="110" y="25" width="30" height="25" fill="#333" stroke="white"/>
                                    <text x="125" y="42" text-anchor="middle" fill="white" font-size="12">30</text>
                                    <rect x="170" y="25" width="30" height="25" fill="#333" stroke="white"/>
                                    <text x="185" y="42" text-anchor="middle" fill="white" font-size="12">50</text>

                                    <!-- List B -->
                                    <text x="20" y="100" fill="white" font-weight="bold">B:</text>
                                    <rect x="80" y="85" width="30" height="25" fill="#333" stroke="white"/>
                                    <text x="95" y="102" text-anchor="middle" fill="white" font-size="12">20</text>
                                    <rect x="140" y="85" width="30" height="25" fill="#333" stroke="white"/>
                                    <text x="155" y="102" text-anchor="middle" fill="white" font-size="12">40</text>
                                    <rect x="200" y="85" width="30" height="25" fill="#333" stroke="white"/>
                                    <text x="215" y="102" text-anchor="middle" fill="white" font-size="12">60</text>

                                    <!-- Zig Zag Arrows -->
                                    <path d="M 65 50 L 95 85" stroke="#f87171" stroke-width="2" marker-end="url(#arrow-red)" />
                                    <path d="M 95 85 L 125 50" stroke="#f87171" stroke-width="2" marker-end="url(#arrow-red)" />
                                    <path d="M 125 50 L 155 85" stroke="#f87171" stroke-width="2" marker-end="url(#arrow-red)" />
                                    <path d="M 155 85 L 185 50" stroke="#f87171" stroke-width="2" marker-end="url(#arrow-red)" />
                                    <path d="M 185 50 L 215 85" stroke="#f87171" stroke-width="2" marker-end="url(#arrow-red)" />

                                </svg>
                            </div>

                            <p class="text-sm opacity-90 mb-2"><strong>The Logic:</strong></p>
                            <p class="text-xs opacity-70 leading-relaxed">
                                The Adversary chooses values that "Interleave" perfectly ($a_1 < b_1 < a_2 < b_2...$).
                                <br>To merge them correctly, the algorithm is forced to perform the "Zig-Zag" comparisons.
                                <br>Result: <strong>$2n-1$ comparisons</strong>.
                            </p>
                        </div>

                    </div>
                </div>
            `
        },
     'lim-decisiontrees': {
            title: 'Decision Trees & Sorting',
            html: `
                <div class="space-y-8">
                    <!-- INTRO -->
                    <p class="opacity-80">
                        Any comparison-based algorithm can be modeled as a binary tree. 
                        <br><strong>Internal Nodes (Diamonds)</strong> = Comparisons ($a < b$). 
                        <br><strong>Leaves (Rectangles)</strong> = Final Sorted Outcomes.
                    </p>
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

                    <!-- VISUALIZATION: 3-ELEMENT SORT -->
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center">
                        <h5 class="font-bold text-accent mb-4">Visual: Sorting 3 Items ($a, b, c$)</h5>
                        
                        <div class="relative w-full h-[400px] overflow-hidden bg-black/20 rounded-lg">
                            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
                                <defs>
                                    <marker id="arrow-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                        <polygon points="0 0, 8 3, 0 6" fill="#4ade80" />
                                    </marker>
                                    <marker id="arrow-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                        <polygon points="0 0, 8 3, 0 6" fill="#f87171" />
                                    </marker>
                                </defs>

                                <!-- === LEVEL 1: ROOT === -->
                                <g transform="translate(300, 40)">
                                    <!-- Diamond -->
                                    <polygon points="0,-20 40,0 0,20 -40,0" fill="#222" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-size="14" font-weight="bold">a < b?</text>
                                </g>

                                <!-- === LEVEL 2 === -->
                                
                                <!-- L2 Left (Yes): b < c? -->
                                <g transform="translate(150, 140)">
                                    <!-- Line from Parent Bottom (300, 60) to Child Top (150, 120) -->
                                    <!-- dx = 300-150 = 150. dy = 60-140 = -80. Start at relative (150, -80) -->
                                    <line x1="150" y1="-80" x2="0" y2="-20" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow-green)" />
                                    <text x="80" y="-50" fill="#4ade80" font-size="12" font-weight="bold">Yes</text>
                                    
                                    <polygon points="0,-20 40,0 0,20 -40,0" fill="#222" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-size="14">b < c?</text>
                                </g>

                                <!-- L2 Right (No): a < c? -->
                                <g transform="translate(450, 140)">
                                    <!-- Line from Parent Bottom (300, 60) to Child Top (450, 120) -->
                                    <line x1="-150" y1="-80" x2="0" y2="-20" stroke="#f87171" stroke-width="2" marker-end="url(#arrow-red)" />
                                    <text x="-80" y="-50" fill="#f87171" font-size="12" font-weight="bold">No</text>

                                    <polygon points="0,-20 40,0 0,20 -40,0" fill="#222" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-size="14">a < c?</text>
                                </g>

                                <!-- === LEVEL 3 === -->

                                <!-- L3 Left-Left (Leaf): a < b < c -->
                                <g transform="translate(70, 240)">
                                    <!-- Line from L2 Left (150, 160) to here (70, 240) -->
                                    <line x1="80" y1="-80" x2="0" y2="-15" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrow-green)" />
                                    
                                    <rect x="-35" y="-15" width="70" height="30" rx="5" fill="#333" stroke="#facc15"/>
                                    <text y="5" text-anchor="middle" fill="#facc15" font-size="12" font-weight="bold">a < b < c</text>
                                </g>

                                <!-- L3 Left-Right (Node): a < c? -->
                                <g transform="translate(230, 240)">
                                    <!-- Line from L2 Left (150, 160) -->
                                    <line x1="-80" y1="-80" x2="0" y2="-20" stroke="#f87171" stroke-width="1.5" marker-end="url(#arrow-red)" />
                                    
                                    <polygon points="0,-20 30,0 0,20 -30,0" fill="#222" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-size="12">a < c?</text>
                                </g>

                                <!-- L3 Right-Left (Node): b < c? -->
                                <g transform="translate(370, 240)">
                                    <line x1="80" y1="-80" x2="0" y2="-20" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrow-green)" />
                                    
                                    <polygon points="0,-20 30,0 0,20 -30,0" fill="#222" stroke="white" stroke-width="2"/>
                                    <text y="5" text-anchor="middle" fill="white" font-size="12">b < c?</text>
                                </g>

                                <!-- L3 Right-Right (Leaf): c < b < a -->
                                <g transform="translate(530, 240)">
                                    <line x1="-80" y1="-80" x2="0" y2="-15" stroke="#f87171" stroke-width="1.5" marker-end="url(#arrow-red)" />
                                    
                                    <rect x="-35" y="-15" width="70" height="30" rx="5" fill="#333" stroke="#facc15"/>
                                    <text y="5" text-anchor="middle" fill="#facc15" font-size="12" font-weight="bold">c < b < a</text>
                                </g>

                                <!-- === LEVEL 4 (Final Leaves for complex cases) === -->
                                
                                <!-- From L3 Left-Right (230, 240) -->
                                <g transform="translate(190, 340)">
                                    <line x1="40" y1="-80" x2="0" y2="-15" stroke="#4ade80" stroke-width="1" />
                                    <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#333" stroke="#facc15"/>
                                    <text y="5" text-anchor="middle" fill="#facc15" font-size="10">a< c < b</text>
                                </g>
                                <g transform="translate(270, 340)">
                                    <line x1="-40" y1="-80" x2="0" y2="-15" stroke="#f87171" stroke-width="1" />
                                    <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#333" stroke="#facc15"/>
                                    <text y="5" text-anchor="middle" fill="#facc15" font-size="10">c < a < b</text>
                                </g>

                                <!-- From L3 Right-Left (370, 240) -->
                                <g transform="translate(330, 340)">
                                    <line x1="40" y1="-80" x2="0" y2="-15" stroke="#4ade80" stroke-width="1" />
                                    <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#333" stroke="#facc15"/>
                                    <text y="5" text-anchor="middle" fill="#facc15" font-size="10">b < c < a</text>
                                </g>
                                <g transform="translate(410, 340)">
                                    <line x1="-40" y1="-80" x2="0" y2="-15" stroke="#f87171" stroke-width="1" />
                                    <rect x="-25" y="-15" width="50" height="30" rx="5" fill="#333" stroke="#facc15"/>
                                    <text y="5" text-anchor="middle" fill="#facc15" font-size="10">b < a < c</text>
                                </g>

                            </svg>
                        </div>

                        <!-- Stats -->
                        <div class="flex gap-8 text-sm mt-4 border-t border-white/10 pt-4">
                            <div class="text-center">
                                <span class="block text-accent font-bold text-lg">6</span>
                                <span class="opacity-60">Leaves ($3!$)</span>
                            </div>
                            <div class="text-center">
                                <span class="block text-red-400 font-bold text-lg">3</span>
                                <span class="opacity-60">Height (Worst Case)</span>
                            </div>
                            <div class="text-center">
                                <span class="block text-yellow-400 font-bold text-lg">2.67</span>
                                <span class="opacity-60">Avg Depth</span>
                            </div>
                        </div>
                    </div>

                    <!-- THE PROOF -->
                    <div class="bg-white/5 p-6 rounded-xl border-l-4 border-yellow-500">
                        <h4 class="font-bold text-xl mb-4">Sorting Complexity Proof</h4>
                        <p class="text-sm opacity-80 mb-4">Since the tree MUST distinguish between every possible output, it must have a specific size.</p>
                        <ol class="list-decimal pl-5 space-y-3 text-sm font-mono">
                            <li>To sort <strong>n</strong> items, there are <strong>n!</strong> possible orderings (Leaves).</li>
                            <li>A binary tree with height <strong>h</strong> has at most <strong>2ʰ</strong> leaves.</li>
                            <li>Therefore: <span class="text-accent">2ʰ ≥ n!</span></li>
                            <li>Solving for h: <span class="text-accent">h ≥ log₂(n!)</span></li>
                            <li>Using Stirling's Approximation: <br>
                                <span class="text-accent text-lg">h ≥ n log n</span>
                            </li>
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
                <div class="space-y-10">
                    
                    <!-- 1. CONCEPT DESCRIPTION -->
                    <div class="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-xl">
                        <h4 class="font-bold text-blue-300 text-lg mb-2">What is Reduction?</h4>
                        <p class="text-sm opacity-90 leading-relaxed">
                            Problem Reduction is a technique used to measure the difficulty of a problem by relating it to another. 
                            If we say <strong>"Problem P reduces to Problem Q"</strong> ($P \\le_p Q$), we mean that we can transform any instance of $P$ into an instance of $Q$. 
                        </p>
                        <p class="text-sm opacity-90 mt-2 leading-relaxed">
                            This creates a powerful logical chain: If we have a fast solver for $Q$, we can use it to solve $P$ quickly. 
                            Conversely, if we know $P$ is hard (requires a lot of work), then $Q$ must also be hard, because solving $Q$ effectively solves $P$.
                        </p>
                    </div>

                    <!-- 2. VISUALIZATION: THE REDUCTION MACHINE -->
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center">
                        <h5 class="font-bold text-accent mb-6">The "Reduction Machine" Diagram</h5>
                        
                        <div class="relative w-full max-w-2xl h-[200px]">
                            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 600 200">
                                <defs>
                                    <marker id="arrow-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                                    </marker>
                                </defs>

                                <!-- Input P -->
                                <rect x="20" y="80" width="80" height="40" fill="#333" stroke="white" rx="5"/>
                                <text x="60" y="105" text-anchor="middle" fill="white" font-size="12">Input P</text>

                                <!-- Arrow -->
                                <line x1="100" y1="100" x2="140" y2="100" stroke="white" stroke-width="2" marker-end="url(#arrow-red)"/>

                                <!-- Transform Box -->
                                <rect x="140" y="60" width="100" height="80" fill="#2563eb" stroke="white" rx="5"/>
                                <text x="190" y="95" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Transform</text>
                                <text x="190" y="115" text-anchor="middle" fill="white" font-size="10">(function t)</text>

                                <!-- Arrow -->
                                <line x1="240" y1="100" x2="280" y2="100" stroke="white" stroke-width="2" marker-end="url(#arrow-red)"/>

                                <!-- Input Q -->
                                <rect x="280" y="80" width="80" height="40" fill="#333" stroke="white" rx="5"/>
                                <text x="320" y="105" text-anchor="middle" fill="white" font-size="12">Input Q</text>

                                <!-- Arrow -->
                                <line x1="360" y1="100" x2="400" y2="100" stroke="white" stroke-width="2" marker-end="url(#arrow-red)"/>

                                <!-- Solver Q -->
                                <rect x="400" y="50" width="100" height="100" fill="#16a34a" stroke="white" rx="5"/>
                                <text x="450" y="95" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Solver for Q</text>
                                <text x="450" y="115" text-anchor="middle" fill="white" font-size="10">(Black Box)</text>

                                <!-- Arrow -->
                                <line x1="500" y1="100" x2="540" y2="100" stroke="white" stroke-width="2" marker-end="url(#arrow-red)"/>

                                <!-- Output -->
                                <text x="570" y="105" text-anchor="middle" fill="#4ade80" font-size="14" font-weight="bold">Yes/No</text>

                            </svg>
                        </div>
                        <p class="text-xs text-center opacity-60 mt-2">
                            We build a solver for P by converting the input into something Q understands.
                        </p>
                    </div>

                    <!-- 3. EXAMPLE 1: EUCLIDEAN MST -->
                    <div class="bg-black/30 p-6 rounded-xl border border-white/10">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-purple-600 px-3 py-1 rounded text-sm font-bold">Example 1</div>
                            <h4 class="font-bold text-lg">Element Uniqueness $\\le_p$ Euclidean MST</h4>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div class="space-y-3 text-sm opacity-90">
                                <p><strong>Problem P (Uniqueness):</strong> Do any duplicates exist in a list of numbers $\{x_1, x_2, ...\}$?</p>
                                <p><strong>Problem Q (MST):</strong> Connect points with minimum wire length.</p>
                                <div class="p-3 bg-white/5 rounded border-l-2 border-purple-500">
                                    <strong>The Reduction:</strong>
                                    <ol class="list-decimal pl-5 mt-1 space-y-1">
                                        <li>Take list of numbers: $\{1, 5, 2, 5\}$.</li>
                                        <li>Map them to 2D points: $(1,0), (5,0), (2,0), (5,0)$.</li>
                                        <li>Ask MST to connect them.</li>
                                        <li>If MST uses an edge of <strong>length 0</strong>, duplicates exist!</li>
                                    </ol>
                                </div>
                                <p class="text-xs text-gray-400">Since Uniqueness requires $\\Omega(n \\log n)$, MST must also require at least $\\Omega(n \\log n)$.</p>
                            </div>

                            <!-- VISUAL -->
                            <div class="bg-white rounded-lg p-4 h-[180px] relative flex flex-col items-center justify-center">
                                <p class="absolute top-2 left-2 text-xs text-black font-bold">Visualizing the Points</p>
                                <svg width="100%" height="100%" viewBox="0 0 300 100">
                                    <!-- Number Line -->
                                    <line x1="20" y1="80" x2="280" y2="80" stroke="#ccc" stroke-width="2" />
                                    
                                    <!-- Points: 1, 2, 5, 5 -->
                                    <circle cx="50" cy="80" r="5" fill="#2563eb" /> <!-- 1 -->
                                    <text x="50" y="65" text-anchor="middle" font-size="10" fill="black">1</text>

                                    <circle cx="100" cy="80" r="5" fill="#2563eb" /> <!-- 2 -->
                                    <text x="100" y="65" text-anchor="middle" font-size="10" fill="black">2</text>

                                    <circle cx="200" cy="80" r="5" fill="#ef4444" /> <!-- 5 -->
                                    <text x="190" y="65" text-anchor="middle" font-size="10" fill="black">5</text>

                                    <circle cx="205" cy="80" r="5" fill="#ef4444" opacity="0.7" /> <!-- 5 (Duplicate) -->
                                    <text x="215" y="65" text-anchor="middle" font-size="10" fill="black">5</text>

                                    <!-- Edges -->
                                    <line x1="50" y1="80" x2="100" y2="80" stroke="#222" stroke-width="3" />
                                    <line x1="100" y1="80" x2="200" y2="80" stroke="#222" stroke-width="3" />
                                    <line x1="200" y1="80" x2="205" y2="80" stroke="#ef4444" stroke-width="4" />
                                    
                                    <text x="202" y="95" text-anchor="middle" font-size="10" fill="red" font-weight="bold">Dist=0</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- 4. EXAMPLE 2: SQUARING -->
                    <div class="bg-black/30 p-6 rounded-xl border border-white/10">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-yellow-600 px-3 py-1 rounded text-sm font-bold text-black">Example 2</div>
                            <h4 class="font-bold text-lg">Multiplication $\\le_p$ Squaring</h4>
                        </div>

                        <div class="space-y-4 text-sm opacity-90">
                            <p><strong>Goal:</strong> Multiply two numbers $x$ and $y$.</p>
                            <p><strong>Assumption:</strong> We have a magic machine that can only compute <strong>Squares</strong> ($z^2$).</p>
                            
                            <div class="bg-white/5 p-4 rounded text-center">
                                <p class="mb-2 text-gray-400">The Mathematical Reduction Formula:</p>
                                <span class="text-xl font-mono text-yellow-400">
                                    $x \\cdot y = \\frac{(x+y)^2 - (x-y)^2}{4}$
                                </span>
                            </div>

                            <p class="leading-relaxed">
                                To multiply $x$ and $y$, we just need to Add, Subtract, Divide by 4 (all easy/fast), and <strong>Square</strong> two numbers.
                                <br>
                                <strong>Conclusion:</strong> If Squaring is easy, Multiplication is easy. Conversely, since Multiplication is hard (basic assumption), Squaring must be at least as hard.
                            </p>
                        </div>
                    </div>

                </div>
            `
        }
    
    }
};