
import { Exam } from './types';

export const navigateB1Exam: Exam = {
  title: "InterNation Pre-Intermediate Exam Workshop",
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
          id: "task2",
          title: "Task 2",
          instructions: "Choose the correct option: will, won’t, might or might not.",
          type: "MCQ",
          questions: [
            { id: "q1", prompt: "I __________ probably forget to call you later to discuss our plans. Please, remind me.", options: [{label: "won’t", value: "a"}, {label: "will", value: "b"}, {label: "might", value: "c"}], correctAnswer: "b" },
            { id: "q2", prompt: "If it snows tomorrow, the lessons __________ be canceled, but I am not sure about it.", options: [{label: "will", value: "a"}, {label: "might not", value: "b"}, {label: "might", value: "c"}], correctAnswer: "c" },
            { id: "q3", prompt: "I __________ be able to buy a new car because I don’t have enough money.", options: [{label: "might not", value: "a"}, {label: "will not", value: "b"}, {label: "will", value: "c"}], correctAnswer: "b" },
            { id: "q4", prompt: "He __________ travel to the Maldives if he makes more money.", options: [{label: "might", value: "a"}, {label: "might not", value: "b"}, {label: "won’t", value: "c"}], correctAnswer: "a" },
            { id: "q5", prompt: "If you don’t water plants regularly, they __________ die.", options: [{label: "won’t", value: "a"}, {label: "might", value: "b"}, {label: "will", value: "c"}], correctAnswer: "c" },
          ]
        },
        {
          id: "task3",
          title: "Task 3",
          instructions: "Complete the sentence with past simple or past continuous form of the verb. (e.g. Natalia was watching TV when her boyfriend arrived)",
          type: "FILL_IN",
          questions: [
            { id: "q1", prompt: "1) While my mother [gap1] (cook) dinner, my sister [gap2] (come) home.", correctAnswer: ["was cooking", "came"] },
            { id: "q2", prompt: "2) They [gap1] (have) dinner when I arrived at the restaurant.", correctAnswer: ["were having"] },
            { id: "q3", prompt: "3) I was explaining the topic when my student [gap1] (enter) the room.", correctAnswer: ["entered"] },
            { id: "q4", prompt: "4) When you [gap1] (call) me, I was playing a phone game.", correctAnswer: ["called"] },
            { id: "q5", prompt: "5) While we [gap1] (walk) in the park, we [gap2] (find) a lost wallet.", correctAnswer: ["were walking", "found"] },
          ]
        },
        {
          id: "task4",
          title: "Task 4",
          instructions: "Complete the sentence with past simple or past continuous form of the verb.",
          type: "FILL_IN",
          questions: [
            { id: "q1", prompt: "1) My father [gap1] (speak) on the phone as he was driving.", correctAnswer: ["was speaking"] },
            { id: "q2", prompt: "2) They [gap1] (leave) the party early because they were tired.", correctAnswer: ["left"] },
            { id: "q3", prompt: "3) She [gap1] (not pass) her exam because she missed the workshop.", correctAnswer: ["didn't pass"] },
            { id: "q4", prompt: "4) While [gap1] (walk) in the zoo, we [gap2] (see) a bear.", correctAnswer: ["walking", "saw"] },
            { id: "q5", prompt: "5) He [gap1] (plan) their vacation when his friend called.", correctAnswer: ["was planning"] },
          ]
        },
        {
          id: "task5",
          title: "Task 5",
          instructions: "Choose the correct modal verb to complete the sentence.",
          type: "MCQ",
          questions: [
            { id: "q1", prompt: "1. You ________ (have to / can) show your ID at the entrance.", options: [{label: "have to", value: "have to"}, {label: "can", value: "can"}], correctAnswer: "have to" },
            { id: "q2", prompt: "2. I ________ (have to / don't have to) take an umbrella today because it's sunny.", options: [{label: "have to", value: "have to"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "don't have to" },
            { id: "q3", prompt: "3. She ________ (can’t / must) complete her assignment before she goes out.", options: [{label: "can’t", value: "can’t"}, {label: "must", value: "must"}], correctAnswer: "must" },
            { id: "q4", prompt: "4. We ________ (mustn't / can) leave our bags unattended in the airport.", options: [{label: "mustn't", value: "mustn't"}, {label: "can", value: "can"}], correctAnswer: "mustn't" },
            { id: "q5", prompt: "5. They ________ (can't / can) use their phones during the exam.", options: [{label: "can't", value: "can't"}, {label: "can", value: "can"}], correctAnswer: "can't" },
            { id: "q6", prompt: "6. He ________ (has to / doesn't have to) wear a tie to the office.", options: [{label: "has to", value: "has to"}, {label: "doesn't have to", value: "doesn't have to"}], correctAnswer: "has to" },
            { id: "q7", prompt: "7. You ________ (have to / don't have to) bring a gift if you're invited.", options: [{label: "have to", value: "have to"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "don't have to" },
            { id: "q8", prompt: "8. We ________ (mustn't / don't have to) disturb the quiet in the library.", options: [{label: "mustn't", value: "mustn't"}, {label: "don't have to", value: "don't have to"}], correctAnswer: "mustn't" },
            { id: "q9", prompt: "9. She ________ (can / must) ask for help if she doesn't understand.", options: [{label: "can", value: "can"}, {label: "must", value: "must"}], correctAnswer: "can" },
            { id: "q10", prompt: "10. You ________ (can / must) choose your own seat; it's first come, first served.", options: [{label: "can", value: "can"}, {label: "must", value: "must"}], correctAnswer: "can" },
          ]
        },
        {
          id: "task7",
          title: "Task 7",
          instructions: "Complete the sentences with the correct form of the verbs (First Conditional).",
          type: "FILL_IN",
          questions: [
            { id: "q2", prompt: "2) I [gap1] (not/buy) you a coke if you [gap2] (not/clean) my room for me.", correctAnswer: ["won't buy", "don't clean"] },
            { id: "q3", prompt: "3) If I [gap1] (see) Laziz, I [gap2] (tell) him the news.", correctAnswer: ["see", "will tell"] },
            { id: "q4", prompt: "4) My mom [gap1] (be) angry if my brother [gap2] (come) home late.", correctAnswer: ["will be", "comes"] },
            { id: "q5", prompt: "5) If she [gap1] (not/practice) every day, she [gap2] (not/become) a great musician.", correctAnswer: ["doesn't practice", "won't become"] },
          ]
        },
        {
          id: "task8",
          title: "Task 8",
          instructions: "Complete the sentences with the correct form of the verbs (Second Conditional).",
          type: "FILL_IN",
          questions: [
            { id: "q2", prompt: "2. If she [gap1] alive, she [gap2] me some good advice. (be / give)", correctAnswer: ["were", "would give"] },
            { id: "q3", prompt: "3. If we [gap1] a car, we [gap2] to the countryside. (own / travel)", correctAnswer: ["owned", "would travel"] },
            { id: "q4", prompt: "4. If he [gap1] his keys, he [gap2] a locksmith. (not lose / not call)", correctAnswer: ["didn't lose", "wouldn't call"] },
            { id: "q5", prompt: "5. If they [gap1] the instructions, they [gap2] the project on time. (follow / complete)", correctAnswer: ["followed", "would complete"] },
            { id: "q6", prompt: "6. If I [gap1] a bicycle, I [gap2] to work. (have / not walk)", correctAnswer: ["had", "wouldn't walk"] },
            { id: "q7", prompt: "7. If you [gap1] earlier, you [gap2] the bus. (leave / catch)", correctAnswer: ["left", "would catch"] },
            { id: "q8", prompt: "8. If she [gap1] the exam, she [gap2] very proud. (pass / feel)", correctAnswer: ["passed", "would feel"] },
            { id: "q9", prompt: "9. If we [gap1] in a bigger house, we [gap2] more friends. (live / invite)", correctAnswer: ["lived", "would invite"] },
            { id: "q10", prompt: "10. If I [gap1] you, I [gap2] a different job. (be / find)", correctAnswer: ["were", "would find"] },
          ]
        },
        {
          id: "task9",
          title: "Task 9",
          instructions: "Complete the sentences with a, b or c.",
          type: "MCQ",
          questions: [
            { id: "q1", prompt: "1. I’ll text you _____I get home", options: [{label: "before", value: "a"}, {label: "as soon as", value: "b"}, {label: "if", value: "c"}], correctAnswer: "b" },
            { id: "q2", prompt: "2. We’ll go for a walk __________ it stops raining.", options: [{label: "If", value: "a"}, {label: "before", value: "b"}, {label: "after", value: "c"}], correctAnswer: "c" },
            { id: "q3", prompt: "3. She’ll feel much better ______she takes some medicine.", options: [{label: "when", value: "a"}, {label: "if", value: "b"}, {label: "before", value: "c"}], correctAnswer: "b" },
            { id: "q4", prompt: "4. Don’t forget to lock the door ______ you leave.", options: [{label: "after", value: "a"}, {label: "before", value: "b"}, {label: "if", value: "c"}], correctAnswer: "b" },
            { id: "q5", prompt: "5. He’ll buy a car ____ he saves enough money.", options: [{label: "before", value: "a"}, {label: "when", value: "b"}, {label: "after", value: "c"}], correctAnswer: "b" },
            { id: "q6", prompt: "6. __________ the movie ends, we’ll go for dinner.", options: [{label: "If", value: "a"}, {label: "After", value: "b"}, {label: "Before", value: "c"}], correctAnswer: "b" },
            { id: "q7", prompt: "7. I’ll remind you __________ the test starts.", options: [{label: "after", value: "a"}, {label: "when", value: "b"}, {label: "before", value: "c"}], correctAnswer: "c" },
            { id: "q8", prompt: "8. They will celebrate _______ they hear the good news.", options: [{label: "if", value: "a"}, {label: "as soon as", value: "b"}, {label: "before", value: "c"}], correctAnswer: "b" },
            { id: "q9", prompt: "9. We will go outside ______the sun comes out.", options: [{label: "if", value: "a"}, {label: "after", value: "b"}, {label: "before", value: "c"}], correctAnswer: "a" },
            { id: "q10", prompt: "10. She always drinks coffee _______ starting work.", options: [{label: "after", value: "a"}, {label: "if", value: "b"}, {label: "when", value: "c"}], correctAnswer: "c" },
          ]
        },
        {
          id: "task10",
          title: "Task 10 & 11",
          instructions: "Complete the text with the correct PASSIVE form of the verbs in brackets.",
          type: "FILL_IN",
          questions: [
            { id: "q1", prompt: "Old books [gap1] (replace) last month with new ones.", correctAnswer: ["were replaced"] },
            { id: "q2", prompt: "The computers [gap1] (use) by students to do research.", correctAnswer: ["are used"] },
            { id: "q3", prompt: "A new reading area [gap1] (add) last week.", correctAnswer: ["was added"] },
            { id: "q4", prompt: "Magazines [gap1] (deliver) every Monday.", correctAnswer: ["are delivered"] },
            { id: "q5", prompt: "The rules [gap1] (explain) at the beginning of the year.", correctAnswer: ["are explained"] },
          ]
        }
      ]
    },
    {
      title: "VOCABULARY & WRITING",
      tasks: [
        {
          id: "task16",
          title: "Task 16",
          instructions: "Complete the sentences with make or do and a word from the box.",
          type: "FILL_IN",
          boxOptions: ["a lot of money", "nothing", "housework", "a decision", "a mistake", "choice", "plan", "homework", "exercise"],
          questions: [
            { id: "q1", prompt: "1. I usually [gap1] in the morning before breakfast.", correctAnswer: ["do exercise"] },
            { id: "q2", prompt: "2. She didn’t study enough, so she [gap1] in the test.", correctAnswer: ["made a mistake"] },
            { id: "q3", prompt: "3. You have to [gap1] — do you want coffee or tea?", correctAnswer: ["make a decision"] },
            { id: "q4", prompt: "4. They [gap1] when they moved to a different city.", correctAnswer: ["made a lot of money"] },
            { id: "q5", prompt: "5. My brother works in IT and [gap1] every month.", correctAnswer: ["does homework"] },
          ]
        },
        {
          id: "task24",
          title: "Task 24",
          instructions: "Choose the correct answer from the words in italics.",
          type: "MCQ",
          questions: [
            { id: "q1", prompt: "1) She didn’t study much. (However / Although), she still passed.", options: [{label: "However", value: "However"}, {label: "Although", value: "Although"}], correctAnswer: "However" },
            { id: "q2", prompt: "2) I continued working (despite / even though) I was very tired.", options: [{label: "despite", value: "despite"}, {label: "even though", value: "even though"}], correctAnswer: "even though" },
            { id: "q3", prompt: "3) (Even though / Despite) feeling sick, he went to work.", options: [{label: "Even though", value: "Even though"}, {label: "Despite", value: "Despite"}], correctAnswer: "Despite" },
          ]
        },
        {
          id: "writing",
          title: "Writing Training",
          instructions: "Write about social networks (80-100 words). Advantages, disadvantages of online shopping, your opinions.",
          type: "TEXT_AREA",
          questions: [{ id: "essay", prompt: "Write your response here:" }]
        }
      ]
    }
  ]
};
