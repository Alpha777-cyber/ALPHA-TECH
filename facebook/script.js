var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")== "light"){
         localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }

}

if(localStorage.getItem("theme")== "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")== "dark"){
     darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme","light");
}


const pfp = document.getElementById('pfp')
const setMenu = document.getElementById('set-menu')

pfp.onclick = () => setMenu.classList.toggle('hidden')

const params = new URLSearchParams(window.location.search)
const firstName = params.get('firstname') || localStorage.getItem('userFirstName') || ''
const lastName = params.get('lastname') || localStorage.getItem('userLastName') || ''
const displayName = [firstName, lastName].filter(Boolean).join(' ') || 'MUNEZERO Alpha'

if (params.get('firstname') || params.get('lastname')) {
    localStorage.setItem('userFirstName', firstName)
    localStorage.setItem('userLastName', lastName)
}

document.querySelectorAll('[data-user-name]').forEach((el) => {
    el.textContent = displayName
})