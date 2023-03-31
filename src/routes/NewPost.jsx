import React from 'react';
import Modal from '../components/Modal';
import { Link, Form } from 'react-router-dom';

import classes from './NewPost.module.css';

function NewPost() {
  return (
    <Modal>
      <Form className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name='body' required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name='author' required/>
        </p>
        <p className={classes.actions}>
          <Link to='..' type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export function action() {
  fetch('https://githubrx6umd-oymm--8080.local-credentialless.webcontainer.io/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}