const videoDetails = [
    {
        // https://drive.google.com/file/d/1DocZVxKODzM1glpBhnomHhlF57lfMqaa/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1DocZVxKODzM1glpBhnomHhlF57lfMqaa",
        // https://drive.google.com/file/d/1GBKXyExjez9A3E9_uiKeU6n3HxtqI0Uo/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1GBKXyExjez9A3E9_uiKeU6n3HxtqI0Uo",
        title: "Chaand Ne Kaho - Lyrical",
        artist: "Jigardan Gadhavi, Sachin–Jigar, Tanishkaa Sanghvi"
    },
    {
        // https://drive.google.com/file/d/1GB5ByS_gsV5l5O63NemyASbB_EtHYU7Y/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1GB5ByS_gsV5l5O63NemyASbB_EtHYU7Y",
        // https://drive.google.com/file/d/1ygw1eVeagKUoM5ExRiUp2oHqecSSfQBi/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1ygw1eVeagKUoM5ExRiUp2oHqecSSfQBi",
        title: "Mast Nazron Se",
        artist: "Jubin Naytiyal"
    },
    {
        // https://drive.google.com/file/d/1TY4DcqSwxKv4yUP_Pi6cAaL1NuLXUbbe/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1TY4DcqSwxKv4yUP_Pi6cAaL1NuLXUbbe",
        // https://drive.google.com/file/d/12kjONJEhhM_aXevTG8b5iXCnPH5dX6R-/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=12kjONJEhhM_aXevTG8b5iXCnPH5dX6R-",
        title: "Ranjha",
        artist: "B Praak, Anvita Dutt Guptan, Jasleen Royal, Romy"
    },
    {
        // https://drive.google.com/file/d/1jiPXfte9iq3Uewj-wnFnXsIsUG9DYnXf/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1jiPXfte9iq3Uewj-wnFnXsIsUG9DYnXf",
        // https://drive.google.com/file/d/18xy1ZnMyZv2TxQu73-91J3DV1TiCFs6t/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=18xy1ZnMyZv2TxQu73-91J3DV1TiCFs6t",
        title: "Maiyya Mainu",
        artist: "Sachet–Parampara"
    },
    {
        // https://drive.google.com/file/d/19SLMNGXVG-nHEuexsCVRZbFOaBBMEhix/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=19SLMNGXVG-nHEuexsCVRZbFOaBBMEhix",
        // https://drive.google.com/file/d/1Uga5SqCtdC1jvswIPw-F_U7YDqq_-zeY/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1Uga5SqCtdC1jvswIPw-F_U7YDqq_-zeY",
        title: "Kaun Tujhe",
        artist: "Arijit Singh"
    },
    {
        // https://drive.google.com/file/d/1e0fn5h0yvtoGwRtPgrbfdtPk5MlHWrzK/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1e0fn5h0yvtoGwRtPgrbfdtPk5MlHWrzK",
        // https://drive.google.com/file/d/1PB4Rkfp0AMBXj0cmlOIHFNDoEIfZvX4m/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1PB4Rkfp0AMBXj0cmlOIHFNDoEIfZvX4m",
        title: "Kusu Kusu",
        artist: "Zahrah S Khan, Dev Negi"
    },
    {
        // https://drive.google.com/file/d/1Kq1zmZv15NfLc651qnpVEwDktZ2l406h/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1Kq1zmZv15NfLc651qnpVEwDktZ2l406h",
        // https://drive.google.com/file/d/1IAPWnNJt4YSXSFh7IWskfmFP27MkqqrE/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1IAPWnNJt4YSXSFh7IWskfmFP27MkqqrE",
        title: "Blue Eyes",
        artist: "Yo Yo Honey Singh"
    },
    {
        // https://drive.google.com/file/d/1JwtHAQvSYR4kjrS1J9fGWsMZUMh9oCQC/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1JwtHAQvSYR4kjrS1J9fGWsMZUMh9oCQC",
        // https://drive.google.com/file/d/1Sqbkq7QGch8CZ5dfMrj6ZLuJOr32jEfs/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1Sqbkq7QGch8CZ5dfMrj6ZLuJOr32jEfs",
        title: "Baarish Ban Jaana",
        artist: "Stebin Ben, Payal Dev"
    },
    {
        // https://drive.google.com/file/d/1lZwMH70STny9KkWYMgAuxIo7_h-6uhCg/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1lZwMH70STny9KkWYMgAuxIo7_h-6uhCg",
        // https://drive.google.com/file/d/1VKVL43gywC-6dfGmITJjymsS-owVIjKt/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1VKVL43gywC-6dfGmITJjymsS-owVIjKt",
        title: "Badri Ki Dulhania - Title Track",
        artist: "Monali Thakur, Dev Negi, Ikka Singh, Neha Kakkar"
    },
    {
        // https://drive.google.com/file/d/12zHl_fDIckfjn7iwEgMPku5Jf0avvwbx/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=12zHl_fDIckfjn7iwEgMPku5Jf0avvwbx",
        // https://drive.google.com/file/d/1-FM444eKx10pijjj-tlL7Us6M_8RMCWw/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1-FM444eKx10pijjj-tlL7Us6M_8RMCWw",
        title: "Dheere Dheere Se Meri Zindagi",
        artist: "Yo Yo Honet Singh"
    },
    {
        // https://drive.google.com/file/d/14GKEK-4gfuVRapfEsWoQ4TJ27CQeG1G8/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=14GKEK-4gfuVRapfEsWoQ4TJ27CQeG1G8",
        // https://drive.google.com/file/d/1KFKbL4nPtRi4xlizdQYBqKiSD8IqdNLe/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1KFKbL4nPtRi4xlizdQYBqKiSD8IqdNLe",
        title: "Dhokha",
        artist: "Arijit Singh"
    },
    {
        // https://drive.google.com/file/d/1byC9Tk53R__ByVJglGvUPA0yR3qojKKl/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1byC9Tk53R__ByVJglGvUPA0yR3qojKKl",
        // https://drive.google.com/file/d/1B8l16OU81fwyHF3V0_SlnSjHsebkf4x9/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1B8l16OU81fwyHF3V0_SlnSjHsebkf4x9",
        title: "Dil Galti Kar Baitha Hai",
        artist: "Jubin Nautiyal"
    },
    {
        // https://drive.google.com/file/d/1m4MzVdwxl1IeFU0lY4Uk5hcuuVcX0imI/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1m4MzVdwxl1IeFU0lY4Uk5hcuuVcX0imI",
        // https://drive.google.com/file/d/1x6qLs7uLd2V1FP4uAxBEjzxrBSjHXAZf/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1x6qLs7uLd2V1FP4uAxBEjzxrBSjHXAZf",
        title: "Jugnu",
        artist: "Badshah"
    },
    {
        // https://drive.google.com/file/d/1NsYmI_5bGFRtxYNofwMG_ccw-uXZx7g_/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1NsYmI_5bGFRtxYNofwMG_ccw-uXZx7g_",
        // https://drive.google.com/file/d/1lgfSesfytjw7OseLBjai-dPaqon1GvDH/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1lgfSesfytjw7OseLBjai-dPaqon1GvDH",
        title: "Kaun Hain Voh",
        artist: "Kailash Kher, Mounima"
    },
    {
        // https://drive.google.com/file/d/1eDytmZaNnZcanFPwTpjeJJh5s4qgJXAb/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1eDytmZaNnZcanFPwTpjeJJh5s4qgJXAb",
        // https://drive.google.com/file/d/1drnJBdVrhWhaAqenKkCdYuk2CV3VDbhX/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1drnJBdVrhWhaAqenKkCdYuk2CV3VDbhX",
        title: "Khalibali",
        artist: "Shivam Pathak, Shail Hada"
    },
    {
        // https://drive.google.com/file/d/1-Gx6y_1UrO28VMpg6QaySyQ5E9g-oBeU/view?usp=sharing
        img: "https://docs.google.com/uc?export=download&id=1-Gx6y_1UrO28VMpg6QaySyQ5E9g-oBeU",
        // https://drive.google.com/file/d/1DKiswDpSIJl09syZd4dH1C1KioYVqPiG/view?usp=sharing
        src: "https://docs.google.com/uc?export=download&id=1DKiswDpSIJl09syZd4dH1C1KioYVqPiG",
        title: "Khariyat",
        artist: "Arijit Singh"
    },
    // {
    //     img: "https://docs.google.com/uc?export=download&id=",
    //     src: "https://docs.google.com/uc?export=download&id=",
    //     title: "",
    //     artist: ""
    // }
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