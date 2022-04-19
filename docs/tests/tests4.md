# 테스트 설정

## 시험 관리

테스트의 "관리" 영역에서 다른 학습 리소스와 유사한 추가 메뉴를 찾을 수 있습니다. 여기에서 테스트를 더 자세히 구성할 수 있습니다. "설정" 및 "콘텐츠 편집" 메뉴가 특히 중요합니다. "평가 도구"는 시험이 코스와 별도로 사용되는 경우에 적합합니다.

" [콘텐츠 편집](https://docs.openolat.org/manual_user/tests/Test_editor_QTI_2.1/) " 아래 에서 테스트 편집기로 이동합니다. 실제 테스트는 여기에서 생성됩니다. 전체 테스트의 기본 구성은 대부분 "설정", 특히 "옵션" 탭에서 수행됩니다. 이 장에서는 "옵션" 탭에 대해 자세히 설명합니다.

![https://docs.openolat.org/manual_user/tests/Test_settings/assets/Test_administration.png](https://docs.openolat.org/manual_user/tests/Test_settings/assets/Test_administration.png)

### 필기 시험 내보내기

오프라인에서 테스트를 실행하려는 경우 이 마법사를 사용하여 무작위로 선택한 답변이 포함된 다양한 버전의 테스트 리소스와 표지를 생성할 수 있습니다.

1. 옵션에서 언어와 테스트 수, 파일 이름에 대한 접두사를 선택합니다. 표지를 생성할지 추가 페이지를 생성할지 지정할 수도 있습니다.
    
    ![https://docs.openolat.org/manual_user/tests/assets/Test_offline_options_DE.png](https://docs.openolat.org/manual_user/tests/assets/Test_offline_options_DE.png)
    
2. 두 번째 단계에서는 표지에 복사할 속성을 선택합니다. 테스트 리소스에 대한 설명과 같은 일부 속성은 여전히 사용자 지정할 수 있습니다.
    
    ![https://docs.openolat.org/manual_user/tests/assets/Test_offline_Deckblattattribute_DE.png](https://docs.openolat.org/manual_user/tests/assets/Test_offline_Deckblattattribute_DE.png)
    
3. 여기에서 특정 필드를 선택하고 덮어쓸 수 있습니다. 설명 필드는 테스트 리소스에서 복사되어 여기에서 다시 사용자 지정할 수 있습니다.
    
    ![https://docs.openolat.org/manual_user/tests/assets/Test_offline_Deckblattfelder_DE.png](https://docs.openolat.org/manual_user/tests/assets/Test_offline_Deckblattfelder_DE.png)
    
4. 요약에는 작성된 모든 설정의 개요와 생성할 테스트의 미리보기가 포함됩니다. 세대수가 많을 경우 시간이 다소 소요될 수 있으며 브라우저가 항상 응답하지 않을 수 있습니다.
    
    ![https://docs.openolat.org/manual_user/tests/assets/Test_offline_Zusammenfassung_DE.png](https://docs.openolat.org/manual_user/tests/assets/Test_offline_Zusammenfassung_DE.png)
    

## 테스트의 "설정" 메뉴

시험에 대한 일반 설정은 시험 학습 리소스의 "관리"에 있는 "설정"에서 이루어집니다. "옵션" 탭을 선택하고 원하는 설정을 하십시오.

![https://docs.openolat.org/manual_user/tests/assets/Test_menu_settings_DE.png](https://docs.openolat.org/manual_user/tests/assets/Test_menu_settings_DE.png)

### 설정: 탭 옵션

다음과 같은 구성을 할 수 있습니다.

### **표준 설정**

여기에서 다양한 테스트 사용 상황에 대해 미리 구성된 일반적인 설정을 선택합니다.

예를 들어, 그것이 총괄 테스트인지 형성 테스트인지 결정하거나 다른 기본 구성을 사용합니다. 이렇게 하면 특히 경험이 부족한 작성자가 적합한 설정을 더 쉽게 찾을 수 있습니다. 추후 변경 및 개별 조정은 여전히 가능합니다.

![https://docs.openolat.org/manual_user/tests/Test_settings/assets/Test_Standardeinstellungen.png](https://docs.openolat.org/manual_user/tests/Test_settings/assets/Test_Standardeinstellungen.png)

### **테스트 시도 횟수 제한**

여기에 테스트에 대해 가능한 최대 솔루션 시도 횟수를 입력합니다. 값은 최대 20일 수 있습니다.

### **첫 번째 성공적인 시도 횟수**

결과가 "통과"되면 사용자는 테스트를 다시 수행할 수 없습니다.

### **익명 사용자(게스트) 허용**

OpenOlat 계정이 없는 사람도 과정을 완료할 수 있습니다. 결과는 테스트 통계에서도 볼 수 있습니다. 그러나 게스트는 테스트를 중단할 수 없습니다. 완료된 테스트만 계산됩니다.

### **표시 전용 모듈, LMS 숨기기**

이것은 사용자가 테스트 중에 다른 OpenOlat 기능에 액세스하는 것을 방지하기 위해 선택됩니다. OpenOlat은 숨겨져 있으며 테스트가 완료된 후에만 다시 표시됩니다.

### **질문 제목 표시**

사용자에게 질문 제목을 표시하려면 확인란을 선택합니다. 제목이 표시되지 않아야 하지만 탐색이 활성화되면 메뉴 탐색에 익명의 제목이 나타납니다.

### **메뉴 탐색 표시**

메뉴 탐색을 허용 하지 *않는* 경우 :

- 테스트에 "비선형 탐색"이 설정되어 있으면 버튼을 통해 질문 아래 탐색에 액세스하여 다른 질문을 선택할 수 있습니다.
- 테스트가 "선형 탐색"으로 설정된 경우 답변이 제출된 후 다음 질문이 자동으로 나타나며 테스트 담당자는 다른 질문으로 이동할 수 없습니다.

### **개인 메모**

테스트가 완료되면 더 이상 사용할 수 없는 테스트 중에 사용자가 개인 메모를 작성하도록 허용할 수 있습니다.

### **문제 수 및 테스트 진행 상황 표시**

사용자에게 질문 수를 표시하려면 확인란을 선택합니다.

### **테스트에서 포인트 및 점수 표시**

테스트 실행에서 사용자에게 현재 점수를 표시하려면 확인란을 선택합니다.

### **최대 질문 표시 포인트들**

체크박스를 체크하면 문항당 최대 획득 가능 점수가 시험에 표시됩니다.

### **일시 중지 허용**

확인란을 선택하면 사용자가 테스트를 중단할 수 있습니다. 이전 답변은 저장되며 사용자는 나중에 질문에 계속 답변할 수 있습니다.

### **취소 허용**

확인란을 선택하면 코스 참가자가 답변을 저장하지 않고 테스트를 취소할 수 있습니다.

### **테스트 영수증 생성**

이 옵션을 선택하면 테스트가 완료된 후 테스트 영수증이 생성되며 XML 파일로 다운로드할 수 있습니다. 테스트를 확인하는 데 사용됩니다.

![https://docs.openolat.org/manual_user/tests/assets/Testquittung.png](https://docs.openolat.org/manual_user/tests/assets/Testquittung.png)

### **우편으로 시험 영수증 보내기**

"테스트 영수증 생성" 옵션을 선택하면 "메일로 테스트 영수증 보내기" 옵션을 추가로 활성화할 수 있습니다. 생성된 XML 파일은 참가자에게 이메일로 전송됩니다.

### **피드백 표시**

이 확인란이 선택되어 있으면 테스트 프로세스 중에 피드백이 표시됩니다. 확인란을 더 이상 선택하지 않으면 더 이상 피드백이 표시되지 않습니다. 이것은 모든 질문 항목의 피드백과 테스트 수준에서 추가할 수 있는 피드백과 관련이 있습니다. 개별 피드백은 테스트 편집기에서 구성됩니다.

### **테스트 제출 후 결과 표시**

이 확인란을 선택하면 테스트가 완료되면 결과가 표시됩니다. 그러나 테스트 홈 페이지에는 결과가 표시되지 않습니다. 이 설정은 테스트 코스 요소에서 이루어집니다.

다음 옵션에서 표시할 옵션을 선택할 수 있습니다.

- 테스트 요약: 전체 테스트의 메타데이터가 요약으로 표시됩니다(포인트 및 합격/불합격 포함).
- 섹션 요약: 섹션의 메타데이터가 요약으로 표시됩니다.
- 질문 요약: 각 질문의 메타데이터가 표시됩니다.
- 참가자가 제출한 답변: 질문이 아닌 참가자의 답변만 표시됩니다.
- 솔루션: 올바른 솔루션만 표시되지만 질문은 없습니다. 피드백 탭에 올바른 솔루션이 저장되어 있으면 이 옵션을 사용하여 결과 보기에도 표시됩니다.

![https://docs.openolat.org/manual_user/tests/assets/Resultreport.png](https://docs.openolat.org/manual_user/tests/assets/Resultreport.png)

**메모**

[옵션에서 지정한 설정은 테스트가 코스](https://docs.openolat.org/manual_user/tests/Tests_at_course_level/) 에 포함될 때 자동으로 적용 되며, 원하는 경우 "테스트 구성" 또는 "옵션" 탭의 코스 편집기에 있는 각 코스 요소 테스트에서 조정할 수 있습니다.

### 설정: 탭 메타데이터, 공유, 카탈로그

학습 리소스의 추가 설정은 "정보", "메타데이터", "릴리스" 및 "카탈로그" 설정의 추가 탭에서 이루어집니다. "메타데이터" 아래의 라이선스 정보가 요구 사항과 일치하는지 확인하십시오.

## 시험의 채점 메뉴

시험에 교정자를 더 추가하려면 코스 전체에 걸쳐 "채점" 메뉴의 시험 관리에서 교정을 활성화해야 합니다. 그 후에 채점자를 추가하고 채점 과제를 부여하고 추가 설정을 할 수 있습니다.

### "구성" 탭

여기서 외부 채점은 일반적으로 켜져 있습니다. 그런 다음 테스트 항목이 익명으로 평가되는지 또는 가시적인 이름으로 평가되는지 정의할 수 있습니다. 수정 기간은 채점자가 사용할 수 있는 최대 시간을 지정합니다.

시험에 대한 새로운 편집 사항이 있을 때 각 채점자에게 자동으로 통보됩니다. 알림은 테스트 완료 직후 또는 하루에 한 번 보낼 수 있습니다. 이를 위해 적절한 메일 텍스트를 저장하거나 템플릿("언어 템플릿 선택")을 사용할 수 있습니다. 첫 번째 메일 알림 후 사용자가 지정한 간격(일)마다 두 개의 알림 메일을 보낼 수 있습니다.

### "채점자" 탭

여기에 시험을 채점할 사람을 추가합니다. 그 사람이 OpenOlat에서 어떤 역할을 하는지는 중요하지 않습니다. 사용자를 채점자로 추가할 수도 있습니다. 기어 휠을 통해 추가 구성을 수행할 수 있습니다. 예를 들어 그레이더에 접촉, 비활성화 또는 제거할 수 있으며 각각의 등급 지정이 표시될 수 있습니다.

### "과제 채점" 탭

여기에서 다양한 채점자의 채점 과제 처리 상태를 다양한 기준에 따라 표시하고 필터링할 수 있습니다.

교차 코스 수정에 대한 자세한 내용은 [코칭 도구](https://docs.openolat.org/manual_user/tests/e-assessment/Coaching.de.md) 를 참조하십시오 .