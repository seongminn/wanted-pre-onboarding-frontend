# 원티드 6월 프론트엔드 인턴십 - 사전 과제

## 소개

최성민

## 프로젝트 실행 방법

`npm run start`

## 데모 영상

배포 링크로 데모 영상을 대체합니다.

---

## 🚀 기능 요구 사항

### 1. 회원가입 / 로그인

**1-1. 회원가입**

경로: `/signup`

- [ ] 이메일 입력창
  - 이메일 input에 `data-testid="email-input"` 속성을 부여할 것
- [ ] 비밀번호 입력창
  - 패스워드 input에 `data-testid="password-input"` 속성을 부여할 것
- [ ] 회원가입 제출 버튼
  - 회원가입 button에 `data-testid="signup-button"` 속성을 부여할 것

**1-2. 로그인**

경로: `/signin`

- [ ] 이메일 입력창
  - 이메일 input에 `data-testid="email-input"` 속성을 부여할 것
- [ ] 비밀번호 입력창
  - 패스워드 input에 `data-testid="password-input"` 속성을 부여할 것
- [ ] 회원가입 제출 버튼
  - 회원가입 button에 `data-testid="signin-button"` 속성을 부여할 것

**1-3. 공통**

- [ ] 유효성 검사 기능
  - [ ] 이메일에 `@` 포함
  - [ ] 비밀번호 길이는 8글자 이상
  - [ ] 입력된 이메일과 비밀번호가 유효성 검사를 통화하지 못할 시 button에 `disabled` 속성 부여
- [ ] 회원가입 페이지에서 회원가입 성공 시 `signin` 페이지로 이동
- [ ] 로그인 페이지에서 로그인 성공 시 `todo` 페이지로 이동
  - [ ] 이 때 응답 받은 JWT를 로컬 스토리지에 저장
- [ ] `signin` 혹은 `signup` 페이지에 진입 시 로컬 스토리지에 토큰이 있다면
- [ ] 로그인 여부에 따른 리다이렉트 기능 구현
  - [ ] 토큰이 있는 채로 `signin` 혹은 `signup` 페이지에 진입할 시 `todo` 페이지로 이동
  - [ ] 토큰이 없는 채로 `todo` 페이지에 진입할 시 `signin` 페이지로 이동

### TODO LIST

경로: `/todo`

- [ ] `todo` 경로 진입 시 투두 리스트의 목록 표시
  - 투두 리스트의 목록에는 다음과 같은 것들이 포함되어야 한다.
  - [ ] TODO의 내용 (TODO는 `li` 태그를 이용해 감쌀 것)
  - [ ] TODO의 완료 여부 (완료 여부는 `<input type='checkbox' />`를 통해 표시할 것)
- [ ] 새로운 TODO를 입력할 수 있는 `input`과 추가 `button`을 생성
  - [ ] 새로운 TODO 입력 `input`에는 `data-testid="new-todo-input"` 속성 부여
  - [ ] TODO 추가 버튼에는 `data-testid="new-todo-add-button"` 속성 부여
  - [ ] 이 때, 추가 버튼을 클릭한 뒤 새로고침 해도 추가한 TODO가 보여야 한다.
- [ ] 체크박스를 통해 TODO의 완료 여부를 수정할 수 있다.
- [ ] TODO 우측에 수정 버튼과 삭제 버튼 생성
  - [ ] 수정 버튼에는 `data-testid="modify-button"` 속성 부여
  - [ ] 삭제 버튼에는 `data-testid="delete-button"` 속성 부여
- [ ] 삭제 버튼 클릭 시 해당 TODO 삭제
- [ ] 투두 리스트 수정 기능 구현
  - [ ] 수정 버튼을 클릭 시 수정 모드 시작
  - 수정 모드에서는 다음과 같은 기능을 사용할 수 있다.
  - [ ] TODO의 내용 변경
    - [ ] 이 때, TODO의 내용이 `input` 창 안에 입력된 형태로 변경
    - [ ] 수정 `input` 창에는 `data-testid="modify-input"` 속성을 부여
  - [ ] 수정 모드에서는 `input`의 우측에 제출과 취소 버튼을 표시
    - [ ] 제출버튼에는 `data-testid="submit-button"` 속성을 부여
    - [ ] 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
  - [ ] 제출 버튼 클릭 시 수정된 내용을 업데이트하고, 취소버튼 클릭 시 수정한 내용 초기화 및 수정모드 탈출
