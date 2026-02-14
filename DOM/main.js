const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


// append task
addBtn.addEventListener("click", function () {
  let nilai = taskInput.value;
  if (nilai === "") {
    return;
  }
  // create li
  let li = document.createElement("li");
  li.textContent = nilai;
  taskList.append(li);
  // create input-checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  li.append(input);
  // styling task
  li.style.display = "flex";
  li.style.flexDirection = "row";
  li.style.justifyContent = "space-between";
  taskInput.value = "";
  counterTotal()

  // check 
input.addEventListener("change", function(){
    counterTotal()
    li.classList.toggle("done")
})
});

// functcounter
const total = document.getElementById("total");
const done = document.getElementById("done");
const pending = document.getElementById("pending")

function counterTotal() {
  const totalCount = taskList.children.length;
  const doneCount = taskList.querySelectorAll("input:checked").length;
  const pendingCount = totalCount - doneCount;

  total.textContent = totalCount;
  done.textContent = doneCount;
  pending.textContent = pendingCount;
}


