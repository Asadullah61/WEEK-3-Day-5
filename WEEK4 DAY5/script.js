// =====================================
// Interactive Task Manager – Pure JavaScript
// =====================================

// Select the input field where user enters task text
const taskInput = document.getElementById("taskInput");

// Select the "Add Task" button
const addTaskBtn = document.getElementById("addTaskBtn");

// Select the task list (ul) where tasks will be added
const taskList = document.getElementById("taskList");

// =====================================
// Event Listener: Add Task Button
// =====================================

// This function runs when the user clicks the "Add Task" button
addTaskBtn.addEventListener("click", function () {

    // Get the text entered by the user
    const taskText = taskInput.value;

    // Validation: prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a task");
        return; // Stop execution if input is empty
    }

    // Create a new list item (li) for the task
    const li = document.createElement("li");

    // Set the task text inside the list item
    li.textContent = taskText;

    // =====================================
    // Mark Task as Completed
    // =====================================

    // When a task is clicked, toggle "completed" class
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // =====================================
    // Delete Task Button
    // =====================================

    // Create a delete button for each task
    const deleteBtn = document.createElement("button");

    // Set text for delete button
    deleteBtn.textContent = "X";

    // When delete button is clicked
    deleteBtn.addEventListener("click", function (event) {

        // Stop event from triggering parent click (mark complete)
        event.stopPropagation();

        // Remove the task from the list
        taskList.removeChild(li);
    });

    // Add delete button inside the task item
    li.appendChild(deleteBtn);

    // Add the task item to the task list
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = "";
});