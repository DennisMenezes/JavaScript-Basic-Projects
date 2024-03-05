const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-irAaBrTyJqiIRof5lED0yYqhqnvKYNlO6w&usqp=CAU',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&usqp=CAU',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];


const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById("person-img");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

/**
 * Displays the content of a review item on a webpage.
 */
function showContent(content) {
    // Get the current review item from the `reviews` array using the `currentItem` index.
    const item = reviews[content];

    // Set the `src` attribute of the `img` element to the `img` property of the review item.
    img.src = item.img;

    // Set the text content of the `name` element to the `name` property of the review item.
    name.textContent = item.name;

    // Set the text content of the `job` element to the `job` property of the review item.
    job.textContent = item.job;

    // Set the text content of the `info` element to the `text` property of the review item.
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length) {
        currentItem = 0
    }
    showContent(currentItem)
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showContent(currentItem)
});

randomBtn.addEventListener('click', function () {
    console.log('hello');

    currentItem = Math.floor(Math.random() * reviews.length);
    showContent(currentItem);
});