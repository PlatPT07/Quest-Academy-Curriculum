var tasklist = ["English", "Thai", "Chinese"];

//add
function add(subject) {
    tasklist.push(subject);
}

//remove
function remove() {
    let remove = tasklist.shift();
}

//display
function display_task() {
    if (tasklist.length == "")
        console.log("No Task");
    if (tasklist.length > 1)
        console.log("Task:");
    if (tasklist.length > 0)
        console.log("1. " + tasklist[0]);
    if (tasklist.length > 1)
        console.log("2. " + tasklist[1]);
    if (tasklist.length > 2)
        console.log("3. " + tasklist[2]);
    if (tasklist.length > 3)
        console.log("4. " + tasklist[3]);
    console.log("Total: " + tasklist.length);
}

add("Math");
remove();

display_task();