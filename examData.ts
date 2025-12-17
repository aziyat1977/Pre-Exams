
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
            id: "vE_task10",
            title: "Task 10",
            instructions: "Passive Voice.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. The demogorgon [gap1] (defeat) by Eleven in the last episode.", correctAnswer: ["was defeated"] },
              { id: "q2", prompt: "2. New maps [gap1] (add) to Standoff 2 every update.", correctAnswer: ["are added"] },
              { id: "q3", prompt: "3. This car [gap1] (make) in Germany.", correctAnswer: ["is made"] },
            ]
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
          }
        ]
      }
    ]
  },
  {
    title: "Version H: The Adventure Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vH_task1",
            title: "Task 1",
            instructions: "Minecraft & Exploration. Choose: will, won't, might or might not.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Be careful! If you dig straight down, you ________ fall into lava.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q2", prompt: "2. We ________ find diamonds in this cave, but I'm not sure.", options: [{label: "might", value: "a"}, {label: "will", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q3", prompt: "3. I ________ build a house today; I don't have enough wood.", options: [{label: "won't", value: "a"}, {label: "might", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
              { id: "q4", prompt: "4. If we travel north, we ________ find a village eventually.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
            ]
          },
          {
            id: "vH_task3_4",
            title: "Task 3 & 4",
            instructions: "Past Simple or Past Continuous.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. While I [gap1] (mine) for coal, a creeper [gap2] (explode) behind me.", correctAnswer: ["was mining", "exploded"] },
              { id: "q2", prompt: "2. Steve [gap1] (build) a bridge when he [gap2] (see) an Enderman.", correctAnswer: ["was building", "saw"] },
              { id: "q3", prompt: "3. We [gap1] (not/know) about the jungle temple until we [gap2] (find) the map.", correctAnswer: ["didn't know", "found"] },
            ]
          },
          {
            id: "vH_task5_6",
            title: "Task 5 & 6",
            instructions: "Modals: must, have to, can.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. You ________ wear armor if you want to survive the night.", options: [{label: "must", value: "must"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "must" },
              { id: "q2", prompt: "2. Players ________ craft a pickaxe before they can mine stone.", options: [{label: "have to", value: "have to"}, {label: "can", value: "can"}], correctAnswer: "have to" },
              { id: "q3", prompt: "3. You ________ fly in survival mode; it's impossible.", options: [{label: "can't", value: "can't"}, {label: "mustn't", value: "mustn't"}], correctAnswer: "can't" },
            ]
          },
          {
            id: "vH_task7_8",
            title: "Task 7 & 8",
            instructions: "Conditionals.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. If I [gap1] (find) treasure, I [gap2] (share) it with you. (1st Cond)", correctAnswer: ["find", "will share"] },
              { id: "q2", prompt: "2. If I [gap1] (be) a pro explorer, I [gap2] (not/get) lost. (2nd Cond)", correctAnswer: ["were", "wouldn't get"] },
            ]
          },
          {
            id: "vH_task10",
            title: "Task 10",
            instructions: "Passive Voice.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. The temple [gap1] (hide) by vines for centuries.", correctAnswer: ["was hidden"] },
              { id: "q2", prompt: "2. Rare items [gap1] (trade) by villagers for emeralds.", correctAnswer: ["are traded"] },
            ]
          }
        ]
      },
      {
        title: "VOCABULARY",
        tasks: [
          {
            id: "vH_task16",
            title: "Task 16",
            instructions: "Make or Do.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Can you ________ a torch for the cave?", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
              { id: "q2", prompt: "2. I need to ________ some research on this map.", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "do" },
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Version I: The Cinema & Story Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vI_task1",
            title: "Task 1",
            instructions: "Hollywood & Stranger Things. Choose the correct option.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. The director says the new movie ________ be a huge success.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q2", prompt: "2. I ________ watch the horror film; I'm too scared.", options: [{label: "won't", value: "a"}, {label: "might", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
              { id: "q3", prompt: "3. They ________ win an Oscar, but the competition is tough.", options: [{label: "might", value: "a"}, {label: "will", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
            ]
          },
          {
            id: "vI_task3_4",
            title: "Task 3 & 4",
            instructions: "Past Simple or Past Continuous.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. While the actors [gap1] (rehearse), the lights [gap2] (go) out.", correctAnswer: ["were rehearsing", "went"] },
              { id: "q2", prompt: "2. I [gap1] (not/like) the ending of the film we [gap2] (watch) last night.", correctAnswer: ["didn't like", "watched"] },
              { id: "q3", prompt: "3. She [gap1] (audition) for the role when the phone [gap2] (ring).", correctAnswer: ["was auditioning", "rang"] },
            ]
          },
          {
            id: "vI_task5_6",
            title: "Task 5 & 6",
            instructions: "Modals: must, have to, can.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. You ________ turn off your phone in the cinema.", options: [{label: "must", value: "must"}, {label: "can", value: "can"}], correctAnswer: "must" },
              { id: "q2", prompt: "2. Actors ________ learn their lines before filming starts.", options: [{label: "have to", value: "have to"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "have to" },
              { id: "q3", prompt: "3. Children ________ watch this movie; it's rated R.", options: [{label: "mustn't", value: "mustn't"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "mustn't" },
            ]
          },
          {
            id: "vI_task7_8",
            title: "Task 7 & 8",
            instructions: "Conditionals.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. If I [gap1] (be) a famous actor, I [gap2] (live) in Hollywood. (2nd Cond)", correctAnswer: ["were", "would live"] },
              { id: "q2", prompt: "2. If the tickets [gap1] (not/be) so expensive, we [gap2] (go) more often. (2nd Cond)", correctAnswer: ["were not", "would go"] },
            ]
          },
          {
            id: "vI_task10",
            title: "Task 10",
            instructions: "Passive Voice.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "1. The script [gap1] (write) by a famous author.", correctAnswer: ["was written"] },
              { id: "q2", prompt: "2. New movies [gap1] (release) every Friday.", correctAnswer: ["are released"] },
            ]
          }
        ]
      },
      {
        title: "WRITING",
        tasks: [
          {
            id: "vI_writing",
            title: "Writing Assessment",
            instructions: "The Future of Cinema vs. VR Gaming (80-100 words).",
            type: "TEXT_AREA",
            questions: [{ id: "essay", prompt: "Write your response here:" }]
          }
        ]
      }
    ]
  }
];
