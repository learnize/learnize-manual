---
sidebar_position: 1
---

# 지식 이전

## 코스 요소: 구조

![http://docs.learnize.co.kr/manual_user/course_elements/assets/structure.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/structure.png)

과정 요소 " 구조"는 과정을 정렬하는 역할을 합니다. 기본적으로 짧은 제목, 제목 및 설명과 함께 모든 하위 요소에 대한 자동 개요를 제공합니다. 이 과정 요소를 사용하여 과정 내용을 정렬하거나 모듈을 명확하게 구분하십시오. 추가 정보는 [여기](http://docs.learnize.co.kr/manual_user/course_elements/Course_Element_Structure/) 에서 찾을 수 있습니다 .

## 과정 요소: 단일 페이지

![http://docs.learnize.co.kr/manual_user/course_elements/assets/single_page.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/single_page.png)

코스 요소 "단일 페이지"에서 다양한 파일을 코스 구조에 직접 통합할 수 있습니다. 이러한 웹 전용 파일(pdf, html)은 이미 코스 폴더 또는 링크된 리소스 폴더에 있거나 코스 편집기를 사용하여 HTML 페이지로 직접 생성할 수 있습니다. 이러한 방식으로 링크된 웹 파일은 코스 요소 "폴더"를 통한 제공과 대조적으로 코스 구조에 직접 표시됩니다. 코스 요소 "단일 페이지"는 특히 빠르게 볼 수 있는 정보 및 하이퍼텍스트 기반 콘텐츠 제공에 적합합니다. 코스 요소 "단일 페이지" 및 "여러 단일 페이지"에 대한 추가 정보는 [여기](http://docs.learnize.co.kr/manual_user/course_elements/Course_Element_Single_Page/) 에서 찾을 수 있습니다 .

## 과정 요소: 외부 페이지

![http://docs.learnize.co.kr/manual_user/course_elements/assets/external_page.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/external_page.png)

코스 요소 "외부 페이지"의 도움으로 외부 웹사이트를 불러올 수 있습니다. "페이지 콘텐츠" 탭의 구성에 원하는 URL을 입력하기만 하면 외부 페이지를 코스 탐색에 통합할 수 있습니다. 링크된 페이지의 표시를 위해 변형

- "임베디드(소스 숨김)",
- "임베디드(소스 표시)",
- "새 브라우저 창"(소스 표시) 및
- "완전히 통합됨(소스 숨김)

제공됩니다.

인증이 필요하고 소스가 숨겨진 페이지의 경우 "페이지 비밀번호 제어"를 활성화하고 "사용자" 및 "비밀번호" 필드에 해당 값을 입력할 수 있습니다.

데이터베이스 쿼리(예: 연구 도구, 온라인 연습 등)가 포함된 페이지를 포함하려는 경우 이 과정 요소를 사용하는 것이 좋습니다. HTTP 또는 http 프로토콜을 통해서만 외부 페이지를 연결할 수 있습니다.

### 외부 페이지: 구성

**URL:** 이 필드를 작성해야 합니다. 여기에서 원하는 외부 학습 콘텐츠를 찾을 수 있는 사이트를 나타냅니다(예: *http://www.server.com/page.html* ).

**디스플레이 구성:** 네 가지 옵션 중에서 선택할 수 있습니다.

- *완전히 통합됨(소스 숨김):* 외부 HTML 페이지가 구문 분석되어 OLAT 페이지에 완전히 통합됩니다. **HTML 페이지에는 이미지, 플래시, 비디오 또는 상대 경로** 가 있는 링크와 같은 리소스만 포함될 수 있습니다 . "/public"(bsic URI에 상대적)과 같은 절대 상대 경로 또는 "http://..."와 같은 절대 경로는 허용되지 않습니다.
- *내장(소스 숨김):* 외부 HTML 페이지가 소위 «iframe«에 포함됩니다. 외부 페이지의 인터넷 주소는 표시되지 않습니다. **HTML 페이지에는 이미지, 플래시, 비디오 또는 상대 경로** 가 있는 링크와 같은 리소스만 포함될 수 있습니다 . "/public"(bsic URI에 상대적)과 같은 절대 상대 경로 또는 "http://..."와 같은 절대 경로는 허용되지 않습니다.
- *임베디드(소스 표시):* 이는 또한 «iframe«에 외부 HTML 페이지를 포함하는 것을 의미합니다. OLAT 페이지의 소스 코드는 외부 페이지의 인터넷 주소를 표시합니다.
- *새 브라우저 창(소스 표시):* 또 다른 옵션은 자체 브라우저 창에 외부 페이지를 표시할 수 있는 가능성입니다.

위의 두 가지 옵션을 선택하면 외부 페이지에서 요청하는 경우 OLAT에서 사용자 이름과 비밀번호를 전송합니다.

포함된 프레임(«iframe«)은 단일 브라우저 창과 유사하지만 초기 창의 HTML 페이지의 일부입니다.

«iframe« 사용의 장점: OLAT의 모든 콘텐츠(예: 중첩 프레임의 복잡한 웹 페이지, mathML 등)를 표시할 수 있습니다.

«iframe« 사용의 단점: 콘텐츠가 자체 스크롤 막대와 함께 나타날 수 있습니다.

**정보**

어떤 변형이 귀하의 사례에 적합한지 확실하지 않은 경우 "완전히 통합" 옵션으로 시작하고 링크된 페이지가 원하는 대로 표시될 때까지 다른 표시 옵션을 테스트하십시오.

## 과정 요소: CP 학습 콘텐츠

![http://docs.learnize.co.kr/manual_user/course_elements/assets/content.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/content.png)

코스 요소 "CP 학습 콘텐츠"를 사용하여 IMS-CP 형식(IMS-CP 버전 1.1.2)의 학습 콘텐츠를 코스에 통합합니다. Learnize에서 직접 CP를 생성하거나 " [콘텐츠 패키징을 위한 5단계](http://docs.learnize.co.kr/manual_user/resource_cp/In_Five_Steps_to_Your_Content_Package/) " 장에 설명되어 있습니다 . [또는 eLML](http://www.elml.co.kr/) 과 같이 외부에서 CP를 생성할 수 있습니다 .

CP에 대한 추가 정보는 [여기](http://docs.learnize.co.kr/manual_user/resource_cp/) 에서 확인할 수 있습니다 .

## 코스 요소: SCORM 학습 콘텐츠

![http://docs.learnize.co.kr/manual_user/course_elements/assets/scorm.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/scorm.png)

코스 요소 "SCORM 학습 콘텐츠"를 사용하여 외부에서 생성된 SCORM 패키지를 Learnize 코스에 통합할 수 있습니다. SCORM은 콘텐츠와 대화형 e-러닝 모듈을 캡슐화하고 다른 시스템에 통합할 수 있는 표준입니다. 코스 요소 SCORM의 구성에 대한 추가 정보는 " [코스 요소: SCORM 학습 콘텐츠](http://docs.learnize.co.kr/manual_user/course_elements/Course_Element_SCORM_Learning_Content/) " 장에서 찾을 수 있습니다.

## 과정 요소: 문서

![http://docs.learnize.co.kr/manual_user/course_elements/assets/document_icon.jpg](http://docs.learnize.co.kr/manual_user/course_elements/assets/document_icon.jpg)

코스 요소 "문서"를 통해 다양한 문서 형식을 코스에 직접 통합할 수 있습니다. 이 코스 요소는 특히 Office 문서, PDF 또는 그래픽 파일 표시에 적합합니다. 이미 존재하는 파일에 액세스하거나 새 파일을 업로드하거나 생성할 수 있습니다. 통합 문서 뷰어를 사용하여 워드 프로세싱 문서 및 PDF를 직접 표시합니다.

과정의 저장 폴더에 있거나 별도의 학습 리소스로 업로드된 파일을 사용할 수 있습니다. 새로 생성할 수 있는 파일 형식은 해당 Learnize 인스턴스의 관리 설정에 따라 다릅니다.

통합 문서는 나중에 편집, 교환 또는 별도의 학습 리소스로 저장할 수 있습니다. 파일 형식에 따라 메타데이터 편집과 같은 다른 옵션도 가능합니다. Learnize Administration에서 해당 라이선스가 활성화되면 텍스트 문서를 편집할 수도 있습니다. 그러면 편집기가 별도의 창에서 열립니다.

또한 코스 편집기에서 코스 요소에 대한 사용자 권한을 설정하여 해당 문서를 편집하고 다운로드할 수 있는 역할을 정의할 수 있습니다(가능한 경우).

디스플레이 영역의 높이도 정의할 수 있습니다.

해당 문서를 다운로드한 후 메타데이터는 문서를 마지막으로 편집한 사람을 보여줍니다.

**메모**

비디오 파일의 경우 코스 요소 "비디오"를 사용해야 하고 HTML 페이지의 경우 코스 요소 "단일 페이지"를 사용해야 합니다.

## 코스 요소: 폴더

![http://docs.learnize.co.kr/manual_user/course_elements/assets/folder.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/folder.png)

코스 요소 "폴더"에서 다운로드할 파일을 제공할 수 있습니다. 코스 요소 폴더는 종종 슬라이드나 스크립트와 같은 코스 자료를 제공하는 데 사용됩니다. 또한 코스 요소 "폴더"는 학습자의 파일 업로드를 위한 협업 도구로 구성할 수도 있습니다.

코스 요소 "폴더"의 구성 및 사용에 대한 추가 정보는 [여기](http://docs.learnize.co.kr/manual_user/course_elements/Course_Element_Folder/) 에서 찾을 수 있습니다 .

## 코스 요소: 팟캐스트

![http://docs.learnize.co.kr/manual_user/course_elements/assets/podcast.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/podcast.png)

코스 요소 "Podcast"는 다른 사람에게 자신의 오디오 및 비디오 파일을 쉽게 제공하거나 Learnize의 외부 팟캐스트 에피소드를 제공하는 데 사용할 수 있습니다. 코스 참가자는 Learnize 내에서 직접 에피소드를 볼 수 있습니다. 또는 팟캐스트를 구독하고 iTunes와 같은 온라인 서비스를 통해 업로드한 후 모바일 장치에 복사할 수 있습니다.

팟캐스트 를 [만들고](http://docs.learnize.co.kr/manual_user/resource_podcast/Four_Steps_to_Your_Podcast/) [구성](http://docs.learnize.co.kr/manual_user/resource_podcast/Podcast_-_Further_Configurations/) 하는 방법 은 별도의 장에서 설명합니다.

## 코스 요소: 블로그

![http://docs.learnize.co.kr/manual_user/course_elements/assets/blog.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/blog.png)

"블로그"를 통해 코스 참가자에게 텍스트, 사진 또는 비디오의 형태로 현재 주제에 대해 알릴 수 있습니다. 외부 블로그를 통합하고 새로운 OLAT 학습 리소스 "블로그"를 만들고 사용할 수 있습니다. 예를 들어 코스 소유자는 블로그에서 정기적으로 블로그를 유지 관리하여 이벤트 주제에 대한 새로운 현재 콘텐츠에 대해 코스 참가자에게 알릴 수 있습니다. 그런 다음 참가자는 이러한 기여에 대해 댓글을 달고 별 1-5개로 평가할 수 있습니다. 또한 강좌 참여자에게 블로그 작성 권한을 부여하여 강좌 블로그를 공동 운영할 수도 있습니다.

블로그 를 [만들고](http://docs.learnize.co.kr/manual_user/resource_blog/Four_Steps_to_Your_Blog/) [구성](http://docs.learnize.co.kr/manual_user/resource_blog/Blog_-_Further_Configurations/) 하는 방법 은 별도의 페이지에 설명되어 있습니다.

## 코스 요소: 비디오

![http://docs.learnize.co.kr/manual_user/course_elements/Knowledge_Transfer/assets/video_64_0_434343_none.png](http://docs.learnize.co.kr/manual_user/course_elements/Knowledge_Transfer/assets/video_64_0_434343_none.png)

코스 요소 "비디오"를 사용하면 OLAT에서 학습 리소스 비디오로 사용할 수 있는 URL을 통해 가져온 비디오 또는 자체 제작 비디오를 코스에 추가할 수 있습니다. 코스 요소당 하나의 비디오가 연결됩니다. 비디오는 주석을 달고 평가할 수 있으므로 과정의 학습 및 교육 과정에 최적으로 통합됩니다.

코스 요소 비디오에 대한 추가 정보는 [여기](http://docs.learnize.co.kr/manual_user/resource_video/Course_Element_Video/) 에서 찾을 수 있습니다 . OLAT 퀴즈 및 점프 표시를 사용한 비디오 후처리에 대한 정보는 " [학습 자료: 비디오](http://docs.learnize.co.kr/manual_user/resource_video/Learning_resource_Video/) " 장에서 찾을 수 있습니다.

## 코스 요소: 비디오 실시간 스트리밍

## 코스 요소: 오픈캐스트

코스 요소인 Opencast를 사용하면 Opencast 서버에 저장된 회의 및 코스 녹화를 Learnize 코스에 통합할 수 있습니다. Opencast 서버의 구성 및 연결은 관리에서 수행됩니다. 코스 요소에서 단일 비디오 또는 전체 시리즈를 통합할 수 있습니다.

## 과정 요소: 교육 공유

## 코스 요소: card2brain

![http://docs.learnize.co.kr/manual_user/course_elements/assets/card2brain_434343_64.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/card2brain_434343_64.png)

코스 요소 card2brain을 사용하면 플래시 카드로 학습할 수 있습니다. 이 과정 요소를 사용하려면 card2brain의 기업 로그인이 필수입니다. [frentix의 고객은 card2brain@](mailto:card2brain@frentix.com) [frentix.com](http://frentix.com/) 으로 문의하십시오 [.](mailto:contact@frentix.com.) 비 고객은 [card2brain](http://card2brain.ch/info/contact) 에 직접 문의하십시오.

과정 요소에 대한 추가 정보는 [여기](http://docs.learnize.co.kr/manual_user/course_elements/Course_Element_card2brain_Flashcards/) 에서 찾을 수 있습니다 .

## 코스 요소: Edubase

![http://docs.learnize.co.kr/manual_user/course_elements/assets/edubas_icon.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/edubas_icon.png)

이 과정 요소를 사용하면 Edubase의 전자책에 연결할 수 있습니다. 전자책은 Learnize에서 열 수 있습니다.

이 과정 요소를 사용하기 위한 전제 조건은 Edubase 계정과 특정 전자 책을 사용할 수 있는 권한입니다. [frentix의 고객은 edubase@frentix.com](mailto:edubase@frentix.com) 으로 문의 하십시오 [.](mailto:contact@frentix.com.) [고객이 아닌 경우 Edubase](http://www.edubase.ch/) 에 직접 문의하십시오 .

**정보**

관리에서 모듈을 먼저 활성화하고 구성해야 하며 eBook에 대한 인증 키도 필요합니다. 사전 설정이 완료되는 즉시 코스 요소를 Learnize에 추가할 수 있습니다. 편집기를 사용하여 포함된 전자책에 대한 사용자의 특정 읽기 순서를 정의할 수 있습니다.

![http://docs.learnize.co.kr/manual_user/course_elements/assets/Edubase_EN.png](http://docs.learnize.co.kr/manual_user/course_elements/assets/Edubase_EN.png)