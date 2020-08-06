// loop through the data object and insert a new project tile for each object
function addContent() {
    const showcase = document.getElementById('showcase');

    return data.map(data => {
        const render = 
        `<a href='${data.url}' target="_blank" class="project-tile">
        <div class="project-img"> <img src='${data.img}'/></div>
        <div class="tile-title">
        <p><span class="code"> &lt; </span> ${data.title}
        <span class="code">/&gt;</span>
        </p>
        </div>
        </a>`;
    
        showcase.insertAdjacentHTML("beforeend", render);
    })
}

// add Content to the webpage once it loads
window.onload = addContent;

// img, title, and url data for each project from the Javascript 30 course by
// wes bos
data = [
 {
    title: "Javascrupt Drum Kit",
    url: "01 - JavaScript Drum Kit/index.html", 
    img: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tribute.jpg",
     
 },
 {
    title: "", 
    url: "",
    img: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/fb4d41cfa483d3b572c75c8e5b9c791f/9875bb8e-b437-4bfe-97b6-1da7b97c1af5_rwc_339x0x2128x1667x2128.png",
 }
    // {
    //     title: "Javascript Drum Kit",
    //     url: "01 - JavaScript Drum Kit/index.html",
    //     img: "01 - JavaScript Drum Kit/image/01_port.jpg",
    // }
]
