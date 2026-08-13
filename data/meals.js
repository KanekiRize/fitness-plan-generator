// Meal Database — organized by diet style and meal type
// Each meal includes macros per serving

const MEAL_DB = {
  iifym: {
    breakfast: [
      { name: { en: "Oatmeal with Protein Powder & Banana", es: "Avena con Proteína y Plátano" }, protein: 35, carbs: 55, fat: 8, calories: 430 },
      { name: { en: "Egg White Wrap with Cheese & Salsa", es: "Wrap de Clara de Huevo con Queso y Salsa" }, protein: 28, carbs: 30, fat: 12, calories: 340 },
      { name: { en: "Greek Yogurt Parfait with Granola", es: "Parfait de Yogur Griego con Granola" }, protein: 25, carbs: 40, fat: 10, calories: 350 },
      { name: { en: "Protein Pancakes with Syrup", es: "Hotcakes de Proteína con Miel" }, protein: 30, carbs: 45, fat: 8, calories: 370 },
      { name: { en: "Smoothie Bowl (Protein, Fruit, PB)", es: "Bowl de Smoothie (Proteína, Fruta, Mantequilla de Maní)" }, protein: 30, carbs: 50, fat: 15, calories: 455 }
    ],
    lunch: [
      { name: { en: "Chicken Rice Bowl with Veggies", es: "Bowl de Pollo con Arroz y Verduras" }, protein: 40, carbs: 50, fat: 12, calories: 468 },
      { name: { en: "Turkey & Avocado Sandwich", es: "Sándwich de Pavo y Aguacate" }, protein: 35, carbs: 40, fat: 18, calories: 462 },
      { name: { en: "Beef Burrito Bowl", es: "Bowl de Burrito de Res" }, protein: 38, carbs: 55, fat: 15, calories: 503 },
      { name: { en: "Tuna Salad with Crackers", es: "Ensalada de Atún con Galletas" }, protein: 35, carbs: 30, fat: 14, calories: 386 },
      { name: { en: "Pasta with Lean Ground Turkey", es: "Pasta con Pavo Molido Magro" }, protein: 38, carbs: 60, fat: 12, calories: 500 }
    ],
    dinner: [
      { name: { en: "Grilled Salmon with Sweet Potato", es: "Salmón a la Plancha con Camote" }, protein: 40, carbs: 45, fat: 18, calories: 498 },
      { name: { en: "Steak with Rice & Broccoli", es: "Bistec con Arroz y Brócoli" }, protein: 45, carbs: 50, fat: 16, calories: 524 },
      { name: { en: "Chicken Stir-Fry with Noodles", es: "Pollo Salteado con Fideos" }, protein: 38, carbs: 55, fat: 14, calories: 498 },
      { name: { en: "Lean Beef Tacos (3)", es: "Tacos de Res Magra (3)" }, protein: 35, carbs: 40, fat: 16, calories: 444 },
      { name: { en: "Shrimp & Vegetable Fried Rice", es: "Arroz Frito con Camarones y Verduras" }, protein: 32, carbs: 55, fat: 12, calories: 456 }
    ],
    snacks: [
      { name: { en: "Protein Shake & Apple", es: "Batido de Proteína y Manzana" }, protein: 25, carbs: 25, fat: 3, calories: 227 },
      { name: { en: "Rice Cakes with PB", es: "Galletas de Arroz con Mantequilla de Maní" }, protein: 8, carbs: 22, fat: 12, calories: 228 },
      { name: { en: "Trail Mix (1/4 cup)", es: "Mezcla de Frutos Secos (1/4 taza)" }, protein: 6, carbs: 15, fat: 14, calories: 210 },
      { name: { en: "Cottage Cheese & Berries", es: "Requesón con Moras" }, protein: 20, carbs: 15, fat: 5, calories: 185 },
      { name: { en: "Protein Bar", es: "Barra de Proteína" }, protein: 20, carbs: 25, fat: 8, calories: 250 }
    ]
  },
  clean: {
    breakfast: [
      { name: { en: "Egg Whites, Spinach & Whole Wheat Toast", es: "Claras de Huevo, Espinaca y Pan Integral" }, protein: 28, carbs: 30, fat: 6, calories: 286 },
      { name: { en: "Steel Cut Oats with Berries & Almonds", es: "Avena Cortada con Moras y Almendras" }, protein: 12, carbs: 45, fat: 12, calories: 332 },
      { name: { en: "Sweet Potato & Turkey Sausage Hash", es: "Hash de Camote y Salchicha de Pavo" }, protein: 25, carbs: 35, fat: 8, calories: 312 },
      { name: { en: "Quinoa Breakfast Bowl with Eggs", es: "Bowl de Desayuno con Quinoa y Huevos" }, protein: 22, carbs: 40, fat: 14, calories: 374 },
      { name: { en: "Whole Grain Cereal with Skim Milk & Fruit", es: "Cereal Integral con Leche Descremada y Fruta" }, protein: 15, carbs: 50, fat: 4, calories: 296 }
    ],
    lunch: [
      { name: { en: "Grilled Chicken Salad (Large)", es: "Ensalada Grande de Pollo a la Plancha" }, protein: 42, carbs: 20, fat: 14, calories: 374 },
      { name: { en: "Brown Rice, Black Beans & Grilled Fish", es: "Arroz Integral, Frijoles Negros y Pescado a la Plancha" }, protein: 38, carbs: 55, fat: 10, calories: 462 },
      { name: { en: "Turkey Lettuce Wraps with Hummus", es: "Wraps de Lechuga con Pavo y Hummus" }, protein: 32, carbs: 18, fat: 12, calories: 308 },
      { name: { en: "Lentil Soup with Whole Wheat Bread", es: "Sopa de Lentejas con Pan Integral" }, protein: 22, carbs: 50, fat: 8, calories: 360 },
      { name: { en: "Salmon & Quinoa with Steamed Vegetables", es: "Salmón y Quinoa con Verduras al Vapor" }, protein: 40, carbs: 40, fat: 16, calories: 464 }
    ],
    dinner: [
      { name: { en: "Baked Chicken Breast, Brown Rice & Asparagus", es: "Pechuga de Pollo al Horno, Arroz Integral y Espárragos" }, protein: 42, carbs: 45, fat: 8, calories: 424 },
      { name: { en: "Grilled Tilapia with Roasted Vegetables", es: "Tilapia a la Plancha con Verduras Asadas" }, protein: 38, carbs: 25, fat: 10, calories: 342 },
      { name: { en: "Lean Ground Turkey Stir-Fry", es: "Salteado de Pavo Molido Magro" }, protein: 35, carbs: 35, fat: 12, calories: 388 },
      { name: { en: "Baked Cod with Sweet Potato Mash", es: "Bacalao al Horno con Puré de Camote" }, protein: 35, carbs: 40, fat: 6, calories: 354 },
      { name: { en: "Grilled Shrimp Skewers with Wild Rice", es: "Brochetas de Camarones a la Plancha con Arroz Salvaje" }, protein: 35, carbs: 45, fat: 8, calories: 392 }
    ],
    snacks: [
      { name: { en: "Apple with Almond Butter (1 tbsp)", es: "Manzana con Mantequilla de Almendra (1 cda)" }, protein: 4, carbs: 22, fat: 9, calories: 185 },
      { name: { en: "Hard-Boiled Eggs (2) with Veggies", es: "Huevos Duros (2) con Verduras" }, protein: 12, carbs: 5, fat: 10, calories: 158 },
      { name: { en: "Plain Greek Yogurt with Honey", es: "Yogur Griego Natural con Miel" }, protein: 18, carbs: 20, fat: 4, calories: 188 },
      { name: { en: "Mixed Nuts (Small Handful)", es: "Nueces Mixtas (Puñado Pequeño)" }, protein: 6, carbs: 8, fat: 14, calories: 178 },
      { name: { en: "Celery & Carrot Sticks with Hummus", es: "Palitos de Apio y Zanahoria con Hummus" }, protein: 5, carbs: 15, fat: 8, calories: 148 }
    ]
  },
  keto: {
    breakfast: [
      { name: { en: "3 Whole Eggs, Bacon & Avocado", es: "3 Huevos Enteros, Tocino y Aguacate" }, protein: 28, carbs: 4, fat: 38, calories: 470 },
      { name: { en: "Keto Coffee (Butter + MCT Oil) & Eggs", es: "Café Keto (Mantequilla + Aceite MCT) y Huevos" }, protein: 14, carbs: 2, fat: 42, calories: 438 },
      { name: { en: "Cream Cheese Omelet with Spinach", es: "Omelette de Queso Crema con Espinaca" }, protein: 25, carbs: 3, fat: 32, calories: 400 },
      { name: { en: "Sausage & Cheese Egg Muffins", es: "Muffins de Huevo con Salchicha y Queso" }, protein: 28, carbs: 3, fat: 30, calories: 394 },
      { name: { en: "Smoked Salmon & Cream Cheese Roll-Ups", es: "Rollitos de Salmón Ahumado con Queso Crema" }, protein: 22, carbs: 2, fat: 28, calories: 348 }
    ],
    lunch: [
      { name: { en: "Burger Patties with Cheese (No Bun) & Side Salad", es: "Hamburguesas con Queso (Sin Pan) y Ensalada" }, protein: 40, carbs: 5, fat: 35, calories: 495 },
      { name: { en: "Chicken Thighs with Cauliflower Mash", es: "Muslos de Pollo con Puré de Coliflor" }, protein: 38, carbs: 8, fat: 28, calories: 436 },
      { name: { en: "Tuna Salad Stuffed Avocado", es: "Aguacate Relleno de Ensalada de Atún" }, protein: 30, carbs: 6, fat: 32, calories: 432 },
      { name: { en: "Caesar Salad with Grilled Chicken (No Croutons)", es: "Ensalada César con Pollo (Sin Crutones)" }, protein: 38, carbs: 6, fat: 28, calories: 428 },
      { name: { en: "Pork Belly with Sauteed Greens", es: "Panceta de Cerdo con Verduras Salteadas" }, protein: 30, carbs: 5, fat: 40, calories: 500 }
    ],
    dinner: [
      { name: { en: "Ribeye Steak with Butter & Broccoli", es: "Ribeye con Mantequilla y Brócoli" }, protein: 45, carbs: 6, fat: 38, calories: 546 },
      { name: { en: "Baked Salmon with Garlic Butter & Asparagus", es: "Salmón al Horno con Mantequilla de Ajo y Espárragos" }, protein: 40, carbs: 5, fat: 32, calories: 472 },
      { name: { en: "Chicken Alfredo (Zucchini Noodles)", es: "Pollo Alfredo (Fideos de Calabacín)" }, protein: 38, carbs: 8, fat: 30, calories: 454 },
      { name: { en: "Ground Beef Stuffed Peppers", es: "Pimientos Rellenos de Carne Molida" }, protein: 35, carbs: 10, fat: 28, calories: 428 },
      { name: { en: "Grilled Lamb Chops with Herb Butter", es: "Chuletas de Cordero con Mantequilla de Hierbas" }, protein: 38, carbs: 3, fat: 35, calories: 479 }
    ],
    snacks: [
      { name: { en: "Cheese Cubes & Pepperoni", es: "Cubos de Queso y Pepperoni" }, protein: 14, carbs: 2, fat: 20, calories: 244 },
      { name: { en: "Almonds (1 oz)", es: "Almendras (30g)" }, protein: 6, carbs: 3, fat: 14, calories: 162 },
      { name: { en: "Pork Rinds with Guacamole", es: "Chicharrones con Guacamole" }, protein: 10, carbs: 4, fat: 18, calories: 214 },
      { name: { en: "Celery with Cream Cheese", es: "Apio con Queso Crema" }, protein: 3, carbs: 3, fat: 14, calories: 146 },
      { name: { en: "Beef Jerky (Low Sugar)", es: "Cecina de Res (Baja en Azúcar)" }, protein: 15, carbs: 3, fat: 4, calories: 106 }
    ]
  }
};

const RECOVERY_DB = {
  "fat-loss": {
    sleep: { en: "7-9 hours. Sleep debt increases cortisol and hunger hormones.", es: "7-9 horas. La deuda de sueño aumenta cortisol y hormonas del hambre." },
    stretching: { en: "10 min dynamic before, 10 min static after. Focus on worked muscles.", es: "10 min dinámico antes, 10 min estático después. Enfócate en músculos trabajados." },
    rest: { en: "1-2 rest days per week. Active recovery (walking, yoga) on off days.", es: "1-2 días de descanso. Recuperación activa (caminar, yoga) en días libres." },
    hydration: { en: "Extra water — dehydration mimics hunger. Add electrolytes if needed.", es: "Agua extra — la deshidratación imita al hambre. Agrega electrolitos si necesario." },
    supplements: { en: "Protein powder, multivitamin, fish oil, caffeine (pre-workout).", es: "Proteína en polvo, multivitamínico, aceite de pescado, cafeína (pre-entreno)." }
  },
  "muscle-gain": {
    sleep: { en: "8-10 hours. Growth hormone peaks during deep sleep.", es: "8-10 horas. La hormona de crecimiento pico durante sueño profundo." },
    stretching: { en: "Foam roll before. 15 min stretch after. Promotes blood flow.", es: "Rodillo de espuma antes. 15 min estiramiento después. Promueve flujo sanguíneo." },
    rest: { en: "48-72 hours between same muscle group. Train 4-5 days max.", es: "48-72 horas entre mismo grupo. Entrena 4-5 días máximo." },
    hydration: { en: "1 gallon/day minimum. Muscle is 75% water.", es: "4 litros/día mínimo. El músculo es 75% agua." },
    supplements: { en: "Creatine 5g/day, protein powder, multivitamin.", es: "Creatina 5g/día, proteína en polvo, multivitamínico." }
  },
  "recomp": {
    sleep: { en: "8-9 hours. Both goals depend on sleep quality.", es: "8-9 horas. Ambas metas dependen de la calidad del sueño." },
    stretching: { en: "Full mobility routine 3x/week. 10 min daily minimum.", es: "Rutina de movilidad 3x/semana. 10 min diarios mínimo." },
    rest: { en: "If performance drops 2 sessions, take a deload week.", es: "Si el rendimiento baja 2 sesiones, toma semana de descarga." },
    hydration: { en: "35ml per kg bodyweight + 500ml per session.", es: "35ml por kg de peso + 500ml por sesión." },
    supplements: { en: "Creatine, protein powder, vitamin D, magnesium.", es: "Creatina, proteína, vitamina D, magnesio." }
  },
  "strength": {
    sleep: { en: "8-10 hours. CNS recovery is critical for strength.", es: "8-10 horas. Recuperación del sistema nervioso es crítica." },
    stretching: { en: "Dynamic warmup 15 min before. Mobility on off days.", es: "Calentamiento dinámico 15 min antes. Movilidad en días libres." },
    rest: { en: "72 hours between heavy sessions. Deload every 4th week.", es: "72 horas entre sesiones pesadas. Descarga cada 4ta semana." },
    hydration: { en: "Performance drops 10% with just 2% dehydration.", es: "El rendimiento baja 10% con solo 2% de deshidratación." },
    supplements: { en: "Creatine 5g/day, caffeine 30min pre-workout.", es: "Creatina 5g/día, cafeína 30min pre-entreno." }
  },
  "endurance": {
    sleep: { en: "7-9 hours. Consistency over duration.", es: "7-9 horas. Consistencia sobre duración." },
    stretching: { en: "Dynamic before, static after. Hip flexors, hamstrings, calves.", es: "Dinámico antes, estático después. Flexores, isquiotibiales, pantorrillas." },
    rest: { en: "1-2 full rest days. Active recovery walks.", es: "1-2 días descanso completo. Caminatas de recuperación." },
    hydration: { en: "Electrolytes during sessions over 60 min.", es: "Electrolitos durante sesiones de más de 60 min." },
    supplements: { en: "Electrolytes, iron (if needed), beta-alanine.", es: "Electrolitos, hierro (si necesario), beta-alanina." }
  }
};
