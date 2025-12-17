
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
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Version J: The Future & Tech Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vJ_task1",
            title: "Task 1",
            instructions: "Future Predictions. Choose will, won't, might or might not.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Scientists think robots ________ perform surgeries better than humans in 10 years.", options: [{label: "will", value: "a"}, {label: "won't", value: "b"}, {label: "might not", value: "c"}], correctAnswer: "a" },
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Version K: The Sports & Global Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vK_task1",
            title: "Task 1",
            instructions: "Sports Predictions. Choose will, won't, might or might not.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Uzbekistan ________ win the next AFC Asian Cup!", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Version L: The Champions Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vL_task1",
            title: "Task 1",
            instructions: "Football Focus. Choose will, won't, might or might not.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. If Ronaldo shoots from there, he ________ score. It's a difficult angle.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
              { id: "q2", prompt: "2. Real Madrid ________ win the Champions League again, they are playing very well.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q3", prompt: "3. I promise I ________ miss your football match this weekend.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "b" },
              { id: "q4", prompt: "4. If Messi gets injured, he ________ play in the final.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "c" },
              { id: "q5", prompt: "5. Uzbekistan ________ qualify for the next World Cup! We have a great team.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "c" },
            ]
          },
          {
            id: "vL_task2",
            title: "Task 2",
            instructions: "Referee & Stadium. Choose the correct option.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. If the referee sees that foul, he ________ give a red card.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q2", prompt: "2. We ________ go to the stadium on Saturday because the tickets are expensive.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "b" },
              { id: "q3", prompt: "3. They ________ buy Mbappe for the team, but it costs too much money.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
              { id: "q4", prompt: "4. The match ________ be cancelled if it snows heavily.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q5", prompt: "5. I ________ be a professional footballer. It is my dream.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "c" },
            ]
          },
          {
            id: "vL_task3_4",
            title: "Task 3 & 4",
            instructions: "Past Simple or Past Continuous.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "While the goalkeeper [gap1] (jump), the ball [gap2] (hit) the net.", correctAnswer: ["was jumping", "hit"] },
              { id: "q2", prompt: "We [gap1] (watch) the match when the electricity [gap2] (go) out.", correctAnswer: ["were watching", "went"] },
              { id: "q3", prompt: "Neymar [gap1] (dribble) past three players when he [gap2] (fall).", correctAnswer: ["was dribbling", "fell"] },
              { id: "q4", prompt: "The coach [gap1] (shout) instructions while the team [gap2] (play).", correctAnswer: ["was shouting", "was playing"] },
              { id: "q5", prompt: "I [gap1] (lose) my ticket while I [gap2] (run) to the stadium.", correctAnswer: ["lost", "was running"] },
            ]
          },
          {
            id: "vL_task5_6",
            title: "Task 5 & 6",
            instructions: "Modals: must, have to, can.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Goalkeepers ________ touch the ball with their hands inside the box.", options: [{label: "can", value: "can"}, {label: "have to", value: "have to"}], correctAnswer: "can" },
              { id: "q2", prompt: "2. Players ________ argue with the referee.", options: [{label: "mustn't", value: "mustn't"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "mustn't" },
              { id: "q3", prompt: "3. You ________ wear shin pads; it's a safety rule.", options: [{label: "have to", value: "have to"}, {label: "can", value: "can"}], correctAnswer: "have to" },
              { id: "q4", prompt: "4. Fans ________ buy tickets online or at the stadium.", options: [{label: "must", value: "must"}, {label: "can", value: "can"}], correctAnswer: "can" },
              { id: "q5", prompt: "5. You ________ run if you are the goalkeeper.", options: [{label: "don't have to", value: "don't have to"}, {label: "mustn't", value: "mustn't"}], correctAnswer: "don't have to" },
            ]
          },
          {
            id: "vL_task7",
            title: "Task 7",
            instructions: "First Conditional.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "If we [gap1] (score) one more goal, we [gap2] (win) the cup.", correctAnswer: ["score", "will win"] },
              { id: "q2", prompt: "If the coach [gap1] (put) him in the game, he [gap2] (play) well.", correctAnswer: ["puts", "will play"] },
              { id: "q3", prompt: "We [gap1] (be) sad if our favorite team [gap2] (lose).", correctAnswer: ["will be", "loses"] },
            ]
          },
          {
            id: "vL_task8",
            title: "Task 8",
            instructions: "Second Conditional.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "If I [gap1] (be) Ronaldo, I [gap2] (buy) a private jet.", correctAnswer: ["were", "would buy"] },
              { id: "q2", prompt: "If I [gap1] (own) a football club, I [gap2] (sign) the best players.", correctAnswer: ["owned", "would sign"] },
              { id: "q3", prompt: "If Uzbekistan [gap1] (win) the World Cup, everyone [gap2] (celebrate).", correctAnswer: ["won", "would celebrate"] },
              { id: "q4", prompt: "What [gap1] you [gap2] (do) if you [gap3] (meet) Messi?", correctAnswer: ["would", "do", "met"] },
            ]
          },
          {
            id: "vL_task10",
            title: "Task 10",
            instructions: "Passive Voice.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "The World Cup [gap1] (watch) by billions of people.", correctAnswer: ["is watched"] },
              { id: "q2", prompt: "Football [gap1] (play) in almost every country.", correctAnswer: ["is played"] },
              { id: "q3", prompt: "The stadium [gap1] (build) five years ago.", correctAnswer: ["was built"] },
              { id: "q4", prompt: "The winning goal [gap1] (score) by Benzema.", correctAnswer: ["was scored"] },
              { id: "q5", prompt: "Yellow cards [gap1] (give) to players who break the rules.", correctAnswer: ["are given"] },
            ]
          },
          {
            id: "vL_task16",
            title: "Task 16",
            instructions: "Make or Do.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. The referee needs to ________ a decision quickly.", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
              { id: "q2", prompt: "2. We need to ________ our best to win this league.", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "do" },
              { id: "q3", prompt: "3. Did the goalkeeper ________ a mistake?", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Version M: The AI & Future Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vM_task1",
            title: "Task 1",
            instructions: "AI & Technology. Choose will, won't, might or might not.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. In the future, robots ________ do all our housework.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q2", prompt: "2. AI ________ replace teachers completely. We still need human connection.", options: [{label: "won't", value: "a"}, {label: "will", value: "b"}, {label: "might", value: "c"}], correctAnswer: "a" },
              { id: "q3", prompt: "3. If you ask Chat-GPT, it ________ give you the wrong answer sometimes.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "b" },
              { id: "q4", prompt: "4. We ________ have flying cars by 2030, but it's unlikely.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "b" },
              { id: "q5", prompt: "5. I ________ buy the new iPhone 20. My old phone is still good.", options: [{label: "will", value: "a"}, {label: "won't", value: "b"}, {label: "might", value: "c"}], correctAnswer: "b" },
            ]
          },
          {
            id: "vM_task3_4",
            title: "Task 3 & 4",
            instructions: "Past Simple or Past Continuous.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "While the robot [gap1] (clean) the floor, it [gap2] (hit) the wall.", correctAnswer: ["was cleaning", "hit"] },
              { id: "q2", prompt: "I [gap1] (code) a new program when my computer [gap2] (crash).", correctAnswer: ["was coding", "crashed"] },
              { id: "q3", prompt: "The scientist [gap1] (invent) a new battery while he [gap2] (experiment).", correctAnswer: ["invented", "was experimenting"] },
              { id: "q4", prompt: "We [gap1] (play) in VR (Virtual Reality) when my mom [gap2] (call) me.", correctAnswer: ["were playing", "called"] },
            ]
          },
          {
            id: "vM_task5_6",
            title: "Task 5 & 6",
            instructions: "Modals: must, have to, can.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. You ________ mustn't give your password to anyone.", options: [{label: "mustn't", value: "mustn't"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "mustn't" },
              { id: "q2", prompt: "2. Robots ________ can work 24 hours a day without sleeping.", options: [{label: "can", value: "can"}, {label: "must", value: "must"}], correctAnswer: "can" },
              { id: "q3", prompt: "3. You ________ update your software to use this app.", options: [{label: "have to", value: "have to"}, {label: "can", value: "can"}], correctAnswer: "have to" },
              { id: "q4", prompt: "4. We ________ drive the car; it drives itself!", options: [{label: "don't have to", value: "don't have to"}, {label: "mustn't", value: "mustn't"}], correctAnswer: "don't have to" },
            ]
          },
          {
            id: "vM_task7_8",
            title: "Task 7 & 8",
            instructions: "Conditionals (First & Second).",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "If the internet [gap1] (go) down, we [gap2] (not/can) work. (First)", correctAnswer: ["goes", "won't be able to"] },
              { id: "q2", prompt: "If I [gap1] (have) a robot, I [gap2] (never/clean) my room again. (Second)", correctAnswer: ["had", "would never clean"] },
              { id: "q3", prompt: "If AI [gap1] (become) smarter than humans, the world [gap2] (change). (Second)", correctAnswer: ["became", "would change"] },
              { id: "q4", prompt: "If you [gap1] (click) this link, you [gap2] (get) a virus. (First)", correctAnswer: ["click", "will get"] },
            ]
          },
          {
            id: "vM_task10",
            title: "Task 10",
            instructions: "Passive Voice.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "The first computer [gap1] (invent) many years ago.", correctAnswer: ["was invented"] },
              { id: "q2", prompt: "Smart cities [gap1] (design) to save energy.", correctAnswer: ["are designed"] },
              { id: "q3", prompt: "Data [gap1] (collect) by websites every day.", correctAnswer: ["is collected"] },
              { id: "q4", prompt: "This photo [gap1] (generate) by Artificial Intelligence.", correctAnswer: ["was generated"] },
            ]
          },
          {
            id: "vM_task16",
            title: "Task 16",
            instructions: "Make or Do.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Can AI ________ a better plan than a human?", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
              { id: "q2", prompt: "2. I need to ________ some research on the internet.", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "do" },
              { id: "q3", prompt: "3. Did you ________ a backup of your files?", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Version N: The Superheroes Edition",
    durationMinutes: 60,
    sections: [
      {
        title: "GRAMMAR TASKS",
        tasks: [
          {
            id: "vN_task1",
            title: "Task 1",
            instructions: "Marvel & DC. Choose will, won't, might or might not.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Thanos ________ return. We defeated him for good.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "b" },
              { id: "q2", prompt: "2. Spiderman ________ be late. He is always busy saving people.", options: [{label: "might", value: "a"}, {label: "won't", value: "b"}, {label: "will", value: "c"}], correctAnswer: "a" },
              { id: "q3", prompt: "3. If Hulk gets angry, he ________ smash everything.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "a" },
              { id: "q4", prompt: "4. Batman ________ join the team, but he prefers working alone.", options: [{label: "will", value: "a"}, {label: "might", value: "b"}, {label: "won't", value: "c"}], correctAnswer: "b" },
              { id: "q5", prompt: "5. Iron Man ________ build a new suit. He loves inventing things.", options: [{label: "will", value: "a"}, {label: "won't", value: "b"}, {label: "might not", value: "c"}], correctAnswer: "a" },
            ]
          },
          {
            id: "vN_task3_4",
            title: "Task 3 & 4",
            instructions: "Past Simple or Past Continuous.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "While Spiderman [gap1] (swing) through the city, he [gap2] (see) a robbery.", correctAnswer: ["was swinging", "saw"] },
              { id: "q2", prompt: "Thor [gap1] (fly) in the sky when lightning [gap2] (strike).", correctAnswer: ["was flying", "struck"] },
              { id: "q3", prompt: "We [gap1] (watch) the movie when Captain America [gap2] (lift) the hammer.", correctAnswer: ["were watching", "lifted"] },
              { id: "q4", prompt: "The villain [gap1] (escape) while the heroes [gap2] (argue).", correctAnswer: ["escaped", "were arguing"] },
            ]
          },
          {
            id: "vN_task5_6",
            title: "Task 5 & 6",
            instructions: "Modals: must, have to, can.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Superheroes ________ mustn't reveal their secret identity.", options: [{label: "mustn't", value: "mustn't"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "mustn't" },
              { id: "q2", prompt: "2. Superman ________ can fly and shoot lasers from his eyes.", options: [{label: "can", value: "can"}, {label: "has to", value: "has to"}], correctAnswer: "can" },
              { id: "q3", prompt: "3. You ________ have to be brave to be an Avenger.", options: [{label: "have to", value: "have to"}, {label: "can", value: "can"}], correctAnswer: "have to" },
              { id: "q4", prompt: "4. Hulk ________ can't control his anger easily.", options: [{label: "can't", value: "can't"}, {label: "doesn't have to", value: "doesn't have to"}], correctAnswer: "can't" },
            ]
          },
          {
            id: "vN_task7_8",
            title: "Task 7 & 8",
            instructions: "Conditionals (First & Second).",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "If Thanos [gap1] (snap) his fingers, half the universe [gap2] (disappear). (First)", correctAnswer: ["snaps", "will disappear"] },
              { id: "q2", prompt: "If I [gap1] (be) invisible, I [gap2] (spy) on the villains. (Second)", correctAnswer: ["were", "would spy"] },
              { id: "q3", prompt: "If Batman [gap1] (not/have) money, he [gap2] (not/be) a superhero. (Second)", correctAnswer: ["didn't have", "wouldn't be"] },
              { id: "q4", prompt: "We [gap1] (call) the Avengers if there [gap2] (be) an alien attack. (First)", correctAnswer: ["will call", "is"] },
            ]
          },
          {
            id: "vN_task10",
            title: "Task 10",
            instructions: "Passive Voice.",
            type: "FILL_IN",
            questions: [
              { id: "q1", prompt: "Gotham City [gap1] (save) by Batman every night.", correctAnswer: ["is saved"] },
              { id: "q2", prompt: "The shield [gap1] (break) by Thanos in the battle.", correctAnswer: ["was broken"] },
              { id: "q3", prompt: "The Infinity Stones [gap1] (hide) in different places.", correctAnswer: ["are hidden"] },
              { id: "q4", prompt: "Superpowers [gap1] (give) to him by a spider bite.", correctAnswer: ["were given"] },
            ]
          },
          {
            id: "vN_task16",
            title: "Task 16",
            instructions: "Make or Do.",
            type: "MCQ",
            questions: [
              { id: "q1", prompt: "1. Don't ________ him angry!", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
              { id: "q2", prompt: "2. Heroes ________ a difference in the world.", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
              { id: "q3", prompt: "3. The villain wants to ________ a deal with the hero.", options: [{label: "make", value: "make"}, {label: "do", value: "do"}], correctAnswer: "make" },
            ]
          }
        ]
      }
    ]
  }
];
