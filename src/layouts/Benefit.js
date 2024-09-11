// src/layouts/Benefit.js

import { Container, Grid } from "@mui/material";
import styled from "styled-components";

import { useState, useEffect } from "react";
import axios from "axios";

import arrow from "../img/arrow.png";
import homeIcon from "../img/homeIcon.png";

import SelectBox1 from "../component/benefit/SelectBox1";
import SelectBox2 from "../component/benefit/SelectBox2";
import List from "../component/benefit/List";
import Loading from "../component/Loading";

function Benefit() {
    const CITY = "서울특별시";
    const [loading, setLoading] = useState(true);
    const [benefits, setBenefits] = useState([]);
    const [filter, setFilter] = useState("전체");
    const [district, setDistrict] = useState("서울 전체");

    useEffect(() => {
        const fetchBenefit = async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_API_URL}/benefit/web/list?city=${CITY}`);
                setBenefits(resp.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };

        fetchBenefit();
    }, []);

    const formatImageUrl = (url) => {
        if (!url.includes("?raw=true")) {
            return `${url}?raw=true`;
        }
        return url;
    };

    const filteredBenefits = benefits.filter((benefit) => {
        const matchesFilter = filter === "전체" || benefit.type === filter;
        const matchesDistrict = district === "서울 전체" || benefit.district === district;
        return matchesFilter && matchesDistrict;
    });

    // 이름순으로 정렬
    const sortedBenefits = filteredBenefits.sort((a, b) => {
        const titleA = a.title.toUpperCase(); // 대소문자 구분 없이 비교하기 위해 대문자로 변환
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });

    return (
        <>
            <Div2>
                <Div3>
                    <img src={homeIcon} alt="" style={{ marginLeft: "10px" }} />
                    <img src={arrow} alt="" />
                    <p style={{ fontSize: "14px" }}>혜택 정보</p>
                </Div3>
                <h1>혜택 정보</h1>
                <p style={{ color: "#50525F" }}>임신부터 육아 여정의 모든 헤택 정보를 제공해요!</p>
            </Div2>
            <Container maxWidth="lg">
                <div style={{ marginBottom: "150px" }}>
                    <SelectBox1 filter={filter} setFilter={setFilter} district={district} setDistrict={setDistrict} />
                    <SelectBox2 />
                    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 12, md: 16 }}>
                        {loading ? (
                            <Loading />
                        ) : (
                            <>
                                {sortedBenefits.map((benefit) => (
                                    <Grid item xs={2} sm={4} md={4} key={benefit.benefitId}>
                                        <List
                                            title={benefit.title}
                                            district={benefit.district}
                                            imageUrl={formatImageUrl(benefit.imageUrl)}
                                            type={benefit.type}
                                        />
                                    </Grid>
                                ))}
                            </>
                        )}
                    </Grid>
                </div>
            </Container>
        </>
    );
}

export default Benefit;

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
