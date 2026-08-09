import "./gallery-premium.css";

const galleryItems = [
  { title: "Bridal Portrait", image: "data:image/webp;base64,U0FNUExF" }
];

export default function GalleryUpgrade() {
  return (
    <section className="premium-gallery" id="premium-gallery">
      <div className="premium-gallery-head">
        <p>RAJDEV PHOTOGRAPHER</p>
        <h2>Professional Wedding Gallery</h2>
        <span>हमारे Photography &amp; Wedding Work की चुनिंदा झलक</span>
      </div>
      <div className="premium-gallery-grid">
        {galleryItems.map((item, index) => (
          <a className="premium-gallery-card" href={item.image} target="_blank" rel="noreferrer" key={item.title + index}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="premium-gallery-overlay"><span>0{index + 1}</span><div><strong>{item.title}</strong><small>RAJDEV PHOTOGRAPHY</small></div><b>↗</b></div>
          </a>
        ))}
      </div>
      <div className="premium-gallery-cta"><div><strong>Wedding Photography / Videography</strong><span>बुकिंग और पैकेज की जानकारी के लिए WhatsApp करें।</span></div><a href="https://wa.me/919005714672?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Rajdev%20ji%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20Wedding%20Photography%20%E0%A4%95%E0%A5%80%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4" target="_blank" rel="noreferrer">💬 WhatsApp Booking</a></div>
    </section>
  );
}
