// src/layouts/Benefit.js

import { Container, Grid, Pagination } from "@mui/material";
import styled from "styled-components";

import { useState, useEffect } from "react";
import axios from "axios";

import arrow from "../img/arrow.png";
import homeIcon from "../img/homeIcon.png";

import FilterBox from "../component/benefit/FilterBox";
import BenefitList from "../component/benefit/BenefitList";
import Loading from "../component/Loading";

function Benefit() {
    const CITY = "서울특별시";
    const [loading, setLoading] = useState(true);
    const [benefits, setBenefits] = useState([]);
    const [type, setType] = useState([]);
    const [district, setDistrict] = useState(["서울 전체"]);
    const [currentPage, setCurrentPage] = useState(1);
    const benefitsPerPage = 15;

    useEffect(() => {
        const fetchBenefit = async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_API_URL}/benefit/v2/web/list?city=${CITY}`);
                setBenefits(resp.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };

        fetchBenefit();
    }, []);

    const filteredBenefits = benefits.filter((benefit) => {
        const matchesFilter = type.length === 0 || type.includes(benefit.type);
        const matchesDistrict = district.includes("서울 전체") || district.includes(benefit.district);
        return matchesFilter && matchesDistrict;
    });

    // 이름순으로 정렬
    const sortedBenefits = filteredBenefits.sort((a, b) => {
        const titleA = a.title.toUpperCase(); // 대소문자 구분 없이 비교하기 위해 대문자로 변환
        const titleB = b.title.toUpperCase();
        return titleA.localeCompare(titleB);
    });

    const indexOfLastBenefit = currentPage * benefitsPerPage;
    const indexOfFirstBenefit = indexOfLastBenefit - benefitsPerPage;
    const currentBenefits = sortedBenefits.slice(indexOfFirstBenefit, indexOfLastBenefit);

    const totalPages = Math.ceil(sortedBenefits.length / benefitsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

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
            <Container
                maxWidth="xl"
                sx={{ marginBottom: "150px", display: "flex", alignItems: "center", flexDirection: "column" }}
            >
                <FilterBox type={type} setType={setType} district={district} setDistrict={setDistrict} />
                <Grid
                    container
                    maxWidth="lg"
                    spacing={{ xs: 1, md: 3 }}
                    columns={{ xs: 2, sm: 10, md: 15 }}
                    style={{ marginTop: 50, display: "flex", justifyContent: "flex-start" }}
                >
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            {currentBenefits.map((benefit) => (
                                <Grid item xs={2} sm={3} md={5} lg={5} key={benefit.benefitId}>
                                    <BenefitList
                                        title={benefit.title}
                                        district={benefit.district}
                                        imageUrl={benefit.imageUrl}
                                        type={benefit.type}
                                        application={benefit.aplicationPeriod}
                                        training={benefit.trainingPeriod}
                                    />
                                </Grid>
                            ))}
                        </>
                    )}
                </Grid>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
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
