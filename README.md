# js-hompage
## nav bar 재활용 해서 사용 가능
### HMLHttpRequest 라이브러리 사용
### HMLHttpRequest는 원격지(혹은 로컬) 파일(json, text, html 등)을
> 1. const requestUrl = "가져오고자 하는 곳의 url, local or remote"
> 2. const request = new XMLHttpRequest();
> 3. request.open("GET", requestUrl, yes);
> 4. request.responsType = "text/plain"; 또는 request.responseType = "json";
> 5. request.send();
> 7. request.onload = function() {
      let responseData = request.response;
      creatSomeElementFunction(responseData);
     }
> 8. memnu를 구성하고 자 할때
>   function creatSomeElementFunction(responseData) { 
      document.querySelector("#id").outerHTML = responseData };

### onload는 데이터가 정상적으로 완료되야 실행함.
### 이헐게 해야 내부 던 외부 던 원하는 파일을 가져와서 쓸 수 있음

## 사례 
### 로컬의 nav 파일(HTML)을 지정하고, 모든 페이지에서 위의 js 파일을 불러옮.(위사례)
### 원격지의 json 파일을 불러와서 데이터를 활용해 폼페이지에서 활용함
