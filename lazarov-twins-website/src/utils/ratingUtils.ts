// Rating calculation utilities

export interface RatingData {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

/**
 * Calculate average rating from rating counts
 */
export function calculateAverageRating(ratings: RatingData): number {
  const totalRatings = getTotalRatings(ratings);
  
  if (totalRatings === 0) return 0;
  
  const weightedSum = 
    (ratings[1] * 1) +
    (ratings[2] * 2) +
    (ratings[3] * 3) +
    (ratings[4] * 4) +
    (ratings[5] * 5);
  
  return weightedSum / totalRatings;
}

/**
 * Get total number of people who rated
 */
export function getTotalRatings(ratings: RatingData): number {
  return ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];
}

/**
 * Format average rating for display (e.g., 4.3)
 */
export function formatAverageRating(ratings: RatingData): string {
  const average = calculateAverageRating(ratings);
  return average.toFixed(1);
}

/**
 * Get percentage for each star level (for rating breakdown display)
 */
export function getRatingPercentages(ratings: RatingData) {
  const total = getTotalRatings(ratings);
  
  if (total === 0) {
    return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }
  
  return {
    1: Math.round((ratings[1] / total) * 100),
    2: Math.round((ratings[2] / total) * 100),
    3: Math.round((ratings[3] / total) * 100),
    4: Math.round((ratings[4] / total) * 100),
    5: Math.round((ratings[5] / total) * 100),
  };
} 