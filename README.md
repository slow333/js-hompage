# js-hompage
## nav bar 재활용 해서 사용 가능
> 
> 1. const requestUrl = "가져오고자 하는 곳의 url, local or remote"
> 2. const request = new XMLHttpRequest();
> 3. request.open("GET", requestUrl, yes);
> 4. request.send();
> 5. request.onload = function() {
      let responseData = request.response;
      creatSomeElementFunction(responseData);
     }
> 7. function creatSomeElementFunction(responseData) { ...do somethins };
