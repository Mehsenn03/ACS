import { useState, useEffect } from "react";
import { toast } from "sonner";
import { categories } from "../data/products";
import { productService, adminService } from '../services/AdminService';
import { useAuth } from "../context/AuthContext";
import "../styles/Admin.css";

export const Admin = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [allowedEmails, setAllowedEmails] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const [activeTab, setActiveTab] = useState("products");

  const [formData, setFormData] = useState({
    pid: "", 
    name: "",
    category: "",
    subcategory: "",
    price: "",
    stock: "",
    availability: "",
    description: "",
    image: "",
    featured: false,
    newsrrival: true,
    bestseller: false,
    specs: "" 
  });

  useEffect(() => {
    fetchProducts();
    fetchAllowedEmails();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getAll();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const fetchAllowedEmails = async () => {
    try {
      const data = await adminService.getAllowedEmails();
      setAllowedEmails(data || []);
    } catch (error) {
      console.error('Error fetching allowed emails:', error);
      toast.error('Failed to fetch allowed admin emails');
    }
  };

  const addAllowedEmail = async () => {
    if (!newEmail) {
      toast.error("Please enter an email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      await adminService.addAllowedEmail(newEmail);
      toast.success(`Email ${newEmail} added to allowed list.`);
      setNewEmail("");
      fetchAllowedEmails();
    } catch (error) {
      if (error.message.includes('duplicate')) {
        toast.error("This email is already in the allowed list.");
      } else {
        toast.error('Failed to add email to allowed list.');
      }
    }
  };

  const removeAllowedEmail = async (id, email) => {
    if (email === '72210117@students.liu.edu.lb') {
      toast.error("Cannot remove the primary admin email.");
      return;
    }

    if (user && user.email === email) {
      toast.error("You cannot remove your own email from the list.");
      return;
    }

    if (!window.confirm(`Are you sure you want to remove ${email}?`)) {
      return;
    }

    try {
      await adminService.removeAllowedEmail(id);
      toast.success(`Email ${email} removed from allowed list.`);
      fetchAllowedEmails();
    } catch (error) {
      toast.error('Failed to remove email from allowed list.');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsAddingNew(false);
    setFormData({
      pid: product.pid || "",
      name: product.name || "",
      category: product.category || "",
      subcategory: product.subcategory || "",
      price: String(product.price || ""),
      stock: String(product.stock || ""),
      availability: product.availability || "",
      description: product.description || "",
      image: product.image || "",
      featured: product.featured || false,
      newarrival: product.newarrival || false,
      bestseller: product.bestseller || false,
      specs: product.specs || ""
    });
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setEditingProduct(null);
    setFormData({
      pid: "", 
      name: "",
      category: categories[0]?.id || "tplink",
      subcategory: "",
      price: "",
      stock: "",
      availability: "In Stock",
      description: "",
      image: "https://images.unsplash.com/photo-1745847768408-b7b83796cae6?w=400",
      featured: false,
      newarrival: true,
      bestseller: false,
      specs: ""
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isAddingNew) {
        const productId = formData.pid || `${formData.category}-${Date.now()}`;
        
        const newProduct = {
          ...formData,
          pid: productId,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock)
        };
        
        await productService.create(newProduct);
        toast.success("Product added successfully!");
      } else if (editingProduct) {
        const updatedProduct = {
          ...formData,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock)
        };
        
        await productService.update(editingProduct.pid || editingProduct.id, updatedProduct);
        toast.success("Product updated successfully!");
      }
      
      setEditingProduct(null);
      setIsAddingNew(false);
      setFormData({
        pid: "",
        name: "",
        category: "",
        subcategory: "",
        price: "",
        stock: "",
        availability: "",
        description: "",
        image: "",
        featured: false,
        newarrival: true,
        bestseller: false,
        specs: ""
      });
      fetchProducts();
    } catch (error) {
      toast.error(`Failed to ${isAddingNew ? 'add' : 'update'} product`);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await productService.delete(id);
        toast.success("Product deleted successfully!");
        fetchProducts();
      } catch (error) {
        toast.error('Failed to delete product');
      }
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsAddingNew(false);
    setFormData({
      pid: "",
      name: "",
      category: "",
      subcategory: "",
      price: "",
      stock: "",
      availability: "",
      description: "",
      image: "",
      featured: false,
      newarrival: true,
      bestseller: false,
      specs: ""
    });
  };

  const statsConfig = [
    {
      label: "Total Products",
      count: products.length,
      color: "primary",
      svg: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
    {
      label: "In Stock",
      count: products.filter(p => p.availability === "In Stock").length,
      color: "success",
      svg: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      label: "Low Stock",
      count: products.filter(p => p.stock < 10 && p.stock > 0).length,
      color: "warning",
      svg: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4"
    },
    {
      label: "Out of Stock",
      count: products.filter(p => p.stock === 0).length,
      color: "danger",
      svg: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  if (loading && activeTab === "products") {
    return (
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <section className="text-center mb-4">
        <h1 className="display-4 fw-bold">Admin Dashboard</h1>
        <p className="lead">Manage your product inventory and admin access</p>
        <div className="d-flex justify-content-center mb-3">
          <button 
            className={`btn ${activeTab === "products" ? "btn-primary" : "btn-outline-primary"} me-2`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
          <button 
            className={`btn ${activeTab === "admins" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveTab("admins")}
          >
            Admin Access
          </button>
        </div>
      </section>

      {activeTab === "products" && (
        <>
          <div className="row g-4 mb-4">
            {statsConfig.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="card shadow-sm h-100 d-flex flex-row align-items-center p-3">
                  <div
                    className={`bg-${item.color} bg-opacity-10 text-${item.color} rounded-circle d-flex align-items-center justify-content-center me-3`}
                    style={{ width: "3.5rem", height: "3.5rem" }}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      width={32}
                      height={32}
                    >
                      <path
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.svg}
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="fs-2 fw-bold">{item.count}</div>
                    <div className="text-muted">{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-end mb-4">
            <button
              onClick={handleAddNew}
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <svg
                fill="none"
                stroke="currentColor"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add New Product
            </button>
          </div>

          {(editingProduct || isAddingNew) && (
            <div className="card mb-4 p-4">
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                <h2 className="h4 m-0">
                  {isAddingNew ? "Add New Product" : "Edit Product"}
                </h2>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={handleCancel}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Product ID</label>
                    <input
                      type="text"
                      name="pid"
                      value={formData.pid}
                      onChange={handleChange}
                      placeholder="Auto-generated if empty"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Product Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Subcategory</label>
                    <input
                      type="text"
                      name="subcategory"
                      value={formData.subcategory}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Price ($)</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                      step="0.01"
                      min="0"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Stock</label>
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      required
                      min="0"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Availability</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="form-control"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Image URL</label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Specifications</label>
                    <textarea
                      name="specs"
                      value={formData.specs}
                      onChange={handleChange}
                      rows={3}
                      className="form-control"
                      placeholder="Product specifications (optional)"
                    />
                  </div>

                  <div className="col-md-4">
                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleChange}
                        id="featured"
                      />
                      <label className="form-check-label" htmlFor="featured">
                        Featured Product
                      </label>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="newarrival"
                        checked={formData.newarrival}
                        onChange={handleChange}
                        id="newarrival"
                      />
                      <label className="form-check-label" htmlFor="newarrival">
                        New Arrival
                      </label>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="bestseller"
                        checked={formData.bestseller}
                        onChange={handleChange}
                        id="bestseller"
                      />
                      <label className="form-check-label" htmlFor="bestseller">
                        Best Seller
                      </label>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-2 mt-3">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-primary">
                    {isAddingNew ? "Add Product" : "Update Product"}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="card p-4">
            <h2 className="h4 mb-3">Product Inventory</h2>

            <div className="table-responsive">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    {["Product", "Category", "Price", "Stock", "Status", "Actions"].map(
                      (title, i) => <th key={i}>{title}</th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {products.map(product => {
                    const stockClass =
                      product.stock === 0
                        ? "bg-danger"
                        : product.stock < 10
                        ? "bg-warning text-dark"
                        : "bg-success";

                    return (
                      <tr key={product.id || product.pid}>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={product.image}
                              className="product-thumb"
                              alt={product.name}
                            />
                            <span className="product-name small">{product.name}</span>
                          </div>
                        </td>

                        <td>{product.category}</td>
                        <td>${product.price.toFixed(2)}</td>

                        <td>
                          <span className={`badge rounded-pill ${stockClass}`}>
                            {product.stock}
                          </span>
                        </td>

                        <td>{product.availability}</td>

                        <td>
                          <div className="d-flex gap-2">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-sm"
                              onClick={() => handleEdit(product)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => handleDelete(product.id || product.pid)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === "admins" && (
        <div className="card p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 m-0">Admin Access Management</h2>
            <span className="badge bg-primary">Logged in as {user?.email}</span>
          </div>

          <div className="mb-4">
            <h5 className="mb-3">Allowed Admin Emails</h5>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Added Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>72210117@students.liu.edu.lb</strong>
                      <span className="badge bg-secondary ms-2">Primary Admin</span>
                    </td>
                    <td>System Default</td>
                    <td>
                      <span className="text-muted">Cannot Remove</span>
                    </td>
                  </tr>
                  {allowedEmails.map(emailRecord => (
                    <tr key={emailRecord.id}>
                      <td>{emailRecord.email}</td>
                      <td>{new Date(emailRecord.created_at).toLocaleDateString()}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeAllowedEmail(emailRecord.id, emailRecord.email)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {allowedEmails.length === 0 && (
                 <p className="text-muted text-center mt-3">No additional admin emails have been added.</p>
              )}
            </div>
          </div>

          <div className="card bg-light p-3">
            <h5 className="mb-3">Add New Admin Email</h5>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email address"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addAllowedEmail()}
              />
              <button
                className="btn btn-primary"
                onClick={addAllowedEmail}
              >
                Add Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
