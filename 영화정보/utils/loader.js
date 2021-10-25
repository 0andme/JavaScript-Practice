export default class {
  constructor(options) {
    // 객체 구조 분해 할당
    const {
      el = null,
      size = 100,
      width = 4,
      color = "#333"
    } = options
    // html 요소 가져오기
    this.loadingEl = document.querySelector(el)
    this.loadingEl.classList.add("my-loader")
    // style tag 생성 및 css 내용 추가
    const styleEl = document.createElement("style")
    styleEl.innerHTML =
      `.my-loader {
        width: ${size}px;
        height: ${size}px;
        border-width: ${width}px;
        border-style: solid;
        border-color: ${color};
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