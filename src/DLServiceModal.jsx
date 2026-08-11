import { useEffect, useState } from "react";

const WHATSAPP = "919005714672";

export default function DLServiceModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dlNumber, setDlNumber] = useState("");
  const [dob, setDob] = useState("");

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.("a");
      if (!link) return;
      const card = link.closest?.(".service-card");
      const title = card?.querySelector?.("h3")?.textContent?.trim() || "";
      if (/^(Driving Licence|DL PDF Verification)$/i.test(title)) {
        event.preventDefault();
        event.stopPropagation();
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const message = [
      "नमस्ते Rajdev ji, मुझे DL PDF Verification Service चाहिए।",
      "",
      `ग्राहक नाम: ${name}`,
      `मोबाइल नंबर: ${mobile}`,
      `DL Number: ${dlNumber}`,
      `DOB: ${dob}`,
      "",
      "कृपया मेरी DL PDF enquiry आगे बढ़ाएँ।"
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const inputStyle = {
    width: "100%", boxSizing: "border-box", padding: "13px 14px", marginTop: 7, marginBottom: 14,
    borderRadius: 12, border: "1px solid rgba(255,211,78,.35)", background: "#0b2747", color: "#fff",
    outline: "none", fontSize: 15
  };

  return (
    <>
      {/* Dedicated service box — always visible */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open DL PDF Verification Service"
        style={{
          position: "fixed", right: 16, bottom: 86, zIndex: 10000, width: "min(270px, calc(100vw - 32px))",
          padding: "15px 17px", borderRadius: 18, border: "1px solid rgba(255,211,78,.55)",
          background: "linear-gradient(135deg,#102f54,#071d36)", color: "#fff", textAlign: "left",
          boxShadow: "0 12px 35px rgba(0,0,0,.38)", cursor: "pointer"
        }}
      >
        <span style={{ display: "block", color: "#ffd34e", fontSize: 11, fontWeight: 900, letterSpacing: 1 }}>NEW ONLINE SERVICE</span>
        <strong style={{ display: "block", fontSize: 17, marginTop: 4 }}>🪪 DL PDF Verification</strong>
        <span style={{ display: "block", color: "#cbd9e8", fontSize: 12, marginTop: 4 }}>DL Number + DOB → Details Submit → WhatsApp</span>
        <span style={{ display: "inline-block", marginTop: 9, padding: "7px 11px", borderRadius: 9, background: "#20d66b", color: "#06233b", fontWeight: 900, fontSize: 12 }}>Click to Apply →</span>
      </button>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="DL PDF Verification Form" onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 200000, background: "rgba(0,7,16,.82)", backdropFilter: "blur(7px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(520px, 100%)", maxHeight: "92vh", overflowY: "auto", borderRadius: 24, padding: 24, background: "linear-gradient(145deg,#102f54,#071d36)", border: "1px solid rgba(255,211,78,.5)", boxShadow: "0 25px 80px rgba(0,0,0,.55)", color: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div>
                <div style={{ color: "#ffd34e", fontSize: 13, fontWeight: 900, letterSpacing: 1 }}>ONLINE SERVICE</div>
                <h2 style={{ margin: "6px 0 4px", fontSize: 24 }}>🪪 DL PDF Verification</h2>
                <p style={{ margin: 0, color: "#cbd9e8", fontSize: 13, lineHeight: 1.5 }}>Details भरें → Submit करें → WhatsApp पर enquiry भेजें।</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close" style={{ width: 40, height: 40, flex: "0 0 auto", borderRadius: "50%", border: "1px solid rgba(255,211,78,.45)", background: "rgba(255,255,255,.08)", color: "#ffd34e", fontSize: 24, cursor: "pointer" }}>×</button>
            </div>

            <form onSubmit={submit} style={{ marginTop: 20 }}>
              <label>👤 ग्राहक का नाम<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="नाम लिखें" style={inputStyle} /></label>
              <label>📱 मोबाइल नंबर<input required type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength="10" value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="10 अंकों का मोबाइल नंबर" style={inputStyle} /></label>
              <label>🪪 DL Number<input required value={dlNumber} onChange={(e) => setDlNumber(e.target.value.toUpperCase())} placeholder="जैसे UPXX0000000000" style={inputStyle} /></label>
              <label>📅 Date of Birth<input required type="date" value={dob} onChange={(e) => setDob(e.target.value)} style={inputStyle} /></label>
              <div style={{ padding: "11px 13px", margin: "2px 0 18px", borderRadius: 12, background: "rgba(255,211,78,.08)", border: "1px solid rgba(255,211,78,.2)", color: "#d7e2ee", fontSize: 12, lineHeight: 1.5 }}>
                ℹ️ Submit के बाद WhatsApp खुलेगा। वहाँ <strong style={{ color: "#ffd34e" }}>Send</strong> दबाएँ। जरूरत होने पर DL की photo/document भी वहीं attach कर सकते हैं।
              </div>
              <button type="submit" style={{ width: "100%", padding: "14px 16px", border: 0, borderRadius: 13, background: "#20d66b", color: "#071d36", fontWeight: 900, fontSize: 16, cursor: "pointer" }}>💬 Details Submit → WhatsApp</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
