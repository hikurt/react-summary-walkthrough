import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author='Max' body='Nice react brah'/>
      <Post author='Loki' body='What a Vue'/>
    </ul>
    
  );
}

export default PostsList;