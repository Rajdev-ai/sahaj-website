const facebook = "https://www.facebook.com/share/19FPy9KZ9d/";
const instagram = "https://www.instagram.com/photographer__rajdev__143?igsh=MWg2cHZnMmY4dDh2bQ==";
const whatsapp = "https://wa.me/919005714672";
const email = "mailto:r85107362@gmail.com";

export default function SocialLinks() {
  return (
    <section className="social-links-section" aria-label="Social Media">
      <div className="social-links-inner">
        <p className="eyebrow">CONNECT WITH RAJDEV</p>
        <h2>हमसे Social Media पर जुड़ें</h2>
        <p className="social-subtitle">Latest updates, photography और services की जानकारी के लिए हमें follow करें।</p>
        <div className="social-links-grid">
          <a href={facebook} target="_blank" rel="noreferrer" className="social-link facebook"><span>f</span><div><strong>Facebook</strong><small>RAJDEV</small></div></a>
          <a href={instagram} target="_blank" rel="noreferrer" className="social-link instagram"><span>◎</span><div><strong>Instagram</strong><small>@photographer__rajdev__143</small></div></a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="social-link whatsapp-social"><span>◉</span><div><strong>WhatsApp</strong><small>Chat with Rajdev</small></div></a>
          <a href={email} className="social-link email-social"><span>✉</span><div><strong>Email</strong><small>r85107362@gmail.com</small></div></a>
        </div>
      </div>
    </section>
  );
}
