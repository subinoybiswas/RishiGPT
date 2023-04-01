const xhr = new XMLHttpRequest();
var resp = document.getElementsByClassName("res");
var query = document.getElementById("query").value;
console.log(query);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
    resp[0].innerHTML = xhr.responseText;
  } else {
    console.log("Request failed. Returned status: " + xhr.status);
  }
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
