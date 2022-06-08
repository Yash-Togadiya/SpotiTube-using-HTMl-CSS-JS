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
    `;
    document.getElementById("miniPlayer").appendChild(miniPlayer)
}

function playAudio(id) {
    document.getElementById("miniPlayer").innerHTML = null;
    document.getElementById("videoPlayer").innerHTML = null;
    miniPlayer(id);
}