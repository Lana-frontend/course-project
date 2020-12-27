const status = document.getElementById('status');

checkStatusSocet = async () => {
    const url = "http://138.68.105.222:3000/socet/";
    let response = await fetch(url);

    let statusResult = await response.json();
    if (!statusResult){
        status.innerHTML = 'active';
    } else {
        status.innerHTML = 'not active';
    }
};

window.onload = checkStatusSocet();

changeStatusSocet = async () => {
    const urlChange = "http://138.68.105.222:3000/socet/change/";
    let res = await fetch(urlChange, {
        method: 'POST',
    });
    checkStatusSocet();
};