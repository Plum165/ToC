// script.js

// 1. IMPORT MODULES
import { turingModule } from './tm.js';
import { limitModule } from './limit.js';
import { copingModule } from './cop.js';
import { probModule } from './red.js';

// NOTE: Once you have created limit.js, import it like this:
// import { limitModule } from './limit.js';

document.addEventListener('DOMContentLoaded', () => {

    
    
    
    

    // 3. CENTRAL REGISTRY
    const CURRICULUM = {
        tm: turingModule,
        lim: limitModule,
        cop: copingModule,
        prob: probModule
    };

    // =========================================================================
    // UI CONTROLLER (No changes needed here)
    // =========================================================================

    const topicMenu = document.getElementById('topic-menu');
    const topicRoot = document.getElementById('topic-root');
    const navTabs = document.querySelectorAll('.nav-tab');

    // Handle Main Category Navigation
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            navTabs.forEach(t => {
                t.classList.remove('bg-white/20', 'text-white', 'shadow-md');
                t.classList.add('btn-ghost');
            });

            tab.classList.remove('btn-ghost');
            tab.classList.add('bg-white/20', 'text-white', 'shadow-md');

            const categoryId = tab.getAttribute('data-category');
            renderSidebar(categoryId);
        });
    });

    // Render Sidebar with Subtopics
    function renderSidebar(categoryId) {
        const module = CURRICULUM[categoryId];
        
        topicMenu.innerHTML = '';
        topicMenu.style.opacity = '0';

        if (!module) return;

        setTimeout(() => {
            module.subtopics.forEach((sub, index) => {
                const btn = document.createElement('button');
                btn.className = `w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 flex items-center justify-between group`;
                btn.innerHTML = `
                    <span class="text-sm font-medium opacity-80 group-hover:opacity-100 group-hover:pl-1 transition-all">${sub.title}</span>
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                `;
                
                btn.addEventListener('click', () => {
                    Array.from(topicMenu.children).forEach(c => c.classList.remove('bg-accent/20', 'border-l-2', 'border-accent'));
                    btn.classList.add('bg-accent/20', 'border-l-2', 'border-accent');
                    renderContent(module.id, sub.id);
                });

                topicMenu.appendChild(btn);
            });
            topicMenu.style.opacity = '1';
        }, 150);
    }

    // Render Main Content
    function renderContent(moduleId, topicId) {
        const module = CURRICULUM[moduleId];
        const data = module.content[topicId];

        if (!data) return;

        topicRoot.style.opacity = '0';
        topicRoot.style.transform = 'translateY(10px)';

        setTimeout(() => {
            topicRoot.innerHTML = `
                <div class="animate-fadeIn">
                    <h2 class="text-3xl font-extrabold mb-6 border-b border-white/10 pb-4">${data.title}</h2>
                    <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
                        ${data.html}
                    </div>
                </div>
            `;
            topicRoot.style.opacity = '1';
            topicRoot.style.transform = 'translateY(0)';
        }, 200);
    }

    // Initialize
    const firstTab = document.querySelector('[data-category="tm"]');
    if (firstTab) firstTab.click();
});