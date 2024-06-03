import React from "react";

import styled from "styled-components";

import iphone from "../../img/iPhone.png";

function Section4() {
    return (
        <React.Fragment>
            <section style={{ width: "100%", height: "1200px", display: "block", backgroundColor: "#E1EFFF" }}>
                <DIV2>
                    <div>
                        <div>
                            <P>
                                <ColorText>복지시설</ColorText>
                            </P>
                            <H1>내 주변 복지시설</H1>
                            <H1>정보 확인하기</H1>
                        </div>
                        <div>
                            <P>
                                나의 현재 위치 기반 주변 의료시설, 행정시설 등의
                                <br />
                                정보를 얻을 수 있어요.
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
    color: #509cf7;
`;

const Image2 = styled.div`
    width: 420px;
    height: 735px;
    background-image: url(${iphone});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 75px;
    @media (max-width: 940px) {
        display: none;
    }
`;
