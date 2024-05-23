// document.addEventListener('DOMContentLoaded', function() {
//     const productId = localStorage.getItem('selectedProductId');

//     if (!productId) {
//         window.location.href = 'shop.html';
//         return;
//     }

//     fetch('src/data/products.json')
//         .then(response => response.json())
//         .then(products => {
//             const product = products.find(p => p.id == productId);
//             if (product) {
//                 const mainImageContainer = document.querySelector('.product-gallery__main-image');
//                 const dotsContainer = document.querySelector('.product-gallery__dots');

//                 if (mainImageContainer && dotsContainer) {
//                     product.images.forEach(image => {
//                         const imgElement = document.createElement('img');
//                         imgElement.src = image;
//                         mainImageContainer.appendChild(imgElement);
//                     });

//                     // Inizializza Slick per la visualizzazione mobile
//                     $('.product-gallery__main-image').on('init', function() {
//                         mainImageContainer.style.height = 'auto';
//                     });

//                     $('.product-gallery__main-image').slick({
//                         dots: true,
//                         infinite: true,
//                         speed: 300,
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         adaptiveHeight: true,
//                         prevArrow: $('.product-gallery__prev'),
//                         nextArrow: $('.product-gallery__next'),
//                         appendDots: dotsContainer,
//                         customPaging: function() {
//                             return '<button class="slick-dot-custom"></button>';
//                         }
//                     });

//                     // Reimposta l'altezza corretta dopo il caricamento delle immagini
//                     $('.product-gallery__main-image').slick('setPosition');
//                 } else {
//                     console.error('Main image or dots container not found.');
//                 }
//             } else {
//                 console.error('Product not found.');
//             }
//         })
//         .catch(error => console.error('Error fetching product data:', error));
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const productId = localStorage.getItem('selectedProductId');

//     if (!productId) {
//         window.location.href = 'shop.html';
//         return;
//     }

//     fetch('src/data/products.json')
//         .then(response => response.json())
//         .then(products => {
//             const product = products.find(p => p.id == productId);
//             if (product) {
//                 const mainImageContainer = document.querySelector('.product-gallery__main-image');
//                 const dotsContainer = document.querySelector('.product-gallery__dots');
//                 const thumbnailsInnerContainer = document.querySelector('.product-gallery-desktop__thumbnails-inner');
//                 const desktopMainImageContainer = document.querySelector('.product-gallery-desktop__main-image');
//                 const scrollDownButton = document.querySelector('.product-gallery-desktop__scroll-down');

//                 if (mainImageContainer && dotsContainer) {
//                     product.images.forEach(image => {
//                         const imgElement = document.createElement('img');
//                         imgElement.src = image;
//                         mainImageContainer.appendChild(imgElement);
//                     });

//                     $('.product-gallery__main-image').slick({
//                         dots: true,
//                         infinite: true,
//                         speed: 300,
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         adaptiveHeight: true,
//                         prevArrow: $('.product-gallery__prev'),
//                         nextArrow: $('.product-gallery__next'),
//                         appendDots: dotsContainer,
//                         customPaging: function() {
//                             return '<button class="slick-dot-custom"></button>';
//                         }
//                     });
//                 } else {
//                     console.error('Main image or dots container not found.');
//                 }

//                 if (thumbnailsInnerContainer && desktopMainImageContainer && scrollDownButton) {
//                     product.images.forEach(image => {
//                         const thumbnailElement = document.createElement('img');
//                         thumbnailElement.src = image;
//                         thumbnailsInnerContainer.appendChild(thumbnailElement);

//                         thumbnailElement.addEventListener('click', function() {
//                             const mainImage = document.createElement('img');
//                             mainImage.src = image;
//                             desktopMainImageContainer.innerHTML = ''; // Clear previous image
//                             desktopMainImageContainer.appendChild(mainImage);

//                             // Sposta l'immagine selezionata in cima
//                             thumbnailsInnerContainer.insertBefore(thumbnailElement, thumbnailsInnerContainer.firstChild);
//                         });
//                     });

//                     // Imposta la prima immagine come immagine principale
//                     const initialImage = document.createElement('img');
//                     initialImage.src = product.images[0];
//                     desktopMainImageContainer.appendChild(initialImage);

//                     // Gestisci lo scroll delle miniature
//                     scrollDownButton.addEventListener('click', function() {
//                         thumbnailsInnerContainer.scrollBy({ top: 150, behavior: 'smooth' });
//                     });
//                 } else {
//                     console.error('Thumbnails or desktop main image container not found.');
//                 }
//             } else {
//                 console.error('Product not found.');
//             }
//         })
//         .catch(error => console.error('Error fetching product data:', error));
// });


document.addEventListener('DOMContentLoaded', function() {
    const productId = localStorage.getItem('selectedProductId');

    if (!productId) {
        window.location.href = 'shop.html';
        return;
    }

    fetch('src/data/products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            if (product) {
                const mainImageContainer = document.querySelector('.product-gallery__main-image');
                const dotsContainer = document.querySelector('.product-gallery__dots');
                const thumbnailsInnerContainer = document.querySelector('.product-gallery-desktop__thumbnails-inner');
                const desktopMainImageContainer = document.querySelector('.product-gallery-desktop__main-image');
                const scrollDownButton = document.querySelector('.product-gallery-desktop__scroll-down button');

                // Mobile gallery setup
                if (mainImageContainer && dotsContainer) {
                    product.images.forEach(image => {
                        const imgElement = document.createElement('img');
                        imgElement.src = image;
                        mainImageContainer.appendChild(imgElement);
                    });

                    $('.product-gallery__main-image').slick({
                        dots: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true,
                        prevArrow: $('.product-gallery__prev'),
                        nextArrow: $('.product-gallery__next'),
                        appendDots: dotsContainer,
                        customPaging: function() {
                            return '<button class="slick-dot-custom"></button>';
                        }
                    });
                } else {
                    console.error('Main image or dots container not found.');
                }

                // Desktop gallery setup
                if (thumbnailsInnerContainer && desktopMainImageContainer && scrollDownButton) {
                    let imagesArray = product.images.slice(); // Clone the images array

                    function updateThumbnails() {
                        thumbnailsInnerContainer.innerHTML = '';
                        let visibleImagesCount = window.innerWidth > 1199 ? 4 : 2; // Show 4 images for > 1199px, otherwise 2
                        imagesArray.slice(0, visibleImagesCount).forEach((image, index) => { 
                            const thumbnailElement = document.createElement('img');
                            thumbnailElement.src = image;
                            thumbnailsInnerContainer.appendChild(thumbnailElement);

                            thumbnailElement.addEventListener('click', function() {
                                moveToTop(index);
                                updateMainImage(imagesArray[0]);
                            });
                        });
                    }

                    function moveToTop(index) {
                        const clickedImage = imagesArray.splice(index, 1)[0];
                        imagesArray.unshift(clickedImage);
                        updateThumbnails();
                    }

                    function updateMainImage(src) {
                        const mainImage = document.createElement('img');
                        mainImage.src = src;
                        desktopMainImageContainer.innerHTML = ''; // Clear previous image
                        desktopMainImageContainer.appendChild(mainImage);

                        // // Add favorite icon
                        // const favoriteIcon = document.createElement('div');
                        // favoriteIcon.className = 'favorite-icon';
                        // favoriteIcon.innerHTML = '<img src="./src/images/icons/heartb.svg" alt="Favorite">';
                        // desktopMainImageContainer.appendChild(favoriteIcon);
                    }

                    // Initial setup
                    updateThumbnails();
                    updateMainImage(imagesArray[0]);

                    // Scroll down button functionality
                    scrollDownButton.addEventListener('click', function() {
                        imagesArray.push(imagesArray.shift()); // Move the first element to the end
                        updateThumbnails();
                        updateMainImage(imagesArray[0]);
                    });

                    // Ensure thumbnails update correctly on window resize
                    window.addEventListener('resize', updateThumbnails);
                } else {
                    console.error('Thumbnails or desktop main image container not found.');
                }
            } else {
                console.error('Product not found.');
            }
        })
        .catch(error => console.error('Error fetching product data:', error));
});

