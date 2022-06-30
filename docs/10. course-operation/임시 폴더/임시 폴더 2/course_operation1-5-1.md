# 강의 및 결석

결석 관리를 통해 출석 목록을 온라인으로 유지하고 결석을 문서화할 수 있습니다. 각 과정에 대한 출석 모니터링이 수행됩니다. 이를 위해 코스에서 1-12개의 강의로 구성된 강의 블록을 만들 수 있습니다. 개별 레슨을 통해 참가자는 강의 블록의 개별 레슨을 놓치고 전체 강의 블록을 결석으로 입력하지 않을 수 있습니다.

일반 설정은 [관리](https://docs.openolat.org/manual_admin/administration/Lecture_and_roll_call_management/) 에서 시스템 전체에 적용 됩니다. 또한 부재 관리는 일반적으로 OpenOlat 관리자가 켜거나 끌 수 있습니다.

이 페이지에서 코스 소유자의 보기를 찾을 수 있습니다. [코스 코치](https://docs.openolat.org/manual_user/course_operation/Lectures_-_Teacher_view/) 및 [코스 참가자](https://docs.openolat.org/manual_user/course_operation/Lectures_-_User_view/) 에 대한 처리에 대한 정보 는 해당 장에서 찾을 수 있습니다. 그런 다음 롤 콜은 개별 강사(코스 코치)가 수행합니다. 코스에 코스 코치가 포함되어 있지 않으면 도구를 의미 있게 사용할 수 없습니다.

# 코스 소유자 관점

## 강좌 소유자로 강좌 관리 활성화

코스의 "관리" 메뉴에서 "설정" 메뉴 → "실행" 탭에서 강의 및 결석 관리를 구성하고 기본 구성을 수락하거나 변경할 수 있습니다.

![https://docs.openolat.org/manual_user/course_operation/assets/Absenz_Config_EN.png](https://docs.openolat.org/manual_user/course_operation/assets/Absenz_Config_EN.png)

이후 코스 관리 아래에 " 강의 및 결석" 메뉴가 나타납니다.

![https://docs.openolat.org/manual_user/course_operation/assets/Absenz_menu_EN.png](https://docs.openolat.org/manual_user/course_operation/assets/Absenz_menu_EN.png)

여기에서 강의 블록을 만들고 삭제하고 참가자의 출석 상태에 대한 개요를 확인하고 항목을 편집할 수 있습니다. 이러한 강의 블록의 생성은 과정 소유자가 과정에서 수행합니다(또는 외부 관리 시스템에서 OpenOlat으로 동기화됨).

## 탭 강의 블록

첫 번째 탭 "강의 블록"에서 새 강의 블록을 생성하고 기존 강의 블록을 편집 및 삭제할 수 있습니다. 로그 파일도 표시할 수 있습니다.

"새 강의 블록 만들기" 버튼을 사용하면 새 블록이 생성됩니다.

![https://docs.openolat.org/manual_user/course_operation/assets/Lektionen_erstellen.png](https://docs.openolat.org/manual_user/course_operation/assets/Lektionen_erstellen.png)

### 강의 블록 만들기

**제목** : 의미 있는 이름을 지정합니다.

**계획된 강의** : 이 강의 블록에 포함된 강의 수를 지정합니다. 강의 블록에는 1 - 12개의 강의가 포함될 수 있습니다.

**필수** : 출석이 필수인 경우 출석체크를 해야 합니다. 그러면 강의 블록도 출석률에 포함됩니다. 차단이 자발적인 경우 출석 계산에 포함되지 않습니다.

**교사** : 각 강의 블록에 대해 코스 코치를 선택해야 합니다. 선택한 코스 코치만이 출석체크를 할 수 있습니다. 코스 소유자도 이 기능을 인수하려면 코스에 코스 코치로 등록해야 합니다.

**코스 / 그룹 / 커리큘럼** : 여기에서 이 강의 블록의 대상을 정의합니다. 전체 과정, 해당 그룹 또는 전체 커리큘럼 중 하나입니다. 예를 들어 결석관리는 수강신청자의 일부만 사용할 수 있습니다.

**설명** : 여기에서 선택적으로 수업 블록에 대한 설명을 추가할 수 있습니다.

**준비** : 참가자들에게 해당 날짜에 대한 준비 또는 후처리 지시를 내리고 싶다면 여기에 추가할 수 있습니다. 강의가 코스 캘린더와 동기화되면 캘린더에 표시됩니다(관리에서 설정).

**위치** : 여기에서 이 강의 블록이 발생하는 위치를 지정합니다. 이것은 예를 들어 존재 장소 또는 정확한 방 설명이 될 수 있습니다.

**날짜** : 날짜를 지정해야 합니다.

**시간** : 선택적으로 시간을 추가할 수 있습니다. 그러나 달력 항목은 시간 항목으로만 올바르게 표시될 수 있습니다.

![https://docs.openolat.org/manual_user/course_operation/assets/Lectureblock_create_EN.png](https://docs.openolat.org/manual_user/course_operation/assets/Lectureblock_create_EN.png)

## 탭 참가자

![https://docs.openolat.org/manual_user/course_operation/assets/Absenz_TN_EN.png](https://docs.openolat.org/manual_user/course_operation/assets/Absenz_TN_EN.png)

"참가자" 탭에서 이 과정 또는 선택한 그룹의 모든 참가자에 대한 개요를 볼 수 있습니다. 녹음된 총 강의 수가 표시되고 참가자가 출석, 결석 및 필요한 경우 면제된 강의 수가 표시됩니다. 출석은 진행 중인 그래픽으로 표시됩니다. 녹색은 출석, 주황색은 면제, 빨간색은 결석 또는 무단 수업을 나타냅니다. 출석 열에서는 이미 진행된 강의에 대한 출석률을 계산합니다. 예를 들어 강의가 한 번만 진행되고 참가자가 참석한 경우 "출석" 열에 100%가 표시됩니다.

기호가 있는 열

![https://docs.openolat.org/manual_user/course_operation/assets/attention_434343_64.png](https://docs.openolat.org/manual_user/course_operation/assets/attention_434343_64.png)

은 정의된 출석률에 도달했는지 여부를 나타냅니다. 빨간색 느낌표가 표시되면 필요한 제한에 도달하지 않은 것입니다.

열에

![https://docs.openolat.org/manual_user/course_operation/assets/infomessage.png](https://docs.openolat.org/manual_user/course_operation/assets/infomessage.png)

는 기본 설정과 다른 정보가 표시됩니다. 예를 들어, 이것은 개인 임계값 또는 이후 코스 시작입니다. 이 두 가지 옵션은 설정에서 정의할 수 있습니다

![https://docs.openolat.org/manual_user/download/thumbnails/108600585/test_pencil-square-o_434343_64%EF%B9%96version=1&modificationDate=1564501133000&api=v2.png](https://docs.openolat.org/manual_user/download/thumbnails/108600585/test_pencil-square-o_434343_64%EF%B9%96version=1&modificationDate=1564501133000&api=v2.png)

. 개인 임계값은 관련 참가자가 달성해야 하는 출석률을 정의합니다. 첫 번째 입학은 참가자가 코스를 시작한 시점을 정의합니다. 출석률은 첫 번째 입학을 기준으로 계산됩니다. 최초 입학일 이전에 진행된 강의는 포함되지 않습니다.