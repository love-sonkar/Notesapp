const input = document.querySelector(".input");
const btn = document.querySelector(".btn-submit");
const showdata = document.querySelector(".showdata");

let allnote;
let notes = localStorage.getItem("note");
if (notes === null) {
  allnote = [];
} else {
  allnote = JSON.parse(notes);
}

function Show() {
  showdata.innerHTML = "";
  allnote.map((note, index) => {
    let data = `     <div
    class="border my-2 p-2 list-group flex-sm-row align-items-md-start justify-content-between shadow-sm gap-2"
  >
    <div class="note">
      <p class="fs-3 m-0">${note.noteitem}</p>
    </div>
    <div class="btn p-0 py-sm-2 d-flex">
      <a class="btn btn-update btn-secondary btn-sm" href="#" onclick="noteupdate(${index})" role="button">Update</a>
      <a
        class="btn btn-delete btn-warning btn-sm text-light mx-2"
        href="#"
        role="button"
        onclick="notedelete(${index})"
        >Delete</a
      >
    </div>
  </div>`;
    showdata.innerHTML = showdata.innerHTML + data;
  });
}

Show();

btn.addEventListener("click", () => {
  if (!input.value == "") {
    let object = {
      noteitem: input.value,
    };
    allnote.push(object);
    localStorage.setItem("note", JSON.stringify(allnote));
    input.value = "";
    console.log(allnote);
    Show();
  }
});

let clear = document.querySelector(".btn-clear");
clear.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

function notedelete() {}
