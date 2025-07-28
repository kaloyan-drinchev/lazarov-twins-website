/**
 * @typedef {Object} TrainingProgram
 * @property {number} id
 * @property {string} title
 * @property {string} body
 * @property {string} image
 * @property {string} experienceLevel
 * @property {string} goal
 * @property {number} price
 * @property {Object} ratings - Rating counts by star level
 * @property {number} ratings.1 - Number of 1-star ratings
 * @property {number} ratings.2 - Number of 2-star ratings
 * @property {number} ratings.3 - Number of 3-star ratings
 * @property {number} ratings.4 - Number of 4-star ratings
 * @property {number} ratings.5 - Number of 5-star ratings
 * @property {boolean} new
 * @property {number} salesCount
 */
/** @type {TrainingProgram[]} */

const trainingPrograms = [
  {
    "id": 1,
    "title": "Beginner's Full-Body Foundation",
    "body": "Start your fitness journey here. This program focuses on compound movements like squats, push-ups, and rows to build a solid strength and muscle base across your entire body. Perfect for new gym-goers.",
    "image": "https://images.pexels.com/photos/4164844/pexels-photo-4164844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "Gain Muscle",
    "price": 29.99,
    "ratings": {
      "1": 3,
      "2": 8,
      "3": 15,
      "4": 45,
      "5": 67
    },
    "new": true,
    "salesCount": 120
  },
  {
    "id": 2,
    "title": "Intermediate Strength Focus: Powerlifting Basics",
    "body": "Ready to lift heavier? This program introduces the core principles of powerlifting. Focus on increasing your squat, bench press, and deadlift numbers with structured sets and reps designed for pure strength.",
    "image": "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Strength",
    "price": 39.99,
    "ratings": {
      "1": 1,
      "2": 2,
      "3": 8,
      "4": 22,
      "5": 89
    },
    "new": false,
    "salesCount": 80
  },
  {
    "id": 3,
    "title": "Advanced Hybrid Athlete Training",
    "body": "For those who want it all. This demanding program combines heavy lifting for strength and hypertrophy work for muscle growth, ensuring you build a powerful and aesthetic physique simultaneously.",
    "image": "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "advanced",
    "goal": "Gain Strength and Muscle",
    "price": 49.99,
    "ratings": {
      "1": 0,
      "2": 1,
      "3": 4,
      "4": 18,
      "5": 42
    },
    "new": true,
    "salesCount": 150
  },
  {
    "id": 4,
    "title": "First Steps: Bodyweight & Dumbbell Basics",
    "body": "No barbell? No problem. This plan uses dumbbells and your own bodyweight to build foundational muscle. Learn proper form on key exercises like dumbbell presses, lunges, and rows.",
    "image": "https://images.pexels.com/photos/6551139/pexels-photo-6551139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "Gain Muscle",
    "price": 29.99,
    "ratings": {
      "1": 5,
      "2": 10,
      "3": 20,
      "4": 50,
      "5": 75
    },
    "new": false,
    "salesCount": 100
  },
  {
    "id": 5,
    "title": "Intermediate Progressive Overload",
    "body": "This program is all about getting stronger week by week. You'll track your lifts and systematically add weight to the bar, forcing your muscles to adapt and grow in strength.",
    "image": "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Strength",
    "price": 39.99,
    "ratings": {
      "1": 2,
      "2": 5,
      "3": 12,
      "4": 30,
      "5": 53
    },
    "new": true,
    "salesCount": 110
  },
  {
    "id": 6,
    "title": "Advanced Powerbuilding Protocol",
    "body": "Push your limits with a blend of heavy, low-rep main lifts followed by high-volume accessory work. This is designed for the serious lifter aiming for maximum strength and muscle mass.",
    "image": "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "advanced",
    "goal": "Gain Strength and Muscle",
    "price": 49.99,
    "ratings": {
      "1": 1,
      "2": 3,
      "3": 10,
      "4": 25,
      "5": 61
    },
    "new": false,
    "salesCount": 130
  },
  {
    "id": 7,
    "title": "Beginner's Guide to Barbell Strength",
    "body": "Learn the fundamental barbell lifts in a structured, safe environment. This plan will build your confidence and raw strength, setting you up for future gains. Focus is on form and consistency.",
    "image": "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "Gain Strength",
    "price": 29.99,
    "ratings": {
      "1": 4,
      "2": 10,
      "3": 20,
      "4": 40,
      "5": 76
    },
    "new": true,
    "salesCount": 90
  },
  {
    "id": 8,
    "title": "Intermediate Hypertrophy Plan",
    "body": "Maximize muscle growth with this body-part split program. Each session targets specific muscle groups with optimal volume and intensity to stimulate hypertrophy and build a balanced physique.",
    "image": "https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Muscle",
    "price": 39.99,
    "ratings": {
      "1": 3,
      "2": 7,
      "3": 15,
      "4": 35,
      "5": 70
    },
    "new": false,
    "salesCount": 105
  },
  {
    "id": 9,
    "title": "Advanced Functional Strength & Aesthetics",
    "body": "Become as strong as you look. This program integrates functional movements like farmer's walks and sled pushes with classic bodybuilding exercises for a complete, athletic physique.",
    "image": "https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "advanced",
    "goal": "Gain Strength and Muscle",
    "price": 49.99,
    "ratings": {
      "1": 0,
      "2": 0,
      "3": 1,
      "4": 5,
      "5": 15
    },
    "new": true,
    "salesCount": 140
  },
  {
    "id": 10,
    "title": "Starting Strength: The Foundational Program",
    "body": "The classic program for beginners looking to get strong. Focus on linear progression with core barbell exercises. Your main goal is to add more weight to the bar every session.",
    "image": "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "Gain Strength",
    "price": 29.99,
    "ratings": {
      "1": 6,
      "2": 15,
      "3": 30,
      "4": 60,
      "5": 90
    },
    "new": false,
    "salesCount": 115
  },
];

export default trainingPrograms;