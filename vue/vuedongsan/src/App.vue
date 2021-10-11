<template>

<!-- 모달창만들기 -->
<div class="black_bg" v-if="modalOpen == true">
  <div class="white_bg">
    <h4>상세페이지임</h4>
    <p>상세페이지 내용임</p>
    <button @click="modalOpen = false">
      닫기
    </button>
  </div>
</div>
<!-- 동적인 UI(모달창 등등)을 만드는 법
1. 디자인 디자인
2. UI의 현재 상태를 데이터로 만들어줌 (상태에 따라 실행되게)
ex) modalOpen : flase 혹은 modalOpen : 0
3. 데이터에 따라 UI가 어떻게 보일지 작성
그럼 이제 쉽게 켜고 끌 수 있음
(모달창 켜는 스위치라 생각 하면 됨)

v-if="조건식"
안에 있는 조건식이 true일 때만 html 태그를 보여줌
v-if="modalOpen == true"






 -->
  
  <div class="menu">
    <a v-for="(a,i) in menu" :key="i">{{ a }}</a>
    <!-- 코드를 짜다보면 반복적인 HTML 태그가 가끔 생기는데 반복문으로 축약가능 -->
  </div>




  <!-- 
    Vue의 HTML 반복문 특징
    <태그 v-for="작명 in 몇회" :key="작명">
    key를 쓰지 않으면 에러가 나니 꼭 써야함.
    
    1.태그를 반복하면서 이름 또한 데이터 바인딩을 통해 순서에 맞게 원하는 이름을 넣을 수 있다.
      아래의 data에 값이름 : [값1, 값2, 값3] 을 넣은 뒤 
      순서를 넣는 부분인 in 뒤에 데이터 이름을 적고 태그속 내용을 작명한 이름을 넣으면 내가 설정한 값이 순서대로 출력된다.
      여기서 in뒤의 순서는 내가 값이름에 넣은 데이트 갯수 만큼 반복된다.
      ex)
        아래에 data -> 값이름이다 : [값1, 값2, 값3, 값4]
        <div v-for="작명 in 값이름이다" :key="작명">작명<div>
        위 사항이 출력되면 아래의 결과로 나온다.
        데이터 값이 4개가 있기 때문에 4번만 반복
        <div>값1</div>
        <div>값2</div>
        <div>값3</div>
        <div>값4</div>

      * :key=""의 용도
        - 반복문쓸 때 꼭 써야함.
        - 반복문 돌린 요소를 컴퓨터가 구분하기 위해 쓺

    2.변수 작명 2개 까지 가능하다.
      보통 왼쪽 변수는 array 내의 데이터 (값1, 값2, 값3)
      오른쪽 변수는 1씩 증가하는 정수이다.
      테스트로 태그 안에 i를 출력하면 순서의 정수 값이 출력되는 것을 확인할 수 있다.
      <a v-for="(a,i) in menu" :key="i">{{ i }}</a> -> <a>0</a> <a>1</a> <a>2</a> <a>3</a>
  -->
  <div>
    <!-- 뷰에서 이미지 넣을 때는 src -> assets안에 넣으면 됨 -->

    <img src="./assets/room0.jpg" class="room_img">
    <h4 class="red" :style="style" @click="modalOpen = true">{{ pdName[0] }}</h4> 
    <p>{{ price1 }} 만원</p>
    <button @click="allCount()">허위매물신고</button> 
    <span>신고수 : {{policeCount[0]}}</span> 

    <img src="./assets/room0.jpg" class="room_img">
    <h4>{{ pdName[0] }}</h4> 
    <p>{{ price1 }} 만원</p>
    <button>허위매물신고</button>

    <!-- <img src="./assets/room0.jpg" class="room_img">
    <h4>{{ pdName[0] }}</h4> 
    <p>{{ price1 }} 만원</p>
    <button>허위매물신고</button> -->
    <!-- 
      버튼 태그를 만들어 버튼을 누르면 신고수가 올라가게 이벤트 넣기
      자바 스크립트 같은 경우 onClick=""를 쓰지만 Vue 문법 같은 경우 
      v-on:click="" 혹은 @click 을 쓴다. ( @는 v-on:의 약자이다. Vue문법임)
      ex)
      <button v-on:click="">버튼1</button>
      <button @click="">버튼2</button>
      
      1. 아래 데이터에 숫자 0을 입력한다.
      ex) count : 0
      1. 버튼 태그에 v-on:click="" 혹은 @click=""를 입력한 뒤 아래 데이터를 바운딩한다.
      3. @click:="" 안에 변수가 증가하는 식을 넣는다.
      ex) 
      변수 뒤에++ 넣어도 되고 (1씩 증가함)
      =+ 1 이라 넣어도 된다. (1씩 증가함 뒤에 숫자에 따라 2씩 혹은 다른 숫자만큼 늘어나게도 할 수 있음)
      <button @click="count++">버튼</button> <span>순서 : {{count}}</span>

      꼭 click이 아니더라도 mouseover등 @을 적고 아래에 뜨는 추천효과들을 넣어도 실행되게 할 수 있다.
    -->

  </div>

  <div>
    <img src="./assets/room1.jpg" class="room_img">
    <h4 @click="modalOpen = true">{{ pdName[1] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button @click="allCount1()">허위매물신고</button> 
    <span>신고수 : {{policeCount[1]}}</span>
  </div>
  <!-- 꼭 클릭  -->
  <div>
    <img src="./assets/room2.jpg" class="room_img">
    <h4 @click="modalOpen = true">{{ pdName[2] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button @click="allCount2()">허위매물신고</button> 
    <span>신고수 : {{policeCount[2]}}</span>
  </div> 
  <!-- 
    위의 하드코딩을 Vue로 축약 하면 아래의 코드로 만들 수 있음
    <div v-for="products in pdName" :key="products">
      <h4>{{ products }}</h4>
      <p>{{ price }}만원</p>
    </div>
    =====================
    <div v-for="(products, idx) in pdName" :key="idx">
    위 처럼 v-for 값을 2개로 만들어 idx 값을 넣고 []안에 idx를 넣어도 순서대로 출력 됨 -> 
    <h4>{{ pdName[idx] }}</h4> 
  -->
 
</template>

<script>

import data from './assets/data.js';

export default {
  name: 'App',
  
  data(){
    /* state 라고도 불림 */
    return {
      policeCount :[0, 0, 0],

      price1 : 80,
      price2 : 70,

      style : 'color : blue',

      menu : ['Home', 'Shop', 'About'],
      price : [50, 60, 70],
      pdName : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      
      modalOpen : false,

      allData : data
    }
  },
  methods : {
    allCount(){ 
      this.policeCount[0]++;
    },
    allCount1(){
      this.policeCount[1]++;
    },
    allCount2(){
      this.policeCount[2]++;
    },
  },
  //뷰에서 함수를 집어 넣고 싶으면 data가 끝나는 지점 바로 밑에 methods : {}를 넣고 그 안에 함수를 만들어 넣으면 됨.
  /* 
  메소드 안에 this.함수명(){} 을 적은 뒤 그 안에 내가 원하는 이벤트나 값을 넣는다.
  Vue 문법으로 함수선언할 때 앞에 this를 꼭 붙여야함 안 그러면 오류남 (내 오브젝트를 뜻함)
  또한 click 안에 함수를 넣을 땐 함수 뒤에 ()을 붙여줘야한다.
  ex)
    methods : {
      함수(){
        this.++;
      }
    },
    <button @click="함수()">

   */

  components: {
  }
}

  //===== 데이터 바인딩 - JS데이터를 HTML에 꽂아 넣는 문법 =====
  /* 
  @ 데이터 바인딩을 쓰는 이유!
  1. HTML에 하드코딩 해놓으면 나중에 변경이 어려움 (가변적인 데이터들)
  2. Vue의 실시간 자동 렌더링 기능 
     * vue는 데이터를 변경하면 데이터와 관련된 HTML에도 실시간으로 변경이 반영된다. (웹 앱사용 가능)
     * 쇼핑몰 이름처럼 바뀌지 않을 데이터들은 데이터 바인딩을 안 해도 된다. 

  자주 변경될 데이터들은 밑에 저장해놨다가 {{데이터 바인딩}} 을 한다.


  @ 데이터 바인딩을 하는 방법
  1. export default{} 안에 아래의 코드를 입력한 뒤 데이터 박스 안에 내가 넣고싶은 데이터를 넣는다.
  =======================
  data(){
    return{

    }
  }
  =======================

  2. 박스안에 :(콜론) 를 사용해 이름과 값을 넣고 여러개를 적을 경우는 ,(쉼표)를 붙인다. (이름은 한글도 가능하지만 영어를 추천) 
  ex) 이름1 : 값,
      이름2 : 값,
      이름3 : 값, 

  3. 적은 이름을 내가 값을 넣고싶은 곳에 {{}} 을 사용해 넣는다.
  ex) <div>{{ 이름1 }}</div>


  @ HTML 속성도 데이터 바인딩이 가능하다. (id, class, style 등등 다 가능)
  * 속성을 데이터 바인딩 할 경우 속성 앞에 :(콜론)을 붙인다. 
  ex) :속성="데이터이름"


  ===== 먼저 array(어레이) 설명 =====  
  대괄호 안에 여러 숫자들을 선언하고 선언한 변수 값을 불러와 대괄호 안에 순서의 숫자를 넣으면 그 값이 나타난다.
  ex)
    let array = [10,20,30];
    array[1]

    이럴 경우 1의 값은 20으로 나온다.
    첫번 째 값이 나오고 싶으면 0을 입력하고 세번 째 값을 입력하고 싶으면 2를 입력하면된다. (index값은 0부터 시작! 은 기본이지^^ㅋ)

  어레이를 사용해 {{}} 안에 이름과 순서를 넣으면 어레이의 값이 나온다.
  ex)
    data(){
      return {
        number : ['10', '20', '30'],
      }
    },
    <div>{{number[1]}}개</div>  -> '10개' 로 출력
    <div>{{number[2]}}개</div>  -> '20개' 로 출력
    <div>{{number[3]}}개</div>  -> '30개' 로 출력 

  ====== 뷰 =====


  */

</script>

<style>
body{
  margin:0;
}
div{
  box-sizing:border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu{
  background:darkslateblue;
  padding:15px;
  border-radius:5px;
}
.menu a{
  color:#fff;
  padding:10px;
  text-decoration:none;
}
.room_img{
  width:100%;
  margin:40px auto 0;
}

/* 모달창 */
.black_bg{
  width:100%;
  height:100%;
  position:fixed;
  background:rgba(0,0,0,.5);
  padding:20px;
}
.white_bg{
  width:100%;
  background:#fff;
  border-radius:8px;
  padding:20px;
}



</style>
