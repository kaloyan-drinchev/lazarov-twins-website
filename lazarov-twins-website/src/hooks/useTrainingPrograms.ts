import { useState, useEffect } from 'react';
import type { TrainingProgram } from '../types';

interface UseTrainingProgramsReturn {
  programs: TrainingProgram[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useTrainingPrograms = (): UseTrainingProgramsReturn => {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:3001/api/programs');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch programs: ${response.status}`);
      }
      
      const data = await response.json();
      setPrograms(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch programs';
      setError(errorMessage);
      console.error('Error fetching training programs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return {
    programs,
    loading,
    error,
    refetch: fetchPrograms
  };
};

// Hook for fetching a single program by ID
export const useTrainingProgram = (id: string | number): {
  program: TrainingProgram | null;
  loading: boolean;
  error: string | null;
} => {
  const [program, setProgram] = useState<TrainingProgram | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`http://localhost:3001/api/programs/${id}`);
        
        if (!response.ok) {
          throw new Error(`Program not found: ${response.status}`);
        }
        
        const data = await response.json();
        setProgram(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch program';
        setError(errorMessage);
        console.error('Error fetching training program:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProgram();
    }
  }, [id]);

  return { program, loading, error };
}; 