// Toggle Feature js code 

// console.log("Hello from script js file."
function toggleTheme() {
    document.body.classList.toggle('dark');
}

//Clock feature js code

function updateTime() {
    const timeEl = document.getElementById('time');
    const now = new Date();
    // console.log(now);
    // console.log(now.toLocaleTimeString());
    timeEl.textContent = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);

// const timeEl = document.getElementById('time');
// const now= new Date();
// // console.log(now);
// // console.log(now.toLocaleTimeString());
// timeEl.textContent= now.toLocaleTimeString(); 

// setInterval(function(){
//     // console.log("Hello World")
//     const timeEl = document.getElementById('time');
// const now= new Date();
// // console.log(now);
// // console.log(now.toLocaleTimeString());
// timeEl.textContent= now.toLocaleTimeString(); 
// },1000)

// 30922ad2854545198e2142311252004
//weather feature js code
// fetch("http://api.weatherapi.com/v1/current.json?key=30922ad2854545198e2142311252004&q=London")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         document.getElementById(
//             'weatherinfo').textContent = `${data.location.name} :${data.current.temp_c} °C:${data.current.condition.text}`;
//     })
//     .catch(err => {
//         document.getElementById("weatherinfo").textContent = "Give us a proper name of city.";
//     });

fetch("https://api.weatherapi.com/v1/current.json?key=30922ad2854545198e2142311252004&q=Dhaka")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        document.getElementById(
            'weatherinfo').textContent = `${data.location.name} :${data.current.temp_c} °C:${data.current.condition.text}`;
    })
    .catch(err => {
        document.getElementById("weatherinfo").textContent = "Give us a proper name of city.";
    });
// todo list js code
function addTodo() {
    const input = document.getElementById("todoinput");
    const list = document.getElementById("todolist");
    const li = document.createElement("li");
    // li.textContent='Hello World';
    li.addEventListener('click', () => li.remove());
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
}

//Save note feature js code

function savenote() {
    // console.log("Our save note is working.");

    const note = document.getElementById('notearea').value;
    // console.log(note);
    localStorage.setItem("note", note);
    displaynote();

}

function displaynote() {
    const note = localStorage.getItem("note");
    document.getElementById("notedisplay").textContent = note;
}
displaynote();

// contact form feature js code

document.getElementById("contactform").addEventListener("submit", (event) => {
    // console.log("Hello from form submission")
    event.preventDefault();
    const formdata = new FormData(event.target);
    // console.log(formdata);
    // console.log(...formdata.entries());
    // console.log([...formdata.entries()]);
    const entries = [...formdata.entries()].reduce((acc, [k, v]) => {
        acc[k] = v;
        return acc;
    }, {});
    console.log(entries);
    alert(`Thanks ${entries.name}, We received your message.`);
    event.target.reset();
});