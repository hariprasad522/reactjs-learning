const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1> There are no posts </h1>
      <button
        className="btn-solid btn-styled theme-primary"
        onClick={onGetPostsClick}
      >
        Get Posts From Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
