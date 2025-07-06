const monthEl = document.getElementById('month');
//day
const dayNameEl = document.getElementById('day');
//day-number
const dayNumEl = document.getElementById('day-number');
//year
const yearEl = document.getElementById('year');

const date = new Date();
const month = date.getMonth();
monthEl.innerHTML= date.toLocaleDateString("en" , {month:'long' });
yearEl.innerHTML = date.getFullYear();
dayNumEl.innerHTML = date.getDate();
dayNameEl.innerHTML = date.toLocaleDateString("en" ,{weekday : 'long'});
function changeBackgroundColor() {
    const colors = ['#CBA35C', '#2E5077', '#C4D9FF', '#3D3D3D', '#F3FF33', '#FBF5DD'];
    let currentColorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 5000);
}

changeBackgroundColor();
