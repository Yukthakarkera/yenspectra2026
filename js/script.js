// ==========================
// EVENT DATA
// ==========================

const eventDetails = {

    essay: {
        title: "Ink & Ideas",
        event: "Essay Writing",
        date: "03 August 2026",
        time: "2:30 - 3:30",
        venue: "to be decided",
        participation: "Individual",
        rules: [
            "Maximum 800 words",
            "Original content only",
            "Time Limit: 60 Minutes"
        ]
    },

    elocution: {
        title: "Voice of Expression",
        event: "Elocution",
        date: "03 August 2026",
        time: "2:30 - 3:30",
        venue: "to be decided",
        participation: "Individual",
        rules: [
            "Time Limit: 5 Minutes",
            "No offensive language",
            "Judges' decision is final"
        ]
    },

    debate: {
        title: "The Great Debate",
        event: "Debate",
        date: "04 August 2026",
        time: "2:30 - 3:30 PM",
        venue: "Conference Hall",
        participation: "Team (2 Members)",
        rules: [
            "Prepare for both sides",
            "Respect opponents",
            "Time Limit: 8 Minutes"
        ]
    },
    pencilsketch: {
        title: "Graphite Impressions",
        event: "Pencil Sketching",
        date: "04 August 2026",
        time: "2:30 PM",
        venue: "Conference Hall",
        participation: "1 Participant",
        rules: [
            "To be decided"
        ]
    },
    logo: {
        title: "Logo Lab",
        event: "Logo Designing",
        date: "05 August 2026",
        venue: "Conference Hall",
        participation: "Team (2 Members)",
        rules: [
            "to be decided"
        ]
    },
    photography: {
        title: "Through My Lens",
        event: "Photography",
        date: "05 August 2026",
        participation: "Team (2 Members)",
        rules: [
            "to be decided"
        ]
    },

    reelmaking: {
        title: "Reel It Right",
        event: "Reel Making",
        date: "05 August 2026",
        participation: "Team (2 Members)",
        rules: [
            "to be decided"
        ]
    },
    facepainting: {
        title: "Faces of Art",
        event: "Face Painting",
        date: "06 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "1 Participant",
        rules: [
            "To be decided"
        ]
    },
    solosinging: {
        title: "Solo Serenade",
        event: "Singing (Solo)",
        date: "06 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "1 Participant",
        rules: [
            "To be decided"
        ]
    },
    groupsinging: {
        title: "Harmony",
        event: "Singing (Group)",
        date: "06 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "1 Participant",
        rules: [
            "To be decided"
        ]
    },
    wow: {
        title: "Waste to Wonder",
        event: "Wealth Out of Waste",
        date: "07 August 2026",
        time: "10:00 - 11:00 AM",
        venue: "",
        participation: "1 Participant",
        rules: [
            "To be decided"
        ]
    },
    cdance: {
        title: "Nritya",
        event: "Classical Dance (Solo)",
        date: "07 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "1 Participant",
        rules: [
            "To be decided"
        ]
    },
    fdance: {
        title: "Rhythm of Roots",
        event: "Folk Dance (Group)",
        date: "07 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "1 Participant",
        rules: [
            "To be decided"
        ]
    }

};
let currentEvent = "";
const modal = document.getElementById("eventModal");

const closeBtn = document.querySelector(".close");

const buttons = document.querySelectorAll(".details-btn");

const modalTitle = document.getElementById("modalTitle");

const modalEvent = document.getElementById("modalEvent");

const modalRules = document.getElementById("modalRules");
buttons.forEach(button => {

    button.addEventListener("click", function(){

        const eventName = this.dataset.event;

        const selectedEvent = eventDetails[eventName];

        modalTitle.innerText = selectedEvent.title;

        modalEvent.innerText = selectedEvent.event;
        currentEvent = selectedEvent.event;
        
        modal.style.display = "flex";
        
        modalRules.innerHTML = "";

        selectedEvent.rules.forEach(rule => {

        const li = document.createElement("li");

        li.innerText = rule;

        modalRules.appendChild(li);

});


    });

});
closeBtn.onclick = function(){

    modal.style.display="none";

}
window.onclick=function(event){

    if(event.target==modal){

        modal.style.display="none";

    }

}

const successModal = document.getElementById("successModal");

// Registration Form Elements
const fullname = document.getElementById("fullname");
const regno = document.getElementById("regno");
const campusid = document.getElementById("campusid");
const department = document.getElementById("department");
const semester = document.getElementById("semester");
const lh = document.getElementById("lh");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");
const selectedEvent = document.getElementById("selectedEvent");
const registerModal = document.getElementById("registerModal");

const openRegister = document.getElementById("openRegister");

const closeRegister = document.querySelector(".close-register");

const selectedEventInput = document.getElementById("selectedEvent");
const modalDate = document.getElementById("modalDate");
const modalTime = document.getElementById("modalTime");
const modalVenue = document.getElementById("modalVenue");
const modalParticipation = document.getElementById("modalParticipation");

openRegister.addEventListener("click", function(){

    modal.style.display = "none";

    registerModal.style.display = "flex";

    selectedEventInput.value = currentEvent;

    showTeamMembers(currentEvent);

});

closeRegister.addEventListener("click",function(){

    registerModal.style.display="none";

}); 

window.onclick = function(event){

    if(event.target === modal){

        modal.style.display = "none";

    }

    if(event.target === registerModal){

        registerModal.style.display = "none";

    }

}


const teamSection = document.getElementById("teamSection");
const teamSizeSelect = document.getElementById("teamSize");
const teamSizeLabel = document.getElementById("teamSizeLabel");
const teamContainer = document.getElementById("teamContainer");

function loadTeamFields(eventName){

    teamSection.style.display = "none";
    teamSizeSelect.style.display = "none";
    teamSizeLabel.style.display = "none";
    teamContainer.innerHTML = "";

    // Events with exactly 2 members

    if(
        eventName === "Reel Making" ||
        eventName === "Face Painting" ||
        eventName === "Wealth Out of Waste"
    ){

        teamSection.style.display = "block";

        createMemberFields(2);

    }

    // Singing Group (3-5)

    else if(eventName === "Singing (Group)"){

        teamSection.style.display = "block";

        teamSizeLabel.style.display = "block";

        teamSizeSelect.style.display = "block";

        teamSizeSelect.innerHTML = `
            <option value="3">3 Members</option>
            <option value="4">4 Members</option>
            <option value="5">5 Members</option>
        `;

        createMemberFields(3);

    }

    // Folk Dance (4-7)

    else if(eventName === "Folk Dance (Group)"){

        teamSection.style.display = "block";

        teamSizeLabel.style.display = "block";

        teamSizeSelect.style.display = "block";

        teamSizeSelect.innerHTML = `
            <option value="4">4 Members</option>
            <option value="5">5 Members</option>
            <option value="6">6 Members</option>
            <option value="7">7 Members</option>
        `;

        createMemberFields(4);

    }

}

function createMemberFields(totalMembers){

    teamContainer.innerHTML = "";

    // Member 1 is the student filling the form.
    // So generate from Member 2 onwards.

    for(let i=2; i<=totalMembers; i++){

        teamContainer.innerHTML += `

        <div class="team-member">

            <h4>Member ${i}</h4>

            <input
                type="text"
                placeholder="Member ${i} Name"
                required>

            <input
                type="text"
                placeholder="Member ${i} Register Number"
                required>

        </div>

        `;

    }

}
teamSizeSelect.addEventListener("change",function(){

    createMemberFields(Number(this.value));

});

function showTeamMembers(eventName){

    const teamSection = document.getElementById("teamSection");
    const teamSize = document.getElementById("teamSize");
    const teamSizeLabel = document.getElementById("teamSizeLabel");
    const teamContainer = document.getElementById("teamContainer");

    teamSection.style.display = "none";
    teamSize.style.display = "none";
    teamSizeLabel.style.display = "none";
    teamContainer.innerHTML = "";

    let min = 0;
    let max = 0;

    switch(eventName){

        case "Reel Making":
        case "Face Painting":
        case "Wealth Out of Waste":
            min = 2;
            max = 2;
            break;

        case "Singing (Group)":
            min = 3;
            max = 5;
            break;

        case "Folk Dance (Group)":
            min = 4;
            max = 7;
            break;

        default:
            return;
    }

    teamSection.style.display = "block";

    teamSize.style.display = "block";
    teamSizeLabel.style.display = "block";

    teamSize.innerHTML = "";

    for(let i=min;i<=max;i++){

        teamSize.innerHTML += `<option value="${i}">${i}</option>`;

    }

    createTeamFields(teamSize.value);

    teamSize.onchange = function(){

        createTeamFields(this.value);

    };

}

function createTeamFields(total){

    const teamContainer = document.getElementById("teamContainer");

    teamContainer.innerHTML = "";

    for(let i=2;i<=total;i++){

        teamContainer.innerHTML += `

        <div class="team-member">

            <h4>Member ${i}</h4>

            <input type="text" placeholder="Full Name" required>

            <input type="text" placeholder="Register Number" required>

        </div>

        `;

    }

}


const SHEET_NAME = "Sheet1";


const scriptURL = "https://script.google.com/macros/s/AKfycbx8KYoSZC_yhp7-u_EO87nnz-cm3mFNxw3b0KnCblxCmBv-TRIslWFsB3QDgkovZuxP/exec";

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {

        fullName: fullname.value,

        registerNumber: regno.value,

        campusId: campusid.value,

        department: department.value,

        semester: semester.value,

        lh: lh.value,

        mobile: mobile.value,

        email: email.value,

        event: selectedEvent.value,

        teamMembers: ""

    };

    try{

        const response = await fetch(scriptURL,{

            method:"POST",

            body:JSON.stringify(data)

        });

        const result = await response.json();

        console.log(result);

registerModal.style.display = "none";
document.getElementById("successPopup").style.display = "flex";
registrationForm.reset();
    }

    catch(error){

        console.log(error);

    }

});


function closePopup(){
    document.getElementById("successPopup").style.display = "none";
}

function scrollToTop(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}