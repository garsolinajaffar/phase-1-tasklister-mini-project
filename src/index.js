document.addEventListener("DOMContentLoaded", () => {
  // code to run when the DOM is loaded
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form submission behavior
    const task = input.value; // get the task from the input field
    if (task.trim() !== "") { // make sure the task is not empty or only whitespace
      const listItem = document.createElement("li");
      listItem.textContent = task;
      list.appendChild(listItem);
      input.value = "";
    }
  });
});
