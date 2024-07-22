// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchMusicActivities, addActivities } from './api';
import './App.css';g

const App = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({ date: '', title: '', description: '', category: '', artist: '' });

  useEffect(() => {
    const loadActivities = async () => {
      const data = await fetchMusicActivities();
      setActivities(data);
    };
    loadActivities();
  }, []);

  const handleChange = (e) => {
    setNewActivity({ ...newActivity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addActivities(newActivity);
    setActivities([...activities, newActivity]);
  };

  return (
    <div className="container">
      <h1>음악 활동 캘린더</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="date" placeholder="날짜" onChange={handleChange} required />
        <input type="text" name="title" placeholder="제목" onChange={handleChange} required />
        <input type="text" name="description" placeholder="설명" onChange={handleChange} />
        <input type="text" name="category" placeholder="카테고리" onChange={handleChange} />
        <input type="text" name="artist" placeholder="아티스트" onChange={handleChange} />
        <button type="submit">추가</button>
      </form>
      <div className="calendar">
        {activities.map((activity, index) => (
          <div key={index} className="activity">
            <p>{activity.date}</p>
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
            <p>{activity.category}</p>
            <p>{activity.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
