
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementByName("name").value.trim();
  const tel   = document.getElementByName("tel").value.trim();
  const email = document.getElementByName("email").value.trim();
  const date = document.getElementsByName("date").value.trim();
  const message=document.getElementsByName("message").value.trim();
  if (!(name && email && tel && date && message)) {
    alert("Kindly fill all the form!");
  } else {
    event.currentTarget.submit();
  }
});


document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementsByName("name").value = "";
    let tel= document.getElementByName("tel").value = "";
    let date=document.getElementByName("date").value = "";
    let language=document.getElementByName("language").value = "";
    let email=document.getElementByName("email").value = "";
    let message=document.getElementByName("message").value = "";
    fetch("/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name:name , tel:tel , date:date , language:language , email:email , message:message }),
    }) .then(function (response) {
        if (response.ok) {
           return response.json();
          } else {
            throw new Error("we are facing a problem with the server");
          }
        })
        .then(function(result) {
          if (result.status){
          document.getElementById("msg").innerHTML=
          "<span style='color:green'> Thank you.</span>";
          } else{
            throw new Error(result.err);
          }
        })
        .catch(function (error) {
          document.getElementById("msg").innerHTML=
          "<span style='color:red'>"+error+"</span>";
        });
    });
