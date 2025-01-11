// Progress Bar
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scroll / height) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
});

// Scroll-triggered Animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    },
    {
        root: null,
        threshold: 0.1,
    }
);

sections.forEach((section) => observer.observe(section));

// Meaning Logic
const showMeaning = document.getElementById('show-meaning');
const meaningContainer = document.getElementById('meaning-container');
showMeaning.addEventListener('click', () => {
    meaningContainer.classList.toggle('hidden');
});

// Animated Button Interactions
const buttons = document.querySelectorAll('.info-button, #feedbackForm button');
buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('button-hover');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('button-hover');
    });
});

// Navigation Click Effects
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({behavior: 'smooth'});
    });
});

// Interactive Cube Rotation (Example Feature for Visual Appeal)
const cubeContainer = document.querySelector('.cube-container');
if (cubeContainer) {
    let rotationX = 0;
    let rotationY = 0;

    cubeContainer.addEventListener('mousemove', (e) => {
        const rect = cubeContainer.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        rotationX = offsetY / 5;
        rotationY = offsetX / 5;

        const cube = cubeContainer.querySelector('.cube');
        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });

    cubeContainer.addEventListener('mouseleave', () => {
        const cube = cubeContainer.querySelector('.cube');
        cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
}

// Typing Animation Update
const typingElement = document.querySelector('.typing');
const typingText = typingElement.textContent.split('');
typingElement.textContent = '';

let index = 0;
const typingInterval = setInterval(() => {
    if (index<typingText.length) {
        typingElement.textContent += typingText[index];
        index++;
    } else {
        clearInterval(typingInterval);
    }
}, 100);

function navigateTo(page) {
    window.location.href = page;
}

const contents = {
    specific: `
        <h2>Specific Contexts</h2>
        <p>Explore how gamification enhances education and workplace dynamics:</p>
        <ul>
            <li><strong>Education - Reward systems, badges, and progress tracking in e-learning:</strong>
            <br>
            <ul>
            <li>Increased Motivation and Engagement</li>
            <li>Personalized Learning Experiences</li>
            <li>Immediate Feedback</li>
            <li>Fostering Collaboration and Healthy Competition</li>
            <li>Retention of Information</li>
</ul>
            </li>
            <li><strong>Corporate - Productivity tools with leaderboards and task gamification:</strong>
            <br>
            <ul>
            <li>Skill Development</li>
            <li>Goal Achievement</li>
            <li>Recognition and Rewards</li>
            <li>Improved Collaboration</li>
            <li>Enhanced Employee Engagement</li>
            <li>Behavioral Insights</li>
</ul>
            </li>
        </ul>
    `,
    broader: `
        <h2>Broader Contexts</h2>
        <p>Discover gamification's role in marketing, advertising, and social impact:</p>
        <p>Marketing:</p>
        <ul>
            <li><strong>Marketing - Loyalty programs and interactive campaigns:</strong>
            <br>
            <ul>
            <li>Boosting Customer Engagement</li>
            <li>Enhancing Brand Loyalty</li>
            <li>Driving User Participation</li>
            <li>Encouraging Social Sharing</li>
            <li>Data Collection and Personalization</li>
</ul>
            </li>
            <li><strong>Social Impact - Encouraging recycling, energy conservation, and healthy living:</strong>
            <br>
            <ul>
            <li>Promoting Healthy Habits</li>
            <li>Encouraging Environmental Responsibility</li>
            <li>Driving Civic Engagement</li>
            <li>Advocating for Social Causes</li>
            <li>Education for Change</li>
</ul>
            </li>
        </ul>
    `,
    improbable: `
        <h2>Improbable Contexts</h2>
        <p>Uncover unique uses of gamification in unexpected areas:</p>
        <ul>
            <li><strong>Healthcare - Patient recovery programs and physical therapy routines:</strong>
            <br>
            <ul>
            <li>Chronic Disease Management</li>
            <li>Mental Health Therapy</li>
            <li>Physical Rehabilitation</li>
</ul>
            </li>
            <li><strong>Urban Planning - Apps promoting civic participation in city improvement projects:</strong>
            <br>
            <ul>
            <li>Sustainable Commuting</li>
            <li>Civic Participation</li>
            <li>Parking Solutions</li>
</ul>
            </li>
            <li><strong>Agriculture and Sustainability - Educating farmers, promoting sustainable practices, and engaging consumers:</strong>
            <br>
            <ul>
            <li>Farm Management</li>
            <li>Consumer Engagement in Sustainability</li>
</ul>
            </li>
            <li><strong>Law Enforcement and Public Safety - Transforming how communities and law enforcement collaborate to improve safety and awareness:</strong>
            <br>
            <ul>
            <li>Crime Prevention</li>
            <li>Emergency Preparedness</li>
</ul>
            </li>
        </ul>
    `,
    impossible: `
        <h2>Impossible Contexts</h2>
        <p>Imagine gamification in extraordinary scenarios:</p>
        <ul>
            <li><strong>Space Exploration and Colonization - Space exploration, where maintaining morale, engagement, and efficiency is vital for success:</strong>
            <br>
            <ul>
            <li>Astronaut Training</li>
            <li>Public Participation in Space Missions</li>
            <li>Colonization Management</li>
</ul>
            </li>
            <li><strong>Disaster Response and Crisis Management - Improve global readiness and effectiveness in handling crises like natural disasters, pandemics, or humanitarian emergencies:</strong>
            <br>
            <ul>
            <li>Disaster Preparedness</li>
            <li>Volunteer Coordination</li>
            <li>Resource Distribution</li>
</ul>
            </li>
            <li><strong>Human Enhancement and Transhumanism - Facilitate the adoption of human enhancements:</strong>
            <br>
            <ul>
            <li>Biohacking Challenges</li>
            <li>Augmented Reality Fitness</li>
</ul>
            </li>
        </ul>
    `
};

function loadContent(type) {
    const dynamicSection = document.getElementById('dynamic-content');
    const contentArea = document.getElementById('content-area');
    const mainContent = document.querySelector('.main-content');

    if (contents[type]) {
        contentArea.innerHTML = contents[type];
        dynamicSection.classList.remove('hidden');
        mainContent.classList.add('hidden');
    } else {
        console.error('Invalid content type:', type);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const returnButton = document.getElementById('return-button');

    returnButton.addEventListener('click', () => {
        const dynamicSection = document.getElementById('dynamic-content');
        const mainContent = document.querySelector('.main-content');
        dynamicSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contentData = {
        specific: `<h2>Specific Contexts</h2><p>Explore how gamification enhances education and workplace dynamics.</p>`,
        broader: `<h2>Broader Contexts</h2><p>Discover gamification's role in marketing and advertising.</p>`,
        improbable: `<h2>Improbable Contexts</h2><p>Uncover unique uses of gamification in unexpected areas.</p>`,
        impossible: `<h2>Impossible Contexts</h2><p>Imagine gamification in extraordinary scenarios.</p>`,
    };

    const dynamicSection = document.getElementById('dynamic-content');
    const contentArea = document.getElementById('content-area');
    const mainContent = document.querySelector('.main-content');
    const returnButton = document.getElementById('return-button');

    if (!dynamicSection || !contentArea || !returnButton || !mainContent) {
        console.error('One or more required elements are missing.');
        return;
    }

    function loadContent(type) {
        if (contents[type]) {
            contentArea.innerHTML = contents[type];
            dynamicSection.classList.remove('hidden');
            mainContent.classList.add('hidden');
        } else {
            console.error('Invalid content type:', type);
        }
    }

    document.getElementById('specific-button')?.addEventListener('click', () => loadContent('specific'));
    document.getElementById('broader-button')?.addEventListener('click', () => loadContent('broader'));
    document.getElementById('improbable-button')?.addEventListener('click', () => loadContent('improbable'));
    document.getElementById('impossible-button')?.addEventListener('click', () => loadContent('impossible'));

    returnButton.addEventListener('click', () => {
        dynamicSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });
});

window.addEventListener('resize', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.overflowX = 'hidden';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const formsContent = document.getElementById('forms-content');
    const formsDynamicContent = document.getElementById('forms-dynamic-content');
    const returnButton = document.getElementById('forms-return');
    const infoButtons = document.querySelectorAll('.info-button');
    const formsSection = document.getElementById("forms");

    const contentMap = {
        gamify: `
            <header class="header">
    <div class="container">
        <h1>Gamify (Verb)</h1>
        <br>
    </div>
    <img src="images/gamify.jpg" alt="Gamify Illustration" class="feature-image">
</header>

<section class="section futuristic" id="gamify">
    <div class="container">
        <h2>What does Gamify mean?</h2>
        <p>Gamify means to apply game-design elements to non-game contexts.</p>
        <p>The verb "gamify" describes the act of applying game elements such as points, levels, challenges, and rewards to non-game settings. </p>
        <p>This can occur in education, marketing, productivity tools, or even social behavior.</p>
    </div>
    <div class="container">
        <h2>Examples</h2>
        <h3><strong>Gamifying Learning:</strong></h3>
        <p>An instructor might gamify a lesson plan by using quizzes and reward points for correct answers.</p>
        <h3><strong>Gamifying Work</strong></h3>
        <p>A corporate manager might gamify a task by introducing a leaderboard and badges to encourage employees to perform better.</p>
    </div>

</section>
<footer class="footer">
    <br>

</footer>
        `,
        gamified: `
            <header class="header">
    <div class="container">
        <h1>Gamified (Adjective)</h1>
        <br>
    </div>
    <img src="images/gamified.jpg" alt="Gamified Illustration" class="feature-image">
</header>

<section class="section futuristic" id="gamified">
    <div class="container">
        <h2>What does Gamified mean?</h2>
        <p>Describing something that has been enhanced or transformed with game-like elements.</p>
        <p>The adjective "gamified" refers to something that has been transformed by the process of gamification.</p>
        <p>It can describe experiences, tools, systems, or activities that now include game mechanics such as rewards, achievements, and competitive elements.</p>
    </div>
    <div class="container">
        <h2>Examples</h2>
        <h3><strong>Gamified Education:</strong></h3>
        <p>A gamified classroom would include progress tracking, digital badges for achievements, and quizzes with immediate feedback.</p>
        <h3><strong>Gamified App:</strong></h3>
        <p>A fitness app like gamified ones where users earn points or badges based on their activity, making the process more engaging and motivating.</p>
    </div>
</section>

<footer class="footer">
    <br>
</footer>
        `,
        gamification: `
            <header class="header">
    <div class="container">
        <h1>Gamification (Noun)</h1>
        <br>
    </div>
    <img src="images/gamification.jpg" alt="Gamification Illustration" class="feature-image">
</header>

<section class="section futuristic" id="gamification">
    <div class="container">
        <h2>What is Gamification?</h2>
        <p>The process of incorporating game-like elements into non-game contexts to motivate participation and engagement.</p>
        <p>"Gamification" refers to the broader practice or process itself—the act of integrating game mechanics into non-game activities.</p>
        <p>It can apply to any industry or sector, including education, business, healthcare, or marketing.</p>
    </div>
    <div class="container">
        <h2>Examples</h2>
        <h3><strong>Education:</strong></h3>
        <p>In schools, gamification might involve turning assignments into challenges where students can earn rewards and badges.</p>
        <h3><strong>Healthcare:</strong></h3>
        <p>Some healthcare apps use gamification by turning physical exercises into competitive challenges, motivating patients to complete their recovery routines.</p>
    </div>
</section>

<footer class="footer">
    <br>
</footer>
        `,
        gamifiable: `
        <header class="header">
    <div class="container">
        <h1>Gamifiable (Adjective)</h1>
        <br>
    </div>
    <img src="images/gamifiable.png" alt="Gamifiable Illustration" class="feature-image">
</header>

<section class="section futuristic" id="gamifiable">
    <div class="container">
        <h2>What does Gamifiable mean?</h2>
        <p>Describes a task, process, or activity that can be turned into a game or made engaging through game elements.</p>
        <p>The term "gamifiable" is used to describe tasks or activities that are suitable for gamification.</p>
        <p>If something is gamifiable, it means it can be enhanced with game mechanics such as goals, rewards, feedback loops, and challenges.</p>
    </div>
    <div class="container">
        <h2>Examples</h2>
        <h3><strong>Workplace Tasks:</strong></h3>
        <p>A sales process can be gamifiable if there are clear targets (e.g., sales goals), and achievements can be rewarded with badges or recognition.</p>
        <h3><strong>Education:</strong></h3>
        <p>A lesson plan is gamifiable if it includes interactive activities, quizzes, and points-based rewards to encourage student participation.</p>
    </div>
</section>

<footer class="footer">
    <br>
</footer>
            `,
    };

    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentKey = button.getAttribute('data-content');
            if (contentMap[contentKey]) {
                formsDynamicContent.innerHTML = contentMap[contentKey];
                formsContent.classList.remove('hidden');
            }
        });
    });

    returnButton.addEventListener('click', () => {
        formsContent.classList.add('hidden');
        formsSection.scrollIntoView({ behavior: "smooth" });
        formsDynamicContent.innerHTML = '';
    });
});

