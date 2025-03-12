import React, { useState } from 'react';
import './App.css';
function App() {
  const [userData, setUserData] = useState({ name: '', category: '', difficulty: '' });
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const fetchQuestion = async () => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=1&category=${userData.category}&difficulty=${userData.difficulty}&type=multiple`
      );
      const data = await response.json();
      setQuestionData(data.results[0]);
      setSelectedAnswer('');
      setResult(null);
    } catch (error) {
      setQuestionData({ error: 'Failed to fetch question. Please try again.' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.category || !userData.difficulty) {
      alert('All fields are required!');
      return;
    }
    fetchQuestion();
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      alert('Please select an answer!');
      return;
    }
    const isCorrect = selectedAnswer === questionData.correct_answer;
    setResult(isCorrect ? 'Correct!' : `Wrong! The correct answer is: ${questionData.correct_answer}`);
  };

  const resetQuiz = () => {
    setUserData({ name: '', category: '', difficulty: '' });
    setQuestionData(null);
    setSelectedAnswer('');
    setResult(null);
  };

  return (
    <div>
      {!questionData && (
        <form onSubmit={handleSubmit}>
          <h1>Welcome to the Trivia Quiz</h1>
          <p>Fill out the form below to start your trivia journey!</p>
          <label>
            Name:
            <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
          </label>
          <label>
            Category:
            <select name="category" value={userData.category} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="9">General Knowledge</option>
              <option value="23">History</option>
              <option value="17">Science & Nature</option>
              <option value="12">Music</option>
            </select>
          </label>
          <label>
            Difficulty:
            <select name="difficulty" value={userData.difficulty} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      {questionData && !result && (
        <form onSubmit={handleAnswerSubmit}>
          <h2>{questionData.question}</h2>
          {questionData.error && <p>{questionData.error}</p>}
          {!questionData.error &&
            questionData.incorrect_answers.concat(questionData.correct_answer).sort().map((answer, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {answer}
              </label>
            ))}
          <button type="submit">Submit Answer</button>
        </form>
      )}

      {result && (
        <div>
          <h2>{userData.name}, {result}</h2>
          <button onClick={resetQuiz}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;