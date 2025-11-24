import { useState } from "react";
import { toast } from "sonner";
import { products as initialProducts, categories } from "../data/products";
import "../styles/Admin.css";

export const Admin = () => {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subcategory: "",
    price: "",
    stock: "",
    description: "",
    image: ""
  });

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsAddingNew(false);
    setFormData({
      name: product.name,
      category: product.category,
      subcategory: product.subcategory,
      price: String(product.price),
      stock: String(product.stock),
      description: product.description,
      image: product.image
    });
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setEditingProduct(null);
    setFormData({
      name: "",
      category: "tplink",
      subcategory: "Routers",
      price: "",
      stock: "",
      description: "",
      image: "https://images.unsplash.com/photo-1745847768408-b7b83796cae6?w=400"
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(function (prev) {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAddingNew) {
      const newProduct = {
        id: formData.category + "-" + Date.now(),
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        availability:
          parseInt(formData.stock) > 0 ? "In Stock" : "Out of Stock",
        featured: false,
        newArrival: true,
        bestSeller: false
      };
      setProducts(function (prev) {
        return [...prev, newProduct];
      });
      toast.success("Product added successfully!");
    } else if (editingProduct) {
      const updated = products.map(function (p) {
        if (p.id === editingProduct.id) {
          return {
            ...p,
            ...formData,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock),
            availability:
              parseInt(formData.stock) > 0 ? "In Stock" : "Out of Stock"
          };
        }
        return p;
      });

      setProducts(updated);
      toast.success("Product updated successfully!");
    }

    setEditingProduct(null);
    setIsAddingNew(false);
    setFormData({
      name: "",
      category: "",
      subcategory: "",
      price: "",
      stock: "",
      description: "",
      image: ""
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(function (prev) {
        return prev.filter(function (p) {
          return p.id !== id;
        });
      });
      toast.success("Product deleted successfully!");
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsAddingNew(false);
    setFormData({
      name: "",
      category: "",
      subcategory: "",
      price: "",
      stock: "",
      description: "",
      image: ""
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
      count: products.filter(function (p) {
        return p.availability === "In Stock";
      }).length,
      color: "success",
      svg: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      label: "Low Stock",
      count: products.filter(function (p) {
        return p.stock < 10 && p.stock > 0;
      }).length,
      color: "warning",
      svg: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4"
    },
    {
      label: "Out of Stock",
      count: products.filter(function (p) {
        return p.stock === 0;
      }).length,
      color: "danger",
      svg: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  return (
    <div className="container-fluid py-4">
      <section className="text-center mb-4">
        <h1 className="display-4 fw-bold">Admin Dashboard</h1>
        <p className="lead">Manage your product inventory</p>
      </section>

      <div className="row g-4 mb-4">
        {statsConfig.map(function (item, index) {
          return (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm h-100 d-flex flex-row align-items-center p-3">
                <div
                  className={
                    "bg-" +
                    item.color +
                    " bg-opacity-10 text-" +
                    item.color +
                    " rounded-circle d-flex align-items-center justify-content-center me-3"
                  }
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
          );
        })}
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
                  {categories.map(function (cat) {
                    return (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-md-4">
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
                  function (title, i) {
                    return <th key={i}>{title}</th>;
                  }
                )}
              </tr>
            </thead>

            <tbody>
              {products.map(function (product) {
                const stockClass =
                  product.stock === 0
                    ? "bg-danger"
                    : product.stock < 10
                    ? "bg-warning text-dark"
                    : "bg-success";

                return (
                  <tr key={product.id}>
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
                      <span
                        className={
                          "badge rounded-pill " +
                          stockClass
                        }
                      >
                        {product.stock}
                      </span>
                    </td>

                    <td>{product.availability}</td>

                    <td>
                      <div className="d-flex gap-2">
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          onClick={function () {
                            handleEdit(product);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={function () {
                            handleDelete(product.id);
                          }}
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
    </div>
  );
};
