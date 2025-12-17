
import { Exam } from './types';

export const navigateB1Exams: Exam[] = [
  {
    title: "Version A: Grammar & Vocabulary Focus",
    durationMinutes: 70,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "task1",
            title: "Task 1",
            instructions: "Choose the correct option: will, won’t, might or might not.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. If call him now, he ________ answer. It is late.", options: [{label: "might", value: "a"}, {label: "might not", value: "b"}, {label: "will", value: "c"}], correctAnswer: "b" },
              { id: "q2", prompt: "2. She ________ go to the concert. She hasn’t decided yet.", options: [{label: "might", value: "a"}, {label: "won’t", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
              { id: "q3", prompt: "3. They ________ come to visit us. They’re busy this weekend.", options: [{label: "won’t", value: "a"}, {label: "will", value: "b"}, {label: "might", value: "c"}], correctAnswer: "a" },
              { id: "q4", prompt: "4. If you don’t eat breakfast, you ________ feel tired later.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won’t", value: "c"}], correctAnswer: "a" },
              { id: "q5", prompt: "5. There ___be any milk left in the fridge. We should check.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won’t", value: "c"}], correctAnswer: "b" },
              { id: "q6", prompt: "6. I ____ help you with your homework later if I have time.", options: [{label: "might", value: "a"}, {label: "won’t", value: "b"}, {label: "might not", value: "c"}], correctAnswer: "a" },
              { id: "q7", prompt: "7. Jane ________ go to the meeting. She said she’s feeling unwell.", options: [{label: "might not", value: "a"}, {label: "will", value: "b"}, {label: "won’t", value: "c"}], correctAnswer: "c" },
              { id: "q8", prompt: "8. He _____buy a new car soon. He’s been saving up for months.", options: [{label: "won’t", value: "a"}, {label: "might not", value: "b"}, {label: "will", value: "c"}], correctAnswer: "c" },
              { id: "q9", prompt: "9. You ____see dolphins during the boat trip. It’s a rare but exciting chance!", options: [{label: "might", value: "a"}, {label: "won’t", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
              { id: "q10", prompt: "10. My brother _____ clean his room unless my mom tells him to.", options: [{label: "won’t", value: "a"}, {label: "might not", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
            ]
          },
          {
            id: "task3",
            title: "Task 3",
            instructions: "Complete the sentence with past simple or past continuous form.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1) While my mother [gap1] (cook) dinner, my sister [gap2] (come) home.", correctAnswer: ["was cooking", "came"] },
              { id: "q2", prompt: "2) They [gap1] (have) dinner when I arrived at the restaurant.", correctAnswer: ["were having"] },
            ]
          }
        ]
      },
      {
        title: "WRITING",
        tasks: [
          {
            id: "writingA",
            title: "Writing Assessment",
            instructions: "Write about social networks (80-100 words).",
            type: "TEXT_AREA",
            questions: [{ id: "essay", prompt: "Write your response here:" }]
          }
        ]
      }
    ]
  },
  {
    title: "Version B: Comprehensive Assessment",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vB_task1",
            title: "Task 1",
            instructions: "Choose: will, won’t, might or might not.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Take an umbrella. It ________ rain later, look at those dark clouds.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "b" },
              { id: "q2", prompt: "2. I promise I ________ tell anyone your secret.", options: [{label: "might not", value: "a"}, {label: "won't", value: "b"}, {label: "might", value: "c"}], correctAnswer: "b" },
              { id: "q3", prompt: "3. We ________ go to Samarkand this weekend, but we haven't booked tickets yet.", options: [{label: "will", value: "a"}, {label: "won't", value: "b"}, {label: "might", value: "c"}], correctAnswer: "c" },
              { id: "q4", prompt: "4. If you study hard, you ________ pass the IELTS exam easily.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q5", prompt: "5. Don't drink coffee now. You ________ sleep well tonight.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "c" },
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Version C: Mastery Assessment",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vC_task1",
            title: "Task 1",
            instructions: "Choose: will, won’t, might or might not.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Be careful! You ________ fall off the bike.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "b" },
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Version D: Gamer Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vD_task1",
            title: "Task 1",
            instructions: "Themes: Roblox, GTA 5, Stranger Things.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Be careful in the Upside Down! The Demogorgon ________ find you.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "b" },
              { id: "q2", prompt: "2. I promise I ________ grief your house in Brookhaven.", options: [{label: "might not", value: "a"}, {label: "won't", value: "b"}, {label: "might", value: "c"}], correctAnswer: "b" },
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Version E: The Mixed Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vE_task1",
            title: "Task 1",
            instructions: "Roblox, Standoff 2, Cars, Stranger Things. Choose the correct option.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Jump now! The lava ________ catch you if you stay there.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q2", prompt: "2. I ________ buy the AWM sniper rifle in Standoff 2 because I don't have enough gold.", options: [{label: "might not", value: "a"}, {label: "won't", value: "b"}, {label: "might", value: "c"}], correctAnswer: "b" },
              { id: "q3", prompt: "3. The new season of Stranger Things ________ be released next year, but it's not confirmed.", options: [{label: "will", value: "a"}, {label: "won't", value: "b"}, {label: "might", value: "c"}], correctAnswer: "c" },
              { id: "q4", prompt: "4. If you fix the engine, the car ________ run much faster.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q5", prompt: "5. Don't touch the red block! You ________ lose a life.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
            ]
          },
          {
            id: "vE_task3_4",
            title: "Task 3 & 4",
            instructions: "Past Simple or Past Continuous.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. While I [gap1] (defuse) the bomb in Standoff 2, the enemy [gap2] (shoot) me.", correctAnswer: ["was defusing", "shot"] },
              { id: "q2", prompt: "2. Eleven [gap1] (eat) waffles when Mike [gap2] (call) her on the radio.", correctAnswer: ["was eating", "called"] },
              { id: "q3", prompt: "3. We [gap1] (play) \"Floor is Lava\" in Roblox when my internet [gap2] (stop) working.", correctAnswer: ["were playing", "stopped"] },
              { id: "q4", prompt: "4. The mechanic [gap1] (repair) the Ferrari while the driver [gap2] (wait).", correctAnswer: ["was repairing", "waited"] },
            ]
          },
          {
            id: "vE_task5_6",
            title: "Task 5 & 6",
            instructions: "Choose the correct modal verb (must, have to, can).",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. You ________ reload your weapon before you shoot again.", options: [{label: "have to", value: "have to"}, {label: "can", value: "can"}], correctAnswer: "have to" },
              { id: "q2", prompt: "2. In the \"Floor is Lava\" game, you ________ touch the ground.", options: [{label: "mustn't", value: "mustn't"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "mustn't" },
              { id: "q3", prompt: "3. ________ Eleven use her powers to find Will?", options: [{label: "Can", value: "Can"}, {label: "Must", value: "Must"}], correctAnswer: "Can" },
              { id: "q4", prompt: "4. You ________ drive fast in the city; it is dangerous.", options: [{label: "don't have to", value: "don't have to"}, {label: "mustn't", value: "mustn't"}], correctAnswer: "mustn't" },
            ]
          },
          {
            id: "vE_task7_8",
            title: "Task 7 & 8",
            instructions: "Conditionals (First & Second).",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. If the lava [gap1] (rise), we [gap2] (climb) to the roof. (1st Cond)", correctAnswer: ["rises", "will climb"] },
              { id: "q2", prompt: "2. If I [gap1] (have) a Lamborghini, I [gap2] (drive) to Dubai. (2nd Cond)", correctAnswer: ["had", "would drive"] },
              { id: "q3", prompt: "3. I [gap1] (win) the match if my team [gap2] (help) me. (2nd Cond)", correctAnswer: ["would win", "helped"] },
            ]
          },
          {
            id: "vE_task10",
            title: "Task 10",
            instructions: "Passive Voice.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. The demogorgon [gap1] (defeat) by Eleven in the last episode.", correctAnswer: ["was defeated"] },
              { id: "q2", prompt: "2. New maps [gap1] (add) to Standoff 2 every update.", correctAnswer: ["are added"] },
              { id: "q3", prompt: "3. This car [gap1] (make) in Germany.", correctAnswer: ["is made"] },
            ]
          },
          {
            id: "vE_task16",
            title: "Task 16",
            instructions: "Make or Do.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Did you ________ a lot of kills in the last round?", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
              { id: "q2", prompt: "2. I need to ________ a decision: buy the skin or save the gold?", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
            ]
          }
        ]
      },
      {
        title: "WRITING",
        tasks: [
          {
            id: "vE_writing",
            title: "Writing Assessment",
            instructions: "Online Shopping vs. Traditional Shopping (80-100 words).",
            type: "TEXT_AREA",
            questions: [{ id: "essay", prompt: "Write your response here:" }]
          }
        ]
      }
    ]
  },
  {
    title: "Version F: The Shooter Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vF_task1",
            title: "Task 1",
            instructions: "Standoff 2 & Stranger Things Action. Choose the correct option.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. If you camp in that corner, they ________ find you easily.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q2", prompt: "2. We ________ win this round. The other team is very strong.", options: [{label: "might not", value: "a"}, {label: "will", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q3", prompt: "3. Hopper ________ survive the explosion, but nobody knows for sure.", options: [{label: "will", value: "a"}, {label: "won't", value: "b"}, {label: "might", value: "c"}], correctAnswer: "c" },
              { id: "q4", prompt: "4. I ________ play ranked mode today because my ping is too high.", options: [{label: "won't", value: "a"}, {label: "might", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
              { id: "q5", prompt: "5. Be careful! The enemy ________ be hiding behind that box.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
            ]
          },
          {
            id: "vF_task3_4",
            title: "Task 3 & 4",
            instructions: "Past Simple or Past Continuous.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. My team [gap1] (rush) B site when the grenade [gap2] (explode).", correctAnswer: ["were rushing", "exploded"] },
              { id: "q2", prompt: "2. While Steve [gap1] (fight) with the bat, Nancy [gap2] (shoot) the monster.", correctAnswer: ["was fighting", "shot"] },
              { id: "q3", prompt: "3. I [gap1] (buy) a new knife skin while I [gap2] (wait) for the match to start.", correctAnswer: ["bought", "was waiting"] },
              { id: "q4", prompt: "4. The police chief [gap1] (look) for clues when he [gap2] (find) the secret lab.", correctAnswer: ["was looking", "found"] },
            ]
          },
          {
            id: "vF_task5_6",
            title: "Task 5 & 6",
            instructions: "Choose the correct modal verb (must, have to, can).",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. You ________ plant the bomb before the time runs out.", options: [{label: "must", value: "must"}, {label: "can", value: "can"}], correctAnswer: "must" },
              { id: "q2", prompt: "2. Snipers ________ move too much, or they will miss the shot.", options: [{label: "don't have to", value: "don't have to"}, {label: "mustn't", value: "mustn't"}], correctAnswer: "mustn't" },
              { id: "q3", prompt: "3. ________ I join your clan in Standoff 2?", options: [{label: "Can", value: "Can"}, {label: "Have to", value: "Have to"}], correctAnswer: "Can" },
              { id: "q4", prompt: "4. Soldiers ________ follow orders from the commander.", options: [{label: "have to", value: "have to"}, {label: "can", value: "can"}], correctAnswer: "have to" },
            ]
          },
          {
            id: "vF_task7_8",
            title: "Task 7 & 8",
            instructions: "Conditionals (First & Second).",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. If we [gap1] (lose) this round, we [gap2] (lose) the match. (1st Cond)", correctAnswer: ["lose", "will lose"] },
              { id: "q2", prompt: "2. If I [gap1] (be) a pro player, I [gap2] (join) a famous e-sports team. (2nd Cond)", correctAnswer: ["were", "would join"] },
              { id: "q3", prompt: "3. If Max [gap1] (listen) to music, Vecna [gap2] (not/catch) her. (2nd Cond)", correctAnswer: ["listened", "wouldn't catch"] },
            ]
          },
          {
            id: "vF_task10",
            title: "Task 10",
            instructions: "Passive Voice.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. The bomb [gap1] (plant) at Site A.", correctAnswer: ["is planted"] },
              { id: "q2", prompt: "2. The Mind Flayer [gap1] (control) by Vecna.", correctAnswer: ["is controlled"] },
              { id: "q3", prompt: "3. Thousands of cases [gap1] (open) by players every day.", correctAnswer: ["are opened"] },
            ]
          },
          {
            id: "vF_task16",
            title: "Task 16",
            instructions: "Make or Do.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Don't ________ a noise, the enemy is near!", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
              { id: "q2", prompt: "2. You must ________ your best to rank up.", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "do" },
            ]
          }
        ]
      },
      {
        title: "WRITING",
        tasks: [
          {
            id: "vF_writing",
            title: "Writing Assessment",
            instructions: "Online Shopping vs. Traditional Shopping (80-100 words).",
            type: "TEXT_AREA",
            questions: [{ id: "essay", prompt: "Write your response here:" }]
          }
        ]
      }
    ]
  },
  {
    title: "Version G: The Speed & Parkour Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vG_task1",
            title: "Task 1",
            instructions: "Focus on Cars & Roblox (Lava/Obby). Choose the correct option.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. If you don't brake now, you ________ crash the car.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q2", prompt: "2. This parkour is hard. I ________ complete it on the first try.", options: [{label: "might not", value: "a"}, {label: "will", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q3", prompt: "3. The lava ________ rise higher in the next level.", options: [{label: "will", value: "a"}, {label: "won't", value: "b"}, {label: "might", value: "c"}], correctAnswer: "a" },
              { id: "q4", prompt: "4. I ________ buy a Ferrari one day if I become rich.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "c" },
              { id: "q5", prompt: "5. The mechanic ________ fix the turbo today. He is very busy.", options: [{label: "might not", value: "a"}, {label: "will", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
            ]
          },
          {
            id: "vG_task3_4",
            title: "Task 3 & 4",
            instructions: "Past Simple or Past Continuous.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. While I [gap1] (race) on the track, my tire [gap2] (explode).", correctAnswer: ["was racing", "exploded"] },
              { id: "q2", prompt: "2. My character [gap1] (jump) over the lava when he [gap2] (fall).", correctAnswer: ["was jumping", "fell"] },
              { id: "q3", prompt: "3. We [gap1] (tune) the engine while the sun [gap2] (go) down.", correctAnswer: ["were tuning", "was going"] },
              { id: "q4", prompt: "4. He [gap1] (drive) too fast when the police [gap2] (stop) him.", correctAnswer: ["was driving", "stopped"] },
            ]
          },
          {
            id: "vG_task5_6",
            title: "Task 5 & 6",
            instructions: "Choose the correct modal verb (must, have to, can).",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. You ________ touch the red lasers in the Obby.", options: [{label: "mustn't", value: "mustn't"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "mustn't" },
              { id: "q2", prompt: "2. Drivers ________ wear a seatbelt in the race car.", options: [{label: "have to", value: "have to"}, {label: "can", value: "can"}], correctAnswer: "have to" },
              { id: "q3", prompt: "3. You ________ customize your car color in the garage.", options: [{label: "can", value: "can"}, {label: "must", value: "must"}], correctAnswer: "can" },
              { id: "q4", prompt: "4. In \"Floor is Lava\", players ________ climb on furniture to survive.", options: [{label: "must", value: "must"}, {label: "can", value: "can"}], correctAnswer: "must" },
            ]
          },
          {
            id: "vG_task7_8",
            title: "Task 7 & 8",
            instructions: "Conditionals (First & Second).",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. If the car [gap1] (run) out of gas, we [gap2] (stop). (1st Cond)", correctAnswer: ["runs", "will stop"] },
              { id: "q2", prompt: "2. If I [gap1] (have) a jetpack in Roblox, I [gap2] (fly) over the lava. (2nd Cond)", correctAnswer: ["had", "would fly"] },
              { id: "q3", prompt: "3. If this car [gap1] (be) cheaper, I [gap2] (buy) it. (2nd Cond)", correctAnswer: ["were", "would buy"] },
            ]
          },
          {
            id: "vG_task10",
            title: "Task 10",
            instructions: "Passive Voice.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. The fastest lap [gap1] (drive) by Lewis Hamilton.", correctAnswer: ["was driven"] },
              { id: "q2", prompt: "2. This Roblox map [gap1] (create) by a famous developer.", correctAnswer: ["was created"] },
              { id: "q3", prompt: "3. Electric cars [gap1] (charge) at the station.", correctAnswer: ["are charged"] },
            ]
          },
          {
            id: "vG_task16",
            title: "Task 16",
            instructions: "Make or Do.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Can you ________ a U-turn here?", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
              { id: "q2", prompt: "2. I always ________ my daily quests in Roblox.", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "do" },
            ]
          }
        ]
      },
      {
        title: "WRITING",
        tasks: [
          {
            id: "vG_writing",
            title: "Writing Assessment",
            instructions: "Online Shopping vs. Traditional Shopping (80-100 words).",
            type: "TEXT_AREA",
            questions: [{ id: "essay", prompt: "Write your response here:" }]
          }
        ]
      }
    ]
  }
];
