/* ***************** 로그인 유효성 검사 ***************** */
document.getElementById('theaterLoginBtn').addEventListener('click', () => {
  //인풋 값 가져오기
  const inputEmail    = document.getElementById('email').value;
  const inputPassword = document.getElementById('password').value;

  //인풋 값에 대한 유효성 체크
  const checkEmail          = RegExp("^[a-zA-Z0-9.]+@[a-z0-9.-_]+\.co$").test(inputEmail);
  const checkPassword       = RegExp("^(?=.*[a-zA-Z])(?=.*[!@~]).+$").test(inputPassword);
  const checkPasswordLength = RegExp("^.{8,20}$").test(inputPassword);

  //유효성 검사 결과에 따른 메시지 알림
  if (inputEmail === '' || inputPassword  === '')
    alert('이메일 혹은 비밀번호가 입력되지 않았습니다.');

  else if (!checkEmail)
    alert('이메일 형식이 올바르지 않습니다.');

  else if (!checkPasswordLength)
    alert('비밀번호는 최소 8자 이상, 최대 20자 이하로 구성해야 합니다.');

  else if(checkPasswordLength && !checkPassword)
    alert('비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.');

  else if (checkEmail && checkPasswordLength && checkPassword)
    alert('로그인 성공!');
});



/* ***************** 좌석 예매 기능 ***************** */
//엘리먼트
const chackHandicap       = document.getElementById('checkHandicap'); //장애인 체크박스
const allSeatArray  = Array.from(document.getElementById('theaterSeat').querySelectorAll('button'));      //모든 좌석 배열 생성
const musseukboxSeatArray = Array.from(document.getElementById('theaterSeat').querySelectorAll('.musseukbox')); //머쓱박스석 배열 생성
const handicapSeatArray   = Array.from(document.getElementById('theaterSeat').querySelectorAll('.handicap'));   //장애인석 배열 생성

//티켓 금액
const adultPrice      = 10000;             //어른
const youthPrice      = adultPrice - 3000; //어린이
const handicapPrice   = 5000;              //장애인

//선택한 티켓 개수
let adultTicketCount  = 0; //어른
let youthTicketCount  = 0; //어린이
let handleTicketCount = 0; //장애인

//티켓 총 금액
let totalAdultPrice    = adultTicketCount * adultPrice;     //어른
let totalYouthPrice    = youthTicketCount * youthPrice;     //어린이
let totalHandicapPrice = handleTicketCount * handicapPrice; //장애인

//선택한 좌석 개수
let economySeatCount    = 0; //일반석
let musseckboxSeatCount = 0 //머쓱박스석
let hadicapSeatCount    = 0; //장애인석

//좌석 총 금액
let economySeatPrice     = 0; //일반석
const musseckboxDiscount = 100 / (totalAdultPrice + totalYouthPrice) * 20; //머쓱박스석 할인률
let musseckboxSeatPrice  = (totalAdultPrice + totalYouthPrice) - musseckboxDiscount; //머쓱박스석
let hadicapSeatPrice     = 0; //장애인석
const totalPrice         = totalAdultPrice + totalYouthPrice + totalHandicapPrice //총


//** 배열 클래스 추가 함수 **//
const arrayAddClass = (arrayName, className, secondClassName) => {
  arrayName.forEach(item => item.classList.add(className, secondClassName));
}

//** 배열 전체 클래스 제거 함수 **//
const arrayRemoveClass = (arrayName, className, secondClassName) => {
  arrayName.forEach(item => item.classList.remove(className, secondClassName));
}

//** 엘리먼트 클래스 제거 함수 **//
const elementRemoveClass = (elementName, className, secondClassName) => {
  elementName.classList.remove(className, secondClassName);
}

//** 엘리먼트 클래스 제거 함수 **//
const elementAddClass = (elementName, className, secondClassName) => {
  elementName.classList.add(className, secondClassName);
}

//** 좌석 선택 핸들러 함수 **//
const seatCheckedHandler = target => {
  target.classList.contains('clicked')
    ? elementRemoveClass(target, 'clicked')
    : elementAddClass(target, 'clicked');
}


//** 장애인 체크박스 활성화 **//
const handicapAble = totalTicketCount => {

  //어른, 아이 개수 0개 이상 3개 이하일 경우 checkbox true
  totalTicketCount > 0 && totalTicketCount <= 3
    ? chackHandicap.disabled = false
    : chackHandicap.disabled = true;

  chackHandicap.addEventListener('change', event => {

    if(event.target.checked) {

      allSeatArray.forEach(seatButton => {
        !seatButton.classList.contains('handicap')
        && elementAddClass(seatButton, 'disabled');
      })
    } else {

      //장애인석 체크 여부
      const selectHadicapSeat = handicapSeatArray.filter(seatButton =>
        seatButton.classList.contains('clicked')
      );

      if(selectHadicapSeat.length > 0) {
        alert('선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?');

        //데이터 초기화
        totalTicketCount      = 0; //티켓 개수
        chackHandicap.checked = false; //장애인석 체크박스

        //모든 좌석 비활성화
        arrayRemoveClass(allSeatArray, 'clicked');
        arrayAddClass(allSeatArray, 'disabled');

        //티켓 선택 버튼 0으로 초기화
        const resetTicketButton = type => {
          const buttonArray = Array.from(document.getElementById(type).querySelectorAll('button'));

          buttonArray.forEach(totalButton => elementRemoveClass(totalButton, 'toggle'));

          elementAddClass(buttonArray[0], 'toggle');
        }
        resetTicketButton('adultBtn');
        resetTicketButton('youthBtn');
      }

    }
  })

}


//*** 좌석 선택 ***//
const theaterHandle = totalTicketCount => {

  //** 일반석 배열 생성 **//
  const economySeat = allSeatArray.filter(seatButton =>
    !seatButton.classList.contains('musseukbox')
    && !seatButton.classList.contains('handicap')
  );

  //** 모든 좌석 반복 **//
  allSeatArray.forEach(seatButton => {
    //티켓 개수 1개이상 선택 시 전체 좌석 open
    totalTicketCount > 0
      ? elementRemoveClass(seatButton, 'disabled')
      : elementAddClass(seatButton, 'disabled');
  });



  //** 일반석 **//
  economySeat.forEach(seatButton => {

    seatButton.addEventListener('click', event => {

      //* 비활성화 *//
      arrayAddClass(musseukboxSeatArray, 'disabled'); //머쓱박스석
      arrayAddClass(handicapSeatArray, 'disabled');   //장애인석
      chackHandicap.disabled = true; //장애인석 체크박스

      //* 좌석 선택 함수 *//
      seatCheckedHandler(event.target);

      event.target.classList.contains('clicked')
        ? economySeatCount += 1
        : economySeatCount -= 1

      console.log(economySeatCount);
      document.getElementById('amount').innerText(totalPrice);
    });
  });

  //** 머쓱박스석 **//
  musseukboxSeatArray.forEach(seatButton => {

    seatButton.addEventListener('click', event => {

      //* 비활성화 *//
      arrayAddClass(economySeat, 'disabled');       //일반석
      arrayAddClass(handicapSeatArray, 'disabled'); //장애인석

      //* 좌석 선택 함수 *//
      seatCheckedHandler(event.target);
    });
  });

  //** 장애인석 **//
  handicapSeatArray.forEach(seatButton => {

    seatButton.addEventListener('click', event => {

      //* 장애인석 체크 여부에 따라 알림창 *//
      chackHandicap.checked === false
        ? alert('선택하신 좌석은 장애인석으로 일반고객은 예매할 수 없는 좌석입니다')
        : //* 좌석 선택 함수 *//
        seatCheckedHandler(event.target);

    });
  });
}



//*** 인원 수 선택 ***//
const ticketHandle = type => {

  const buttonArray  = Array.from(document.getElementById(type).querySelectorAll('button')); //티켓 선택 버튼 배열 생성

  //인원수 기본 0명 설정
  elementAddClass(buttonArray[0], 'toggle');

  //** 어른, 어린이 버튼 배열 반복 **//
  buttonArray.forEach((countButton, index) => {

    //* 티켓 개수 클릭 이벤트 *//
    countButton.addEventListener('click', event => {

      //어른 or 아이 type 구별 후 각 티켓 개수 설정
      switch(type){
        case 'adultBtn'
        : adultTicketCount = index;
          break;

        case 'youthBtn'
        : youthTicketCount = index;
          break;

        default
        : console.log('typeError');
      }

      index === 0 && arrayRemoveClass(allSeatArray, 'clicked');

      //전체 toggle 삭제
      buttonArray.forEach(totalButton => elementRemoveClass(totalButton, 'toggle'));

      //내가 클릭한 버튼에 toggle 추가
      elementAddClass(event.target, 'toggle')

      //데이터 전달용 변수
      const totalTicketCount = adultTicketCount + youthTicketCount; //어른, 어린이 티캣 총 개수

      //* 장애인 체크박스 활성화 *//
      handicapAble(totalTicketCount);

      //* 좌석 선택 *//
      theaterHandle(totalTicketCount);
    });
  })
}
ticketHandle('adultBtn'); //어른
ticketHandle('youthBtn'); //어린이