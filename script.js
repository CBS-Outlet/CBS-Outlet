fetch('products.json')
    .then(response => response.json())
    .then(data => {
        let productsDiv = document.getElementById('products');
        data.forEach(product => {
            let productDiv = document.createElement('div');
            productDiv.innerHTML = `<h2>${product.nome}</h2>
                                    <img src="${product.immagine}" alt="${product.nome}">
                                    <p>Prezzo: €${product.prezzo}</p>
                                    <button>Aggiungi al carrello</button>`;
            productsDiv.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Errore nel caricamento dei prodotti:', error));
