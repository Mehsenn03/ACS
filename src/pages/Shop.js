import { useState, useMemo } from "react";
import { ProductCard } from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export const Shop = () => {
  const location = useLocation();
  const preselectedBrand = location.state?.brand || "all";
  
  const { products, loading, error } = useProducts();
  
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState(preselectedBrand);
  const [sortBy, setSortBy] = useState("name");

  const subcategories = useMemo(() => {
    return Array.from(new Set(products.map(p => p.subcategory))).filter(Boolean);
  }, [products]);

  const brands = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    return uniqueCategories.map(cat => ({ id: cat, name: cat }));
  }, [products]);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== "all") {
      list = list.filter(p => p.subcategory === selectedCategory);
    }

    if (selectedBrand !== "all") {
      list = list.filter(p => p.category === selectedBrand);
    }

    list.sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

    return list;
  }, [products, selectedCategory, selectedBrand, sortBy]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          <h3>Error Loading Products</h3>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-5 text-center bg-dark text-white">
        <div className="container">
          <h1 className="fw-bold">Shop</h1>
          <p className="lead">Browse all networking products</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <aside className="col-md-3 mb-4">

              <div className="mb-4">
                <h5 className="fw-bold mb-3">Category</h5>
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All</option>
                  {subcategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-3">Brand</h5>
                <select
                  className="form-select"
                  value={selectedBrand}
                  onChange={e => setSelectedBrand(e.target.value)}
                >
                  <option value="all">All</option>
                  {brands.map(brand => (
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-3">Sort By</h5>
                <div className="list-group">
                  <button
                    className={"list-group-item list-group-item-action" + (sortBy === "name" ? " active" : "")}
                    onClick={() => setSortBy("name")}
                  >
                    Name (A-Z)
                  </button>
                  <button
                    className={"list-group-item list-group-item-action" + (sortBy === "price-low" ? " active" : "")}
                    onClick={() => setSortBy("price-low")}
                  >
                    Price: Low to High
                  </button>
                  <button
                    className={"list-group-item list-group-item-action" + (sortBy === "price-high" ? " active" : "")}
                    onClick={() => setSortBy("price-high")}
                  >
                    Price: High to Low
                  </button>
                </div>
              </div>
            </aside>

            <div className="col-md-9">
              {filteredProducts.length > 0 ? (
                <div className="row g-4">
                  {filteredProducts.map(p => (
                    <div key={p.pid} className="col-6 col-md-4 col-lg-3">
                      <ProductCard product={p} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <h3 className="fw-bold">No products found</h3>
                  <p className="text-muted">Try changing filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
