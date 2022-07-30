// let d=document.createElement("div");
// d.classList.add("two");

// let h=document.createElement("h1");
// h.append("New");

// d.append(h);

// document.querySelector(".one").append(d);

// project js 

let musics=[

    {
        id:1,
        name:"Kala Shah Kala",
        artist:"Dev Negi",
        audioSrc:"audios/Kala shah kala.mpeg",
        imageSrc:"images/Kala shah kala.jpeg"
    },
    {
        id:2,
        name:"Naah goriye",
        artist:"Harrdy Sandhu",
        audioSrc:"audios/Naah goriye.mpeg",
        imageSrc:"images/Naah goriye.jpeg"
    },
    {
        id:3,
        name:"Suroor",
        artist:"Bilal Saeed and Neha Kakkar",
        audioSrc:"audios/Suroor.mpeg",
        imageSrc:"images/Suroor.jpeg"
    },
    {
        id:4,
        name:"Tum hi aana",
        artist:"Jubin Nautiyal",
        audioSrc:"audios/Tum hi aana.MPEG",
        imageSrc:"images/Tum hi aana.jpeg"
    },
    {
        id:5,
        name:"Sanu ek pal chain",
        artist:"Rahat Fateh Ali Khan",
        audioSrc:"audios/Saanu ek pal chain.mpeg",
        imageSrc:"images/Saanu ek pal chain.jpeg"
    },
    {
        id:6,
        name:"Namo Namo",
        artist:"Amit Trivedi",
        audioSrc:"audios/Namo Namo - Lyrical _ Kedarnath _ Sushant Rajput _ Sara Ali Khan _ Amit Trivedi _ Amitabh B.mp3",
        imageSrc:"images/namo namo.webp"
    },

]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}




function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}