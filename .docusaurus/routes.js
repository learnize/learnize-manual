import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'fab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '3f1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2d3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '41f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '70b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'ed6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '5bd'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c4e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '68f'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '06b'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'efe'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'ba8'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '2e7'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '6fb'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ebb'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '0cb'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '425'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '6c2'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '924'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7fc'),
    routes: [
      {
        path: '/docs/authoring/actions-in-the-authoring-section',
        component: ComponentCreator('/docs/authoring/actions-in-the-authoring-section', 'fe8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authoring/detailed-view-od-learning-resources',
        component: ComponentCreator('/docs/authoring/detailed-view-od-learning-resources', 'a40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authoring/set-up-info-page',
        component: ComponentCreator('/docs/authoring/set-up-info-page', 'fa4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authoring/technical-information-on-resources-and-usage',
        component: ComponentCreator('/docs/authoring/technical-information-on-resources-and-usage', 'c52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authoring/various-types-of-learning-resources',
        component: ComponentCreator('/docs/authoring/various-types-of-learning-resources', '7cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/강의와-결석',
        component: ComponentCreator('/docs/category/강의와-결석', '9ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/개인메뉴',
        component: ComponentCreator('/docs/category/개인메뉴', 'a67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/개인메뉴-및-컴포넌트',
        component: ComponentCreator('/docs/category/개인메뉴-및-컴포넌트', '4d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/과정-요소의-일반-구성',
        component: ComponentCreator('/docs/category/과정-요소의-일반-구성', 'f98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/구성',
        component: ComponentCreator('/docs/category/구성', 'cf0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/그룹',
        component: ComponentCreator('/docs/category/그룹', '8a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/기술-지원',
        component: ComponentCreator('/docs/category/기술-지원', 'da7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/로그인-및-로그아웃',
        component: ComponentCreator('/docs/category/로그인-및-로그아웃', '291'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/문제-은행',
        component: ComponentCreator('/docs/category/문제-은행', '8bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/블로그-제작',
        component: ComponentCreator('/docs/category/블로그-제작', 'bef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/비디오-제작',
        component: ComponentCreator('/docs/category/비디오-제작', 'ff2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/소개',
        component: ComponentCreator('/docs/category/소개', 'c02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/시험-에디터-qti-21',
        component: ComponentCreator('/docs/category/시험-에디터-qti-21', 'd6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/위키-제작',
        component: ComponentCreator('/docs/category/위키-제작', '731'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/저작',
        component: ComponentCreator('/docs/category/저작', '9e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/전자-평가',
        component: ComponentCreator('/docs/category/전자-평가', 'd3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/주제-할당-주제-관리',
        component: ComponentCreator('/docs/category/주제-할당-주제-관리', 'f41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/지식-이전',
        component: ComponentCreator('/docs/category/지식-이전', 'a54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/커리큘럼-관리',
        component: ComponentCreator('/docs/category/커리큘럼-관리', '5b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/커뮤니케이션과-조직',
        component: ComponentCreator('/docs/category/커뮤니케이션과-조직', '0e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-내-폼',
        component: ComponentCreator('/docs/category/코스-내-폼', 'c9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-내-학습활동',
        component: ComponentCreator('/docs/category/코스-내-학습활동', 'a73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-도구-사용',
        component: ComponentCreator('/docs/category/코스-도구-사용', '7eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-설정',
        component: ComponentCreator('/docs/category/코스-설정', '362'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-요소-작업',
        component: ComponentCreator('/docs/category/코스-요소-작업', '179'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-요소-타입',
        component: ComponentCreator('/docs/category/코스-요소-타입', '278'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-운영',
        component: ComponentCreator('/docs/category/코스-운영', '8b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-제작',
        component: ComponentCreator('/docs/category/코스-제작', 'b5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-제작-1',
        component: ComponentCreator('/docs/category/코스-제작-1', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스와-카탈로그',
        component: ComponentCreator('/docs/category/코스와-카탈로그', 'c24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/테스크-제작',
        component: ComponentCreator('/docs/category/테스크-제작', '391'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/테스트-제작',
        component: ComponentCreator('/docs/category/테스트-제작', 'ab7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/팟캐스트-제작',
        component: ComponentCreator('/docs/category/팟캐스트-제작', 'b0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/평가',
        component: ComponentCreator('/docs/category/평가', '64a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/평가-도구',
        component: ComponentCreator('/docs/category/평가-도구', 'e03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/포트폴리오-제작',
        component: ComponentCreator('/docs/category/포트폴리오-제작', '53d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/포트폴리오-평가-프로세스',
        component: ComponentCreator('/docs/category/포트폴리오-평가-프로세스', 'fb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/포트폴리오의-요소',
        component: ComponentCreator('/docs/category/포트폴리오의-요소', '259'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/폼-에디터',
        component: ComponentCreator('/docs/category/폼-에디터', '1e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/폼-제작',
        component: ComponentCreator('/docs/category/폼-제작', 'b69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/하는-방법',
        component: ComponentCreator('/docs/category/하는-방법', 'de4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/cp-학습-컨텐츠-제작',
        component: ComponentCreator('/docs/category/cp-학습-컨텐츠-제작', '156'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-additional-course-features',
        component: ComponentCreator('/docs/course-operation/using-additional-course-features', '3cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/assessment-tool/assessing-tasks-and-group-tasks',
        component: ComponentCreator('/docs/course-operation/using-course-tools/assessment-tool/assessing-tasks-and-group-tasks', '310'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/assessment-tool/assessing-tests',
        component: ComponentCreator('/docs/course-operation/using-course-tools/assessment-tool/assessing-tests', '144'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/assessment-tool/assessment-of-course-modules',
        component: ComponentCreator('/docs/course-operation/using-course-tools/assessment-tool/assessment-of-course-modules', '777'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/assessment-tool/assessment-of-learners',
        component: ComponentCreator('/docs/course-operation/using-course-tools/assessment-tool/assessment-of-learners', 'd5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/assessment-tool/grading-evaluation-scale',
        component: ComponentCreator('/docs/course-operation/using-course-tools/assessment-tool/grading-evaluation-scale', '904'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/assessment-tool/overview',
        component: ComponentCreator('/docs/course-operation/using-course-tools/assessment-tool/overview', '5a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/assessment-tool/tab-users',
        component: ComponentCreator('/docs/course-operation/using-course-tools/assessment-tool/tab-users', '693'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/assessment-tool/the-assessment-form',
        component: ComponentCreator('/docs/course-operation/using-course-tools/assessment-tool/the-assessment-form', '733'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/course-reminders',
        component: ComponentCreator('/docs/course-operation/using-course-tools/course-reminders', '0fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/data-archiving',
        component: ComponentCreator('/docs/course-operation/using-course-tools/data-archiving', '106'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/lecture-and-absences/lectures-teacher',
        component: ComponentCreator('/docs/course-operation/using-course-tools/lecture-and-absences/lectures-teacher', 'bcb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/lecture-and-absences/lectures-user',
        component: ComponentCreator('/docs/course-operation/using-course-tools/lecture-and-absences/lectures-user', '168'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/lecture-and-absences/overview',
        component: ComponentCreator('/docs/course-operation/using-course-tools/lecture-and-absences/overview', '37e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/member-management',
        component: ComponentCreator('/docs/course-operation/using-course-tools/member-management', '61a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/overview',
        component: ComponentCreator('/docs/course-operation/using-course-tools/overview', 'ea8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/record-of-course-activities',
        component: ComponentCreator('/docs/course-operation/using-course-tools/record-of-course-activities', '162'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/using-course-tools/storage-folder',
        component: ComponentCreator('/docs/course-operation/using-course-tools/storage-folder', '05b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/courses-and-catalog/finding-courses',
        component: ComponentCreator('/docs/courses-and-catalog/finding-courses', '0ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/courses-and-catalog/info-page',
        component: ComponentCreator('/docs/courses-and-catalog/info-page', 'bf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-blogs/blog',
        component: ComponentCreator('/docs/creating-blogs/blog', 'ce0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-blogs/fourr-stpes-to-your-blog',
        component: ComponentCreator('/docs/creating-blogs/fourr-stpes-to-your-blog', '1f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/access-configuration',
        component: ComponentCreator('/docs/creating-courses/access-configuration', 'f88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course-of-study/',
        component: ComponentCreator('/docs/creating-courses/course-of-study/', '616'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course-of-study/courses-of-study',
        component: ComponentCreator('/docs/creating-courses/course-of-study/courses-of-study', 'cda'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course-of-study/creating-learning-path-courses',
        component: ComponentCreator('/docs/creating-courses/course-of-study/creating-learning-path-courses', 'f6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course-of-study/overview',
        component: ComponentCreator('/docs/creating-courses/course-of-study/overview', 'b6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course-settings/design-possibilities-of-courses',
        component: ComponentCreator('/docs/creating-courses/course-settings/design-possibilities-of-courses', '0ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course-settings/lti-access',
        component: ComponentCreator('/docs/creating-courses/course-settings/lti-access', '8c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course-settings/overview',
        component: ComponentCreator('/docs/creating-courses/course-settings/overview', 'de4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/general-configuration/access-restrictions',
        component: ComponentCreator('/docs/creating-courses/general-configuration/access-restrictions', 'cfb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/general-configuration/deleting-moving-and-copying-course-elements',
        component: ComponentCreator('/docs/creating-courses/general-configuration/deleting-moving-and-copying-course-elements', 'cdb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/general-configuration/overview',
        component: ComponentCreator('/docs/creating-courses/general-configuration/overview', 'c43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/general-information',
        component: ComponentCreator('/docs/creating-courses/general-information', '263'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/in-five-steps-to-your-course-with-the-course-editor',
        component: ComponentCreator('/docs/creating-courses/in-five-steps-to-your-course-with-the-course-editor', '56e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/just-a-few-clicks-and-the-course-wizard',
        component: ComponentCreator('/docs/creating-courses/just-a-few-clicks-and-the-course-wizard', '3a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/using-additional-course-editor-tools',
        component: ComponentCreator('/docs/creating-courses/using-additional-course-editor-tools', 'e8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-cp-learning-content/cp-editor',
        component: ComponentCreator('/docs/creating-cp-learning-content/cp-editor', 'c01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-cp-learning-content/in-five-steps-to-your-content-package',
        component: ComponentCreator('/docs/creating-cp-learning-content/in-five-steps-to-your-content-package', '6b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/form-editor/overview',
        component: ComponentCreator('/docs/creating-forms/form-editor/overview', '155'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/form-editor/question-rules',
        component: ComponentCreator('/docs/creating-forms/form-editor/question-rules', '174'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/form-editor/rubric',
        component: ComponentCreator('/docs/creating-forms/form-editor/rubric', '5c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/forms-in-courses/ePortfolio-template',
        component: ComponentCreator('/docs/creating-forms/forms-in-courses/ePortfolio-template', '03c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/forms-in-courses/forms-element',
        component: ComponentCreator('/docs/creating-forms/forms-in-courses/forms-element', '727'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/forms-in-courses/overview',
        component: ComponentCreator('/docs/creating-forms/forms-in-courses/overview', '650'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/forms-in-courses/questionnaires',
        component: ComponentCreator('/docs/creating-forms/forms-in-courses/questionnaires', 'd00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/forms-in-courses/rubric-scoring',
        component: ComponentCreator('/docs/creating-forms/forms-in-courses/rubric-scoring', 'f8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/general-information',
        component: ComponentCreator('/docs/creating-forms/general-information', 'fc9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/three-steps-to-your-form',
        component: ComponentCreator('/docs/creating-forms/three-steps-to-your-form', 'e34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-podcasts/four-steps-to-your-podcast',
        component: ComponentCreator('/docs/creating-podcasts/four-steps-to-your-podcast', 'c99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-podcasts/podcast',
        component: ComponentCreator('/docs/creating-podcasts/podcast', 'e41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/competences-tags',
        component: ComponentCreator('/docs/creating-portfolios/competences-tags', 'd0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/componenets-of-the-portfolio/media-center',
        component: ComponentCreator('/docs/creating-portfolios/componenets-of-the-portfolio/media-center', '834'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/componenets-of-the-portfolio/my-entries',
        component: ComponentCreator('/docs/creating-portfolios/componenets-of-the-portfolio/my-entries', 'e5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/componenets-of-the-portfolio/my-portfolio-binders',
        component: ComponentCreator('/docs/creating-portfolios/componenets-of-the-portfolio/my-portfolio-binders', '09b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/componenets-of-the-portfolio/overview',
        component: ComponentCreator('/docs/creating-portfolios/componenets-of-the-portfolio/overview', '493'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/componenets-of-the-portfolio/shared-by-me',
        component: ComponentCreator('/docs/creating-portfolios/componenets-of-the-portfolio/shared-by-me', 'c73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/componenets-of-the-portfolio/shared-with-me',
        component: ComponentCreator('/docs/creating-portfolios/componenets-of-the-portfolio/shared-with-me', 'e71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/general-information',
        component: ComponentCreator('/docs/creating-portfolios/general-information', '1b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/multiple-use-of-entries',
        component: ComponentCreator('/docs/creating-portfolios/multiple-use-of-entries', '71e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/process-of-an-assessment-portfolio/creating-portfolio-tasks',
        component: ComponentCreator('/docs/creating-portfolios/process-of-an-assessment-portfolio/creating-portfolio-tasks', '44b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/process-of-an-assessment-portfolio/overview',
        component: ComponentCreator('/docs/creating-portfolios/process-of-an-assessment-portfolio/overview', '152'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/process-of-an-assessment-portfolio/portfolio-assignment-grading',
        component: ComponentCreator('/docs/creating-portfolios/process-of-an-assessment-portfolio/portfolio-assignment-grading', '062'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/process-of-an-assessment-portfolio/portfolio-task',
        component: ComponentCreator('/docs/creating-portfolios/process-of-an-assessment-portfolio/portfolio-task', 'de4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/process-of-an-assessment-portfolio/template-administration',
        component: ComponentCreator('/docs/creating-portfolios/process-of-an-assessment-portfolio/template-administration', 'aba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/process-of-an-assessment-portfolio/template-creation',
        component: ComponentCreator('/docs/creating-portfolios/process-of-an-assessment-portfolio/template-creation', '309'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/the-portfolio-editor',
        component: ComponentCreator('/docs/creating-portfolios/the-portfolio-editor', 'a48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/three-steps-to-your-portfolio-binder',
        component: ComponentCreator('/docs/creating-portfolios/three-steps-to-your-portfolio-binder', 'd04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tasks/assess-tasks',
        component: ComponentCreator('/docs/creating-tasks/assess-tasks', 'bf7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tasks/task-further-configuration',
        component: ComponentCreator('/docs/creating-tasks/task-further-configuration', 'b0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tasks/three-steps-to-your-task',
        component: ComponentCreator('/docs/creating-tasks/three-steps-to-your-task', '161'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/changing-from-version',
        component: ComponentCreator('/docs/creating-tests/changing-from-version', 'b36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/four-steps-to-your-test',
        component: ComponentCreator('/docs/creating-tests/four-steps-to-your-test', 'e67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/general-information',
        component: ComponentCreator('/docs/creating-tests/general-information', 'f4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/qti-2.1/configure-tests',
        component: ComponentCreator('/docs/creating-tests/qti-2.1/configure-tests', 'cc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/qti-2.1/confiture-test-questions',
        component: ComponentCreator('/docs/creating-tests/qti-2.1/confiture-test-questions', 'f99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/qti-2.1/overview',
        component: ComponentCreator('/docs/creating-tests/qti-2.1/overview', '5bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/qti-2.1/test-question-types',
        component: ComponentCreator('/docs/creating-tests/qti-2.1/test-question-types', '6cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/test-settings',
        component: ComponentCreator('/docs/creating-tests/test-settings', 'e67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/tests-at-course-level',
        component: ComponentCreator('/docs/creating-tests/tests-at-course-level', 'ccb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-videos/course-element-video',
        component: ComponentCreator('/docs/creating-videos/course-element-video', '0aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-videos/learning-resource-video',
        component: ComponentCreator('/docs/creating-videos/learning-resource-video', '98c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-videos/single-page-add-edit-video',
        component: ComponentCreator('/docs/creating-videos/single-page-add-edit-video', 'a5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-videos/video-upload',
        component: ComponentCreator('/docs/creating-videos/video-upload', '3c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-wikis/four-steps-to-your-wiki',
        component: ComponentCreator('/docs/creating-wikis/four-steps-to-your-wiki', '5e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/curriculum-management/curriculum-management',
        component: ComponentCreator('/docs/curriculum-management/curriculum-management', '5ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/e-assessment/assessment-mode',
        component: ComponentCreator('/docs/e-assessment/assessment-mode', '10e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/e-assessment/coaching',
        component: ComponentCreator('/docs/e-assessment/coaching', '0d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/e-assessment/performance-assessment',
        component: ComponentCreator('/docs/e-assessment/performance-assessment', 'eb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/create-groups',
        component: ComponentCreator('/docs/group/create-groups', 'dd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/group-administration',
        component: ComponentCreator('/docs/group/group-administration', 'c1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/group-management',
        component: ComponentCreator('/docs/group/group-management', '37e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/lti-access',
        component: ComponentCreator('/docs/group/lti-access', '182'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/using-group-tools',
        component: ComponentCreator('/docs/group/using-group-tools', 'b4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/create-a-bulk-assessment',
        component: ComponentCreator('/docs/how-to/create-a-bulk-assessment', '3ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/customize-the-course-design',
        component: ComponentCreator('/docs/how-to/customize-the-course-design', '93b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction/about-learnize',
        component: ComponentCreator('/docs/introduction/about-learnize', '7b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction/coach',
        component: ComponentCreator('/docs/introduction/coach', '317'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction/guest-access',
        component: ComponentCreator('/docs/introduction/guest-access', '826'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction/requirements',
        component: ComponentCreator('/docs/introduction/requirements', 'c19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction/roles-and-rights',
        component: ComponentCreator('/docs/introduction/roles-and-rights', '68f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction/technology',
        component: ComponentCreator('/docs/introduction/technology', '0f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/additional-course-features',
        component: ComponentCreator('/docs/learning-activities/additional-course-features', '33d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/course-problems-and-error-messages',
        component: ComponentCreator('/docs/learning-activities/course-problems-and-error-messages', '930'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/exams',
        component: ComponentCreator('/docs/learning-activities/exams', '1cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/overview',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/overview', '55e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/working-with-forums',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/working-with-forums', '225'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/working-with-tasks',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/working-with-tasks', '71e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/working-with-tests',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/working-with-tests', '889'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/working-with-topic',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/working-with-topic', 'f9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/working-with-wiki',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/working-with-wiki', '1b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/managing-topics/three-step-to-create-and-manage-topics',
        component: ComponentCreator('/docs/managing-topics/three-step-to-create-and-manage-topics', 'b40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/chat',
        component: ComponentCreator('/docs/personal/chat', '189'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/configuration/covid-certificate',
        component: ComponentCreator('/docs/personal/configuration/covid-certificate', 'b55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/configuration/overview',
        component: ComponentCreator('/docs/personal/configuration/overview', 'dc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/full-text-search',
        component: ComponentCreator('/docs/personal/full-text-search', 'e96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/math-formula',
        component: ComponentCreator('/docs/personal/math-formula', 'ed5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/personal-menu/calendar',
        component: ComponentCreator('/docs/personal/personal-menu/calendar', 'cf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/personal-menu/email',
        component: ComponentCreator('/docs/personal/personal-menu/email', '191'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/personal-menu/overview',
        component: ComponentCreator('/docs/personal/personal-menu/overview', '783'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/personal-menu/personal-folders',
        component: ComponentCreator('/docs/personal/personal-menu/personal-folders', '466'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/portal-configuration',
        component: ComponentCreator('/docs/personal/portal-configuration', '0f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/personal/working with tables',
        component: ComponentCreator('/docs/personal/working with tables', '005'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/administration',
        component: ComponentCreator('/docs/question-bank/administration', '9bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/data-management',
        component: ComponentCreator('/docs/question-bank/data-management', '9a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/item-detailed-view',
        component: ComponentCreator('/docs/question-bank/item-detailed-view', '40f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/possible-operations',
        component: ComponentCreator('/docs/question-bank/possible-operations', '60b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/review-process',
        component: ComponentCreator('/docs/question-bank/review-process', '4f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/search',
        component: ComponentCreator('/docs/question-bank/search', 'eab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/sharing-options',
        component: ComponentCreator('/docs/question-bank/sharing-options', '7a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/registration/login-page',
        component: ComponentCreator('/docs/registration/login-page', 'eb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/registration/logout',
        component: ComponentCreator('/docs/registration/logout', '2de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/supported-technologies/using-webdav',
        component: ComponentCreator('/docs/supported-technologies/using-webdav', '11a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/assessment/course-element-assessment',
        component: ComponentCreator('/docs/types-of-course-element/assessment/course-element-assessment', '710'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/assessment/course-element-checklist',
        component: ComponentCreator('/docs/types-of-course-element/assessment/course-element-checklist', '4b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/assessment/overview',
        component: ComponentCreator('/docs/types-of-course-element/assessment/overview', '3bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/communication-and-organisation/bbb-frequently-asked-question',
        component: ComponentCreator('/docs/types-of-course-element/communication-and-organisation/bbb-frequently-asked-question', '51a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/communication-and-organisation/course-element-adobe-connect',
        component: ComponentCreator('/docs/types-of-course-element/communication-and-organisation/course-element-adobe-connect', '9f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/communication-and-organisation/course-element-bigbluebutton',
        component: ComponentCreator('/docs/types-of-course-element/communication-and-organisation/course-element-bigbluebutton', '0d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/communication-and-organisation/course-element-gotomeetings',
        component: ComponentCreator('/docs/types-of-course-element/communication-and-organisation/course-element-gotomeetings', '294'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/communication-and-organisation/course-element-microsoft-teams',
        component: ComponentCreator('/docs/types-of-course-element/communication-and-organisation/course-element-microsoft-teams', 'aa5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/communication-and-organisation/course-element-opennmettings',
        component: ComponentCreator('/docs/types-of-course-element/communication-and-organisation/course-element-opennmettings', '29f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/communication-and-organisation/course-element-vitero',
        component: ComponentCreator('/docs/types-of-course-element/communication-and-organisation/course-element-vitero', '288'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/communication-and-organisation/overview',
        component: ComponentCreator('/docs/types-of-course-element/communication-and-organisation/overview', 'fd4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/communication-and-organisation/virtual-classrooms',
        component: ComponentCreator('/docs/types-of-course-element/communication-and-organisation/virtual-classrooms', 'a88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/course_element4',
        component: ComponentCreator('/docs/types-of-course-element/course_element4', '69c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/course_element5',
        component: ComponentCreator('/docs/types-of-course-element/course_element5', '595'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/knowledge-transfer/course-element-card2brain',
        component: ComponentCreator('/docs/types-of-course-element/knowledge-transfer/course-element-card2brain', 'c7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/knowledge-transfer/course-element-folder',
        component: ComponentCreator('/docs/types-of-course-element/knowledge-transfer/course-element-folder', '11e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/knowledge-transfer/course-element-mediasite',
        component: ComponentCreator('/docs/types-of-course-element/knowledge-transfer/course-element-mediasite', 'c19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/knowledge-transfer/course-element-scorn',
        component: ComponentCreator('/docs/types-of-course-element/knowledge-transfer/course-element-scorn', '5dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/knowledge-transfer/course-element-single-page',
        component: ComponentCreator('/docs/types-of-course-element/knowledge-transfer/course-element-single-page', 'c0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/knowledge-transfer/course-element-structure',
        component: ComponentCreator('/docs/types-of-course-element/knowledge-transfer/course-element-structure', '4db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/knowledge-transfer/overview',
        component: ComponentCreator('/docs/types-of-course-element/knowledge-transfer/overview', '3d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f56'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
