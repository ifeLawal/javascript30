// loop through the data object and insert a new project tile for each object
function addContent() {
    const showcase = document.getElementById('showcase');

    return data.map(data => {
        const render = 
        `<a href="${data.url}" target="_blank" class="project-tile">
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
        url: "01 - Javascript Drum Kit/", 
        img: "src/projectImages/01_port.jpg",
        
    },
    {
        title: "CSS + JS Clock", 
        url: "02 - CSS + JS Clock/",
        img: "src/projectImages/02_port.jpg",
    },
    {
        title: "Playing with CSS Variables and JS",
        url: "03 - Playing with CSS Variables and JS/index.html",
        img: "src/projectImages/03_port.jpg",
    },
    {
        title: "Flex Panels Image Gallery",
        url: "05 - Flex Panels Image Gallery/index.html",
        img: "src/projectImages/05_port.jpg",
    }
]
