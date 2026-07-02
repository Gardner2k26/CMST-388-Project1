document.addEventListener('DOMContentLoaded', () => {
    /* PART 1: SETUP VARIABLES
    --------------------------------------------------
    */
    
    // TODO: Get the elements from the DOM and store them in variables. Include the following elements:
    // - introduction
    // - editIntroButton
    // - projectList
    // - skillList
    // - addSkillButton
    // - newSkillInput
    // - skillLevelInput
    // - contactForm
    // - themeToggleButton
    // - body

    const introduction = document.getElementById("introduction");
    const editIntroButton = document.getElementById("edit-intro");
    const projectList = document.getElementById("project-list");
    const skillList = document.getElementById("skill-list");
    const addSkillButton = document.getElementById("add-skill");
    const newSkillInput = document.getElementById("new-skill");
    const skillLevelInput = document.getElementById("skill-level");
    const contactForm = document.getElementById("contact-form");
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    /* PART 2: IMPLEMENT DYNAMIC PROJECTS AND SKILLS
    --------------------------------------------------
    */

    const projects = [
        // TODO: Add projects here by defining objects with title, description, and link properties
        // Example: { title: 'Project 1', description: 'Description of project 1', link: '#'}

    {
        title: "Project 1: JavaScript Selectors",
        description: "This project used JavaScript selectors and DOM manipulation to update page content and apply CSS classes.",
        link: "https://CMST388-UMGC-tgardner37.azurewebsites.net/Project1/index.html"
    },
    {
        title: "Project 2: Registration Form",
        description: "This project used JavaScript form validation to check user input before submitting the form.",
        link: "https://CMST388-UMGC-tgardner37.azurewebsites.net/Project2/index.html"
    },
    {
        title: "Project 3: Ticket Purchasing",
        description: "This project used JavaScript to validate ticket purchases, calculate totals, display errors, and run a countdown timer.",
        link: "https://CMST388-UMGC-tgardner37.azurewebsites.net/Project3/event_registration.html"
    }
];  

    const skills = [
        // TODO: Add skills here by defining objects with name and level properties

        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "DOM Manipulation", level: 70 },
        { name: "Form Validation", level: 75 }
    ];

    function displayProjects() {
        projectList.innerHTML = '';
        projects.forEach(project => {
            // TODO: Create a new div element assigned to a new variable called projectCard and assign a className of 'project-card'. Set innerHTML to display the project title, description, and link
            // Example: projectCard.innerHTML = `<h3>${project.title}</h3> ...`

            const projectCard = document.createElement("div");
            projectCard.className = "project-card";
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
        `;
            projectList.appendChild(projectCard);
        });
    }

    function displaySkills() {
        skillList.innerHTML = '';
        skills.forEach(skill => {
            // TODO: Create a new li element assigned to a new variable called skillItem. Set innerHTML to display the skill name and level
            
            const skillItem = document.createElement("li");
            skillItem.innerHTML = `
                <strong>${skill.name}</strong>
                <div style="background-color: #ddd; width: 100%; height: 20px; margin-bottom: 10px;">
                    <div style="background-color: #4caf50; width: ${skill.level}%; height: 20px; color: white; text-align: center;">
                        ${skill.level}%
                </div>
            </div>
            `;

            skillList.appendChild(skillItem);
        });
    }

    /* PART 3: IMPLEMENT INTRO TEXT EDITING
    --------------------------------------------------
    */

    editIntroButton.addEventListener('click', () => {
        // TODO: Prompt the user to enter a new introduction and update the introduction element with the new text

        const newIntro = prompt("Enter a new introduction:");

        if (newIntro !== null && newIntro.trim() !== "") {
            introduction.innerHTML = newIntro;
            localStorage.setItem("intro", newIntro);
        }
    });

    /* PART 4: IMPLEMENT SKILLS DISPLAY AND CONTACT FORM FUNCTIONALITY
    --------------------------------------------------
    */

    addSkillButton.addEventListener('click', () => {
        const newSkill = newSkillInput.value.trim();
        const skillLevel = parseInt(skillLevelInput.value, 10);
        if (newSkill && skillLevel >= 0 && skillLevel <= 100) {
            // TODO: 
            //   1. Add the new skill to the skills array and display the updated list of skills. 
            //   2. Clear the input fields after adding the skill

            skills.push({ name: newSkill, level: skillLevel });
            displaySkills();
            newSkillInput.value = "";
            skillLevelInput.value = "";

        } else {
            alert("Please enter a skill name and a skill level between 0 and 100.");
        }
            // TODO: Display an alert if the skill name is empty or the skill level is not between 0 and 100

    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // TODO: 
        //   1. Get the values from the form fields name, email, and message and store them in variables.
        //   2. Display an alert if any of the fields are empty. Otherwise, display a success message

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please complete all contact form fields.");
    } else {
            alert("Thank you for your message. Your form was submitted successfully.");
            contactForm.reset();
        }
    });

    /* PART 5: IMPLEMENT THEME TOGGLE
    --------------------------------------------------
    */

    themeToggleButton.addEventListener('click', () => {
        // TODO: Toggle the dark-mode class on the body and save the theme preference to local storage

        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    const savedIntro = localStorage.getItem("intro");

    if (savedIntro) {
        introduction.innerHTML = savedIntro;
    }

    // Do not edit any code below this line
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
    }

    applySavedTheme();
    displayProjects();
    displaySkills();
});
