import React from "react";

import styled from "styled-components";

import iphone from "../../img/section1.png";

function Section3() {
    return (
        <React.Fragment>
            <section
                style={{
                    height: "1200px",
                    display: "block",
                }}
            >
                <DIV2 style={{ backgroundColor: "#FFE7EA" }}>
                    <Image2 />
                    <div>
                        <div>
                            <P>
                                <ColorText>혜택 추천</ColorText>
                            </P>
                            <H1>나에게 해당하는</H1>
                            <H1>모든 복지 혜택을 한 눈에</H1>
                        </div>
                        <div>
                            <P>
                                거주하는 자치구 및 여정(임신 또는 육아)를 기반으로
                                <br />
                                맞춤형 혜택을 추천해줄게요.
                            </P>
                        </div>
                    </div>
                </DIV2>
            </section>
        </React.Fragment>
    );
}

export default Section3;

const DIV2 = styled.div`
    height: 1200px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
`;

const H1 = styled.h1`
    font-size: 2.8rem;
    color: #2f3238;
    margin: 0;
`;

const P = styled.p`
    font-size: 20px;
    margin: 20px 0px;
    color: #7f8295;
`;

const ColorText = styled.span`
    font-size: 25px;
    color: #fd5b73;
`;

const Image2 = styled.div`
    width: 420px;
    height: 735px;
    background-image: url(${iphone});
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 940px) {
        display: none;
    }
`;
