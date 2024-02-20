// components/Feedback/Feedback.jsx
import React, { useState } from 'react';
import Button from '../Button/Button';
import './style.css'; // Подключаем файл стилей для компонента Feedback
import likeImage from './like.png'
import dislikeImage from './dislike.png'
import reset from './reset.png'

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <Button name={<img src={likeImage} alt='Like' />} onClick={handleLike} />
      <span className="counter">{likes}</span>
      <Button name={<img src={dislikeImage} alt='Dislike' />} onClick={handleDislike} />
      <span className="counter">{dislikes}</span>
      <Button name={<img src={reset} alt='Reset Results' />} onClick={handleReset} />
    </div>
  );
}

export default Feedback;
