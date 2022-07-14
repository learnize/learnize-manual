---
sidebar_position: 1
---

# 데이터 관리 - 질문 만들기 또는 가져오기

![http://docs.learnize.co.kr/manual_user/question_bank/assets/question_bank1.jpg](http://docs.learnize.co.kr/manual_user/question_bank/assets/question_bank1.jpg)

문제 풀에 저장된 문제의 테이블 보기는 다양한 옵션을 제공합니다. 톱니바퀴 아이콘을 통해 귀하와 관련된 모든 열이 선택되었는지 확인하십시오.

## 질문 만들기

질문 항목은 여기에서 QTI 2.1 형식으로 생성되고 추후 사용을 위해 직접 저장됩니다. 생성하는 동안 제목이 지정되고 그 뒤에 질문 유형이 지정되고 가능한 경우 마지막에 선택한 주제가 지정됩니다. 이 방법으로 생성된 질문은 Learnize 학습 리소스 테스트로 가져와서 활용할 수 있습니다.

테스트 생성에 대한 정보는 [여기](http://docs.learnize.co.kr/manual_user/question_bank/Data_Management/Creating+Tests.html) 에서 찾을 수 있습니다 . [" 항목 상세 보기](http://docs.learnize.co.kr/manual_user/question_bank/Item_Detailed_View/) " 장에서 질문의 추가 디자인에 대한 정보 .

## 질문 가져오기

Learnize, 외부 파일 또는 Excel 파일에서 복사 및 붙여넣기를 통해 테스트 또는 질문 학습 리소스를 가져와 문제 은행에 QTI 2.1 항목을 추가합니다. 질문 항목은 항상 가져오기가 시작된 테이블과 "내 질문"에 추가됩니다. 따라서 항목을 목록, 풀 또는 그룹 공유로 직접 가져올 수 있습니다.

다음 가져오기 유형을 사용할 수 있습니다.

- **로컬 컴퓨터 의 ZIP 파일**
    
    : .zip 파일 형식의 질문이나 테스트가 있는 경우 이 옵션을 선택합니다.
    
- **학습 리소스**
    
    "테스트": 사용 가능한 학습 리소스에서 가져올 테스트를 선택합니다. 이렇게 하려면 해당 줄에서 "학습 리소스 가져오기" 링크를 클릭하십시오. 선택한 학습 리소스의 모든 질문을 문제 풀로 직접 가져옵니다. 질문 데이터베이스에서 수행하는지 아니면 풀에서 수행하는지에 따라 질문이 "내 질문"에만 복사되거나 해당 풀에도 복사됩니다.
    
- QTI 2.1 복사&붙여넣기를 통한 **Excel 가져오기**
    
    : 가져오기 마법사에서 찾을 수 있는 "템플릿 Excel 가져오기"에서 질문을 준비하십시오. 아래에서 Excel 파일(CSV)을 통한 질문 가져오기에 대한 자세한 정보를 찾을 수 있습니다.
    

생성한 특히 관련 질문을 즐겨찾기로 표시하여 빠르게 다시 찾을 수 있습니다. 또 다른 가능성은 여러 질문을 목록으로 구성하여 질문에 대한 개별 체계를 구축하는 것입니다.

Excel 파일을 통한 질문 가져오기를 사용하면 간단한 방법으로 한 번에 여러 질문을 가져올 수 있습니다. 예를 들어 질문이 QTI 2.1 표준을 지원하는 경우 Excel 질문 가져오기를 사용하여 다른 시스템에서 질문을 가져올 수 있습니다. 가져오기를 열 때 찾을 수 있는 템플릿을 사용하십시오.

현재 다음 질문 유형이 지원됩니다.

- 단일 선택
- 다중 선택
- 케이프림
- 빈칸 채우기
- 수필
- 성냥
- 끌어서 놓기
- 허위 사실

Excel 파일에서 질문 작성이 완료되면 Excel에서 질문을 선택하고 입력 필드에 복사하여 붙여넣습니다.

질문을 복사할 때 Excel은 셀을 쉼표로 구분된 서식으로 변환합니다. Apple Numbers 또는 OpenOffice와 같은 다른 도구에서도 마찬가지입니다.

키워드

표는 키워드/포인트, 값 및 추가 정보의 2개, 3개 또는 4개의 열로 구성됩니다. 질문은 빈 줄로 구분됩니다.

### **객관식 질문**

**유형** |

객관식 MC

- --|---**제목**
    
    |
    

질문/주제 제목

**질문** |

질문 텍스트입니다. 최소한의 HTML 형식이 허용됩니다.

**최대 답변** | 최대 가능한 답변의 수.**분 답변** | 최소 가능한 답변의 수.**포인트** |

최대 점수. 최소 점수는 항상 0으로 설정됩니다.

**올바른 옵션의 경우 "1", 잘못된 옵션의 경우 "0"** |

옵션 텍스트. 원하는 만큼 옵션을 가질 수 있으며, 각각은 포인트 구성으로 분리된 라인에 있습니다.

### **단일 선택 질문**

단일 선택을 위한 SC

|

단일 선택을 위한 SC

- --|---**제목**
    
    |
    

질문/주제 제목

**질문** |

질문 텍스트입니다. 최소한의 HTML 형식이 허용됩니다.

**포인트** |

최대 점수. 최소 점수는 항상 0으로 설정됩니다.

**이 옵션이 선택된 경우의 포인트, 예: "1"(정확함) 또는 "-1"(잘못됨)** |

옵션 텍스트. 각각 "0" 또는 "1" 포인트 구성으로 분리된 라인에 원하는 만큼 많은 옵션을 가질 수 있습니다.

### **빈칸 채우기(공백) 질문**

**유형** |

빈칸 채우기용 FIB

|

- --|---|---**제목**
    
    |
    

질문/주제 제목

|

**포인트** |

최대 점수. 최소 점수는 항상 0으로 설정됩니다.

|

**텍스트** | 텍스트 요소|

**공백이 올바르게 응답된 경우 포인트(예: "1")**

|

빈틈에 정답. 동의어는 ";"으로 구분하여 입력할 수 있습니다.

| 공백의 크기와 입력할 수 있는 최대 문자가 구성됩니다(예: "10,8").

**케이프림 질문**

[제목 없음](http://www.notion.so/5713a3cd6cd940d6804d23d5bdcff778)

**에세이 질문**

[제목 없음](http://www.notion.so/20aab3d34e46447fa5dbd3c4c412d0cc)

**매치 질문**

**유형** | 매치||

- --|---|---|---**제목**
    
    | 질문 제목/주제|
    
    |
    

**질문** | 질문 텍스트입니다. 최소한의 HTML 형식이 허용됩니다.||

**포인트** | 최대 점수. 최소 점수는 항상 0으로 설정됩니다.||

| 에이| 나| C앤트워트 1| 1 (정답)| 0(오답)| 0(오답)Antwort 2| 0| 0| 1앤트워트 3| 0| 1| 0

**드래그 앤 드롭 질문**

**유형** | 케이프림||

- --|---|---|---**제목**
    
    | 질문 제목/주제|
    
    |
    

**질문** | 질문 텍스트입니다. 최소한의 HTML 형식이 허용됩니다.||

**포인트** | 최대 점수. 최소 점수는 항상 0으로 설정됩니다.||

| 알제리| 케냐| 나미비아나이로비| 0(오답)| 1 (정답)| 0(오답)빈트후크| 0| 0| 1알제| 1| 0| 0

**TrueFalse 질문**

**유형** | 참거짓||

- --|---|---|---**제목**
    
    | 질문 제목/주제|
    
    |
    

**질문** | 질문 텍스트입니다. 최소한의 HTML 형식이 허용됩니다.||

**포인트** | 달성 가능한 최대 점수. 최소 점수는 0입니다.||

| 무응답| 오른쪽| 잘못된파리는 프랑스에 있습니다| 0| 1 (정답)| 0 (오답)베른은 스위스에 있습니다| 0| 1| 0스톡홀름은 덴마크에 있습니다| 0| 0|

1

나열된 필드 외에도 "주제", "키워드", "라이센스" 등과 같은 다른 선택적 필드가 있습니다. 자세한 내용은 가져오기 프로세스의 일부로 제공되는 Excel 가져오기 템플릿을 참조하십시오.