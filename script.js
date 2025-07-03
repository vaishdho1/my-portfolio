document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const container = document.querySelector('.header-bar');
  
    menuToggle.addEventListener('click', function () {
      container.classList.toggle('expanded');
    });
  });
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      // Remove "active" class from all links and add it to the clicked link
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');

      // Hide all sections inside <main>
      const sections = document.querySelectorAll('main > div');
      sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('fade-in'); // Remove any old fade class
      });

      // Display only the targeted section based on the href attribute
      const targetId = this.getAttribute('href').substring(1); // removes the '#' character
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
        // Trigger reflow before adding fade-in class
        if (targetId !== 'home') {
            // Force reflow before adding the fade-in class to restart animation
            void targetSection.offsetWidth;
            targetSection.classList.add('fade-in');
          }
      }
    });
  });

//commented this
//document.addEventListener('DOMContentLoaded', function() {
//    const navLinks = document.querySelectorAll('.nav-link');
//    console.log(navLinks)
//    navLinks.forEach(item => {
//    item.addEventListener('click', function(){
//        navLinks.forEach(nav => nav.classList.remove('active'));
//        this.classList.add('active');
//        })
//    })
//})
// --- NEW: Code for the clickable blog titles (with Read More) ---
const blogTitleLinks = document.querySelectorAll('.blog-title-link');

blogTitleLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents link from navigating

        // Find the parent .blog-post-content container
        const contentContainer = this.nextElementSibling;
        
        // Find the preview and full content within that container
        const preview = contentContainer.querySelector('.blog-preview');
        const fullContent = contentContainer.querySelector('.blog-full-content');

        // Check if the full content is currently hidden
        if (fullContent.style.display === 'none' || fullContent.style.display === '') {
            // If hidden, hide the preview and show the full content
            preview.style.display = 'none';
            fullContent.style.display = 'block';
        } else {
            // Optional: If you want to be able to click again to hide the full content
            // and show the preview again, uncomment the lines below.
            // preview.style.display = 'block';
            // fullContent.style.display = 'none';
        }
    });
});
// In script.js

// --- Blog Post Filtering Logic ---
document.addEventListener('DOMContentLoaded', function() {
  // Select all the filter buttons and all the blog post items
  const filterButtons = document.querySelectorAll('.blog-filters button');
  const blogPosts = document.querySelectorAll('.blog-post-link');

  // Make sure we found the buttons before adding listeners
  if (filterButtons.length > 0 && blogPosts.length > 0) {
      
      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              // 1. Update the active button state
              // First, remove 'active' class from all buttons
              filterButtons.forEach(btn => btn.classList.remove('active'));
              // Then, add 'active' class to the button that was just clicked
              this.classList.add('active');

              // 2. Get the filter value from the clicked button
              const filterValue = this.getAttribute('data-filter');

              // 3. Loop through all blog posts and show/hide them
              blogPosts.forEach(post => {
                  const postTags = post.getAttribute('data-tags');

                  // Check if the post should be visible
                  if (filterValue === 'all' || postTags.includes(filterValue)) {
                      post.style.display = 'block'; // Show the post
                  } else {
                      post.style.display = 'none'; // Hide the post
                  }
              });
          });
      });
  }
});

document.getElementById("resume-button").addEventListener("click", function() {
    // URL of your resume
    var resumeUrl = "assets/vaishnavi_resume.pdf";
    // Open the resume in a new tab
    window.open(resumeUrl, "_blank");
});

// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.style.opacity = 0.8;
//         // header.classList.remove('transparent');
//         // header.classList.add('solid');
//     } else {
//         header.style.opacity = 1;
//         // header.classList.remove('solid');
//         // header.classList.add('transparent');
//     }
// });

document.addEventListener('DOMContentLoaded', function(){
    const jobList = document.getElementById('job-list');
    const jobDetails = document.getElementById('job-details');

    const title1 = "Full Stack Engineering Analyst"
    const company1 = "Accenture "
    const location1 = "Bengaluru, India"
    let details1 = [
        "Developed and executed the password reset functionality using Angular and ASP.NET core web API. Ensured security and compliance by following best practices for password handling and encryption.",
        `Developed interactive dashboards with Angular and D3.js frameworks, integrating dynamic charts to display key metrics. Improved user engagement by 25% through effective visualizations. 
        Enhanced application responsiveness, reducing loading times by 40% for a better user experience.`,
        "Developed and optimized APIs utilizing the ASP.NET Core framework, leading to a 50% increase in overall application performance and a 20% decrease in server response times.",
        "Enhanced user experience by redesigning and expanding the application's UI, introducing new intuitive pages to streamline navigation and usability."
    ]

    const title2 = "Data Science Intern"
    const company2 = "Pivotchain Technologies "
    const location2 = "Remote, India"
    let details2 = [
        "Designed and implemented an end-to-end application utilizing a CNN model to accurately determine vehicle colors from input images. Achieved an accuracy of 91.87% and successfully deployed the system on the cloud.",
        "Contributed to the generation of training datasets for deep learning models by meticulously annotating image datasets, resulting in a substantial boost in model performance."
    ]

    const items = [
        {title: title1, company:company1, location: location1, description: details1},
        {title: title2, company:company2, location: location2, description: details2}
    ]

    jobList.addEventListener('click', function(event){
        const selectedJobIndex = event.target.getAttribute('data-index');
        console.log(selectedJobIndex)
        if(selectedJobIndex !== null){
            const selectedJob = items[selectedJobIndex]
            renderSelectedJobDetails(selectedJob)
        }
    })

    // JavaScript to add event listener to each li element
    document.addEventListener("DOMContentLoaded", function() {
        // Get all li elements
        var listItems = document.querySelectorAll("#job-list li");

        // Add click event listener to each li element
        listItems.forEach(function(item) {
            item.addEventListener("click", function() {
                // Toggle the highlight class on click
                this.classList.toggle("highlight");
            });
        });
    });

    function renderSelectedJobDetails(item){
        jobDetails.innerHTML=`
            <h5 style="color:#ff928b">${item.title}</h5>
            <h6 style="color:#ff928b">${item.company}, ${item.location}</h6>
        `
        let sentencesContainer = document.getElementById('job-description');
        sentencesContainer.innerHTML = "";
        for(let i = 0; i < item.description.length; i++){
            let paragraph = document.createElement('p');
            paragraph.textContent = item.description[i];
            sentencesContainer.appendChild(paragraph);
        }

    }

    renderSelectedJobDetails(items[0]);


})



// Function to handle sliding of cards
// function scrollCards(direction) {
//     const container = document.getElementById('cardContainer');
//     const containerWidth = container.offsetWidth;
//     const scrollDistance = direction * containerWidth;
//     container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
// }

// // Event listeners for previous and next buttons
// document.querySelector('.carousel-control-prev').addEventListener('click', function() {
//     scrollCards(-1);
// });

// document.querySelector('.carousel-control-next').addEventListener('click', function() {
//     scrollCards(1);
// });

// const container = document.getElementById('cardContainer');
// const cards = document.querySelectorAll('.card');
  
// let scrollLeft = 0;
// let visibleCards = 4;
  
// container.addEventListener('scroll', () => {
//     const newScrollLeft = container.scrollLeft;
//     if (newScrollLeft > scrollLeft) {
//       // Scrolling to the right
//       for (let i = 0; i < cards.length; i++) {
//         if (i < visibleCards && !cards[i].classList.contains('visible')) {
//           cards[i].classList.add('visible');
//         } else if (i >= visibleCards && cards[i].classList.contains('visible')) {
//           cards[i].classList.remove('visible');
//         }
//       }
//     } else {
//       // Scrolling to the left
//       for (let i = cards.length - 1; i >= 0; i--) {
//         if (i >= cards.length - visibleCards && !cards[i].classList.contains('visible')) {
//           cards[i].classList.add('visible');
//         } else if (i < cards.length - visibleCards && cards[i].classList.contains('visible')) {
//           cards[i].classList.remove('visible');
//         }
//       }
//     }
//     scrollLeft = newScrollLeft;
// });


// document.addEventListener('DOMContentLoaded', function(){
//     var myCarousel = document.querySelector("#projectCarousel")
//     // var carousel = new bootstrap.Carousel(myCarousel, {
//     //     interval:3000,
//     //     ride : 'carousel'
//     // })
// })
// Assuming you have an array of card elements with class "card"
// const cards = document.querySelectorAll('.card');
// const numCardsToShow = 4; // Number of cards to display at a time
// let currentIndex = 0; // Current index of the first card to display

// // Function to display the next set of cards
// function displayNextCards() {
//     const maxIndex = cards.length - numCardsToShow;
//     if (currentIndex < maxIndex) {
//         // Hide current set of cards
//         for (let i = currentIndex; i < currentIndex + numCardsToShow; i++) {
//             cards[i].style.display = 'none';
//         }
//         // Display next set of cards
//         currentIndex++;
//         for (let i = currentIndex; i < currentIndex + numCardsToShow; i++) {
//             cards[i].style.display = 'block';
//         }
//     }
// }

// // Function to display the previous set of cards
// function displayPreviousCards() {
//     if (currentIndex > 0) {
//         // Hide current set of cards
//         for (let i = currentIndex; i < currentIndex + numCardsToShow; i++) {
//             cards[i].style.display = 'none';
//         }
//         // Display previous set of cards
//         currentIndex--;
//         for (let i = currentIndex; i < currentIndex + numCardsToShow; i++) {
//             cards[i].style.display = 'block';
//         }
//     }
// }

// // Event listener for scrolling down
// window.addEventListener('scroll', function() {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         displayNextCards();
//     }
// });

// // Event listener for scrolling up
// window.addEventListener('scroll', function() {
//     if (window.scrollY === 0) {
//         displayPreviousCards();
//     }
// });


// document.addEventListener('DOMContentLoaded', (event) => {
//     const carouselElement = document.querySelector('#projectCarousel');
//     const carousel = new bootstrap.Carousel(carouselElement, {
//         interval: false
//     });
    
//     const cards = Array.from(document.querySelectorAll('.carousel-item .card'));
//     let currentStart = 0;

//     function showCards() {
//         cards.forEach((card, index) => {
//             card.parentElement.style.display = 
//                 (index >= currentStart && index < currentStart + 4) ? 'block' : 'none';
//         });
//     }

//     showCards();

//     document.querySelector('.carousel-control-next').addEventListener('click', () => {
//         currentStart = (currentStart + 4) % cards.length;
//         showCards();
//     });

//     document.querySelector('.carousel-control-prev').addEventListener('click', () => {
//         currentStart = (currentStart - 4 + cards.length) % cards.length;
//         showCards();
//     });
// });
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
      // Toggle active class on the accordion item
      const accordionItem = this.parentElement;
      accordionItem.classList.toggle('active');
  
      // Optionally, close others:
      // document.querySelectorAll('.accordion-item').forEach(item => {
      //   if (item !== accordionItem) item.classList.remove('active');
      // });
    });
  });


