// --------------------------------------------------
import React, { useState } from 'react';

const QuestionnaireForm = () => {
  const [formData, setFormData] = useState(Array(5).fill(['A']));

  const handleCheckboxChange = (questionIndex, option) => {
    const updatedFormData = [...formData];
    updatedFormData[questionIndex] = updatedFormData[questionIndex].includes(option)
      ? updatedFormData[questionIndex].filter((selectedOption) => selectedOption !== option)
      : [...updatedFormData[questionIndex], option];

    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    if (formData.every((options) => options.length > 0)) {
      console.log('User data submitted:', formData);
    } else {
      alert('Please answer all questions before submitting.');
    }
  };

  return (
    <div className="container mt-4">
      <form>
        {[...Array(5).keys()].map((questionIndex) => (
          <div key={questionIndex} className="mb-3">
            <h5>Question {questionIndex + 1}</h5>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`optionA${questionIndex}`}
                checked={formData[questionIndex].includes('A')}
                onChange={() => handleCheckboxChange(questionIndex, 'A')}
                required
              />
              <label className="form-check-label" htmlFor={`optionA${questionIndex}`}>
                Option A
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`optionB${questionIndex}`}
                checked={formData[questionIndex].includes('B')}
                onChange={() => handleCheckboxChange(questionIndex, 'B')}
                required
              />
              <label className="form-check-label" htmlFor={`optionB${questionIndex}`}>
                Option B
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`optionC${questionIndex}`}
                checked={formData[questionIndex].includes('C')}
                onChange={() => handleCheckboxChange(questionIndex, 'C')}
                required
              />
              <label className="form-check-label" htmlFor={`optionC${questionIndex}`}>
                Option C
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`optionD${questionIndex}`}
                checked={formData[questionIndex].includes('D')}
                onChange={() => handleCheckboxChange(questionIndex, 'D')}
                required
              />
              <label className="form-check-label" htmlFor={`optionD${questionIndex}`}>
                Option D
              </label>
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionnaireForm;
