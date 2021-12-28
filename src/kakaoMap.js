import { markerdata } from "./markerData";
const { kakao } = window;

export default function kakaoMap() {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
    level: 5,
  };
  const map = new kakao.maps.Map(container, options);

  markerdata.forEach((el) => {
    new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(el.lat, el.lng),
      title: el.title,
    });
  });
}
