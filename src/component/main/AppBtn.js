function AppBtn({ text, image, backgroundColor }) {
    const getFontColor = (backgroundColor) => {
        if (backgroundColor === "#E4E5ED") {
            return "#303239";
        } else if (backgroundColor === "#FF7F92") {
            return "white";
        }
    };

    const fontColor = getFontColor(backgroundColor);

    return (
        <button
            style={{
                height: "50px",
                width: "190px",
                backgroundColor: backgroundColor,
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
