// Program data interfaces
export interface WeekBreakdown {
  week: number;
  title: string;
  description: string;
  focus: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  beforeImage: string;
  afterImage: string;
  timeframe: string;
  quote: string;
  results: string[];
}

// Mock data for weekly breakdown
export const getWeeklyBreakdown = (programId: string): WeekBreakdown[] => {
  // Mock week-by-week breakdown based on program type
  return [
    {
      week: 1,
      title: "Foundation Phase",
      description: "Build the foundation with proper form and movement patterns. Learn the DENSE principles.",
      focus: ["Form mastery", "Movement patterns", "Neural adaptation"]
    },
    {
      week: 2,
      title: "Strength Development",
      description: "Begin progressive overload while maintaining perfect technique. Increase training intensity.",
      focus: ["Progressive overload", "Strength gains", "Recovery protocols"]
    },
    {
      week: 3,
      title: "Volume Intensification",
      description: "Strategic volume increases to stimulate muscle growth while avoiding overtraining.",
      focus: ["Muscle hypertrophy", "Volume management", "Sleep optimization"]
    },
    {
      week: 4,
      title: "Peak Performance",
      description: "Maximize strength and muscle gains with advanced DENSE techniques and deload strategies.",
      focus: ["Peak strength", "Advanced techniques", "Deload planning"]
    }
  ];
};

// Mock data for testimonials
export const getTestimonials = (programId: string): Testimonial[] => {
  return [
    {
      id: "1",
      name: "Marcus Chen",
      age: 28,
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=200&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&h=200&fit=crop&crop=center",
      timeframe: "12 weeks",
      quote: "The DENSE method completely changed my approach to training. I gained more muscle in 12 weeks than I did in 2 years of traditional bodybuilding.",
      results: ["15 lbs muscle gained", "8% body fat reduction", "Deadlift: 315 → 405 lbs"]
    },
    {
      id: "2", 
      name: "Sarah Williams",
      age: 24,
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=200&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&h=200&fit=crop&crop=center",
      timeframe: "16 weeks",
      quote: "As a natural athlete, I struggled with overtraining. This program taught me how to train smarter, not harder.",
      results: ["12 lbs muscle gained", "6% body fat reduction", "Squat: 135 → 205 lbs"]
    },
    {
      id: "3",
      name: "David Rodriguez", 
      age: 35,
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=200&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&h=200&fit=crop&crop=center",
      timeframe: "20 weeks",
      quote: "Working full-time with two kids, I needed efficient workouts. The L Twins program gave me results in 45-minute sessions.",
      results: ["18 lbs muscle gained", "10% body fat reduction", "Bench: 185 → 275 lbs"]
    }
  ];
};