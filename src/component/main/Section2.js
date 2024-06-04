import React from "react";

import styled from "styled-components";

function Section2() {
    return (
        <React.Fragment>
            <section style={{ height: "600px", display: "block" }}>
                <DIV2 style={{ backgroundColor: "#fff" }}>
                    <H1>
                        나와 아이에게 필요한 <ColorText>모든 혜택</ColorText>
                    </H1>
                    <H1>
                        더 <ColorText>간편하게</ColorText> 받기 위한 여정
                    </H1>
                </DIV2>
            </section>
        </React.Fragment>
    );
}

export default Section2;

const DIV2 = styled.div`
    height: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
`;

const H1 = styled.h1`
    font-size: 3rem;
    color: #2f3238;
    margin: 0;
`;

const ColorText = styled.span`
    color: #fd5b73;
`;
