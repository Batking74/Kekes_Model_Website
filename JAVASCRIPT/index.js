import { navStoreBlueprint, i } from "./Nav&Footer_Blueprint.mjs";

// Targeting Elements
const animate = document.querySelectorAll(`.${navStoreBlueprint[i.attrb][0]}`);
const animate2 = document.querySelectorAll(`.${navStoreBlueprint[i.attrb][1]}`);
const imageContainer = document.querySelector('.Model-Gallery-Container');
const openMenu = document.querySelector('#menu-open');
const sideNavigation = document.querySelector('.nav-container');

// Changes Load Animations
for(let index = 0; index < animate.length; index++) {
    animate[index].classList.replace(`${navStoreBlueprint[i.attrb][0]}`, "HomeAnimateGroup1");
    animate2[index].classList.replace(`${navStoreBlueprint[i.attrb][1]}`, "HomeAnimateGroup2");
}

// Toggle Hamburger menu
openMenu.addEventListener('click', (e) => {
    sideNavigation.classList.toggle('active');
});

// Creating Dynamic Project Card
class myProjects {
    constructor(name, tags, image) {
        this.name = name;
        this.tags = tags;
        this.image = image;
    }
}

// Creating Models
const item1 = new myProjects('Ariel', '#Ariiaaann', '/IMG/Models/Female/Model_3.jpg');
const item2 = new myProjects('USA Paddle', '#Sierra Leone', '/IMG/Tiki.jpg');
const item3 = new myProjects('Blessing Bengeh', '#Sierra Leone', '/IMG/Models/Female/Model_4.jpg');
const item4 = new myProjects('Keke', '#PalmerSudios', '/IMG/Keke/Photo_3.jpg');
const myProjectsArray = [item1, item2, item3, item4];

// Displaying Models
myProjectsArray.forEach(project => {
    imageContainer.innerHTML += `
        <div class="Gallery-Image data-tags="#all, ${project.tags}">
            <img src="${project.image}" alt="">
            <div class="content">
                <h1 class="image-name">${project.name}</h1>
                <span class="tags">${project.tags}</span>
            </div>
        </div>
    `
})

document.addEventListener('DOMContentLoaded', () => {
    console.log(Date());
})

console.log(navStoreBlueprint);