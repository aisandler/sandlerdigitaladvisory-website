import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export default function MeetingScheduler({ clientId }) {
  const [meeting, setMeeting] = useState({
    date: '',
    time: '',
    title: '',
    description: ''
  });

  const scheduleMeeting = async (e) => {
    e.preventDefault();
    const clientRef = doc(db, 'clients', clientId);
    await updateDoc(clientRef, {
      meetings: arrayUnion({
        ...meeting,
        scheduled: new Date().toISOString()
      })
    });
    
    // Reset form
    setMeeting({
      date: '',
      time: '',
      title: '',
      description: ''
    });
  };

  return (
    <form onSubmit={scheduleMeeting} className="space-y-4">
      {/* Form fields for meeting details */}
    </form>
  );
} 