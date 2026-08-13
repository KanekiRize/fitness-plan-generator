// Plan Generator — builds workout splits and meal plans from client profile

const PlanGenerator = {
  splits: {
    3: { name: { en: "Full Body (3 Days)", es: "Cuerpo Completo (3 Días)" },
      days: [
        { name: { en: "Day 1 - Full Body A", es: "Día 1 - Cuerpo Completo A" }, groups: ["chest", "back", "quads", "shoulders", "biceps", "core"] },
        { name: { en: "Day 2 - Full Body B", es: "Día 2 - Cuerpo Completo B" }, groups: ["back", "chest", "hamstrings", "triceps", "glutes", "core"] },
        { name: { en: "Day 3 - Full Body C", es: "Día 3 - Cuerpo Completo C" }, groups: ["shoulders", "quads", "back", "biceps", "calves", "core"] }
      ]},
    4: { name: { en: "Upper/Lower (4 Days)", es: "Superior/Inferior (4 Días)" },
      days: [
        { name: { en: "Day 1 - Upper", es: "Día 1 - Superior" }, groups: ["chest", "back", "shoulders", "biceps", "triceps"] },
        { name: { en: "Day 2 - Lower", es: "Día 2 - Inferior" }, groups: ["quads", "hamstrings", "glutes", "calves", "core"] },
        { name: { en: "Day 3 - Upper", es: "Día 3 - Superior" }, groups: ["back", "chest", "shoulders", "triceps", "biceps"] },
        { name: { en: "Day 4 - Lower", es: "Día 4 - Inferior" }, groups: ["hamstrings", "quads", "glutes", "calves", "core"] }
      ]},
    5: { name: { en: "PPL + Upper/Lower", es: "Empuje/Jalón/Piernas + Superior/Inferior" },
      days: [
        { name: { en: "Day 1 - Push", es: "Día 1 - Empuje" }, groups: ["chest", "shoulders", "triceps"] },
        { name: { en: "Day 2 - Pull", es: "Día 2 - Jalón" }, groups: ["back", "biceps", "forearms"] },
        { name: { en: "Day 3 - Legs", es: "Día 3 - Piernas" }, groups: ["quads", "hamstrings", "glutes", "calves"] },
        { name: { en: "Day 4 - Upper", es: "Día 4 - Superior" }, groups: ["chest", "back", "shoulders", "biceps", "triceps"] },
        { name: { en: "Day 5 - Lower + Core", es: "Día 5 - Inferior + Core" }, groups: ["quads", "hamstrings", "glutes", "calves", "core"] }
      ]},
    6: { name: { en: "Push/Pull/Legs ×2", es: "Empuje/Jalón/Piernas ×2" },
      days: [
        { name: { en: "Day 1 - Push", es: "Día 1 - Empuje" }, groups: ["chest", "shoulders", "triceps"] },
        { name: { en: "Day 2 - Pull", es: "Día 2 - Jalón" }, groups: ["back", "biceps", "traps"] },
        { name: { en: "Day 3 - Legs", es: "Día 3 - Piernas" }, groups: ["quads", "hamstrings", "glutes", "calves"] },
        { name: { en: "Day 4 - Push", es: "Día 4 - Empuje" }, groups: ["shoulders", "chest", "triceps"] },
        { name: { en: "Day 5 - Pull", es: "Día 5 - Jalón" }, groups: ["back", "biceps", "forearms"] },
        { name: { en: "Day 6 - Legs + Core", es: "Día 6 - Piernas + Core" }, groups: ["hamstrings", "quads", "glutes", "calves", "core"] }
      ]}
  },

  buildDay(groups, goal, level) {
    const exercises = [];
    const setStyle = goal === 'strength' ? 'strength' :
                     goal === 'endurance' ? 'endurance' : 'hypertrophy';
    const perGroup = level === 'beginner' ? 1 : 2;

    groups.forEach(group => {
      const groupData = EXERCISE_DB[group];
      if (!groupData) return;
      const pool = [...groupData.exercises];
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      pool.slice(0, perGroup).forEach(ex => {
        exercises.push({ name: ex.name, sets: ex.sets[setStyle], equipment: ex.equipment, cue: ex.cue, feel: ex.feel });
      });
    });
    return exercises;
  },

  buildMealPlan(dietStyle, macros) {
    const meals = MEAL_DB[dietStyle];
    if (!meals) return [];

    const targetCal = macros.calories;
    // Allocate: breakfast 25%, lunch 30%, dinner 30%, snacks 15%
    const targets = {
      breakfast: targetCal * 0.25,
      lunch: targetCal * 0.30,
      dinner: targetCal * 0.30,
      snack: targetCal * 0.075
    };

    // Pick closest meal to target for each slot
    const pickClosest = (arr, target) => {
      return arr.reduce((best, meal) =>
        Math.abs(meal.calories - target) < Math.abs(best.calories - target) ? meal : best
      );
    };

    const breakfast = pickClosest(meals.breakfast, targets.breakfast);
    const lunch = pickClosest(meals.lunch, targets.lunch);
    const dinner = pickClosest(meals.dinner, targets.dinner);
    const snack1 = pickClosest(meals.snacks, targets.snack);
    // For snack2, pick different from snack1
    const snack2Options = meals.snacks.filter(s => s.name.en !== snack1.name.en);
    const snack2 = snack2Options.length > 0 ? pickClosest(snack2Options, targets.snack) : snack1;

    const totalCal = breakfast.calories + lunch.calories + dinner.calories + snack1.calories + snack2.calories;

    return {
      breakfast, lunch, dinner, snack1, snack2,
      totalCalories: totalCal,
      targetCalories: targetCal,
      accuracy: Math.round((totalCal / targetCal) * 100),
      totalTarget: macros
    };
  },

  buildRecovery(goal) {
    return RECOVERY_DB[goal] || RECOVERY_DB['recomp'];
  },

  generateFullPlan(client) {
    const profile = Calculator.fullProfile(client);
    const split = this.splits[parseInt(client.days)];
    const workout = {
      splitName: split.name,
      days: split.days.map(day => ({
        name: day.name,
        exercises: this.buildDay(day.groups, client.goal, client.level)
      }))
    };
    const mealPlan = this.buildMealPlan(client.diet, profile.macros);
    const recovery = this.buildRecovery(client.goal);
    return { profile, workout, mealPlan, recovery, client };
  },

  formatAsText(plan, lang = 'es') {
    const l = lang;
    let text = '';
    text += `═══════════════════════════════════\n`;
    text += `  PLAN DE FITNESS / FITNESS PLAN\n`;
    text += `  ${plan.client.name}\n`;
    text += `═══════════════════════════════════\n\n`;
    text += `📊 PERFIL / PROFILE\n─────────────────────\n`;
    text += `BMI: ${plan.profile.bmi} (${plan.profile.bmiCategory[l]})\n`;
    text += `${l==='es'?'Calorías':'Calories'}: ${plan.profile.targetCalories} kcal\n`;
    text += `${l==='es'?'Proteína':'Protein'}: ${plan.profile.macros.protein}g\n`;
    text += `${l==='es'?'Carbohidratos':'Carbs'}: ${plan.profile.macros.carbs}g\n`;
    text += `${l==='es'?'Grasa':'Fat'}: ${plan.profile.macros.fat}g\n`;
    text += `${l==='es'?'Agua':'Water'}: ${plan.profile.waterMl}ml/${l==='es'?'día':'day'}\n\n`;
    text += `🏋️ ENTRENAMIENTO / WORKOUT\n─────────────────────\n`;
    text += `${plan.workout.splitName[l]}\n\n`;
    plan.workout.days.forEach(day => {
      text += `  ${day.name[l]}\n`;
      day.exercises.forEach(ex => {
        text += `    • ${ex.name[l]} — ${ex.sets}\n`;
      });
      text += '\n';
    });
    text += `🥗 ALIMENTACIÓN / MEALS\n─────────────────────\n`;
    const mp = plan.mealPlan;
    text += `  ${l==='es'?'Desayuno':'Breakfast'}: ${mp.breakfast.name[l]} (${mp.breakfast.calories} kcal)\n`;
    text += `  ${l==='es'?'Almuerzo':'Lunch'}: ${mp.lunch.name[l]} (${mp.lunch.calories} kcal)\n`;
    text += `  ${l==='es'?'Cena':'Dinner'}: ${mp.dinner.name[l]} (${mp.dinner.calories} kcal)\n`;
    text += `  Snack 1: ${mp.snack1.name[l]} (${mp.snack1.calories} kcal)\n`;
    text += `  Snack 2: ${mp.snack2.name[l]} (${mp.snack2.calories} kcal)\n\n`;
    text += `🧘 RECUPERACIÓN / RECOVERY\n─────────────────────\n`;
    const r = plan.recovery;
    text += `  ${l==='es'?'Sueño':'Sleep'}: ${r.sleep[l]}\n`;
    text += `  ${l==='es'?'Estiramiento':'Stretching'}: ${r.stretching[l]}\n`;
    text += `  ${l==='es'?'Descanso':'Rest'}: ${r.rest[l]}\n`;
    text += `  ${l==='es'?'Hidratación':'Hydration'}: ${r.hydration[l]}\n`;
    text += `  ${l==='es'?'Suplementos':'Supplements'}: ${r.supplements[l]}\n`;
    return text;
  }
};
