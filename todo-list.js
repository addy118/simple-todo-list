let todoList = JSON.parse(localStorage.getItem('locList')) || []
renderTodoList()

const nameElement = document.querySelector('.js-todo-name')
const dateElement = document.querySelector('.js-todo-date')
const timeElement = document.querySelector('.js-todo-time')

document.querySelector('.js-add-todo')
  .addEventListener('click', () => addTodo())
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter')
        addTodo()
})

function renderTodoList() {
    let todoListHTML = ''
    
    // here, todoObj is an object which is a value ...forEach() syntax
    const updateList = (todoObj) => {
        const {name, dueDate, dueTime} = todoObj
        
        const html = `
            <div class="todo">${name || '&nbsp'}</div>
            <div class="todo">${dueDate || '&nbsp'}</div>
            <div class="todo">${dueTime || '&nbsp'}</div>
            <button class="delete js-delete">Delete</button>
          `
        todoListHTML += html
    }
    todoList.forEach(updateList)
    
    // after the below line the classes "delete" & "js-delete" of delete button will be added
    document.querySelector('.js-todo-output')
      .innerHTML = todoListHTML
    
    // now we can select the class "js-delete"
    document.querySelectorAll('.js-delete')
      .forEach((deleteButton, index) => {
          deleteButton.addEventListener('click', () => {
              todoList.splice(index, 1)
              updateLocList()
              renderTodoList()
          })
      })
    
    // if ()
}


function addTodo() {
    const name = nameElement.value
    const dueDate = dateElement.value
    const dueTime = timeElement.value
    console.log(new Date())
    
    todoList.push({name, dueDate, dueTime})
    updateLocList()
    nameElement.value = null
    renderTodoList()
}


// function deadTodo() {
//
// }


function updateLocList() {
    localStorage.setItem('locList', JSON.stringify(todoList))
}
