import "./SpotCard.css";

// Card with a soft light that follows the cursor
function SpotCard({ as: Tag = "div", className = "", children, ...rest }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Tag className={`spot ${className}`} onMouseMove={move} {...rest}>
      {children}
    </Tag>
  );
}

export default SpotCard;
