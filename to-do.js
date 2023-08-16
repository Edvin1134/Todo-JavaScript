const addForm = document.querySelector('.add-todo');
const todoList = document.querySelector('ul');
// console.log(addForm)


addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.todo.value.trim();
    console.log(todo)
    if (todo.length > 0) {
        const li = `
    <li>
        <span>${todo}</span>
        <i class="fa-solid fa-trash"></i>
    </li>`;

        todoList.innerHTML += li;
    }

})

//delete todo
// console.log(todoList.children);//children herna

todoList.addEventListener('click', e => {
    if (e.target.classList.contains('fa-trash')) {
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
    console.log(e.target.classList.contains('fa-trash'));
})