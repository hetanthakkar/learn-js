window.onload = function () {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
  document.getElementById('root').addEventListener('click', handleEditButtonClick);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function (colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.classList.add('tdNode');
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createEditButton() {
  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  return editButton;
}

function addTable() {
  const tableNode = document.createElement("table");

  for (let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let editButton = createEditButton();
    let row = createTRNode([col1, createTDNode(editButton)]);
    tableNode.appendChild(row);
  }

  document.getElementById("root").appendChild(tableNode);
}

function handleEditButtonClick(event) {
  if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Edit') {
    let tdNode = event.target.parentNode.previousElementSibling;
    let originalText = tdNode.firstChild.nodeValue;

    let inputNode = document.createElement("input");
    inputNode.type = "text";
    inputNode.value = originalText.trim();

    tdNode.replaceChild(inputNode, tdNode.firstChild);

    event.target.textContent = "Save";

    event.target.removeEventListener('click', handleSaveButtonClick);
    event.target.addEventListener('click', handleSaveButtonClick);
  }
}

function handleSaveButtonClick(event) {
  let tdNode = event.target.parentNode.previousElementSibling;
  let inputNode = tdNode.firstChild;

  let newValue = inputNode.value;

  tdNode.replaceChild(createTxtNode(newValue), inputNode);

  event.target.textContent = "Edit";
}
