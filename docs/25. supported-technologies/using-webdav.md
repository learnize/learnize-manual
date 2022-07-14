---
sidebar_position: 1
---

# WebDAV 사용

WebDAV는 "웹 기반 분산 저작 및 버전 관리"를 의미합니다. 온라인으로 파일을 전송하는 공개 표준입니다. Learnize은 이 프로토콜을 지원하므로 컴퓨터에서 Learnize 폴더로 파일을 쉽게 전송할 수 있습니다.

**WebDAV의 장점**

WebDAV가 없으면 일반 업로드 양식을 통해서만 Learnize에 파일을 업로드할 수 있습니다. 각 단일 파일을 개별적으로 선택하거나 한 번에 여러 개의 압축 파일을 선택할 수 있습니다. WebDAV를 사용하면 컴퓨터에서 "Drag&Drop"을 사용하여(예: Windows 탐색기를 통해) 단일 파일과 전체 디렉토리를 Learnize 폴더로 복사할 수 있습니다.

## WebDAV 호환 Learnize 폴더

WebDAV를 통해 다음 Learnize 폴더에 액세스할 수 있습니다. 따라서 Learnize에서 요소가 생성되는 방식의 구조가 자동으로 취해집니다.

- [개인 폴더](http://docs.learnize.co.kr/manual_user/personal/Personal_folders/)
    
    (모든 사용자)
    
- [그룹 폴더](http://docs.learnize.co.kr/manual_user/groups/Using_Group_Tools/)
- [폴더 - 코스 요소](http://docs.learnize.co.kr/manual_user/course_elements/Course_Element_Folder/)
- [코스의 저장 폴더](http://docs.learnize.co.kr/manual_user/course_operation/Storage_folder/)
    
    (코스 소유자만 해당)
    
- [리소스 폴더](http://docs.learnize.co.kr/manual_user/authoring/Various_Types_of_Learning_Resources/)
    
    (학습 리소스 소유자만 해당)
    

각 폴더에서 WebDAV를 통해 파일을 업로드할 수 있는 사람은 해당 구성에 따라 다릅니다.

## 요구 사항

Microsoft Windows, Mac OSX, iOS, Android 및 Linux는 일반적으로 드래그 앤 드롭 파일 전송을 위해 WebDAV를 지원합니다. 또한 여러 소프트웨어 패키지에는 WebDAV가 소프트웨어에 직접 구현되어 있습니다(예: Microsoft Office).

WebDAV를 통해 Learnize의 폴더에 액세스하려면 다음이 필요합니다.

- WebDAV 링크: WebDAV 호환 폴더 아래 또는 설정/WebDAV 아래의 개인 메뉴에 표시된 Learnize 서버의 WebDAV 주소
- 귀하의 Learnize 사용자 이름,
- 귀하의 Learnize/WebDAV 비밀번호.

Shibboleth 또는 다른 클라우드 로그인을 통해 Learnize에 액세스하는 경우 홈페이지의 "설정" 섹션에서 WebDAV 비밀번호를 설정할 수 있습니다. "WebDAV" 탭에서 "비밀번호 설정" 버튼을 클릭하기 전에 "설정" 링크를 선택하기만 하면 됩니다. 이미 Learnize 암호가 있는 경우 이 암호를 사용하여 WebDAV에 액세스할 수 있습니다.

**고려하다**

- 운영 체제(특히 Windows)에 따라 50MB보다 큰 문서는 WebDAV로 열 수 없습니다.
- WebDAV-Folders의 저장 용량은 제한되어 있습니다.
- 파일 이름은 100자로 제한됩니다.
- 파일 이름 뒤에 공백을 여러 개 포함할 수 없습니다.
- 그래도 오류 메시지가 나타나면 "고려할 사항"을 살펴보십시오. 할당량이 초과되지 않았는지 확인하십시오(특히 여러 파일이 함께 업로드된 경우).

## WebDAV 연결 설정

- **Windows 10(7, 8, 8.1도 포함)**
    1. 
    2. 
    3. 
    4. 
    5. 
    6. 
    7. 
    8. 
    9. 
    10. 
    11. 
- **윈도우 비스타**
    1. 
    2. 
    3. 
    4. 
    5. 
    6. 
    7. 
    8. 
    9. 
    10. 
    11. 
- **맥**
    1. 
    2. 
    3. 
- **리눅스**
    1. 
    2. 
    3. 
- **대안**
    - 
    - 

## 폴더 구조

연결을 성공적으로 설정한 경우 컴퓨터에서 다음 하위 디렉터리가 포함된 디렉터리가 열립니다.

- **Coursefolders**
    
    : 귀하가 소유하거나 귀하가 회원인 모든 코스의 저장 폴더 및 폴더 코스 요소. 저장소 폴더는 대부분의 경우 작성자 권한을 가진 사용자에게만 표시됩니다. 다른 모든 사용자는 여기에서 코스 폴더를 찾을 수 있습니다.
    
    - *other*
        
        : 이 폴더는 관리학기 학기가 활성화된 경우에만 나타납니다. 이 폴더에서 용어에 추가된 모든 코스를 찾을 수 있습니다.
        
    - *Finished*
        
        : 이 폴더는 관리 학기에 활성화되지 않은 경우에만 나타납니다. 이 폴더에서는 과정 수명 주기에서 완료되도록 설정된 모든 과정을 찾을 수 있습니다. "완료" 탭의 코스 메뉴에 나타나는 코스입니다.
        
- **groupfolders**
    
    : 귀하가 등록되어 있고 해당 폴더에 액세스할 수 있는 모든 그룹.
    
- **home**
    
    : 두 개인 폴더(하위 폴더 "private" 및 "public" 포함).
    
- **sharedfolders**
    
    : 귀하가 소유하거나 멤버십 권한으로 인해 액세스할 수 있는 모든 리소스 폴더. 소유자와 코치는 읽고 쓸 수 있으며 참가자는 읽을 수 있지만 쓸 수는 없습니다.