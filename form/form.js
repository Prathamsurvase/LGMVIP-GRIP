
let Name = document.querySelector("#name");
emailid = document.querySelector("#email");
mobile = document.querySelector("#mno");
dob = document.querySelector("#birth");
Age = document.querySelector("#age");
add = document.querySelector("#address");
btn = document.querySelector("#submitbtn");
info = document.querySelector("#information");

btn.addEventListener('click', formdisplay);

function formdisplay(e) {
    e.preventDefault();
    let display = document.createElement("div");
    display.classList.add("fetchdata");




    let profilename = document.createElement("li");
    profilename.innerText = `Your Name is: ` + Name.value;
    display.appendChild(profilename);
  

    let profileemailid = document.createElement("li");
    profileemailid.innerText = `Your Email Id is: ` + emailid.value;
    display.appendChild(profileemailid);
    

    let profilemobileno = document.createElement("li");
    profilemobileno.innerText = `Your Mobile is: ` + mobile.value;
    display.appendChild(profilemobileno);
    

    let profiledob = document.createElement("li");
    profiledob.innerText = `Your Date of Birth is: ` + dob.value;
    display.appendChild(profiledob);
  

    let profileage = document.createElement("li");
    profileage.innerText = `Your Age is: ` + Age.value;
    display.appendChild(profileage);
   

    let profileaddress = document.createElement("li");
    profileaddress.innerText = `Your Address is: ` + add.value;
    display.appendChild(profileaddress);
    info.appendChild(display);

    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });
}
    