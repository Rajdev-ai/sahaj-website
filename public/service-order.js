(() => {
  const WA = '919005714672';
  const SERVICE_DETAILS = {
    'Driving Licence': 'DL Number + Date of Birth देकर DL PDF verification/generation assistance.',
    'Aadhaar Services': 'Aadhaar related online service assistance.',
    'PAN Card': 'PAN application/correction assistance.',
    'Ayushman Card': 'Ayushman card application/download assistance.',
    'Voter ID': 'Voter ID application/correction assistance.',
    'RC / Vehicle Services': 'RC और vehicle related online assistance.'
  };

  const style = document.createElement('style');
  style.textContent = `
    .service-order-overlay{position:fixed;inset:0;z-index:100000;background:rgba(1,8,18,.82);backdrop-filter:blur(10px);display:none;align-items:center;justify-content:center;padding:16px}
    .service-order-modal{width:min(620px,96vw);max-height:92vh;overflow:auto;background:linear-gradient(145deg,#102f54,#071d36);border:1px solid rgba(255,211,78,.55);border-radius:24px;box-shadow:0 30px 100px rgba(0,0,0,.55);padding:24px;color:#fff;font-family:Arial,sans-serif}
    .service-order-close{float:right;width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,211,78,.55);background:#071d36;color:#ffd34e;font-size:24px;cursor:pointer}
    .service-order-title{color:#ffd34e;font-size:25px;font-weight:900;margin:4px 48px 6px 0}.service-order-sub{color:#cbd9e8;line-height:1.55;margin:0 0 18px}
    .service-order-live{display:inline-block;background:#20d66f;color:#062414;padding:6px 10px;border-radius:999px;font-size:11px;font-weight:900;margin-bottom:12px}
    .service-order-label{display:block;font-weight:800;margin:13px 0 7px}.service-order-input,.service-order-select,.service-order-textarea{width:100%;padding:13px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;outline:none;font-size:14px}.service-order-select option{background:#102f54;color:#fff}.service-order-textarea{min-height:82px;resize:vertical}
    .service-order-submit{width:100%;margin-top:18px;border:0;border-radius:13px;padding:14px;background:#20d66f;color:#062414;font-weight:900;font-size:16px;cursor:pointer}.service-order-note{font-size:12px;color:#aebfd0;line-height:1.55;margin-top:12px}.service-order-success{display:none;margin-top:14px;padding:13px;border-radius:12px;background:rgba(32,214,111,.12);border:1px solid rgba(32,214,111,.4);color:#dfffea;font-size:13px;line-height:1.55}
    .service-order-doc{margin-top:10px;padding:11px;border:1px dashed rgba(255,211,78,.45);border-radius:12px;color:#cbd9e8;font-size:12px}
    .service-live-banner{margin:0 auto 22px;max-width:1150px;padding:18px 20px;border-radius:18px;background:linear-gradient(135deg,rgba(32,214,111,.12),rgba(255,211,78,.08));border:1px solid rgba(255,211,78,.3);color:#fff}.service-live-banner strong{color:#ffd34e}
    @media(max-width:600px){.service-order-modal{padding:18px}.service-order-title{font-size:21px}}
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.className = 'service-order-overlay';
  overlay.innerHTML = `
    <div class="service-order-modal" role="dialog" aria-modal="true" aria-labelledby="serviceOrderTitle">
      <button class="service-order-close" type="button" aria-label="Close">×</button>
      <span class="service-order-live">● SERVICE REQUEST</span>
      <h2 class="service-order-title" id="serviceOrderTitle">Service लें</h2>
      <p class="service-order-sub" id="serviceOrderSub">अपनी details submit करें। Submit के बाद WhatsApp खुलेगा; जरूरी documents वहीं attach करके भेजें और हमारी तरफ से document/service update का इंतजार करें।</p>
      <form id="serviceOrderForm">
        <label class="service-order-label">👤 ग्राहक का नाम</label>
        <input class="service-order-input" id="soName" required placeholder="अपना पूरा नाम">
        <label class="service-order-label">📱 मोबाइल नंबर</label>
        <input class="service-order-input" id="soMobile" required inputmode="numeric" pattern="[0-9]{10}" maxlength="10" placeholder="10 अंकों का मोबाइल नंबर">
        <label class="service-order-label">🛠️ चुनी गई सेवा</label>
        <input class="service-order-input" id="soService" readonly>
        <label class="service-order-label">📝 जरूरी जानकारी</label>
        <textarea class="service-order-textarea" id="soDetails" placeholder="उदाहरण: DL Number + DOB, Aadhaar/PAN details या अपना काम लिखें"></textarea>
        <div class="service-order-doc">📎 Documents: WhatsApp खुलने के बाद अपनी service के जरूरी documents/photo वहाँ attach करके Send करें। वेबसाइट आपके documents को server पर upload नहीं करती।</div>
        <button class="service-order-submit" type="submit">💬 Details Submit → WhatsApp खोलें</button>
        <div class="service-order-success" id="soSuccess">✅ Details तैयार हैं। WhatsApp में message खुल रहा है। वहाँ documents attach करके भेज दें।</div>
        <p class="service-order-note">🔒 Privacy: Details इस form से सीधे WhatsApp message में जाती हैं। कोई document website पर store नहीं किया जाता।</p>
      </form>
    </div>`;
  document.body.appendChild(overlay);

  const title = overlay.querySelector('#serviceOrderTitle');
  const sub = overlay.querySelector('#serviceOrderSub');
  const form = overlay.querySelector('#serviceOrderForm');
  const name = overlay.querySelector('#soName');
  const mobile = overlay.querySelector('#soMobile');
  const serviceInput = overlay.querySelector('#soService');
  const details = overlay.querySelector('#soDetails');
  const success = overlay.querySelector('#soSuccess');
  let currentService = '';

  function close(){ overlay.style.display='none'; document.body.style.overflow=''; }
  function open(service){
    currentService = service || 'General Enquiry';
    title.textContent = `🛡️ ${currentService}`;
    serviceInput.value = currentService;
    sub.textContent = SERVICE_DETAILS[currentService] || 'अपनी details submit करें। Submit के बाद WhatsApp खुलेगा; जरूरी documents वहीं attach करके भेजें और हमारी तरफ से document/service update का इंतजार करें।';
    details.value=''; success.style.display='none'; overlay.style.display='flex'; document.body.style.overflow='hidden';
    setTimeout(()=>name.focus(),50);
  }

  overlay.querySelector('.service-order-close').addEventListener('click', close);
  overlay.addEventListener('click', e=>{ if(e.target===overlay) close(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && overlay.style.display==='flex') close(); });
  mobile.addEventListener('input',()=>{mobile.value=mobile.value.replace(/\D/g,'').slice(0,10)});

  form.addEventListener('submit', e=>{
    e.preventDefault();
    if(!/^[0-9]{10}$/.test(mobile.value)){ mobile.focus(); mobile.setCustomValidity('10 अंकों का मोबाइल नंबर डालें'); mobile.reportValidity(); mobile.setCustomValidity(''); return; }
    const message = `नमस्ते Rajdev ji, मुझे आपकी सेवा लेनी है।\n\n🛠️ सेवा: ${currentService}\n👤 ग्राहक नाम: ${name.value.trim()}\n📱 मोबाइल: ${mobile.value}\n📝 जानकारी: ${details.value.trim() || 'कोई अतिरिक्त जानकारी नहीं'}\n\n📎 मैं जरूरी documents इसी WhatsApp chat में attach करके भेज रहा/रही हूँ। कृपया service process करके document/update WhatsApp पर भेज दें।`;
    success.style.display='block';
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  });

  function attach(root=document){
    root.querySelectorAll?.('.service-card a.btn.whatsapp').forEach(a=>{
      if(a.dataset.serviceOrderAttached==='1') return;
      a.dataset.serviceOrderAttached='1';
      const card=a.closest('.service-card');
      const h=card?.querySelector('h3');
      const service=h?.textContent?.trim() || 'Service';
      a.textContent='🛡️ सेवा लें → Details Submit';
      a.removeAttribute('target'); a.removeAttribute('rel');
      a.addEventListener('click', e=>{e.preventDefault();open(service);});
    });
  }

  function addLiveBanner(){
    const services=document.querySelector('.services');
    if(!services || services.querySelector('.service-live-banner')) return;
    const banner=document.createElement('div');
    banner.className='service-live-banner';
    banner.innerHTML='<strong>🔥 NEW SERVICE UPDATE — DL PDF VERIFICATION SERVICE LIVE</strong><br><span style="display:block;margin-top:6px;color:#cbd9e8;font-size:13px">🪪 DL Number + DOB → Verification/Generate assistance → Details Submit → WhatsApp पर documents भेजें → Service update का इंतजार करें.</span>';
    const title=services.querySelector('.section-title');
    title?.insertAdjacentElement('afterend',banner);
  }

  const observer=new MutationObserver(()=>{attach(document);addLiveBanner();});
  observer.observe(document.getElementById('root') || document.body,{childList:true,subtree:true});
  setTimeout(()=>{attach(document);addLiveBanner();},400);
})();
