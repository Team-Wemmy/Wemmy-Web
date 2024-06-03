import React from "react";

import styled from "styled-components";
import logo_bgx from "../../img/logo-bg-none.png";
import google from "../../img/google.png";
import apple from "../../img/apple.png";

import AppBtn from "./AppBtn";

function Section1() {
    return (
        <React.Fragment>
            <div style={{ height: "1000px" }}>
                <section style={{ display: "block" }}>
                    <Div1 style={{ width: "100%", backgroundColor: "#fff7f8" }}>
                        <div>
                            <H1>
                                임신 & 육아
                                <br />
                                복지 혜택 모음.zip
                            </H1>
                            <P>
                                임신부터 육아 여정까지 필요한 모든 혜택
                                <br />
                                위미에서 놓치지 마세요~!
                            </P>
                            <div style={{ display: "flex", flexDirection: "row", marginTop: "40px" }}>
                                <AppBtn text="App Store" image={apple} backgroundColor="#FF7F92" />
                                <AppBtn text="Google Play" image={google} backgroundColor="#FF7F92" />
                            </div>
                        </div>
                        <Image1 />
                    </Div1>
                </section>
            </div>
        </React.Fragment>
    );
}

export default Section1;

const Div1 = styled.div`
    height: 1000px;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    padding-top: 200px;
    padding-bottom: 100px;
`;

const H1 = styled.h1`
    font-size: 2.9rem;
    color: #2f3238;
    margin-bottom: 40px;
`;

const P = styled.p`
    font-size: 20px;
    margin: 0px 5px;
    color: #7f8295;
`;

const Image1 = styled.div`
    width: 713px;
    height: 650px;
    background-image: url(${logo_bgx});
    background-size: cover;
    margin-top: 150px;

    @media (max-width: 1000px) {
        display: none;
    }
`;
