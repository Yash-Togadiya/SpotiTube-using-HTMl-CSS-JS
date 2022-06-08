const audioDetails = [
    {
        img: "./src/audio/Pasoori.jpeg",
        src: "./src/audio/Pasoori.mpeg",
        title: "Pasoori - coke studio",
        artist: "ali shethi , shae gill"
    },
    {
        img: "./src/audio/Bhool Bhulaiyaa 2 Titlte Track.jpeg",
        src: "./src/audio/Bhool Bhulaiyaa 2 Titlte Track.mpeg",
        title: "Bhool Bhulaiya 2 Title track",
        artist: "Neeraj Shridhar"
    },
    {
        img: "./src/audio/Makhna.jpeg",
        src: "./src/audio/Makhna.mpeg",
        title: "Makhna",
        artist: "Yaseer Desai , Tanishk bagchi, Asees Kaur"
    },
    {
        img: "./src/audio/Naina da kya kasoor.jpeg",
        src: "./src/audio/Naina da kya kasoor.mpeg",
        title: "Naina Da Kya Kasoor",
        artist: "Ayushman Khuranaa"
    },
    {
        img: "./src/audio/Senorita.jpeg",
        src: "./src/audio/Senorita.mpeg",
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