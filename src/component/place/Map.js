import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap() {
    return (
        <div>
            <Map
                center={{ lat: 37.5003552584696, lng: 126.862762866771 }}
                style={{ width: "1100px", height: "500px", margin: "50px" }}
            >
                <MapMarker style={{ border: "tranparent" }} position={{ lat: 37.5003552584696, lng: 126.862762866771 }}>
                    <div
                        style={{
                            color: "#9971ff",
                            fontSize: "19px",
                            fontWeight: "700",
                            border: "0",
                        }}
                    >
                        box
                    </div>
                </MapMarker>
            </Map>
        </div>
    );
}

export default KakaoMap;
