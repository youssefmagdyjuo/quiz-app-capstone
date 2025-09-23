const mockQuestions = [
  {
    category: "Geography",
    difficulty: "easy",
    question: "What is the capital of France?",
    correct_answer: "Paris",
    incorrect_answers: ["Madrid", "Berlin", "Rome"],
    status: "unanswered",
    userAnswer: null,
  },
  {
    category: "Technology",
    difficulty: "medium",
    question: "Which language is primarily used for Android development?",
    correct_answer: "Kotlin",
    incorrect_answers: ["Swift", "JavaScript", "Ruby"],
    status: "unanswered",
    userAnswer: null,
  },
  {
    category: "Computers",
    difficulty: "easy",
    question: "What does HTTP stand for?",
    correct_answer: "HyperText Transfer Protocol",
    incorrect_answers: [
      "HighText Transfer Protocol",
      "HyperText Transmission Program",
      "Hyper Transfer Text Protocol",
    ],
    status: "unanswered",
    userAnswer: null,
  },
  {
    category: "Programming",
    difficulty: "medium",
    question: "Which company developed the Java programming language?",
    correct_answer: "Sun Microsystems",
    incorrect_answers: ["Microsoft", "Google", "Apple"],
    status: "unanswered",
    userAnswer: null,
  },
  {
    category: "Mathematics",
    difficulty: "easy",
    question: "What is 5 x 6?",
    correct_answer: "30",
    incorrect_answers: ["25", "20", "35"],
    status: "unanswered",
    userAnswer: null,
  },
  // باقي الأسئلة (مولدة تلقائيًا)
  ...Array.from({ length: 35 }, (_, i) => ({
    category: i % 2 === 0 ? "General Knowledge" : "Mathematics",
    difficulty: i % 3 === 0 ? "easy" : i % 3 === 1 ? "medium" : "hard",
    question: `Sample Question ${i + 6}: What is ${i + 1} + ${i + 2}?`,
    correct_answer: String((i + 1) + (i + 2)),
    incorrect_answers: [
      String((i + 1) + (i + 2) + 1),
      String((i + 1) + (i + 2) - 1),
      String((i + 1) + (i + 2) + 2),
    ],
    status: "unanswered",
    userAnswer: null,
  })),
];

export default mockQuestions;
