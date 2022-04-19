# 코스 요소: 폴더

![https://docs.openolat.org/manual_user/course_elements/assets/folder.png](https://docs.openolat.org/manual_user/course_elements/assets/folder.png)

코스 요소 "폴더"에서 다운로드할 파일을 제공할 수 있습니다. 종종 폴더는 코스 참가자에게 코스와 관련된 스크립트나 슬라이드를 제공하는 데 사용됩니다. 그러나 코스 요소는 훨씬 더 많은 가능성을 제공합니다. 또한 참가자가 파일을 업로드하고 편집할 수 있도록 "폴더 구성" 탭에서 코스 요소를 구성할 수도 있습니다.

참고: 파일의 순서는 고정되어 있지 않습니다. 사용자는 이름, 크기 및 수정 날짜별로 열에 따라 파일을 정렬할 수 있습니다.

## 탭 폴더 구성

![https://docs.openolat.org/manual_user/course_elements/assets/folger_configuration_15.png](https://docs.openolat.org/manual_user/course_elements/assets/folger_configuration_15.png)

코스 요소의 "폴더 구성" 탭에서 이 폴더의 파일이 코스 폴더에 정확히 저장되어야 하는 위치를 정의합니다. 이를 위해 OpenOlat은 자동으로 폴더를 생성하거나 코스 폴더에서 특정 폴더를 선택할 수 있습니다.

"자동으로 생성된 폴더" 옵션을 선택하면 OpenOlat은 해당 코스 요소 "폴더"의 이름을 가진 하위 폴더를 포함하는 _courselementdata 하위 폴더를 생성합니다. 이제 코스 요소의 모든 파일이 여기에 저장됩니다.

"코스 저장소에서 폴더 선택"을 선택하면 코스 폴더에서 기존 폴더를 선택할 수 있습니다. 이는 코스 폴더에 구조화된 방식으로 제공하려는 파일을 이미 업로드한 경우에 특히 유용합니다. 다음 단계에서는 저장소 폴더에서 기존 폴더를 선택하고 저장소 폴더에 새 하위 폴더를 만듭니다. [코스 설정](https://docs.openolat.org/manual_user/course_create/Course_Settings/) 에서 구성한 경우 저장소 폴더를 통해 연결된 리소스 폴더에 액세스할 수도 있습니다.

그런 다음 "폴더 관리" 링크를 통해 "파일 업로드" 영역에서 이전에 정의된 위치에 파일을 업로드하거나 이미 업로드된 파일을 표시할 수 있습니다.

이 파일 영역에 대한 액세스는 편집기가 닫혀 있을 때도 가능합니다.

### 사용자 권한 설정

또한 "사용자 권한" 섹션에서 코치 및/또는 참가자도 파일을 편집하고 폴더에 업로드할 수 있는지 여부를 정의할 수 있습니다. 기본적으로 코치는 소유자 외에 파일을 업로드할 수 있지만 참가자는 업로드할 수 없습니다.

## 닫힌 편집기로 설정

![https://docs.openolat.org/manual_user/course_elements/assets/Folder_EN.png](https://docs.openolat.org/manual_user/course_elements/assets/Folder_EN.png)

코스 실행에서 코스 소유자와 폴더에 파일을 저장할 수 있는 권한이 있는 사람은 ...

- 파일 업로드 및 다운로드
- 파일 삭제, 이동 및 복사
- 새 문서 만들기
- 파일 형식에 따라, 특히 관리에서 문서 편집기가 활성화된 경우 파일을 편집할 수도 있습니다.
- 코스 요소 내에 새 하위 폴더를 만듭니다. 따라서 코스 요소 "폴더"에는 여러 하위 폴더가 포함될 수 있습니다. 여러 코스 요소 폴더의 사용은 폴더가 코스 구조의 다른 위치에 통합되거나 폴더가 다른 선택적 릴리스와 연결된 경우에만 필요합니다.

여러 파일의 업로드 및 다운로드를 용이하게 하기 위해 파일을 압축하거나 압축을 풀 수 있습니다. 또한 보다 광범위한 자료를 업로드 하려면 [WebDAV 를 사용하는 것이 좋습니다.](https://docs.openolat.org/manual_user/supported_tech/Using_WebDAV/)

또한 모든 사용자는 ...

- 등록된 OpenOlat 사용자에게 이메일로 폴더의 파일 보내기
- 폴더에 있는 파일에서 키워드 검색
- 폴더를 구독하고 변경 사항에 대해 신속하게 알립니다.

### 메타데이터

톱니바퀴 기호는 파일의 [메타데이터](../personal/Full-Text_Search.md#metadata)를 구성하여 다양한 정보를 추가할 때 사용할 수 있습니다. 설명 및 잠금 속성 외에도 라이센스 정보는 특히 관련이 있습니다. 라이선스 정보를 사용하여 문서에 대한 특정 라이선스를 정의할 수 있습니다. 예를 들어 기존 Creative Commons 라이선스 중 하나를 사용하고 라이선스 제공자를 입력하고 게시자, 출처, 출판 날짜 등에 대한 추가 정보를 남길 수 있습니다. 라이센스는 폴더 모듈의 별도 열에 표시됩니다. 라이선스를 클릭하면 사용자는 해당 라이선스에 저장된 정보를 받습니다.

메타데이터는 또한 파일이 호출된 빈도를 보여줍니다. 해당 파일을 직접 연결할 수 있는 링크도 있습니다. 외부 사람도 파일에 액세스할 수 있는지 여부는 코스의 액세스 설정에 따라 다릅니다.

### 파일 편집

OpenOlat

[관리](https://docs.openolat.org/manual_admin/administration/External_Tools_-_Administration/)

의 파일 유형 및 활성화에 따라 코스 요소 "폴더"에 있는 파일을 편집할 수 있습니다. 편집이 가능한 경우

![https://docs.openolat.org/manual_user/course_elements/assets/test.png](https://docs.openolat.org/manual_user/course_elements/assets/test.png)

테이블에 편집 아이콘이 나타납니다. 아이콘을 클릭하면 해당 편집 편집기(예: Only Office)가 열립니다. 이러한 외부 협력 편집 도구를 사용하여 코스 요소 "폴더"를 학습자의 협력 작업에도 사용할 수 있습니다.