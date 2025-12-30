import { supabase } from '../utils/supabase';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Something went wrong');
  }
  return response.json();
};

const ensureAuthenticated = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error || !session) {
    throw new Error('You must be logged in to perform this action');
  }
  return session;
};

export const productService = {
  getAll: async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  create: async (product) => {
    try {
      await ensureAuthenticated();
      
      const { data, error } = await supabase
        .from('products')
        .insert({
          pid: product.pid,
          name: product.name,
          category: product.category,
          subcategory: product.subcategory,
          price: product.price,
          stock: product.stock,
          availability: product.availability || (product.stock > 0 ? "In Stock" : "Out of Stock"),
          description: product.description,
          image: product.image,
          featured: product.featured || false,
          newarrival: product.newarrival || true,
          bestseller: product.bestseller || false,
          specs: product.specs || ""
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  // Update product
  update: async (id, product) => {
    try {
      // Ensure user is authenticated
      await ensureAuthenticated();
      
      // Make sure we include all required fields
      const { data, error } = await supabase
        .from('products')
        .update({
          pid: product.pid,
          name: product.name,
          category: product.category,
          subcategory: product.subcategory,
          price: product.price,
          stock: product.stock,
          availability: product.availability || (product.stock > 0 ? "In Stock" : "Out of Stock"),
          description: product.description,
          image: product.image,
          featured: product.featured || false,
          newarrival: product.newarrival || false,
          bestseller: product.bestseller || false,
          specs: product.specs || ""
        })
        .eq('pid', id) 
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      await ensureAuthenticated();
      
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('pid', id);  
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
};

export const adminService = {
  getAllowedEmails: async () => {
    try {
      await ensureAuthenticated();
      
      const { data, error } = await supabase
        .from('allowed_admins')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching allowed emails:', error);
      throw error;
    }
  },

  // Add allowed admin email
  addAllowedEmail: async (email) => {
    try {
      // Ensure user is authenticated
      await ensureAuthenticated();
      
      const { data, error } = await supabase
        .from('allowed_admins')
        .insert({ email })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error adding allowed email:', error);
      throw error;
    }
  },

  // Remove allowed admin email
  removeAllowedEmail: async (id) => {
    try {
      // Ensure user is authenticated
      await ensureAuthenticated();
      
      const { error } = await supabase
        .from('allowed_admins')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error removing allowed email:', error);
      throw error;
    }
  }
};