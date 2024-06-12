// component/place/Map.js

import { useState } from "react";
import { Map, MapMarker, useMap, CustomOverlayMap } from "react-kakao-maps-sdk";

import adminIcon from "../../img/adminplace.png";
import hospitalIcon from "../../img/hospital.png";
import babyIcon from "../../img/babyplace.png";

import styled from "styled-components";

import { BsHeartPulseFill } from "react-icons/bs";
import { PiBabyFill } from "react-icons/pi";
import { MdLocalHospital } from "react-icons/md";
import { MdHomeWork, MdPlace } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";

function KakaoMap() {
    const [category, setCategory] = useState(null);

    const positions = [
        {
            title: "금천구청",
            category: "행정시설",
            address: "서울 금천구 시흥대로73길 70",
            tel: "02-2627-2114",
            latlng: { lat: 37.45684835267657, lng: 126.89545224901133 },
            img: adminIcon,
        },
        {
            title: "뉴연세여성의원",
            category: "의료시설",
            address: "서울 금천구 시흥대로 239 1, 2, 5층",
            tel: "02-891-1801",
            latlng: { lat: 37.4551918768517, lng: 126.899969673571 },
            img: hospitalIcon,
        },
        {
            title: "희명병원",
            category: "의료시설",
            address: "서울 금천구 시흥대로 244",
            tel: "0507-1377-0021",
            latlng: { lat: 37.4557042937962, lng: 126.900623619436 },
            img: hospitalIcon,
        },
        {
            title: "금천구보건소",
            category: "의료시설",
            address: "서울 금천구 시흥대로 244",
            tel: "02-2627-2422",
            latlng: { lat: 37.457042618382495, lng: 126.89607361528654 },
            img: hospitalIcon,
        },
        {
            title: "서울금나래초등학교 병설유치원",
            category: "육아시설",
            address: "서울 금천구 시흥대로79길 37",
            tel: "02-807-9995",
            latlng: { lat: 37.45840330404623, lng: 126.89625257536905 },
            img: babyIcon,
        },
        {
            title: "꾸미어린이집",
            category: "육아시설",
            address: "서울 금천구 시흥대로77길 23 시흥베르빌아파트",
            latlng: { lat: 37.45756429165827, lng: 126.89760721647481 },
            img: babyIcon,
        },
        {
            title: "구립아람어린이집",
            category: "육아시설",
            address: "서울 금천구 벚꽃로 40 롯데캐슬골드파크1차아파트",
            tel: "02-894-8009",
            latlng: { lat: 37.45906264480987, lng: 126.89551415747404 },
            img: babyIcon,
        },
    ];

    const filteredPositions =
        category === null ? positions : positions.filter((position) => position.category === category);

    const EventMarkerContainer = ({ position, title, category, address, tel, img }) => {
        const map = useMap();
        const [isVisible, setIsVisible] = useState(false);

        return (
            <>
                {isVisible && (
                    <CustomOverlayMap position={position} yAnchor={1}>
                        <InfoDiv onClick={() => setIsVisible(false)}>
                            <div
                                style={{ height: "30px", display: "flex", flexDirection: "row", alignItems: "center" }}
                            >
                                <InfoTitle>{title}</InfoTitle>
                                <InfoSmallText>{category}</InfoSmallText>
                            </div>
                            <div>
                                <InfoText>
                                    <MdPlace style={{ marginRight: "7px" }} />
                                    {address}
                                </InfoText>
                                <InfoText>
                                    <GoClockFill size={12} style={{ marginRight: "8px" }} />
                                    09:00 - 18:00
                                </InfoText>
                                <InfoText>
                                    <IoCall style={{ marginRight: "7px" }} />
                                    {tel}
                                </InfoText>
                            </div>
                        </InfoDiv>
                    </CustomOverlayMap>
                )}
                <MapMarker
                    position={position} // 마커를 표시할 위치
                    // @ts-ignore
                    onClick={(marker) => {
                        map.panTo(marker.getPosition());
                        setIsVisible(true);
                    }}
                    image={{
                        src: img,
                        size: { width: 40, height: 40 },
                        options: { offset: { x: 20, y: 40 } },
                    }}
                />
            </>
        );
    };

    const handleButtonClick = (selectedCategory) => {
        setCategory(selectedCategory);
    };
    return (
        <>
            <DIV1>
                <BTN onClick={() => handleButtonClick("산후조리원")} selected={category === "산후조리원"}>
                    <BsHeartPulseFill color={category === "산후조리원" ? "white" : "#FD5B73"} size={21} /> 산후조리원
                </BTN>
                <BTN onClick={() => handleButtonClick("육아시설")} selected={category === "육아시설"}>
                    <PiBabyFill color={category === "육아시설" ? "white" : "#FD5B73"} size={25} /> 육아 시설
                </BTN>
                <BTN onClick={() => handleButtonClick("의료시설")} selected={category === "의료시설"}>
                    <MdLocalHospital color={category === "의료시설" ? "white" : "#FD5B73"} size={25} /> 의료 시설
                </BTN>
                <BTN onClick={() => handleButtonClick("행정시설")} selected={category === "행정시설"}>
                    <MdHomeWork color={category === "행정시설" ? "white" : "#FD5B73"} size={25} /> 행정 시설
                </BTN>
            </DIV1>
            <Map
                center={{ lat: 37.4575519359473, lng: 126.897593557221 }}
                style={{ width: "1100px", height: "800px", margin: "13px 50px" }}
                level={3}
            >
                {filteredPositions.map((position) => (
                    <EventMarkerContainer
                        style={{ border: "tranparent" }}
                        key={`${position.title}-${position.latlng}`}
                        position={position.latlng}
                        img={position.img}
                        title={position.title}
                        category={position.category}
                        tel={position.tel}
                        address={position.address}
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
    font-size: 18px;
    background-color: ${(props) => (props.selected ? "#FD5B73" : "white")};
    color: ${(props) => (props.selected ? "white" : "#303239")};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const InfoDiv = styled.div`
    width: 250px;
    height: 110px;
    background-color: white;
    border-radius: 10px;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const InfoTitle = styled.p`
    font-size: 20px;
    color: #fd5b73;
`;

const InfoText = styled.p`
    font-size: 13px;
    color: #50525f;
    display: flex;
    align-items: center;
    margin: 10px 0 5px 0;
`;

const InfoSmallText = styled.p`
    font-size: 11px;
    color: #7f8295;
    margin: 7px 0 0 10px;
`;
