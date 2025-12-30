import { useState, useEffect } from "react"; 
import { useSearchParams, Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";
import "../styles/Search.css";


export const Search = function () {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchProducts } = useProducts();

  useEffect(() => {
    const performSearch = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const searchResults = await searchProducts(query);
        setResults(searchResults);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    performSearch();
  }, [query, searchProducts]);

  return (
    <div className="search">
      <section className="search-header">
        <div className="search-header-content container">
          <h1 className="search-title">Search Results</h1>
          {query && (
            <p className="search-query">
              Showing results for: <strong>"{query}"</strong>
            </p>
          )}
        </div>
      </section>

      <section className="search-section">
        <div className="search-container container">
          {!query ? (
            <div className="search-empty text-center py-5">
              <svg
                className="search-empty-icon mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="search-empty-title mb-2">No Search Query</h3>
              <p className="search-empty-text mb-3">
                Please enter a search term to find products.
              </p>
              <Link to="/" className="search-home-link btn btn-primary">
                Back to Home
              </Link>
            </div>
          ) : loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Searching products...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center">
              <h3>Error Searching Products</h3>
              <p>{error}</p>
              <button className="btn btn-primary" onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          ) : results.length > 0 ? (
            <>
              <div className="search-results-header mb-3">
                <p className="search-count">
                  Found <strong>{results.length}</strong> product{results.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="search-grid row g-4">
                {results.map((product) => (
                  <div key={product.pid} className="col-12 col-sm-6 col-lg-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="search-empty text-center py-5">
              <svg
                className="search-empty-icon mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="search-empty-title mb-2">No Products Found</h3>
              <p className="search-empty-text mb-3">
                We couldn't find any products matching "{query}". Try different keywords.
              </p>
              <Link to="/" className="search-home-link btn btn-primary">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
