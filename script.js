let doctors = {
  Dentist:[
    {name:"Dr Ananya Patel",img:"images/dentist.jpg"},
  ],
  Dermatologist:[
    {name:"Dr Meena Roy",img:"images/dermatologist.jpg"},
  ],
  Cardiologist:[
    {name:"Dr Rahul Sharma",img:"images/cardiologist.jpg"},
  ],
  Neurologist:[
    {name:"Dr Vivek Rao",img:"images/neurologist.jpg"},
  ]
};

let selectedSlot="";

function toggleSettings(){
  let s=document.getElementById("settings");
  s.style.display = s.style.display==="block"?"none":"block";
}

function showDoctors(type){
  document.getElementById("title").innerText=type+" Specialists";
  let list=document.getElementById("doctorList");
  list.innerHTML="";

  window.onload = function(){
  document.getElementById("title").innerText = "Recommended Doctors";
  showDoctors("Cardiologist");
};

  doctors[type].forEach(d=>{
    list.innerHTML+=`
      <div class="doctor" onclick="openModal('${d.name}')">
        <img src="${d.img}">
        <div>
          <h4>${d.name}</h4>
          <p>${type}</p>
        </div>
      </div>
    `;
  });
}

function openModal(name){
  document.getElementById("modal").style.display="block";
  document.getElementById("docName").innerText=name;

  let today=new Date().toISOString().split("T")[0];
  document.getElementById("date").setAttribute("min",today);

  generateSlots();
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

function generateSlots(){
  let slots=document.getElementById("slots");
  slots.innerHTML="";

  let times=["09:00 AM","11:00 AM","01:00 PM","03:00 PM","05:00 PM"];

  times.forEach(t=>{
    slots.innerHTML+=`<div class="slot" onclick="selectSlot(this,'${t}')">${t}</div>`;
  });
}

function selectSlot(el,time){
  document.querySelectorAll(".slot").forEach(s=>s.classList.remove("active"));
  el.classList.add("active");
  selectedSlot=time;
}

function confirmAppointment(){
  let date=document.getElementById("date").value;

  if(!date || !selectedSlot){
    alert("Please select date and time");
    return;
  }

  document.getElementById("successPopup").style.display="block";
  document.getElementById("successText").innerText =
    "Your appointment is booked on " + date + " at " + selectedSlot;

  document.getElementById("modal").style.display="none";
}

function closeSuccess(){
  document.getElementById("successPopup").style.display="none";
  document.getElementById("title").innerText="Recommended Doctors";
  document.getElementById("doctorList").innerHTML="";
  window.scrollTo({top:0,behavior:"smooth"});
  selectedSlot="";
}

window.onload = function(){
  showDoctors("Dentist"); // default category
};