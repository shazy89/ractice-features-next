const Video = () => {
  return (
    <div>
      <video
        id="lessonVideo"
        className="video-file"
        autoPlay={false}
        controls={true}
      >
        <source src="./video1.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Video;
