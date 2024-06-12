// layouts/Place.js

import { Container } from "@mui/material";
import styled from "styled-components";

import arrow from "../img/arrow.png";
import homeIcon from "../img/homeIcon.png";

import PlaceMap from "../component/place/Map";

function Place() {
    return (
        <>
            <Div2>
                <Div3>
                    <img src={homeIcon} alt="" style={{ marginLeft: "10px" }} />
                    <img src={arrow} alt="" />
                    <p style={{ fontSize: "14px" }}>복지시설</p>
                </Div3>
                <h1>복지시설</h1>
                <p style={{ color: "#50525F" }}>내 주변 복지시설을 찾아볼까요?</p>
            </Div2>

            <Container
                maxWidth="lg"
                sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
            >
                <PlaceMap />
            </Container>
        </>
    );
}

export default Place;

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
