# Introduction

> data.popong.com의 데이터는 다음의 서비스들에 사용되었습니다:
>
> - **2015**
>     - [cywc](http://cywc.github.io/): 정재계 인맥/혼맥 DB.
>         [[twitter]](https://twitter.com/cywcan)
> - **2014**
>     - [Watchbly](https://play.google.com/store/apps/details?id=kr.applepi.watchassembly): 국회의원 성적표, 토론, 청원, 프로필 등 다양한 기능의 서비스.
>         [[facebook]](https://www.facebook.com/watchbly/)
> - **2013**
>     - [지켜본다](https://play.google.com/store/apps/details?id=org.sicamp.isee): 당신이 뽑은 정치인, 그 공약 잘 지키고 있는지 지켜보자.
>         [[slides]](http://www.slideshare.net/daumfoundation/ss-28241165)
>     - [대한민국 정치의 모든 것](http://pokr.kr): 대한민국 역대 국회의원, 의안, 회의록 데이터베이스.
>     - [피드백 7](http://www.feedback7.com): 대통령, 장관, 국회의원 등이 투자 및 베팅의 대상이 되는 게임.

현재 국회 홈페이지는 매일 새로 발의되는 의안 데이터를 수집하기 힘든 구조로 되어 있습니다.
한 번에 처리되는 의안의 양도 많아서 사람이 일일이 다운로드 받고 분석하기에 번거롭습니다.
또한, 의원 및 후보자 데이터에는 고유 식별자(ID)가 부여되어 있지 않아 동명이인 등을 처리하는데 어려움이 많습니다.
따라서 정치 데이터를 이용하여 연구 및 개발을 하려는 경우, 실제로 연구개발에 투입되는 시간 만큼, 혹은 그 이상으로 데이터를 준비하는데 많은 시간과 비용이 들고 있습니다.

그래서 저희는, 매일 선관위와 국회 등 국가 공식 홈페이지에 업데이트 되는 정보를 수집하는 [자동화 툴](https://github.com/teampopong/crawlers)을 만들었습니다.
수집한 데이터는 객체마다 고유 ID를 부여하고 객체 간 유기적으로 연결하는 등 연구자 및 개발자의 편의를 위한 전처리 과정을 거친 후 데이터베이스에 저장하였습니다.
데이터는 아래의 두 가지 형태로 제공됩니다.

- <a href="#batch-data">Batch data</a>: 데이터 덩어리. 정치 데이터를 이용한 연구와 실험을 할 경우 적합합니다. 한번에 다운받을 수 있고, CSV, JSON 등 편리한 포맷으로 정리되어있다는 장점이 있습니다. API를 사용하려는 경우에도, 미리 Batch data를 이용해 사전 실험을 해본 후 API에서 적합한 endpoint를 찾아도 됩니다.
- <a href="#open-api-v0-1">Open API</a>: 팀포퐁 서버와 실시간 통신을 할 수 있는 규격. 웹서비스나 앱 등 데이터를 꾸준히 업데이트해야 할 경우에 유용합니다.

저희는 이 데이터가 더 많은 시민들의 손에서 다루어질 때 가장 유용하게 쓰일 수 있고 빛이 날 것이라고 생각합니다.
입법 데이터는 본디 시민의 것이기 때문입니다.
이에, 연구 및 개발을 위한 데이터를 배포하니 많이 이용해주시기 바랍니다.

<aside class="warning">
이곳의 모든 데이터는 <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a> 라이센스 하에서, 출처를 <a href="http://data.popong.com">data.popong.com</a>로 명시하기만 하면 자유롭게 사용하실 수 있습니다.
</aside>

<aside class="notice">
사용시 문의사항이나 불편한 점은 <a href="https://github.com/teampopong/popong-api/issues">이 곳에 질문을 남겨주세요</a>.
</aside>

