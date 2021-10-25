// 이미지를 가져오는 시간이 있으니까 글씨가 먼저 뜨고 이미지가 나중에 뜬다
// 따라서 영화 정보를 위한 로딩과 이미지를 위한 로딩 - 두가지 로딩 요소가 필요하다

// 1. index.html 수정
  // 1-1. 영화정보 로딩과 포스터 로딩 요소 추가 및 클래스 이름 변경
  <body>
    <div class="movie">
      <div class="movie-loading"></div>
      <div class="movie__title"></div>
      <div class="movie__poster">
        <div class="poster-loading"></div>
        <img src="" alt="" />
      </div>
    </div>
  </body>

// 2. generateId.js 생성
  export default function () {
  // template string
  return `${new Date().getTime()}${Math.floor(Math.random() * 10000)}`
  }
  // 랜덤값을 만들어서 ID값으로 사용한다.
  // 곱하기 10000은 소수점표현에 사용된 마침표를 없애기 위해서이다

// 3. index.js 수정
  // 3-1. generateId.js 연결
    export { default as generateId } from "./generateId.js"

// 4. loader.js 수정
  // 4-1. generateId.js 가져와서 사용
    import   generateId  from "./generateId.js"
    const _id = generateId()
  // 4-2. 만들어진 아이디를 요소의 클래스로 넣기
  // _id의 시작값이 숫자이기 때문에 클래스명으로 사용할수 없음
  // 임의로 id-를 앞에 붙임 
    this.el.classList.add("my-loader", `id-${_id}`)
  // 4-3. style 부분 정의
    `.my-loader.id- ${ _id }`

// 5. main.js 수정
  // 두개의 로딩 요소 인스턴스 생성 및 start 메소드 시작
    const loader = new Loader({
      el: ".movie-loading",
      color: "red"
    })
    loader.start()

    const posterLoader = new Loader({
      el: ".poster-loading",
      color: "green"
    })
    posterLoader.start()

// 6. loadImg.js 생성
  export default function (url) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.src = url
      img.addEventListener('load', () => {
        resolve()
      })
    })
  }
  // index.js에서 export 연결
    export { default as loadImage } from "./loadImage.js"
  // main.js에서 import
    import { Loader, loadImage } from "./utils/index.js"