import { useState } from "react";

function AppBtn({ text, image, backgroundColor }) {
    const [isActive, setIsActive] = useState(false);

    const getFontColor = (backgroundColor) => {
        if (backgroundColor === "#E4E5ED") {
            return "#303239";
        } else if (backgroundColor === "#FF7F92") {
            return "white";
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
                backgroundColor: isActive ? "#FD5B73" : backgroundColor,
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
