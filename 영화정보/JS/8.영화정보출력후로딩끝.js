// 영화정보를 가져와 화면에 표시할 준비가 끝나면 로딩 애니메이션이 끝나야한다.

// 1. loader.js 

    //1.1 styleEl.innerHTM = 부분 추가 / css 설정
    //로딩 요소에 클래스 start가 붙으면 보이고 없으면 안 보이게 함
      `.my-loader {
        display: none;
      }
      .my-loader.start {
        display: block;
      }`

  // 1.2 프로토타입 메소드 추가 / js 수정
    // 클래스여부에 따라 화면에 보일지 말지 css를 정의했으니
    // 클래스를 넣고 빼는 기능이 필요하다 - js
    // main.js에서 사용될 메소드를 추가한다
      start(){
        this.el.classList.add("start")
      }
      stop(){
        this.el.classList.remove("start")
      } 
// 2. main.js 

  // main.js에서 아래와 같이 인스턴스명.메서드명으로 사용하면 된다 
  // 기존의 new 로만 만든 인스턴스에 이름을 지어주어야함 (아래와 같이 const loader = )
    const loader = new Loader({
      el: ".loading",
      color:"red"
    })
  // 아래 코드 입력시 로딩 애니메이션이 보이고
    loader.start()
  // 이후 아래 코드 입력시 로딩 애니메이션이 안 보이면 잘 된 것
    loader.stop()
  // 당연히 loader.start()는 fetchMovie()를 실행하기 전에 실행되어야 하므로
  // fetchMovie() 윗부분에 작성해야한다

  // 이제 영화 정보 준비가 되는 동안만 애니메이션이 보이고
  // 영화 정보를 다 가져오면 애니메이션이 안 보이도록 설정하면 된다.
  // 개발자 도구 - 네트워크 - Fast3G 로 변경하면 요소가 보였다가 사라지는 것을 볼 수 있다

  // 로딩 애니메이션이 사라지는 것은 정보를 가져오든 못 가져왔든 사라져야하므로
  // finally에 넣는다 
    .finally(() => {
      loader.stop()
      console.log("finally-then-catch 결과")
    }
