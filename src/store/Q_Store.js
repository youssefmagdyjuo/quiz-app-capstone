import { create } from "zustand";
import { persist } from "zustand/middleware";

// Form Store
export const useOpenForm = create(
    persist(
        (set) => ({
    isVisible: false,
    toggleVisible: () => set((state) => ({ isVisible: !state.isVisible })),
    category: 18,
    setCategory: (newCategory) => set(() => ({ category: newCategory })),
    difficulty: 'medium',
    setDifficulty: (newDifficulty) => set(() => ({ difficulty: newDifficulty })),
}),        { name: "form-storage" }
    )
);

// Question Store
export const useQuestionStore = create(
    persist(
        (set, get) => ({
            // questions
            questions: [],
            setQuestions: (newQuestions) =>
                set(() => ({ questions: newQuestions })),
            //update question status and user answer
            updateQuestionStatus: (index, status, userAnswer) =>
                set((state) => {
                    const updatedQuestions = state.questions.map((question, i) =>
                        i === index ? { ...question, status, userAnswer } : question
                    );
                    return { questions: updatedQuestions };
                }),

            resetQuestions: () => set(() => ({ questions: [] })),

            // currentQuestionIndex
            currentQuestionIndex: 0,
            // update currentQuestionIndex with boundary check
            setCurrentQuestionIndex: (index) =>
                set((state) => ({
                    currentQuestionIndex:
                        index >= 0 && index < state.questions.length
                            ? index
                            : state.currentQuestionIndex,
                })),

            incrementIndex: () =>
                set((state) => {
                    const newIndex =
                        state.currentQuestionIndex < state.questions.length - 1
                            ? state.currentQuestionIndex + 1
                            : state.currentQuestionIndex;
                    return { currentQuestionIndex: newIndex };
                }),

            decrementIndex: () =>
                set((state) => {
                    const newIndex =
                        state.currentQuestionIndex > 0
                            ? state.currentQuestionIndex - 1
                            : 0;
                    return { currentQuestionIndex: newIndex };
                }),

            // score
            score: 0,
            incrementScore: () => set((state) => ({ score: state.score + 1 })),
            decrementScore: () => set((state) => ({ score: state.score - 1 })),
            resetScore: () => set(() => ({ score: 0 })),

            // Getter
            getCurrentQuestion: () => {
                const { questions, currentQuestionIndex } = get();
                return questions[currentQuestionIndex] || null;
            },
        }),
        { name: "question-storage" }
    )
);
