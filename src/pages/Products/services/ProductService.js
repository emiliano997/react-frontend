export class ProductService {
  static async getAllProducts() {
    const response = await fetch("http://localhost:5000/api/products");
    const data = await response.json();
    return data;
  }

  static async getProductById(id) {
    const response = await fetch(`http://localhost:5000/api/products/${id}`);
    const data = await response.json();
    return data;
  }

  static async createProduct(product) {
    const response = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  }
}
