import styled from "styled-components";

import { BsHeartPulseFill } from "react-icons/bs";
import { PiBabyFill } from "react-icons/pi";
import { MdLocalHospital } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";

function PlaceCote() {
    return (
        <DIV1>
            <BTN>
                <BsHeartPulseFill color="#FD5B73" size={21} /> 산후조리원
            </BTN>
            <BTN>
                <PiBabyFill color="#FD5B73" size={25} /> 육아 시설
            </BTN>
            <BTN>
                <MdLocalHospital color="#FD5B73" size={25} /> 의료 시설
            </BTN>
            <BTN>
                <MdHomeWork color="#FD5B73" size={25} /> 행정 시설
            </BTN>
        </DIV1>
    );
}

export default PlaceCote;

const DIV1 = styled.div`
    width: 580px;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 60px;
`;

const BTN = styled.button`
    width: 135px;
    height: 48px;
    border: 1px solid #e4e5ed;
    border-radius: 13px;
    background: none;
    font-size: 18px;
    color: #50525f;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
