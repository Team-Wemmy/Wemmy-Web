import styled from "styled-components";

import ZoomInIcon from "@mui/icons-material/Add";
import ZoomOutIcon from "@mui/icons-material/Remove";
import { MyLocation } from "@mui/icons-material";

function MapControl() {
    return (
        <div style={{ display: "flex", flexDirection: "column", position: "absolute", bottom: "10px", left: "10px" }}>
            <ControlBox2>
                <ControlBtn>
                    <MyLocation />
                </ControlBtn>
            </ControlBox2>
            <ControlBox>
                <ControlBtn>
                    <ZoomInIcon />
                </ControlBtn>
                <ControlBtn>
                    <ZoomOutIcon />
                </ControlBtn>
            </ControlBox>
        </div>
    );
}

export default MapControl;

const ControlBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #919191;
    border-radius: 5px;
    width: 36px;
    height: 72px;
    opacity: 0.5;
    overflow: hidden;
`;
const ControlBox2 = styled.div`
    display: flex;
    border: 1px solid #919191;
    border-radius: 5px;
    right: 10px;
    width: 36px;
    height: 36px;
    overflow: hidden;
    opacity: 0.5;
    margin-bottom: 20px;
`;
const ControlBtn = styled.span`
    display: block;
    width: 36px;
    height: 40px;
    text-align: center;
    padding-top: 5px;
    cursor: pointer;
    &:last-child {
        border-top: 1px solid #bfbfbf;
    }
`;
