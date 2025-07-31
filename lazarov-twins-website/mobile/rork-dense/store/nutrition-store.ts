import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DailyLog, FoodEntry, NutritionGoals, NutritionPreferences, CustomMeal } from '@/types/nutrition';
import { COMMON_FOODS, calculateNutrition } from '@/mocks/foods';
import { generateId } from '@/utils/helpers';

interface NutritionState {
  dailyLogs: { [date: string]: DailyLog };
  nutritionGoals: NutritionGoals;
  nutritionPreferences: NutritionPreferences;
  recentFoods: string[]; // IDs of recently added foods
  customMeals: CustomMeal[]; // Custom meals created by the user
  
  // Actions
  addFoodEntry: (date: string, entry: FoodEntry) => void;
  removeFoodEntry: (date: string, entryId: string) => void;
  updateNutritionGoals: (goals: Partial<NutritionGoals>) => void;
  updateNutritionPreferences: (prefs: Partial<NutritionPreferences>) => void;
  clearDailyLog: (date: string) => void;
  
  // Custom meals actions
  addCustomMeal: (meal: CustomMeal) => void;
  updateCustomMeal: (mealId: string, updates: Partial<CustomMeal>) => void;
  removeCustomMeal: (mealId: string) => void;
  addCustomMealToLog: (date: string, mealId: string) => void;
}

// Helper to calculate default calorie goal based on user profile
const calculateDefaultCalorieGoal = (weight: number, height: number, age: number, goal: string): number => {
  // Basic BMR calculation (Harris-Benedict equation)
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  
  // Adjust based on activity level (moderate activity)
  const tdee = bmr * 1.55;
  
  // Adjust based on goal
  if (goal === 'bulking') return Math.round(tdee * 1.1); // 10% surplus
  if (goal === 'cutting') return Math.round(tdee * 0.8); // 20% deficit
  return Math.round(tdee); // maintenance
};

// Helper to get today's date in YYYY-MM-DD format
const getTodayString = (): string => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

// Helper to create an empty daily log
const createEmptyDailyLog = (date: string, calorieGoal: number): DailyLog => ({
  date,
  entries: [],
  totalNutrition: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  },
  calorieGoal,
});

// Helper to calculate total nutrition from entries
const calculateTotalNutrition = (entries: FoodEntry[]) => {
  return entries.reduce(
    (total, entry) => ({
      calories: total.calories + entry.nutrition.calories,
      protein: parseFloat((total.protein + entry.nutrition.protein).toFixed(1)),
      carbs: parseFloat((total.carbs + entry.nutrition.carbs).toFixed(1)),
      fat: parseFloat((total.fat + entry.nutrition.fat).toFixed(1)),
      fiber: entry.nutrition.fiber 
        ? parseFloat(((total.fiber || 0) + (entry.nutrition.fiber || 0)).toFixed(1))
        : total.fiber,
      sugar: entry.nutrition.sugar
        ? parseFloat(((total.sugar || 0) + (entry.nutrition.sugar || 0)).toFixed(1))
        : total.sugar,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0 }
  );
};

export const useNutritionStore = create<NutritionState>()(
  persist(
    (set, get) => ({
      dailyLogs: {},
      nutritionGoals: {
        calories: 2500, // Default value, will be updated based on user profile
        protein: 180,
        carbs: 250,
        fat: 80,
      },
      nutritionPreferences: {
        dietType: 'standard',
        allergies: [],
        excludedFoods: [],
        favoriteItems: [],
      },
      recentFoods: [],
      customMeals: [],
      
      addFoodEntry: (date, entry) => {
        const { dailyLogs, nutritionGoals } = get();
        
        // Create or get the daily log for the date
        const dailyLog = dailyLogs[date] || createEmptyDailyLog(date, nutritionGoals.calories);
        
        // Add the entry
        const updatedEntries = [...dailyLog.entries, entry];
        
        // Calculate new total nutrition
        const totalNutrition = calculateTotalNutrition(updatedEntries);
        
        // Update the daily log
        const updatedDailyLog = {
          ...dailyLog,
          entries: updatedEntries,
          totalNutrition,
        };
        
        // Update recent foods
        const currentRecentFoods = get().recentFoods;
        const updatedRecentFoods = [
          entry.foodId,
          ...currentRecentFoods.filter(id => id !== entry.foodId)
        ].slice(0, 10); // Keep only the 10 most recent
        
        // Update state
        set({
          dailyLogs: {
            ...dailyLogs,
            [date]: updatedDailyLog,
          },
          recentFoods: updatedRecentFoods,
        });
      },
      
      removeFoodEntry: (date, entryId) => {
        const { dailyLogs } = get();
        const dailyLog = dailyLogs[date];
        
        if (!dailyLog) return;
        
        // Remove the entry
        const updatedEntries = dailyLog.entries.filter(entry => entry.id !== entryId);
        
        // Calculate new total nutrition
        const totalNutrition = calculateTotalNutrition(updatedEntries);
        
        // Update the daily log
        const updatedDailyLog = {
          ...dailyLog,
          entries: updatedEntries,
          totalNutrition,
        };
        
        // Update state
        set({
          dailyLogs: {
            ...dailyLogs,
            [date]: updatedDailyLog,
          },
        });
      },
      
      updateNutritionGoals: (goals) => {
        set(state => ({
          nutritionGoals: {
            ...state.nutritionGoals,
            ...goals,
          },
        }));
      },
      
      updateNutritionPreferences: (prefs) => {
        set(state => ({
          nutritionPreferences: {
            ...state.nutritionPreferences,
            ...prefs,
          },
        }));
      },
      
      clearDailyLog: (date) => {
        const { dailyLogs, nutritionGoals } = get();
        
        if (!dailyLogs[date]) return;
        
        // Create an empty log
        const emptyLog = createEmptyDailyLog(date, nutritionGoals.calories);
        
        // Update state
        set({
          dailyLogs: {
            ...dailyLogs,
            [date]: emptyLog,
          },
        });
      },
      
      // Custom meals actions
      addCustomMeal: (meal) => {
        set(state => ({
          customMeals: [...state.customMeals, meal],
        }));
      },
      
      updateCustomMeal: (mealId, updates) => {
        set(state => {
          const mealIndex = state.customMeals.findIndex(meal => meal.id === mealId);
          
          if (mealIndex === -1) return state;
          
          const updatedMeals = [...state.customMeals];
          updatedMeals[mealIndex] = {
            ...updatedMeals[mealIndex],
            ...updates,
            updatedAt: new Date().toISOString(),
          };
          
          return {
            customMeals: updatedMeals,
          };
        });
      },
      
      removeCustomMeal: (mealId) => {
        set(state => ({
          customMeals: state.customMeals.filter(meal => meal.id !== mealId),
        }));
      },
      
      addCustomMealToLog: (date, mealId) => {
        const { customMeals } = get();
        const meal = customMeals.find(m => m.id === mealId);
        
        if (!meal) return;
        
        // Create entries for each food in the custom meal
        const foodEntries: FoodEntry[] = [];
        
        meal.foods.forEach(({ foodId, amount }) => {
          const food = COMMON_FOODS.find(f => f.id === foodId);
          
          if (!food) return;
          
          const entry: FoodEntry = {
            id: generateId(),
            foodId,
            name: food.name,
            amount,
            unit: food.servingUnit,
            mealType: meal.mealType,
            timestamp: new Date().toISOString(),
            nutrition: calculateNutrition(food, amount),
          };
          
          foodEntries.push(entry);
        });
        
        // Add each entry to the log
        foodEntries.forEach(entry => {
          get().addFoodEntry(date, entry);
        });
      },
    }),
    {
      name: 'nutrition-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

// Initialize nutrition goals based on user profile
export const initializeNutritionGoals = () => {
  const { updateNutritionGoals } = useNutritionStore.getState();
  const userProfile = require('@/store/workout-store').useWorkoutStore.getState().userProfile;
  
  if (userProfile) {
    const calorieGoal = calculateDefaultCalorieGoal(
      userProfile.weight,
      userProfile.height,
      userProfile.age,
      userProfile.goal
    );
    
    // Set protein based on body weight (1.8g per kg for bulking, 2.2g for cutting)
    const proteinGoal = Math.round(
      userProfile.weight * (userProfile.goal === 'cutting' ? 2.2 : 1.8)
    );
    
    // Set fat at 25-30% of calories
    const fatGoal = Math.round((calorieGoal * 0.3) / 9);
    
    // Remaining calories from carbs
    const carbGoal = Math.round(
      (calorieGoal - (proteinGoal * 4) - (fatGoal * 9)) / 4
    );
    
    updateNutritionGoals({
      calories: calorieGoal,
      protein: proteinGoal,
      carbs: carbGoal,
      fat: fatGoal,
    });
  }
};