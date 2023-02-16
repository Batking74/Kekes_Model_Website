import { navStoreBlueprint } from "./Nav&Footer_Blueprint.mjs";

// Targeting Elements
const animate = document.querySelectorAll(".StoreAnimateGroup1");
const animate2 = document.querySelectorAll(".StoreAnimateGroup2");
const imageContainer = document.querySelector('.Model-Gallery-Container');
const openMenu = document.querySelector('#menu-open');
const sideNavigation = document.querySelector('.nav-container');

// Changes Load Animations
for(let i = 0; i < animate.length; i++) {
    animate[i].classList.replace("StoreAnimateGroup1", "HomeAnimateGroup1");
    animate2[i].classList.replace("StoreAnimateGroup2", "HomeAnimateGroup2");
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
    `;
})

// Footer
const footerForm = document.getElementById('footerForm');
const footerInput = document.getElementById('footerInput');
const footerBtn = document.getElementById('footerbtn');
const footerLabel = document.getElementById('footerLabel');
footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(footerInput.value === '') {
    }
    else {
        footerLabel.remove()
        footerInput.remove();
        footerBtn.remove();
        console.log('Thank You, you will recieve emails on new content!')
        footerResponse.innerHTML = `<svg class="Footer-Response-Icon" viewBox="0 0 24 24"><path fill="green" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>Thank You, you will recieve emails on new content!`
    }
})

document.addEventListener('DOMContentLoaded', () => {
    console.log(Date());
})

console.log(navStoreBlueprint);