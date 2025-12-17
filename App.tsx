
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { navigateB1Exams } from './examData';
import { UserAnswers, Task } from './types';
import { Timer } from './components/Timer';
import { ThemeToggle } from './components/ThemeToggle';
import { TaskRenderer } from './components/TaskRenderer';

type ViewState = 'WELCOME' | 'EXAM' | 'REVIEW';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('WELCOME');
  const [isDark, setIsDark] = useState(false);
  const [selectedExamIndex, setSelectedExamIndex] = useState(0);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isFinished, setIsFinished] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const activeExam = navigateB1Exams[selectedExamIndex];

  const allTasks = useMemo(() => {
    return activeExam.sections.flatMap(section => section.tasks);
  }, [activeExam]);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  const handleSound = useCallback((type: 'tick' | 'success' | 'finish') => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (type === 'tick') {
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'success') {
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } else if (type === 'finish') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
      osc.start();
      osc.stop(ctx.currentTime + 1);
    }
  }, []);

  const handleStart = () => {
    handleSound('success');
    setView('EXAM');
    setCurrentTaskIndex(0);
    setAnswers({});
    setIsFinished(false);
    setShowCorrect(false);
  };

  const handleFinish = useCallback(() => {
    setIsFinished(true);
    setView('REVIEW');
    handleSound('finish');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [handleSound]);

  const updateAnswer = (taskId: string, questionId: string, value: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [taskId]: {
        ...(prev[taskId] || {}),
        [questionId]: value
      }
    }));
    handleSound('tick');
  };

  const calculateScore = () => {
    let correct = 0;
    let total = 0;

    allTasks.forEach(task => {
      if (task.type === 'TEXT_AREA') return;
      task.questions.forEach(q => {
        total++;
        const userAns = answers[task.id]?.[q.id];
        if (task.type === 'MCQ') {
          if (userAns === q.correctAnswer) correct++;
        } else if (task.type === 'FILL_IN') {
          const uVals = (userAns as string[]) || [];
          const cVals = (q.correctAnswer as string[]) || [];
          const isAllCorrect = cVals.every((v, i) => v.toLowerCase().trim() === (uVals[i] || '').toLowerCase().trim());
          if (isAllCorrect) correct++;
        }
      });
    });

    return { correct, total };
  };

  if (view === 'WELCOME') {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        
        <div className="absolute top-8 right-8 z-50">
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>

        <div className="max-w-5xl w-full glass dark:border-zinc-800 border border-slate-200 p-8 md:p-12 rounded-[48px] shadow-2xl relative z-10 animate-in fade-in zoom-in duration-1000 text-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Navigate <span className="text-indigo-600">B1</span> Premium
          </h1>
          <p className="text-lg text-slate-500 dark:text-zinc-400 mb-8 font-light max-w-lg mx-auto leading-relaxed">
            Oxford Pre-Intermediate Assessment Workshop.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {navigateB1Exams.map((exam, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedExamIndex(idx)}
                className={`p-5 rounded-3xl border transition-all-custom text-left group flex flex-col justify-between ${
                  selectedExamIndex === idx 
                    ? 'bg-indigo-600 border-indigo-600 shadow-xl shadow-indigo-500/20' 
                    : 'bg-white dark:bg-zinc-800 border-slate-100 dark:border-zinc-700 hover:border-indigo-300'
                }`}
              >
                <div>
                  <span className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${selectedExamIndex === idx ? 'text-indigo-100' : 'text-slate-400'}`}>Version</span>
                  <span className={`text-2xl font-black ${selectedExamIndex === idx ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <p className={`mt-1 text-[11px] font-semibold leading-tight line-clamp-2 ${selectedExamIndex === idx ? 'text-indigo-100' : 'text-slate-500'}`}>
                    {exam.title.split(': ')[1] || exam.title}
                  </p>
                </div>
                <div className={`mt-4 pt-2 border-t text-[9px] font-bold uppercase tracking-widest ${selectedExamIndex === idx ? 'border-indigo-500 text-indigo-200' : 'border-slate-50 dark:border-zinc-700 text-slate-400'}`}>
                  {exam.durationMinutes} Mins
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleStart}
            className="w-full sm:w-auto px-16 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl transition-all-custom hover:bg-indigo-600 hover:text-white shadow-2xl active:scale-95"
          >
            Start Assessment Version {String.fromCharCode(65 + selectedExamIndex)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-all-custom flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <header className="sticky top-0 z-50 glass border-b border-slate-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-3 cursor-pointer" onClick={() => {if(confirm('Quit to menu?')) setView('WELCOME')}}>
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">N</div>
              <span className="font-bold text-slate-800 dark:text-white tracking-tight">Version {String.fromCharCode(65 + selectedExamIndex)}</span>
            </div>
            <div className="h-4 w-px bg-slate-200 dark:bg-zinc-800 hidden sm:block"></div>
            <Timer initialMinutes={activeExam.durationMinutes} onTimeout={handleFinish} isPaused={isFinished} />
          </div>
          
          <div className="flex items-center space-x-6">
            {view === 'EXAM' && (
              <button
                onClick={() => { if(confirm('Submit your exam?')) handleFinish(); }}
                className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-sm hover:opacity-90 transition-all active:scale-95"
              >
                FINISH
              </button>
            )}
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>
        </div>
        <div className="w-full bg-slate-100 dark:bg-zinc-900 h-1 relative overflow-hidden">
          <div 
            className="bg-indigo-600 h-1 transition-all-custom duration-700 ease-out absolute left-0"
            style={{ width: `${((currentTaskIndex + 1) / allTasks.length) * 100}%` }}
          />
        </div>
      </header>

      <div className="flex-grow flex max-w-7xl mx-auto w-full p-6 gap-10">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-8">
            {activeExam.sections.map((section, sIdx) => (
              <div key={sIdx}>
                <h3 className="text-[10px] font-black text-slate-400 dark:text-zinc-600 uppercase tracking-[0.2em] mb-4 px-2">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.tasks.map((task) => {
                    const globalIdx = allTasks.findIndex(t => t.id === task.id);
                    const isActive = currentTaskIndex === globalIdx;
                    const isAnswered = answers[task.id] && Object.keys(answers[task.id]).length > 0;
                    
                    return (
                      <button
                        key={task.id}
                        onClick={() => setCurrentTaskIndex(globalIdx)}
                        className={`w-full text-left px-4 py-3 rounded-2xl text-sm transition-all-custom flex items-center justify-between group ${
                          isActive 
                            ? 'bg-white dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-zinc-800 shadow-sm' 
                            : 'text-slate-500 dark:text-zinc-500 hover:text-indigo-500'
                        }`}
                      >
                        <span className="font-semibold">{task.title}</span>
                        {isAnswered && (
                          <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-indigo-500' : 'bg-emerald-500'}`}></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-grow min-w-0">
          {view === 'REVIEW' && (
            <div className="mb-12 p-10 bg-white dark:bg-zinc-900 rounded-[40px] shadow-2xl border border-slate-100 dark:border-zinc-800 animate-in slide-in-from-top-10 duration-1000">
               <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Report: Version {String.fromCharCode(65 + selectedExamIndex)}</h2>
               <div className="flex flex-wrap items-end space-x-12 mb-12">
                 <div className="space-y-1">
                    <span className="text-7xl font-black text-indigo-600 tracking-tighter tabular-nums">{calculateScore().correct}</span>
                    <span className="text-3xl font-bold text-slate-300 dark:text-zinc-700 ml-2">/ {calculateScore().total}</span>
                    <p className="text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Total Score</p>
                 </div>
                 <div className="pb-2">
                    <div className="px-6 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl font-bold text-sm">
                      {Math.round((calculateScore().correct / calculateScore().total) * 100)}% Proficiency
                    </div>
                 </div>
               </div>
               <div className="flex flex-wrap gap-4 pt-10 border-t border-slate-100 dark:border-zinc-800">
                 <button
                    onClick={() => setShowCorrect(!showCorrect)}
                    className={`px-8 py-3 rounded-2xl font-bold transition-all-custom ${
                      showCorrect ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300'
                    }`}
                 >
                   {showCorrect ? "Reviewing Answers" : "Show Correct Answers"}
                 </button>
                 <button
                    onClick={() => setView('WELCOME')}
                    className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold transition-all-custom shadow-xl"
                 >
                   Main Menu
                 </button>
               </div>
            </div>
          )}

          <div className="bg-white dark:bg-zinc-900 p-8 md:p-14 rounded-[40px] shadow-xl border border-slate-100 dark:border-zinc-800 min-h-[500px]">
            <TaskRenderer
              task={allTasks[currentTaskIndex]}
              answers={answers}
              onAnswer={updateAnswer}
              showCorrect={showCorrect}
              isDark={isDark}
            />

            <div className="mt-20 flex flex-wrap items-center justify-between border-t border-slate-50 dark:border-zinc-800/50 pt-10 gap-6">
              <button
                disabled={currentTaskIndex === 0}
                onClick={() => { setCurrentTaskIndex(prev => prev - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-3 bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 rounded-2xl font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all-custom hover:bg-slate-100 dark:hover:bg-zinc-700"
              >
                Previous
              </button>
              
              <div className="flex items-center space-x-2 text-slate-300 dark:text-zinc-700 font-bold text-sm">
                <span className="text-slate-900 dark:text-white">{currentTaskIndex + 1}</span>
                <span>/</span>
                <span>{allTasks.length}</span>
              </div>

              {currentTaskIndex < allTasks.length - 1 ? (
                <button
                  onClick={() => { setCurrentTaskIndex(prev => prev + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-12 py-3 bg-indigo-600 text-white rounded-2xl font-bold transition-all-custom active:scale-95 shadow-xl shadow-indigo-500/10"
                >
                  Next Task
                </button>
              ) : (
                view !== 'REVIEW' && (
                  <button
                    onClick={handleFinish}
                    className="px-12 py-3 bg-emerald-600 text-white rounded-2xl font-bold transition-all-custom active:scale-95 shadow-xl shadow-emerald-500/10"
                  >
                    Finish Exam
                  </button>
                )
              )}
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-auto p-12 text-center">
        <div className="max-w-7xl mx-auto border-t border-slate-100 dark:border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 dark:text-zinc-600 text-sm font-medium">
            &copy; {new Date().getFullYear()} Premium Assessment Platform
          </p>
          <div className="flex space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-700">
            <span>MS. UMIDA</span>
            <span>MR. DALER</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
