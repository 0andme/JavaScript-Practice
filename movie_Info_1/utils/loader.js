import   generateId  from "./generateId.js"
export default class {
  constructor(options) {
    // 객체 구조 분해 할당
    const {
      el = null,
      size = 100,
      width = 4,
      color = "#333"
    } = options
    const _id = generateId()
    // html 요소 가져오기
    this.el = document.querySelector(el)
    this.el.classList.add("my-loader", `id-${_id}`)
    // style tag 생성 및 css 내용 추가
    const styleEl = document.createElement("style")
    styleEl.innerHTML =
      `.my-loader.id-${_id} {
        display: none;
        width: ${size}px;
        height: ${size}px;
        border-width: ${width}px;
        border-style: solid;
        border-color: ${color};
        border-radius: 50%;
        border-top-color: transparent;
        animation: loading-spin .8s linear infinite;
      }
      .my-loader.start {
        display: block;
      }
      @keyframes loading-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }`

    //head tag에 styleEl 추가 
    document.head.append(styleEl)
  }
  // 프로토타입 메소드
  start(){
    this.el.classList.add("start")
  }
  stop(){
    this.el.classList.remove("start")
  }
}