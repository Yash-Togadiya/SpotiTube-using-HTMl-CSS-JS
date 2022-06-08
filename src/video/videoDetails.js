const videoDetails = [
    {
        img: "./src/video/Chaand Ne Kaho - Lyrical.jpg",
        src: "./src/video/Chaand Ne Kaho - Lyrical.mp4",
        title: "Chaand Ne Kaho - Lyrical",
        artist: "Sachin-Jigar, Jigardan"
    },
    {
        img: "./src/video/Mast Nazron Se.jpg",
        src: "./src/video/Mast Nazron Se.mp4",
        title: "Maast Nazron Se",
        artist: "Rochak K, ft Jubin Nautiyal, Nikita Dutta, Manoj M, Ashish P, Bhushan K"
    },
    {
        img: "./src/video/Ranjha.jpg",
        src: "./src/video/Ranjha.mp4",
        title: "Ranjha",
        artist: "B Praak, Jasleen Royal, Romy, Anvita Dutt"
    },
    {
        img: "./src/video/Maiyya Mainu.jpg",
        src: "./src/video/Maiyya Mainu.mp4",
        title: "Maiyya Mainu",
        artist: "Sachet-Parampara, Shellee, Gowtam T"
    },
    {
        img: "./src/video/Kaun Tujhe.jpg",
        src: "./src/video/Kaun Tujhe.mp4",
        title: "Kaun Tujhe",
        artist: "Arijit Singh"
    }
]

function videoPlayer(id) {
    const videoPlayer = document.getElementById("videoPlayer");

    videoPlayer.innerHTML =
        `<video width="500" height="300" controls autoplay>
            <source src="`+ videoDetails[id].src + `" type="video/mp4">
        </video>`;
}

function playVideo(id) {
    document.getElementById("videoPlayer").innerHTML = null;
    document.getElementById("miniPlayer").innerHTML = null;
    videoPlayer(id);
}