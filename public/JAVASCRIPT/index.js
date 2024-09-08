// Importing Modules
import { attribute } from "./Nav_and_Footer/utils/nav&footer_data.js";
import { companyInfo } from "./Nav_and_Footer/Nav&Footer.js";


// Targeting Elements
const animate = document.querySelectorAll(`.${attribute[0]}`);
const animate2 = document.querySelectorAll(`.${attribute[1]}`);
const imageContainer = document.querySelector('.Model-Gallery-Container');


// Changes Load Animations
for(let index = 0; index < animate.length; index++) {
    animate[index].classList.replace(`${attribute[0]}`, "HomeAnimateGroup1");
    animate2[index].classList.replace(`${attribute[1]}`, "HomeAnimateGroup2");
}


// Creating Dynamic Project Card
class myProjects {
    constructor(name, tags, image) {
        this.name = name;
        this.tags = tags;
        this.image = image;
    }
}


// Initalizing Project Values
const name = ['Ariel', 'USA Paddle', 'Blessing Bengeh', 'Keke'];
const tag = ['#Ariiaaann', '#SaloneFunnyBad', '#Sierra Leone', `#${companyInfo.CompanyName}`];
const image = new Array(4);
image[0] = `./IMG/Models/Female/Model_3.jpg`;
image[1] = `./IMG/Tiki.jpg`;
image[2] = `./IMG/Models/Female/Model_4.jpg`;
image[3] = `./IMG/Keke/Photo_3.jpg`;


// Creating Models
let myProjectsArray = [];
for(let i = 0; i < name.length; i++) {
    const project = new myProjects(name[i], tag[i], image[i]);
    myProjectsArray.push(project);
}


// Displaying Models
myProjectsArray.forEach(project => {
    imageContainer.innerHTML += `
        <div class="Gallery-Image data-tags="#all, ${project.tags}">
            <img src="${project.image}" alt="">
            <div class="content">
                <h1 class="img-name">${project.name}</h1>
                <span class="tags">${project.tags}</span>
            </div>
        </div>
    `
})