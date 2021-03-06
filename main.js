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
        title: "Javascript Drum Kit",
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
    {
        title: "Sort Without Articles",
        url: "17 - Sort Without Articles/index.html",
        img: "src/projectImages/17_port.jpg",
    },
    {
        title: "Webcam Fun",
        url: "19 - Webcam Fun/index.html",
        img: "src/projectImages/19_port.jpg",
    },
    {
        title: "Speech Detection",
        url: "20 - Speech Detection/index.html",
        img: "src/projectImages/20_port.jpg",
    },
    {
        title: "Follow Along Link",
        url: "22 - Follow Along Link Highlighter/index.html",
        img: "src/projectImages/22_port.jpg",
    },
    {
        title: "Speech Detection",
        url: "23 - Speech Synthesis/index.html",
        img: "src/projectImages/23_port.jpg",
    },
    {
        title: "Sticky Nav",
        url: "24 - Sticky Nav/index.html",
        img: "src/projectImages/24_port.jpg",
    },
    {
        title: "Stripe Follow Along Nav",
        url: "26 - Stripe Follow Along Nav/index.html",
        img: "src/projectImages/26_port.jpg",
    },
    {
        title: "Click and Drag",
        url: "27 - Click and Drag/index.html",
        img: "src/projectImages/27_port.jpg",
    },
    {
        title: "Video Speed Controller",
        url: "28 - Video Speed Controller/index.html",
        img: "src/projectImages/28_port.jpg",
    },
    {
        title: "Countdown Timer",
        url: "29 - Countdown Timer/index.html",
        img: "src/projectImages/29_port.jpg",
    },
    {
        title: "Parallax Scroll",
        url: "31 - Parallax Scroll/index.html",
        img: "src/projectImages/31_port.jpg",
    },
    {
        title: "Hamburger Menu",
        url: "32 - Hamburger Menu/index.html",
        img: "src/projectImages/32_port.jpg",
    }
    // {
    //     title: "Whack a Mole",
    //     url: "30 - Whack a Mole/index.html",
    //     img: "src/projectImages/30_port.jpg",
    // },
]
