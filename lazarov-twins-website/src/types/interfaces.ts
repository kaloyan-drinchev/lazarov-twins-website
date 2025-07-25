// Centralized interfaces for the L-Twins Fitness website

export interface TrainingProgram {
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

export interface ProgramCardProps {
  program: TrainingProgram;
  className?: string;
} 