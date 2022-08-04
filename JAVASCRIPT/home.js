// Creating Dynamic Project Card
const imageContainer = document.querySelector('.Model-Gallery-Container');
class myProjects {
    constructor(name, tags, image) {
        // New Instances
        this.name = name;
        this.tags = tags;
        this.image = image;
    }
}
// Instantiation
item1 = new myProjects('Fayn Ahnn?', '#Ariiaaann', '/IMG/OK.jpg');
item2 = new myProjects('USA Paddle', '#Salonefunnybad', '/IMG/Tiki.jpg');
item3 = new myProjects('Blessing Bengeh', '#Heyden Adama', '/IMG/Salone.jpg');
item4 = new myProjects('Keke', '#PalmerSudios', '/IMG/keke-palmer-skin-care-products.jpg');
myProjectsArray = [item1, item2, item3, item4];
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