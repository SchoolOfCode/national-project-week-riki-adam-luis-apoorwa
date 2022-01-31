import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

const Form = ({ setAdd }) => {
  const { register, handleSubmit, reset } = useForm();
  const [post, setPost] = useState([]);
  function onSubmit(data) {
    async function postLink() {
      const response = await fetch(
        `https://soc-oneplace.herokuapp.com/data/weeks`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(data),
        }
      );
      const { payload } = await response.json();
      setPost(payload);
      setAdd(false)
    }
    postLink();
    reset();
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Week Number</label>
        <input
          placeholder="Select a week number"
          name="weekNumber"
          type="number"
          {...register('weekNumber', {
            required: 'Required',
          })}
        />
        <label>Subject</label>

        <input
          placeholder="Javascript, React, Testing..."
          name="subject"
          type="text"
          {...register('subject', {
            required: 'Required',
          })}
        />
        <label>Topic</label>

        <input
          placeholder="Title for your link"
          name="topic"
          type="text"
          {...register('topic', {
            required: 'Required',
          })}
        />
        <label>Link</label>

        <input
          placeholder="URL"
          name="link"
          type="text"
          {...register('link', {
            required: 'Required',
          })}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
