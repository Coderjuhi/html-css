const music = document.querySelector("audio")
const img = document.querySelector("img")
const play = document.getElementById("play")
const album = document.querySelector("album")
const title = document.querySelector("title")



const songs = [
    {
        album: "Tere Hawaale(From Laal Singh Chadha)",
        title: "Pritam, Arjit Singh, Shilpa Rao",
        img: "juhi\project\music\tere.jpg",
        
    },
    {
        album: "Phir aor kya chahaiye(From Zara Hatke Zara Bachke)",
        title: "Sachin-Jigar , Arjit Singh,",
        img: "juhi\project\music\download.jpeg ",

    },
];

const startingMusic = () => {
    music.src = "Tere Hawaale.mp3";
    music.play();
    console.log("Clickesed playing");
    img.classList.add("anime")

    play.classList.replace("fa-play", "fa-pause");

    play.addEventListener("click", () => {
        stoppingMusic()
    })
}

const stoppingMusic = () => {
    console.log("Clickesed Insider");
    music.src = "Tere Hawaale.mp3";
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime")
    play.addEventListener("click", () => {
        startingMusic()
    })


}

play.addEventListener("click", () => {
    startingMusic()


});

// music.play();
// play.classList.replace("fa-play", "fa-pause");
// img.classList.add("anime")
// stoppingMusic(
const loadSong = (songs) => {
    title.textContent = songs.title;
    album.textContent = songs.album;
    music.src = "music/" + songs.name + ".mp3"
    img.src = "music/" + songs.name + ".jpg"
};

loadSong(songs[1]);