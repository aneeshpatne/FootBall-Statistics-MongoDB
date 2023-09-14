//http-server -o --cors
api_url = "http://localhost:8080/user";

function loadData1(records = []) {
  console.log(records);
  table_data = ``;
  for (let i = 0; i < records.length; i++) {
    // console.log(records[i].name);
    table_data += `<tr>`;
    table_data += `<td>${i + 1}</td>`;
    
    table_data += `<td>${records[i].Player_Name}</td>`;
    table_data += `<td>${records[i].Type}</td>`;
    table_data += `<td>
    <a href='edit.html?id=${records[i]._id}'><button class="edit-row-btn"></button></a> | 
    <button class= 'delete-row-btn'onclick='deleteData("${records[i]._id}","${records[i].HomeTeam}");'></button>
    </td>`;
    table_data += `</tr>`;
  }
}
function loadData(records = []) {
  console.log(records);
  table_data = ``;
  for (let i = 0; i < records.length; i++) {
    // console.log(records[i].name);
    table_data += `<tr>`;
    table_data += `<td>${i + 1}</td>`;
    
    table_data += `<td>${records[i].Season}</td>`;
    table_data += `<td>${records[i].Date}</td>`;
    table_data += `<td>${records[i].HomeTeam}</td>`;
    table_data += `<td>${records[i].AwayTeam}</td>`;
    table_data += `<td>${records[i].FTHG}</td>`;
    table_data += `<td>${records[i].FTAG}</td>`;
    table_data += `<td>${records[i].FTR}</td>`;
    table_data += `<td>${records[i].HTHG}</td>`;
    table_data += `<td>${records[i].HTAG}</td>`;
    table_data += `<td>${records[i].HTR}</td>`;


    table_data += `<td>
    <a href='edit.html?id=${records[i]._id}'><button class="edit-row-btn"></button></a> | 
    <button class= 'delete-row-btn'onclick='deleteData("${records[i]._id}","${records[i].HomeTeam}");'></button>
    </td>`;
    table_data += `</tr>`;
  }

  document.getElementById("table_data").innerHTML = table_data;
}

var input = document.getElementById("myInput1");
input.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    e = document.getElementById("myInput1");
    console.log("HERE");
    fetch('http://localhost:8080/user/17',{
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body:JSON.stringify({payload:e.value}),  
    })
    //fetch(api_url)
    .then((response) => response.json())
    .then((search) => {loadData(search);
      console.log("here")

       console.log(search);
    
      //console.log(data);
      //location.reload()
    });
    
    //console.log('Enter');
      // Do work

  }
})
var input1 = document.getElementById("myInput2");
input1.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    e = document.getElementById("myInput2");
    console.log("HERE");
    fetch('http://localhost:8080/user/18',{
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body:JSON.stringify({payload:e.value}),  
    })
    //fetch(api_url)
    .then((response) => response.json())
    .then((search3) => {loadData(search3);
      console.log("here");
    console.log(search3);
    
      //console.log(data);
      //location.reload()
    });
    
    //console.log('Enter');
      // Do work

  }
})

function getData() {
  fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      loadData(data);
    });
}
function searchData(){
    e = document.getElementById("myInput");
    console.log("HERE");
    fetch('http://localhost:8080/user/1',{
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body:JSON.stringify({payload:e.value}),  
    })
    //fetch(api_url)
    .then((response) => response.json())
    .then((search) => {loadData(search);
      console.log("here")

       console.log(search);
    
      //console.log(data);
      //location.reload()
    });
  }
  function playerinfo(){
    e = document.getElementById("myInput");
    console.log("HERE");
    fetch('http://localhost:8080/user/20',{
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body:JSON.stringify({payload:e.value}),  
    })
    //fetch(api_url)
    .then((response) => response.json())
    .then((search) => {loadData(search);
      console.log("here")

       console.log(search);
    
      //console.log(data);
      //location.reload()
    });
  }
  function searchDataAway(){
    e = document.getElementById("myInput");
    console.log("HERE");
    fetch('http://localhost:8080/user/2',{
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body:JSON.stringify({payload:e.value}),  
    })
    .then((response) => response.json())
    .then((search1) => {loadData(search1);
      console.log("here")
      console.log(search1);
    });
  }
  count = 0;
  function sortDataHome(){
    e = document.getElementById("myInput");
    console.log("HERE");
    if (count ==0){
    count = count +1;
    fetch('http://localhost:8080/user/3',{
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body:JSON.stringify({payload:e.value}),  
    })
    .then((response) => response.json())
    .then((search1) => {loadData(search1);
      console.log("here")
      console.log(search1);
      console.log('if');
      
    });
  }
  else{
    count = 0;
    fetch('http://localhost:8080/user/4',{
      method: 'POST',
      headers : {'Content-Type': 'application/json'},
      body:JSON.stringify({payload:e.value}),  
    })
    .then((response) => response.json())
    .then((search1) => {loadData(search1);
      console.log("here")
      console.log(search1);
      console.log('else');
      
    });

  }
}

function sortDataAway(){
  e = document.getElementById("myInput");
  console.log("HERE");
  if (count ==0){
  count = count +1;
  fetch('http://localhost:8080/user/5',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('if');
    
  });
}
else{
  count = 0;
  fetch('http://localhost:8080/user/6',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('else');
    
  });

}
}
function sortDataFTHG(){
  e = document.getElementById("myInput");
  console.log("HERE");
  if (count ==0){
  count = count +1;
  fetch('http://localhost:8080/user/7',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('if');
    
  });
}
else{
  count = 0;
  fetch('http://localhost:8080/user/8',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('else');
    
  });

}
}
function sortDataFTAG(){
  e = document.getElementById("myInput");
  console.log("HERE");
  if (count ==0){
  count = count +1;
  fetch('http://localhost:8080/user/9',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('if');
    
  });
}
else{
  count = 0;
  fetch('http://localhost:8080/user/10',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('else');
    
  });

}
}
function sortDataHTHG(){
  e = document.getElementById("myInput");
  console.log("HERE");
  if (count ==0){
  count = count +1;
  fetch('http://localhost:8080/user/11',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('if');
    
  });
}
else{
  count = 0;
  fetch('http://localhost:8080/user/12',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('else');
    
  });

}
}
function sortDataHTAG(){
  e = document.getElementById("myInput");
  console.log("HERE");
  if (count ==0){
  count = count +1;
  fetch('http://localhost:8080/user/13',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('if');
    
  });
}
else{
  count = 0;
  fetch('http://localhost:8080/user/14',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('else');
    
  });

}
}
function sortDataSeason(){
  e = document.getElementById("myInput");
  console.log("HERE");
  if (count ==0){
  count = count +1;
  fetch('http://localhost:8080/user/15',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('if');
    
  });
}
else{
  count = 0;
  fetch('http://localhost:8080/user/16',{
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({payload:e.value}),  
  })
  .then((response) => response.json())
  .then((search1) => {loadData(search1);
    console.log("here")
    console.log(search1);
    console.log('else');
    
  });

}
}
function postData() {
  console.log(`function called`);
  //var id = document.getElementById("id").value;
  var Season = document.getElementById("Season").value;
  var Date = document.getElementById("Date").value;
  var HomeTeam = document.getElementById("HomeTeam").value;
  var AwayTeam = document.getElementById("AwayTeam").value;
  var FTHG = document.getElementById("FTHG").value;
  var FTAG = document.getElementById("FTAG").value;
  var FTR = document.getElementById("FTR").value;
  var HTHG = document.getElementById("HTHG").value;
  var HTAG = document.getElementById("HTAG").value;
  var HTR = document.getElementById("HTR").value;

  data = { Season: Season, Date: Date, HomeTeam: HomeTeam,AwayTeam:AwayTeam, FTHG:FTHG,FTAG:FTAG,FTR:FTR,HTHG:HTHG,HTAG:HTAG,HTR:HTR};
  console.log(data);

  fetch(api_url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = "index.html";
    });
}

function deleteData(id, HomeTeam) {
  // alert(`name: ${name}, id: ${id}`);
  user_input = confirm(`Are you sure you want to delete ${id} , ${HomeTeam} record?`);
  if (user_input) {
    fetch(api_url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'id': id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "index.html";
      });
  }
}

function getDataById(id) {
  // alert(`${api_url}/${id}`);
  fetch(`${api_url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("id").value = data[0]._id;
      document.getElementById("Season").value = data[0].Season;
      document.getElementById("Date").value = data[0].Date;
      document.getElementById("HomeTeam").value = data[0].HomeTeam;
      document.getElementById("AwayTeam").value = data[0].AwayTeam;
      document.getElementById("FTHG").value = data[0].FTHG;
      document.getElementById("FTAG").value = data[0].FTAG;
      document.getElementById("FTR").value = data[0].FTR;
      document.getElementById("HTHG").value = data[0].HTHG;
      document.getElementById("HTAG").value = data[0].HTAG;
      document.getElementById("HTR").value = data[0].HTR;
    });
}

function putData() {
  var id = document.getElementById("id").value;
  var Season = document.getElementById("Season").value;
  var Date = document.getElementById("Date").value;
  var HomeTeam = document.getElementById("HomeTeam").value;
  var AwayTeam = document.getElementById("AwayTeam").value;
  var FTHG = document.getElementById("FTHG").value;
  var FTAG = document.getElementById("FTAG").value;
  var FTR = document.getElementById("FTR").value;
  var HTHG = document.getElementById("HTHG").value;
  var HTAG = document.getElementById("HTAG").value;
  var HTR = document.getElementById("HTR").value;

  data = { 'id':id,Season: Season, Date: Date, HomeTeam: HomeTeam,AwayTeam:AwayTeam,FTR:FTR,FTHG:FTHG,FTAG:FTAG,FTR:FTR,HTHG:HTHG,HTAG:HTAG,HTR:HTR};

//   console.log(data);

  fetch(api_url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.table(data);
      window.location.href = "index.html";
    });
}