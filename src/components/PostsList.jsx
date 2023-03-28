import React, { useState } from 'react';

import NewPost from './NewPost';
import Post from "./Post";
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const hideModalHandler = () => {
    setModalIsVisible(prevValue => !prevValue);
  };

  return (
    <React.Fragment>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
        </Modal>
       ) : null }
      <ul className={classes.posts}>
      <Post author={enteredAuthor} body={enteredBody} />
      <Post author={enteredAuthor} body={enteredBody} />
    </ul>
    
    </React.Fragment>
    
  );
}

export default PostsList;