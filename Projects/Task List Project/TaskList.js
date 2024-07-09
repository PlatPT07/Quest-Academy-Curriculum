var tasklist = [1, 2, 3]

function add(subject) {
    tasklist.push(subject);
}

function remove() {
let remove= tasklist.shift();

    console.log(remove);
}



add(4);
remove();

