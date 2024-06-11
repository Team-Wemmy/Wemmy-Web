import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "50px",
            }}
        >
            <SyncLoader color="#FF8093" size={12} />
        </div>
    );
};

export default Loading;
