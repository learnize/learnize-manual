---
sidebar_position: 3
---

# 전문가 모드에서 액세스 제한

## 전문가 규칙 소개

**주목**

"가시성" 및 "접근" 탭의 설정은 일반 코스에서만 사용할 수 있습니다. 즉, 전문가 모드는 "학습 경로 코스"가 아닌 일반 코스에서만 사용할 수 있습니다.

일반 코스의 "가시성" 및 "접근" 탭에서 많은 코스 요소에 대한 추가 기본 설정을 구성할 수 있습니다. 예를 들어, 학습자의 코스 요소를 차단하거나, 특정 그룹에 대해서만 액세스 권한을 부여하거나, 날짜에 따라 잠금을 해제할 수 있습니다.

더 복잡한 가시성 또는 액세스 규칙의 경우 전문가 모드를 사용할 수 있으므로 필요에 따라 코스 요소의 가시성 및 액세스를 구성할 수 있습니다. 예를 들어 코스 요소에 대한 액세스를 특정 사용자 이름으로 제한하거나 여러 유형의 제한을 서로 연결하거나 상대적 날짜 값으로 작업할 수 있습니다. 다음 예는 이를 보여줍니다.

- **설문지 예시**

전문가 규칙은 주로 시간과 작업을 절약하거나 단순화하는 데 사용됩니다. 따라서 그것들을 자세히 살펴보려고 노력할 가치가 있습니다. 모든 언어와 마찬가지로 전문가 규칙은 구문을 따릅니다. Learnize은 구문상의 실수를 하면 오류를 표시합니다. 이것은 특히 프로그래밍 기술이 전혀 없거나 거의 없는 경우 처음에 매우 유용합니다. 전문가 규칙은 특정 속성이 TRUE 또는 FALSE인지 확인합니다.

전문가 규칙의 구문에 대한 소개로 처음에는 단순 모드에서 규칙을 정의해야 합니다. 예를 들어, "단일 페이지"를 생성하고 "액세스" 탭에서 "학습자 차단"을 클릭할 수 있습니다.

그런 다음 "전문가 모드 표시"를 클릭하고 첫 번째 전문가 규칙을 확인합니다.

```
(  ( isCourseCoach(0) | isCourseAdministrator(0) ) )

```

전체 용어는 이중 괄호로 묶입니다. 이 경우 두 개의 외부 브래킷을 생략할 수 있습니다. 그냥 시도해보십시오. 중앙의 수직선 "|"은 부울 연산자 OR이며 코스 코치와 코스 관리자를 연결합니다. 둘 다 "단일 페이지"에 독점적으로 액세스할 수 있습니다.

이제 부울 연산자를 "&"로 변경합니다.

```
isCourseCoach(0) & isCourseAdministrator(0)

```

이 규칙은 코스 관리자이기도 한 코스 코치에게만 액세스 권한을 부여합니다. 이 기본 설정은 전문가 모드에서만 가능합니다.

여러 시나리오를 시도하고 추가 속성 및 연산자를 삽입할 수 있습니다. 이 장에서는 전문가 규칙에 더 익숙해지는 데 도움이 되는 의미를 설명하는 추가 속성과 예를 찾을 수 있습니다.

## 전문가 규칙 구성

전문가 규칙은 특정 값을 가진 속성이 있는지 확인합니다.

[제목 없음](http://www.notion.so/8ed3ec9813364f86862ae2fa6f99696b)

### "TRUE" 및 "FALSE" 상수 작업

"true" 및 "false" 상수를 사용하여 속성의 존재("true" = "1") 또는 비존재("false" = "0")를 확인할 수 있습니다. 이 경우 우리는 소위 부울 변수(부울 대수의 아버지인 조지 부울의 이름을 따서 명명됨)를 참조합니다. 이러한 변수는 제한된 수의 값 또는 상태만 사용할 수 있습니다. 우리의 특정한 경우, 변수는 두 개의 값만 취할 수 있습니다("true" = "1" = 기존 또는 "false" ="0" = 존재하지 않음).

게스트 예시

OLAT 컨텍스트에서 실용적인 예를 제공하기 위해 과정에 대한 액세스를 관리하기 위한 간단한 전문가 규칙을 사용합니다.

**사례 1:** 게스트 사용자만 코스에 액세스할 수 있습니다. 따라서 해당 사용자는 "isGuest" 속성이 true인 경우에만 액세스 권한을 얻습니다. 이 전문가 규칙에는 세 가지 대안이 있습니다.

**isGuest(0)** 이상 isGuest **(0)=1** 이상 isGuest **(0)=true**

**사례 2:** 이 경우 게스트 사용자가 액세스하지 못하도록 하고 싶습니다. 따라서 해당 사용자는 "isGuest" 속성이 false인 경우에만 액세스 권한을 얻습니다. 이 전문가 규칙에는 두 가지 대안이 있습니다.

**isGuest(0)=0** 이상 isGuest **(0)=거짓**

전문가 규칙을 적용하는 데 필요한 모든 관련 구성 요소의 광범위한 목록은 다음 상자에서 찾을 수 있습니다.

함수, 연산자 및 기타 전문가 규칙 구성 요소

[제목 없음](http://www.notion.so/94273c76c8ca4da585bf479015387c5f)

사용자 속성

다양한 전문가 규칙에서는 액세스 콘텐츠에 대해 적격한 사용자를 필터링하기 위해 사용자 속성을 사용해야 합니다. 이러한 규칙을 통해 저자는 이름, 성별, 주소, 연구 분야 등에 따라 액세스 권한을 제한할 수 있습니다. 이러한 사용자 속성은 일반적으로 사용자 프로필에서 볼 수 있습니다.

Learnize은 이러한 속성에 대한 표준화된 용어를 제공합니다. 다음 전문가 규칙에서는 사용자 속성을 사용해야 합니다.

- getUserProperty *("")*
    
    [사용자 속성 이름 ]
    
- hasUserProperty("[ *사용자 속성 이름]", " [문자열]")*
- userPropertyStartswith(" [ *userPropertyname ]", "[하위 문자열]")*
- userPropertyEndswith(" [ *userPropertyname ]", "[하위 문자열]")*
- isInUserProperty(" [ *사용자 속성 이름 ]", "[하위 문자열]")*
- isNotInUserProperty("[ *userPropertyname ]", "[하위 문자열]")*
- hasNotUserProperty("[ *사용자 속성 이름 ]", "[문자열]")*

다음 전문 규칙의 경우 세 번째 매개변수가 **다중 값 필드인** 경우 구분 기호를 지정할 수 있습니다 .

- hasUserProperty("[ *사용자 속성 이름]", "[문자열]", " , ")*
- hasNotUserProperty("[ *사용자 속성 이름]", "[문자열]", " , ")*

다음 사용자 속성은 Learnize에서 사용할 수 있습니다. 사용자 속성을 사용한 액세스 제한은 해당 사용자 속성이 사용되고 일반적으로 시스템 전체에 채워진 경우에만 성공할 수 있습니다. 사용 가능한 사용자 속성에 대한 구성/프로필의 개인 메뉴에서 사용자 프로필을 확인하기만 하면 됩니다. 질문은 시스템 관리자에게 문의하십시오.

[제목 없음](http://www.notion.so/7f7a24866e9b4fd08307693c40315c07)

"getUserProperty"를 적용하는 방법에 대한 예:

- 특정 연구 분야의 과정 참가자에게만 액세스 권한이 부여되어야 합니다.
    
    ```
    getUserProperty("studySubject") = "Mechanical Engineering"
    
    ```
    

이제 액세스가 필요한 사람은 먼저 프로필에서 "연구 분야" 필드를 완성하고 "기계 공학"으로 명시해야 합니다.

- 반대로 프로필에 연구 분야를 명시하지 않은 사람에게만 액세스 권한을 부여하려는 경우 해당 규칙을 다음과 같이 표현할 수 있습니다.
    
    ```
    getUserProperty("studySubject") = ""
    
    ```
    
- 프로필에서 연구 분야를 완료한 과정 참가자에게만 액세스 권한을 부여하려면(연구 주제가 무엇이든 상관없이) 규칙을 다음과 같이 정의할 수 있습니다.
    
    ```
    getUserProperty("studySubject") = "" = false
    
    ```
    

또는

```
    getUserProperty("studySubject") = "" = 0

```

단일 규칙을 서로 연관시키는 다양한 옵션이 있습니다. 속성을 결합하는 데 가장 중요한 두 가지 연산자는 다음과 같습니다.

- AND 접속사: &
- 또는 접속사: |

OR 접속사는 AND 접속사 앞에 옵니다. AND 연결을 처리하려면 먼저 대괄호를 사용해야 합니다.

예: 전문가 규칙(inGroup("Participants IntensiveCourse") | isCourseCoach(0))은 집중 과정의 참가자 또는 그룹의 모든 코치가 과정 요소에 액세스할 수 있음을 의미합니다.

전문가 구문을 사용하는 방법을 보여주기 위해 몇 가지 예가 아래에 나열되어 있습니다.

## 전문가 모드의 예

**«가시성», «접근» 및 «점수»(구조 요소) 탭에 있는 전문가 규칙의 예**

**inLearningGroup("Amateur") = 0** *«Amateur»*그룹을 제외하고 이 코스 요소는 모든 참가자에게 표시됩니다.

**(지금 >= date("22.03.2018 12:00")) & (지금 <= date("23.08.2018 18:00")) | inLearningGroup("튜터")**이 과정 요소는 2018년 3월 22일부터 2018년 8월 23일까지 모든 참가자에게 표시됩니다. *«튜터»* 학습 그룹의 구성원 은 항상 볼 수 있습니다.

**(지금 >= date("03.09.2018 00:00")) & (지금 <= date("13.10.2018 00:00")) & inRightGroup("평가자")| isUser("저자")**이 과정 요소는 2018년 3월 9일과 2018년 10월 13일 사이에 *«평가자» 그룹의 모든 참가자에게 표시됩니다.* 사용자 이름이 *«Author»* 인 사람의 경우 항상 표시됩니다.

**hasAttribute("swissEduPersonStudyBranch3","6200")**인간 의학의 학생만 이 코스 요소에 액세스할 수 있습니다.참조:AAI 속성[__ AAI 속성 사양(pdf 파일)](http://www.switch.ch/aai/docs/AAI_Attr_Specs.pdf)

**hasAttribute("swissEduPersonHomeco.kranization"," [uzh.ch](http://uzh.ch/) ")**취리히 대학교의 학생만 이 코스 요소에 액세스할 수 있습니다.참조:AAI 속성[__ AAI 속성 사양(pdf 파일)](http://www.switch.ch/aai/docs/AAI_Attr_Specs.pdf)

**isInAttribute("surname","Mue") 속성** *성에* 문자 시퀀스 "Mue"가 포함된 모든 사람에 대해 TRUE를 생성합니다 . 예를 들어 "Mueller" 또는 "Muehlebacher" 값에 대해 TRUE를 제공합니다. 참조: AAI 속성 [__ AAI 속성 사양(pdf 파일)](http://www.switch.ch/aai/docs/AAI_Attr_Specs.pdf)

**isInAttribute("eduPersonEntitlement"," [http://vam.uzh.ch](http://vam.uzh.ch/) ")** *eduPersonEntitlement 속성에 "* [http://vam.uzh.ch](http://vam.uzh.ch/) " 값이 포함된 모든 사람에 대해 TRUE를 생성합니다 . 예를 들어 값 " [http://vam.uzh.ch/surgery](http://vam.uzh.ch/surgery) " 에 대해 TRUE를 제공합니다 . 참조: AAI 속성 [__ AAI 속성 사양(pdf 파일)](http://www.switch.ch/aai/docs/AAI_Attr_Specs.pdf)

**(getUserProperty("co.krUnit") = "Sales")**개인이 'Sales' 조직 단위의 일부인지 확인합니다. 이것은 데이터가 LDAP에서 자동으로 전송되는 경우에 유용할 수 있습니다.

**(getPassed("69742969114730") | getPassed("69742969115733") | getPassed("69742969118009")) * 10**이 규칙은 과정 요소 *Structure 의 «Score»* -> *«Processing score»* 탭에서 설정됩니다 . 과정 요소 *구조* 는 테스트 중 하나(과정 요소 ID "69742969114730", "69742969115733" 또는 "69742969118009")가 통과된 경우 10점을 표시합니다. 그렇지 않으면 0점.

**(getScore("69742969114730") + getScore("69742969115733") + getScore("69742969118009")) >= 140 | getPassed("69978845384688")**이 규칙은 과정 요소 *Structure 의 «Score»* -> *«Passed if»* 탭에서 설정됩니다 . 과정 요소 *구조* 는 모든 테스트에서 최소 140점을 달성하거나 *«* 통과» 를 수동으로 입력 한 경우 *«통과» 로 표시됩니다.* ( ID가 "69978845384688"인 요소 *평가 ).*

**getAttempts("70323786958847") > 0**해당 과정 참가자가 지정된 ID로 처음으로 테스트를 완료하는 즉시 TRUE를 생성합니다.

**getAttempts("70323524635734") <= 3**해당 과정 참가자가 과정 요소의 저장소 폴더에 3개 이상의 파일을 넣으면 즉시 FALSE를 생성합니다 ~~ *작업(사용되지 않음)* ~~ .

**getLastAttemptDate("70323524635734") + 24h < 이제**마지막 테스트 시도가 24시간보다 오래된 경우 TRUE를 생성합니다.

**getInitialEnrollmentDate("70323786958847") <= date("26.5.2005 18:00")** 지정된 ID 의 *등록*과정 요소를 통해 2005년 5월 26일 오후 6시 이전에 사용 가능한 그룹에 등록한 참가자에 대해 TRUE를 생성합니다 .

**getInitialEnrollmentDate("70323786958847") + 2h > 이제** 지정된 ID 의 *등록*과정 요소를 통해 사용 가능한 그룹에 등록한 참가자에 대해 등록 시점부터 2시간 이내에 TRUE를 생성합니다 . 이렇게 하면 모든 참가자가 특정 시간 프레임 내에서만 스크립트 작업을 할 수 있다는 점을 분명히 알 수 있습니다.

**(getInitialCourseLaunchDate(0) >= 절대) | (getInitialCourseLaunchDate(0) + 2h > now)**코스 참가자가 아직 코스를 수강하지 않았거나 코스를 수강한 후 처음 2시간 동안 TRUE를 생성합니다. 이렇게 하면 각 코스 참가자가 특정 기간 동안만 코스를 볼 수 있음을 나타낼 수 있습니다.

**(getRecentCourseLaunchDate(0) + 10min < now)**사용자가 코스 내에서 10분 이상 활성 상태인 경우 TRUE를 생성합니다.

**(getCourseBeginDate(0) <= 오늘) & (getCourseEndDate(0) >= 오늘)**오늘 날짜가 실행 기간의 시작 날짜와 종료 날짜 사이에 있으면 TRUE 값을 반환합니다.

**isAssessmentMode(0)**과정이 평가 내에 있는 경우 TRUE 값을 반환합니다.

**hasUserProperty("email","john.doe@Learnize.co.kr")**코스 참가자가 나열된 전자 메일 주소로 Learnize에 등록된 경우 TRUE를 생성합니다.

**hasUserProperty("typeOfUser","staff", " , ")**학생이 "사용자 유형" 필드(예: "직원, 학생")에 "직원" 값이 있는 경우 참을 생성합니다.

**userPropertyEndswith("email","@Learnize.co.kr")**코스 참가자의 이메일 주소가 *@Learnize.co.kr* 로 끝나는 경우 TRUE를 생성합니다 .

**isInUserProperty("email","doe@openo") doe** *@openo* 라는 용어 가 코스 참가자의 전자 메일 주소의 일부인경우 TRUE를 생성합니다 .

**isNotInUserProperty("email","doe@openo") doe** *@openo* 라는 용어 가 코스 참가자의 전자 메일 주소의 일부인경우 FALSE를 생성합니다 .

**주목**

위에서 언급한 과정 요소의 ID는 예시일 뿐입니다. 과정을 생성하려면 선호하는 과정 요소 의 첫 번째 탭 *«제목 및 설명»* 에서 사용할 수 있는 관련 번호를 참조해야 합니다 .

## AAI 속성 사용

AAI 인프라에 액세스할 수 있는 스위스 학계 또는 기타 기관에 등록한 경우 AAI 속성을 통해 특정 사용자 속성(예: 특정 조직의 구성원)을 가진 코스 참가자만 코스 내에서 액세스 규칙을 설정할 수 있습니다. 강의 자료에 액세스할 수 있습니다. AAI는 "인증 및 권한 부여 인프라"를 의미하며 대학 구성원이 하나의 사용자 이름과 암호만으로 다른 참여 기관의 시스템을 사용할 수 있도록 합니다. AAI에 대한 추가 정보는 예를 들어 [Switch](http://www.switch.ch/aai/) 또는 [Deutsches Forschungsnetz](http://www.aai.dfn.de/en/) 로 이동하십시오 .

사용 가능한 속성 및 가능한 값은 [스위치](http://www.switch.ch/aai/docs/AAI_Attr_Specs.pdf) 의 AAI 속성 사양 및 [DFN-AAI](http://www.aai.dfn.de/der-dienst/attribute/) 사이트(독일어)에 설명되어 있습니다. 스위스 대학에서 가장 일반적인 두 가지 속성은 해당 전문가 규칙의 예와 함께 다음 표에서 찾을 수 있습니다.

[제목 없음](http://www.notion.so/c1224a335d3049f89f9b3cd98d206757)

### 이용

***hasAttribute("* [AttrName] *","* [string] *")*** 또는***isInAttribute("* [AttrName] *","* [substring] *")*** 구문을 사용하여 AAI 속성을 검색할 수 있습니다 .

어디에:

- **[AttrName]***LDAP 이름*
    
    은 다음 표와 5페이지 의 AAI 속성 사양(pdf 파일)(열
    
    )에서 찾을 수 있는 속성 이름 입니다.
    
- **[문자열]**
    
    은 이름이 [AttrName]인 AAI 속성의 값입니다.
    
- **[substring]**
    
    은 [string]의 일부입니다.
    

### **AAI 검색 예: John Doe**

John Doe에 대한 값

[제목 없음](http://www.notion.so/c356f58f4d324b78a30c5a6e31f1e212)

위에서 언급한 "John Doe"의 경우 다음 검색이 각각 생성됩니다.

[제목 없음](http://www.notion.so/4fd0764caf964879adfe97fe24ade64d)

20페이지의 AAI 속성 사양(pdf 파일) 부록에서 가능한 속성 값 목록에 대한 링크를 찾을 수 있습니다. [AAI 속성 사양(pdf 파일)](http://www.switch.ch/aai/docs/AAI_Attr_Specs.pdf)

속성 값 또는 스위스의 AAI 속성 적용에 대한 추가 정보는 [Switch](http://www.switch.ch/) 로 이동하고 독일의 경우 [Deutsches Forschungsnetz](http://www.aai.dfn.de/en/) 로 이동하십시오 .

코스의 모든 참가자가 AAI 구조를 통해 전화를 걸고 있다고 확신하는 경우에만 AAI 속성을 사용하십시오. 그렇지 않으면 매개변수가 적용되지 않습니다!