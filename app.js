// App Controller — wires UI to data and generators
// All data persists in localStorage

const App = {
  clients: JSON.parse(localStorage.getItem('fitness-clients') || '[]'),
  feedback: JSON.parse(localStorage.getItem('fitness-feedback') || '[]'),
  currentPlan: null,

  init() {
    this.bindNav();
    this.bindHamburger();
    this.bindClientForm();
    this.bindGenerator();
    this.bindFeedbackForm();
    this.renderClients();
    this.renderMuscleButtons();
    this.populateClientSelects();
  },

  bindHamburger() {
    const btn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    if (btn && navLinks) {
      btn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
      // Close menu when a nav button is clicked (mobile)
      navLinks.querySelectorAll('.nav-btn').forEach(navBtn => {
        navBtn.addEventListener('click', () => navLinks.classList.remove('open'));
      });
    }
  },

  bindNav() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`view-${btn.dataset.view}`).classList.add('active');
      });
    });
  },

  bindClientForm() {
    document.getElementById('client-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const client = {
        id: Date.now(),
        name: document.getElementById('client-name').value,
        age: parseInt(document.getElementById('client-age').value),
        sex: document.getElementById('client-sex').value,
        height: parseFloat(document.getElementById('client-height').value),
        weight: parseFloat(document.getElementById('client-weight').value),
        goal: document.getElementById('client-goal').value,
        diet: document.getElementById('client-diet').value,
        days: document.getElementById('client-days').value,
        level: document.getElementById('client-level').value,
        injuries: document.getElementById('client-injuries').value,
        allergies: document.getElementById('client-allergies').value,
        created: new Date().toISOString()
      };
      this.clients.push(client);
      this.saveClients();
      this.renderClients();
      this.populateClientSelects();
      e.target.reset();
      this.toast('Cliente guardado / Client saved ✓');
    });
  },

  saveClients() {
    localStorage.setItem('fitness-clients', JSON.stringify(this.clients));
  },

  renderClients() {
    const list = document.getElementById('client-list');
    if (!this.clients.length) {
      list.innerHTML = '<p style="color:#666">No hay clientes / No clients yet</p>';
      return;
    }
    list.innerHTML = this.clients.map(c => `
      <div class="client-card">
        <div class="client-card-info">
          <h4>${c.name}</h4>
          <span>${c.age} años | ${c.weight}kg | ${c.height}cm | Meta: ${c.goal}</span>
        </div>
        <div class="client-card-actions">
          <button class="btn-secondary" onclick="App.showProgress(${c.id})">📈</button>
          <button class="btn-secondary" onclick="App.deleteClient(${c.id})">🗑️</button>
        </div>
      </div>
    `).join('');
  },

  deleteClient(id) {
    this.clients = this.clients.filter(c => c.id !== id);
    this.saveClients();
    this.renderClients();
    this.populateClientSelects();
  },

  populateClientSelects() {
    const options = this.clients.map(c =>
      `<option value="${c.id}">${c.name} (${c.goal})</option>`
    ).join('');
    const empty = '<option value="">Seleccionar...</option>';
    const genSelect = document.getElementById('gen-client');
    const fbSelect = document.getElementById('feedback-client');
    if (genSelect) genSelect.innerHTML = empty + options;
    if (fbSelect) fbSelect.innerHTML = empty + options;
  },

  // Plan Generator
  bindGenerator() {
    document.getElementById('btn-generate').addEventListener('click', () => {
      const clientId = parseInt(document.getElementById('gen-client').value);
      const client = this.clients.find(c => c.id === clientId);
      if (!client) { this.toast('Selecciona un cliente / Select a client'); return; }

      this.currentPlan = PlanGenerator.generateFullPlan(client);
      this.renderPlan(this.currentPlan);
      document.getElementById('plan-output').classList.remove('hidden');
    });

    document.getElementById('btn-whatsapp-plan')?.addEventListener('click', () => {
      if (!this.currentPlan) return;
      const text = this.formatPlanForShare(this.currentPlan);
      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/?text=${encoded}`, '_blank');
    });

    document.getElementById('btn-copy-plan')?.addEventListener('click', () => {
      if (!this.currentPlan) return;
      const text = this.formatPlanForShare(this.currentPlan);
      navigator.clipboard.writeText(text).then(() => this.toast('Plan copiado ✓'));
    });

    document.getElementById('btn-email-plan')?.addEventListener('click', () => {
      if (!this.currentPlan) return;
      const text = this.formatPlanForShare(this.currentPlan);
      const subject = encodeURIComponent(`Plan de Fitness - ${this.currentPlan.client.name}`);
      const body = encodeURIComponent(text);
      window.open(`mailto:?subject=${subject}&body=${body}`);
    });

    document.getElementById('btn-share-link')?.addEventListener('click', () => {
      if (!this.currentPlan) return;
      const planId = 'plan-' + Date.now();
      localStorage.setItem(planId, JSON.stringify(this.currentPlan));
      this.toast('Plan guardado localmente. ID: ' + planId);
    });

    document.getElementById('btn-pdf-plan')?.addEventListener('click', () => {
      if (!this.currentPlan) return;
      this.exportPDF(this.currentPlan);
    });
  },

  renderPlan(plan) {
    const profileHtml = `
      <div class="profile-stats">
        <div class="stat-box"><div class="stat-value">${plan.profile.bmi}</div><div class="stat-label">BMI (${plan.profile.bmiCategory.es})</div></div>
        <div class="stat-box"><div class="stat-value">${plan.profile.targetCalories}</div><div class="stat-label">Calorías/día</div></div>
        <div class="stat-box"><div class="stat-value">${plan.profile.macros.protein}g</div><div class="stat-label">Proteína</div></div>
        <div class="stat-box"><div class="stat-value">${plan.profile.macros.carbs}g</div><div class="stat-label">Carbohidratos</div></div>
        <div class="stat-box"><div class="stat-value">${plan.profile.macros.fat}g</div><div class="stat-label">Grasa</div></div>
        <div class="stat-box"><div class="stat-value">${plan.profile.waterMl}ml</div><div class="stat-label">Agua/día</div></div>
      </div>`;
    document.getElementById('plan-profile').innerHTML = profileHtml;

    let workoutHtml = `<p><strong>${plan.workout.splitName.es}</strong></p>`;
    plan.workout.days.forEach(day => {
      workoutHtml += `<div class="workout-day"><h4>${day.name.es}</h4>`;
      day.exercises.forEach(ex => {
        workoutHtml += `<div class="workout-exercise"><span class="ex-name">${ex.name.es}</span><span class="ex-sets">${ex.sets}</span></div>`;
      });
      workoutHtml += `</div>`;
    });
    document.getElementById('plan-workout').innerHTML = workoutHtml;

    const mp = plan.mealPlan;
    const mealsHtml = `
      <div class="meal-block" style="background:#1a3a1a;border:1px solid #10b981;margin-bottom:16px;padding:10px;border-radius:8px;">
        <strong style="color:#10b981;">📊 Total: ${mp.totalCalories} kcal / Meta: ${mp.targetCalories} kcal (${mp.accuracy}% match)</strong>
      </div>
      <div class="meal-block"><h4>🌅 Desayuno</h4><div class="meal-item">${mp.breakfast.name.es}</div><div class="meal-macros">P:${mp.breakfast.protein}g C:${mp.breakfast.carbs}g F:${mp.breakfast.fat}g | ${mp.breakfast.calories} kcal</div></div>
      <div class="meal-block"><h4>☀️ Almuerzo</h4><div class="meal-item">${mp.lunch.name.es}</div><div class="meal-macros">P:${mp.lunch.protein}g C:${mp.lunch.carbs}g F:${mp.lunch.fat}g | ${mp.lunch.calories} kcal</div></div>
      <div class="meal-block"><h4>🌙 Cena</h4><div class="meal-item">${mp.dinner.name.es}</div><div class="meal-macros">P:${mp.dinner.protein}g C:${mp.dinner.carbs}g F:${mp.dinner.fat}g | ${mp.dinner.calories} kcal</div></div>
      <div class="meal-block"><h4>🍎 Snack 1</h4><div class="meal-item">${mp.snack1.name.es}</div><div class="meal-macros">P:${mp.snack1.protein}g C:${mp.snack1.carbs}g F:${mp.snack1.fat}g | ${mp.snack1.calories} kcal</div></div>
      <div class="meal-block"><h4>🍎 Snack 2</h4><div class="meal-item">${mp.snack2.name.es}</div><div class="meal-macros">P:${mp.snack2.protein}g C:${mp.snack2.carbs}g F:${mp.snack2.fat}g | ${mp.snack2.calories} kcal</div></div>`;
    document.getElementById('plan-meals').innerHTML = mealsHtml;

    const r = plan.recovery;
    const recoveryHtml = `
      <div class="recovery-section"><h4>😴 Sueño</h4><p>${r.sleep.es}</p></div>
      <div class="recovery-section"><h4>🤸 Estiramiento</h4><p>${r.stretching.es}</p></div>
      <div class="recovery-section"><h4>🛋️ Descanso</h4><p>${r.rest.es}</p></div>
      <div class="recovery-section"><h4>💧 Hidratación</h4><p>${r.hydration.es}</p></div>
      <div class="recovery-section"><h4>💊 Suplementos</h4><p>${r.supplements.es}</p></div>`;
    document.getElementById('plan-recovery').innerHTML = recoveryHtml;
  },

  renderMuscleButtons() {
    const container = document.getElementById('muscle-buttons');
    if (!container) return;
    container.innerHTML = Object.entries(EXERCISE_DB).map(([key, group]) =>
      `<button class="muscle-btn" data-group="${key}">${group.name.es}</button>`
    ).join('');
    container.addEventListener('click', (e) => {
      if (!e.target.classList.contains('muscle-btn')) return;
      container.querySelectorAll('.muscle-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      this.selectMuscleGroup(e.target.dataset.group);
    });

    // Body map — click directly on image, detect muscle by position
    const img = document.getElementById('body-map-img');
    if (img) {
      img.style.cursor = 'pointer';
      this.bodyMapView = 'front';

      // Toggle buttons
      document.getElementById('btn-front').addEventListener('click', () => {
        this.bodyMapView = 'front';
        img.src = 'images/body2.jpg';
        document.getElementById('btn-front').classList.add('active');
        document.getElementById('btn-back').classList.remove('active');
      });
      document.getElementById('btn-back').addEventListener('click', () => {
        this.bodyMapView = 'back';
        img.src = 'images/back.jpg';
        document.getElementById('btn-back').classList.add('active');
        document.getElementById('btn-front').classList.remove('active');
      });

      img.addEventListener('click', (e) => {
        const rect = img.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        const group = this.bodyMapView === 'front'
          ? this.detectMuscleFromPosition(x, y)
          : this.detectMuscleFromBack(x, y);
        if (group) {
          const groupName = EXERCISE_DB[group]?.name?.es || group;
          document.getElementById('body-map-selection').textContent = `✓ ${groupName}`;
          container.querySelectorAll('.muscle-btn').forEach(b => b.classList.remove('active'));
          const btn = container.querySelector(`[data-group="${group}"]`);
          if (btn) btn.classList.add('active');
          this.selectMuscleGroup(group);
        }
      });
    }
  },

  // Back view muscle detection
  detectMuscleFromBack(x, y) {
    const cx = 0.5;
    const distFromCenter = Math.abs(x - cx);

    if (y < 0.08) return null;
    if (y >= 0.10 && y < 0.22 && distFromCenter < 0.10) return 'traps';
    if (y >= 0.12 && y < 0.22 && distFromCenter >= 0.10 && distFromCenter < 0.18) return 'shoulders';
    if (y >= 0.22 && y < 0.42 && distFromCenter < 0.12) return 'back';
    if (y >= 0.20 && y < 0.40 && distFromCenter >= 0.12 && distFromCenter < 0.20) return 'triceps';
    if (y >= 0.40 && y < 0.54 && distFromCenter >= 0.10 && distFromCenter < 0.22) return 'forearms';
    if (y >= 0.42 && y < 0.50 && distFromCenter < 0.06) return 'back';
    if (y >= 0.48 && y < 0.58 && distFromCenter < 0.10) return 'glutes';
    if (y >= 0.55 && y < 0.73 && distFromCenter >= 0.01 && distFromCenter < 0.12) return 'hamstrings';
    if (y >= 0.73 && y < 0.92 && distFromCenter >= 0.01 && distFromCenter < 0.10) return 'calves';
    return null;
  },

  detectMuscleFromPosition(x, y) {
    const cx = 0.5;
    const distFromCenter = Math.abs(x - cx);

    if (y < 0.08) return null;
    // Shoulders — check FIRST, they're wider than chest at same height
    if (y >= 0.12 && y < 0.26 && distFromCenter >= 0.07 && distFromCenter < 0.18) return 'shoulders';
    // Traps (neck area, narrow center)
    if (y >= 0.08 && y < 0.15 && distFromCenter < 0.07) return 'traps';
    // Chest (center, below traps)
    if (y >= 0.15 && y < 0.28 && distFromCenter < 0.07) return 'chest';
    // Biceps (arms, upper)
    if (y >= 0.22 && y < 0.40 && distFromCenter >= 0.12 && distFromCenter < 0.19) return 'biceps';
    // Triceps (arms, outer edge)
    if (y >= 0.22 && y < 0.40 && distFromCenter >= 0.19 && distFromCenter < 0.24) return 'triceps';
    // Forearms (lower arms)
    if (y >= 0.40 && y < 0.54 && distFromCenter >= 0.10 && distFromCenter < 0.22) return 'forearms';
    // Core (center, mid torso)
    if (y >= 0.28 && y < 0.45 && distFromCenter < 0.08) return 'core';
    // Glutes (below core)
    if (y >= 0.45 && y < 0.53 && distFromCenter < 0.10) return 'glutes';
    // Quads (upper legs, closer to center)
    if (y >= 0.53 && y < 0.73 && distFromCenter >= 0.01 && distFromCenter < 0.09) return 'quads';
    // Hamstrings (upper legs, outer)
    if (y >= 0.53 && y < 0.73 && distFromCenter >= 0.09 && distFromCenter < 0.14) return 'hamstrings';
    // Calves (lower legs)
    if (y >= 0.73 && y < 0.93 && distFromCenter >= 0.01 && distFromCenter < 0.10) return 'calves';
    return null;
  },

  selectMuscleGroup(group) {
    this.renderExercises(group);
    document.getElementById('exercise-list').scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  renderExercises(group) {
    const data = EXERCISE_DB[group];
    if (!data) return;
    document.getElementById('exercise-list').innerHTML = data.exercises.map((ex, i) => {
      const num = String(i + 1).padStart(2, '0');
      const kebab = ex.name.en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
      const imgPath = `images/${group}/${num}-${kebab}.png`;
      return `
      <div class="exercise-card">
        <img src="${imgPath}" alt="${ex.name.es}" class="ex-image" onerror="this.style.display='none'">
        <div class="ex-gif-container" id="gif-${group}-${i}"></div>
        <h4>${ex.name.es}</h4>
        <div class="ex-muscles">${ex.name.en} | ${ex.secondary.length ? ex.secondary.join(', ') : 'Aislamiento'}</div>
        <div class="ex-cue">📋 ${ex.cue.es}</div>
        <div class="ex-feel">💡 ${ex.feel.es}</div>
        <div class="ex-equipment">🏋️ ${ex.equipment.es}</div>
        <button class="btn-search-gif" onclick="App.searchExerciseGif('${ex.name.en.replace(/'/g, "\\'")}', '${group}', ${i})">🔍 Ver Animación / View Animation</button>
      </div>`;
    }).join('');
  },

  async searchExerciseGif(exerciseName, group, index) {
    const container = document.getElementById(`gif-${group}-${index}`);
    if (!container) return;

    // Direct image URLs from wger.de — no fetch, bypasses CORS
    const imageMap = {
      'bench press': ['https://wger.de/media/exercise-images/192/Bench-press-1.png'],
      'incline': ['https://wger.de/media/exercise-images/16/Incline-press-1.png'],
      'dumbbell press': ['https://wger.de/media/exercise-images/97/Dumbbell-bench-press-1.png'],
      'fly': ['https://wger.de/media/exercise-images/122/Incline-cable-flyes-1.png'],
      'crossover': ['https://wger.de/media/exercise-images/71/Cable-crossover-2.png'],
      'decline press': ['https://wger.de/media/exercise-images/100/Decline-bench-press-1.png'],
      'close grip': ['https://wger.de/media/exercise-images/61/Close-grip-bench-press-1.png'],
      'dip': ['https://wger.de/media/exercise-images/83/Bench-dips-1.png'],
      'pec deck': ['https://wger.de/media/exercise-images/98/Butterfly-machine-2.png'],
      'deadlift': ['https://wger.de/media/exercise-images/161/Dead-lifts-2.png'],
      'curl': ['https://wger.de/media/exercise-images/129/Standing-biceps-curl-1.png'],
      'hammer curl': ['https://wger.de/media/exercise-images/86/Bicep-hammer-curl-1.png'],
      'preacher': ['https://wger.de/media/exercise-images/193/Preacher-curl-3-1.png'],
      'concentration': ['https://wger.de/media/exercise-images/74/Bicep-curls-1.png'],
      'skull crusher': ['https://wger.de/media/exercise-images/84/Lying-close-grip-triceps-press-to-chin-1.png'],
      'shrug': ['https://wger.de/media/exercise-images/150/Barbell-shrugs-1.png'],
      'row': ['https://wger.de/media/exercise-images/106/T-bar-row-1.png'],
      'cable row': ['https://wger.de/media/exercise-images/143/Cable-seated-rows-2.png'],
      'seated row': ['https://wger.de/media/exercise-images/143/Cable-seated-rows-2.png'],
      'hyperextension': ['https://wger.de/media/exercise-images/128/Hyperextensions-1.png'],
      'good morning': ['https://wger.de/media/exercise-images/128/Hyperextensions-1.png'],
      'squat': ['https://wger.de/media/exercise-images/191/Front-squat-1-857x1024.png'],
      'hack squat': ['https://wger.de/media/exercise-images/130/Narrow-stance-hack-squats-1-1024x721.png'],
      'lunge': ['https://wger.de/media/exercise-images/113/Walking-lunges-1.png'],
      'shoulder press': ['https://wger.de/media/exercise-images/119/seated-barbell-shoulder-press-large-1.png'],
      'overhead press': ['https://wger.de/media/exercise-images/119/seated-barbell-shoulder-press-large-1.png'],
      'military press': ['https://wger.de/media/exercise-images/119/seated-barbell-shoulder-press-large-1.png'],
      'lateral raise': ['https://wger.de/media/exercise-images/148/lateral-dumbbell-raises-large-2.png'],
      'leg curl': ['https://wger.de/media/exercise-images/154/lying-leg-curl-machine-large-1.png'],
      'leg raise': ['https://wger.de/media/exercise-images/125/Leg-raises-2.png'],
      'crunch': ['https://wger.de/media/exercise-images/91/Crunches-1.png'],
      'decline crunch': ['https://wger.de/media/exercise-images/93/Decline-crunch-1.png'],
      'rope curl': ['https://wger.de/media/exercise-images/138/Hammer-curls-with-rope-1.png']
    };

    const lowerName = exerciseName.toLowerCase();
    let images = null;
    for (const [key, urls] of Object.entries(imageMap)) {
      if (lowerName.includes(key)) { images = urls; break; }
    }

    if (images) {
      container.innerHTML = images.map(url =>
        `<img src="${url}" alt="${exerciseName}" class="ex-image" style="margin-bottom:4px;" onerror="this.style.display='none'">`
      ).join('');
    } else {
      container.innerHTML = `<p style="color:#666;font-size:0.75rem;">No hay imagen disponible / No image available</p>`;
    }
  },

  bindFeedbackForm() {
    document.getElementById('feedback-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const fb = {
        id: Date.now(),
        clientId: parseInt(document.getElementById('feedback-client').value),
        type: document.getElementById('feedback-type').value,
        area: document.getElementById('feedback-area').value,
        detail: document.getElementById('feedback-detail').value,
        date: new Date().toISOString()
      };
      this.feedback.push(fb);
      localStorage.setItem('fitness-feedback', JSON.stringify(this.feedback));
      this.renderFeedback();
      e.target.reset();
      this.toast('Retroalimentación guardada / Feedback saved ✓');
    });
    this.renderFeedback();
  },

  renderFeedback() {
    const container = document.getElementById('feedback-history');
    if (!container) return;
    if (!this.feedback.length) {
      container.innerHTML = '<p style="color:#666">Sin retroalimentación / No feedback yet</p>';
      return;
    }
    container.innerHTML = this.feedback.slice().reverse().map(fb => {
      const client = this.clients.find(c => c.id === fb.clientId);
      const types = { adjust: '🔧 Ajustar', add: '➕ Agregar', remove: '➖ Eliminar', general: '💬 General' };
      return `<div class="feedback-item">
        <div class="fb-meta">${client?.name || 'Cliente'} | ${types[fb.type]} | ${fb.area} | ${new Date(fb.date).toLocaleDateString()}</div>
        <div class="fb-content">${fb.detail}</div>
      </div>`;
    }).join('');
  },

  // Progress Tracking
  showProgress(clientId) {
    const client = this.clients.find(c => c.id === clientId);
    if (!client) return;

    this.progressClientId = clientId;
    const section = document.getElementById('progress-section');
    section.classList.remove('hidden');
    document.getElementById('progress-client-name').textContent = `📈 Progreso: ${client.name}`;

    // Bind weight log button (remove old listener by replacing)
    const btn = document.getElementById('btn-log-weight');
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', () => this.logWeight());

    this.renderWeightHistory(clientId);
    this.renderPlanHistory(clientId);
    section.scrollIntoView({ behavior: 'smooth' });
  },

  logWeight() {
    const input = document.getElementById('progress-weight');
    const weight = parseFloat(input.value);
    if (!weight || !this.progressClientId) return;

    const client = this.clients.find(c => c.id === this.progressClientId);
    if (!client) return;

    // Initialize weight log if needed
    if (!client.weightLog) client.weightLog = [];
    client.weightLog.push({ date: new Date().toISOString(), weight });

    // Update current weight
    client.weight = weight;
    this.saveClients();
    this.renderClients();
    this.renderWeightHistory(this.progressClientId);
    input.value = '';
    this.toast(`Peso registrado: ${weight}kg ✓`);
  },

  renderWeightHistory(clientId) {
    const client = this.clients.find(c => c.id === clientId);
    const container = document.getElementById('weight-history');
    if (!client || !client.weightLog || !client.weightLog.length) {
      container.innerHTML = '<p style="color:#666;font-size:0.85rem;">Sin registros de peso / No weight logs yet</p>';
      return;
    }

    const log = client.weightLog;
    const startWeight = log[0].weight;
    const currentWeight = log[log.length - 1].weight;
    const totalChange = +(currentWeight - startWeight).toFixed(1);
    const isGain = totalChange > 0;
    const isLoss = totalChange < 0;
    const startDate = new Date(log[0].date).toLocaleDateString();
    const weeks = Math.max(1, Math.round((Date.now() - new Date(log[0].date).getTime()) / (7 * 24 * 60 * 60 * 1000)));
    const weeklyRate = +(totalChange / weeks).toFixed(2);

    const summaryColor = (client.goal === 'fat-loss' && isLoss) || (client.goal === 'muscle-gain' && isGain) ? '#10b981' : 
                         (client.goal === 'fat-loss' && isGain) || (client.goal === 'muscle-gain' && isLoss) ? '#ef4444' : '#888';

    let summaryHtml = `
      <div style="background:#222;padding:14px;border-radius:8px;margin-bottom:12px;border-left:4px solid ${summaryColor};">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="color:#888;font-size:0.8rem;">Peso Inicial / Starting</span>
          <span style="color:#fff;font-weight:700;">${startWeight} kg</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="color:#888;font-size:0.8rem;">Peso Actual / Current</span>
          <span style="color:#fff;font-weight:700;">${currentWeight} kg</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="color:#888;font-size:0.8rem;">Cambio Total / Total Change</span>
          <span style="color:${summaryColor};font-weight:700;">${isGain ? '+' : ''}${totalChange} kg</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="color:#888;font-size:0.8rem;">Promedio Semanal / Weekly Avg</span>
          <span style="color:${summaryColor};font-size:0.85rem;">${weeklyRate > 0 ? '+' : ''}${weeklyRate} kg/semana</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="color:#888;font-size:0.8rem;">Desde / Since</span>
          <span style="color:#aaa;font-size:0.85rem;">${startDate} (${weeks} semanas)</span>
        </div>
      </div>`;

    summaryHtml += '<h4 style="color:#aaa;margin-bottom:8px;">Historial / Log</h4>';
    summaryHtml += client.weightLog.slice().reverse().map((entry, i, arr) => {
      const prev = arr[i + 1];
      let changeHtml = '';
      if (prev) {
        const diff = +(entry.weight - prev.weight).toFixed(1);
        if (diff < 0) changeHtml = `<span class="we-change down">▼ ${Math.abs(diff)}kg</span>`;
        else if (diff > 0) changeHtml = `<span class="we-change up">▲ ${diff}kg</span>`;
        else changeHtml = `<span class="we-change same">= sin cambio</span>`;
      } else {
        changeHtml = `<span class="we-change same">inicio</span>`;
      }
      return `<div class="weight-entry">
        <span class="we-date">${new Date(entry.date).toLocaleDateString()}</span>
        <span class="we-value">${entry.weight} kg</span>
        ${changeHtml}
      </div>`;
    }).join('');

    container.innerHTML = summaryHtml;
  },

  renderPlanHistory(clientId) {
    const container = document.getElementById('plan-history');
    // Check localStorage for plans generated for this client
    const plans = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('plan-')) {
        try {
          const plan = JSON.parse(localStorage.getItem(key));
          if (plan.client && plan.client.id === clientId) {
            plans.push({ id: key, date: key.replace('plan-', ''), plan });
          }
        } catch (e) {}
      }
    }

    if (!plans.length) {
      container.innerHTML = '<p style="color:#666;font-size:0.85rem;">Sin planes generados / No plans generated yet</p>';
      return;
    }

    container.innerHTML = '<h4 style="color:#aaa;margin-bottom:8px;">Planes Generados / Generated Plans</h4>' +
      plans.reverse().map(p =>
        `<div class="plan-history-item">📄 ${new Date(parseInt(p.date)).toLocaleDateString()} — ${p.plan.workout.splitName.es} — ${p.plan.profile.targetCalories} kcal</div>`
      ).join('');
  },

  formatPlanForShare(plan) {
    let text = `🏋️ PLAN DE FITNESS — ${plan.client.name}\n`;
    text += `Meta: ${plan.client.goal} | ${plan.client.weight}kg | ${plan.profile.targetCalories} kcal/día\n\n`;

    // Workout
    text += `═══ ENTRENAMIENTO (${plan.workout.splitName.es}) ═══\n\n`;
    plan.workout.days.forEach(day => {
      text += `📅 ${day.name.es}\n`;
      day.exercises.forEach(ex => {
        text += `  • ${ex.name.es} — ${ex.sets}\n`;
      });
      text += '\n';
    });

    // Meals
    text += `═══ ALIMENTACIÓN ═══\n`;
    text += `Total: ${plan.mealPlan.totalCalories} kcal\n\n`;
    const mp = plan.mealPlan;
    text += `🌅 Desayuno: ${mp.breakfast.name.es} (${mp.breakfast.calories} kcal)\n`;
    text += `☀️ Almuerzo: ${mp.lunch.name.es} (${mp.lunch.calories} kcal)\n`;
    text += `🌙 Cena: ${mp.dinner.name.es} (${mp.dinner.calories} kcal)\n`;
    text += `🍎 Snack 1: ${mp.snack1.name.es} (${mp.snack1.calories} kcal)\n`;
    text += `🍎 Snack 2: ${mp.snack2.name.es} (${mp.snack2.calories} kcal)\n\n`;

    // Macros summary
    text += `📊 Macros: P:${plan.profile.macros.protein}g | C:${plan.profile.macros.carbs}g | F:${plan.profile.macros.fat}g\n`;
    text += `💧 Agua: ${plan.profile.waterMl}ml/día\n`;

    return text;
  },

  exportPDF(plan) {
    const mp = plan.mealPlan;
    const r = plan.recovery;
    const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Plan de Fitness - ${plan.client.name}</title>
<style>
  body { font-family: -apple-system, sans-serif; padding: 40px; color: #222; max-width: 800px; margin: 0 auto; }
  h1 { color: #1a1a1a; border-bottom: 3px solid #2563eb; padding-bottom: 8px; }
  h2 { color: #2563eb; margin-top: 30px; }
  h3 { color: #444; margin-top: 16px; }
  .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 16px 0; }
  .stat { background: #f3f4f6; padding: 12px; border-radius: 8px; text-align: center; }
  .stat-val { font-size: 1.4rem; font-weight: 700; color: #2563eb; }
  .stat-lbl { font-size: 0.75rem; color: #666; }
  .day { margin: 12px 0; padding: 12px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #2563eb; }
  .day h3 { margin: 0 0 8px; color: #2563eb; }
  .exercise { padding: 4px 0; display: flex; justify-content: space-between; border-bottom: 1px solid #e5e7eb; }
  .meal { margin: 8px 0; padding: 8px; background: #f0fdf4; border-radius: 6px; border-left: 3px solid #10b981; }
  .meal-name { font-weight: 600; }
  .meal-macros { font-size: 0.8rem; color: #666; }
  .recovery { margin: 8px 0; padding: 8px; background: #faf5ff; border-radius: 6px; border-left: 3px solid #8b5cf6; }
  .footer { margin-top: 40px; text-align: center; color: #999; font-size: 0.8rem; }
  @media print { body { padding: 20px; } }
</style></head><body>
<h1>Plan de Fitness</h1>
<p><strong>${plan.client.name}</strong> | ${plan.client.age} anos | ${plan.client.weight}kg | Meta: ${plan.client.goal}</p>
<h2>Perfil Nutricional</h2>
<div class="stats">
  <div class="stat"><div class="stat-val">${plan.profile.bmi}</div><div class="stat-lbl">BMI (${plan.profile.bmiCategory.es})</div></div>
  <div class="stat"><div class="stat-val">${plan.profile.targetCalories}</div><div class="stat-lbl">Calorias/dia</div></div>
  <div class="stat"><div class="stat-val">${plan.profile.macros.protein}g</div><div class="stat-lbl">Proteina</div></div>
  <div class="stat"><div class="stat-val">${plan.profile.macros.carbs}g</div><div class="stat-lbl">Carbohidratos</div></div>
  <div class="stat"><div class="stat-val">${plan.profile.macros.fat}g</div><div class="stat-lbl">Grasa</div></div>
  <div class="stat"><div class="stat-val">${plan.profile.waterMl}ml</div><div class="stat-lbl">Agua/dia</div></div>
</div>
<h2>Plan de Entrenamiento</h2>
<p><strong>${plan.workout.splitName.es}</strong></p>
${plan.workout.days.map(day => `<div class="day"><h3>${day.name.es}</h3>${day.exercises.map(ex => `<div class="exercise"><span>${ex.name.es}</span><span>${ex.sets}</span></div>`).join('')}</div>`).join('')}
<h2>Plan de Alimentacion</h2>
<p>Total: ${mp.totalCalories} kcal (${mp.accuracy}% de meta)</p>
<div class="meal"><div class="meal-name">Desayuno: ${mp.breakfast.name.es}</div><div class="meal-macros">P:${mp.breakfast.protein}g C:${mp.breakfast.carbs}g F:${mp.breakfast.fat}g | ${mp.breakfast.calories} kcal</div></div>
<div class="meal"><div class="meal-name">Almuerzo: ${mp.lunch.name.es}</div><div class="meal-macros">P:${mp.lunch.protein}g C:${mp.lunch.carbs}g F:${mp.lunch.fat}g | ${mp.lunch.calories} kcal</div></div>
<div class="meal"><div class="meal-name">Cena: ${mp.dinner.name.es}</div><div class="meal-macros">P:${mp.dinner.protein}g C:${mp.dinner.carbs}g F:${mp.dinner.fat}g | ${mp.dinner.calories} kcal</div></div>
<div class="meal"><div class="meal-name">Snack 1: ${mp.snack1.name.es}</div><div class="meal-macros">P:${mp.snack1.protein}g C:${mp.snack1.carbs}g F:${mp.snack1.fat}g | ${mp.snack1.calories} kcal</div></div>
<div class="meal"><div class="meal-name">Snack 2: ${mp.snack2.name.es}</div><div class="meal-macros">P:${mp.snack2.protein}g C:${mp.snack2.carbs}g F:${mp.snack2.fat}g | ${mp.snack2.calories} kcal</div></div>
<h2>Recuperacion</h2>
<div class="recovery"><strong>Sueno:</strong> ${r.sleep.es}</div>
<div class="recovery"><strong>Estiramiento:</strong> ${r.stretching.es}</div>
<div class="recovery"><strong>Descanso:</strong> ${r.rest.es}</div>
<div class="recovery"><strong>Hidratacion:</strong> ${r.hydration.es}</div>
<div class="recovery"><strong>Suplementos:</strong> ${r.supplements.es}</div>
<div class="footer">Generado por Fitness Plan Generator | ${new Date().toLocaleDateString()}</div>
</body></html>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(html);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
  },

  toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
