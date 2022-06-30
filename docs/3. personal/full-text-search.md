---
sidebar_position: 3
---

# 전체 텍스트 검색

![https://docs.openolat.org/manual_user/personal/assets/search.png](https://docs.openolat.org/manual_user/personal/assets/search.png)

검색은 관리에서 활성화된 경우에만 표시되고 사용할 수 있습니다. 그렇지 않은 경우 관리자에게 직접 문의하십시오.

전체 텍스트 검색 상자는 상태 표시줄의 오른쪽 상단에 있습니다. 전체 텍스트 검색은 코스나 그룹 콘텐츠, 포럼 또는 PDF 및 Word 파일에서도 검색어를 찾는 데 도움이 됩니다. 또한 모든 사용자 폴더에서 사용자, 포트폴리오 폴더, 아티팩트 및 문서를 찾을 수 있습니다. 인덱싱되지 않기 때문에 유일한 예외는 개인 폴더입니다.

![https://docs.openolat.org/manual_user/personal/assets/generelle_Suche.png](https://docs.openolat.org/manual_user/personal/assets/generelle_Suche.png)

접근 권한이 있는 강의 콘텐츠의 검색 결과만 얻을 수 있습니다.

보다 자세한 검색을 위해서는 고급검색을 이용하시기 바랍니다.

![https://docs.openolat.org/manual_user/download/attachments/590936/full-text-search2.png](https://docs.openolat.org/manual_user/download/attachments/590936/full-text-search2.png)

![https://docs.openolat.org/manual_user/personal/assets/full-text-search.png](https://docs.openolat.org/manual_user/personal/assets/full-text-search.png)

"고급 검색" 옵션을 선택하십시오. *고급 검색* 모드 를 사용하면 검색을 구체화할 수 있습니다. 이러한 다른 필드는 부울 AND 연산자로 연결해야 합니다. 즉, 예를 들어 *Title* 및 *Author* 필드 를 입력하면 표시된 모든 필드에서 해당 용어가 포함된 문서를 찾을 수 있습니다.

예외: 필드 전체 텍스트 검색은 모든 필드를 검색합니다.

검색어와 함께 학습 콘텐츠에 연결된 검색 결과 목록이 제공됩니다.

정보

전체 OpenOlat에 대한 전체 텍스트 검색 외에도 코스 옵션의 모든 코스에 대해 활성화할 수 있는 [코스 검색 도 있습니다.](https://docs.openolat.org/manual_user/course_create/Course_Settings/#CourseSettings-course_search) 코스 검색은 해당 코스만 검색합니다.

### 통사론

다음 구문을 사용하여 쿼리를 수정할 수 있습니다.

**단일 용어:** 예: *OLAT*

**구문:** 큰따옴표로 묶어야 합니다(예: *"탄산수" )*

**부울 연산자:** 단일 용어와 구를 부울 연산자로 연결할 수 있습니다. 주의 부울 연산자는 대문자여야 합니다.

- **OR:***"Analysing water" Calcium"Analysing water" OR Calcium*
    
    검색어 사이에 부울 연산자를 사용하지 않으면 검색 중인 OR 연산자가 사용됩니다. 예:
    
    및
    
    은 동일한 결과, 즉 다음 중 하나를 포함하는 모든 문서를 생성합니다. "물 분석" 또는 "칼슘"
    
- **AND:***"Analysing water" AND "Calcium"*
    
    AND 연산자를 사용하면 검색 중인 모든 용어가 포함된 문서가 표시됩니다. 예:
    
    은 "Analysing water"와 "Calcium"이 포함된 문서를 표시합니다.
    
- **NOT:***"Analysing water" AND "Calcium" NOT "Tap water"*
    
    NOT 연산자를 사용하면 특정 용어가 포함된 문서가 제거됩니다. 예:
    
    는 "Analysing water" 및 "Calcium"을 포함하지만 "Tap water"는 포함하지 않는 문서를 표시합니다.
    

**와일드카드를 통한 검색:** 특정 단어 조각을 찾기 위해 두 가지 다른 종류의 와일드카드 중에서 선택할 수 있습니다.

- 용어 내의 물음표는 단일 문자를 나타냅니다. 예: 쿼리 *te?t*
    
    는 "test", "text" 등의 단어가 포함된 모든 문서를 찾습니다.
    
- 용어 내의 별표는 임의의 수의 문자를 나타냅니다. 예: 쿼리 *test _는 "test"로 시작하는 단어를 포함하는 모든 문서를 찾습니다. 별표는 용어 안에 넣을 수도 있습니다. _te t*

**퍼지 검색:** 물결표(스윙 대시)를 사용하여 ~ 철자가 유사한 단어를 검색할 수 있습니다. 예: *사우나~* 쿼리 는 "sauna", "saunas" 또는 "fauna"와 같은 단어가 포함된 문서를 찾습니다.

**특수 문자:** 다음 문자는 OLAT에서 검색 구문의 일부입니다.

- *+ - && | ! ( ) { } ^ " ~ * ? : **

쿼리에 이러한 문자 중 하나가 포함되어 있으면 백슬래시 \를 사용하여 이를 마스킹해야 합니다. *예를 들면 다음과 같습니다. (1+1):2=* 방정식을 찾고 있다면 ? *\(1\+1\):2=\ 라고* 써야 하나요? 대신에.

**필드 검색: 필드 를 검색하려면** *고급 검색* 모드를 선택할 수 있습니다 (다른 필드는 AND 연산자로 연결됨). 또는 고유한 부울 링크를 사용하여 필드를 검색할 수 있습니다. 이렇게 하려면 *단순 검색* 모드 에서 다음 필드 이름을 사용하십시오.

```
*  _title_ (=Title)

```

- *설명*
    
    (=설명)
    
- *내용*
    
    (=텍스트 검색)
    
- *문서*
    
    유형(=문서 유형)
    
- *파일 유형*
    
    (=파일 유형)
    
- *저자*
    
    (=저자)
    
- *생성*
    
    (=생성 날짜)
    
- *변경됨*
    
    (=마지막 수정)
    

예: *description:Calcium 은 설명* 필드를 통해서만 검색합니다 .

OLAT에서 사용되는 lucene 검색 구문에 대한 자세한 내용은 [Apache Lucene](http://lucene.apache.org/core/7_2_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package.description) 으로 이동하십시오 .

### 메타 데이터

메타 데이터는 다른 데이터의 속성에 대한 정보를 포함하는 데이터 **에 대한 데이터입니다.** 메타데이터는 파일의 제목, 작성자 또는 게시자와 같은 파일을 추가로 설명합니다. 문서의 목적을 명확히 하는 수단으로 사용되며 너무 길거나 특수 문자가 포함된 문서 제목에 특히 적합합니다.

각 파일에는 메타데이터가 제공될 수 있습니다. 메타데이터는 선택 사항이며 Dublin Core Simple Standard를 기반으로 합니다. 자세한 내용은 [Dublin Simple Core](http://en.wikipedia.org/wiki/Dublin_Core) 로 이동하십시오 . 그러나 특정 문서를 업로드한 사람의 이름, 문서 크기, 파일 형식, 문서 업로드 시간 등 여러 메타 데이터는 수정할 수 없습니다. 예를 들어 원저자, 제목, 출처 또는 언어에 대한 정보는 수동으로 입력할 수 있습니다.

메타데이터는 전체 텍스트 검색으로 인덱싱됩니다. 따라서 관련 문서를 찾을 때 키워드를 통해 메타데이터를 검색할 수 있습니다.

**파일 잠금:** 메타 데이터 내에서 파일을 잠긴 것으로 표시할 수 있습니다. 잠긴 파일은 잠금으로 표시되며 다른 사용자는 더 이상 파일을 변경, 삭제 또는 이동할 수 없습니다. 폴더에는 이 옵션을 사용할 수 없습니다.

![https://docs.openolat.org/manual_user/personal/assets/Datei_sperren_EN_detail.png](https://docs.openolat.org/manual_user/personal/assets/Datei_sperren_EN_detail.png)

외부 링크를 사용하여 OpenOlat 외부에서 특정 파일로 직접 링크할 수 있습니다.