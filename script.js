document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const noResults = document.getElementById('no-results');

    function displayProducts(products) {
        productList.innerHTML = '';
        if (products.length === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 product-card';
                productCard.innerHTML = `
                    <div class="card">
                        <img src="${product.img}" class="card-img-top" >
                        <div class="card-body">
                            <p class="card-text">${product.description}</p>
                            <a href="${product.link}" class="btn btn-primary" target="_blank"><i class="fas fa-external-link-alt"></i> Buy on Amazon</a>
                        </div>
                    </div>
                `;
                productList.appendChild(productCard);
            });
        }
    }

    function fetchProducts() {
        fetch('products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Initial display of all products on page load
    fetchProducts();

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                const filteredProducts = data.filter(product =>
                    product.title.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query)
                );
                displayProducts(filteredProducts);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});
