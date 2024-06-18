# textarea 태그

```html
<textarea cols="r가로너비" rows="세로길이">내용</textarea>
```

텍스트를 여러 줄 입력하는 영역을 만드는 태그

# select, option 태그

```html
<select>
  <option value="값">내용</option>
  <option value="값">내용</option>
  <option value="값">내용</option>
  ...
</select>
```

- 여러 옵션 중 하나를 선택하는 드롭 다운 목록을 만드는 태그
- `option`의 `value`가 실질적으로 서버에 전송되는 값이다.
- `selected` 속성을 이용하면 페이지 진입시 선택되는 옵션을 설정할 수 있다.

# button 태그

```html
<button type="submit">내용</button>
<button type="reset">내용</button>
<button type="button">내용</button>
```

### type의 종류

- submit : 서버로 폼 데이터를 전송한다. (기본값)
- reset : 폼 데이터를 리셋한다.
- button : 딱히 기능이 없이 버튼 디자인만 생성한다.(주로 JavaScript와 함께 사용한다.)

# 반응형 웹

- 최근 웹사이트를 pc뿐만 아니라 모바일, 태블릿 같은 기기로 접속하는
  경우가 많다. 이런 경우 기기 화면에 맞춰서 새로운 사이트를 만드는것은 비효율 적이다.
- 그래서 사용자의 화면 크기에 반응하는 사이트를 만들게 된다. 그러한 사이트를 반응형 웹 사이트라고 한다.
- 반응형 웹사이트는 기존 내용을 그대로 유지하면서 사용자의 화면크기에 맞게 재배치하고 다시 표현한다.

# viewport(뷰 포트)

- 뷰 포트는 사용자 기기에서 실제 내용이 표시되는 화면 영역이다.

### 뷰 포트 단위

- vw (view width) : 100vw -> 뷰 포트 너비의 100%
- vh (view height) : 100vh -> 뷰 포트 높이의 100%

# 미디어 쿼리

- 반응형 웹을 만들기 위한 가장 기본적인 방법이다. 사용자의 디바이스 뷰포트에 따라
  다른 CSS를 적용할 수 있다.
- `@media` 속성을 사용하여 특정 디바이스에 어떤 CSS를 적용할 지 설정한다.

# CSS의 우선순위

1. 속성 값 뒤에 !important를 붙인 경우
2. 인라인 스타일을 적용한 경우
3. 선택자로 id를 사용한 경우
4. 선택자로 class를 사용한 경우
5. 선택자로 tag를 사용한 경우

- 우선순위가 같다면 나중에 작성한 css가 최종 적용된다.
- 선택자를 길게 쏠 수록(자세히 쓸 수록) 우선순위가 높아진다.
