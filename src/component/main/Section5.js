import React from "react";

import styled from "styled-components";

import iphone from "../../img/iPhone.png";

function Section5() {
    return (
        <React.Fragment>
            <section style={{ width: "100%", height: "1200px", display: "block", backgroundColor: "#FFF7F8" }}>
                <DIV2>
                    <Image2 />
                    <div>
                        <div>
                            <P>
                                <ColorText>커뮤니티</ColorText>
                            </P>
                            <H1>근처 이웃들과</H1>
                            <H1>소소한 이야기 나누기</H1>
                        </div>
                        <div>
                            <P>
                                동네 이웃들과 임신부터 육아, 소소한 이야기
                                <br />
                                글도 남기고 공감과 댓글로 소통해보세요.
                            </P>
                        </div>
                    </div>
                </DIV2>
            </section>
        </React.Fragment>
    );
}

export default Section5;

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
