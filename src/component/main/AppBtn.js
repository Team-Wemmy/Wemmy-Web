import { useState } from "react";

function AppBtn({ text, image, backgroundColor }) {
    const [isActive, setIsActive] = useState(false);

    const getFontColor = (backgroundColor) => {
        if (backgroundColor === "rgba(228,229,237,1)") {
            return "#303239";
        } else if (backgroundColor === "rgba(255, 255, 255, 0.2)") {
            return "#FFFFFF";
        }
    };

    const fontColor = getFontColor(backgroundColor);

    const handleMouseDown = () => {
        setIsActive(true);
    };

    const handleMouseUp = () => {
        setIsActive(false);
    };

    return (
        <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{
                height: "50px",
                width: "190px",
                background: isActive ? "#D0D3E1" : backgroundColor,
                color: fontColor,
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                border: 0,
                borderRadius: "10px",
                margin: "10px 20px 0 0",
                paddingRight: "20px",
            }}
        >
            <img src={image} alt={text} />
            {text}
        </button>
    );
}

export default AppBtn;
