
import React from 'react';
import { Task, UserAnswers } from '../types';

interface TaskRendererProps {
  task: Task;
  answers: UserAnswers;
  onAnswer: (taskId: string, questionId: string, value: string | string[]) => void;
  showCorrect: boolean;
  isDark: boolean;
}

export const TaskRenderer: React.FC<TaskRendererProps> = ({ task, answers, onAnswer, showCorrect, isDark }) => {
  const renderMCQ = () => {
    return task.questions.map((q, idx) => {
      const currentAnswer = (answers[task.id]?.[q.id] as string) || '';
      
      return (
        <div key={q.id} className="mb-10 group animate-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${idx * 50}ms` }}>
          <p className="mb-4 text-lg font-medium text-slate-800 dark:text-zinc-100 leading-relaxed">
            <span className="text-slate-400 dark:text-zinc-600 mr-2 text-sm font-bold uppercase tabular-nums">Q{idx + 1}</span>
            {q.prompt}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {q.options?.map((opt) => {
              const isSelected = currentAnswer === opt.value;
              const isCorrect = q.correctAnswer === opt.value;
              
              let styleClass = 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:border-indigo-300 dark:hover:border-indigo-900';
              if (isSelected) styleClass = 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 text-indigo-700 dark:text-indigo-300 shadow-sm';
              
              if (showCorrect) {
                if (isCorrect) styleClass = 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-500 text-emerald-700 dark:text-emerald-300 ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-zinc-900';
                else if (isSelected && !isCorrect) styleClass = 'bg-red-50 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-300';
              }

              return (
                <button
                  key={opt.value}
                  disabled={showCorrect}
                  onClick={() => onAnswer(task.id, q.id, opt.value)}
                  className={`p-4 rounded-xl text-sm font-medium border text-left transition-all-custom ${styleClass}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all-custom ${
                      isSelected ? 'border-indigo-500' : 'border-slate-300 dark:border-zinc-700'
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-indigo-500"></div>}
                    </div>
                    <span>{opt.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      );
    });
  };

  const renderFillIn = () => {
    return task.questions.map((q, qIdx) => {
      const parts = q.prompt.split(/\[gap\d+\]/);
      const currentValues = (answers[task.id]?.[q.id] as string[]) || [];

      return (
        <div key={q.id} className="mb-8 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50 animate-in fade-in duration-700">
          <div className="flex flex-wrap items-center leading-relaxed text-slate-700 dark:text-zinc-300">
            <span className="text-slate-400 dark:text-zinc-600 mr-3 text-xs font-bold">{qIdx + 1}</span>
            {parts.map((part, idx) => (
              <React.Fragment key={idx}>
                <span className="font-medium">{part}</span>
                {idx < parts.length - 1 && (
                  <div className="mx-2 my-1 relative inline-block">
                    <input
                      type="text"
                      disabled={showCorrect}
                      value={currentValues[idx] || ''}
                      onChange={(e) => {
                        const newValues = [...currentValues];
                        newValues[idx] = e.target.value;
                        onAnswer(task.id, q.id, newValues);
                      }}
                      className={`px-4 py-1.5 border rounded-lg text-sm min-w-[120px] outline-none transition-all-custom font-semibold tracking-wide ${
                        isDark ? 'bg-zinc-800' : 'bg-white'
                      } ${
                        showCorrect
                          ? (currentValues[idx]?.toLowerCase().trim() === (q.correctAnswer as string[])[idx].toLowerCase()
                            ? 'border-emerald-500 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20'
                            : 'border-red-500 text-red-600 bg-red-50 dark:bg-red-900/20')
                          : 'border-slate-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10'
                      }`}
                      placeholder="..."
                    />
                    {showCorrect && currentValues[idx]?.toLowerCase().trim() !== (q.correctAnswer as string[])[idx].toLowerCase() && (
                      <div className="absolute -bottom-5 left-0 right-0 text-[10px] font-bold text-emerald-600 whitespace-nowrap overflow-visible">
                        {(q.correctAnswer as string[])[idx]}
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    });
  };

  const renderTextArea = () => {
    const q = task.questions[0];
    const val = (answers[task.id]?.[q.id] as string) || '';
    const words = val.trim() ? val.trim().split(/\s+/).length : 0;

    return (
      <div className="animate-in fade-in duration-700">
        <label className="block mb-4 text-lg font-medium text-slate-700 dark:text-zinc-300">
          {q.prompt}
        </label>
        <textarea
          disabled={showCorrect}
          value={val}
          onChange={(e) => onAnswer(task.id, q.id, e.target.value)}
          rows={12}
          placeholder="Craft your response with care..."
          className="w-full p-6 border rounded-3xl text-lg leading-relaxed focus:ring-4 focus:ring-indigo-500/10 outline-none dark:bg-zinc-900 dark:text-white dark:border-zinc-800 transition-all-custom"
        />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className={`px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 ${
            words < 80 || words > 100 ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20'
          }`}>
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span>{words} / 80-100 Words</span>
          </div>
          {showCorrect && <span className="text-slate-400 dark:text-zinc-500 text-sm italic">Compare your writing with the model structure.</span>}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center space-x-2 mb-3">
          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            Section Progress
          </span>
        </div>
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{task.title}</h2>
        <p className="text-slate-500 dark:text-zinc-400 text-lg leading-relaxed font-light">{task.instructions}</p>
        {task.boxOptions && (
          <div className="mt-8 p-6 bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800 rounded-3xl">
            <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-widest mb-4">Word Bank</h4>
            <div className="flex flex-wrap gap-2">
              {task.boxOptions.map(opt => (
                <span key={opt} className="px-4 py-2 bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 shadow-sm transition-all hover:scale-105">
                  {opt}
                </span>
              ))}
            </div>
          </div>
        )}
      </header>

      <div className="space-y-4">
        {task.type === 'MCQ' && renderMCQ()}
        {task.type === 'FILL_IN' && renderFillIn()}
        {task.type === 'TEXT_AREA' && renderTextArea()}
      </div>
    </div>
  );
};
