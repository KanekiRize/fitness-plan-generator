// Fitness Calculator — BMI, TDEE, Macros
// All formulas based on standard sports nutrition science

const Calculator = {
  // BMI = weight(kg) / height(m)²
  bmi(weightKg, heightCm) {
    const heightM = heightCm / 100;
    return +(weightKg / (heightM * heightM)).toFixed(1);
  },

  bmiCategory(bmi) {
    if (bmi < 18.5) return { en: "Underweight", es: "Bajo peso" };
    if (bmi < 25) return { en: "Normal", es: "Normal" };
    if (bmi < 30) return { en: "Overweight", es: "Sobrepeso" };
    return { en: "Obese", es: "Obesidad" };
  },

  // Mifflin-St Jeor equation for BMR
  bmr(weightKg, heightCm, age, sex) {
    if (sex === 'male') {
      return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    }
    return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  },

  // TDEE = BMR × activity multiplier
  tdee(bmr, trainingDays) {
    const multipliers = { 3: 1.375, 4: 1.55, 5: 1.725, 6: 1.9 };
    return Math.round(bmr * (multipliers[trainingDays] || 1.55));
  },

  // Caloric target based on goal
  targetCalories(tdee, goal) {
    switch (goal) {
      case 'fat-loss': return Math.round(tdee * 0.8);
      case 'muscle-gain': return Math.round(tdee * 1.15);
      case 'recomp': return tdee;
      case 'strength': return Math.round(tdee * 1.1);
      case 'endurance': return Math.round(tdee * 1.05);
      default: return tdee;
    }
  },

  // Macro split based on diet style and goal
  macros(calories, dietStyle, goal) {
    let proteinPct, carbPct, fatPct;

    if (dietStyle === 'keto') {
      proteinPct = 0.30;
      carbPct = 0.05;
      fatPct = 0.65;
    } else if (dietStyle === 'clean') {
      proteinPct = goal === 'muscle-gain' ? 0.35 : 0.30;
      carbPct = goal === 'fat-loss' ? 0.35 : 0.40;
      fatPct = 1 - proteinPct - carbPct;
    } else {
      proteinPct = goal === 'muscle-gain' ? 0.30 : 0.35;
      carbPct = goal === 'fat-loss' ? 0.30 : 0.40;
      fatPct = 1 - proteinPct - carbPct;
    }

    return {
      protein: Math.round((calories * proteinPct) / 4),
      carbs: Math.round((calories * carbPct) / 4),
      fat: Math.round((calories * fatPct) / 9),
      calories
    };
  },

  waterMl(weightKg, trainingDays) {
    const base = weightKg * 35;
    const activityBonus = trainingDays >= 5 ? 500 : 250;
    return Math.round(base + activityBonus);
  },

  proteinPerKg(goal) {
    switch (goal) {
      case 'muscle-gain': return 2.0;
      case 'strength': return 1.8;
      case 'fat-loss': return 2.2;
      case 'recomp': return 2.0;
      case 'endurance': return 1.6;
      default: return 1.8;
    }
  },

  fullProfile(client) {
    const bmrVal = this.bmr(client.weight, client.height, client.age, client.sex);
    const tdeeVal = this.tdee(bmrVal, parseInt(client.days));
    const targetCal = this.targetCalories(tdeeVal, client.goal);
    const macroSplit = this.macros(targetCal, client.diet, client.goal);
    const bmiVal = this.bmi(client.weight, client.height);

    return {
      bmi: bmiVal,
      bmiCategory: this.bmiCategory(bmiVal),
      bmr: Math.round(bmrVal),
      tdee: tdeeVal,
      targetCalories: targetCal,
      macros: macroSplit,
      waterMl: this.waterMl(client.weight, parseInt(client.days)),
      proteinPerKg: this.proteinPerKg(client.goal)
    };
  }
};
