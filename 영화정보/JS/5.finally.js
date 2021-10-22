// 1. finally 메소드 사용
// 1-1. then-catch문 아래 코드로 변경
fetchMovie()
    .then(movie => {
        console.log("영화정보 출력-비동기 함수", movie)
    })
    .catch((errorMsg) => {
        console.log(errorMsg)
        const errEl = document.createElement('div')
        errEl.textContent = errorMsg
        document.body.append(errEl)
    })
    .finally(()=>{
        console.log("finally-then-catch 결과")

    })
// 1-2. async-await 문 아래 코드로 변경
;(async function () {
    try {
        const movie = await fetchMovie()
        console.log("영화정보 출력-즉시 실행함수", movie)
    } catch (errorMsg){
        console.log(errorMsg)
        const errEl = document.createElement('div')
        errEl.textContent = errorMsg
        document.body.append(errEl)

    }finally{
        console.log("finally-async-await 결과")
    }
})()
// then과 catch 중 하나가 실행되는 구조인데 finally메소드는
// [then이 실행되든 catch가 실행되든][정상실행이든 오류발생이든] 무조건 실행되는 메소드이다.
// 항상 실행되기 때문에 [로딩이 되든 안되든 무조건 실행해야하는] [로딩을 끄는] 코드를 넣는다 
// finally는 비동기와 상관없다

