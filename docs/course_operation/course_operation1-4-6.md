# 테스트 평가

여기에서 OpenOlat "평가 도구"를 사용하여 테스트를 평가하는 방법을 배우게 됩니다.

평가 도구로 이동하여 "사용자" 탭을 활성화하고 코스 평가 요소의 왼쪽 개요에서 테스트를 선택합니다. 이제 표에 다양한 작업 옵션과 테스트에 대해 평가할 수 있는 모든 사람이 표시됩니다.

![https://docs.openolat.org/manual_user/course_operation/assets/Test_Bewertungswerkzeug.png](https://docs.openolat.org/manual_user/course_operation/assets/Test_Bewertungswerkzeug.png)

코스 코치와 코스 소유자는 해당 버튼을 통해 가능성이 있습니다 ...

- 테스트 통계 보기,
- 표시된 모든 학습자의 결과를 zip 파일로 내보내기,
- 현재 진행 중인 테스트를 가져오고
- 모든 이전 테스트의 결과를 재설정합니다.
- 선택한 모든 학습자 또는 여러 학습자에 대해 작업 상태를 "완료됨"으로 설정하여 평가를 완료합니다.
- 작업 평가를 한 번에 선택한 모든 참가자 또는 여러 참가자에 대해 표시하거나 표시하지 않도록 설정합니다.
- 테스트 처리 시간을 연장합니다.
- 질문별로 테스트 질문 수정("정확" 버튼)

수동으로 평가해야 하는 요소가 포함된 테스트의 경우 "성적" 버튼이 추가로 나타납니다.

![https://docs.openolat.org/manual_user/course_operation/assets/Test_korrigieren.png](https://docs.openolat.org/manual_user/course_operation/assets/Test_korrigieren.png)

**테스트 통계:** 테스트의 각 문제에 대한 자세한 테스트 통계에 액세스합니다. 모든 학습자 응답이 포함됩니다.

**결과 내보내기:** 여기에서 전체 테스트 결과를 zip 파일로 내보내서 보관할 수 있습니다. zip 파일의 제목은 테스트 이름, 해당 코스 및 다운로드 날짜와 시간을 나타냅니다. 결과 다운로드에는 html 페이지와 같은 사용자 개요, 각 사용자 결과가 있는 폴더 및 기타 파일이 포함됩니다. 테스트 영수증이 활성화된 경우 테스트 영수증도 내보내집니다.

**테스트 철회:** 시작되었지만 아직 제출되지 않은 테스트가 있는 경우 해당 테스트를 가져와서 볼 수 있습니다. 테스트 실행이 끝난 후 테스트를 한 번 가져올 수도 있습니다.

**성적:** 이 버튼은 시험 문제별로 수동 평가를 하는 데 사용할 수 있습니다. 여기에서 포인트를 할당하고 의견을 추가할 수 있습니다. 옵션은 수동 채점의 경우에만 나타납니다.

**테스트 영수증 확인:** 이 옵션을 선택하면 테스트가 완료된 후 테스트 영수증이 생성되어 XML 파일로 다운로드할 수 있습니다. 테스트를 확인하는 데 사용됩니다. 생성된 XML 파일은 "메일로 테스트 영수증 보내기" 옵션이 활성화된 경우 추가로 참가자에게 메일로 보낼 수 있습니다.

**모든 데이터 재설정:** 현재 테스트의 모든 데이터를 재설정합니다. 이는 결과를 포함한 모든 사용자의 모든 데이터가 취소 불가능하게 삭제됨을 의미합니다. 특정 사용자의 단일 테스트만 재설정하는 것도 가능합니다. 이는 해당 사용자 설정에서 직접 수행됩니다.

**연장:** 여기에서 사전 설정된 테스트 시간을 연장할 수 있습니다.

### 문항당 시험 문항 수동 수정

"성적"을 클릭하면 질문 개요로 이동합니다. 테스트의 모든 문제가 표시되고 해당 수정 상태가 표시됩니다. 이렇게 하면 모든 수정 사항이 적용되었는지 또는 아직 (수동으로) 확인하거나 수정해야 하는 질문이 무엇인지 한 눈에 볼 수 있습니다.

- 자동: 시스템에서 자동으로 수정한 질문
- 수동: 수동으로 수정해야 하는 질문
- 수정되지 않음: 아직 수정되지 않은 질문입니다. Hier sollte man aber erst mal prüfen ob für diese Frage auch Antworten eingereicht wurden (Spalte "Beantwortet").
- 검토: 추가 검토를 위해 표시된 질문

![https://docs.openolat.org/manual_user/course_operation/assets/Test_korrigieren_Fragen.jpg](https://docs.openolat.org/manual_user/course_operation/assets/Test_korrigieren_Fragen.jpg)

예를 들어 테스트 생성 중에 오류가 발생한 경우 모든 편집에 대한 질문에 특정 점수가 자동으로 추가되거나 해당 질문에 대한 점수가 특정 값으로 설정될 수도 있습니다.

문항당 평가 의 **수정 과정** 에는 두 가지 절차가 가능합니다 .

- 탭 질문: 질문당 모든 참가자(익명)의 답변이 차례로 수정됩니다.
- 탭 사용자: 테스트의 모든 질문은 각 참가자에 대해 차례로 수정됩니다.

선택한 절차에 따라 탐색을 사용하여 질문이나 참가자 간에 빠르게 전환할 수 있습니다.

필요한 경우 질문에 대한 솔루션 또는 올바른 솔루션을 접을 수 있습니다.

하단 영역에는 질문의 수정 상태도 표시되며, 포인트와 댓글을 입력할 수 있습니다. 자동 수정된 질문 유형의 경우 포인트를 덮어쓸 수 있습니다. 추가 검토를 위해 질문을 표시할 수도 있습니다.

여러 검토자가 동시에 테스트를 채점할 수 있습니다. 수정자가 이미 질문을 수정하고 있는 경우 다른 사용자를 위해 자동으로 차단됩니다.

관리에서 이 수정 프로세스를 위해 사용자를 익명으로 나열해야 하는지 여부를 정의할 수 있습니다(사용자 1, 사용자 2...).

### 사용자별 테스트 문제 수동 평가

"사용자" 탭을 활성화하십시오. 이제 원하는 사람을 직접 선택하여 모든 코스 요소에 대한 편집 개요를 확인하십시오. 그런 다음 원하는 테스트로 이동하여 평가 양식으로 이동합니다. 또는 왼쪽 탐색을 통해 먼저 원하는 테스트 요소로 이동한 다음 적절한 사람을 선택하여 평가 양식 및 이전 시도로 이동할 수 있습니다.

시도가 있는 표에서는 자동 생성 점수, 수동 부여 점수 및 최종 점수로 구분하여 시도 점수를 별도로 표시할 수 있습니다. 필요에 따라 표시된 열을 구성합니다.

![https://docs.openolat.org/manual_user/course_operation/assets/Test_korrigieren.png](https://docs.openolat.org/manual_user/course_operation/assets/Test_korrigieren.png)

이제 "등급" 링크를 통해 조정할 수 있습니다. "등급"을 클릭합니다. 테스트의 모든 질문에 대한 개요 보기가 나타납니다. 여기에서 개별 질문에 대한 제출을 보고 수동 평가를 수행할 수 있습니다. 질문 이름을 클릭하여 평가 양식을 불러옵니다.

![https://docs.openolat.org/manual_user/course_operation/assets/Test_Bewertungswerkzeug1.png](https://docs.openolat.org/manual_user/course_operation/assets/Test_Bewertungswerkzeug1.png)

### 테스트 무효화 또는 취소

학습자가 수행한 테스트 시도를 취소할 수도 있습니다. 이를 위해 개인의 해당 테스트를 불러온 다음 "취소" 또는 "테스트 데이터 재설정" 옵션을 선택합니다.

![https://docs.openolat.org/manual_user/course_operation/assets/Test_annullieren_zuruecksetzen.jpg](https://docs.openolat.org/manual_user/course_operation/assets/Test_annullieren_zuruecksetzen.jpg)

무효화할 때 한 번의 시도는 무효로 표시됩니다. 즉, 시도가 목록에 계속 표시되고 교사가 볼 수 있고 심지어 다시 활성화할 수 있지만 학습자에게는 더 이상 결과로 고려되지 않습니다. 사용자가 여러 번 시도한 경우 시간 내에 다음 시도가 결과로 간주됩니다. 그러나 표시되는 시도 횟수는 변경되지 않습니다. 예를 들어, 테스트가 3번으로 제한되고 사용자가 3번의 시도를 했다면, 한 번 이상의 시도가 취소되더라도 사용자는 더 이상의 시도를 할 수 없습니다.

한 번만 시도하고 취소하면 평가 도구의 테이블 표시가 변경되지 않습니다. 연결된 포인트와 함께 취소된 시도는 계속 표시됩니다.

취소와 달리 "테스트 데이터 재설정"은 모든 테스트가 완전히 삭제되는 결과를 가져오므로 테스트 수는 0으로 설정됩니다.

평가 도구의 평가 외에도 개별 테스트는 편집기를 닫은 상태에서 실행되는 과정에서 평가할 수도 있습니다. 평가 옵션은 대부분 동일합니다. "미리보기" 및 "알림" 탭만 옵션을 보완합니다. 미리보기는 사용자 관점을 보여주고 "알림" 탭에는 특정 조건(예: 특정 점수, 특정 시도 횟수 또는 통과/실패)에 대해 알림 이메일을 보낼 수 있는 가능성이 있습니다( [알림](https://docs.openolat.org/manual_user/course_operation/Course_Reminders/) 참조 ).

![https://docs.openolat.org/manual_user/course_operation/assets/Test_kursrun.jpg](https://docs.openolat.org/manual_user/course_operation/assets/Test_kursrun.jpg)