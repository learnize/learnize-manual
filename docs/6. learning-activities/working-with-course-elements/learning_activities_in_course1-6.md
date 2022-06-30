# 위키로 작업하기

![https://docs.openolat.org/manual_user/learning_activities/assets/wiki.png](https://docs.openolat.org/manual_user/learning_activities/assets/wiki.png)

![https://docs.openolat.org/manual_user/learning_activities/Working_with_Wiki/assets/Wiki.png](https://docs.openolat.org/manual_user/learning_activities/Working_with_Wiki/assets/Wiki.png)

Wiki는 텍스트의 협력 생성에 사용할 수 있습니다. 개별 페이지는 페이지가 연결된 하이퍼텍스트 형태로 구현됩니다.

OpenOlat 코스에서 Wiki를 사용하면 Wiki 메뉴와 추가 Wiki 링크가 왼쪽 코스 탐색에 자동으로 나타납니다. "From AZ" 링크를 클릭하면 모든 Wiki 페이지를 표시하는 목차를 불러올 수 있습니다. 이렇게 하면 이미 생성된 페이지를 한 눈에 볼 수 있습니다.

메인 영역에서 각각의 Wiki 기여(기사)를 볼 수 있고, Wiki 페이지를 편집(페이지 편집)하고, 개별 Wiki 페이지로 토론을 이끌고, 편집 기록(버전/저자)을 볼 수 있습니다. Wiki를 CP(콘텐츠 패키지)로 내보내고 변경 사항에 대해 알릴 수도 있습니다.

![https://docs.openolat.org/manual_user/learning_activities/assets/Wiki_user.png](https://docs.openolat.org/manual_user/learning_activities/assets/Wiki_user.png)

## 새 Wiki 페이지 만들기

"만들기" 버튼을 클릭하고 콘텐츠를 채우는 것만으로 새 Wiki 페이지를 만들 수 있습니다. 그러나 이러한 방식으로 생성된 페이지는 처음에는 전체 Wiki 구조와 연결되지 않는다는 점에 유의해야 합니다. 연결을 설정하려면 "Wiki-Menu" 및/또는 Wiki의 "Index" 페이지에 적절한 링크를 만들어야 합니다.

새 Wiki 페이지를 만드는 또 다른 방법은 새 Wiki 페이지에 대한 링크가 나타나야 하는 페이지에 적절한 내부 링크를 만드는 것입니다. Wiki 편집기의 해당 버튼을 사용하거나 적절한 구문을 직접 입력할 수 있습니다.

새 내부 링크에 대한 Wiki 구문: 두 개의 여는 대괄호 + 페이지 이름 + 두 개의 닫는 대괄호. 예: `[[link name]]`. 그러면 링크가 처음 호출될 때 해당 페이지가 자동으로 생성됩니다.

![https://docs.openolat.org/manual_user/learning_activities/assets/interner_Link.png](https://docs.openolat.org/manual_user/learning_activities/assets/interner_Link.png)

## Wiki 페이지의 콘텐츠 수정

Wiki 페이지에 내용을 편집하고 추가하려면 원하는 Wiki 페이지의 "페이지 편집" 탭을 선택합니다. 다양한 서식 옵션과 함께 Wiki 편집기가 나타납니다. 여기에서 이미지, 미디어 링크, 수학 공식, 내부 및 외부 링크를 Wiki에 통합할 수도 있습니다. 편집기의 버튼 외에도 텍스트에 구문 요소로 직접 삽입할 수 있는 추가 서식 옵션이 있습니다.

Wiki 구문은 아래에 더 자세히 설명되어 있습니다.

## 위키 구문

다음 Wiki 구문을 사용하여 입력 형식을 지정할 수 있습니다.

**주의:**Wiki 단어에는 특수 문자를 사용하지 않는 것이 좋습니다. 콜론(:)은 허용되지 않습니다. 줄 시작 부분의 공백 문자는 서식 지정 명령(미리 서식이 지정된 텍스트)으로 해석됩니다.

[제목 없음](https://www.notion.so/8a3c2eb2b4f242c8bf392264923edead)

**텍스트 디자인**

'''굵은 텍스트 '''| **굵은 텍스트**''기울임꼴 텍스트''| *기울임꼴*==레벨 2 헤드라인==|

## 레벨 2 헤드라인

- 목록|
- 목록

# 번호 매기기 목록|

1. 번호 매기기 목록

**연결**

[[내부링크]]| 내부링크[[링크 | 텍스트]]| [텍스트](https://testing.frentix.com/test8/help/RepositoryEntry/82673665#linkandtext)외부 주소는 [http://www.openolat.org](http://www.openolat.org/) 의 전체 주소를 표시하여 자동으로 링크로 바뀝니다 . 링크가 아닌 용어를 사용하고 싶지 않다면 URL과 용어를 괄호 안에 공백으로 구분하여 넣어야 합니다.[http://www.openolat.org](http://www.openolat.org/) | [http://www.openolat.org](http://www.openolat.org/)[ [http://www.openolat.org](http://www.openolat.org/) OpenOlat 웹사이트]| [OpenOlat 웹사이트](http://www.openolat.org/)

**테이블**

|

{||셀 1|셀 2|}

| 셀 1 셀 2

{||셀 1|셀 2|-|셀 3|셀 4|}

|

셀 1 셀 2

셀 3 셀 4

{| border="1"|셀 1|셀 2|-|셀 3|셀 4|}

|

[제목 없음](https://www.notion.so/3c4482195f00435e9ae185f43f705ad6)

**이미지 및 기타 파일**

Wiki에 이미지를 삽입하려면 먼저 OpenOlat에 업로드해야 합니다( *파일 업로드* 필드 사용 ). Wiki에 최소한 하나의 파일이 포함되면 드롭다운 메뉴 *파일 삽입* 이 나타납니다. 이제 이미지 등을 쉽게 삽입할 수 있습니다.[[Image:openolat_logo_72.png]]|

![https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png](https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png)

이미지를 삽입할 때 형식과 관련하여 다음 옵션이 가능합니다.캡션: 캡션을 표시하세요.[[Image:openolat_logo_72.png|이것은 OpenOlat 로고입니다.]]|

![https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png](https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png)

이것은 OpenOlat 로고입니다.

정렬: 추가 기능 "왼쪽" 또는 "오른쪽"은 이미지의 정렬을 나타냅니다.[[이미지:openolat_logo_72.png|오른쪽]]|

![https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png](https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png)

크기: 이미지의 크기를 픽셀 단위로 나타냅니다.[[이미지:openolat_logo_72.png|120px]]|

![https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png](https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png)

미니어처: 작은 이미지 크기와 함께 추가 기능 "엄지손가락"을 선택하면 사진이 미니어처로 삽입됩니다. 해당 미니어처를 클릭하면 이미지가 전체 크기로 표시됩니다.[[이미지:openolat_logo_72.png|thumb|20px]]|

![https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png](https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png)

이러한 형식 지정 옵션을 동시에 둘 이상 사용할 수 있습니다.[[Image:olat_logo.png|right|30px|thumb|OpenOlat 로고입니다. ]]|

![https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png](https://docs.openolat.org/manual_user/learning_activities/assets/openolat_logo_72.png)

이것은 OpenOlat 로고입니다.

[[미디어:any.pdf]]| [아무.pdf](https://testing.frentix.com/test8/help/RepositoryEntry/82673665#pdf)

**수학 공식(LaTeX)**OpenOlat에서 공식을 더 빠르고 명확하게 표시하려면 컴퓨터에 jsMath 스크립트를 설치할 수 있습니다.다운로드 영역과 해당 지침은 여기에서 찾을 수 있습니다.[__ http://www.math.union.edu/~dpvc/jsMath/download/jsMath-fonts.html](http://www.math.union.edu/~dpvc/jsMath/download/jsMath-fonts.html)

| OpenOlat에서 사용되는 수학 표기법의 구문은[__ http://meta.wikimedia.org/wiki/Help:Formula 에서 찾을 수 있습니다.](http://meta.wikimedia.org/wiki/Help:Formula)

인라인 모드:\(x^2\)

\[x^2\]

|

x2

x2

**형식이 지정되지 않은 텍스트**여기에 형식이 지정되지 않은 텍스트를 입력하세요.| 여기에 형식이 지정되지 않은 텍스트를 입력하세요.

파일을 추가하려면 먼저 페이지 하단의 "파일 업로드"를 통해 파일을 업로드해야 합니다. Wiki 페이지에서 해당 위치로 이동합니다. 그런 다음 "파일 삽입"을 통해 파일을 선택하고 "저장"을 클릭하십시오. 다른 Wiki 페이지에 대한 링크는 "링크 삽입" 버튼을 통해 설정됩니다. 한 줄 위에서 추가 서식 옵션을 찾을 수 있습니다.

메타데이터 아이콘 을 클릭하여 Wiki 페이지에서 폴더 코스 요소의 파일에 대한 링크를 생성할 수 있습니다

![https://docs.openolat.org/manual_user/learning_activities/assets/metadata_64_0_434343_none.png](https://docs.openolat.org/manual_user/learning_activities/assets/metadata_64_0_434343_none.png)

. 다음 단계에서

**이 리소스에 대한 외부 링크를**

복사합니다 . 폴더 코스 요소의 하위 폴더에 있는 파일에만 링크할 수 있다는 점에 유의하십시오.

Wiki는 해당 링크를 통해 모든 참가자가 IMS 콘텐츠 패키징으로 내보내고 저장할 수 있습니다. 작성자는 내보낸 CP를 OpenOlat으로 다시 가져올 수도 있습니다.

Wiki를 Wiki로 직접 내보내려면 "복사" 또는 "컨텐츠 내보내기" 메뉴를 통해 학습 리소스에서 Wiki 소유자만 직접 내보낼 수 있습니다. 코스 참가자에게는 해당 옵션이 없습니다.

페이지를 삭제하면 모든 버전도 삭제됩니다. 따라서 삭제된 페이지를 복원할 수 없습니다.