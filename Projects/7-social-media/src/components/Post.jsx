import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <section className="card post-card" style={{ width: "30rem" }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h4 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill border border-bg theme-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h4>
        <p className="card-text">{post.body}</p>
        <div className="tags">
          {post.tags.map((tag) => (
            <span className="badge theme-secondary hashtag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="alert theme-success reactions" role="alert">
          <p>This post has been reacted by {post.reactions} people.</p>
        </div>
      </div>
    </section>
  );
};

export default Post;
