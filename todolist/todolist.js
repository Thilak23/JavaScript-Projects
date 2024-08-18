// const todoList = [];
//     function add(){
//       const inputElement = document.querySelector('.inp1');
//       const output = inputElement.value
//       todoList.push(output);
//       console.log(todoList);
//       inputElement.value = '';
//     } 

//     let todoList2 = [];
//     function add1(){
//       const inp = document.querySelector('.inp2');
//       const input2 = inp.value;
//       const result = document.querySelector('.res');
//       todoList2.push(input2);
//       let todohtml = ''
//       for(let i = 0; i < todoList2.length; i++){
//         const todo = todoList2[i];
//         todohtml += `<p class="p1">${todo}</p>`
//       }
//       result.innerHTML = todohtml;
//       inp.value = '';
//     }

let todoList3 = [];
function add2(){
  const inp3 = document.querySelector('.inp3');
  const input3 = inp3.value;
  const dates = document.querySelector('.inp4');
  const date = dates.value;
  todoList3.push({name: input3, date: date});
  todoHtml();
  inp3.value = '';
  dates.value = '';
}

function delTodo(index){
  todoList3.splice(index, 1);
  todoHtml();
}

function todoHtml(){
  let todohtml = '';
  for(let i = 0;i < todoList3.length; i++){
    const {name, date} = todoList3[i];
    todohtml += `<div class="todojs"><div class="toname">${name}</div> <div class="todate">${date}</div> <button class="tobtn" onclick="delTodo(${i})">Delete</button></div> <br>`
  }
  document.querySelector('.out').innerHTML = todohtml;
}