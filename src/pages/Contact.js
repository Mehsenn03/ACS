import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(function (prev) {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>

      {/* HERO */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: '#23272b' }}>
        <div className="container">
          <h1 className="fw-bold">Get in Touch</h1>
          <p className="lead mt-2">
            We're here to help with all your networking needs
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5">
        <div className="container">

          <div className="row g-5">

            {/* LEFT INFO */}
            <div className="col-md-5">
              <h2 className="fw-bold mb-3">Contact Information</h2>
              <p className="text-muted">
                Reach out to us via any of the following methods. We're here to support you.
              </p>


              {/* Phone */}
              <div className="d-flex align-items-start mb-4">
                <div className="me-3 text-primary d-flex align-items-center justify-content-center" style={{ width: 28, height: 28 }}>
                  <i className="bi bi-telephone fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Phone</h5>
                  <a href="tel:+9611234567" className="text-decoration-none">
                    +961 1 234 567
                  </a>
                  <p className="text-muted small">Mon–Fri • 9am–6pm</p>
                </div>
              </div>


              {/* Email */}
              <div className="d-flex align-items-start mb-4">
                <div className="me-3 text-primary d-flex align-items-center justify-content-center" style={{ width: 28, height: 28 }}>
                  <i className="bi bi-envelope fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email</h5>
                  <a href="mailto:info@allconnections.lb" className="text-decoration-none">
                    info@allconnections.lb
                  </a>
                  <p className="text-muted small">We usually respond within 24 hours.</p>
                </div>
              </div>


              {/* Location */}
              <div className="d-flex align-items-start mb-4">
                <div className="me-3 text-primary d-flex align-items-center justify-content-center" style={{ width: 28, height: 28 }}>
                  <i className="bi bi-geo-alt fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Location</h5>
                  <p className="text-muted small mb-0">
                    Beirut, Lebanon <br /> Visit us by appointment
                  </p>
                </div>
              </div>

              <h5 className="fw-bold mb-3 mt-4">Connect With Us</h5>
              <div className="d-flex gap-3">
                <a className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 44, height: 44 }} href="https://facebook.com" target="_blank" aria-label="Facebook">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a className="btn btn-outline-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: 44, height: 44 }} href="https://instagram.com" target="_blank" aria-label="Instagram">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
                <a className="btn btn-outline-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 44, height: 44 }} href="https://wa.me" target="_blank" aria-label="WhatsApp">
                  <i className="bi bi-whatsapp fs-4"></i>
                </a>
              </div>
            </div>

            <div className="col-12 col-md-7 d-flex justify-content-center align-items-center">
              <div className="card shadow-sm p-4 w-100" style={{ maxWidth: 600, background: '#f7f7f9', borderRadius: 18 }}>
                <h2 className="fw-bold mb-4 fs-4 text-center">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="form-control"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      style={{ resize: 'none' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: 8 }}>
                    Send Message →
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
