<h1 align="center">Uket, 대학 축제﹒공연에 대한 사전 티켓팅 서비스</h1>
<p align="center">
<img src="https://github.com/user-attachments/assets/0a1acd7f-1447-40d2-8af5-a907065b725e"/>
</p>

## 레포지토리 이전
레포지토리가 이전되었습니다. [새로운 레포지토리](https://github.com/DCNJ-Uket/Uket-FE-v2)
- 어드민 서비스 전환율: 100%
- 유저 서비스 전환율(Vite+React -> NextJS): 진행중

## 개요
새롭게 시작하는 학교생활에서 빼놓을 수 없는 즐거움, 바로 대학 축제입니다.
하지만 축제에 참여해 본 경험이 있다면, 연예인 축하 공연을 보기 위해 몇 시간씩 긴 줄을 서야 했던 기억이 있을 거예요. 다양한 행사들이 준비되어 있음에도, 긴 대기 시간 때문에 축제를 온전히 즐기지 못하는 점은 늘 아쉬움으로 남죠.

저희는 <strong>“대기 순번을 예약해서 웨이팅을 줄이면 어떨까?”</strong> 라는 생각에서 [Uket 프로젝트](https://uket.site/)를 시작했습니다.

물론, 이 서비스가 실제로 축제의 불편함을 해결할 수 있는지 검증이 필요했고, 대규모 축제 환경에서도 안정적으로 운영될 수 있는지도 보여줘야 했습니다. 이를 위해 작은 규모의 행사부터 시작해 서비스의 안정성과 가능성을 테스트하기로 했습니다.

Uket의 첫 출발은 **건국대학교 밴드 동아리 '소리터'** 와 함께했습니다.
1월 10일 예매를 시작해 1월 17일 공연까지 성공적으로 서비스를 운영했으며, 총 122명의 사용자가 서비스를 이용했고 이 중 약 67명이 실제 공연에 참석했습니다.

|공연일 당시 공연 장소|공연 입장 #1|공연 입장 #2|공연 입장 #3|
|--|--|--|--|
|![IMG_0504](https://github.com/user-attachments/assets/370736de-6c52-49b2-ab66-f33de55026d8)|![IMG_0501](https://github.com/user-attachments/assets/6f406824-8172-4711-be79-cb116cda8930)|![IMG_0503](https://github.com/user-attachments/assets/1f7acf3a-3619-4eb3-9a20-b663fb52865f)|![IMG_0502](https://github.com/user-attachments/assets/facfd599-1f71-4a35-8fcf-c4a19a746793)|

## 기간
2024.04 - <strong color="dodgerblue">Now</strong>
- 2025.01: 건국대학교 밴드 동아리 **'소리터'** 공연에서 첫 서비스 운영
- 2025.02 - Now: 새로운 기획자 합류로 Uket의 방향성 논의
## 서비스 소개
### 유저 서비스
<figure class="half">
  <img src="https://github.com/user-attachments/assets/1c3a81b8-863b-4eda-a606-9c73972706c0" alt="랜딩 페이지" width="32%" />
  <img src="https://github.com/user-attachments/assets/158c29fa-a2a0-4a30-9323-cd7caf655173" alt="공연 선택" width="32%" />
  <img src="https://github.com/user-attachments/assets/be17dd46-f79e-4400-98e6-20502d6c5b7e" alt="공연 정보 확인" width="32%" />
</figure>
<figure>
  <img src="https://github.com/user-attachments/assets/38ba2e40-575f-4e08-8389-6b083b427bf7" alt="티켓 구매" width="32%" />
  <img src="https://github.com/user-attachments/assets/87b4beca-6961-4a19-80cb-8b8d63227b71" alt="내 티켓 확인" width="32%" />
  <img src="https://github.com/user-attachments/assets/6ff22ac5-e490-499d-97f6-37fd66943635" alt="내 정보 확인" width="32%" />
</figure>

### 어드민 서비스
<img src="https://github.com/user-attachments/assets/a2ddcc0e-e750-4570-bfaf-c7cc98769e9f" alt="예매 내역 관리" />
<img src="https://github.com/user-attachments/assets/f8237752-6ad2-448a-8ed6-fc7ce3c037d4" alt="실시간 입장 조회" />
<figure>
  <img src="https://github.com/user-attachments/assets/25b8be23-f6f6-43ad-b056-f95250e4e55d" alt="qr 코드 인식" width="50%" />
</figure>

## 서비스 목표
- **서비스 안정성 검증**
- **실 사용자 확보 및 피드백을 통한 선순환**
## Frontend 기술적 목표
- **근거 기반의 비판적인 기술 도입**
  - 단순한 호기심을 넘어, '왜'를 고민한다.
  - 최대한 이 기술이 왜 필요하고 무엇을 해결하고자 하는지를 고민하여 도입하여, 오버엔지니어링을 줄인다.
- **유연하고 확장성이 좋은 코드**
  - 기능 구현에 그치지 않고, 설명 가능한 코드를 작성하며 컴포넌트의 책임을 명확히 분리한다.
  - 변화에 유연하게 대처할 수 있도록 유지보수에 용이한 코드를 작성한다.
- **사용자 경험 개선**
  - 단순히 주어진 기획 요구사항을 구현하는 것을 넘어서, 서비스 방향성과 사용성에 대해 고민하여 의견을 적극 제시한다.
  - 개발자 이전에 사용자 입장으로 항상 생각하여, 이미지 최적화 및 코드 분할 등을 통한 성능 최적화로 사용자 경험을 개선한다.
  - UI의 적절한 배치, 스켈레톤 등 UI 관점에서도 고민하여 개선한다.
- **API 관리 및 효율성 개선**
  - 캐싱을 적절히 활용하여, API 호출 비용을 최소화한다.
  - 에러 옵션을 적극 활용하여, 다양한 API 호출에 대한 에러 처리와 예외 처리 로직을 구현한다. (확장성 및 유지보수성)
  
## 기술적 이슈 해결 과정
- [ErrorBoundary 단에서 동적 쿼리 키에 의존하는 에러 초기화](https://coggiee.medium.com/errorboundary%EC%97%90%EC%84%9C-%EB%8F%99%EC%A0%81-%EC%BF%BC%EB%A6%AC-%ED%82%A4%EC%97%90-%EC%9D%98%EC%A1%B4%ED%95%98%EB%8A%94-%EC%97%90%EB%9F%AC-%EC%9E%AC%EC%84%A4%EC%A0%95-e517a061a57d)
- [문제를 단순하게 생각하고 해결하기, useNavigate의 state 옵션을 활용하여 중복 회원가입 방지](https://coggiee.medium.com/uket-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A7%84%EC%9E%85-%EC%97%AC%EB%B6%80-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0-f511356dd0e0)
- [컴포넌트 책임 분리를 통한 유지보수성 향상 - 선언형 UI](https://coggiee.medium.com/%EC%84%A0%EC%96%B8%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%A0%81%EC%9A%A9-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EA%B3%A0%EC%B0%B0-5fe4dd12bb37)
- [개발환경에 따른 이미지 최적화 적용 및 외부 이미지 처리](https://coggiee.medium.com/png-to-webp-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%A0%81%EC%9A%A9-f2c2c45d6f32)
- [refetchOnMount에 속고 있었다. staleTime과 gcTime이 숨긴 비밀](https://coggiee.medium.com/dadf-12a258078112)
- [NextJS 이미지 최적화 비용 한계? sharp로 직접 구현](https://coggiee.medium.com/nextjs%EC%9D%98-%EB%82%B4%EC%9E%A5-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%9D%89%EB%82%B4%EB%82%B4%EA%B8%B0-67cd2105136c)
- [분산된 에러 처리 방식(ErrorBoundary 및 Toast UI), 중앙 집중화로 개선](https://coggiee.medium.com/error-handling-error-boundary-toast-ui-0f9704e0a824)

## 개발 컨벤션
> [위키](https://github.com/DCNJ-Uket/Uket-FE/wiki/%5BUket%E2%80%90FE%5D-%EA%B0%9C%EB%B0%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)에서 확인하실 수 있습니다.
## 기술 스택
> 도입 근거는 ['위키'](https://github.com/DCNJ-Uket/Uket-FE/wiki/%5BUket%E2%80%90FE%5D-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D-%EB%B0%8F-%EA%B7%BC%EA%B1%B0)에서 확인하실 수 있습니다.

[![My Skills](https://skillicons.dev/icons?i=ts,react,vite,next)](https://skillicons.dev)
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react_query.png" alt="reactquery" width="48" />
[![My Skills](https://skillicons.dev/icons?i=pnpm,tailwindcss,vercel)](https://skillicons.dev)
<div>
<img src="https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png" alt="turborepo" width="48" />
<img src="https://commitlint.js.org/assets/icon.png" alt="turborepo" width="48" />
<img src="https://avatars.githubusercontent.com/u/25822731?s=200&v=4" alt="prettier" width="48" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/648px-ESLint_logo.svg.png" alt="eslint" width="48" />
<img src="https://github.com/DCNJ-Uket/Uket-FE/assets/101445377/3ba615a2-4475-42e7-abf2-f3fae29aadda" alt="husky" width="48" /></div>

## FE Contributors
|**문휘식**|**손수빈**|
|--|--|
| <a href="https://github.com/coggiee"><img src="https://avatars.githubusercontent.com/u/101445377?v=4" alt="문휘식" width="100px"/></a> | <a href="https://github.com/SonSuBin129"><img src="https://avatars.githubusercontent.com/u/81215596?v=4" alt="손수빈" width="100px"/></a> |
