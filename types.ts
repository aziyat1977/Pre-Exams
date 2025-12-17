
export type TaskType = 'MCQ' | 'FILL_IN' | 'TEXT_AREA' | 'MATCHING' | 'BOX_FILL';

export interface Option {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  prompt: string;
  options?: Option[];
  correctAnswer?: string | string[]; // Single string for MCQ, array for multi-gap fill-ins
  hint?: string;
}

export interface Task {
  id: string;
  title: string;
  instructions: string;
  type: TaskType;
  questions: Question[];
  boxOptions?: string[]; // For Task 16/19/20 type "pick from box"
}

export interface UserAnswers {
  [taskId: string]: {
    [questionId: string]: string | string[];
  };
}

export interface Exam {
  title: string;
  durationMinutes: number;
  sections: {
    title: string;
    tasks: Task[];
  }[];
}
