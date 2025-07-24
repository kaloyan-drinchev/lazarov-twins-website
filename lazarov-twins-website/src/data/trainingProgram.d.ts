interface TrainingProgram {
    id: number;
    title: string;
    body: string;
    image: string;
    experienceLevel: string;
    goal: string;
    price: number;
    rating: number;
    new: boolean;
    salesCount: number;
  }
  
  const trainingPrograms: TrainingProgram[];
  export default trainingPrograms;