// src/services/productService.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export const productService = {
  // Get all products
  async getAllProducts() {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Search products
  async searchProducts(query) {
    try {
      const response = await fetch(`${API_URL}/api/products/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Failed to search products');
      return await response.json();
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  },

  // Get product by pid
  async getProductById(pid) {
    try {
      const response = await fetch(`${API_URL}/api/products/${pid}`);
      if (!response.ok) throw new Error('Failed to fetch product');
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // Get products by category
  async getProductsByCategory(category) {
    try {
      const response = await fetch(`${API_URL}/api/products?category=${category}`);
      if (!response.ok) throw new Error('Failed to fetch products by category');
      return await response.json();
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }
};