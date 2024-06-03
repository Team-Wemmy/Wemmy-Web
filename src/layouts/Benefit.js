import { Container } from "@mui/material";
import styled from "styled-components";

import arrow from "../img/arrow.png";
import homeIcon from "../img/homeIcon.png";

import SelectBox from "../component/benefit/SelectBox";
import List from "../component/benefit/List";

function Benefit() {
    return (
        <>
            <Div2>
                <Div3>
                    <img src={homeIcon} alt="" style={{ marginLeft: "10px" }} />
                    <img src={arrow} alt="" />
                    <p style={{ fontSize: "14px" }}>혜택 정보</p>
                </Div3>
                <h1>혜택 정보</h1>
                <p style={{ color: "#50525F" }}>임신부터 육아 여정의 모든 헤택 정보를 제공해요!</p>
            </Div2>
            <Container maxWidth="lg">
                <div style={{ marginBottom: "150px" }}>
                    <SelectBox />
                    <List />
                </div>
            </Container>
        </>
    );
}

export default Benefit;

const Div2 = styled.div`
    width: 100%;
    height: 300px;
    background-color: #ffe6ea;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Div3 = styled.div`
    width: 130px;
    height: 30px;
    background-color: #ffe6ea;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
