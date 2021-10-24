// 1. root폴더 아래에 utils 폴더생성
// 2. utils폴더 아래에 index.js와 loader.js 생성
// 3. index.js에 loader.js를 가져와 export 하는 코드 작성
  // class를 가져오므로 Loader와 같이 맨 앞은 대문자로 작성
  export {default as Loader} from "./loader.js"
// 4. loader.js 코드 작성
  // main.js에서 아래와 같이 인스턴스를 만드는데 이때 매개변수로 객체를 넣는다
  new Loader(
    // 객체데이터가 매개변수로 넣어짐
    {
      el: ".loading"
    }
  )
  // 그 객체는 loader.js의  constructor(options)의 options인 것이다.
  // 객체의 여러 데이터는 loader.js에서 객체 구조 분해할당을 통해 한꺼번에 가져와진다
  // style 태그를 만듦 / 내용은 `` 안에 작성함 - html 상의 head 태그 아래에 추가
  // loader.js 파일 전체
  export default class {
    constructor(options) {
      // 객체 구조 분해 할당
      const {el} = options
      // html 요소 가져오기
      this.loadingEl = document.querySelector(el)
      this.loadingEl.classList.add("my-loader")
      // style tag 생성 및 css 내용 추가
      const styleEl = document.createElement("style")
      styleEl.innerHTML =
        `.my-loader {
          width: 100px;
          height: 100px;
          border-width: 4px;
          border-style: solid;
          border-color: #333;
          border-radius: 50%;
          border-top-color: transparent;
          animation: loading-spin .8s linear infinite;  
        }
        @keyframes loading-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }`
      
      //head tag에 styleEl 추가 
      document.head.append(styleEl)
    }
  }
    
  //export default class 로 클래스를 만들었는데 이는 index.js에서 
  // {default as Loader} 라고 작성했기 때문dlek.
  // 만약 클래스 이름을 지정한 것을 그대로 사용하고자 한다면 아래와 같이 작성한다
  export {Loader} from "./loader.js" // index.js
  export  class Loader{ }          // loader.js

// 5. main.js에서 인스턴스 생성
    // 클래스를 만들고 모듈을 보낼 준비를 했으니 이제 사용을 하면 된다.
    // main.js에서 index.js를 import한다
    import { Loader } from "./utils/index.js"
    // 인스턴스를 생성한다. 이때 매개변수로 객체를 넣는다는 것을 잊지말자 
    // 이때 객체의 키명은 loader.js에서의 객체구조분해할당에서 사용하는 키 명과 동일해야한다

// 6. 화면 상에 로딩애니메이션이 돌아가면 성공!





