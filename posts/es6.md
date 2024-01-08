---
title: js es6 문법
date: 2024-01-08
category: dev
tag: javascript
---

전역으로 선언하면 window라는 최상단 object에 저장된다 (nodejs에서는 global)

- this
    1. 자신을 담고 있는 object
    2. 이벤트리스너 안에서 e.currentTarget 의미 (2번째 의미)
- 생성자 문법

    ```jsx
    function 기계(){
      this.이름 = 'Kim'
    }
    var 오브젝트 = new 기계();
    ```

- 화살표 함수 ()⇒

    **내부에서 this값을 쓸 때 밖에 있던 this값을 그대로 사용합니다**

    즉 어디서 사용하든 해당 화살표 함수가 정의된 위치와 상관 없이 사용된 위치가 this다

    ```jsx
    var 두배만들기 = (x) => { return x * 2 }
    var 두배만들기 = x => { return x * 2 }
    var 두배만들기 = x => x * 2 ;
    ```

- 백틱 사용하면

    엔터키 가능

    중간중간 변수 넣기 쉬움

    ```jsx
    // tagged literal
    var pants = 20;
    var socks = 100;
    `바지${pants} 양말${socks}`;

    function 해체분석기(글자들, 변수들1, 변수들2){
        console.log(글자들[1] + 변수들1 + 글자들[0] + 변수들2);
    }

    해체분석기`바지${pants} 양말${socks}`;
    ```

    이렇게 문자와 변수 건들수있음

- … (spread operator)

    말 그대로 흩뿌려준다 괄호를 제거해준다. 내부 요소들을 추출해준다고 생각하자

    ```jsx
    var 어레이 = ['hello', 'world'];
    console.log(어레이); // ["hello", "world"]
    console.log(...어레이); // hello world

    var 문자 = 'hello';
    console.log(...문자); // h e l l o

    var a = [1,2,3];
    var b = [4,5];
    var c = [...a, ...b]; // [1,2,3,4,5]
    var deepCopyA = [...a] // [1,2,3] 인 a와 같지만 깊은복사됨 내부요소만빼서 새로운걸 만듬

    var o1 = { a : 1, b : 3 };
    var o2 = { b : 2, ...o1 };
    console.log(o2); // {a: 1, b: 3} // 덮어씌워짐

    function 더하기(a,b,c){
       console.log(a + b + c)
    }
    var 어레이 = [10, 20, 30];
    더하기(...어레이); // 이렇게 함수에 array 내부요소 뽑아서 넣어줌
    ```

- apply/call

    ```jsx
    var person = {
        인사 : function(){
          console.log(this.name + '안녕')
        }
    }

    var person2 = {
        name : '손흥민'
    }

    person.인사.apply(person2); // person2 object안에서 인사 메서드를 사용한 것 처럼 된다
    													//  여기서 this는 person2가 되고요

    person.인사.apply(person2, [1,2,3]); // 파라미터로 배열도 넣을 수 있고
    person.인사.call(person2, 1,2,3); // 얜 안됨
    ```

- 함수 default 파라미터

    ```jsx
    // default parameter 문법
    function 더하기 (a, b = 10){ // 두번째 파라미터가 안 들어왔을 경우 10으로 간주가능
      console.log(a + b)
    }

    더하기(1);

    function 더하기 (a, b = 2 * a){ // 이렇게 연산자 다 사용가능
      console.log(a + b)
    }

    function 더하기 (a, b = 임시함수() ){ // 함수도 들어감 ㄷㄷ
      console.log(a + b)
    }
    ```

- 함수의 arguments

    ```jsx
    function 함수(a,b,c){
      console.log(arguments) // [2, 3, 4] // spread와 반대로 어레이로 싸매준다
    }

    함수(2,3,4);
    ```

    Rest 파라미터가 더 쉽게 사용가능하다. 알고만 있자

- Rest 파라미터 (나머지 파라미터)

    ```jsx
    function 함수2(...파라미터들){ // 이렇게 하면 어레이로 싸매준다!
      console.log(파라미터들)
    }

    함수2(1,2,3,4,5,6,7);

    ////주의사항///////////////////////
    //rest(나머지) parameter 이므로 마지막파라미터로만 가능하다
    function 함수2(a, ...파라미터들, b){ // 이렇게 중간에 못 넣는다
      console.log(파라미터들)
    }
    ```

- object의 멤버변수 추가

    cpp의 map처럼 추가 가능하다.

    ```jsx
    let obj = {a : 1};
    if (obj[a] > 0) {
    	obj[a]++;
    } else {
    	obj[a] = 1;
    }
    ```

- 얕은 복사

    js에서 number, string 빼고는 다 얕은복사다

    깊은 복사 해주고 싶으면 …(spread operator) 사용해서 새로 만들어야한다

- 원시타입과 참조타입

    기본적으로 다 c의 포인터처럼 해당 값을 가리키고있다

    때문에 재미있는 일이 일어난다.

    ```jsx
    let obj = { name : 'kim' };

    function change(param){
      param = { name : 'park' };
    }

    change(obj);
    console.log(obj.name); // kim
    ```

    ```jsx
    let obj = { name : 'kim' };

    function change(param){
      param.name = 'park';
    }

    change(obj);
    console.log(obj.name); // park
    ```

    c에서도 이중포인터로 받지 않으면 call by value로 받은 parameter에 대한 변경이 스코프 밖에선 영향 없는것처럼 이런 현상이 일어난다.

    자세한 설명 링크:[https://www.yalco.kr/@javascript/2-10/](https://www.yalco.kr/@javascript/2-10/)

- constructor

    함수랑 똑같다 단지 안에서 this 사용할 뿐

    ```jsx
    function Func(){
      this.name = 'Kim';
      this.age = 15;
    }
    let student = new Func();
    ```

- prototype

    prototype = 안 보이는 최상단 부모 클래스 멤버로 추가

    대충 최상단 추상클래스의 멤버로 추가한다고 보면 될 것 같다.

    현재 위치에서 해당 메서드/변수가 없을 경우 상위 클래스로 이동해 가면서 찾음

    ex) prototype 에 name 변수가 있고 현재 위치에도 name 변수가 있으면 현재 위치의 name이 호출됨

    ```jsx
    function Func(){
      this.name = 'Kim';
      this.age = 15;
    }
    Func.prototype.gender = 'male';
    let student = new Func();
    console.log(student); // Func { name: 'Kim', age: 15 } // gender는 없다
    console.log(student.gender); // 하지만 사용 가능
    console.log(student.__proto__); // 모든 prototype 출력 가능
    ```

    string, 대부분의 object의 경우 prototype으로 toString()메서드를 가지고 있다.


- class 키워드

    매우 쉽다.

    ```jsx
    class Parent {
      constructor(){
        this.name = 'Kim'
      }
    }

    var child = new Parent();
    ```

- extends / super

    ```jsx
    class 할아버지{
      constructor(name){
        this.성 = 'Kim';
        this.이름 = name;
      }
    }

    class 아버지 extends 할아버지{ // extends = 상속 키워드
      constructor(name){
        super(name); // 부모의 constructor호출 의미
        this.나이 = 50; // this 사용하려면 super 사용 해야함
      }
    }
    ```

- get/set

    get/set키워드 안붙히고 사용해도 되긴 하다

    하지만 키워드를 달고 만들면 그냥 멤버변수 .name이렇게 써도 getter가 호출된다.

    ```jsx
    class Person {
      constructor(name) {
        this._name = name;
      }

      get name() {
        return this._name.toUpperCase();
      }

      set name(newName) {
        this._name = newName.trim();
      }
    }

    let person = new Person("Alice");
    console.log(person.name); // 'ALICE', get name()이 호출됨
    person.name = " Bob ";
    console.log(person.name); // 'BOB', set name(newName)이 호출됨
    ```
- destructuring (구조 분해 할당)

    ```jsx
    function func(obj) { // 이렇게 묶을 수 있다
      console.log(obj.a)
      console.log(obj.b)
      console.log(obj.c)
    }

    func({a : 1, b : 2, c : 3})
    ```

    ```jsx
    function func(arr) { // 어레이도 가능
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
      }
    }

    func([1, 2, 3, 4, 5]);
    ```

- promise

    성공 시 .then

    실패 시 .catch

    ```jsx
    var 이미지로딩 = new Promise(function(성공, 실패){
      var img = document.querySelector('#test');
      img.addEventListener('load', function(){
          성공();
      });
      img.addEventListener('error', function(){
          실패();
      });

    });

    이미지로딩.then(function(){
      console.log('성공했어요')
    }).catch(function(){
      console.log('실패했어요')
    })
    ```

- async/await

    함수 앞에 async 붙히면 그 함수 자체를 promise로 만들어준다.

    ```jsx
    async function 더하기(){
      1 + 1
    }

    더하기().then(function(){ // 즉 then 사용 가능
      console.log('더하기 성공했어요')
    });
    ```

    ```jsx
    async function 더하기(){
      var 어려운연산 = new Promise((성공, 실패)=>{
        var 결과 = 1 + 1;
        성공(결과);
      });
      var 결과 = await 어려운연산; // 해당 연산을 끝날때까지 block된다
      console.log(결과); // 대신 await은 실패 시 error throw되면서 멈춘다.
    }
    더하기();
    ```

    ```jsx
    async function 더하기(){
      var 어려운연산 = new Promise((성공, 실패)=>{
        실패();
      });
      try {  var 결과 = await 어려운연산 } // 안 멈추고 싶으면 이렇게 try 사용해주자
      catch { 어려운연산 Promise가 실패할 경우 실행할 코드 }
    }
    ```

- 반복문 문법

    ```jsx
    // for in 문법
    var 오브젝트 = { name : 'Kim', age : 30 };
    for (var key in 오브젝트) {
      console.log(오브젝트[key]);
    }

    class 부모 {

    }
    부모.prototype.name = 'Park';

    var 오브젝트 = new 부모();

    for (var key in 오브젝트) {
      console.log(오브젝트[key]); // prototype도 뽑아줌
    }
    ```

    ```jsx
    // for of 문법
    var 어레이 = [2,3,4,5];
    for (var 자료 of 어레이) { // cpp의 auto키워드와 비슷하다
      console.log(자료);
    }
    ```

- map/set

    ```jsx
    var person = new Map();
    person.set('age', 20);

    person.get('age'); //자료 꺼내는 법
    person.delete('age'); //자료 삭제하는 법
    person.size; //자료 몇갠지 알려줌

    //Map자료 반복문 돌리기
    for (var key of person.keys() ){
      console.log(key)
    }

    //자료를 직접 집어넣고 싶으면

    var person = new Map([
      ['age', 20],
      ['name', 'Kim']
    ]);
    ```

    ```jsx
    var 출석부2 = new Set([ 'john' , 'tom', 'andy', 'tom' ]);

    출석부2.add('sally'); //자료더하기
    출석부2.has('tom'); //자료있는지 확인
    출석부2.size;  //자료 몇갠지 세기

    var 출석부 = [ 'john' , 'tom', 'andy', 'tom' ];

    var 출석부2 = new Set(출석부); //복사생성자도 먹는구만

    출석부 = [...출석부2]  //Set을 Array로 바꾸기
    ```
    