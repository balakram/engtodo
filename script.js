// scripts.js

// Data structure for the 60-day plan
const plan = [
    {
        week: 1,
        days: [
            {
                day: 1,
                tasks: [
                    "Learn 5 new vocabulary words and use them in sentences.",
                    "Study the present simple tense and complete practice exercises.",
                    "Watch a TED Talk on a topic of interest and write a summary.",
                    "Practice speaking by summarizing the TED Talk in your own words.",
                    "Focus on pronunciation: practice word stress in complex words."
                ]
            },
            {
                day: 2,
                tasks: [
                    "Learn 5 idioms related to time and use them in sentences.",
                    "Review the present continuous tense and practice exercises.",
                    "Listen to a podcast episode on a topic of choice and note key phrases.",
                    "Practice speaking by discussing the podcast topic with a friend.",
                    "Work on pronunciation: practice connected speech."
                ]
            },
            // Additional days for week 1...
        ]
    },
    {
        week: 2,
        days: [
            {
                day: 8,
                tasks: [
                    "Review vocabulary from week 1 and create a mind map.",
                    "Study the past simple tense and complete exercises.",
                    "Watch a news report and note down new vocabulary.",
                    "Practice speaking by giving your opinion on the news report.",
                    "Practice pronunciation: focus on intonation in questions."
                ]
            },
            // Additional days for week 2...
        ]
    },
    // Additional weeks...
];

// Function to generate the to-do list
function generateTodoList() {
    const weeksContainer = document.getElementById('weeks-container');

    plan.forEach(week => {
        // Create week container
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');
        const weekHeader = document.createElement('h2');
        weekHeader.textContent = `Week ${week.week}`;
        weekHeader.onclick = () => toggleTasks(weekDiv);
        weekDiv.appendChild(weekHeader);

        // Create day tasks container
        week.days.forEach(day => {
            const dayTasksDiv = document.createElement('div');
            dayTasksDiv.classList.add('day-tasks');

            // Create tasks for each day
            day.tasks.forEach(task => {
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('task');
                taskDiv.textContent = task;
                taskDiv.onclick = () => toggleComplete(taskDiv);
                dayTasksDiv.appendChild(taskDiv);
            });

            weekDiv.appendChild(dayTasksDiv);
        });

        weeksContainer.appendChild(weekDiv);
    });
}

// Function to toggle task visibility
function toggleTasks(weekDiv) {
    const taskList = weekDiv.querySelectorAll('.day-tasks');
    taskList.forEach(tasks => tasks.classList.toggle('show'));
}

// Function to mark tasks as complete
function toggleComplete(taskDiv) {
    taskDiv.classList.toggle('completed');
}

// Initialize the to-do list on page load
window.onload = generateTodoList;
