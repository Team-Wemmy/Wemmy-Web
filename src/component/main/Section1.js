import React from "react";

import styled from "styled-components";
import google from "../../img/google.png";
import apple from "../../img/apple.png";
import landing from "../../img/Wemmy_Landing.png";

import AppBtn from "./AppBtn";

function Section1() {
    return (
        <React.Fragment>
            <SECTION1>
                <Div1>
                    <TEXTDIV>
                        <H1>
                            임신 & 육아
                            <br />
                            복지 혜택 모음.zip
                        </H1>
                        <P>
                            임신부터 육아 여정까지 필요한 모든 혜택
                            <br />
                            위미에서 놓치지 마세요!
                        </P>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "40px" }}>
                            <AppBtn text="App Store" image={apple} backgroundColor="rgba(255, 255, 255, 0.2)" />
                            <AppBtn text="Google Play" image={google} backgroundColor="rgba(255, 255, 255, 0.2)" />
                        </div>
                    </TEXTDIV>
                </Div1>
            </SECTION1>
        </React.Fragment>
    );
}

export default Section1;

const SECTION1 = styled.section`
    display: block;
    background-image: url(${landing});
    background-size: contain;
    background-repeat: no-repeat;
    width: 1800px;
`;

const Div1 = styled.div`
    width: 100vh;
    height: 1600px;
    position: relative;
    display: flex;
`;
const TEXTDIV = styled.div`
    margin-top: 280px;
    margin-left: 150px;
`;

const H1 = styled.p`
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 40px;
`;

const P = styled.p`
    font-size: 20px;
    margin: 0px 5px;
    color: white;
`;
