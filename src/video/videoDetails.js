const videoDetails = [
    {
        // img: "./src/video/Chaand Ne Kaho - Lyrical.jpg",
        img: "https://docs.google.com/uc?export=download&id=1ASbkih_bVhA5C2Rvcn3Vozeyn4eyvARx",
        // src: "./src/video/Chaand Ne Kaho - Lyrical.mp4",
        src: "https://docs.google.com/uc?export=download&id=1Y5As4Xot-byjU9cNhpqSD8pPYGe9zzfX",
        title: "Chaand Ne Kaho - Lyrical",
        artist: "Sachin-Jigar, Jigardan"
    },
    {
        // img: "./src/video/Mast Nazron Se.jpg",
        img: "https://docs.google.com/uc?export=download&id=1ECwNup0UtlkbcDi_d8YXyd8xr56UNnkj",
        // src: "./src/video/Mast Nazron Se.mp4",
        src: "https://docs.google.com/uc?export=download&id=1NVmLeAb5iQEC8uanCFhGBbBYEgupSTq0",
        title: "Maast Nazron Se",
        artist: "Rochak K, ft Jubin Nautiyal, Nikita Dutta, Manoj M, Ashish P, Bhushan K"
    },
    {
        // img: "./src/video/Ranjha.jpg",
        img: "https://docs.google.com/uc?export=download&id=1L4H8rTqoTmHAVNCS3dQ-Te46itjeqO0K",
        // src: "./src/video/Ranjha.mp4",
        src: "https://docs.google.com/uc?export=download&id=141zAuWV3vsSi-pMY05kqfeJDD4SbQ8TM",
        title: "Ranjha",
        artist: "B Praak, Jasleen Royal, Romy, Anvita Dutt"
    },
    {
        // img: "./src/video/Maiyya Mainu.jpg",
        img: "https://docs.google.com/uc?export=download&id=1StPeeJZ0Df0OKDYsVGSGVJh0hqpmUk7P",
        // src: "./src/video/Maiyya Mainu.mp4",
        src: "https://docs.google.com/uc?export=download&id=19sJLhneh5QBzH8RiJ4JF6sljk6nnPQN0",
        title: "Maiyya Mainu",
        artist: "Sachet-Parampara, Shellee, Gowtam T"
    },
    {
        // img: "./src/video/Kaun Tujhe.jpg",
        img: "https://docs.google.com/uc?export=download&id=1YhNftg6sYX5OVFGKX81qcGQUpeJw5Pu6",
        // src: "./src/video/Kaun Tujhe.mp4",
        src: "https://docs.google.com/uc?export=download&id=1Lr4nFBNbHVwndfAziiEMr9SvbJP43fDH",
        title: "Kaun Tujhe",
        artist: "Arijit Singh"
    }
]

function videoPlayer(id) {
    const videoPlayer = document.getElementById("videoPlayer");

    videoPlayer.innerHTML = `
        <video width="500" height="300" controls autoplay>
            <source src="`+ videoDetails[id].src + `" type="video/mp4">
        </video>
        <svg xmlns="http://www.w3.org/2000/svg" style="color: white;" fill="currentColor" class="bi bi-x" id="closeVideoPlayer" onclick="closeVideoPlayer()" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    `;
}

function playVideo(id) {
    document.getElementById("videoPlayer").innerHTML = null;
    document.getElementById("miniPlayer").innerHTML = null;
    videoPlayer(id);
}


function closeVideoPlayer() {
    document.getElementById("videoPlayer").innerHTML = null;
}