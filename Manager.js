class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Esto revisa que todos los campos esten colocados
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        // Revisa que no este repetido el mismo codigo ya
        const codeExists = this.products.some(product => product.code === code);
        if (codeExists) {
            console.error("Ya existe un producto con el mismo código");
            return;
        }

        const product = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(product);
        console.log(`Producto agregado: ${product.title}`);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado");
            return null;
        }
    }
}

// esto es un test en el codigo, (Aclaro que esto lo hice con ayuda, no se si es necesario)
// creo un new product
const productManager = new ProductManager();

// esto es para agregar un producto o varios
productManager.addProduct("Remera", "Una remera de color gris y linea roja", 29.99, "imagen1.jpg", "AB12", 50);
productManager.addProduct("Jean", "Un jean de color claro con parches en la rodilla", 39.99, "imagen2.jpg", "AB13", 30);

// esto es para que salga la lista de productos
console.log("Lista de productos:", productManager.getProducts());

// Aca se busca el producto deseado y luego el nombre 
const productIdToSearch = 2;
const foundProduct = productManager.getProductById(productIdToSearch);
if (foundProduct) {
    console.log(`Producto encontrado: ${foundProduct.title}`);
}