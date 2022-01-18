import Link from "next/link";
import css from "styled-jsx/css";

// I tried to get the icon color to change on hover, but for some reason,
// it refused to change the fill.  There doesn't seem to be any fill
// on the SVGs themselves, tried in devtools, checked to make sure the 
// props are not null/undefined, etc.  
// Please submit a PR if you know how to fix this

const getButtonStyles = (hoverColor) => {
  return css.resolve`
    img {
      cursor: pointer;
      margin-left: 24px;
    }
    img:hover {
      fill: ${hoverColor};
    }
  `;
};

export default ({ metadata }) => {
  const { className, styles } = getButtonStyles(metadata.hoverColor);
  return (
    <div>
      {/* Why can't the link be displayed on hover and on right click? */}
      <a href={metadata.url}>
        <img
          className={className}
          src={`/images/${metadata.filename}`}
          height={"30px"}
          alt={metadata.label} // why isn't this working...
        />
      </a>
      {styles}
    </div>
  );
};
