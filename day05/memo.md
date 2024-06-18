# transform 속성

- 요소의
- transform 함수를 사용한다.
- **주의사항 : 요소의 display 속성이 block | inline-bolck 이어야한다.**

# transform 함수

1. `translate(x,y)` , `translateX(x)`, `translateY(y)`

   - 넘겨준 값 만큼 x, y 좌표 이동

2. `scale(x, y)`, `sclaeX(x)`, `scaleY(y)`
   - 넘겨준 값 만큼 확대, 축소
3. `rotate(각도deg)`
   - 넘겨준 각도 만큼 회전

# transition 속성

- transform은 단순한 변형을 수행한다.
- transition은 변형에 시간을 설정하여 마치 하나의 애니메이션처럼 표현할 수 있다.

# transition 속성 종류

- `transition : property | duration | timing-function | delay`
- property : 트랜지션을 적용할 속성을 설정한다. (all | none | 속성명)
- duration : 트랜지션의 진행 시간을 설정한다. (시간s)
- timing-function : 진행 속도를 설정한다.
  1. ease : 천천히 - 점점빨리 - 천천히 (기본값)
  2. linear : 시작부터 끝까지 같은 속도
  3. ease-in : 느리게 시작
  4. ease-out : 느리게 끝
  5. ease-in-out : 느리게 시작해서 느리게 끝
- delay : 트랜지션을 바로 시작하지 않고 지연시간을 설정한다.(시간s)

# animation 속성

- css로 애니메이션 효과를 만들기 위한 속성
- `transition` 보다 더 상세하게 애니메이션 효과를 설정할 수 있다.
- `animation` 속성은 특정 지점에서 스타일을 바꿀 수 있는데 그 지점을
  `keyframe`이라고 한다.
- `keyframe` 은 미리 만들어두고 적용시키고 싶은 요소에 다양한 속성으로
  애니메이션을 적용시킨다.
- `animation : name | iteration-count | duration`

# keyframe

- 만들고 싶은 애니메이션 이름을 설정한다.
- from(시작), to(끝), percent(진행도)를 선택자로
  사용한다.

```css
@keyframes 키프레임이름 {
  선택자 {
    속성: 값;
  }
}
```

# form 태그

`<form action="데이터를 처리할 주소" method="get | post">폼 요소</form>`

- form 태그는 사용자에게 입력 받은 데이터를 서버로 전송하기 위해 작성한다.
- 입력 받은 데이터를 폼 데이터, 필드라고 부른다.
- form 태그는 내부 요소로 `input`, `textarea`, `selecet` 태그 등을 가질 수 있다.
- 주요 속성은 다음과 같다.
  - action : form 태그 내부 요소에 작성된 폼데이터를 처리할 서버쪽의 주소를 작성한다.
  - method : 서버에 폼데이터를 넘겨주는 방법을 작성한다.

# input 태그

`<input type="사용할타입">`

1. 실질적으로 사용자에게 입력을 받는 태그
2. `form` 태그 내부에 작성해야 사용자가 입력한 데이터를 서버에 전송할 수 있다. (일반적인 방법)
3. `type` 속성의 값에 따라 입력받는 방식이 바뀐다.
   - `text` : 텍스트 형태로 사용자에게 입력을 받는다.
   - `password` : 패스워드를 입력받는다.
   - `date` : 년, 월, 일을 마우스로 선택하여 입력받는다.
   - `submit` : 전송 버튼 만든다.
   - `reset` : 리셋 버튼을 만든다.
   - `file` : 첨부파일 버튼을 만든다.
   - `hidden` : 화면에서 보이지 않는 칸을 만든다.
   - `radio` : 라디오 버튼을 만든다.(라디오 버튼은 여러 선택지 중 하나만 선택할 때 사용)
   - `checkbox` : 체크 박스를 만든다.(체크 박스는 여러 선택지 중 여러개를 선택할 때 사용)
4. `type` 속성 외에도 `name`, `value` 등의 여러 속성을 사용할 수 있다.

# label 태그

- 사용자가 입력하는 `input` 태그에 대한 설명이다.
- 웹 접근성에 좋기 때문에 적극적으로 사용하는게 좋다.

# fieldset 과 legend

- 여러 label, input을 하나로 묶을 때 사용한다.
- 특별한 기능이 있는것은 아니고 간단한 디자인으로 표시를 해주기 떄문에
  예제용으로 많이 사용한다.
- legend는 fieldset의 이름을 지을때 사용한다.

# input 태그의 주요 속성

- `autofocus` : 페이지에 진입시 자동으로 focus됨
- `readonly` : 읽기 전용 필드로 설정함(서버에 데이터 전송됨)
- `disabled` : 해당 필드를 비활성화 함 (서버에 데이터 전송 안함)
- `placeholder` : input에 힌트를 표시함
- `required` : 필수 입력 필드로 설정함(반드시 입력해야함)
- `name` : 서버에 데이터를 전송할 때 해당 데이터의 이름을 붙여줌
