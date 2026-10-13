import "./VideoEmbed.css";

function VideoEmbed({ id, title, vertical = false }) {
  return (
    <div className={vertical ? "video-embed vertical" : "video-embed"}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
        title={`${title} video`}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default VideoEmbed;
