/**
 * @typedef {Object} TrainingProgram
 * @property {number} id
 * @property {string} title
 * @property {string} body
 * @property {string} image
 * @property {string} experienceLevel
 * @property {string} goal
 * @property {number} price
 * @property {number} rating
 * @property {boolean} new
 * @property {number} salesCount
 */
/** @type {TrainingProgram[]} */

const trainingPrograms = [
  {
    "id": 1,
    "title": "Beginner's Full-Body Foundation",
    "body": "Start your fitness journey here. This program focuses on compound movements like squats, push-ups, and rows to build a solid strength and muscle base across your entire body. Perfect for new gym-goers.",
    "image": "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDR8fGd5bXxlbnwwfHx8fDE2NjI2NjM5ODg&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain muscle",
    "price": 29.99,
    "rating": 4,
    "new": true,
    "salesCount": 120
  },
  {
    "id": 2,
    "title": "Intermediate Strength Focus: Powerlifting Basics",
    "body": "Ready to lift heavier? This program introduces the core principles of powerlifting. Focus on increasing your squat, bench press, and deadlift numbers with structured sets and reps designed for pure strength.",
    "image": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDEwfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain strength",
    "price": 39.99,
    "rating": 5,
    "new": false,
    "salesCount": 80
  },
  {
    "id": 3,
    "title": "Advanced Hybrid Athlete Training",
    "body": "For those who want it all. This demanding program combines heavy lifting for strength and hypertrophy work for muscle growth, ensuring you build a powerful and aesthetic physique simultaneously.",
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDEyfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 5,
    "new": true,
    "salesCount": 150
  },
  {
    "id": 4,
    "title": "First Steps: Bodyweight & Dumbbell Basics",
    "body": "No barbell? No problem. This plan uses dumbbells and your own bodyweight to build foundational muscle. Learn proper form on key exercises like dumbbell presses, lunges, and rows.",
    "image": "https://images.unsplash.com/photo-1594882645126-14020914d58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDIyfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain muscle",
    "price": 29.99,
    "rating": 4,
    "new": false,
    "salesCount": 100
  },
  {
    "id": 5,
    "title": "Intermediate Progressive Overload",
    "body": "This program is all about getting stronger week by week. You'll track your lifts and systematically add weight to the bar, forcing your muscles to adapt and grow in strength.",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDI3fHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain strength",
    "price": 39.99,
    "rating": 5,
    "new": true,
    "salesCount": 110
  },
  {
    "id": 6,
    "title": "Advanced Powerbuilding Protocol",
    "body": "Push your limits with a blend of heavy, low-rep main lifts followed by high-volume accessory work. This is designed for the serious lifter aiming for maximum strength and muscle mass.",
    "image": "https://images.unsplash.com/photo-1581009137042-c5521686752a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDMzfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 4,
    "new": false,
    "salesCount": 130
  },
  {
    "id": 7,
    "title": "Beginner's Guide to Barbell Strength",
    "body": "Learn the fundamental barbell lifts in a structured, safe environment. This plan will build your confidence and raw strength, setting you up for future gains. Focus is on form and consistency.",
    "image": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDQyfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain strength",
    "price": 29.99,
    "rating": 3,
    "new": true,
    "salesCount": 90
  },
  {
    "id": 8,
    "title": "Intermediate Hypertrophy Plan",
    "body": "Maximize muscle growth with this body-part split program. Each session targets specific muscle groups with optimal volume and intensity to stimulate hypertrophy and build a balanced physique.",
    "image": "https://images.unsplash.com/photo-1584863265045-f9d94a4a4411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDQ0fHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain muscle",
    "price": 39.99,
    "rating": 5,
    "new": false,
    "salesCount": 105
  },
  {
    "id": 9,
    "title": "Advanced Functional Strength & Aesthetics",
    "body": "Become as strong as you look. This program integrates functional movements like farmer's walks and sled pushes with classic bodybuilding exercises for a complete, athletic physique.",
    "image": "https://images.unsplash.com/photo-1550345332-09e3ac987658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDUxfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 5,
    "new": true,
    "salesCount": 140
  },
  {
    "id": 10,
    "title": "Starting Strength: The Foundational Program",
    "body": "The classic program for beginners looking to get strong. Focus on linear progression with core barbell exercises. Your main goal is to add more weight to the bar every session.",
    "image": "https://images.unsplash.com/photo-1580261450046-c0537a385204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDU4fHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain strength",
    "price": 29.99,
    "rating": 4,
    "new": false,
    "salesCount": 115
  },
  {
    "id": 11,
    "title": "Intermediate Muscle Sculpting",
    "body": "This program focuses on isolation exercises and higher repetitions to bring out muscle definition and shape. Ideal for those who have a solid strength base and want to focus on aesthetics.",
    "image": "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDYwfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain muscle",
    "price": 39.99,
    "rating": 4,
    "new": true,
    "salesCount": 125
  },
  {
    "id": 12,
    "title": "Advanced Strength & Conditioning",
    "body": "An elite program for the dedicated athlete. Combines heavy lifting days with metabolic conditioning sessions to build a powerful engine, brute strength, and a rock-solid physique.",
    "image": "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDY1fHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 5,
    "new": false,
    "salesCount": 135
  },
  {
    "id": 13,
    "title": "Beginner's Push-Pull-Legs Split",
    "body": "A simple and effective 3-day split. Day 1 is upper body pushing (chest, shoulders), Day 2 is pulling (back, biceps), and Day 3 is legs. Great for building muscle consistently.",
    "image": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDcyfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain muscle",
    "price": 29.99,
    "rating": 4,
    "new": true,
    "salesCount": 100
  },
  {
    "id": 14,
    "title": "Intermediate 5x5 Strength Program",
    "body": "A tried-and-true method for building raw strength. Perform 5 sets of 5 reps on your main compound lifts, focusing on increasing the weight systematically. Simple, brutal, and effective.",
    "image": "https://images.unsplash.com/photo-1574680096145-f844b518abf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDc1fHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain strength",
    "price": 39.99,
    "rating": 5,
    "new": false,
    "salesCount": 110
  },
  {
    "id": 15,
    "title": "Advanced Upper/Lower Body Split",
    "body": "This 4-day split allows for high frequency and volume. Two days dedicated to upper body strength and hypertrophy, and two days for lower body power and development. A balanced approach for the advanced lifter.",
    "image": "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDc4fHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 4,
    "new": true,
    "salesCount": 120
  },
  {
    "id": 16,
    "title": "Beginner Kettlebell Strength Circuit",
    "body": "A full-body workout using just one piece of equipment. Learn kettlebell swings, goblet squats, and presses to build functional strength and endurance. Perfect for at home or in the gym.",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDgyfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain strength",
    "price": 29.99,
    "rating": 3,
    "new": false,
    "salesCount": 95
  },
  {
    "id": 17,
    "title": "Intermediate Volume Training for Mass",
    "body": "This program is all about volume. You'll use a variety of exercises and rep ranges to ensure every muscle fiber is targeted, leading to significant muscle growth over time.",
    "image": "https://images.unsplash.com/photo-1577221084712-45b044c67f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDgzfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain muscle",
    "price": 39.99,
    "rating": 4,
    "new": true,
    "salesCount": 115
  },
  {
    "id": 18,
    "title": "Advanced Daily Undulating Periodization (DUP)",
    "body": "Vary your training stimulus by focusing on different goals within the same week. One day might be for strength (heavy weight, low reps), and the next for hypertrophy (moderate weight, high reps).",
    "image": "https://images.unsplash.com/photo-1590487988256-5ed24a3e3518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDkxfHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 5,
    "new": false,
    "salesCount": 145
  },
  {
    "id": 19,
    "title": "Beginner's Guide to Machine Training",
    "body": "Learn the fundamentals of muscle building using gym machines. This program provides a safe and controlled way to target specific muscles and learn the mind-muscle connection.",
    "image": "https://images.unsplash.com/photo-1596357395217-e9a111335803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDk3fHxneW18ZW58MHx8fHwxNjYyNjYzOTg4&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain muscle",
    "price": 29.99,
    "rating": 4,
    "new": true,
    "salesCount": 105
  },
  {
    "id": 20,
    "title": "Intermediate Conjugate Method Basics",
    "body": "Borrowing from the Westside Barbell methodology, this plan rotates main exercises to avoid accommodation and continuously build strength. Focus on maximal effort and dynamic effort days.",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDEwMHx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain strength",
    "price": 39.99,
    "rating": 5,
    "new": false,
    "salesCount": 120
  },
  {
    "id": 21,
    "title": "Advanced Specialization: Arms & Shoulders",
    "body": "A focused plan to bring up lagging body parts. This program dedicates extra volume and intensity to developing impressive arms and broad shoulders, while maintaining strength elsewhere.",
    "image": "https://images.unsplash.com/photo-1598266619992-349a68e0d5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDExMnx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 4,
    "new": true,
    "salesCount": 130
  },
  {
    "id": 22,
    "title": "Beginner Core Strength & Stability",
    "body": "A strong core is the foundation of all movement. This program goes beyond crunches, incorporating planks, bird-dogs, and dead bugs to build true core strength and stability.",
    "image": "https://images.unsplash.com/photo-1596722362372-75d3122da759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDExNnx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain strength",
    "price": 29.99,
    "rating": 3,
    "new": false,
    "salesCount": 90
  },
  {
    "id": 23,
    "title": "Intermediate Aesthetic Bodybuilding",
    "body": "Focus on symmetry, proportion, and definition. This plan uses a wide range of exercises, including cables and machines, to sculpt a classic, aesthetic physique.",
    "image": "https://images.unsplash.com/photo-1580086319619-3ed498161c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDEyNnx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain muscle",
    "price": 39.99,
    "rating": 5,
    "new": true,
    "salesCount": 110
  },
  {
    "id": 24,
    "title": "Advanced High-Intensity Training (HIT)",
    "body": "Brief, infrequent, and intense. This program challenges you to push one set to absolute failure on each exercise. A time-efficient plan for those who can handle the intensity.",
    "image": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDEzMHx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 5,
    "new": false,
    "salesCount": 150
  },
  {
    "id": 25,
    "title": "Beginner Full Body Hypertrophy",
    "body": "Train your full body three times a week with a focus on moderate reps (8-12) to stimulate muscle growth. An excellent way for beginners to pack on size effectively.",
    "image": "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDE0NHx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain muscle",
    "price": 29.99,
    "rating": 4,
    "new": true,
    "salesCount": 100
  },
  {
    "id": 26,
    "title": "Intermediate Strongman Fundamentals",
    "body": "Incorporate strongman-style training to build brute, real-world strength. Learn to perform farmer's walks, tire flips, and overhead presses for a new kind of strength challenge.",
    "image": "https://images.unsplash.com/photo-1594737625723-a5121843259f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDE1Mnx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain strength",
    "price": 39.99,
    "rating": 4,
    "new": false,
    "salesCount": 115
  },
  {
    "id": 27,
    "title": "Advanced Body Part Split for Mass & Power",
    "body": "A classic 'bro-split' with a focus on both strength and size. Each day is dedicated to a major muscle group (e.g., Chest Day, Back Day) allowing for maximum focus and recovery.",
    "image": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDE1N3x8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 5,
    "new": true,
    "salesCount": 125
  },
  {
    "id": 28,
    "title": "Beginner Functional Fitness",
    "body": "Improve your strength for everyday life. This program focuses on movements that mimic real-world activities like lifting, carrying, and pushing to make you stronger outside the gym.",
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDE2MXx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "beginner",
    "goal": "gain strength",
    "price": 29.99,
    "rating": 4,
    "new": false,
    "salesCount": 95
  },
  {
    "id": 29,
    "title": "Intermediate German Volume Training (GVT)",
    "body": "A high-volume plan designed to shock your muscles into growth. The core principle is performing 10 sets of 10 reps on a major exercise for a specific body part. Intense, but highly effective for mass.",
    "image": "https://images.unsplash.com/photo-1623874514711-0f321325f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDE2NXx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "intermediate",
    "goal": "gain muscle",
    "price": 39.99,
    "rating": 5,
    "new": true,
    "salesCount": 110
  },
  {
    "id": 30,
    "title": "Advanced Concurrent Training Model",
    "body": "Train for multiple qualities at once. This program is structured to allow for improvements in maximal strength, hypertrophy, and muscular endurance within the same training block.",
    "image": "https://images.unsplash.com/photo-1546817372-62a92e24633b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8c2VhcmNofDE3Mnx8Z3ltfGVufDB8fHx8MTY2MjY2Mzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "experienceLevel": "advanced",
    "goal": "both",
    "price": 49.99,
    "rating": 4,
    "new": false,
    "salesCount": 135
  }
];


export default trainingPrograms;