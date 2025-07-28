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
  {
    "id": 11,
    "title": "Intermediate Muscle Sculpting",
    "body": "This program focuses on isolation exercises and higher repetitions to bring out muscle definition and shape. Ideal for those who have a solid strength base and want to focus on aesthetics.",
    "image": "https://images.pexels.com/photos/3766218/pexels-photo-3766218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Muscle",
    "price": 39.99,
    "ratings": {
      "1": 4,
      "2": 10,
      "3": 20,
      "4": 40,
      "5": 70
    },
    "new": true,
    "salesCount": 125
  },
  {
    "id": 12,
    "title": "Advanced Strength & Conditioning",
    "body": "An elite program for the dedicated athlete. Combines heavy lifting days with metabolic conditioning sessions to build a powerful engine, brute strength, and a rock-solid physique.",
    "image": "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 135
  },
  {
    "id": 13,
    "title": "Beginner's Push-Pull-Legs Split",
    "body": "A simple and effective 3-day split. Day 1 is upper body pushing (chest, shoulders), Day 2 is pulling (back, biceps), and Day 3 is legs. Great for building muscle consistently.",
    "image": "https://images.pexels.com/photos/4761793/pexels-photo-4761793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "new": true,
    "salesCount": 100
  },
  {
    "id": 14,
    "title": "Intermediate 5x5 Strength Program",
    "body": "A tried-and-true method for building raw strength. Perform 5 sets of 5 reps on your main compound lifts, focusing on increasing the weight systematically. Simple, brutal, and effective.",
    "image": "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Strength",
    "price": 39.99,
    "ratings": {
      "1": 3,
      "2": 7,
      "3": 15,
      "4": 35,
      "5": 70
    },
    "new": false,
    "salesCount": 110
  },
  {
    "id": 15,
    "title": "Advanced Upper/Lower Body Split",
    "body": "This 4-day split allows for high frequency and volume. Two days dedicated to upper body strength and hypertrophy, and two days for lower body power and development. A balanced approach for the advanced lifter.",
    "image": "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 120
  },
  {
    "id": 16,
    "title": "Beginner Kettlebell Strength Circuit",
    "body": "A full-body workout using just one piece of equipment. Learn kettlebell swings, goblet squats, and presses to build functional strength and endurance. Perfect for at home or in the gym.",
    "image": "https://images.pexels.com/photos/7674483/pexels-photo-7674483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 95
  },
  {
    "id": 17,
    "title": "Intermediate Volume Training for Mass",
    "body": "This program is all about volume. You'll use a variety of exercises and rep ranges to ensure every muscle fiber is targeted, leading to significant muscle growth over time.",
    "image": "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Muscle",
    "price": 39.99,
    "ratings": {
      "1": 4,
      "2": 10,
      "3": 20,
      "4": 40,
      "5": 70
    },
    "new": true,
    "salesCount": 115
  },
  {
    "id": 18,
    "title": "Advanced Daily Undulating Periodization (DUP)",
    "body": "Vary your training stimulus by focusing on different goals within the same week. One day might be for strength (heavy weight, low reps), and the next for hypertrophy (moderate weight, high reps).",
    "image": "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 145
  },
  {
    "id": 19,
    "title": "Beginner's Guide to Machine Training",
    "body": "Learn the fundamentals of muscle building using gym machines. This program provides a safe and controlled way to target specific muscles and learn the mind-muscle connection.",
    "image": "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "Gain Muscle",
    "price": 29.99,
    "ratings": {
      "1": 6,
      "2": 15,
      "3": 30,
      "4": 60,
      "5": 90
    },
    "new": true,
    "salesCount": 105
  },
  {
    "id": 20,
    "title": "Intermediate Conjugate Method Basics",
    "body": "Borrowing from the Westside Barbell methodology, this plan rotates main exercises to avoid accommodation and continuously build strength. Focus on maximal effort and dynamic effort days.",
    "image": "https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Strength",
    "price": 39.99,
    "ratings": {
      "1": 4,
      "2": 10,
      "3": 20,
      "4": 40,
      "5": 70
    },
    "new": false,
    "salesCount": 120
  },
  {
    "id": 21,
    "title": "Advanced Specialization: Arms & Shoulders",
    "body": "A focused plan to bring up lagging body parts. This program dedicates extra volume and intensity to developing impressive arms and broad shoulders, while maintaining strength elsewhere.",
    "image": "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 130
  },
  {
    "id": 22,
    "title": "Beginner Core Strength & Stability",
    "body": "A strong core is the foundation of all movement. This program goes beyond crunches, incorporating planks, bird-dogs, and dead bugs to build true core strength and stability.",
    "image": "https://images.pexels.com/photos/3757374/pexels-photo-3757374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 90
  },
  {
    "id": 23,
    "title": "Intermediate Aesthetic Bodybuilding",
    "body": "Focus on symmetry, proportion, and definition. This plan uses a wide range of exercises, including cables and machines, to sculpt a classic, aesthetic physique.",
    "image": "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Muscle",
    "price": 39.99,
    "ratings": {
      "1": 4,
      "2": 10,
      "3": 20,
      "4": 40,
      "5": 70
    },
    "new": true,
    "salesCount": 110
  },
  {
    "id": 24,
    "title": "Advanced High-Intensity Training (HIT)",
    "body": "Brief, infrequent, and intense. This program challenges you to push one set to absolute failure on each exercise. A time-efficient plan for those who can handle the intensity.",
    "image": "https://images.pexels.com/photos/4164765/pexels-photo-4164765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 150
  },
  {
    "id": 25,
    "title": "Beginner Full Body Hypertrophy",
    "body": "Train your full body three times a week with a focus on moderate reps (8-12) to stimulate muscle growth. An excellent way for beginners to pack on size effectively.",
    "image": "https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "beginner",
    "goal": "Gain Muscle",
    "price": 29.99,
    "ratings": {
      "1": 6,
      "2": 15,
      "3": 30,
      "4": 60,
      "5": 90
    },
    "new": true,
    "salesCount": 100
  },
  {
    "id": 26,
    "title": "Intermediate Strongman Fundamentals",
    "body": "Incorporate strongman-style training to build brute, real-world strength. Learn to perform farmer's walks, tire flips, and overhead presses for a new kind of strength challenge.",
    "image": "https://images.pexels.com/photos/6550853/pexels-photo-6550853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Strength",
    "price": 39.99,
    "ratings": {
      "1": 4,
      "2": 10,
      "3": 20,
      "4": 40,
      "5": 70
    },
    "new": false,
    "salesCount": 115
  },
  {
    "id": 27,
    "title": "Advanced Body Part Split for Mass & Power",
    "body": "A classic 'bro-split' with a focus on both strength and size. Each day is dedicated to a major muscle group (e.g., Chest Day, Back Day) allowing for maximum focus and recovery.",
    "image": "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 125
  },
  {
    "id": 28,
    "title": "Beginner Functional Fitness",
    "body": "Improve your strength for everyday life. This program focuses on movements that mimic real-world activities like lifting, carrying, and pushing to make you stronger outside the gym.",
    "image": "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 95
  },
  {
    "id": 29,
    "title": "Intermediate German Volume Training (GVT)",
    "body": "A high-volume plan designed to shock your muscles into growth. The core principle is performing 10 sets of 10 reps on a major exercise for a specific body part. Intense, but highly effective for mass.",
    "image": "https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "experienceLevel": "intermediate",
    "goal": "Gain Muscle",
    "price": 39.99,
    "ratings": {
      "1": 4,
      "2": 10,
      "3": 20,
      "4": 40,
      "5": 70
    },
    "new": true,
    "salesCount": 110
  },
  {
    "id": 30,
    "title": "Advanced Concurrent Training Model",
    "body": "Train for multiple qualities at once. This program is structured to allow for improvements in maximal strength, hypertrophy, and muscular endurance within the same training block.",
    "image": "https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    "salesCount": 135
  }
];

export default trainingPrograms;