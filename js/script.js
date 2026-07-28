// ==========================
// EVENT DATA
// ==========================

const eventDetails = {

    essay: {
        title: "Ink & Ideas",
        event: "Essay Writing",
        date: "3 August 2026",
        time: "2:30 - 3:30 PM",
        venue: "LH 27 - 2nd Floor",
        participation: "Individual",
        rules: [
            "Essays must be written only in English. ",
            "Duration: 60 minutes.",
            "The essay should be 900–1200 words.",
            "Sheets will be provided by the organizers. Participants should bring only a ballpoint pen.",
            "Mobile phones, smartwatches, books, notes, and other electronic devices are not permitted during the competition.",
            "The decision of the judging panel will be final and binding.",
        ]
    },

    elocution: {
        title: "Voice of Expression",
        event: "Elocution",
        date: "3 August 2026",
        time: "2:30 - 3:30 PM",
        venue: "LH 28 - 2nd Floor",
        participation: "Individual",
        rules: [
            "The competition shall be conducted in English. ",
            "The topic is: “Today’s Voice, Tomorrow’s Change!”",
            "Speaking time: 2+1 minutes.",
            "The speech must be original; use of notes or mobile phones is not permitted. ",
            "No offensive or derogatory remarks regarding caste, religion, race, gender or any individual/group.",
            "The judges' decision will be final and binding."
        ]
    },

    debate: {
        title: "The Great Debate",
        event: "Debate",
        date: "4 August 2026",
        time: "2:30 - 3:30 PM",
        venue: "LH 53 - 4th Floor",
        participation: "Team (2 Members)",
        rules: [
            "The debate topic will be announced on the spot. ",
            "Electronic gadgets, books, and written notes are strictly prohibited during the competition. ",
            "Each team will be allotted 3 minutes to present their arguments. ",
            "Participants must adhere to the allotted time. Exceeding the time limit may result in deduction of marks. ",
            "Any form of unfair practice or misconduct may lead to disqualification. ",
            "The decision of the judges shall be final and binding."
        ]
    },
    pencilsketch: {
        title: "Graphite Impressions",
        event: "Pencil Sketching",
        date: "4 August 2026",
        time: "2:30 - 3:30 PM",
        venue: "LH 83 - 6th Floor",
        participation: "Individual",
        rules: [
            "Duration: 60 minutes.",
            "The topic is: “International Youth Day”",
            "A3 Size Drawing sheet will be provided to all the participants. All other required materials such as pencil, eraser, charcoal must be brought by the participants.",
            "Draw a 4 side border on the sheet. It is mandatory for a professional presentation.",
            "The judges’ decision will be final and binding."
        ]
    },

    logo: {
        title: "Logo Lab",
        event: "Logo Designing",
        date: "5 August 2026",
        time: "2:30 - 3:30 PM",
        venue: "LH 84 - 6th Floor",
        participation: "Individual",
        rules: [
            "Participants should bring their own laptops.",
            "Logo can be designed in any digital platform (Offline).",
            "The logo must be original and created by the participant.",
            "Digital submission in PNG, JPEG, PDF, or AI/SVG format as specified.",
            "Internet access is not permitted during the competition unless specifically allowed by the organizers.",
            "Total Time: 60 minutes"
        ]
    },
    photography: {
        title: "Through My Lens",
        event: "Photography",
        date: "5 August 2026",
        time: "2:30 - 3:30 PM",
        venue: "Online Submission",
        participation: "Individual",
        rules: [
            "The competition will consist of only one round.  The photograph must be captured by the participant and must be relevant to the given theme.",
            "Only basic editing (such as adjustments to Brightness, Contrast, Saturation, Ambiance, Highlights, Shadows, Warmth) is permitted. AI-generated images, AI-assisted content, or any form of image manipulation that alters the original content will result in immediate disqualification.",
            "Offensive, inappropriate, obscene, or objectionable content is strictly prohibited.",
            "Participants must respect the privacy of others. Photographs should not violate any individual's privacy or intellectual property rights.",
            "Entries will be judged based on creativity, composition, originality, visual appeal, technical quality, and relevance to the theme.",
            "The judges' decision will be final and binding. "
        ]
    },

    reelmaking: {
        title: "Reel It Right",
        event: "Reel Making",
        date: "5 August 2026",
        time: "2:30 - 3:30 PM",
        venue: "Online Submission",
        participation: "Team (2 Members)",
        rules: [
            "Submissions are done Online. ",
            "Theme : 'Empowering Youth for a Better Future'",
            "Reel duration must be 30–60 seconds.",
            "Videos should be in vertical format (9:16) and submitted in MP4 format.",
            "Use of offensive, abusive, discriminatory, or inappropriate content is strictly prohibited. ",
            "The reel should not contain any watermark, logo, or promotional content of any organization.",
            "The decision of the judges will be final and binding."
        ]
    },
    facepainting: {
        title: "Faces of Art",
        event: "Face Painting",
        date: "6 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "2 participants (one artist and one model)",
        rules: [
            "Core Themes: Indian heritage, youth empowerment or national progress.",
            "Painting must be restricted to the face, neck, and hands only.",
            "Depictions of national symbols, flags, or spiritual leaders must be deeply respectful",
            "Designs must avoid political propaganda, vulgarity, or sensitive communal caricatures.",
            "Only skin-safe, non-toxic, cosmetic-grade water-based paints may be used.",
            "The decision of the judges will be final and binding."
        ]
    },
    solosinging: {
        title: "Solo Serenade",
        event: "Singing (Solo)",
        date: "6 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "Individual",
        rules: [
            "Each participant will get a maximum of *3 minutes",
            "Songs can be performed in *any language",
            "Tracks and musical instruments are not allowed.",
            "Vulgarity in lyrics or performance will lead to disqualification.",
            "The decision of the judges will be final and binding."
        ]
    },
    groupsinging: {
        title: "Harmony",
        event: "Singing (Group)",
        date: "6 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "3 - 5 Participants",
        rules: [
            "Language: Any regional language. ",
            "Film songs are not allowed. ",
            "Karaoke is not allowed.",
            "Duration: 3+1 minutes. ",
            "Judgment will be on the basis of quality of Singing, Selection of Song, Pronunciation, Coordination."
        ]
    },
    wow: {
        title: "Waste to Wonder",
        event: "Wealth Out of Waste",
        date: "7 August 2026",
        time: "10:00 - 11:00 AM",
        venue: "LH 95 - 7th Floor",
        participation: "Team (2 Members)",
        rules: [
            "Participants must bring all required materials for the event.",
            "Time Duration : 60 minutes. ",
            "The final product should be made entirely during the event time.",
            "theme “Youth Icon / Youth for Change”.Hint: Participants can create any simple useful item or a small creative piece with a meaningful youth-related message.",
            "Use of mobile phones is strictly prohibited during the event.",
            "Sharing or exchanging materials between teams is not allowed.",
            "Any kind of pre-prepared item is not permitted.",
            "The decision of the judges will be final and binding."
        ]
    },
    cdance: {
        title: "Nritya",
        event: "Classical Dance (Solo)",
        date: "7 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "1 Participant",
        rules: [
            "Only recognized Indian classical dance forms are permitted.",
            "Time Limit: Minimum 4 minutes, Maximum 5 minutes.",
            "Participants must wear appropriate traditional costumes suitable for the chosen classical dance form.",
            "Submit the audio track (MP3) in advance and carry a backup on a pen drive.",
            "Props are allowed but must be safe and managed by the participant.",
            "Fire, water, smoke, glass, or hazardous materials are strictly prohibited.",
            "Judges' decision will be final and binding."
        ]
    },
    fdance: {
        title: "Rhythm of Roots",
        event: "Folk Dance (Group)",
        date: "7 August 2026",
        time: "2:00 - 4:00 PM",
        venue: "YMK Auditorium",
        participation: "5 - 7 Participant",
        rules: [
            "Each team must consists of a minimum of 5 members and a maximum of 7 members.",
            "Performance must showcase an Indian Folk Dance. ",
            "Duration: 4+1 minutes. ",
            "Submit the edited MP3 audio track to the coordinator one day before the event. ",
            "Costumes should be traditional, decent, and appropriate; teams must arrange their own costumes, accessories, and makeup. ",
            "Relevant hand-held props are allowed; hazardous materials are strictly prohibited. ",
            "Judges' decision is final and binding."

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
const modalDate = document.getElementById("modalDate");
const modalTime = document.getElementById("modalTime");
const modalVenue = document.getElementById("modalVenue");
const modalParticipation = document.getElementById("modalParticipation");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        const eventName = this.dataset.event;

        const selectedEvent = eventDetails[eventName];

        modalTitle.innerText = selectedEvent.title;

        modalEvent.innerText = selectedEvent.event;
        modalDate.innerText = selectedEvent.date;
        modalTime.innerText = selectedEvent.time;
        modalVenue.innerText = selectedEvent.venue;
        modalParticipation.innerText = selectedEvent.participation;
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