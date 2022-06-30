# 코스 수준의 테스트

여기에서 코스에서 테스트를 추가로 구성하는 방법, 수동 평가를 수행하는 방법 및 결과를 저장하는 방법에 대한 개요를 볼 수 있습니다.

## 코스 수준의 테스트 구성

과정을 열고 과정 편집기로 이동하여 과정 요소 "Test"를 추가하거나 이미 추가된 과정 요소 Test를 선택합니다. 이제 다음 탭이 표시됩니다.

![https://docs.openolat.org/manual_user/tests/assets/Test_Tabs_Kursebene_DE.jpg](https://docs.openolat.org/manual_user/tests/assets/Test_Tabs_Kursebene_DE.jpg)

### 탭 학습 경로

모든 학습 경로 과정과 마찬가지로 여기에서 과정 요소가 학습 경로 과정에 필수인지 또는 테스트가 표시될 때부터 학습 경로 표시("자발적" 설정)에 사용하지 않아야 하는지 여부를 정의할 수 있습니다. 처리가 가능한 시기와 이 요소에 대해 예상되는 처리 시간. 또한 다음 완료 기준을 사용할 수 있습니다.

![https://docs.openolat.org/manual_user/tests/assets/Test_Erledigungskriterien.png](https://docs.openolat.org/manual_user/tests/assets/Test_Erledigungskriterien.png)

### 탭 테스트 구성

여기에서 사용하려는 테스트를 선택하거나 생성합니다. 그 다음에는 수정 유형 또는 테스트 결과 표시 유형과 같은 추가 설정이 가능합니다. 구체적으로 다음과 같은 설정이 가능합니다.

### **섹션 테스트**

**과정 평가 무시 : 여기에서 체크 표시를 하면** [학습 경로 과정](https://docs.openolat.org/manual_user/course_create/Learning_path_course/) 의 진도를 계산할 때 테스트가 고려되지 않습니다 . 이 설정은 일반 코스에서는 사용할 수 없습니다.

**평가 기간 설정** : 시험 기간 동안 시험을 시작할 수 있습니다. "to" 시간에 도달하는 즉시 테스트가 자동으로 종료됩니다. 정의된 테스트 시간이 아직 사용되지 않은 경우에도 마찬가지입니다.

### **섹션 수정**

**수정** : 수정은 **자동 또는 수동으로** 수행할 수 있습니다 . 수동으로 평가할 [질문 유형](https://docs.openolat.org/manual_user/tests/Test_question_types/) (예: 자유 텍스트)을 사용할 수 있게 되면 수동 변형을 선택해야 합니다. 자동 수정의 경우 결과가 즉시 표시되고 모든 질문이 자동으로 수정됩니다.

수동 수정의 경우 결과의 가시성이 제한되며 코치는 일부 질문 유형의 경우 자동 수정이 불가능하기 때문에 수동 수정을 추가해야 합니다. 여기에는 에세이, 파일 업로드 및 그리기가 포함됩니다. 방금 명명된 문제 유형이 테스트에 포함되지 않은 경우 수동 수정도 가능합니다. 이와 같이 시험이 객관식 문항으로만 구성되어 있어도 가시성을 제한할 수 있게 됩니다.

**" 외부 채점자에 의한 수동** " 옵션을 선택하면 OpenOlat 사용자는 코스의 회원이나 코치가 되지 않고도 테스트를 수정할 수 있습니다. 이 옵션은 또한 "채점자" 탭을 활성화하고 테스트에 수정자로 할당된 사람을 볼 수 있습니다.

![https://docs.openolat.org/manual_user/tests/assets/Test_Tab_Korrektoren.png](https://docs.openolat.org/manual_user/tests/assets/Test_Tab_Korrektoren.png)

"외부 채점자에 의한 수동" 옵션을 사용할 수 없는 경우 학습 리소스 테스트에서 외부 수정자가 구성되지 않은 것입니다.

**릴리스 평가** : 기본적으로 결과를 릴리스할지 여부를 여기에서 설정합니다.

- 공개되지 않음: 테스트 점수는 기본적으로 공개되지 않으며 참가자가 볼 수 없습니다.
- 릴리스됨: 평가는 기본적으로 릴리스되며 참가자가 볼 수 있습니다.

### **섹션 보고서**

**시험 홈페이지에 점수 표시** : 이 옵션을 선택하면 시험 홈페이지에 점수가 표시됩니다.

**테스트 홈페이지에 결과 표시** : 테스트 홈페이지에 결과를 표시해야 하는 경우 여기에서 정의할 수 있습니다.

![https://docs.openolat.org/manual_user/tests/assets/Test_Report_Einstellungen.png](https://docs.openolat.org/manual_user/tests/assets/Test_Report_Einstellungen.png)

날짜 기준 체크박스를 선택하지 않으면 테스트 종료 후 바로 결과를 확인할 수 있습니다. 시작 날짜만 삽입하면 이 시간부터 결과가 표시됩니다. 두 날짜를 모두 입력하면 이 기간 동안 결과를 확인할 수 있습니다.

결과가 표시되는 세부 수준은 "개요 결과"에서 정의할 수 있습니다. 선택은 1회 가능하며 "시험 홈페이지에 결과보기", "시험 접수 후 결과보기"도 동일합니다.

**테스트가 제출된 후 결과 표시** : 여기에서 학습자가 받을 정보를 구성합니다.

![https://docs.openolat.org/manual_user/tests/assets/Optionen_Anzeige_Resultate.png](https://docs.openolat.org/manual_user/tests/assets/Optionen_Anzeige_Resultate.png)

테스트 요약에는 달성한 백분율, 테스트 완료에 걸린 시간, 작업한 문제 수, 달성한 점수, 상태가 표시됩니다. [섹션 요약은 테스트에 섹션](https://docs.openolat.org/manual_user/tests/Configure_tests/) 도 포함된 경우에만 관련이 있습니다 . 질문 요약에는 질문 제목, 각 사례에서 얻은 점수 또는 일치하는 백분율 값이 표시되지만 질문 자체는 표시되지 않습니다. 참가자의 질문에 대한 답변에는 모든 답변 옵션과 사용자 선택이 표시되지만 질문에 대한 정답인지 오답인지에 대한 평가는 표시되지 않습니다. 원하는 경우 옵션을 다른 피드백 옵션과 결합해야 합니다.

표시 옵션의 조합에 따라 사용자에게 다양한 유형의 피드백을 남길 수 있습니다.

### 탭 옵션

코스에 테스트를 포함하는 경우 학습 리소스 테스트 구성의 설정(" [테스트 설정](https://docs.openolat.org/manual_user/tests/Test_settings/) " 및 " [테스트 구성](https://docs.openolat.org/manual_user/tests/Configure_tests/) " 참조)이 기본적으로 채택됩니다. 따라서 "옵션" 탭에서 "학습 리소스 구성 사용"이 선택되고 학습 리소스 테스트에서 지정한 해당 설정이 여기에 표시됩니다.

구성을 조정해야 하는 경우 "구성 조정"을 선택해야 합니다. 이러한 조정은 학습 리소스 자체의 구성에 영향을 미치지 않습니다. 테스트 구성 탭에서 몇 가지 추가 구성을 수행할 수 있습니다.

### 탭 최고점수

테스트에 대한 최고 점수 개요도 여기에서 활성화하고 추가로 구성할 수 있습니다.

![https://docs.openolat.org/manual_user/tests/assets/Highscore_Einstellungen_DE.png](https://docs.openolat.org/manual_user/tests/assets/Highscore_Einstellungen_DE.png)

## 비교: 테스트 및 자체 테스트

[제목 없음](https://www.notion.so/580dfdc0970a4dbeb65e2a0589fd4009)

때로는 실제로 학습자에게 자체 테스트를 제공하려는 경우에도 "테스트" 유형을 사용하는 것이 합리적입니다. 테스트를 통해 필요한 경우 학습자를 개별적으로 지원하고 수동으로 평가할 수 있는 질문 유형에 대한 피드백을 제공할 수 있기 때문입니다. .

## 테스트 및 자체 테스트 변경

테스트 또는 자체 테스트가 코스에 포함되는 즉시 "콘텐츠 편집"에서 매우 제한된 변경만 수행할 수 있습니다. 따라서 테스트는 완전히 끝날 때까지 코스에 포함되어서는 안됩니다.

왜 그런 겁니까? 통합 테스트에 질문을 추가하거나 다른 답변을 정답으로 표시할 수 있다고 가정하면 모든 테스트 대상이 동일한 요구 사항을 충족하지는 않습니다. 반면에 변경 후 테스트 파일 버전에 명확하게 할당할 수 없는 결과가 이미 저장되었을 수 있습니다. 따라서 이미 통합된 테스트 및 자체 테스트의 편집은 강력하게 제한됩니다.

예를 들어 테스트에 새 질문을 추가하거나 답변이 정답으로 잘못 표시된 경우 작성자 영역에서 학습 리소스 테스트를 복사하고 테스트를 다시 저장합니다. 테스트를 편집 및 수정한 다음 코스에 테스트를 포함합니다. 이렇게 하려면 코스 편집기로 전환하고 원하는 테스트의 코스 요소에서 파일을 교환합니다. 결과가 이미 수신된 경우, 결과는 개인 폴더(비공개)에 보관되며 OpenOlat이 이미 시험에 응시한 코스 참가자에게 변경 사항을 알려야 하는지 여부를 결정할 수 있습니다.

## 테스트 보기 및 채점

코스 참가자가 완료한 테스트에 대한 액세스는 " [평가 도구](https://docs.openolat.org/manual_user/course_operation/Assessing_tests/) "에서 사용할 수 있습니다. 평가 도구는 과정의 "관리"에서 찾을 수 있습니다. 코스의 모든 테스트 및 기타 평가 가능한 코스 요소는 "사용자" 아래에 표시되며 사람과 관련하여 불러오고, 보고, 변경하고, 댓글을 달 수 있습니다. 또는 편집기를 닫은 상태에서 코스 실행에서 결과를 보고 관리할 수도 있습니다. 코스 실행에서 각 테스트에 대한 미리 알림을 구성하여 조건에 따른 메일 발송을 트리거할 수도 있습니다.

![https://docs.openolat.org/manual_user/tests/assets/Test_Kursrun_Teilnehmerliste_DE.png](https://docs.openolat.org/manual_user/tests/assets/Test_Kursrun_Teilnehmerliste_DE.png)

외부 채점자도 시험을 위해 활성화된 경우 [코칭 도구](https://docs.openolat.org/manual_user/e-assessment/Coaching/) 를 사용하여 평가할 수 있습니다.

## 테스트 결과 및 보관

코스 보기의 "관리"에서 " [데이터 보관](https://docs.openolat.org/manual_user/course_operation/Using_Course_Tools/#archive) " 링크를 선택하십시오 . 왼쪽의 "테스트" 또는 "수강 결과"로 이동하여 표시된 파일을 저장합니다. 자체 테스트 결과는 익명으로 저장됩니다.

보관 후에는 누가 어떤 질문에 답변했는지, 어떤 답변을 했는지, 자체 테스트에서 몇 점을 얻었는지에 대한 모든 정보를 찾을 수 있습니다.

"관리" ->" [테스트 통계](https://docs.openolat.org/manual_user/course_operation/Using_Course_Tools/#statistics) "를 통해 테스트 데이터의 그래픽 평가에 빠르게 액세스할 수도 있습니다.