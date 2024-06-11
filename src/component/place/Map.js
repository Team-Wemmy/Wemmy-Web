import { Map, MapMarker } from "react-kakao-maps-sdk";

import adminIcon from "../../img/adminplace.png";
import hospitalIcon from "../../img/hospital.png";

import styled from "styled-components";

import { BsHeartPulseFill } from "react-icons/bs";
import { PiBabyFill } from "react-icons/pi";
import { MdLocalHospital } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";

function KakaoMap() {
    const positions = [
        {
            title: "고척1동주민센터",
            cotegory: 3,
            latlng: { lat: 37.5003552584696, lng: 126.862762866771 },
            img: adminIcon,
        },
        {
            title: "구로성심병원",
            cotegory: 2,
            latlng: { lat: 37.4996468654605, lng: 126.86635824 },
            img: hospitalIcon,
        },
        {
            title: "송미영가정의학과의원",
            latlng: { lat: 37.5015074126632, lng: 126.865301478683 },
            img: hospitalIcon,
        },
    ];

    return (
        <>
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
            <Map
                center={{ lat: 37.4999957879198, lng: 126.86816965 }}
                style={{ width: "1100px", height: "500px", margin: "13px 50px" }}
                level={2}
            >
                {positions.map((position) => (
                    <MapMarker
                        style={{ border: "tranparent" }}
                        key={`${position.title}-${position.latlng}`}
                        position={position.latlng}
                        image={{
                            src: position.img,
                            size: { width: 40, height: 40 },
                            options: { offset: { x: 25, y: 25 } },
                        }}
                        title={position.title}
                    />
                ))}
            </Map>
        </>
    );
}

export default KakaoMap;

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
