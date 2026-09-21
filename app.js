/**
 * FERRARI PWA - APLICAÇÃO PRINCIPAL
 * Registro do Service Worker, Instalação PWA, Catálogo com Fotos Reais e Áudio Real de Motor Ferrari
 */

// ==========================================
// 1. DADOS DOS VEÍCULOS REAIS FERRARI
// ==========================================
const FERRARI_CARS = [
  {
    id: 'f80',
    name: 'Ferrari F80',
    tag: 'Hipercarro de Produção Limitada',
    category: 'supercar',
    engineType: 'v8',
    engineSummary: 'V6 3.0L Twin-Turbo + 3 Motores Elétricos',
    power: '1.200 CV',
    acceleration: '2,15 s',
    topSpeed: '350 km/h',
    gearbox: 'F1 Dupla Embreagem 8 Vel.',
    weight: '1.525 kg (peso seco)',
    drive: 'Tração Integral e-4WD',
    price: 'Série Limitada (799 unidades)',
    description: 'O novo ápice da história automotiva de Maranello. Incorpora diretamente o trem de força campeão das 24 Horas de Le Mans com a Ferrari 499P e turbos elétricos MGU-H da Fórmula 1.',
    details: [
      { label: 'Potência a Combustão', value: '900 CV @ 8.750 rpm' },
      { label: 'Potência Elétrica', value: '300 CV (três motores elétricos)' },
      { label: '0 a 200 km/h', value: '5,75 segundos' },
      { label: 'Downforce Aerodinâmico', value: '1.050 kg a 250 km/h' },
      { label: 'Freios', value: 'CCM-R Plus Carbono-Cerâmica' }
    ],
    silhouetteColor: '#e10600',
    image: './images/f80.jpg'
  },
  {
    id: '12cilindri',
    name: 'Ferrari 12Cilindri',
    tag: 'Gran Turismo V12 Puro',
    category: 'v12',
    engineType: 'v12',
    engineSummary: 'V12 Aspirado 6.5L F140HD (9.500 rpm)',
    power: '830 CV',
    acceleration: '2,9 s',
    topSpeed: '340 km/h',
    gearbox: 'F1 DCT 8 Velocidades',
    weight: '1.560 kg',
    drive: 'Traseira com 4 Rodas Esterçantes',
    price: 'Sob Consulta',
    description: 'A expressão máxima do lendário motor V12 dianteiro naturalmente aspirado de Maranello. Homenageia as lendárias Berlinettas dos anos 50 e 60 com tecnologia de ponta e bielas de titânio.',
    details: [
      { label: 'Cilindrada Total', value: '6.496 cm³' },
      { label: 'Regime Máximo', value: '9.500 rpm' },
      { label: 'Torque Máximo', value: '678 Nm @ 7.250 rpm' },
      { label: '0 a 200 km/h', value: '7,9 segundos' },
      { label: 'Distribuição de Peso', value: '48,4% Diant. / 51,6% Tras.' }
    ],
    silhouetteColor: '#ffeb00',
    image: './images/12cilindri.jpg'
  },
  {
    id: 'sf90-xx',
    name: 'Ferrari SF90 XX Stradale',
    tag: 'Especial Homologada para Estrada',
    category: 'supercar',
    engineType: 'v8',
    engineSummary: 'V8 4.0L Biturbo PHEV (3 Motores Elétricos)',
    power: '1.030 CV',
    acceleration: '2,3 s',
    topSpeed: '320 km/h',
    gearbox: 'F1 DCT 8 Velocidades',
    weight: '1.560 kg',
    drive: 'Tração Integral AWD',
    price: 'Edição Especial Limitada',
    description: 'A primeira versão do programa de pista XX autorizada a rodar nas ruas. Possui asa traseira fixa de alta eficiência e modo Extra Boost para voltas rápidas.',
    details: [
      { label: 'Motor V8 Biturbo', value: '797 CV' },
      { label: 'Sistema Híbrido Elétrico', value: '233 CV adicionais' },
      { label: '0 a 200 km/h', value: '6,5 segundos' },
      { label: 'Autonomia Elétrica (eDrive)', value: '25 km sem emissões' },
      { label: 'Downforce', value: '530 kg a 250 km/h' }
    ],
    silhouetteColor: '#e10600',
    image: './images/sf90-xx.jpg'
  },
  {
    id: '296-gtb',
    name: 'Ferrari 296 GTB',
    tag: 'Berlinetta Central-Traseira',
    category: 'berlinetta',
    engineType: 'v8',
    engineSummary: 'V6 3.0L Turbo 120° PHEV',
    power: '830 CV',
    acceleration: '2,9 s',
    topSpeed: '330 km/h',
    gearbox: 'F1 DCT 8 Velocidades',
    weight: '1.470 kg',
    drive: 'Traseira RWD',
    price: 'Disponível no Showroom',
    description: 'Projetada para entregar pura emoção na condução. O motor V6 em 120° com turbos montados no "V" garante centro de gravidade ultrabaixo e som inconfundível apelidado de piccolo V12.',
    details: [
      { label: 'Potência Específica', value: '221 CV/litro (recorde mundial)' },
      { label: '0 a 200 km/h', value: '7,3 segundos' },
      { label: 'Frenagem 200-0 km/h', value: '107 metros' },
      { label: 'Entre-eixos', value: '2.600 mm (agilidade máxima)' },
      { label: 'Modos de Pilotagem', value: 'eDrive, Hybrid, Performance, Qualify' }
    ],
    silhouetteColor: '#ffffff',
    image: './images/296-gtb.jpg'
  },
  {
    id: 'purosangue',
    name: 'Ferrari Purosangue',
    tag: 'Quatro Portas & Quatro Lugares',
    category: 'lifestyle',
    engineType: 'v12',
    engineSummary: 'V12 Aspirado 6.5L Dianteiro-Central',
    power: '725 CV',
    acceleration: '3,3 s',
    topSpeed: '310 km/h',
    gearbox: 'F1 DCT 8 Velocidades',
    weight: '2.033 kg',
    drive: 'Tração 4x4 4RM-S evo',
    price: 'Disponível sob Encomenda',
    description: 'A primeira Ferrari de quatro portas e quatro lugares da história. Combina a elegância e conforto supremo de um GT com a alma e o som estrondoso de um V12 aspirado de pista.',
    details: [
      { label: 'Configuração', value: '4 Lugares Individuais com Massagem' },
      { label: 'Portas Traseiras', value: 'Abertura Invertida Elétrica (Welcome Doors)' },
      { label: 'Suspensão Ativa', value: 'Ferrari Active Suspension Technology (FAST)' },
      { label: 'Volume do Porta-malas', value: '473 Litros' },
      { label: 'Torque a 2.100 rpm', value: '80% do torque já disponível' }
    ],
    silhouetteColor: '#e10600',
    image: './images/purosangue.jpg'
  },
  {
    id: 'roma-spider',
    name: 'Ferrari Roma Spider',
    tag: 'Conversível V8 Elegance',
    category: 'lifestyle',
    engineType: 'v8',
    engineSummary: 'V8 Biturbo 3.9L Dianteiro-Central',
    power: '620 CV',
    acceleration: '3,4 s',
    topSpeed: '320 km/h',
    gearbox: 'F1 DCT 8 Velocidades',
    weight: '1.556 kg',
    drive: 'Traseira RWD',
    price: 'Disponível no Showroom',
    description: 'A reinterpretação moderna do estilo de vida refinado da Roma nos anos 1950 e 1960. Capota de tecido sob medida que abre ou fecha em 13,5 segundos a até 60 km/h.',
    details: [
      { label: 'Abertura da Capota', value: '13,5 segundos em movimento' },
      { label: '0 a 200 km/h', value: '9,7 segundos' },
      { label: 'Defletor de Vento', value: 'Patenteado integrado no banco traseiro' },
      { label: 'Central Multimídia', value: 'Tela vertical de 8.4" + Display do Passageiro' },
      { label: 'Prêmio de Motor', value: 'Vencedor do International Engine of the Year' }
    ],
    silhouetteColor: '#c0c0c0',
    image: './images/roma-spider.jpg'
  }
];

// Gera visual SVG estilizado de fallback caso necessário
function createCarSvg(color) {
  return `
    <svg class="car-svg-art" viewBox="0 0 420 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bodyGrad_${color.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color}"/>
          <stop offset="60%" stop-color="#990000"/>
          <stop offset="100%" stop-color="#2a0000"/>
        </linearGradient>
        <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#777"/>
          <stop offset="50%" stop-color="#222"/>
          <stop offset="90%" stop-color="#111"/>
          <stop offset="100%" stop-color="#000"/>
        </radialGradient>
      </defs>
      <ellipse cx="210" cy="142" rx="190" ry="12" fill="rgba(0,0,0,0.65)" filter="blur(4px)" />
      <path d="M 35 125 C 50 120, 65 110, 85 92 C 120 62, 175 42, 235 42 C 290 42, 335 55, 375 90 C 395 105, 405 118, 410 125 L 410 130 C 375 132, 345 132, 330 132 C 328 108, 290 108, 288 132 L 155 132 C 153 108, 115 108, 113 132 L 35 132 Z" fill="url(#bodyGrad_${color.replace('#','')})" />
      <path d="M 130 85 C 155 60, 185 50, 230 50 C 275 50, 310 65, 335 85 C 320 85, 295 84, 275 84 C 220 84, 170 85, 130 85 Z" fill="#111822" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <path d="M 75 98 Q 210 82 385 102" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round" />
      <path d="M 380 95 L 405 110 L 395 112 Z" fill="#6df0ff" opacity="0.9" />
      <circle cx="48" cy="112" r="5" fill="#ff1a1a" filter="drop-shadow(0 0 6px #ff0000)" />
      <circle cx="134" cy="126" r="26" fill="url(#wheelGrad)" stroke="#444" stroke-width="2" />
      <circle cx="134" cy="126" r="15" fill="#181818" stroke="#ffeb00" stroke-width="1.5" />
      <circle cx="134" cy="126" r="5" fill="#e10600" />
      <line x1="134" y1="102" x2="134" y2="150" stroke="#888" stroke-width="1.5" />
      <line x1="110" y1="126" x2="158" y2="126" stroke="#888" stroke-width="1.5" />
      <circle cx="309" cy="126" r="26" fill="url(#wheelGrad)" stroke="#444" stroke-width="2" />
      <circle cx="309" cy="126" r="15" fill="#181818" stroke="#ffeb00" stroke-width="1.5" />
      <circle cx="309" cy="126" r="5" fill="#e10600" />
      <line x1="309" y1="102" x2="309" y2="150" stroke="#888" stroke-width="1.5" />
      <line x1="285" y1="126" x2="333" y2="126" stroke="#888" stroke-width="1.5" />
    </svg>
  `;
}

// ==========================================
// 2. RENDERIZAÇÃO DOS CARDS COM FOTOS REAIS
// ==========================================
function renderCars(filter = 'all') {
  const grid = document.getElementById('carsGrid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? FERRARI_CARS 
    : FERRARI_CARS.filter(car => car.category === filter);

  grid.innerHTML = filtered.map(car => `
    <div class="car-card" data-category="${car.category}">
      <span class="car-badge-category">${car.tag}</span>
      <div class="car-visual">
        <img src="${car.image}" alt="${car.name}" class="car-img-photo" loading="lazy" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="fallback-svg" style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">
          ${createCarSvg(car.silhouetteColor)}
        </div>
      </div>
      <div class="car-details">
        <h3 class="car-name">${car.name}</h3>
        <p class="car-engine-summary">${car.engineSummary}</p>

        <div class="car-specs-row">
          <div class="spec-cell">
            <span class="spec-val">${car.power}</span>
            <span class="spec-lbl">Potência</span>
          </div>
          <div class="spec-cell">
            <span class="spec-val">${car.acceleration}</span>
            <span class="spec-lbl">0-100 km/h</span>
          </div>
          <div class="spec-cell">
            <span class="spec-val">${car.topSpeed}</span>
            <span class="spec-lbl">Vel. Máx.</span>
          </div>
        </div>

        <p class="car-description-short">${car.description}</p>

        <div class="car-card-actions">
          <button class="btn btn-primary btn-card-details" onclick="openCarModal('${car.id}')">
            Ficha Completa
          </button>
          <button class="btn btn-secondary btn-card-sound" onclick="revEngineSound('${car.engineType}')">
            🔊 Ronco
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 3. MODAL DE DETALHES TÉCNICOS COM FOTO
// ==========================================
window.openCarModal = function(carId) {
  const car = FERRARI_CARS.find(c => c.id === carId);
  if (!car) return;

  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <span class="modal-header-tag">${car.tag}</span>
    <h2 class="modal-car-title">${car.name}</h2>
    
    <div class="modal-photo-container">
      <img src="${car.image}" alt="${car.name}" class="modal-car-img" 
           onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div style="display:none; background:#000; padding:10px;">
        ${createCarSvg(car.silhouetteColor)}
      </div>
    </div>

    <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:16px;">${car.description}</p>
    
    <h4 style="color:#fff; text-transform:uppercase; font-size:0.85rem; letter-spacing:1px; margin-top:20px;">Ficha Técnica Oficial</h4>
    <div class="modal-spec-grid">
      <div class="modal-spec-item">
        <strong>Potência Total</strong>
        <span>${car.power}</span>
      </div>
      <div class="modal-spec-item">
        <strong>Aceleração 0-100 km/h</strong>
        <span>${car.acceleration}</span>
      </div>
      <div class="modal-spec-item">
        <strong>Velocidade Máxima</strong>
        <span>${car.topSpeed}</span>
      </div>
      <div class="modal-spec-item">
        <strong>Câmbio</strong>
        <span>${car.gearbox}</span>
      </div>
      <div class="modal-spec-item">
        <strong>Tração</strong>
        <span>${car.drive}</span>
      </div>
      <div class="modal-spec-item">
        <strong>Peso Seco</strong>
        <span>${car.weight}</span>
      </div>
      ${car.details.map(d => `
        <div class="modal-spec-item">
          <strong>${d.label}</strong>
          <span>${d.value}</span>
        </div>
      `).join('')}
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:12px; margin-top:24px;">
      <a href="#contato" class="btn btn-primary" onclick="closeModal(); prefillInterest('${car.name}')">
        Agendar Consultoria para este Carro
      </a>
      <button class="btn btn-secondary" onclick="revEngineSound('${car.engineType}')">
        🔊 Ouvir Ronco Real Deste Modelo
      </button>
    </div>
  `;

  document.getElementById('carModal').classList.remove('hidden');
};

function closeModal() {
  document.getElementById('carModal').classList.add('hidden');
}

window.prefillInterest = function(carName) {
  const select = document.getElementById('carModelSelect');
  if (select) {
    for (let opt of select.options) {
      if (opt.value.includes(carName) || carName.includes(opt.value)) {
        select.value = opt.value;
        break;
      }
    }
  }
};

// ==========================================
// 4. REPRODUÇÃO DO RONCO REAL DO MOTOR FERRARI
// ==========================================
let currentAudio = null;
let selectedEngine = 'v12'; // 'v12' ou 'v8'
let animationFrameId = null;

window.playFerrariSound = function(engineType = selectedEngine) {
  // Para qualquer áudio em reprodução anterior
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  const audioSrc = (engineType === 'v8') 
    ? './audio/ferrari_v8.mp3' 
    : './audio/ferrari_v12.mp3';

  currentAudio = new Audio(audioSrc);
  currentAudio.volume = 1.0;

  const btn = document.getElementById('btnRevEngine');
  const waves = document.getElementById('soundWaveVisualizer');
  const needle = document.getElementById('tachoNeedle');
  const rpmDisplay = document.getElementById('rpmDisplay');

  const startPlayingUI = () => {
    if (btn) {
      btn.innerText = `🔊 RONCANDO MOTOR ${engineType.toUpperCase()} (GRAVAÇÃO REAL)...`;
      btn.classList.add('btn-playing');
    }
    if (waves) waves.classList.remove('hidden');
    animateTachometerWithAudio(currentAudio);
  };

  const stopPlayingUI = () => {
    if (btn) {
      btn.innerText = '🏎️ ACELERAR A FUNDO (SOM REAL)';
      btn.classList.remove('btn-playing');
    }
    if (waves) waves.classList.add('hidden');
    if (rpmDisplay) rpmDisplay.innerText = '1000';
    if (needle) needle.style.transform = 'rotate(-135deg)';
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  };

  currentAudio.addEventListener('play', startPlayingUI);
  currentAudio.addEventListener('ended', stopPlayingUI);
  currentAudio.addEventListener('pause', stopPlayingUI);
  currentAudio.addEventListener('error', (e) => {
    console.warn('Erro ao carregar MP3 real, acionando sintetizador Web Audio:', e);
    stopPlayingUI();
    revSyntheticEngine();
  });

  currentAudio.play().catch((err) => {
    console.warn('Play impedido por política de autoplay do navegador:', err);
    revSyntheticEngine();
  });
};

function animateTachometerWithAudio(audio) {
  const needle = document.getElementById('tachoNeedle');
  const rpmDisplay = document.getElementById('rpmDisplay');
  if (!needle || !rpmDisplay) return;

  function loop() {
    if (!audio || audio.paused || audio.ended) return;

    const cur = audio.currentTime;
    const dur = audio.duration || 6;
    const progress = (cur % 7.0) / 7.0;

    let rpm = 1000;
    if (progress < 0.18) {
      rpm = 1000 + (progress / 0.18) * 6000;
    } else if (progress < 0.26) {
      rpm = 7000 - ((progress - 0.18) / 0.08) * 1600;
    } else if (progress < 0.65) {
      rpm = 5400 + ((progress - 0.26) / 0.39) * 4100;
    } else if (progress < 0.82) {
      rpm = 9500 - (Math.random() * 280);
    } else {
      rpm = 9500 - ((progress - 0.82) / 0.18) * 8500;
    }

    rpm = Math.max(1000, Math.min(9500, rpm));
    rpmDisplay.innerText = Math.round(rpm);
    const angle = -135 + ((rpm - 1000) / 8500) * 180;
    needle.style.transform = `rotate(${angle}deg)`;

    animationFrameId = requestAnimationFrame(loop);
  }
  animationFrameId = requestAnimationFrame(loop);
}

window.revEngineSound = function(engineType) {
  playFerrariSound(engineType || selectedEngine);
};

// Sintetizador de contingência caso navegador bloqueie reprodução de arquivos externos
function revSyntheticEngine() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 1.2);
    osc.frequency.exponentialRampToValueAtTime(100, now + 2.5);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 2.5);
  } catch (e) {}
}

// ==========================================
// 5. GERENCIAMENTO DE PWA & SERVICE WORKER
// ==========================================
let deferredPrompt = null;

function setupPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registrado com sucesso! Escopo:', reg.scope);
        })
        .catch((err) => {
          console.warn('[PWA] Falha ao registrar Service Worker:', err);
        });
    });
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const banner = document.getElementById('pwaInstallBanner');
    const headerBtn = document.getElementById('headerInstallBtn');
    if (banner) banner.classList.remove('hidden');
    if (headerBtn) headerBtn.classList.remove('hidden');
  });

  const btnInstall = document.getElementById('btnInstallApp');
  const headerBtn = document.getElementById('headerInstallBtn');

  const triggerInstall = () => {
    if (!deferredPrompt) {
      showToast('O app já está instalado ou seu navegador gerencia a instalação no menu.');
      return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast('🎉 Instalando aplicativo Ferrari no seu dispositivo!');
      }
      deferredPrompt = null;
      document.getElementById('pwaInstallBanner')?.classList.add('hidden');
      headerBtn?.classList.add('hidden');
    });
  };

  btnInstall?.addEventListener('click', triggerInstall);
  headerBtn?.addEventListener('click', triggerInstall);

  document.getElementById('btnDismissInstall')?.addEventListener('click', () => {
    document.getElementById('pwaInstallBanner')?.classList.add('hidden');
  });

  window.addEventListener('appinstalled', () => {
    showToast('Aplicativo Ferrari instalado com sucesso!');
    document.getElementById('pwaInstallBanner')?.classList.add('hidden');
    headerBtn?.classList.add('hidden');
  });

  const offlineBanner = document.getElementById('offlineBanner');
  function checkOnlineStatus() {
    if (!navigator.onLine) {
      offlineBanner?.classList.remove('hidden');
      showToast('Modo Offline ativado (dados, fotos e áudios em cache)');
    } else {
      offlineBanner?.classList.add('hidden');
    }
  }
  window.addEventListener('online', checkOnlineStatus);
  window.addEventListener('offline', checkOnlineStatus);
  checkOnlineStatus();
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.innerText = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}

// ==========================================
// 6. INICIALIZAÇÃO E EVENTOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderCars('all');

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCars(btn.getAttribute('data-filter'));
    });
  });

  // Alternador de som de motor
  const soundChips = document.querySelectorAll('.sound-chip');
  soundChips.forEach(chip => {
    chip.addEventListener('click', () => {
      soundChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedEngine = chip.getAttribute('data-engine');
      showToast(`Motor selecionado: ${selectedEngine === 'v12' ? 'V12 Aspirado' : 'V8 Esportivo'}`);
    });
  });

  document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
  document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('heroSoundBtn')?.addEventListener('click', () => revEngineSound('v12'));
  document.getElementById('btnRevEngine')?.addEventListener('click', () => revEngineSound(selectedEngine));

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });

  const form = document.getElementById('testDriveForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const booking = {
      name: document.getElementById('userName').value,
      email: document.getElementById('userEmail').value,
      phone: document.getElementById('userPhone').value,
      model: document.getElementById('carModelSelect').value,
      date: new Date().toISOString()
    };

    const bookings = JSON.parse(localStorage.getItem('ferrari_vip_bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('ferrari_vip_bookings', JSON.stringify(bookings));

    showToast(`✅ Agendamento VIP confirmado para o ${booking.model}!`);
    form.reset();
  });

  setupPWA();
});
