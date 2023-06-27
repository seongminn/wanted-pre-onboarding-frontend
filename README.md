# 원티드 6월 프론트엔드 인턴십 - 사전 과제

## 소개

최성민

## 프로젝트 실행 방법

`npm run start`

## 데모 영상

배포 링크로 데모 영상을 대체합니다.

---

**리다이렉트**

![image](https://github.com/seongminn/wanted-pre-onboarding-frontend/assets/88662637/a1865d9b-ac50-4a0c-b933-a53421b54361)

PrivateRouter / PublicRouter 컴포넌트를 생성하여, token 검사를 한 뒤 적절한 path로 리다이렉팅
이 때, react-router-dom/Navigate 컴포넌트의 replace 옵션을 이용하여 history stack이 쌓이지 않도록 하였음

**auth page**

![image](https://github.com/seongminn/wanted-pre-onboarding-frontend/assets/88662637/8808a8f6-7c56-4b6e-867d-5c97d8be6b1f)

기본적으로 signin page와 signup 페이지는 구성이 동일함(호출하는 api만 다름)
따라서 Form 컴포넌트를 만들고 변경이 필요한 내용만 props로 전달받아서 렌더링 하도록 하였음

이 때, AuthValidator라는 유틸 함수를 생성하여 이메일 혹은 비밀번호가 유효성 검사를 통과하였는지 boolean값을 전달

**Toast Message**

![image](https://github.com/seongminn/wanted-pre-onboarding-frontend/assets/88662637/4dbbe0a3-69b7-4205-a722-a3908edc8a6a)

Context Api를 통해 전역적으로 공유하는 토스트 메세지를 생성
이를 통해 유저가 발생시키는 이벤트에 반응하도록 하였음

**Token**

![image](https://github.com/seongminn/wanted-pre-onboarding-frontend/assets/88662637/efd51cdb-42b2-48c5-82e3-26da1c4846e8)
![image](https://github.com/seongminn/wanted-pre-onboarding-frontend/assets/88662637/23d20465-7cab-43c8-8e7e-2a4c7298dda0)

토큰을 관리하는 유틸함수를 생성하여 로그인 시 간편하게 쿠키를 설정해줄 수 있음

**constants**

변하지 않는 값은(ex. 에러 메세지, route 경로, input validator 내용 등) `constants` 디렉토리에서 별도로 관리

**Lazy Loading**

![image](https://github.com/seongminn/wanted-pre-onboarding-frontend/assets/88662637/9146cfbb-1ddb-4b69-85b1-6da30e6b9427)

React18 버전에 추가된 Suspense와 Lazy Loading을 도입하여 UX를 개선하려는 노력

**ESLint 적극 활용**

![image](https://github.com/seongminn/wanted-pre-onboarding-frontend/assets/88662637/0afb42a6-a2a5-4574-b0ee-4c999db2509c)

컨벤션을 결정하는 것은 협업 시 아주 중요하다고 생각하여 ESLint를 통해 다양한 옵션을 설정했음


**Todo State**

![](https://github.com/seongminn/wanted-pre-onboarding-frontend/assets/88662637/ca2c0ce2-cd17-460b-90b2-a2f0a7fea134)
Reducer를 사용하려던 흔적... 포기하고 핸들러로 수정했습니다..

todos, setTodos를 이곳저곳으로 뿌려줘야 했기 때문에 props drilling이 발생한다고 생각하여 useReducer를 사용하려 했지만 값이 원하는 대로 편하지 않았고, 시간이 부족하여 그대로 제출했음
해당 부분에 대해 아쉬움이 남아 팀원들과 이야기해보고 싶었음!

--

## 🚀 기능 요구 사항

### 1. 회원가입 / 로그인

**1-1. 회원가입**

경로: `/signup`

- [x] 이메일 입력창
  - 이메일 input에 `data-testid="email-input"` 속성을 부여할 것
- [x] 비밀번호 입력창
  - 패스워드 input에 `data-testid="password-input"` 속성을 부여할 것
- [x] 회원가입 제출 버튼
  - 회원가입 button에 `data-testid="signup-button"` 속성을 부여할 것

**1-2. 로그인**

경로: `/signin`

- [x] 이메일 입력창
  - 이메일 input에 `data-testid="email-input"` 속성을 부여할 것
- [x] 비밀번호 입력창
  - 패스워드 input에 `data-testid="password-input"` 속성을 부여할 것
- [x] 회원가입 제출 버튼
  - 회원가입 button에 `data-testid="signin-button"` 속성을 부여할 것

**1-3. 공통**

- [x] 유효성 검사 기능
  - [x] 이메일에 `@` 포함
  - [x] 비밀번호 길이는 8글자 이상
  - [x] 입력된 이메일과 비밀번호가 유효성 검사를 통화하지 못할 시 button에 `disabled` 속성 부여
- [x] 회원가입 페이지에서 회원가입 성공 시 `signin` 페이지로 이동
- [x] 로그인 페이지에서 로그인 성공 시 `todo` 페이지로 이동
  - [x] 이 때 응답 받은 JWT를 로컬 스토리지에 저장
- [x] 로그인 여부에 따른 리다이렉트 기능 구현
  - [x] 토큰이 있는 채로 `signin` 혹은 `signup` 페이지에 진입할 시 `todo` 페이지로 이동
  - [x] 토큰이 없는 채로 `todo` 페이지에 진입할 시 `signin` 페이지로 이동

### TODO LIST

경로: `/todo`

- [x] `todo` 경로 진입 시 투두 리스트의 목록 표시
  - 투두 리스트의 목록에는 다음과 같은 것들이 포함되어야 한다.
  - [x] TODO의 내용 (TODO는 `li` 태그를 이용해 감쌀 것)
  - [x] TODO의 완료 여부 (완료 여부는 `<input type='checkbox' />`를 통해 표시할 것)
- [x] 새로운 TODO를 입력할 수 있는 `input`과 추가 `button`을 생성
  - [x] 새로운 TODO 입력 `input`에는 `data-testid="new-todo-input"` 속성 부여
  - [x] TODO 추가 버튼에는 `data-testid="new-todo-add-button"` 속성 부여
  - [x] 이 때, 추가 버튼을 클릭한 뒤 새로고침 해도 추가한 TODO가 보여야 한다.
- [x] 체크박스를 통해 TODO의 완료 여부를 수정할 수 있다.
- [x] TODO 우측에 수정 버튼과 삭제 버튼 생성
  - [x] 수정 버튼에는 `data-testid="modify-button"` 속성 부여
  - [x] 삭제 버튼에는 `data-testid="delete-button"` 속성 부여
- [x] 삭제 버튼 클릭 시 해당 TODO 삭제
- [x] 투두 리스트 수정 기능 구현
  - [x] 수정 버튼을 클릭 시 수정 모드 시작
  - 수정 모드에서는 다음과 같은 기능을 사용할 수 있다.
  - [x] TODO의 내용 변경
    - [x] 이 때, TODO의 내용이 `input` 창 안에 입력된 형태로 변경
    - [x] 수정 `input` 창에는 `data-testid="modify-input"` 속성을 부여
  - [x] 수정 모드에서는 `input`의 우측에 제출과 취소 버튼을 표시
    - [x] 제출버튼에는 `data-testid="submit-button"` 속성을 부여
    - [x] 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
  - [x] 제출 버튼 클릭 시 수정된 내용을 업데이트하고, 취소버튼 클릭 시 수정한 내용 초기화 및 수정모드 탈출

