
const usersRow = document.getElementById("users");


function getData(){


  
  fetch("https://randomuser.me/api/?results=50")
  .then(response => response.json())
  .then(data =>{
    let result =data.results;

    result.forEach(element => {
    if(element.dob.age >=20  && element.dob.age <=50){
      
      usersRow.innerHTML += `
      <div class="col">
        <div class="card">
        <div class="name">
        <h4>${element.name.first}</h4>
        <h4>${element.name.last}</h4>
        </div>
        <ul>
          <li><span></span>Age: ${element.dob.age}</li>
          <li><span></span>Gender: ${element.gender}</li>
          <li><span></span>Email: ${element.email}</li>
        </ul>
        </div>
      </div>
    `
    }});
  });
}
  



getData();