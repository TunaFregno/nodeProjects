const tasks = {
  tasks: [
    { text: "Grocery Shopping", completed: false },
    { text: "Clean the House", completed: true },
    { text: "Make Dinner", completed: false },
  ],
  getTasksToDo() {
    return this.tasks.filter((task) => !task.completed);
  },
};

console.log(tasks.getTasksToDo());
