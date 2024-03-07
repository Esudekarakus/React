import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Page02() {
  const [loading, setLoading] = useState(false);
 
  const [showForm, setShowForm] = useState(false);
  const [answerMessage, setAnswerMessage] = useState('');

  // Gecikmeli olarak formu göster
  setTimeout(() => {
    setShowForm(true);
    setLoading(false);
  }, 3000);

  const checkAnswer = (answer) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const correctAnswer = 'india';
        const answerLowercase=answer.toLocaleLowerCase('en');
        if (answerLowercase === correctAnswer) {
          resolve('Correct!');
        } else {
          reject('Your answer is incorrect.');
        }
      }, 3000);
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const userAnswer = event.target.elements.answer.value;
    setAnswerMessage('');

    try {
      const result = await checkAnswer(userAnswer);
      setAnswerMessage(result);
    } catch (error) {
      setAnswerMessage(error);
    }
  };


    return (
        <section>
          <h2>Tiny Quiz App</h2>
    
          {loading && (
            <ClipLoader
              color='red'
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
    
          {showForm && !loading && (
            <form className="form" onSubmit={handleFormSubmit}>
              <label htmlFor="question">Which country has the largest population in the world?</label>
              <hr />
              <label htmlFor="answer">Your Answer:</label>
              <textarea id="answer" name="answer" required></textarea>
              <button type="submit">
                Submit
              </button>
            </form>
          )}
    
          {answerMessage && <p>{answerMessage}</p>}
        </section>
      );
 
}
