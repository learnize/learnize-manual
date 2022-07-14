---
sidebar_position: 1
---

# ... 제출 작업에 대한 일괄 평가 생성

일괄 평가를 통해 주어진 시간에 여러 코스 참가자를 동시에 평가할 수 있습니다. 탭이나 쉼표로 구분된 값이 있는 행 목록만 있으면 됩니다. 항상 사용자 ID(사용자 이름, 등록된 이메일 주소 또는 기관 식별자), 점수, 통과 상태 및 원하는 경우 의견이 필요합니다.

가장 쉬운 방법은 Excel 또는 OpenOffice의 표를 사용하여 값으로 채우는 것입니다.

![http://docs.learnize.co.kr/manual_user/how-to/assets/bulk_assessment_excel.png](http://docs.learnize.co.kr/manual_user/how-to/assets/bulk_assessment_excel.png)

[평가 과정 요소](http://docs.learnize.co.kr/manual_user/course_operation/Assessment_of_course_modules/) 작업, 그룹 작업 및 평가 에 대해 일괄 평가를 수행할 수 있습니다 . 모듈 작업 및 평가에 대한 일괄 평가는 "사용자" 탭을 통해 수행됩니다. 그룹에 대한 일괄 평가는 "그룹" 탭을 통해 수행됩니다.

## 코스 요소 작업 또는 평가에 대한 일괄 평가 생성

- [일](http://docs.learnize.co.kr/manual_user/how-to/course_operation/Assessing_tasks_and_group_tasks.de.md)
- [평가](http://docs.learnize.co.kr/manual_user/how-to/course_operation/Assessment_of_course_modules.de.md)

외부 테이블 처리 프로그램을 사용하여 필요한 열을 생성하고 값 할당을 입력합니다. 그런 다음 테이블 데이터를 대량 평가 입력 필드에 복사합니다.

코스 요소의 구성에 따라 다른 옵션을 사용할 수 있습니다. 코스 요소에서 "채점" 옵션이 활성화되어 있지 않으면 일괄 평가를 수행할 수 없습니다.

## 일괄 평가를 만드는 방법

일괄 평가를 수행해야 하는 평가 가능한 코스 요소를 선택합니다. 다음 평가 기능 중 하나 이상이 구성된 모든 코스 요소가 표시됩니다.

- 점수
- 합격
- 논평
- 파일

그런 다음 일괄 평가를 시작할 수 있습니다.

가장 쉬운 방법은 먼저 평가 개요에서 원하는 테이블 열을 활성화한 다음 비어 있거나 부분적으로만 채워진 테이블을 다운로드하는 것입니다. 이러한 방식으로 최적의 Excel 표를 얻을 수 있으며 그에 따라 작성하기만 하면 됩니다.

### 일괄 평가의 개별 단계:

![http://docs.learnize.co.kr/manual_user/how-to/assets/Bulk_assessment_EN.png](http://docs.learnize.co.kr/manual_user/how-to/assets/Bulk_assessment_EN.png)

과정 요소 작업을 사용하면 제출이 수락되었는지 여부를 추가로 선택할 수 있으며 압축된 반환 파일을 업로드할 수 있습니다.

### **1. 평가 데이터****

복사+붙여넣기를 통해 자유 필드에 정보를 삽입하여 OLAT 외부에서 생성된 평가 데이터를 업로드합니다. 이전에 빈 테이블을 내보낸 적이 있다면 구문 문제가 없어야 합니다.

데이터 라인에는 항상 다음 정보가 포함되어야 합니다.

- 사용자 식별(사용자 이름, 등록된 이메일 주소 또는 기관 번호/졸업 번호)
- 포인트 수. 하위 포인트는 쉼표 또는 점으로 입력할 수 있습니다(참고: 쉼표가 구분 기호로 사용되는 경우 쉼표를 사용할 수 없음)
- 상태(아래 참조)
- 원하는 경우 네 번째 위치에 설명을 입력할 수 있습니다.

Excel 또는 이와 유사한 데이터를 직접 복사/붙여넣기하거나 수동으로 입력할 수 있습니다. Excel 파일에서 데이터를 가져오려면 "표로 구분"을 선택하십시오.

`alesend,5,y,Hervorragend`| 사용자는 5점, 통과 상태 및 추가된 설명을 받습니다.---|---`aalesend,,y,Hervorragend`| 점수가 필요하지 않으면 생략할 수 있지만 여전히 자리 표시자를 사용해야 합니다.`alesend,4,y,""`| 이미 존재하는 주석은 ""를 추가하여 재설정할 수 있습니다.

**통과 상태** 를 설정하려면 다음 항목을 사용하십시오 .

```
Passed: y, yes, passed, true, 1, passed
Failed: n, no, failed, false, 0, failed
```

작업 모듈의 일괄 평가에만 해당:

반환 파일을 받는 각 개별 학생에 대한 폴더를 만듭니다. 거기에 각 사람에 대한 개별 피드백을 입력하십시오. 파일을 압축하고 "평가 값"의 첫 번째 단계에서 업로드하십시오.

### **2. 열 매핑**

여기에서 외부에서 생성한 점수의 열이 어떤 필드를 나타내는지 정의할 수 있습니다(예: 식별자, 점수, 통과, 설명). 이 옵션을 선택하지 않은 경우 단계를 건너뛸 수 있습니다.

![http://docs.learnize.co.kr/manual_user/how-to/assets/BulkAssessment2_EN.png](http://docs.learnize.co.kr/manual_user/how-to/assets/BulkAssessment2_EN.png)

### **3. 검증**

여기에서 어떤 정보가 어떻게 전송되고 문제가 있는지 다시 확인할 수 있습니다.

### **4. 일정**

여기에서 평가가 즉시 발생하는지 아니면 특정 날짜에만 발생하는지 정의할 수 있습니다.

데이터를 수동으로 입력할 수도 있습니다. 이렇게 하려면 데이터를 올바르게 수락하기 위해 "쉼표로 구분"을 선택해야 합니다.

그런 다음 변경 사항이 평가 테이블에 나타납니다.

그룹에 대한 일괄 평가는 과정 요소 작업 및 평가에 대해서도 가능합니다.

그룹 평가도 같은 방법으로 진행합니다. "그룹" 탭에서 원하는 그룹을 선택하고 나타나는 메뉴에서 "새 일괄 평가" 옵션을 시작합니다.