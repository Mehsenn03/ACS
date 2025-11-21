export const About = () => {
  const brands = [
    { name: "Ubiquiti", description: "Enterprise wireless solutions" },
    { name: "MikroTik", description: "Advanced routing systems" },
    { name: "Mimosa", description: "Point-to-point wireless" },
    { name: "Cisco", description: "Enterprise networking" },
    { name: "TP-Link", description: "Consumer & SMB solutions" },
    { name: "Netis", description: "Affordable networking" }
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "6", label: "Premium Brands" },
    { number: "1000+", label: "Happy Customers" },
    { number: "100%", label: "Quality Guaranteed" }
  ];

  return (
    <div className="w-100">
      <section className="py-5 text-center bg-dark text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead mt-3">
            Your trusted networking solutions partner since 2013
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p>
                <strong>ALL CONNECTIONS SARL</strong> is a
                telecommunications company based in Lebanon, established in
                2013. We provide networking
                solutions and products related to network
                infrastructure.
              </p>
              <p>
                Our commitment to excellence and customer satisfaction has made
                us a trusted partner for businesses and individuals seeking
                reliable networking equipment and solutions.
              </p>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 text-center">
              <img
                src={process.env.PUBLIC_URL+"/assets/brands/about_logo.jpg"}
                alt="Networking Equipment"
                className="img-fluid rounded shadow"
                style={{ maxWidth: '180px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Trusted Brands We Work With</h2>
          <p className="text-muted mb-4">
            We partner with the world's leading networking equipment
            manufacturers
          </p>

          <div className="row g-4">
            {brands.map((brand) => (
              <div key={brand.name} className="col-6 col-md-4">
                <div className="p-4 border rounded shadow-sm h-100">
                  <h5 className="fw-bold mb-2">{brand.name}</h5>
                  <p className="text-muted">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Core Values</h2>

          <div className="row g-4">
            <div className="col-md-3 col-6">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="mb-3 display-6">✔️</div>
                <h5 className="fw-bold">Quality First</h5>
                <p className="text-muted small">
                  Products from official distributors with full manufacturer
                  warranties.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="mb-3 display-6">👥</div>
                <h5 className="fw-bold">Customer Focus</h5>
                <p className="text-muted small">
                  Expert consultation and reliable support for all networking
                  needs.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="mb-3 display-6">⚡</div>
                <h5 className="fw-bold">Innovation</h5>
                <p className="text-muted small">
                  Delivering the latest and most advanced networking solutions.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="mb-3 display-6">🔒</div>
                <h5 className="fw-bold">Reliability</h5>
                <p className="text-muted small">
                  Consistent quality, fast delivery, and dependable service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <div className="row g-4">
            {stats.map((st, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="fs-1 fw-bold">{st.number}</div>
                <div className="text-uppercase mt-2 small">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center" style={{ maxWidth: "700px" }}>
          <h2 className="fw-bold mb-3">Our Mission</h2>
          <p className="text-muted">
            To empower businesses and homes in Lebanon with reliable,
            cutting-edge networking solutions that enable seamless connectivity
            and drive digital transformation.
          </p>
        </div>
      </section>
    </div>
  );
};
