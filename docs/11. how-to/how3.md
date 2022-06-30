# ... 여러 코스에서 동일한 파일 사용

예를 들어 연구 과정과 같이 여러 과정으로 교육 시나리오를 구현하고 모든 과정에서 많은 파일을 사용해야 하는 경우 이러한 파일을 학습 리소스 "리소스 폴더"에 중앙 집중식으로 저장한 다음 통합하는 것이 좋습니다. 원하는 코스. 파일을 한 번만 변경하면 연결된 모든 코스에서 자동으로 볼 수 있다는 장점이 있습니다. 이러한 파일의 일반적인 예로는 기본 프레임워크 조건, 일반 조건, 조직 정보, 일반 지원 및 담당자에 대한 정보 등이 있습니다.

### 필요한 것:

- 저자 권한
- 학습 리소스 "리소스 폴더"
- 여러 학습 리소스 "코스
- 종합 파일

## 방법:

|

리소스 폴더 만들기

- --|---
    
    1.|
    

[저작 영역](https://docs.openolat.org/manual_user/how-to/use_the_same_files_in_several_courses/Authoring.html) 으로 이동하여 "만들기" -> "리소스 폴더"를 선택합니다.

![https://docs.openolat.org/manual_user/how-to/assets/resourcefolder_create.jpg](https://docs.openolat.org/manual_user/how-to/assets/resourcefolder_create.jpg)

2.|

학습 리소스에 적합한 이름을 입력하고 필요에 따라 일반 설명 양식을 작성합니다.

리소스 폴더는 내부 조직에서 더 많이 사용되기 때문에 여기에 정보를 입력할 필요가 없습니다. 학습 리소스에 대한 설명은 조직에 더 도움이 됩니다.

3.|

이동 경로 탐색에서 리소스 폴더의 이름을 클릭하여 추가 설정을 지정하고 파일을 업로드합니다. 또는 여기에서 직접 HTML 파일을 만들 수도 있습니다.

![https://docs.openolat.org/manual_user/how-to/assets/Ressourcenordner.png](https://docs.openolat.org/manual_user/how-to/assets/Ressourcenordner.png)

많은 파일을 업로드 하려면 [WebDAV 를 사용하십시오.](https://docs.openolat.org/manual_user/supported_tech/Using_WebDAV/)

| 코스에 리소스 폴더 포함---|---1.|

원하는 과정을 열고 "설정" 하위 메뉴의 "관리" 하위 메뉴에서 "옵션" 탭을 선택합니다.

![https://docs.openolat.org/manual_user/how-to/assets/resource_folder_options.png](https://docs.openolat.org/manual_user/how-to/assets/resource_folder_options.png)

2.|

"선택한 리소스 폴더"에서 "바꾸기"를 선택합니다.

![https://docs.openolat.org/manual_user/how-to/assets/Resource_folder_replace_EN.png](https://docs.openolat.org/manual_user/how-to/assets/Resource_folder_replace_EN.png)

3.|

여기에서 이전에 생성한 리소스 폴더를 선택하고 코스에 연결할 수 있습니다.

![https://docs.openolat.org/manual_user/how-to/assets/Choose_resource_folder_EN.png](https://docs.openolat.org/manual_user/how-to/assets/Choose_resource_folder_EN.png)

리소스 폴더를 선택한 경우 해당 이름과 함께 다시 선택 취소할 수 있는 "선택 취소" 버튼이 나타납니다.

4.|

기본적으로 리소스 폴더의 파일은 코스 내에서 쓰기 방지되어 있습니다. 파일을 중앙에서 변경하고 업데이트하기를 원하기 때문에 이는 의미가 있습니다. 단, 해당 강좌의 중앙 파일(단일)을 다시 덮어써야 하는 경우 해당 강좌에 대해서만 해당 강좌의 "옵션" 메뉴에서 쓰기 방지를 해제할 수 있습니다.

![https://docs.openolat.org/manual_user/how-to/assets/Reseoruce_folder_read_only_EN.png](https://docs.openolat.org/manual_user/how-to/assets/Reseoruce_folder_read_only_EN.png)

모든 관련 과정에 대해 절차를 반복합니다.

| 파일에 대한 액세스 구성---|---1.|

코스 내 리소스 폴더 파일에 액세스하려면 스토리지 폴더로 이동하십시오. 여기에서 자동으로 생성된 하위 폴더 "_sharedfolder"를 찾을 수 있습니다.

![https://docs.openolat.org/manual_user/how-to/assets/13_sharedfolder.png](https://docs.openolat.org/manual_user/how-to/assets/13_sharedfolder.png)

2.|

이제 코스 편집기에서 코스 요소 " [단일 페이지](https://docs.openolat.org/manual_user/course_elements/Knowledge_Transfer/) "를 사용하여 폴더의 다른 모든 파일과 마찬가지로 이 파일을 추가할 수 있습니다 .

*코스당 하나* 의 리소스 폴더 만 포함할 수 있습니다 . 따라서 코스별 폴더 대신 교차 코스 리소스 폴더를 사용하여 구성하려는 파일을 미리 신중하게 고려해야 합니다.