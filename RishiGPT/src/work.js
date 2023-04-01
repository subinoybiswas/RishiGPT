const xhr = new XMLHttpRequest();
var resp = document.getElementsByClassName("txt");
var query = document.getElementById("query").value;
var loading = document.getElementsByClassName("loader");
loading[0].hidden = true;
console.log(query);
xhr.onloadstart = () => {
  loading[0].hidden = false;
  loading[0].scrollIntoView();
};
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
    resp[0].innerHTML = xhr.responseText;
  } else {
    console.log("Request failed. Returned status: " + xhr.status);
  }
};
xhr.onloadend = () => {
  loading[0].hidden = true;
};
function search() {
  query = document.getElementById("query").value;
  console.log("Working!");
  xhr.open("POST", "/userdata");
  xhr.setRequestHeader("Content-Type", "application/json");
  var data = JSON.stringify({ query: query });
  xhr.send(data);
  console.log(query);
}