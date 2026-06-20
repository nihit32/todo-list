const btn = document.querySelector('button')
const inp = document.querySelector('input')
const todoList = document.querySelector('.todo-list')

let edittask = null


btn.addEventListener('click', (e)=>{
    const value = inp.value;
    if(value.trim() === '') return

    if(edittask){
        edittask.textContent = value;

        btn.textContent='Add'
        inp.value = ''
        return
    }

    const li = document.createElement('div')
    const h3 = document.createElement('h3')
    const div2 = document.createElement('div')
    const edtbtn = document.createElement('button')
    const dltbtn = document.createElement('button')

        li.classList.add('li')
        div2.classList.add('div2')
        edtbtn.classList.add('edit')
        dltbtn.classList.add('dlt')
    
        li.append(h3 , div2)
        div2.append(edtbtn, dltbtn)
        todoList.append(li)

    h3.textContent = `${value}`
    edtbtn.textContent = 'Edit'
    dltbtn.textContent = 'Delete'

    dltbtn.addEventListener('click', ()=>{
        li.remove()
    })

    edtbtn.addEventListener('click',(e)=>{
         inp.value = h3.textContent
         btn.textContent = 'Update'
         edittask = h3
    })

    inp.value = ''
})



