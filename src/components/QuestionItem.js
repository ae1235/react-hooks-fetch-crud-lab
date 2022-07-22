import React from "react";

function QuestionItem({ question,onDeleteClick ,onCorrectAnswer  }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const deleteQuestion = () => onDeleteClick(id);
  const updateCorrectAnswer = (e) => onCorrectAnswer(id, parseInt(e.target.value))

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onCorrectAnswer = {updateCorrectAnswer}>{options}</select>
      </label>
      <button onClick = {deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
