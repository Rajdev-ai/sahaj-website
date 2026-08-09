import { useState } from "react";
import "./App.css";
import logo from "./assets/LOGO.JPG";
import photo from "./assets/IMAGE.JPG";

const mapLink = "https://maps.app.goo.gl/XKr9xdErEf9zatGG7?g_st=ac";
const whatsappNumber = "919005714672";

const services = [
  { name: "Aadhaar Services", category: "Government" }, { name: "Aadhaar Print", category: "Government" },
  { name: "PAN Card", category: "Government" }, { name: "Voter ID", category: "Government" },
  { name: "Driving Licence", category: "Government" }, { name: "RC / Vehicle Services", category: "Government" },
  { name: "Ayushman Card", category: "Government" }, { name: "e-Shram Card", category: "Government" },
  { name: "Farmer Registry", category: "Government" }, { name: "PM Kisan", category: "Government" },
  { name: "PM Awas Yojana", category: "Government" }, { name: "Ration Card", category: "Government" },
  { name: "Income Certificate", category: "Government" }, { name: "Caste Certificate", category: "Government" },
  { name: "Residence Certificate", category: "Government" }, { name: "Birth Certificate", category: "Government" },
  { name: "Death Certificate", category: "Government" }, { name: "Family ID / Family Register", category: "Government" },
  { name: "Old Age Pension", category: "Government" }, { name: "Widow Pension", category: "Government" },
  { name: "Disability Pension", category: "Government" }, { name: "Kanya Sumangala Yojana", category: "Government" },
  { name: "Marriage Grant", category: "Government" }, { name: "Scholarship Forms", category: "Government" },
  { name: "Government Job Forms", category: "Government" }, { name: "Exam Forms", category: "Government" },
  { name: "Passport Application Assistance", category: "Government" },
  { name: "Railway Ticket Booking", category: "Digital" }, { name: "Electricity Bill Payment", category: "Digital" },
  { name: "Mobile Recharge", category: "Digital" }, { name: "DTH Recharge", category: "Digital" },
  { name: "Online Payment Services", category: "Digital" }, { name: "Online Application Assistance", category: "Digital" },
  { name: "Email / Online Assistance", category: "Digital" }, { name: "Police Verification Assistance", category: "Digital" },
  { name: "Colour Printing", category: "Printing" }, { name: "Black & White Printing", category: "Printing" },
  { name: "Photocopy", category: "Printing" }, { name: "Lamination", category: "Printing" },
  { name: "Scanning", category: "Printing" }, { name: "PVC Card Printing", category: "Printing" },
  { name: "Photo Printing", category: "Printing" }, { name: "4×6 Photo Print", category: "Printing" },
  { name: "5×7 Photo Print", category: "Printing" }, { name: "8×12 Photo Print", category: "Printing" },
  { name: "Large Size Photo Print", category: "Printing" }, { name: "Canvas Photo", category: "Printing" },
  { name: "Photo Frame", category: "Printing" }, { name: "Photo Album", category: "Printing" },
  { name: "Passport Size Photo", category: "Photography" }, { name: "Visa Size Photo", category: "Photography" },
  { name: "ID Card Photo", category: "Photography" }, { name: "Wedding Photography", category: "Photography" },
  { name: "Pre-Wedding Shoot", category: "Photography" }, { name: "Birthday Photography", category: "Photography" },
  { name: "Event Photography", category: "Photography" }, { name: "Engagement Photography", category: "Photography" },
  { name: "Photo Editing", category: "Photography" }, { name: "Photo Retouching", category: "Photography" },
  { name: "Background Change", category: "Photography" }, { name: "Old Photo Restoration", category: "Photography" },
  { name: "Photo Collage", category: "Photography" },
  { name: "Wedding Videography", category: "Videography" }, { name: "Cinematic Video", category: "Videography" },
  { name: "Wedding Album Designing", category: "Videography" }, { name: "Drone Photography / Videography", category: "Videography" },
  { name: "Video Editing", category: "Videography" }, { name: "Reels / Shorts Editing", category: "Videography" },
  { name: "Birthday Videography", category: "Videography" }, { name: "Event Videography", category: "Videography" },
];

const categories = ["All", "Government", "Digital", "Printing", "Photography", "Videography"];

function getWhatsAppMessage(service) {
  if (service.name === "PAN Card") return "नमस्ते Rajdev ji, मुझे PAN Card बनवाना है।";
  if (service.category === "Photography") return `नमस्ते Rajdev ji, मुझे ${service.name} की जानकारी चाहिए।`;
  if (service.category === "Videography") return `नमस्ते Rajdev ji, मुझे ${service.name} बुक करवानी है।`;
  if (service.category === "Printing") return `नमस्ते Rajdev ji, मुझे ${service.name} करवाना है।`;
  return `नमस्ते Rajdev ji, मुझे ${service.name} की सेवा चाहिए।`;
}

function whatsappLink(service) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage(service))}`;
}

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || service.category === category)
  );

  return (
    <div className="website">
      <nav className="navbar">
        <div className="nav-title">SAHAJ JAN SEVA KENDRA<span>& DIGITAL PHOTO STUDIO</span></div>
        <div className="nav-links"><a href="#home">Home</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="nav-whatsapp">WhatsApp</a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <img src={logo} alt="SAHAJ JAN SEVA KENDRA Logo" className="main-logo" />
            <p className="eyebrow">TRUSTED LOCAL SERVICE POINT</p>
            <h1>SAHAJ JAN SEVA KENDRA</h1><h2>& DIGITAL PHOTO STUDIO</h2>
            <p className="owner">Owner: <strong>RAJDEV</strong></p>
            <p className="hero-description">आपकी सभी सरकारी, ऑनलाइन, डिजिटल और फोटोग्राफी सेवाएँ अब एक ही स्थान पर।</p>
            <div className="hero-buttons">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn whatsapp">💬 WhatsApp</a>
              <a href="tel:9005714672" className="btn call">📞 Call Now</a>
            </div>
            <div className="contact-info"><p>📞 9005714672</p><p>📧 r85107362@gmail.com</p><p>📍 Village Chorthari, Post Mahadev Ghurahu,<br />Itwa, Siddharth Nagar, UP - 272192</p></div>
          </div>
          <div className="hero-photo"><img src={photo} alt="RAJDEV" /><div className="photo-caption"><strong>RAJDEV</strong><span>Digital Service Provider</span></div></div>
        </section>

        {/* PREMIUM QUICK ACTIONS */}
        <section style={{ padding: "28px 5%", background: "linear-gradient(90deg,#071d36,#102f54,#071d36)", borderTop: "1px solid rgba(255,211,78,.25)", borderBottom: "1px solid rgba(255,211,78,.25)" }}>
          <div style={{ maxWidth: 1150, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
            {[
              ["⚡", "Fast Service", "तेज़ ऑनलाइन कार्य"],
              ["🔒", "Trusted Point", "भरोसेमंद सेवा"],
              ["💬", "WhatsApp Apply", "सीधे आवेदन करें"],
              ["📞", "Quick Support", "Call / WhatsApp सहायता"],
            ].map(([icon, title, text]) => (
              <div key={title} style={{ padding: "15px 18px", borderRadius: 16, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", textAlign: "center" }}>
                <div style={{ fontSize: 24 }}>{icon}</div>
                <strong style={{ display: "block", color: "#ffd34e", marginTop: 5 }}>{title}</strong>
                <span style={{ display: "block", color: "#d5dfeb", fontSize: 12, marginTop: 4 }}>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-title"><p className="eyebrow">OUR SERVICES</p><h2>सभी सेवाएँ एक ही स्थान पर</h2><p>सरकारी, डिजिटल, प्रिंटिंग एवं फोटोग्राफी सेवाओं के लिए आज ही संपर्क करें।</p></div>
          <div className="service-search"><input type="text" placeholder="🔍 Search Service... जैसे PAN, Photo, Wedding" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
          <div className="category-buttons">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
          <p className="service-count">{filteredServices.length} Services Available</p>
          <div className="service-grid">
            {filteredServices.map((service, index) => (
              <div className="service-card" key={`${service.category}-${service.name}`}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <div style={{ flex: 1 }}><h3>{service.name}</h3><p>{service.category} Service</p>
                  <a href={whatsappLink(service)} target="_blank" rel="noreferrer" className="btn whatsapp" style={{ display: "inline-block", padding: "9px 13px", marginTop: "10px", fontSize: "12px", borderRadius: "8px" }}>💬 Apply Now → WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
          {filteredServices.length === 0 && <div className="no-service"><h3>Service नहीं मिली</h3><p>कृपया दूसरा नाम Search करें।</p></div>}
        </section>

        <section className="gallery" id="gallery">
          <div className="section-title"><p className="eyebrow">OUR GALLERY</p><h2>हमारी Gallery</h2><p>Photography और Digital Studio की झलक</p></div>
          <div className="gallery-grid">
            <div className="gallery-card"><img src={photo} alt="Rajdev Photography" /><div className="gallery-overlay"><strong>Photography</strong><span>RAJDEV</span></div></div>
            <div className="gallery-card"><img src={logo} alt="Sahaj Jan Seva Kendra" /><div className="gallery-overlay"><strong>Digital Studio</strong><span>SAHAJ JAN SEVA KENDRA</span></div></div>
            <div className="gallery-card"><img src={photo} alt="Photo Studio" /><div className="gallery-overlay"><strong>Photo Studio</strong><span>Professional Service</span></div></div>
            <div className="gallery-card"><img src={logo} alt="Digital Services" /><div className="gallery-overlay"><strong>Digital Services</strong><span>Trusted Service Point</span></div></div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content"><p className="eyebrow">ABOUT US</p><h2>आपकी सेवा, हमारी जिम्मेदारी</h2><p>SAHAJ JAN SEVA KENDRA & DIGITAL PHOTO STUDIO में विभिन्न सरकारी, ऑनलाइन, डिजिटल, प्रिंटिंग और फोटोग्राफी सेवाएँ उपलब्ध हैं।</p><div className="points"><span>✓ भरोसेमंद सेवा</span><span>✓ तेज़ ऑनलाइन कार्य</span><span>✓ उचित शुल्क</span><span>✓ डिजिटल सुविधा</span></div></div>
          <div className="about-card"><h3>RAJDEV</h3><p>Digital Service Provider</p><p>📞 9005714672</p><p>📧 r85107362@gmail.com</p></div>
        </section>

        <section className="contact" id="contact">
          <div className="section-title"><p className="eyebrow">CONTACT & LOCATION</p><h2>हमसे संपर्क करें</h2><p>📍 Village Chorthari, Post Mahadev Ghurahu, Itwa, Siddharth Nagar, Uttar Pradesh - 272192</p></div>
          <div className="map-box">
            <div className="map-info"><h3>📍 हमारा Location</h3><p>Village Chorthari, Post Mahadev Ghurahu, Itwa, Siddharth Nagar, UP - 272192</p><div className="hero-buttons"><a href={mapLink} target="_blank" rel="noreferrer" className="btn call">🧭 Get Directions</a><a href={mapLink} target="_blank" rel="noreferrer" className="btn whatsapp">🗺️ Open Google Maps</a></div></div>
            <div className="map-frame"><iframe title="SAHAJ JAN SEVA KENDRA Location" src="https://www.google.com/maps?q=Village%20Chorthari%2C%20Post%20Mahadev%20Ghurahu%2C%20Itwa%2C%20Siddharth%20Nagar%2C%20Uttar%20Pradesh%20272192&output=embed" loading="lazy" allowFullScreen></iframe></div>
          </div>
          <div className="contact-buttons"><a href="tel:9005714672" className="btn call">📞 Call Now</a><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn whatsapp">💬 WhatsApp</a><a href="mailto:r85107362@gmail.com" className="btn call">📧 Email</a></div>
        </section>
      </main>

      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="WhatsApp">💬</a>
      <footer className="footer"><strong>SAHAJ JAN SEVA KENDRA</strong><p>& DIGITAL PHOTO STUDIO</p><p>Owner: RAJDEV | 9005714672</p><p>© 2026 RAJDEV. All Rights Reserved.</p></footer>
    </div>
  );
}

export default App;
