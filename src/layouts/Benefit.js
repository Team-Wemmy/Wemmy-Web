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

    // API로부터 혜택 데이터를 가져오는 함수
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

    // 필터링된 혜택 데이터를 반환하는 함수
    const getFilteredBenefits = () => {
        return benefits.filter((benefit) => {
            const matchesFilter = type.length === 0 || type.includes(benefit.type);
            const matchesDistrict = district.includes("서울 전체") || district.includes(benefit.district);
            return matchesFilter && matchesDistrict;
        });
    };

    const filteredBenefits = getFilteredBenefits();

    // 이름순으로 정렬
    const sortedBenefits = filteredBenefits.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return titleA.localeCompare(titleB);
    });

    // 페이지네이션
    const indexOfLastBenefit = currentPage * benefitsPerPage;
    const indexOfFirstBenefit = indexOfLastBenefit - benefitsPerPage;
    const currentBenefits = sortedBenefits.slice(indexOfFirstBenefit, indexOfLastBenefit);

    const totalPages = Math.ceil(sortedBenefits.length / benefitsPerPage);

    // 페이지 변경 핸들러
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    // 검색 버튼 클릭 시 필터 적용하는 핸들러
    const handleSearch = ({ type, district }) => {
        setType(type);
        setDistrict(district);
        setCurrentPage(1); // 필터가 변경되면 첫 번째 페이지로 이동
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
                <FilterBox
                    type={type}
                    setType={setType}
                    district={district}
                    setDistrict={setDistrict}
                    onSearch={handleSearch}
                />
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
                                        application={benefit.applicationPeriod}
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
