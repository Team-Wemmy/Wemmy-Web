import React from "react";

import styled from "styled-components";

import iphone from "../../img/iPhone.png";

function Section4() {
    return (
        <React.Fragment>
            <section style={{ width: "100%", height: "1200px", display: "block", backgroundColor: "#FFF8DC" }}>
                <DIV2>
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
                    <Image2 />
                </DIV2>
            </section>
        </React.Fragment>
    );
}

export default Section4;

const DIV2 = styled.div`
    width: 1370px;
    height: 1200px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
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
`;
