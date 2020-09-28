import React, { useEffect, useState } from 'react';
import '../../src/styles/tutor-sessions.css';
import TutorHistory from '../components/TutorSessions/TutorHistory';
import TutorCreate from '../components/TutorSessions/TutorCreate';
import TutorRate from '../components/TutorSessions/TutorRate';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { sortFilterAllTutorData } from '../helpers/tutor-helpers';

import axios from 'axios';

export default function TutorSessions() {

  const loggedInUserID = Number(document.cookie.split('=')[1]);

  const [currentTutorData, setCurrentTutorData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState([]);
  const [count, setCount] = useState(0);
  const [rateTutor, setRateTutor] = useState(false);
  const [currentTutorID, setCurrentTutorID] = useState(0);
  const [otherUsername, setOtherUsername] = useState(null);
  const [unratedSession, setUnratedSession] = useState(null);

  console.log('unratesSession', unratedSession);

  useEffect(() => {

    const promiseTutor = axios.get('http://localhost:8001/api/tutor_experiences');
    const promiseUser = axios.get('http://localhost:8001/api/users');

    Promise.all([promiseTutor, promiseUser])
      .then(all => {
        console.log(all);

        const [tutorData, userData] = all;

        const cleanTutorData = sortFilterAllTutorData(tutorData.data, loggedInUserID);

        console.log('cleanTutorData', cleanTutorData);
        console.log('loggedInUser', loggedInUserID);

        for (let session of cleanTutorData) {
          if (session.mentor_id === loggedInUserID && session.mentor_rating === null && session.status === "completed") {
            // setUnratedSession(session);
            console.log('session', session);
            setUnratedSession(session);
          }
          if (session.student_id === loggedInUserID && session.student_rating === null && session.status === "completed") {
            // setUnratedSession(session);
            console.log('session', session);
            setUnratedSession(session);
          }
        }

        setCurrentTutorData(cleanTutorData);
        setCurrentUserData(userData.data);

        setRateTutor(false);
      })

  }, [count]);

  function acceptAction(tutorSessionID) {

    axios.put('http://localhost:8001/api/tutor_experiences/accept', { tutorSessionID })
      .then(() => {
        setCount(count + 1);
      })
  }

  function declineCancelAction(tutorSessionID) {

    axios.put('http://localhost:8001/api/tutor_experiences/delete', { tutorSessionID })
      .then(() => {
        setCount(count + 1);
      })
  }

  function completeAction(tutorSessionID, otherUsername) {

    setRateTutor(true);
    setCurrentTutorID(tutorSessionID);
    setOtherUsername(otherUsername);

  }

  function submitRating(tutorSessionID, isMentor, rating, comments) {

    axios.put('http://localhost:8001/api/tutor_experiences/complete', { tutorSessionID, isMentor, rating, comments })
      .then(() => {
        setCount(count + 1);
      })
  }

  function otherUserSubmitRating(unratedTutorSession, rating, comments) {
    console.log('urts', unratedTutorSession);
    console.log('r', rating);
    console.log('c', comments);

    const tutorSessionID = unratedTutorSession.id;

    let isMentorRating;
    if (!unratedTutorSession.mentor_rating) {
      isMentorRating = true;
    } else {
      isMentorRating = false;
    }

    axios.put('http://localhost:8001/api/tutor_experiences/complete-other', { isMentorRating, rating, comments, tutorSessionID })
      .then((res) => {
        console.log('updatedRes', res)
        setUnratedSession(null);
        setCount(count + 1);
      })
  }

  function createTutorSession() {
    const radios = document.getElementsByName('radio-mentor-student');
    let radioChecked;
    for (let radio of radios) {
      if (radio.checked) {
        radioChecked = radio.id;
      }
    }

    const receiverID = Number(document.querySelector('#tutor-username-list').selectedOptions[0].id);
    const creatorID = Number(document.cookie.split('=')[1]);

    let mentorID, studentID;
    if (radioChecked === 'mentor') {
      mentorID = receiverID
      studentID = creatorID;
    } else {
      mentorID = creatorID;
      studentID = receiverID;
    }

    axios.post('http://localhost:8001/api/tutor_experiences/new', { mentorID, studentID, creatorID })
      .then(() => {
        setCount(count + 1);
      })

  }

  return (
    <div className='main-tutor-container'>
      <TutorCreate
        currentUserData={currentUserData}
        createTutorSession={createTutorSession}
      />
      {(rateTutor || unratedSession) && (
        <TutorRate
          currentTutorID={currentTutorID}
          currentUserData={currentUserData}
          currentTutorData={currentTutorData}
          submitRating={submitRating}
          otherUsername={otherUsername}
          unratedSession={unratedSession}
          otherUserSubmitRating={otherUserSubmitRating}
        />
      )}
      <TutorHistory
        currentTutorData={currentTutorData}
        currentUserData={currentUserData}
        acceptAction={acceptAction}
        declineCancelAction={declineCancelAction}
        completeAction={completeAction}
      />
    </div>
  );

}