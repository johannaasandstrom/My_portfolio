document.addEventListener("DOMContentLoaded", () => {
    
    const codeLines = [
        '<span class="keyword">const</span> <span class="variable">johanna</span> = {',
        '  <span class="property">role</span>: <span class="string">"Fullstack Developer"</span>,',
        '  <span class="property">focus</span>: <span class="string">"UX & Clean Code"</span>,',
        '  <span class="property">stack</span>: [<span class="string">"React"</span>, <span class="string">"Node.js"</span>, <span class="string">"JavaScript"</span>],',
        '  <span class="property">status</span>: <span class="string">"Seeking LIA / Job"</span>,',
        '  <span class="property">passionateAbout</span>: <span class="keyword">function</span>() {',
        '    <span class="keyword">return</span> <span class="this">this</span>.focus + <span class="string">" & Accessibility"</span>;',
        '  }',
        '};'
    ];

    const target = document.getElementById('typed-code');
    
    if (target) {
        let lineIdx = 0;
        let charIdx = 0;
        let currentHtml = '';

        function typeWriter() {
            if (lineIdx < codeLines.length) {
                let fullLine = codeLines[lineIdx];

                if (fullLine.charAt(charIdx) === '<') {
                    let closeTagIdx = fullLine.indexOf('>', charIdx);
                    if (closeTagIdx !== -1) {
                        charIdx = closeTagIdx + 1;
                    }
                } else {
                    charIdx++;
                }

                let currentLinePart = fullLine.substring(0, charIdx);
                target.innerHTML = currentHtml + currentLinePart;

                if (charIdx >= fullLine.length) {
                    currentHtml += fullLine + '\n';
                    lineIdx++;
                    charIdx = 0;
                    setTimeout(typeWriter, 120);
                } else {
                    setTimeout(typeWriter, 35);
                }
            } else {
        
                setTimeout(() => {
                    target.classList.add('fade-out');
                    setTimeout(() => {
                        target.innerHTML = '';
                        currentHtml = '';
                        lineIdx = 0;
                        charIdx = 0;
                        target.classList.remove('fade-out');
                        typeWriter();
                    }, 400);
                }, 4000);
            }
        }

        setTimeout(typeWriter, 600);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.project-card');
    const scrollContainer = card.querySelector('.project-img-scroll-container');
    
    let maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    if (maxScroll <= 0) return;

    let direction = 1; 
    
    let autoScrollInterval = setInterval(() => {
        scrollContainer.scrollTop += direction * 1.2; 

        
        if (scrollContainer.scrollTop >= maxScroll) {
            direction = -1;
        } 
        
        else if (scrollContainer.scrollTop <= 0) {
            direction = 1;
        }
    }, 30);


    card.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    card.addEventListener('mouseleave', () => {
        
        autoScrollInterval = setInterval(() => {
            scrollContainer.scrollTop += direction * 1.2;
            if (scrollContainer.scrollTop >= maxScroll) direction = -1;
            else if (scrollContainer.scrollTop <= 0) direction = 1;
        }, 30);
    });
});