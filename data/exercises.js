// Exercise Database — 14 muscle groups × 10 exercises each
// Bilingual: English / Spanish

const EXERCISE_DB = {
  chest: {
    name: { en: "Chest", es: "Pecho" },
    exercises: [
      {
        name: { en: "Barbell Bench Press", es: "Press de Banca con Barra" },
        primary: "chest",
        secondary: ["triceps", "front-delts"],
        equipment: { en: "Barbell, Flat Bench", es: "Barra, Banco Plano" },
        cue: { en: "Grip slightly wider than shoulders. Lower bar to mid-chest, press up explosively.", es: "Agarre ligeramente más ancho que los hombros. Baja la barra al pecho medio, empuja explosivamente." },
        feel: { en: "Deep stretch across chest at bottom, squeeze at top", es: "Estiramiento profundo en el pecho abajo, contracción arriba" },
        sets: { strength: "5×5", hypertrophy: "4×8-10", endurance: "3×15-20" }
      },
      {
        name: { en: "Incline Dumbbell Press", es: "Press Inclinado con Mancuernas" },
        primary: "chest",
        secondary: ["triceps", "front-delts"],
        equipment: { en: "Dumbbells, Incline Bench (30-45°)", es: "Mancuernas, Banco Inclinado (30-45°)" },
        cue: { en: "Press dumbbells up and slightly inward. Control the descent.", es: "Empuja las mancuernas arriba y ligeramente hacia adentro. Controla el descenso." },
        feel: { en: "Upper chest engagement, stretch at bottom", es: "Activación del pecho superior, estiramiento abajo" },
        sets: { strength: "4×6", hypertrophy: "4×8-12", endurance: "3×15" }
      },
      {
        name: { en: "Dumbbell Fly", es: "Aperturas con Mancuernas" },
        primary: "chest",
        secondary: ["front-delts"],
        equipment: { en: "Dumbbells, Flat Bench", es: "Mancuernas, Banco Plano" },
        cue: { en: "Slight bend in elbows, lower arms in wide arc until chest stretch, squeeze back up.", es: "Ligera flexión en codos, baja en arco amplio hasta sentir estiramiento, aprieta al subir." },
        feel: { en: "Deep stretch in outer chest, strong squeeze at top", es: "Estiramiento profundo en pecho externo, contracción fuerte arriba" },
        sets: { strength: "3×8", hypertrophy: "4×10-12", endurance: "3×15" }
      },
      {
        name: { en: "Cable Crossover", es: "Cruce de Cables" },
        primary: "chest",
        secondary: ["front-delts"],
        equipment: { en: "Cable Machine", es: "Máquina de Cables" },
        cue: { en: "Step forward, bring handles together in front of chest with slight forward lean.", es: "Da un paso adelante, junta las manijas frente al pecho con ligera inclinación." },
        feel: { en: "Constant tension throughout, peak squeeze when hands meet", es: "Tensión constante, máxima contracción cuando las manos se juntan" },
        sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" }
      },
      {
        name: { en: "Decline Barbell Press", es: "Press Declinado con Barra" },
        primary: "chest",
        secondary: ["triceps"],
        equipment: { en: "Barbell, Decline Bench", es: "Barra, Banco Declinado" },
        cue: { en: "Lower bar to lower chest, press up in straight line. Keep shoulder blades retracted.", es: "Baja la barra al pecho inferior, empuja en línea recta. Mantén escápulas retraídas." },
        feel: { en: "Lower chest activation, strong push from bottom", es: "Activación del pecho inferior, empuje fuerte desde abajo" },
        sets: { strength: "5×5", hypertrophy: "4×8-10", endurance: "3×15" }
      },
      {
        name: { en: "Push-Up", es: "Flexión de Pecho" },
        primary: "chest",
        secondary: ["triceps", "front-delts", "core"],
        equipment: { en: "Bodyweight", es: "Peso Corporal" },
        cue: { en: "Hands shoulder-width, body straight. Lower chest to floor, push up.", es: "Manos al ancho de hombros, cuerpo recto. Baja el pecho al suelo, empuja." },
        feel: { en: "Full chest engagement, core tight throughout", es: "Activación completa del pecho, abdomen contraído" },
        sets: { strength: "4×10-15", hypertrophy: "3×15-20", endurance: "3×25-30" }
      },
      {
        name: { en: "Machine Chest Press", es: "Press de Pecho en Máquina" },
        primary: "chest",
        secondary: ["triceps", "front-delts"],
        equipment: { en: "Chest Press Machine", es: "Máquina de Press de Pecho" },
        cue: { en: "Adjust seat so handles align with mid-chest. Press forward, don't lock elbows.", es: "Ajusta el asiento para que las manijas queden al pecho medio. Empuja sin bloquear codos." },
        feel: { en: "Smooth, controlled push with constant chest tension", es: "Empuje suave y controlado con tensión constante en pecho" },
        sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15-20" }
      },
      {
        name: { en: "Dips (Chest Focus)", es: "Fondos (Enfoque en Pecho)" },
        primary: "chest",
        secondary: ["triceps", "front-delts"],
        equipment: { en: "Parallel Bars / Dip Station", es: "Barras Paralelas / Estación de Fondos" },
        cue: { en: "Lean forward 30°, lower until upper arms parallel to floor. Push up without locking.", es: "Inclínate 30° hacia adelante, baja hasta que brazos queden paralelos. Sube sin bloquear." },
        feel: { en: "Deep lower chest stretch at bottom, strong push at top", es: "Estiramiento profundo del pecho inferior abajo, empuje fuerte arriba" },
        sets: { strength: "4×6-8", hypertrophy: "3×10-12", endurance: "3×15" }
      },
      {
        name: { en: "Landmine Press", es: "Press con Barra en Mina" },
        primary: "chest",
        secondary: ["front-delts", "triceps"],
        equipment: { en: "Barbell, Landmine Attachment", es: "Barra, Accesorio de Mina" },
        cue: { en: "Press bar up and forward at 45° angle. Squeeze chest at top of each rep.", es: "Empuja la barra arriba y adelante a 45°. Aprieta el pecho arriba en cada repetición." },
        feel: { en: "Upper/inner chest squeeze, shoulder-friendly pressing angle", es: "Contracción del pecho superior/interno, ángulo amigable para hombros" },
        sets: { strength: "4×6", hypertrophy: "3×10-12", endurance: "3×15" }
      },
      {
        name: { en: "Pec Deck Machine", es: "Máquina Pec Deck" },
        primary: "chest",
        secondary: [],
        equipment: { en: "Pec Deck Machine", es: "Máquina Pec Deck" },
        cue: { en: "Elbows at 90°, bring pads together in front. Squeeze 1 second at center.", es: "Codos a 90°, junta las almohadillas al frente. Aprieta 1 segundo en el centro." },
        feel: { en: "Pure chest isolation, peak contraction in center", es: "Aislamiento puro del pecho, máxima contracción en el centro" },
        sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" }
      }
    ]
  },
  back: {
    name: { en: "Back", es: "Espalda" },
    exercises: [
      {
        name: { en: "Deadlift", es: "Peso Muerto" },
        primary: "back",
        secondary: ["hamstrings", "glutes", "traps", "core"],
        equipment: { en: "Barbell", es: "Barra" },
        cue: { en: "Hinge at hips, grip outside knees, drive through floor. Keep bar close to body.", es: "Bisagra en caderas, agarre fuera de rodillas, empuja el piso. Mantén barra pegada al cuerpo." },
        feel: { en: "Entire posterior chain engaged, strong back tension throughout", es: "Toda la cadena posterior activada, tensión fuerte en espalda" },
        sets: { strength: "5×5", hypertrophy: "4×6-8", endurance: "3×12" }
      },
      {
        name: { en: "Pull-Up", es: "Dominada" },
        primary: "back",
        secondary: ["biceps", "rear-delts"],
        equipment: { en: "Pull-Up Bar", es: "Barra de Dominadas" },
        cue: { en: "Grip slightly wider than shoulders. Pull chest to bar, squeeze lats at top.", es: "Agarre ligeramente más ancho que hombros. Lleva pecho a la barra, aprieta dorsales arriba." },
        feel: { en: "Lats stretching at bottom, strong squeeze at top", es: "Dorsales estirándose abajo, contracción fuerte arriba" },
        sets: { strength: "5×5", hypertrophy: "4×8-10", endurance: "3×12-15" }
      },
      {
        name: { en: "Barbell Row", es: "Remo con Barra" },
        primary: "back",
        secondary: ["biceps", "rear-delts", "traps"],
        equipment: { en: "Barbell", es: "Barra" },
        cue: { en: "Hinge 45°, pull bar to lower chest/upper belly. Squeeze shoulder blades together.", es: "Inclínate 45°, jala la barra al pecho bajo/abdomen superior. Aprieta escápulas." },
        feel: { en: "Mid-back thickness, strong lat contraction", es: "Grosor en espalda media, contracción fuerte de dorsales" },
        sets: { strength: "5×5", hypertrophy: "4×8-10", endurance: "3×12-15" }
      },
      {
        name: { en: "Seated Cable Row", es: "Remo Sentado con Cable" },
        primary: "back",
        secondary: ["biceps", "rear-delts"],
        equipment: { en: "Cable Machine, V-Bar", es: "Máquina de Cables, Barra V" },
        cue: { en: "Sit upright, pull handle to lower chest. Let shoulders stretch forward on release.", es: "Siéntate erguido, jala la manija al pecho bajo. Deja que hombros se estiren al soltar." },
        feel: { en: "Full lat stretch and contraction each rep", es: "Estiramiento y contracción completa de dorsales en cada rep" },
        sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15" }
      },
      {
        name: { en: "Lat Pulldown", es: "Jalón al Pecho" },
        primary: "back",
        secondary: ["biceps"],
        equipment: { en: "Lat Pulldown Machine", es: "Máquina de Jalón" },
        cue: { en: "Wide grip, pull bar to upper chest. Lean back slightly, drive elbows down.", es: "Agarre amplio, jala la barra al pecho superior. Inclínate ligeramente, baja los codos." },
        feel: { en: "Wide lat engagement, stretch at top", es: "Activación amplia de dorsales, estiramiento arriba" },
        sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15" }
      },
      {
        name: { en: "Dumbbell Row", es: "Remo con Mancuerna" },
        primary: "back",
        secondary: ["biceps", "rear-delts"],
        equipment: { en: "Dumbbell, Flat Bench", es: "Mancuerna, Banco Plano" },
        cue: { en: "One knee on bench, pull dumbbell to hip. Keep back flat, elbow close.", es: "Una rodilla en el banco, jala mancuerna a la cadera. Espalda plana, codo pegado." },
        feel: { en: "Single-side lat stretch and squeeze, core stabilizing", es: "Estiramiento y contracción unilateral del dorsal, core estabilizando" },
        sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15" }
      },
      {
        name: { en: "T-Bar Row", es: "Remo en T" },
        primary: "back",
        secondary: ["biceps", "traps", "rear-delts"],
        equipment: { en: "T-Bar Row Machine or Landmine", es: "Máquina de Remo en T o Mina" },
        cue: { en: "Straddle bar, hinge forward, pull to chest. Squeeze at top.", es: "Colócate sobre la barra, inclínate, jala al pecho. Aprieta arriba." },
        feel: { en: "Thick mid-back contraction, heavy pulling motion", es: "Contracción gruesa en espalda media, movimiento de jalón pesado" },
        sets: { strength: "4×6", hypertrophy: "4×8-10", endurance: "3×12" }
      },
      {
        name: { en: "Face Pull", es: "Jalón a la Cara" },
        primary: "back",
        secondary: ["rear-delts", "traps"],
        equipment: { en: "Cable Machine, Rope Attachment", es: "Máquina de Cables, Cuerda" },
        cue: { en: "Pull rope to face level, externally rotate at end. Elbows high.", es: "Jala la cuerda a nivel de la cara, rota externamente al final. Codos altos." },
        feel: { en: "Rear delts and upper back burn, postural correction", es: "Ardor en deltoides posteriores y espalda alta, corrección postural" },
        sets: { strength: "3×10", hypertrophy: "4×12-15", endurance: "3×20" }
      },
      {
        name: { en: "Rack Pull", es: "Peso Muerto desde Rack" },
        primary: "back",
        secondary: ["traps", "glutes", "hamstrings"],
        equipment: { en: "Barbell, Power Rack", es: "Barra, Rack de Potencia" },
        cue: { en: "Set bar at knee height, drive hips forward, squeeze traps at top.", es: "Coloca barra a la altura de rodillas, empuja caderas adelante, aprieta trapecios arriba." },
        feel: { en: "Upper back and trap overload, heavy lockout", es: "Sobrecarga de espalda alta y trapecios, bloqueo pesado" },
        sets: { strength: "5×3-5", hypertrophy: "4×6-8", endurance: "3×10" }
      },
      {
        name: { en: "Straight-Arm Pulldown", es: "Jalón con Brazos Rectos" },
        primary: "back",
        secondary: ["triceps-long-head"],
        equipment: { en: "Cable Machine, Straight Bar", es: "Máquina de Cables, Barra Recta" },
        cue: { en: "Arms straight, pull bar from head height to thighs in arc motion.", es: "Brazos rectos, jala la barra desde la cabeza hasta los muslos en arco." },
        feel: { en: "Pure lat isolation, strong stretch at top and squeeze at bottom", es: "Aislamiento puro de dorsales, estiramiento arriba y contracción abajo" },
        sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" }
      }
    ]
  },
  shoulders: {
    name: { en: "Shoulders", es: "Hombros" },
    exercises: [
      { name: { en: "Overhead Press", es: "Press Militar" }, primary: "shoulders", secondary: ["triceps", "traps"], equipment: { en: "Barbell", es: "Barra" }, cue: { en: "Press bar overhead from shoulders. Lock out at top, keep core tight.", es: "Empuja barra sobre la cabeza desde hombros. Bloquea arriba, core apretado." }, feel: { en: "Full shoulder engagement, heavy overhead stability", es: "Activación completa de hombros, estabilidad pesada" }, sets: { strength: "5×5", hypertrophy: "4×8-10", endurance: "3×12-15" } },
      { name: { en: "Dumbbell Lateral Raise", es: "Elevación Lateral con Mancuernas" }, primary: "shoulders", secondary: [], equipment: { en: "Dumbbells", es: "Mancuernas" }, cue: { en: "Slight lean forward, raise arms to shoulder height. Lead with elbows.", es: "Ligera inclinación adelante, sube brazos a altura de hombros. Guía con codos." }, feel: { en: "Burning in side delts at top, control the negative", es: "Ardor en deltoides laterales arriba, controla la bajada" }, sets: { strength: "3×10", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Arnold Press", es: "Press Arnold" }, primary: "shoulders", secondary: ["triceps"], equipment: { en: "Dumbbells", es: "Mancuernas" }, cue: { en: "Start palms facing you, rotate as you press overhead. Full rotation at top.", es: "Empieza con palmas hacia ti, rota mientras empujas arriba. Rotación completa arriba." }, feel: { en: "All three delt heads working through rotation", es: "Las tres cabezas del deltoides trabajando en la rotación" }, sets: { strength: "4×6", hypertrophy: "4×8-10", endurance: "3×12-15" } },
      { name: { en: "Front Raise", es: "Elevación Frontal" }, primary: "shoulders", secondary: ["front-delts"], equipment: { en: "Dumbbells or Plate", es: "Mancuernas o Disco" }, cue: { en: "Raise weight to eye level with straight arms. Control descent.", es: "Sube el peso a nivel de los ojos con brazos rectos. Controla el descenso." }, feel: { en: "Front delt isolation, burning at top", es: "Aislamiento del deltoides frontal, ardor arriba" }, sets: { strength: "3×8", hypertrophy: "4×12", endurance: "3×15-20" } },
      { name: { en: "Reverse Pec Deck", es: "Pec Deck Invertido" }, primary: "shoulders", secondary: ["rear-delts", "traps"], equipment: { en: "Pec Deck Machine (reversed)", es: "Máquina Pec Deck (invertida)" }, cue: { en: "Face the pad, pull handles back squeezing rear delts.", es: "Cara hacia la almohadilla, jala las manijas atrás apretando deltoides posteriores." }, feel: { en: "Rear delt burn and upper back squeeze", es: "Ardor en deltoides posteriores y contracción de espalda alta" }, sets: { strength: "3×10", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Cable Lateral Raise", es: "Elevación Lateral con Cable" }, primary: "shoulders", secondary: [], equipment: { en: "Cable Machine", es: "Máquina de Cables" }, cue: { en: "Stand sideways to cable, raise arm to shoulder height. Constant tension.", es: "Párate lateral al cable, sube el brazo a altura de hombro. Tensión constante." }, feel: { en: "Constant side delt tension, no rest at bottom", es: "Tensión constante en deltoides lateral, sin descanso abajo" }, sets: { strength: "3×10", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Seated Dumbbell Press", es: "Press Sentado con Mancuernas" }, primary: "shoulders", secondary: ["triceps"], equipment: { en: "Dumbbells, Upright Bench", es: "Mancuernas, Banco Vertical" }, cue: { en: "Press dumbbells up from shoulder height. Don't let elbows flare excessively.", es: "Empuja mancuernas desde altura de hombros. No dejes que los codos se abran mucho." }, feel: { en: "Balanced shoulder press, full range of motion", es: "Press de hombro balanceado, rango completo de movimiento" }, sets: { strength: "4×6", hypertrophy: "4×8-10", endurance: "3×12-15" } },
      { name: { en: "Upright Row", es: "Remo al Mentón" }, primary: "shoulders", secondary: ["traps"], equipment: { en: "Barbell or Dumbbells", es: "Barra o Mancuernas" }, cue: { en: "Pull weight up to chin level, elbows leading. Keep bar close to body.", es: "Jala el peso hasta el mentón, codos guiando. Mantén barra pegada al cuerpo." }, feel: { en: "Side delts and traps firing together", es: "Deltoides laterales y trapecios activándose juntos" }, sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Dumbbell Shrug", es: "Encogimiento con Mancuernas" }, primary: "shoulders", secondary: ["traps"], equipment: { en: "Heavy Dumbbells", es: "Mancuernas Pesadas" }, cue: { en: "Shrug shoulders straight up to ears. Hold 1 second at top.", es: "Encoge hombros directo a las orejas. Sostén 1 segundo arriba." }, feel: { en: "Trap squeeze at peak, heavy stretch at bottom", es: "Contracción de trapecios en el pico, estiramiento pesado abajo" }, sets: { strength: "4×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Machine Shoulder Press", es: "Press de Hombro en Máquina" }, primary: "shoulders", secondary: ["triceps"], equipment: { en: "Shoulder Press Machine", es: "Máquina de Press de Hombro" }, cue: { en: "Adjust seat so handles start at shoulder level. Press up without locking.", es: "Ajusta asiento para que manijas empiecen a nivel de hombros. Empuja sin bloquear." }, feel: { en: "Stable pressing path, focus on delt contraction", es: "Trayectoria estable, enfoque en contracción del deltoides" }, sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15" } }
    ]
  },
  biceps: {
    name: { en: "Biceps", es: "Bíceps" },
    exercises: [
      { name: { en: "Barbell Curl", es: "Curl con Barra" }, primary: "biceps", secondary: ["forearms"], equipment: { en: "Barbell", es: "Barra" }, cue: { en: "Elbows pinned to sides, curl bar to shoulders. No swinging.", es: "Codos pegados a los lados, sube la barra a los hombros. Sin balanceo." }, feel: { en: "Peak bicep contraction at top, controlled stretch at bottom", es: "Máxima contracción del bíceps arriba, estiramiento controlado abajo" }, sets: { strength: "4×6", hypertrophy: "4×8-10", endurance: "3×15" } },
      { name: { en: "Dumbbell Hammer Curl", es: "Curl Martillo con Mancuernas" }, primary: "biceps", secondary: ["brachialis", "forearms"], equipment: { en: "Dumbbells", es: "Mancuernas" }, cue: { en: "Neutral grip (palms facing), curl to shoulder. Keep wrists straight.", es: "Agarre neutro (palmas enfrentadas), sube al hombro. Muñecas rectas." }, feel: { en: "Brachialis and outer bicep burn", es: "Ardor en braquial y bíceps externo" }, sets: { strength: "3×8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Incline Dumbbell Curl", es: "Curl Inclinado con Mancuernas" }, primary: "biceps", secondary: [], equipment: { en: "Dumbbells, Incline Bench (45°)", es: "Mancuernas, Banco Inclinado (45°)" }, cue: { en: "Arms hang behind body at start. Curl up without moving upper arms.", es: "Brazos cuelgan detrás del cuerpo al inicio. Sube sin mover brazos superiores." }, feel: { en: "Deep stretch in long head at bottom, intense peak", es: "Estiramiento profundo en cabeza larga abajo, pico intenso" }, sets: { strength: "3×8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Preacher Curl", es: "Curl en Banco Scott" }, primary: "biceps", secondary: [], equipment: { en: "EZ Bar, Preacher Bench", es: "Barra EZ, Banco Scott" }, cue: { en: "Upper arms flat on pad, curl to top without lifting elbows.", es: "Brazos superiores planos en la almohadilla, sube sin levantar codos." }, feel: { en: "No momentum possible, pure bicep isolation", es: "Sin impulso posible, aislamiento puro del bíceps" }, sets: { strength: "3×6-8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Cable Curl", es: "Curl con Cable" }, primary: "biceps", secondary: [], equipment: { en: "Cable Machine, Straight/EZ Bar", es: "Máquina de Cables, Barra Recta/EZ" }, cue: { en: "Stand facing low cable, curl bar up. Constant tension throughout.", es: "Párate frente al cable bajo, sube la barra. Tensión constante." }, feel: { en: "Continuous resistance, no dead spots", es: "Resistencia continua, sin puntos muertos" }, sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Concentration Curl", es: "Curl Concentrado" }, primary: "biceps", secondary: [], equipment: { en: "Dumbbell", es: "Mancuerna" }, cue: { en: "Elbow braced against inner thigh, curl dumbbell up slowly.", es: "Codo apoyado en muslo interno, sube mancuerna lentamente." }, feel: { en: "Peak contraction, complete isolation", es: "Contracción máxima, aislamiento completo" }, sets: { strength: "3×8", hypertrophy: "3×12", endurance: "3×15-20" } },
      { name: { en: "EZ Bar Curl", es: "Curl con Barra EZ" }, primary: "biceps", secondary: ["forearms"], equipment: { en: "EZ Curl Bar", es: "Barra EZ" }, cue: { en: "Angled grip reduces wrist strain. Curl to shoulders.", es: "Agarre angulado reduce tensión en muñecas. Sube a los hombros." }, feel: { en: "Same as barbell curl but more comfortable on wrists", es: "Igual que curl con barra pero más cómodo en muñecas" }, sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Spider Curl", es: "Curl Araña" }, primary: "biceps", secondary: [], equipment: { en: "EZ Bar, Incline Bench (face down)", es: "Barra EZ, Banco Inclinado (boca abajo)" }, cue: { en: "Lie face down on incline, arms hanging straight down. Curl up.", es: "Acuéstate boca abajo en inclinado, brazos colgando. Sube." }, feel: { en: "Maximum contraction at top, gravity fights you entire rep", es: "Máxima contracción arriba, la gravedad te resiste toda la repetición" }, sets: { strength: "3×8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Reverse Curl", es: "Curl Invertido" }, primary: "biceps", secondary: ["forearms", "brachialis"], equipment: { en: "Barbell or EZ Bar", es: "Barra o Barra EZ" }, cue: { en: "Overhand grip, curl bar up keeping wrists rigid.", es: "Agarre prono, sube la barra manteniendo muñecas rígidas." }, feel: { en: "Forearms and brachialis burning, different angle", es: "Antebrazos y braquial ardiendo, ángulo diferente" }, sets: { strength: "3×8", hypertrophy: "3×12", endurance: "3×15-20" } },
      { name: { en: "Cable Rope Hammer Curl", es: "Curl Martillo con Cuerda" }, primary: "biceps", secondary: ["brachialis"], equipment: { en: "Cable Machine, Rope", es: "Máquina de Cables, Cuerda" }, cue: { en: "Neutral grip on rope ends, curl up and apart at top.", es: "Agarre neutro en los extremos de la cuerda, sube y separa arriba." }, feel: { en: "Constant tension hammer movement, brachialis focus", es: "Movimiento martillo con tensión constante, enfoque en braquial" }, sets: { strength: "3×8", hypertrophy: "4×12", endurance: "3×15-20" } }
    ]
  },
  triceps: {
    name: { en: "Triceps", es: "Tríceps" },
    exercises: [
      { name: { en: "Close-Grip Bench Press", es: "Press de Banca Agarre Cerrado" }, primary: "triceps", secondary: ["chest"], equipment: { en: "Barbell, Flat Bench", es: "Barra, Banco Plano" }, cue: { en: "Hands shoulder-width, lower to lower chest, press up. Elbows tucked.", es: "Manos al ancho de hombros, baja al pecho inferior, empuja. Codos pegados." }, feel: { en: "Triceps overload with heavy weight, chest assists", es: "Sobrecarga de tríceps con peso pesado, pecho asiste" }, sets: { strength: "5×5", hypertrophy: "4×8-10", endurance: "3×12-15" } },
      { name: { en: "Tricep Rope Pushdown", es: "Extensión con Cuerda en Polea" }, primary: "triceps", secondary: [], equipment: { en: "Cable Machine, Rope", es: "Máquina de Cables, Cuerda" }, cue: { en: "Elbows pinned, push rope down and apart at bottom. Squeeze.", es: "Codos fijos, empuja cuerda abajo y separa al final. Aprieta." }, feel: { en: "Lateral head burn, peak contraction when arms split", es: "Ardor en cabeza lateral, máxima contracción al separar" }, sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Skull Crusher", es: "Rompecráneos" }, primary: "triceps", secondary: [], equipment: { en: "EZ Bar, Flat Bench", es: "Barra EZ, Banco Plano" }, cue: { en: "Lower bar to forehead, extend back up. Upper arms stay vertical.", es: "Baja la barra a la frente, extiende. Brazos superiores verticales." }, feel: { en: "Deep long-head stretch, controlled extension", es: "Estiramiento profundo de cabeza larga, extensión controlada" }, sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Overhead Tricep Extension", es: "Extensión de Tríceps sobre Cabeza" }, primary: "triceps", secondary: [], equipment: { en: "Dumbbell or Cable", es: "Mancuerna o Cable" }, cue: { en: "Hold weight overhead, lower behind head, extend back up. Elbows forward.", es: "Sostén peso sobre cabeza, baja detrás, extiende. Codos al frente." }, feel: { en: "Long head stretch at bottom, full extension at top", es: "Estiramiento de cabeza larga abajo, extensión completa arriba" }, sets: { strength: "3×8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Dips (Tricep Focus)", es: "Fondos (Enfoque en Tríceps)" }, primary: "triceps", secondary: ["chest"], equipment: { en: "Parallel Bars", es: "Barras Paralelas" }, cue: { en: "Body upright (no lean), lower until 90° at elbow, press up.", es: "Cuerpo erguido (sin inclinación), baja hasta 90° en codo, empuja." }, feel: { en: "Heavy tricep load, bodyweight pressing", es: "Carga pesada en tríceps, presión con peso corporal" }, sets: { strength: "4×6-8", hypertrophy: "3×10-12", endurance: "3×15-20" } },
      { name: { en: "Tricep Kickback", es: "Patada de Tríceps" }, primary: "triceps", secondary: [], equipment: { en: "Dumbbell", es: "Mancuerna" }, cue: { en: "Hinge forward, extend arm fully behind you. Squeeze at top.", es: "Inclínate, extiende brazo completamente atrás. Aprieta arriba." }, feel: { en: "Peak contraction at full extension, light weight feels heavy", es: "Contracción máxima en extensión completa, peso ligero se siente pesado" }, sets: { strength: "3×8", hypertrophy: "3×12-15", endurance: "3×20" } },
      { name: { en: "V-Bar Pushdown", es: "Extensión con Barra V" }, primary: "triceps", secondary: [], equipment: { en: "Cable Machine, V-Bar", es: "Máquina de Cables, Barra V" }, cue: { en: "Same as rope pushdown but with fixed grip. Push down, lock out.", es: "Igual que con cuerda pero agarre fijo. Empuja abajo, bloquea." }, feel: { en: "Medial head focus, heavier than rope", es: "Enfoque en cabeza medial, más pesado que cuerda" }, sets: { strength: "3×8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Diamond Push-Up", es: "Flexión Diamante" }, primary: "triceps", secondary: ["chest"], equipment: { en: "Bodyweight", es: "Peso Corporal" }, cue: { en: "Hands together forming diamond shape. Lower chest to hands.", es: "Manos juntas formando diamante. Baja pecho a las manos." }, feel: { en: "Intense tricep burn, inner chest secondary", es: "Ardor intenso en tríceps, pecho interno secundario" }, sets: { strength: "3×10", hypertrophy: "3×15-20", endurance: "3×25" } },
      { name: { en: "Overhead Cable Extension", es: "Extensión sobre Cabeza con Cable" }, primary: "triceps", secondary: [], equipment: { en: "Cable Machine, Rope (low pulley)", es: "Máquina de Cables, Cuerda (polea baja)" }, cue: { en: "Face away from cable, extend rope overhead. Step forward for stretch.", es: "De espaldas al cable, extiende la cuerda sobre la cabeza. Da un paso para estirar." }, feel: { en: "Maximum long-head stretch under constant cable tension", es: "Máximo estiramiento de cabeza larga con tensión constante del cable" }, sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Machine Tricep Extension", es: "Extensión de Tríceps en Máquina" }, primary: "triceps", secondary: [], equipment: { en: "Tricep Extension Machine", es: "Máquina de Extensión de Tríceps" }, cue: { en: "Adjust pad to upper arms, extend forearms down fully.", es: "Ajusta la almohadilla a brazos superiores, extiende antebrazos completamente." }, feel: { en: "Guided path, safe to push to failure", es: "Trayectoria guiada, seguro para ir al fallo" }, sets: { strength: "3×8", hypertrophy: "4×10-12", endurance: "3×15-20" } }
    ]
  },
  quads: {
    name: { en: "Quadriceps", es: "Cuádriceps" },
    exercises: [
      { name: { en: "Barbell Back Squat", es: "Sentadilla con Barra" }, primary: "quads", secondary: ["glutes", "hamstrings", "core"], equipment: { en: "Barbell, Squat Rack", es: "Barra, Rack de Sentadilla" }, cue: { en: "Bar on upper traps, squat to parallel or below. Drive through heels.", es: "Barra en trapecios, baja a paralelo o más. Empuja con talones." }, feel: { en: "Full quad burn, glutes fire out of the hole", es: "Ardor completo en cuádriceps, glúteos activan al subir" }, sets: { strength: "5×5", hypertrophy: "4×8-10", endurance: "3×15" } },
      { name: { en: "Leg Press", es: "Prensa de Pierna" }, primary: "quads", secondary: ["glutes"], equipment: { en: "Leg Press Machine", es: "Máquina de Prensa" }, cue: { en: "Feet shoulder-width, lower platform until 90° at knees. Press up without locking.", es: "Pies al ancho de hombros, baja plataforma hasta 90°. Empuja sin bloquear." }, feel: { en: "Heavy quad load without spinal compression", es: "Carga pesada en cuádriceps sin compresión espinal" }, sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15-20" } },
      { name: { en: "Front Squat", es: "Sentadilla Frontal" }, primary: "quads", secondary: ["core", "glutes"], equipment: { en: "Barbell, Squat Rack", es: "Barra, Rack de Sentadilla" }, cue: { en: "Bar on front delts, elbows high. Stay upright, squat deep.", es: "Barra en deltoides frontales, codos altos. Mantente erguido, baja profundo." }, feel: { en: "Quad dominant, core working hard to stay upright", es: "Dominante en cuádriceps, core trabajando para mantenerse erguido" }, sets: { strength: "5×5", hypertrophy: "4×6-8", endurance: "3×12" } },
      { name: { en: "Leg Extension", es: "Extensión de Pierna" }, primary: "quads", secondary: [], equipment: { en: "Leg Extension Machine", es: "Máquina de Extensión" }, cue: { en: "Extend legs fully, squeeze at top for 1 second. Control the negative.", es: "Extiende piernas completamente, aprieta arriba 1 segundo. Controla la bajada." }, feel: { en: "Pure quad isolation, burning at peak contraction", es: "Aislamiento puro de cuádriceps, ardor en contracción máxima" }, sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Walking Lunge", es: "Zancada Caminando" }, primary: "quads", secondary: ["glutes", "hamstrings"], equipment: { en: "Dumbbells or Barbell", es: "Mancuernas o Barra" }, cue: { en: "Big step forward, lower back knee toward floor. Push off front foot.", es: "Paso grande adelante, baja rodilla trasera al suelo. Empuja con pie delantero." }, feel: { en: "Each leg works individually, balance challenged", es: "Cada pierna trabaja individualmente, balance desafiado" }, sets: { strength: "4×8 each", hypertrophy: "3×12 each", endurance: "3×16 each" } },
      { name: { en: "Bulgarian Split Squat", es: "Sentadilla Búlgara" }, primary: "quads", secondary: ["glutes"], equipment: { en: "Dumbbells, Bench", es: "Mancuernas, Banco" }, cue: { en: "Rear foot on bench, lower front knee to 90°. Drive up through front heel.", es: "Pie trasero en banco, baja rodilla delantera a 90°. Sube con talón delantero." }, feel: { en: "Deep single-leg quad stretch and burn", es: "Estiramiento profundo y ardor unilateral del cuádriceps" }, sets: { strength: "4×6 each", hypertrophy: "4×10 each", endurance: "3×15 each" } },
      { name: { en: "Hack Squat", es: "Sentadilla Hack" }, primary: "quads", secondary: ["glutes"], equipment: { en: "Hack Squat Machine", es: "Máquina Hack" }, cue: { en: "Shoulders under pads, feet low on platform. Squat deep.", es: "Hombros bajo las almohadillas, pies bajos en plataforma. Baja profundo." }, feel: { en: "Quad isolation with back support, safe to go heavy", es: "Aislamiento de cuádriceps con soporte de espalda, seguro para ir pesado" }, sets: { strength: "4×6", hypertrophy: "4×8-10", endurance: "3×12-15" } },
      { name: { en: "Goblet Squat", es: "Sentadilla Copa" }, primary: "quads", secondary: ["glutes", "core"], equipment: { en: "Dumbbell or Kettlebell", es: "Mancuerna o Kettlebell" }, cue: { en: "Hold weight at chest, squat between knees. Upright torso.", es: "Sostén peso en pecho, sentadilla entre rodillas. Torso erguido." }, feel: { en: "Quad focus with natural upright posture", es: "Enfoque en cuádriceps con postura natural erguida" }, sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Sissy Squat", es: "Sentadilla Sissy" }, primary: "quads", secondary: [], equipment: { en: "Bodyweight or Sissy Squat Bench", es: "Peso Corporal o Banco Sissy" }, cue: { en: "Lean back, bend knees forward over toes. Lower slowly.", es: "Inclínate atrás, flexiona rodillas sobre los dedos. Baja lentamente." }, feel: { en: "Extreme quad stretch, rectus femoris on fire", es: "Estiramiento extremo del cuádriceps, recto femoral ardiendo" }, sets: { strength: "3×8", hypertrophy: "3×12-15", endurance: "3×20" } },
      { name: { en: "Step-Up", es: "Subida al Banco" }, primary: "quads", secondary: ["glutes"], equipment: { en: "Dumbbells, Elevated Platform", es: "Mancuernas, Plataforma Elevada" }, cue: { en: "Step up driving through top foot. Don't push off back foot.", es: "Sube empujando con pie superior. No empujes con pie trasero." }, feel: { en: "Single-leg quad drive, functional movement", es: "Impulso unilateral del cuádriceps, movimiento funcional" }, sets: { strength: "4×6 each", hypertrophy: "3×10 each", endurance: "3×15 each" } }
    ]
  },
  hamstrings: {
    name: { en: "Hamstrings", es: "Isquiotibiales" },
    exercises: [
      { name: { en: "Romanian Deadlift", es: "Peso Muerto Rumano" }, primary: "hamstrings", secondary: ["glutes", "lower-back"], equipment: { en: "Barbell", es: "Barra" }, cue: { en: "Slight knee bend, hinge at hips, lower bar to mid-shin. Feel hamstring stretch.", es: "Ligera flexión de rodillas, bisagra en caderas, baja barra a media espinilla." }, feel: { en: "Deep hamstring stretch at bottom, glute squeeze at top", es: "Estiramiento profundo de isquiotibiales abajo, contracción de glúteos arriba" }, sets: { strength: "4×6", hypertrophy: "4×8-10", endurance: "3×12" } },
      { name: { en: "Lying Leg Curl", es: "Curl de Pierna Acostado" }, primary: "hamstrings", secondary: [], equipment: { en: "Leg Curl Machine", es: "Máquina de Curl de Pierna" }, cue: { en: "Curl heels toward glutes, squeeze at top. Control the descent.", es: "Sube talones hacia glúteos, aprieta arriba. Controla el descenso." }, feel: { en: "Pure hamstring isolation, peak contraction at top", es: "Aislamiento puro de isquiotibiales, contracción máxima arriba" }, sets: { strength: "3×6-8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Seated Leg Curl", es: "Curl de Pierna Sentado" }, primary: "hamstrings", secondary: [], equipment: { en: "Seated Leg Curl Machine", es: "Máquina de Curl Sentado" }, cue: { en: "Curl pad under calves, pull heels toward seat.", es: "Almohadilla bajo pantorrillas, jala talones hacia asiento." }, feel: { en: "Hamstrings in shortened position, different angle than lying", es: "Isquiotibiales en posición acortada, diferente ángulo que acostado" }, sets: { strength: "3×8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Stiff-Leg Deadlift", es: "Peso Muerto con Piernas Rígidas" }, primary: "hamstrings", secondary: ["glutes", "lower-back"], equipment: { en: "Barbell", es: "Barra" }, cue: { en: "Legs nearly straight, hinge deep. Feel max hamstring stretch.", es: "Piernas casi rectas, bisagra profunda. Siente máximo estiramiento." }, feel: { en: "Maximum hamstring stretch, more than RDL", es: "Máximo estiramiento de isquiotibiales, más que peso muerto rumano" }, sets: { strength: "4×6", hypertrophy: "4×8-10", endurance: "3×12" } },
      { name: { en: "Glute-Ham Raise", es: "Elevación Glúteo-Isquiotibial" }, primary: "hamstrings", secondary: ["glutes"], equipment: { en: "GHD Machine", es: "Máquina GHD" }, cue: { en: "Lock feet, lower body forward under control. Curl back up using hamstrings.", es: "Asegura pies, baja cuerpo adelante controlado. Sube usando isquiotibiales." }, feel: { en: "Intense hamstring engagement through full range", es: "Activación intensa de isquiotibiales en rango completo" }, sets: { strength: "4×6", hypertrophy: "3×8-10", endurance: "3×12" } },
      { name: { en: "Dumbbell RDL", es: "Peso Muerto Rumano con Mancuernas" }, primary: "hamstrings", secondary: ["glutes"], equipment: { en: "Dumbbells", es: "Mancuernas" }, cue: { en: "Same as barbell RDL but dumbbells at sides. Better range of motion.", es: "Igual que RDL con barra pero mancuernas a los lados. Mejor rango." }, feel: { en: "Hamstring stretch with more freedom of movement", es: "Estiramiento de isquiotibiales con más libertad de movimiento" }, sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Swiss Ball Hamstring Curl", es: "Curl de Isquiotibial con Pelota" }, primary: "hamstrings", secondary: ["glutes", "core"], equipment: { en: "Swiss Ball", es: "Pelota Suiza" }, cue: { en: "Lie on back, heels on ball. Lift hips, curl ball toward glutes.", es: "Acuéstate, talones en la pelota. Levanta caderas, acerca pelota a glúteos." }, feel: { en: "Hamstrings and core stabilizing together", es: "Isquiotibiales y core estabilizando juntos" }, sets: { strength: "3×8", hypertrophy: "3×12", endurance: "3×15-20" } },
      { name: { en: "Cable Pull-Through", es: "Jalón entre Piernas con Cable" }, primary: "hamstrings", secondary: ["glutes"], equipment: { en: "Cable Machine, Rope (low)", es: "Máquina de Cables, Cuerda (baja)" }, cue: { en: "Face away, hinge forward letting cable pull between legs. Drive hips forward.", es: "De espaldas, inclínate dejando que el cable pase entre piernas. Empuja caderas." }, feel: { en: "Hip hinge pattern, glutes and hamstrings working together", es: "Patrón de bisagra, glúteos e isquiotibiales trabajando juntos" }, sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Nordic Hamstring Curl", es: "Curl Nórdico" }, primary: "hamstrings", secondary: [], equipment: { en: "Partner or Anchor Point", es: "Compañero o Punto de Anclaje" }, cue: { en: "Kneel, partner holds ankles. Lower body forward slowly using hamstrings.", es: "De rodillas, compañero sostiene tobillos. Baja cuerpo lentamente con isquiotibiales." }, feel: { en: "Extreme eccentric hamstring load, injury prevention exercise", es: "Carga excéntrica extrema, ejercicio de prevención de lesiones" }, sets: { strength: "4×4-6", hypertrophy: "3×6-8", endurance: "3×10" } },
      { name: { en: "Single-Leg Deadlift", es: "Peso Muerto a Una Pierna" }, primary: "hamstrings", secondary: ["glutes", "core"], equipment: { en: "Dumbbell or Kettlebell", es: "Mancuerna o Kettlebell" }, cue: { en: "Stand on one leg, hinge forward, free leg extends back. Balance.", es: "Párate en una pierna, inclínate, pierna libre se extiende atrás. Equilibrio." }, feel: { en: "Unilateral hamstring stretch plus balance challenge", es: "Estiramiento unilateral de isquiotibiales más desafío de equilibrio" }, sets: { strength: "3×6 each", hypertrophy: "3×10 each", endurance: "3×12 each" } }
    ]
  },
  glutes: {
    name: { en: "Glutes", es: "Glúteos" },
    exercises: [
      { name: { en: "Hip Thrust", es: "Empuje de Cadera" }, primary: "glutes", secondary: ["hamstrings"], equipment: { en: "Barbell, Bench", es: "Barra, Banco" }, cue: { en: "Upper back on bench, bar on hips. Drive hips up, squeeze glutes at top.", es: "Espalda alta en banco, barra en caderas. Empuja caderas arriba, aprieta glúteos." }, feel: { en: "Maximum glute contraction at top, heavy hip extension", es: "Máxima contracción de glúteos arriba, extensión pesada de cadera" }, sets: { strength: "4×6", hypertrophy: "4×10-12", endurance: "3×15-20" } },
      { name: { en: "Barbell Glute Bridge", es: "Puente de Glúteos con Barra" }, primary: "glutes", secondary: ["hamstrings"], equipment: { en: "Barbell", es: "Barra" }, cue: { en: "Lie flat, bar on hips, drive hips up squeezing glutes. Hold 1s at top.", es: "Acuéstate, barra en caderas, empuja caderas apretando glúteos. Sostén 1s arriba." }, feel: { en: "Glute squeeze at peak, no lower back strain", es: "Contracción de glúteos en el pico, sin tensión lumbar" }, sets: { strength: "4×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Cable Kickback", es: "Patada Trasera con Cable" }, primary: "glutes", secondary: ["hamstrings"], equipment: { en: "Cable Machine, Ankle Strap", es: "Máquina de Cables, Correa de Tobillo" }, cue: { en: "Kick leg straight back against cable. Squeeze glute at full extension.", es: "Patea pierna recta atrás contra el cable. Aprieta glúteo en extensión." }, feel: { en: "Isolated glute contraction, constant cable tension", es: "Contracción aislada de glúteo, tensión constante del cable" }, sets: { strength: "3×8 each", hypertrophy: "4×12 each", endurance: "3×15-20 each" } },
      { name: { en: "Sumo Deadlift", es: "Peso Muerto Sumo" }, primary: "glutes", secondary: ["quads", "hamstrings", "adductors"], equipment: { en: "Barbell", es: "Barra" }, cue: { en: "Wide stance, toes out, grip inside knees. Drive through floor.", es: "Postura amplia, puntas afuera, agarre dentro de rodillas. Empuja el suelo." }, feel: { en: "Glutes and inner thighs working hard, more upright than conventional", es: "Glúteos y muslos internos trabajando duro, más erguido que convencional" }, sets: { strength: "5×5", hypertrophy: "4×6-8", endurance: "3×10-12" } },
      { name: { en: "Reverse Lunge", es: "Zancada Reversa" }, primary: "glutes", secondary: ["quads", "hamstrings"], equipment: { en: "Dumbbells", es: "Mancuernas" }, cue: { en: "Step back, lower knee to floor, push up through front heel.", es: "Da un paso atrás, baja rodilla al suelo, empuja con talón delantero." }, feel: { en: "Glute of front leg fires hard, more glute-focused than forward lunge", es: "Glúteo de pierna delantera activa fuerte, más enfocado que zancada frontal" }, sets: { strength: "4×6 each", hypertrophy: "3×10 each", endurance: "3×15 each" } },
      { name: { en: "Frog Pump", es: "Bombeo de Rana" }, primary: "glutes", secondary: [], equipment: { en: "Bodyweight or Dumbbell", es: "Peso Corporal o Mancuerna" }, cue: { en: "Lie down, soles together knees apart. Drive hips up squeezing glutes.", es: "Acuéstate, plantas juntas rodillas separadas. Empuja caderas apretando glúteos." }, feel: { en: "Pure glute activation in shortened position", es: "Activación pura de glúteos en posición acortada" }, sets: { strength: "3×15", hypertrophy: "3×20-25", endurance: "3×30" } },
      { name: { en: "Donkey Kick (Machine)", es: "Patada de Burro (Máquina)" }, primary: "glutes", secondary: [], equipment: { en: "Glute Kickback Machine", es: "Máquina de Patada de Glúteo" }, cue: { en: "Press platform back with heel, squeeze glute at top.", es: "Empuja la plataforma atrás con el talón, aprieta glúteo arriba." }, feel: { en: "Targeted glute squeeze each rep", es: "Contracción dirigida del glúteo en cada rep" }, sets: { strength: "3×8 each", hypertrophy: "4×12 each", endurance: "3×15-20 each" } },
      { name: { en: "Good Morning", es: "Buenos Días" }, primary: "glutes", secondary: ["hamstrings", "lower-back"], equipment: { en: "Barbell", es: "Barra" }, cue: { en: "Bar on traps, hinge forward keeping back straight. Push hips back.", es: "Barra en trapecios, inclínate manteniendo espalda recta. Empuja caderas atrás." }, feel: { en: "Glute and hamstring stretch, lower back stabilizing", es: "Estiramiento de glúteos e isquiotibiales, zona lumbar estabilizando" }, sets: { strength: "4×6-8", hypertrophy: "3×10-12", endurance: "3×15" } },
      { name: { en: "Smith Machine Hip Thrust", es: "Empuje de Cadera en Smith" }, primary: "glutes", secondary: ["hamstrings"], equipment: { en: "Smith Machine, Bench", es: "Máquina Smith, Banco" }, cue: { en: "Same as hip thrust but bar path is guided. Focus on squeeze.", es: "Igual que empuje de cadera pero trayectoria guiada. Enfoque en contracción." }, feel: { en: "Stable path lets you focus purely on glute squeeze", es: "Trayectoria estable permite enfocarse en contracción de glúteos" }, sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15-20" } },
      { name: { en: "Lateral Band Walk", es: "Caminata Lateral con Banda" }, primary: "glutes", secondary: ["abductors"], equipment: { en: "Resistance Band", es: "Banda de Resistencia" }, cue: { en: "Band above knees, slight squat, step sideways. Keep tension.", es: "Banda arriba de rodillas, ligera sentadilla, camina lateral. Mantén tensión." }, feel: { en: "Glute medius burn, hip stability", es: "Ardor en glúteo medio, estabilidad de cadera" }, sets: { strength: "3×12 each way", hypertrophy: "3×15 each way", endurance: "3×20 each way" } }
    ]
  },
  calves: {
    name: { en: "Calves", es: "Pantorrillas" },
    exercises: [
      { name: { en: "Standing Calf Raise", es: "Elevación de Pantorrilla de Pie" }, primary: "calves", secondary: [], equipment: { en: "Calf Raise Machine or Smith", es: "Máquina de Pantorrilla o Smith" }, cue: { en: "Rise onto balls of feet, full stretch at bottom. Hold peak 1s.", es: "Sube a las puntas, estiramiento completo abajo. Sostén arriba 1s." }, feel: { en: "Deep calf stretch at bottom, strong squeeze at top", es: "Estiramiento profundo abajo, contracción fuerte arriba" }, sets: { strength: "4×8", hypertrophy: "4×12-15", endurance: "3×20-25" } },
      { name: { en: "Seated Calf Raise", es: "Elevación de Pantorrilla Sentado" }, primary: "calves", secondary: [], equipment: { en: "Seated Calf Raise Machine", es: "Máquina de Pantorrilla Sentado" }, cue: { en: "Pad on knees, raise heels as high as possible.", es: "Almohadilla en rodillas, sube talones lo más posible." }, feel: { en: "Soleus emphasis (deeper calf muscle), burning at peak", es: "Énfasis en sóleo (músculo profundo), ardor en el pico" }, sets: { strength: "4×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Donkey Calf Raise", es: "Elevación de Pantorrilla de Burro" }, primary: "calves", secondary: [], equipment: { en: "Donkey Calf Machine or Partner", es: "Máquina de Pantorrilla Burro o Compañero" }, cue: { en: "Hinge forward, rise onto toes with weight on hips.", es: "Inclínate, sube a las puntas con peso en caderas." }, feel: { en: "Full gastrocnemius stretch due to hip angle", es: "Estiramiento completo del gastrocnemio por ángulo de cadera" }, sets: { strength: "4×8", hypertrophy: "4×12", endurance: "3×20" } },
      { name: { en: "Leg Press Calf Raise", es: "Elevación de Pantorrilla en Prensa" }, primary: "calves", secondary: [], equipment: { en: "Leg Press Machine", es: "Máquina de Prensa" }, cue: { en: "Toes on edge of platform, press through balls of feet.", es: "Puntas en el borde de la plataforma, empuja con la parte delantera del pie." }, feel: { en: "Heavy calf overload, safe to push limits", es: "Sobrecarga pesada de pantorrillas, seguro para ir al límite" }, sets: { strength: "4×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Single-Leg Calf Raise", es: "Elevación de Pantorrilla a Una Pierna" }, primary: "calves", secondary: [], equipment: { en: "Dumbbell, Step", es: "Mancuerna, Escalón" }, cue: { en: "One foot on edge of step, full range each rep. Hold wall for balance.", es: "Un pie en borde del escalón, rango completo. Apóyate para balance." }, feel: { en: "Full stretch and contraction unilaterally, finds imbalances", es: "Estiramiento y contracción completa unilateral, encuentra desbalances" }, sets: { strength: "3×8 each", hypertrophy: "3×12 each", endurance: "3×20 each" } },
      { name: { en: "Smith Machine Calf Raise", es: "Elevación de Pantorrilla en Smith" }, primary: "calves", secondary: [], equipment: { en: "Smith Machine, Block", es: "Máquina Smith, Bloque" }, cue: { en: "Stand on block under Smith bar, raise heels high.", es: "Párate en bloque bajo barra Smith, sube talones alto." }, feel: { en: "Guided heavy calf work, safe for max loads", es: "Trabajo pesado guiado de pantorrillas, seguro para cargas máximas" }, sets: { strength: "4×6-8", hypertrophy: "4×12", endurance: "3×20" } },
      { name: { en: "Tibialis Raise", es: "Elevación de Tibial" }, primary: "calves", secondary: ["tibialis"], equipment: { en: "Wall or Tib Bar", es: "Pared o Barra Tibial" }, cue: { en: "Lean back against wall, raise toes up. Works front of shin.", es: "Recárgate en pared, sube puntas. Trabaja frente de espinilla." }, feel: { en: "Front of shin activation, injury prevention", es: "Activación de la parte frontal de la espinilla, prevención de lesiones" }, sets: { strength: "3×12", hypertrophy: "3×15-20", endurance: "3×25" } },
      { name: { en: "Jump Rope", es: "Saltar la Cuerda" }, primary: "calves", secondary: ["cardio"], equipment: { en: "Jump Rope", es: "Cuerda para Saltar" }, cue: { en: "Stay on balls of feet, small jumps, wrists turn the rope.", es: "Mantente en puntas, saltos pequeños, muñecas giran la cuerda." }, feel: { en: "Rhythmic calf engagement plus cardio", es: "Activación rítmica de pantorrillas más cardio" }, sets: { strength: "3×60s", hypertrophy: "3×90s", endurance: "3×3min" } },
      { name: { en: "Box Jump (Calf Focus)", es: "Salto al Cajón (Enfoque Pantorrilla)" }, primary: "calves", secondary: ["quads", "glutes"], equipment: { en: "Plyo Box", es: "Cajón Pliométrico" }, cue: { en: "Explode up from balls of feet, land softly. Reset each rep.", es: "Explota desde puntas, aterriza suave. Resetea cada rep." }, feel: { en: "Explosive calf power, plyometric training", es: "Potencia explosiva de pantorrillas, entrenamiento pliométrico" }, sets: { strength: "4×6", hypertrophy: "3×10", endurance: "3×15" } },
      { name: { en: "Farmer's Walk (On Toes)", es: "Caminata de Granjero (En Puntas)" }, primary: "calves", secondary: ["forearms", "traps", "core"], equipment: { en: "Heavy Dumbbells", es: "Mancuernas Pesadas" }, cue: { en: "Walk on balls of feet holding heavy weight. Stay tall.", es: "Camina en puntas sosteniendo peso pesado. Mantente erguido." }, feel: { en: "Calves under constant load plus grip and posture challenge", es: "Pantorrillas bajo carga constante más desafío de agarre y postura" }, sets: { strength: "3×30s", hypertrophy: "3×45s", endurance: "3×60s" } }
    ]
  },
  core: {
    name: { en: "Core / Abs", es: "Core / Abdominales" },
    exercises: [
      { name: { en: "Hanging Leg Raise", es: "Elevación de Piernas Colgado" }, primary: "core", secondary: ["hip-flexors"], equipment: { en: "Pull-Up Bar", es: "Barra de Dominadas" }, cue: { en: "Hang from bar, raise legs to parallel or higher. Control descent.", es: "Cuélgate de la barra, sube piernas a paralelo o más. Controla el descenso." }, feel: { en: "Lower abs on fire, grip challenged", es: "Abdominales inferiores ardiendo, agarre desafiado" }, sets: { strength: "4×8", hypertrophy: "3×12-15", endurance: "3×20" } },
      { name: { en: "Cable Crunch", es: "Crunch con Cable" }, primary: "core", secondary: [], equipment: { en: "Cable Machine, Rope", es: "Máquina de Cables, Cuerda" }, cue: { en: "Kneel facing cable, crunch down bringing elbows to knees. Resist on way up.", es: "De rodillas frente al cable, crunch bajando codos a rodillas. Resiste al subir." }, feel: { en: "Weighted ab contraction, progressive overload possible", es: "Contracción abdominal con peso, sobrecarga progresiva posible" }, sets: { strength: "4×8-10", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Plank", es: "Plancha" }, primary: "core", secondary: ["shoulders"], equipment: { en: "Bodyweight", es: "Peso Corporal" }, cue: { en: "Forearms and toes on floor, body straight line. Squeeze everything.", es: "Antebrazos y puntas en el suelo, cuerpo en línea recta. Aprieta todo." }, feel: { en: "Total core stabilization, shaking is normal", es: "Estabilización total del core, temblar es normal" }, sets: { strength: "3×45-60s", hypertrophy: "3×60-90s", endurance: "3×2min" } },
      { name: { en: "Ab Wheel Rollout", es: "Rodada con Rueda Abdominal" }, primary: "core", secondary: ["lats", "shoulders"], equipment: { en: "Ab Wheel", es: "Rueda Abdominal" }, cue: { en: "Roll forward extending body, pull back using abs. Don't collapse lower back.", es: "Rueda adelante extendiendo cuerpo, regresa usando abdominales. No colapses la espalda baja." }, feel: { en: "Extreme ab stretch under load, full-body tension", es: "Estiramiento extremo abdominal bajo carga, tensión de cuerpo completo" }, sets: { strength: "4×8", hypertrophy: "3×10-12", endurance: "3×15" } },
      { name: { en: "Russian Twist", es: "Giro Ruso" }, primary: "core", secondary: ["obliques"], equipment: { en: "Medicine Ball or Plate", es: "Balón Medicinal o Disco" }, cue: { en: "Sit with feet off floor, rotate weight side to side.", es: "Siéntate con pies elevados, rota el peso de lado a lado." }, feel: { en: "Obliques burning, rotational core strength", es: "Oblicuos ardiendo, fuerza rotacional del core" }, sets: { strength: "3×10 each side", hypertrophy: "3×15 each side", endurance: "3×20 each side" } },
      { name: { en: "Decline Sit-Up", es: "Abdominales en Declive" }, primary: "core", secondary: ["hip-flexors"], equipment: { en: "Decline Bench", es: "Banco Declinado" }, cue: { en: "Hook feet, lower back to bench, curl up squeezing abs.", es: "Engancha pies, baja espalda al banco, sube apretando abdominales." }, feel: { en: "Increased resistance through decline angle", es: "Mayor resistencia por ángulo declinado" }, sets: { strength: "3×10", hypertrophy: "3×15", endurance: "3×20-25" } },
      { name: { en: "Dead Bug", es: "Bicho Muerto" }, primary: "core", secondary: [], equipment: { en: "Bodyweight", es: "Peso Corporal" }, cue: { en: "On back, extend opposite arm/leg while keeping lower back pressed down.", es: "Boca arriba, extiende brazo/pierna opuestos manteniendo espalda baja pegada." }, feel: { en: "Deep core activation without spinal flexion", es: "Activación profunda del core sin flexión espinal" }, sets: { strength: "3×10 each", hypertrophy: "3×12 each", endurance: "3×15 each" } },
      { name: { en: "Pallof Press", es: "Press Pallof" }, primary: "core", secondary: ["obliques"], equipment: { en: "Cable Machine", es: "Máquina de Cables" }, cue: { en: "Stand sideways to cable, press handle forward resisting rotation.", es: "Párate lateral al cable, presiona la manija adelante resistiendo rotación." }, feel: { en: "Anti-rotation challenge, obliques and deep core stabilizing", es: "Desafío anti-rotación, oblicuos y core profundo estabilizando" }, sets: { strength: "3×10 each side", hypertrophy: "3×12 each side", endurance: "3×15 each side" } },
      { name: { en: "Mountain Climber", es: "Escalador de Montaña" }, primary: "core", secondary: ["shoulders", "hip-flexors"], equipment: { en: "Bodyweight", es: "Peso Corporal" }, cue: { en: "Plank position, drive knees to chest alternating rapidly.", es: "Posición de plancha, lleva rodillas al pecho alternando rápidamente." }, feel: { en: "Core endurance plus cardio, everything engaged", es: "Resistencia del core más cardio, todo activado" }, sets: { strength: "3×20 each", hypertrophy: "3×30 each", endurance: "3×45s" } },
      { name: { en: "Side Plank", es: "Plancha Lateral" }, primary: "core", secondary: ["obliques"], equipment: { en: "Bodyweight", es: "Peso Corporal" }, cue: { en: "Forearm and feet stacked, body straight line sideways. Hold.", es: "Antebrazo y pies apilados, cuerpo en línea recta lateral. Sostén." }, feel: { en: "Oblique and lateral core endurance", es: "Resistencia de oblicuos y core lateral" }, sets: { strength: "3×30s each", hypertrophy: "3×45s each", endurance: "3×60s each" } }
    ]
  },
  forearms: {
    name: { en: "Forearms", es: "Antebrazos" },
    exercises: [
      { name: { en: "Wrist Curl", es: "Curl de Muñeca" }, primary: "forearms", secondary: [], equipment: { en: "Barbell or Dumbbells", es: "Barra o Mancuernas" }, cue: { en: "Forearms on bench, curl wrists up. Full range.", es: "Antebrazos en banco, sube muñecas. Rango completo." }, feel: { en: "Inner forearm pump and burn", es: "Bombeo y ardor en antebrazo interno" }, sets: { strength: "3×10", hypertrophy: "3×15", endurance: "3×20-25" } },
      { name: { en: "Reverse Wrist Curl", es: "Curl de Muñeca Invertido" }, primary: "forearms", secondary: [], equipment: { en: "Barbell or Dumbbells", es: "Barra o Mancuernas" }, cue: { en: "Overhand grip, forearms on bench, curl wrists up.", es: "Agarre prono, antebrazos en banco, sube muñecas." }, feel: { en: "Top of forearm activation, extensors working", es: "Activación de la parte superior del antebrazo, extensores trabajando" }, sets: { strength: "3×10", hypertrophy: "3×15", endurance: "3×20" } },
      { name: { en: "Farmer's Walk", es: "Caminata de Granjero" }, primary: "forearms", secondary: ["traps", "core"], equipment: { en: "Heavy Dumbbells or Trap Bar", es: "Mancuernas Pesadas o Barra Trap" }, cue: { en: "Grab heavy weights, walk with tall posture. Grip will be the limiter.", es: "Agarra pesos pesados, camina con postura erguida. El agarre será el limitante." }, feel: { en: "Grip endurance challenge, everything stabilizing", es: "Desafío de resistencia de agarre, todo estabilizando" }, sets: { strength: "3×30s", hypertrophy: "3×45s", endurance: "3×60s" } },
      { name: { en: "Dead Hang", es: "Colgado Pasivo" }, primary: "forearms", secondary: ["shoulders"], equipment: { en: "Pull-Up Bar", es: "Barra de Dominadas" }, cue: { en: "Hang from bar with full grip. Hold as long as possible.", es: "Cuélgate de la barra con agarre completo. Sostén lo más posible." }, feel: { en: "Grip endurance, forearms burning as time goes", es: "Resistencia de agarre, antebrazos ardiendo con el tiempo" }, sets: { strength: "3×max hold", hypertrophy: "3×30-45s", endurance: "3×60s+" } },
      { name: { en: "Plate Pinch", es: "Pinza de Disco" }, primary: "forearms", secondary: [], equipment: { en: "Weight Plates", es: "Discos de Peso" }, cue: { en: "Pinch two plates together smooth sides out. Hold.", es: "Aprieta dos discos juntos con lados lisos afuera. Sostén." }, feel: { en: "Thumb and finger strength, crushing grip", es: "Fuerza de pulgar y dedos, agarre de aplastamiento" }, sets: { strength: "3×20s", hypertrophy: "3×30s", endurance: "3×45s" } },
      { name: { en: "Towel Pull-Up", es: "Dominada con Toalla" }, primary: "forearms", secondary: ["back", "biceps"], equipment: { en: "Pull-Up Bar, Towel", es: "Barra de Dominadas, Toalla" }, cue: { en: "Drape towel over bar, grip towel ends. Pull up.", es: "Coloca toalla sobre la barra, agarra los extremos. Sube." }, feel: { en: "Extreme grip demand, forearms limit before back", es: "Demanda extrema de agarre, antebrazos limitan antes que espalda" }, sets: { strength: "3×5", hypertrophy: "3×8", endurance: "3×10-12" } },
      { name: { en: "Behind-Back Wrist Curl", es: "Curl de Muñeca Detrás" }, primary: "forearms", secondary: [], equipment: { en: "Barbell", es: "Barra" }, cue: { en: "Hold bar behind back, curl wrists up. Fingers can open at bottom.", es: "Sostén barra detrás, sube muñecas. Dedos pueden abrirse abajo." }, feel: { en: "Forearm flexors in stretched position", es: "Flexores del antebrazo en posición estirada" }, sets: { strength: "3×10", hypertrophy: "3×15", endurance: "3×20" } },
      { name: { en: "Grip Squeeze", es: "Apretón de Agarre" }, primary: "forearms", secondary: [], equipment: { en: "Hand Gripper", es: "Gripper de Mano" }, cue: { en: "Close gripper fully, hold 2 seconds. Open slowly.", es: "Cierra el gripper completamente, sostén 2 segundos. Abre lentamente." }, feel: { en: "Crushing grip strength, forearm pump", es: "Fuerza de agarre de aplastamiento, bombeo de antebrazo" }, sets: { strength: "3×8 each", hypertrophy: "3×12 each", endurance: "3×20 each" } },
      { name: { en: "Wrist Roller", es: "Rodillo de Muñeca" }, primary: "forearms", secondary: [], equipment: { en: "Wrist Roller Device", es: "Dispositivo de Rodillo" }, cue: { en: "Arms extended, roll weight up and down using wrists only.", es: "Brazos extendidos, enrolla el peso arriba y abajo usando solo muñecas." }, feel: { en: "Constant forearm burn, flexors and extensors alternating", es: "Ardor constante en antebrazos, flexores y extensores alternando" }, sets: { strength: "3×2 rolls", hypertrophy: "3×3 rolls", endurance: "3×4 rolls" } },
      { name: { en: "Zottman Curl", es: "Curl Zottman" }, primary: "forearms", secondary: ["biceps"], equipment: { en: "Dumbbells", es: "Mancuernas" }, cue: { en: "Curl up with palms up, rotate to palms down at top, lower slowly.", es: "Sube con palmas arriba, rota a palmas abajo arriba, baja lentamente." }, feel: { en: "Biceps on way up, forearm extensors on way down", es: "Bíceps al subir, extensores del antebrazo al bajar" }, sets: { strength: "3×8", hypertrophy: "3×10-12", endurance: "3×15" } }
    ]
  },
  traps: {
    name: { en: "Traps", es: "Trapecios" },
    exercises: [
      { name: { en: "Barbell Shrug", es: "Encogimiento con Barra" }, primary: "traps", secondary: [], equipment: { en: "Barbell", es: "Barra" }, cue: { en: "Shrug shoulders straight to ears. Hold 1s. Don't roll shoulders.", es: "Encoge hombros directo a orejas. Sostén 1s. No ruedes hombros." }, feel: { en: "Upper trap squeeze, heavy overload", es: "Contracción de trapecio superior, sobrecarga pesada" }, sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15-20" } },
      { name: { en: "Dumbbell Shrug", es: "Encogimiento con Mancuernas" }, primary: "traps", secondary: [], equipment: { en: "Heavy Dumbbells", es: "Mancuernas Pesadas" }, cue: { en: "Arms at sides, shrug up and slightly back. Hold peak.", es: "Brazos a los lados, encoge arriba y ligeramente atrás. Sostén el pico." }, feel: { en: "More range than barbell, traps fully shortened at top", es: "Más rango que con barra, trapecios completamente acortados arriba" }, sets: { strength: "4×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Face Pull", es: "Jalón a la Cara" }, primary: "traps", secondary: ["rear-delts"], equipment: { en: "Cable Machine, Rope", es: "Máquina de Cables, Cuerda" }, cue: { en: "Pull to face, externally rotate, squeeze mid-traps.", es: "Jala a la cara, rota externamente, aprieta trapecios medios." }, feel: { en: "Mid/lower trap activation with rear delts", es: "Activación de trapecio medio/bajo con deltoides posteriores" }, sets: { strength: "3×10", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Rack Pull", es: "Peso Muerto desde Rack" }, primary: "traps", secondary: ["back", "glutes"], equipment: { en: "Barbell, Power Rack", es: "Barra, Rack de Potencia" }, cue: { en: "Bar at knee height, stand up shrugging at top.", es: "Barra a la altura de rodillas, párate encogiendo arriba." }, feel: { en: "Heavy trap overload at lockout, entire upper back", es: "Sobrecarga pesada de trapecios en el bloqueo, toda la espalda alta" }, sets: { strength: "5×3-5", hypertrophy: "4×6-8", endurance: "3×10" } },
      { name: { en: "Upright Row", es: "Remo al Mentón" }, primary: "traps", secondary: ["shoulders"], equipment: { en: "Barbell or Dumbbells", es: "Barra o Mancuernas" }, cue: { en: "Pull weight to chin, elbows high and leading.", es: "Jala peso al mentón, codos altos y guiando." }, feel: { en: "Traps and side delts working together on pull", es: "Trapecios y deltoides laterales trabajando juntos al jalar" }, sets: { strength: "4×6-8", hypertrophy: "4×10-12", endurance: "3×15" } },
      { name: { en: "Farmer's Walk", es: "Caminata de Granjero" }, primary: "traps", secondary: ["forearms", "core"], equipment: { en: "Heavy Dumbbells or Trap Bar", es: "Mancuernas Pesadas o Barra Trap" }, cue: { en: "Walk tall with heavy weight. Traps stabilize the entire time.", es: "Camina erguido con peso pesado. Trapecios estabilizan todo el tiempo." }, feel: { en: "Traps and upper back under constant isometric load", es: "Trapecios y espalda alta bajo carga isométrica constante" }, sets: { strength: "3×30s", hypertrophy: "3×45s", endurance: "3×60s" } },
      { name: { en: "Behind-Back Shrug (Smith)", es: "Encogimiento Trasero (Smith)" }, primary: "traps", secondary: [], equipment: { en: "Smith Machine", es: "Máquina Smith" }, cue: { en: "Stand facing away from bar, shrug up and back.", es: "Párate de espaldas a la barra, encoge arriba y atrás." }, feel: { en: "Mid-trap emphasis, different angle than front shrugs", es: "Énfasis en trapecio medio, ángulo diferente que encogimientos frontales" }, sets: { strength: "4×8", hypertrophy: "4×12", endurance: "3×15" } },
      { name: { en: "Prone Y Raise", es: "Elevación Y Boca Abajo" }, primary: "traps", secondary: ["rear-delts"], equipment: { en: "Dumbbells, Incline Bench", es: "Mancuernas, Banco Inclinado" }, cue: { en: "Lie face down on incline, raise arms in Y shape overhead.", es: "Boca abajo en inclinado, sube brazos en forma de Y sobre la cabeza." }, feel: { en: "Lower trap activation, postural muscles engaged", es: "Activación de trapecio inferior, músculos posturales activados" }, sets: { strength: "3×10", hypertrophy: "3×12-15", endurance: "3×20" } },
      { name: { en: "Cable Shrug", es: "Encogimiento con Cable" }, primary: "traps", secondary: [], equipment: { en: "Cable Machine", es: "Máquina de Cables" }, cue: { en: "Low cable handles, shrug up with constant tension.", es: "Manijas de cable bajo, encoge con tensión constante." }, feel: { en: "Constant resistance curve, traps engaged through full range", es: "Curva de resistencia constante, trapecios activados en rango completo" }, sets: { strength: "3×8", hypertrophy: "4×12-15", endurance: "3×20" } },
      { name: { en: "Overhead Shrug", es: "Encogimiento sobre Cabeza" }, primary: "traps", secondary: ["shoulders"], equipment: { en: "Barbell (overhead position)", es: "Barra (posición sobre cabeza)" }, cue: { en: "Hold bar overhead, shrug shoulders up toward ears.", es: "Sostén barra sobre cabeza, encoge hombros hacia orejas." }, feel: { en: "Upper trap in shortened position, stability challenge", es: "Trapecio superior en posición acortada, desafío de estabilidad" }, sets: { strength: "3×8", hypertrophy: "3×10-12", endurance: "3×15" } }
    ]
  }
};
