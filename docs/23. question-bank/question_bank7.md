# 질문 은행 관리

## 풀 관리자에 의한 구성

문제 은행의 관리 영역은 문제 은행 관리자에게 문제 은행의 5개 조직 도메인에 대한 액세스 권한을 제공합니다. 사용자 관리자나 작성자와 마찬가지로 문제 은행 관리자는 관리자가 시스템 사용자에게 할당 한 [역할 입니다.](https://docs.openolat.org/manual_user/general/Roles_and_Rights/) 문제 은행 관리자는 문제 은행의 조직적 측면을 변경/조작/규제할 수 있는 권한이 있지만 문제 은행 또는 개별 풀의 내용에 대한 통제권은 없습니다. 그러나 문제 은행 관리자는 문제 은행의 다음 도메인에 액세스할 수 있습니다.

- 1 문제 은행 관리
- 2풀 관리자에 의한 구성
    - 2.1 평가 프로세스
    - 2.2 주제
    - 2.3 풀 관리
    - 2.4 질문 유형
    - 2.4.1질문 유형 만들기
    - 2.5 레벨

### 평가 프로세스

여기에서 평가 프로세스가 시작된 질문이 "최종" 상태를 받는 시기를 정의할 수 있습니다. 항목이 이 제한 미만이면 항목이 "개정"으로 설정됩니다.

### 주제

주제 영역은 질문(항목)의 주제별 키워드에 사용되며 계층 구조로 표시됩니다. 예를 들어, 이는 교육 기관의 가능한 연구 과정 또는 민간 부문의 조직 단위를 나타냅니다. "새 분류 수준 만들기" 버튼 또는 "분류 수준 가져오기"를 통해 새 주제 영역이 추가됩니다. 이미 존재하는 부서도 편집할 수 있습니다.

![https://docs.openolat.org/manual_user/question_bank/assets/create_taxonomy.png](https://docs.openolat.org/manual_user/question_bank/assets/create_taxonomy.png)

### 풀 관리

풀은 적절한 권한(저자)을 가진 모든 시스템 사용자가 문제 항목을 교환할 수 있는 문제 은행입니다. 풀은 공개되어 모든 시스템 작성자에게 자동으로 액세스 권한을 부여하거나 비공개로 설정하여 특정 부서의 직원과 같이 선택된 사용자에게만 액세스 권한을 부여할 수 있습니다. 공개 또는 비공개 풀 모두에 다음 아이콘이 표시됩니다.

![https://docs.openolat.org/manual_user/question_bank/assets/share_pool_64_0_434343_none.png](https://docs.openolat.org/manual_user/question_bank/assets/share_pool_64_0_434343_none.png)

문제 은행 관리 권한이 없는 사용자는 하나 이상의 그룹과 문제 항목을 공유하여 자신의 풀을 설정할 수 있습니다. 그룹 공유에는 다음 아이콘이 표시됩니다

![https://docs.openolat.org/manual_user/question_bank/assets/group.png](https://docs.openolat.org/manual_user/question_bank/assets/group.png)

. "풀 만들기" 버튼을 클릭하여 새 풀을 만듭니다. 이미 존재하는 풀도 편집하거나 삭제할 수 있습니다.

**풀 생성**

![https://docs.openolat.org/manual_user/question_bank/assets/qb_pool_EN.gif](https://docs.openolat.org/manual_user/question_bank/assets/qb_pool_EN.gif)

1. "풀 만들기" 버튼: 새 풀을 만듭니다. "풀 만들기" 양식이 열립니다.
2. 새 풀의 이름을 입력하십시오.
3. 풀이 공개(모든 작성자에게 표시됨)인지 아니면 비공개인지 정의합니다. 개인 풀을 생성하는 경우 소유자(5)를 추가하여 풀에 액세스할 수 있는 사람을 결정하십시오.
4. 이미 존재하는 풀의 이름 또는 가시성 편집
5. 소유자 추가 또는 제거 - 개인 풀에만 해당

### 질문 유형

OpenOlat에는 학습 리소스 Test의 테스트 편집기 또는 문제 은행의 항목 편집기에서 생성할 수 있는 몇 가지 표준화된 [질문 유형 이 있습니다.](https://docs.openolat.org/manual_user/tests/Test_question_types/) OpenOlat의 기본 질문 유형이 충분하지 않은 경우 추가 질문 유형을 만듭니다. 기본 질문 유형은 삭제할 수 없습니다.

기본값과 다른 질문 유형은 편집기를 사용하여 생성할 수 없지만 "항목 분석" 범주의 "유형" 메타데이터를 사용하여 상세 보기에서 기본 유형의 기존 질문에 할당해야 합니다. 이 스타일로 수정된 질문은 여전히 원래 질문 유형에 해당하지만 새 유형은 이제 질문 풀의 "유형" 열에 표시됩니다.

새로 생성된 질문은 사용 가능한 언어별로 번역되어야 합니다. 그래야 예를 들어 독일어와 영어를 사용하는 사용자가 여기에 표시되는 번역 키가 아니라 올바른 용어를 볼 수 있습니다.

새로 생성된 질문은 사용 가능한 각 언어로 번역되어야 합니다. 예를 들어 독일어와 영어를 사용하는 사용자에게 스크린샷에 표시되는 번역 키 대신 올바른 용어가 표시되도록 합니다.

**유형 생성**

### **질문 유형 만들기**

새 질문 유형을 성공적으로 생성하면 맨 아래의 유형 표에 새 유형이 나타납니다. 번역 또는 누락된 번역이 번역 열에 표시됩니다. 다음 이름 규칙이 항상 적용됩니다.

```
item.type.[Type name]

```

이것은 새로운 유형이 OpenOlat 시스템에서 사용 가능한 다양한 언어로 번역될 수 있도록 하는 소위 번역 키입니다.

![https://docs.openolat.org/manual_user/question_bank/assets/qb_qtypes_EN.gif](https://docs.openolat.org/manual_user/question_bank/assets/qb_qtypes_EN.gif)

번역 열에서 해당 줄을 클릭합니다. 다음 양식이 열립니다.

![https://docs.openolat.org/manual_user/question_bank/assets/qb_translate_EN.gif](https://docs.openolat.org/manual_user/question_bank/assets/qb_translate_EN.gif)

1. 테이블에 잠시 표시되는 것처럼 드롭다운 메뉴 "번역 키"에 나열된 유형 이름을 볼 수 있습니다. 이 메뉴 또는 위의 "패키지" 메뉴는 변경할 수 없습니다.
2. "Adaptions: English" 필드에 지정된 유형 이름을 입력합니다. 이제부터 이 이름은 이 유형의 이미 존재하는 질문에 대한 "유형" 아래의 문제 은행 테이블뿐만 아니라 세부 보기의 유형 선택에서 여기 테이블에 표시됩니다.
3. 비교 언어를 활성화하고 해당 언어를 선택하여 용어를 비교하고 확인합니다.

OpenOlat 시스템에서 사용 가능한 모든 언어에 대해 이 단계를 반복합니다.

### 수준

레벨은 문제 은행에 다른 분류 옵션을 추가하고, 난이도와 비교할 수 있습니다. 조직의 교육 수준에 적용되는 수준을 만듭니다. 학문적 맥락에서 수준의 예로는 초등학교, 중학교, 고등학교, 학사, 석사를 들 수 있습니다. 기업 컨텍스트 내에서 수준은 다음과 같을 수 있습니다. 견습 없이 직업 훈련, 관리, 중간 관리, CO. 새 수준은 새 질문 유형 생성과 유사하게 생성됩니다.

![https://docs.openolat.org/manual_user/question_bank/assets/qb_det_edu_EN.gif](https://docs.openolat.org/manual_user/question_bank/assets/qb_det_edu_EN.gif)

질문 항목의 수준은 해당 질문의 세부 정보 페이지를 연 다음 "교육" 범주에서 "수준" 메타데이터를 변경하여 할당할 수 있습니다.

질문 유형과 마찬가지로 새로 생성된 레벨은 사용 가능한 각 언어로 번역되어 예를 들어 독일어와 영어를 사용하는 사용자에게 올바른 용어가 표시되도록 해야 합니다. "유형 생성"에 설명된 대로 진행합니다.