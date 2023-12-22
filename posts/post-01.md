---
title: blocking / nonblocking vs sync / async
date: 2021-12-24
category: dev
tag: CS
---

Blocking/Nonblocking:

◦ Blocking은 작업이 완료될 때까지 호출자가 제어권을 유지하는 것을 의미한다.

◦ Nonblocking은 작업을 호출한 후 즉시 제어권을 반환하여 다른 작업을 수행할 수 있는 것을 의미한다.

◦ Blocking 방식은 호출자가 해당 작업이 완료될 때까지 기다려야 하므로 다른 동작이 중단된다.

◦ Nonblocking 방식은 호출자가 다른 작업을 수행하면서도 해당 작업의 상태를 주기적으로 확인할 수 있다.

Sync/Async:

◦ Synchronous는 호출자가 직접 작업의 상태를 정기적으로 확인하는 방식이다.

◦ Asynchronous는 알림, 콜백(callback) 또는 이벤트 핸들러 등의 메커니즘으로 결과나 알림을 받아 처리하는 방식이다.

◦ Synchronous 방식에서는 호출자가 직접 상태를 확인하기 위해 폴링(polling) 루프나 반복문 등으로 주기적으로 체크해야 한다.

◦ Asynchronous 방식에서는 비동기적인 알림 메커니즘이 사용되어 결과나 이벤트가 발생하면 해당 정보를 전달받아 처리할 수 있다.

매우 쉽게 표현하자면

1.  blocking sync
    -   우리가 흔히 볼 수 있는 시스템콜 기본값이다.
    -   해당 시스템콜이 완료되기 전까지 폴링(정기적인 상태 확인)하면서 기다린다.
2.  nonblocking sync
    -   다른 작업을 하면서 시스템콜이 완료 되었는지 폴링한다.
    -   예를들어 오래 걸리는 작업일 경우 소요 시간을 찍어줄 수 있다. (시간 찍고 물어보고 시간 찍고 물어보고 반복)
3.  blocking async
    -   아무것도 못하면서 시스템의 알람(이벤트)을 기다린다.
    -   ++ 사실상 없는 개념이다. 카페 진동벨을 들고 앞에서 기다리는 사람은 없는 것 처럼..... <- 개무섭
4.  nonblocking async
    -   다른 작업을 하면서 시스템의 알람(이벤트)을 기다린다.

요약하자면

**blocking/nonblocking 은 제어권이 요청 작업이 완료될 때까지 없냐/있냐**

**sync/async 는 상태를 정기적으로 직접 확인하느냐/이벤트 같은 알림으로 받느냐**

해당 개념 이제 진짜 확실히 이해했다. 이렇게 정리하고 나면 참 쉬워보이는데 왜이리 이해가 안됐을까…

만약 이해가 안된다면 두 키워드 (제어권, 폴링/알림) 에 집중해 다른 글들을 읽어보자.

내 경우엔 그림으로 보는게 이해하기 쉬웠다. 

[https://www.youtube.com/watch?v=oEIoqGd-Sns&t=38s](https://www.youtube.com/watch?v=oEIoqGd-Sns&t=38s)

<iframe src="https://www.youtube.com/embed/oEIoqGd-Sns" width="860" height="484" frameborder="0" allowfullscreen="true"></iframe>

매우 쉽게 설명해주심
