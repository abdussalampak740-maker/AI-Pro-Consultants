
const MODAL_HTML = `
  <div id="audit-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-0 sm:p-4 overflow-hidden">
    <!-- Backdrop -->
    <div id="modal-backdrop" class="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

    <!-- Modal Container -->
    <div id="modal-container" class="relative w-full h-full sm:h-auto max-w-lg bg-[#0B0E14] border-t sm:border border-white/10 rounded-t-[2.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col transform translate-y-20 opacity-0 transition-all duration-300">
      <!-- Close Button -->
      <button id="close-modal" class="absolute top-4 right-4 md:top-6 md:right-6 p-3 md:p-2 rounded-full bg-white/5 md:bg-transparent hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-[110] active:scale-90">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <!-- Content Area -->
      <div class="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-hide pt-16 md:pt-12">
        <div id="modal-step-1">
          <div class="flex justify-between items-center mb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 uppercase tracking-[0.2em] text-[10px] font-black text-blue-400">
              Lead Generation • v2.0
            </div>
            <div class="flex gap-1">
              <div class="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
              <div class="w-1 h-1 rounded-full bg-blue-500/30"></div>
              <div class="w-1 h-1 rounded-full bg-blue-500/30"></div>
            </div>
          </div>

          <h2 class="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase leading-none">
            Secure Your <br class="hidden md:block"/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Discovery Session</span>
          </h2>
          <p class="text-slate-400 text-sm mb-8 leading-relaxed">
            Join 100+ brands automating their growth. Our systems will analyze your footprint and prepare your custom roadmap.
          </p>

          <form id="audit-form" class="space-y-5">
            <div class="grid gap-5">
              <div class="relative group">
                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Full Name
                </label>
                <input required type="text" id="form-name" class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium placeholder:text-slate-700" placeholder="Ex: John Sterling">
              </div>

              <div class="relative group">
                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Business Email
                </label>
                <input required type="email" id="form-email" class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium placeholder:text-slate-700" placeholder="john@company.ai">
              </div>

              <div class="relative group">
                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Direct Phone
                </label>
                <input required type="tel" id="form-phone" class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium placeholder:text-slate-700" placeholder="+1 (000) 000-0000">
              </div>
            </div>

            <button type="submit" id="submit-btn" class="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all mt-4 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 relative overflow-hidden">
              <span id="btn-text">Request Analysis →</span>
              <div id="btn-loader" class="hidden w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </button>
            <div class="flex flex-col items-center gap-2 mt-4 pb-4">
              <p class="text-[9px] text-slate-600 uppercase font-bold tracking-widest flex items-center gap-2 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg> Secure Data Transmission • 256-bit Encryption
              </p>
            </div>
          </form>
        </div>

        <div id="modal-success" class="hidden text-center md:py-8">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <div class="absolute inset-0 bg-green-500/20 blur-2xl rounded-full"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400 relative z-10"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4 uppercase tracking-[0.2em] text-[10px] font-black text-green-400">
            Submission Verified
          </div>

          <h2 class="text-3xl font-black text-white mb-4 tracking-tight uppercase">Details <span class="text-green-400">Locked In.</span></h2>
          <p class="text-slate-400 text-sm mb-10 leading-relaxed mx-auto max-w-sm">
            We've received your audit request. For <span class="text-white font-bold">Priority Processing</span>, schedule your discovery call below.
          </p>

          <div class="space-y-4 pb-8">
            <a id="calendar-link" href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 w-full py-6 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl active:scale-95 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 transition-transform group-hover:scale-110"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Book Strategy Call
            </a>
            
            <button id="success-close" class="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-white transition-colors py-2">
              No thanks, I'll wait 24h
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

function injectModal() {
  const container = document.createElement('div');
  container.innerHTML = MODAL_HTML;
  document.body.appendChild(container);

  const modal = document.getElementById('audit-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const modalContainer = document.getElementById('modal-container');
  const closeBtn = document.getElementById('close-modal');
  const successClose = document.getElementById('success-close');
  const auditForm = document.getElementById('audit-form');
  const step1 = document.getElementById('modal-step-1');
  const successStep = document.getElementById('modal-success');
  const btnText = document.getElementById('btn-text');
  const btnLoader = document.getElementById('btn-loader');
  const submitBtn = document.getElementById('submit-btn');

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
      backdrop.classList.replace('opacity-0', 'opacity-100');
      modalContainer.classList.replace('translate-y-20', 'translate-y-0');
      modalContainer.classList.replace('opacity-0', 'opacity-100');
    }, 10);
  }

  function closeModal() {
    backdrop.classList.replace('opacity-100', 'opacity-0');
    modalContainer.classList.replace('translate-y-0', 'translate-y-20');
    modalContainer.classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      // Reset form if needed
      step1.classList.remove('hidden');
      successStep.classList.add('hidden');
    }, 300);
  }

  closeBtn.onclick = closeModal;
  backdrop.onclick = closeModal;
  successClose.onclick = closeModal;

  // Global trigger for any button with href="/?audit=true" or data-trigger-audit
  document.querySelectorAll('a[href="/?audit=true"], [data-trigger-audit]').forEach(el => {
    el.onclick = openModal;
  });

  auditForm.onsubmit = async (e) => {
    e.preventDefault();
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
    submitBtn.disabled = true;

    const formData = {
      name: document.getElementById('form-name').value,
      email: document.getElementById('form-email').value,
      phone: document.getElementById('form-phone').value,
      timestamp: new Date().toISOString(),
      source: 'Resource Page Audit Form'
    };

    // Use a placeholder or the actual webhook if known
    // For now, we simulate the 'no-cors' fire and forget
    const webhookUrl = 'https://script.google.com/macros/s/AKfycby1Yuk-sCq-GzQddAnLCqF2Xm-kyvesuMjwIVcXwPh6pbYrcSUnd5jXIOvHVx8mGlKJ/exec'; 

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        console.error('Submission error:', err);
      }
    }

    setTimeout(() => {
      btnText.classList.remove('hidden');
      btnLoader.classList.add('hidden');
      submitBtn.disabled = false;
      step1.classList.add('hidden');
      successStep.classList.remove('hidden');
    }, 800);
  };
}

document.addEventListener('DOMContentLoaded', injectModal);
