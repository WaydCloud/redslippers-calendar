// src/api.js
import db from './firebaseConfig';

export const fetchMusicActivities = async () => {
  try {
    const snapshot = await db.collection('musicActivities').get();
    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error fetching music activities:', error);
    return [];
  }
};

export const addActivities = async (activity) => {
  try {
    await db.collection('musicActivities').add(activity);
  } catch (error) {
    console.error('Error adding music activity:', error);
  }
};
