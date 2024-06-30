// document.addEventListener('DOMContentLoaded', () => {
//     const products = [
//         { id: 1, title: "Product 1", description: "Description of Product 1.", img: "https://via.placeholder.com/150", link: "https://www.amazon.com" },
//         { id: 2, title: "Product 2", description: "Description of Product 2.", img: "https://via.placeholder.com/150", link: "https://www.amazon.com" },
//         { id: 3, title: "Product 3", description: "Description of Product 3.", img: "https://via.placeholder.com/150", link: "https://www.amazon.com" },
//         { id: 1, title: "Product 1", description: "Description of Product 1.", img: "https://via.placeholder.com/150", link: "https://www.amazon.com" },
//         { id: 2, title: "Product 2", description: "Description of Product 2.", img: "https://via.placeholder.com/150", link: "https://www.amazon.com" },
//         { id: 3, title: "Product 3", description: "Description of Product 3.", img: "https://via.placeholder.com/150", link: "https://www.amazon.com" },
//         { id: 1, title: "Product 1", description: "Description of Product 1.", img: "https://via.placeholder.com/150", link: "https://www.amazon.com" },
//         { id: 2, title: "Product 2", description: "Description of Product 2.", img: "https://via.placeholder.com/150", link: "https://www.amazon.com" },
//         { id: 3, title: "Product 3", description: "Description of Product 3.", img: "https://via.placeholder.com/150", link: "https://www.amazon.com" },
//         // Add more products as needed
//     ];

//     const productList = document.getElementById('product-list');
//     const noResults = document.getElementById('no-results');

//     function displayProducts(filteredProducts) {
//         productList.innerHTML = '';
//         if (filteredProducts.length === 0) {
//             noResults.style.display = 'block';
//         } else {
//             noResults.style.display = 'none';
//             filteredProducts.forEach(product => {
//                 const productCard = document.createElement('div');
//                 productCard.className = 'col-md-4 product-card';
//                 productCard.innerHTML = `
//                     <div class="card">
//                         <img src="${product.img}" class="card-img-top" alt="${product.title}">
//                         <div class="card-body">
//                             <h5 class="card-title">${product.title}</h5>
//                             <p class="card-text">${product.description}</p>
//                             <a href="${product.link}" class="btn btn-primary" target="_blank"><i class="fas fa-external-link-alt"></i> Buy on Amazon</a>
//                         </div>
//                     </div>
//                 `;
//                 productList.appendChild(productCard);
//             });
//         }
//     }

//     // Initial display of all products
//     displayProducts(products);

//     const searchInput = document.getElementById('search-input');
//     searchInput.addEventListener('input', () => {
//         const query = searchInput.value.toLowerCase();
//         const filteredProducts = products.filter(product => 
//             product.title.toLowerCase().includes(query) || 
//             product.description.toLowerCase().includes(query)
//         );
//         displayProducts(filteredProducts);
//     });
// });
