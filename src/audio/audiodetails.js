const audioDetails = [
    {
        // img: "./src/audio/Pasoori.jpeg",
        img: "https://docs.google.com/uc?export=download&id=1wnFWq5-NGdLJZ7v_uRn5BQLjog54VWiv",
        // src: "./src/audio/Pasoori.mpeg",
        src: "https://docs.google.com/uc?export=download&id=1-kQ6lbYzk_oinqIe4hgL3UUx-Bz4Gcev",
        title: "Pasoori - coke studio",
        artist: "ali shethi , shae gill"
    },
    {
        // img: "./src/audio/Bhool Bhulaiyaa 2 Title Track.jpeg",
        img: "https://docs.google.com/uc?export=download&id=1xbpm2-mM_J0TaqNWThA7jStuuSHCt-Jr",
        // src: "./src/audio/Bhool Bhulaiyaa 2 Tilte Track.mpeg",
        src: "https://docs.google.com/uc?export=download&id=1Nqt5ncGH30g4Tnyjf2FTKHnlC5MyGfRN",
        title: "Bhool Bhulaiya 2 Title track",
        artist: "Neeraj Shridhar"
    },
    {
        // img: "./src/audio/Makhna.jpeg",
        img: "https://docs.google.com/uc?export=download&id=1FGFtFkLdEeanZKp7BXuckEhl4lTWqliw",
        // src: "./src/audio/Makhna.mpeg",
        src: "https://docs.google.com/uc?export=download&id=1sUvTtLaPJyAR_3IeV8hWemTwEROpSvAa",
        title: "Makhna",
        artist: "Yaseer Desai , Tanishk bagchi, Asees Kaur"
    },
    {
        // img: "./src/audio/Naina da kya kasoor.jpeg",
        img: "https://docs.google.com/uc?export=download&id=1d183VU5MiGgtE5i-vbogEvKd8iaIWOGt",
        // src: "./src/audio/Naina da kya kasoor.mpeg",
        src: "https://docs.google.com/uc?export=download&id=1l0A7xpJID1pZ84idbegTwlrOvS21qOcV",
        title: "Naina Da Kya Kasoor",
        artist: "Ayushman Khuranaa"
    },
    {
        // img: "./src/audio/Senorita.jpeg",
        img: "https://docs.google.com/uc?export=download&id=1stuBTdBBLiEVXXD1m6llVa9GkgrlDpm_",
        // src: "./src/audio/Senorita.mpeg",
        src: "https://docs.google.com/uc?export=download&id=18dDbjlTqa5AvWH_txvy4dkvWNzXJEBZ1",
        title: "Senorita Zindgi na milegi dubaraa",
        artist: "María del Mar Fernández"
    }
];

function miniPlayer(id) {
    const miniPlayer = document.getElementById("miniPlayer");
    miniPlayer.innerHTML = `
        <img src="` + audioDetails[id].img + `" alt="google">
        <div>
            <h1> ` + audioDetails[id].title + ` </h1>
            <h3> ` + audioDetails[id].artist + `</h3>
        </div>
        <audio src="` + audioDetails[id].src + `" controls autoplay></audio>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x" id="closeMiniPlayer" onclick="closeMiniPlayer()" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    `;
    document.getElementById("miniPlayer").appendChild(miniPlayer)
}

function playAudio(id) {
    document.getElementById("miniPlayer").innerHTML = null;
    document.getElementById("videoPlayer").innerHTML = null;
    miniPlayer(id);
}

function closeMiniPlayer() {
    document.getElementById("miniPlayer").innerHTML = null;
}