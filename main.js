// loop through the data object and insert a new project tile for each object
function addContent() {
    const showcase = document.getElementById('showcase');

    return data.map(data => {
        const render = 
        `<a href="${data.url}" target="_blank" class="project-tile">
        <div class="project-img"> <img src="${data.img}" /> </div>
        <div class="tile-title">
        <p> ${data.title}
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
    },
    {
        title: "Ajax Type Ahead",
        url: "06 - Type Ahead/index.html",
        img: "src/projectImages/06_port.jpg",
    },
    {
        title: "Fun With HTML5 Canvas",
        url: "08 - Fun with HTML5 Canvas/index.html",
        img: "src/projectImages/08_port.jpg",
    },
    {
        title: "Hold Shift With Checkboxes",
        url: "10 - Hold Shift and Check Checkboxes/index.html",
        img: "src/projectImages/10_port.jpg",
    },
    {
        title: "Custom Video Player",
        url: "11 - Custom Video Player/index.html",
        img: "src/projectImages/11_port.jpg",
    },
    {
        title: "Key Sequence Detection",
        url: "12 - Key Sequence Detection/index.html",
        img: "src/projectImages/12_port.jpg",
    },
    {
        title: "Slide in on Scroll",
        url: "13 - Slide in on Scroll/index.html",
        img: "src/projectImages/13_port.jpg",
    },
    {
        title: "LocalStorage and Event Delegation",
        url: "15 - LocalStorage/index.html",
        img: "src/projectImages/15_port.jpg",
    },
    {
        title: "Mouse Move Shadow",
        url: "16 - Mouse Move Shadow/index.html",
        img: "src/projectImages/16_port.jpg",
    },
    // {
    //     title: "Slide in on Scroll",
    //     url: "13 - Slide in on Scroll/index.html",
    //     img: "src/projectImages/13_port.jpg",
    // },
]
