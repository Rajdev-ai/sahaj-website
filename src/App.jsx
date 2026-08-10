import { useState } from "react";
import "./App.css";
import logo from "./assets/LOGO.JPG";
import photo from "./assets/IMAGE.JPG";
import wedding1 from "./assets/wedding-1.jpg";
import wedding2 from "./assets/wedding-2.jpg";
import wedding3 from "./assets/wedding-3jpg.jpg";
import wedding4 from "./assets/wedding-4.jpg";
import wedding5 from "./assets/wedding-5.jpg";
import wedding6 from "./assets/wedding-6.jpg";
import wedding8 from "./assets/wedding-8.jpg";

const mapLink = "https://maps.app.goo.gl/XKr9xdErEf9zatGG7?g_st=ac";
const whatsappNumber = "919005714672";
const facebookLink = "https://www.facebook.com/share/19FPy9KZ9d/";
const instagramLink = "https://www.instagram.com/photographer__rajdev__143?igsh=MWg2cHZnMmY4dDh2bQ==";

const services = [
  ...["Aadhaar Services","Aadhaar Print","PAN Card","Voter ID","Driving Licence","RC / Vehicle Services","Ayushman Card","e-Shram Card","Farmer Registry","PM Kisan","PM Awas Yojana","Ration Card","Income Certificate","Caste Certificate","Residence Certificate","Birth Certificate","Death Certificate","Family ID / Family Register","Old Age Pension","Widow Pension","Disability Pension","Kanya Sumangala Yojana","Marriage Grant","Scholarship Forms","Government Job Forms","Exam Forms","Passport Application Assistance"].map(name => ({name, category:"Government"})),
  ...["Railway Ticket Booking","Electricity Bill Payment","Mobile Recharge","DTH Recharge","Online Payment Services","Online Application Assistance","Email / Online Assistance","Police Verification Assistance"].map(name => ({name, category:"Digital"})),
  ...["Colour Printing","Black & White Printing","Photocopy","Lamination","Scanning","PVC Card Printing","Photo Printing","4×6 Photo Print","5×7 Photo Print","8×12 Photo Print","Large Size Photo Print","Canvas Photo","Photo Frame","Photo Album"].map(name => ({name, category:"Printing"})),
  ...["Passport Size Photo","Visa Size Photo","ID Card Photo","Wedding Photography","Pre-Wedding Shoot","Birthday Photography","Event Photography","Engagement Photography","Photo Editing","Photo Retouching","Background Change","Old Photo Restoration","Photo Collage"].map(name => ({name, category:"Photography"})),
  ...["Wedding Videography","Cinematic Video","Wedding Album Designing","Drone Photography / Videography","Video Editing","Reels / Shorts Editing","Birthday Videography","Event Videography"].map(name => ({name, category:"Videography"}))
];

const categories = ["All","Government","Digital","Printing","Photography","Videography"];

function getWhatsAppMessage(service) {
  if (service.name === "PAN Card") return "नमस्ते Rajdev ji, मुझे PAN Card बनवाना है।";
  if (service.category === "Photography") return `नमस्ते Rajdev ji, मुझे ${service.name} की जानकारी चाहिए।`;
  if (service.category === "Videography") return `नमस्ते Rajdev ji, मुझे ${service.name} बुक करवानी है।`;
  if (service.category === "Printing") return `नमस्ते Rajdev ji, मुझे ${service.name} करवाना है।`;
  return `नमस्ते Rajdev ji, मुझे ${service.name} की सेवा चाहिए।`;
}

const whatsappLink = service => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage(service))}`;

const weddingGallery = [
  [wedding1,"Wedding Portrait"],[wedding2,"Bridal Portrait"],[wedding3,"Bridal Look"],[wedding4,"Wedding Portrait"],[wedding5,"Bridal Portrait"],[wedding6,"Wedding Ceremony"],[wedding8,"Wedding Rings"]
];

function App() {
  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("All");
  const [selectedPhoto,setSelectedPhoto] = useState(null);
  const filteredServices = services.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) && (category === "All" || s.category === category));

  return <div className="website">
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
          <div className="hero-buttons"><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn whatsapp">💬 WhatsApp</a><a href="tel:9005714672" className="btn call">📞 Call Now</a></div>
          <div className="contact-info"><p>📞 9005714672</p><p>📧 r85107362@gmail.com</p><p>📍 Village Chorthari, Post Mahadev Ghurahu,<br/>Itwa, Siddharth Nagar, UP - 272192</p></div>
        </div>
        <div className="hero-photo"><img src={photo} alt="RAJDEV"/><div className="photo-caption"><strong>RAJDEV</strong><span>Digital Service Provider</span></div></div>
      </section>

      <section style={{padding:"28px 5%",background:"linear-gradient(90deg,#071d36,#102f54,#071d36)",borderTop:"1px solid rgba(255,211,78,.25)",borderBottom:"1px solid rgba(255,211,78,.25)"}}><div style={{maxWidth:1150,margin:"auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:14}}>{[["⚡","Fast Service","तेज़ ऑनलाइन कार्य"],["🔒","Trusted Point","भरोसेमंद सेवा"],["💬","WhatsApp Apply","सीधे आवेदन करें"],["📞","Quick Support","Call / WhatsApp सहायता"]].map(([i,t,d])=><div key={t} style={{padding:"15px 18px",borderRadius:16,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",textAlign:"center"}}><div style={{fontSize:24}}>{i}</div><strong style={{display:"block",color:"#ffd34e",marginTop:5}}>{t}</strong><span style={{display:"block",color:"#d5dfeb",fontSize:12,marginTop:4}}>{d}</span></div>)}</div></section>

      <section style={{padding:"70px 5%",background:"#0a2341",color:"#fff"}}><div className="section-title"><p className="eyebrow">HOW IT WORKS</p><h2 style={{color:"#fff"}}>घर बैठे आवेदन करना अब आसान</h2><p style={{color:"#cbd9e8"}}>सिर्फ 3 आसान कदमों में अपनी सेवा के लिए संपर्क करें।</p></div><div style={{maxWidth:1050,margin:"auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18}}>{[["01","सेवा चुनें","अपनी जरूरत की सेवा खोजें।"],["02","Apply Now दबाएँ","Service के साथ WhatsApp बटन पर क्लिक करें।"],["03","WhatsApp पर बात करें","Message पहले से तैयार मिलेगा और आप सीधे Rajdev ji से संपर्क कर पाएँगे।"]].map(([n,t,d])=><div key={n} style={{padding:25,borderRadius:20,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,211,78,.22)"}}><div style={{width:48,height:48,borderRadius:14,background:"#ffd34e",color:"#071d36",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900}}>{n}</div><h3 style={{marginTop:18,color:"#ffd34e"}}>{t}</h3><p style={{marginTop:10,color:"#d7e2ee",lineHeight:1.7}}>{d}</p></div>)}</div></section>

      <section className="services" id="services"><div className="section-title"><p className="eyebrow">OUR SERVICES</p><h2>सभी सेवाएँ एक ही स्थान पर</h2><p>सरकारी, डिजिटल, प्रिंटिंग एवं फोटोग्राफी सेवाओं के लिए आज ही संपर्क करें।</p></div><div className="service-search"><input type="text" placeholder="🔍 Search Service... जैसे PAN, Photo, Wedding" value={search} onChange={e=>setSearch(e.target.value)}/></div><div className="category-buttons">{categories.map(item=><button key={item} className={category===item?"active":""} onClick={()=>setCategory(item)}>{item}</button>)}</div><p className="service-count">{filteredServices.length} Services Available</p><div className="service-grid">{filteredServices.map((s,i)=><div className="service-card" key={`${s.category}-${s.name}`}><span className="service-number">{String(i+1).padStart(2,"0")}</span><div style={{flex:1}}><h3>{s.name}</h3><p>{s.category} Service</p><a href={whatsappLink(s)} target="_blank" rel="noreferrer" className="btn whatsapp" style={{display:"inline-block",padding:"9px 13px",marginTop:10,fontSize:12,borderRadius:8}}>💬 Apply Now → WhatsApp</a></div></div>)}</div></section>

      <section className="gallery" id="gallery"><div className="section-title"><p className="eyebrow">RAJDEV PHOTOGRAPHY</p><h2>Professional Wedding Gallery</h2><p>हमारी Wedding Photography की चुनिंदा झलकियाँ</p></div><div className="gallery-grid">{weddingGallery.map(([img,title],i)=><button type="button" className="gallery-card" key={title+i} onClick={()=>setSelectedPhoto({img,title})} aria-label={`${title} photo खोलें`} style={{padding:0,textAlign:"left",font:"inherit",color:"inherit",cursor:"zoom-in"}}><img src={img} alt={`${title} - Rajdev Photography`}/><div className="gallery-overlay"><strong>{title}</strong><span>RAJDEV PHOTOGRAPHY</span></div><span style={{position:"absolute",top:14,right:14,width:38,height:38,borderRadius:"50%",display:"grid",placeItems:"center",background:"rgba(4,18,35,.78)",border:"1px solid rgba(255,211,78,.75)",color:"#ffd34e",fontSize:22,backdropFilter:"blur(8px)"}}>⌕</span></button>)}</div></section>

      <section className="about" id="about"><div className="about-content"><p className="eyebrow">ABOUT US</p><h2>आपकी सेवा, हमारी जिम्मेदारी</h2><p>SAHAJ JAN SEVA KENDRA & DIGITAL PHOTO STUDIO में विभिन्न सरकारी, ऑनलाइन, डिजिटल, प्रिंटिंग और फोटोग्राफी सेवाएँ उपलब्ध हैं।</p><div className="points"><span>✓ भरोसेमंद सेवा</span><span>✓ तेज़ ऑनलाइन कार्य</span><span>✓ उचित शुल्क</span><span>✓ डिजिटल सुविधा</span></div></div><div className="about-card"><h3>RAJDEV</h3><p>Digital Service Provider</p><p>📞 9005714672</p><p>📧 r85107362@gmail.com</p></div></section>

      <section className="contact" id="contact"><div className="section-title"><p className="eyebrow">CONTACT & LOCATION</p><h2>हमसे संपर्क करें</h2><p>📍 Village Chorthari, Post Mahadev Ghurahu, Itwa, Siddharth Nagar, Uttar Pradesh - 272192</p></div><div className="map-box"><div className="map-info"><h3>📍 हमारा Location</h3><p>Village Chorthari, Post Mahadev Ghurahu, Itwa, Siddharth Nagar, UP - 272192</p><div className="hero-buttons"><a href={mapLink} target="_blank" rel="noreferrer" className="btn call">🧭 Get Directions</a><a href={mapLink} target="_blank" rel="noreferrer" className="btn whatsapp">🗺️ Open Google Maps</a></div></div><div className="map-frame"><iframe title="SAHAJ JAN SEVA KENDRA Location" src="https://www.google.com/maps?q=Village%20Chorthari%2C%20Post%20Mahadev%20Ghurahu%2C%20Itwa%2C%20Siddharth%20Nagar%2C%20Uttar%20Pradesh%20272192&output=embed" loading="lazy" allowFullScreen></iframe></div></div><div className="contact-buttons"><a href="tel:9005714672" className="btn call">📞 Call Now</a><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn whatsapp">💬 WhatsApp</a><a href="mailto:r85107362@gmail.com" className="btn call">📧 Email</a></div></section>

      <section id="social" style={{padding:"65px 5%",background:"linear-gradient(135deg,#071d36,#102f54)",borderTop:"1px solid rgba(255,211,78,.18)"}}><div className="section-title"><p className="eyebrow">FOLLOW RAJDEV</p><h2 style={{color:"#fff"}}>हमसे Social Media पर जुड़ें</h2><p style={{color:"#cbd9e8"}}>नई Photography, Wedding Gallery और Digital Services के अपडेट सबसे पहले पाएँ।</p></div><div style={{maxWidth:850,margin:"28px auto 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18}}><a href={instagramLink} target="_blank" rel="noreferrer" style={{textDecoration:"none",padding:"24px",borderRadius:20,background:"linear-gradient(135deg,rgba(225,48,108,.18),rgba(131,58,180,.18))",border:"1px solid rgba(255,255,255,.14)",color:"#fff",textAlign:"center",boxShadow:"0 14px 40px rgba(0,0,0,.18)"}}><div style={{fontSize:34}}>◎</div><strong style={{display:"block",fontSize:20,color:"#ffd34e",marginTop:8}}>Instagram</strong><span style={{display:"block",marginTop:6,color:"#d7e2ee"}}>@photographer__rajdev__143</span><span style={{display:"inline-block",marginTop:14,padding:"8px 14px",borderRadius:999,background:"rgba(255,255,255,.1)",fontSize:12}}>View Profile →</span></a><a href={facebookLink} target="_blank" rel="noreferrer" style={{textDecoration:"none",padding:"24px",borderRadius:20,background:"rgba(24,119,242,.14)",border:"1px solid rgba(255,255,255,.14)",color:"#fff",textAlign:"center",boxShadow:"0 14px 40px rgba(0,0,0,.18)"}}><div style={{fontSize:34,fontWeight:900}}>f</div><strong style={{display:"block",fontSize:20,color:"#ffd34e",marginTop:8}}>Facebook</strong><span style={{display:"block",marginTop:6,color:"#d7e2ee"}}>RAJDEV Photography</span><span style={{display:"inline-block",marginTop:14,padding:"8px 14px",borderRadius:999,background:"rgba(255,255,255,.1)",fontSize:12}}>View Profile →</span></a></div></section>
    </main>

    {selectedPhoto && <div onClick={()=>setSelectedPhoto(null)} role="dialog" aria-modal="true" style={{position:"fixed",inset:0,zIndex:100000,background:"rgba(1,7,16,.92)",backdropFilter:"blur(14px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"}}><button type="button" onClick={()=>setSelectedPhoto(null)} aria-label="Close" style={{position:"fixed",top:20,right:24,width:48,height:48,borderRadius:"50%",border:"1px solid rgba(255,211,78,.7)",background:"rgba(7,29,54,.9)",color:"#ffd34e",fontSize:32,cursor:"pointer",zIndex:100001}}>×</button><div onClick={e=>e.stopPropagation()} style={{width:"min(920px,94vw)",maxHeight:"92vh",display:"flex",flexDirection:"column",alignItems:"center",gap:12}}><img src={selectedPhoto.img} alt={selectedPhoto.title} style={{maxWidth:"100%",maxHeight:"78vh",objectFit:"contain",borderRadius:18,border:"2px solid rgba(255,211,78,.7)",boxShadow:"0 25px 80px rgba(0,0,0,.55)"}}/><div style={{textAlign:"center",color:"#fff"}}><strong style={{display:"block",fontSize:22,color:"#ffd34e"}}>{selectedPhoto.title}</strong><span style={{display:"block",marginTop:4,fontSize:12,letterSpacing:2,color:"#d9e4ef"}}>RAJDEV PHOTOGRAPHY</span></div></div></div>}

    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="WhatsApp">💬</a>
    <footer className="footer"><strong>SAHAJ JAN SEVA KENDRA</strong><p>& DIGITAL PHOTO STUDIO</p><p>Owner: RAJDEV | 9005714672</p><p>© 2026 RAJDEV. All Rights Reserved.</p></footer>
  </div>;
}

export default App;
