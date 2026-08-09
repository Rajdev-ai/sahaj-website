function Reviews() {
  const reviews = [
    { name: "ग्राहक समीक्षा", text: "बहुत अच्छी और भरोसेमंद सेवा। ऑनलाइन काम जल्दी हो गया।" },
    { name: "स्थानीय ग्राहक", text: "फोटो और डिजिटल सेवाओं की सुविधा एक ही जगह मिल जाती है।" },
    { name: "Satisfied Customer", text: "WhatsApp से संपर्क करना आसान है और जवाब जल्दी मिलता है।" },
  ];

  return (
    <section style={{ padding: "80px 5%", background: "#f6f7f9", color: "#10233c" }}>
      <div style={{ maxWidth: 820, margin: "0 auto 38px", textAlign: "center" }}>
        <p style={{ color: "#b78900", fontWeight: 800, letterSpacing: 3, marginBottom: 10 }}>CUSTOMER REVIEWS</p>
        <h2 style={{ fontSize: "clamp(30px,4vw,42px)", margin: 0, fontWeight: 900 }}>हमारे ग्राहकों का भरोसा ⭐</h2>
        <p style={{ color: "#626b78", lineHeight: 1.7, marginTop: 12 }}>आपकी संतुष्टि हमारी सबसे बड़ी पहचान है।</p>
        <div style={{ marginTop: 16, fontSize: 22, letterSpacing: 4 }}>★★★★★</div>
      </div>
      <div style={{ maxWidth: 1150, margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
        {reviews.map((review) => (
          <div key={review.name} style={{ background: "white", border: "1px solid #e2bc38", borderRadius: 20, padding: 25, boxShadow: "0 12px 30px rgba(15,35,60,.08)" }}>
            <div style={{ color: "#e2bc38", fontSize: 20, letterSpacing: 2 }}>★★★★★</div>
            <p style={{ margin: "16px 0", color: "#4e5967", lineHeight: 1.8 }}>“{review.text}”</p>
            <strong style={{ color: "#102d50" }}>— {review.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Reviews;
