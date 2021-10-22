// 영화 정보를 콘솔에 출력
// html에
// 1.promise객체출력.js의 fetchMovie()함수 부분이 있어야 함께 동작 


// 1. 비동기 함수로 출력
 fetchMovie().then(movie => {
    console.log("영화정보 출력-비동기 함수", movie)
}) 

// 2. 즉시 실행함수로 출력
; (async function () {
    const movie = await fetchMovie()
    console.log("영화정보 출력-즉시 실행함수", movie)
})()