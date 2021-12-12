
/* 원룸데이트 */

/* var apple = 10;
var apple2 = 100;

export {apple, apple2}; */


// import / export 문법 쓰는 법
/*  
1. export default 변수명
2. import 변수명 from 그 파일 경로 

변수를 하나만 쓸 거면
export default{apple}; 익스폴트 디폴트 안에 변수명 하나를 집어넣는다.
vue파일에서는 그냥 변수명만 넣으면 된다.
import apple from './assets/data.js';
data(){
  data : apple
}
참고할 점은 data(){} 안에 변수 사용할 변수명을 적어줘야함
안 그럼 에러남


변수를 두 개 이상 쓸 거면
export {apple, apple2}; 익스폴트 중괄호 안에 변수명을 여러개 집어넣는다.
vue파일에서는 이렇게 중괄호 안에 변수들을 넣으면 된다.
import {apple, apple2} from './assets/data.js';
data(){
  data : apple
}

*/

let data = [
  {
  id : 0,
  title: "Sinrim station 30 meters away",
  image: "https://codingapple1.github.io/vue/room0.jpg",
  content: "18년 신축공사한 남향 원룸 ☀️, 공기청정기 제공",
  price: 340000
  },
  {
  id : 1,
  title: "Changdong Aurora Bedroom(Queen-size)",
  image: "https://codingapple1.github.io/vue/room1.jpg",
  content: "침실만 따로 있는 공용 셰어하우스입니다. 최대 2인 가능",
  price: 450000
  },
  {
  id : 2,
  title: "Geumsan Apartment Flat",
  image: "https://codingapple1.github.io/vue/room2.jpg",
  content: "금산오거리 역세권 아파트입니다. 애완동물 불가능 🐶",
  price: 780000
  },
  {
  id : 3,
  title: "Double styled beds Studio Apt",
  image: "https://codingapple1.github.io/vue/room3.jpg",
  content: "무암동인근 2인용 원룸입니다. 전세 전환가능",
  price: 550000
  },
  {
  id : 4,
  title: "MyeongIl Apartment flat",
  image: "https://codingapple1.github.io/vue/room4.jpg",
  content: "탄천동 아파트 월세, 남향, 역 5분거리, 허위매물아님",
  price: 680000
  },
  {
  id : 5,
  title: "Banziha One Room",
  image: "https://codingapple1.github.io/vue/room5.jpg",
  content: "반지하 원룸입니다. 비올 때 물가끔 새는거 빼면 좋아요",
  price: 370000
  }
];

export default data;

