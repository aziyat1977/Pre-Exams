
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { navigateB1Exam } from './examData';
import { UserAnswers, Task } from './types';
import { Timer } from './components/Timer';
import { ThemeToggle } from './components/ThemeToggle';
import { TaskRenderer } from './components/TaskRenderer';

type ViewState = 'WELCOME' | 'EXAM' | 'REVIEW';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('WELCOME');
  const [isDark, setIsDark] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isFinished, setIsFinished] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const allTasks = useMemo(() => {
    return navigateB1Exam.sections.flatMap(section => section.tasks);
  }, []);

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
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        
        <div className="absolute top-8 right-8 z-50">
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>

        <div className="max-w-3xl w-full glass dark:border-zinc-800 border border-slate-200 p-12 md:p-16 rounded-[48px] shadow-2xl relative z-10 animate-in fade-in zoom-in duration-1000 text-center">
          <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-indigo-500/30 transform -rotate-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Navigate <span className="text-indigo-600">B1</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-zinc-400 mb-12 font-light max-w-lg mx-auto leading-relaxed">
            Experience the premium final assessment for Oxford Navigate Pre-Intermediate.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Time', val: '70m', color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { label: 'Level', val: 'B1', color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'Tasks', val: '24+', color: 'text-amber-600', bg: 'bg-amber-50' }
            ].map(stat => (
              <div key={stat.label} className={`${stat.bg} dark:bg-zinc-800/50 p-6 rounded-3xl transition-transform hover:scale-105`}>
                <span className={`block text-2xl font-bold ${stat.color}`}>{stat.val}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleStart}
            className="group relative px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl transition-all-custom hover:px-16 shadow-2xl hover:shadow-indigo-500/20 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Begin Assessment</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </span>
          </button>
          
          <p className="mt-8 text-slate-400 text-sm font-medium">Ready when you are.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-all-custom flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-slate-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">N</div>
              <span className="font-bold text-slate-800 dark:text-white tracking-tight">Navigate B1</span>
            </div>
            <div className="h-4 w-px bg-slate-200 dark:bg-zinc-800 hidden sm:block"></div>
            <Timer initialMinutes={navigateB1Exam.durationMinutes} onTimeout={handleFinish} isPaused={isFinished} />
          </div>
          
          <div className="flex items-center space-x-6">
            {view === 'EXAM' && (
              <button
                onClick={() => { if(confirm('Are you sure you want to finish?')) handleFinish(); }}
                className="px-6 py-2 bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-bold text-xs shadow-sm hover:opacity-90 transition-all active:scale-95"
              >
                FINISH NOW
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
        {/* Navigation Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-28 space-y-8">
            {navigateB1Exam.sections.map((section, sIdx) => (
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
                            ? 'bg-white dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shadow-xl shadow-indigo-500/5 border border-slate-200 dark:border-zinc-800' 
                            : 'text-slate-500 dark:text-zinc-500 hover:text-indigo-500 dark:hover:text-indigo-400'
                        }`}
                      >
                        <span className={`font-semibold ${isActive ? 'translate-x-1' : ''} transition-transform`}>
                          {task.title}
                        </span>
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

        {/* Content Area */}
        <main className="flex-grow min-w-0">
          {view === 'REVIEW' && (
            <div className="mb-12 p-10 bg-white dark:bg-zinc-900 rounded-[40px] shadow-2xl border border-slate-100 dark:border-zinc-800 animate-in slide-in-from-top-10 duration-1000 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
               </div>
               
               <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Assessment Report</h2>
               
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
                    className={`px-8 py-3 rounded-2xl font-bold transition-all-custom active:scale-95 ${
                      showCorrect ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300'
                    }`}
                 >
                   {showCorrect ? "Reviewing Answers" : "Show Correct Answers"}
                 </button>
                 <button
                    onClick={() => { if(confirm('Are you sure? All progress will be cleared.')) window.location.reload(); }}
                    className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold transition-all-custom active:scale-95 shadow-xl"
                 >
                   Retake Assessment
                 </button>
               </div>
            </div>
          )}

          <div className="bg-white dark:bg-zinc-900 p-8 md:p-14 rounded-[40px] shadow-xl border border-slate-100 dark:border-zinc-800 relative min-h-[500px]">
            <TaskRenderer
              task={allTasks[currentTaskIndex]}
              answers={answers}
              onAnswer={updateAnswer}
              showCorrect={showCorrect}
              isDark={isDark}
            />

            {/* Navigation Footer */}
            <div className="mt-20 flex flex-wrap items-center justify-between border-t border-slate-50 dark:border-zinc-800/50 pt-10 gap-6">
              <button
                disabled={currentTaskIndex === 0}
                onClick={() => { setCurrentTaskIndex(prev => prev - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-3 bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 rounded-2xl font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all-custom hover:bg-slate-100 dark:hover:bg-zinc-700 active:scale-95"
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
                  className="px-12 py-3 bg-indigo-600 text-white rounded-2xl font-bold transition-all-custom active:scale-95 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/30"
                >
                  Next Task
                </button>
              ) : (
                view !== 'REVIEW' && (
                  <button
                    onClick={handleFinish}
                    className="px-12 py-3 bg-emerald-600 text-white rounded-2xl font-bold transition-all-custom active:scale-95 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/30"
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
