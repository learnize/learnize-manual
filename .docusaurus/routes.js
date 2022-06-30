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
    component: ComponentCreator('/docs', 'a2d'),
    routes: [
      {
        path: '/docs/authoring/authoring1',
        component: ComponentCreator('/docs/authoring/authoring1', '06b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authoring/authoring2',
        component: ComponentCreator('/docs/authoring/authoring2', '432'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authoring/authoring3',
        component: ComponentCreator('/docs/authoring/authoring3', '0df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authoring/authoring4',
        component: ComponentCreator('/docs/authoring/authoring4', '913'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authoring/authoring5',
        component: ComponentCreator('/docs/authoring/authoring5', '595'),
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
        path: '/docs/category/커리큘럼-관리',
        component: ComponentCreator('/docs/category/커리큘럼-관리', '5b4'),
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
        path: '/docs/category/코스-요소-타입-1',
        component: ComponentCreator('/docs/category/코스-요소-타입-1', '8c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-요소-타입-2',
        component: ComponentCreator('/docs/category/코스-요소-타입-2', 'c8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-요소-타입-3',
        component: ComponentCreator('/docs/category/코스-요소-타입-3', '92a'),
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
        path: '/docs/category/코스-운영-1',
        component: ComponentCreator('/docs/category/코스-운영-1', '139'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-운영-2',
        component: ComponentCreator('/docs/category/코스-운영-2', '84d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-운영-3',
        component: ComponentCreator('/docs/category/코스-운영-3', '49f'),
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
        path: '/docs/category/코스-제작-2',
        component: ComponentCreator('/docs/category/코스-제작-2', 'e44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/코스-제작-3',
        component: ComponentCreator('/docs/category/코스-제작-3', '908'),
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
        path: '/docs/category/테스트-제작-1',
        component: ComponentCreator('/docs/category/테스트-제작-1', 'b2c'),
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
        path: '/docs/category/포트폴리오-제작',
        component: ComponentCreator('/docs/category/포트폴리오-제작', '53d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/포트폴리오-제작-1',
        component: ComponentCreator('/docs/category/포트폴리오-제작-1', 'cf5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/포트폴리오-제작-2',
        component: ComponentCreator('/docs/category/포트폴리오-제작-2', '781'),
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
        path: '/docs/category/폼-제작-1',
        component: ComponentCreator('/docs/category/폼-제작-1', '33e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/폼-제작-2',
        component: ComponentCreator('/docs/category/폼-제작-2', '91c'),
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
        path: '/docs/course-operation/임시 폴더/임시 폴더 2/course_operation1-5-1',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더 2/course_operation1-5-1', '5ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더 2/course_operation1-5-2',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더 2/course_operation1-5-2', '2c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더 2/course_operation1-5-3',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더 2/course_operation1-5-3', 'cd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-1',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-1', '5b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-2',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-2', 'b63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-3',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-3', '918'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-4',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-4', '51c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-5',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-5', 'b27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-6',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-6', '1bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-7',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-7', '667'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-8',
        component: ComponentCreator('/docs/course-operation/임시 폴더/임시 폴더/course_operation1-4-8', '1a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/course_operation1-1',
        component: ComponentCreator('/docs/course-operation/임시 폴더/course_operation1-1', '92c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/course_operation1-2',
        component: ComponentCreator('/docs/course-operation/임시 폴더/course_operation1-2', '66e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/course_operation1-3',
        component: ComponentCreator('/docs/course-operation/임시 폴더/course_operation1-3', '4ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/course_operation1-6',
        component: ComponentCreator('/docs/course-operation/임시 폴더/course_operation1-6', '0c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/course_operation1-7',
        component: ComponentCreator('/docs/course-operation/임시 폴더/course_operation1-7', '8a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/임시 폴더/course_operation1-8',
        component: ComponentCreator('/docs/course-operation/임시 폴더/course_operation1-8', '5f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/course-operation/course_operation2',
        component: ComponentCreator('/docs/course-operation/course_operation2', 'd13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/courses-and-catalog/course_and_catalog1',
        component: ComponentCreator('/docs/courses-and-catalog/course_and_catalog1', 'f5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/courses-and-catalog/course_and_catalog2',
        component: ComponentCreator('/docs/courses-and-catalog/course_and_catalog2', 'a7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-blogs/resource_blog1',
        component: ComponentCreator('/docs/creating-blogs/resource_blog1', 'c6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-blogs/resource_blog2',
        component: ComponentCreator('/docs/creating-blogs/resource_blog2', 'ea6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더/course_create4-1',
        component: ComponentCreator('/docs/creating-courses/임시 폴더/course_create4-1', '134'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더/course_create4-2',
        component: ComponentCreator('/docs/creating-courses/임시 폴더/course_create4-2', 'b37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더/course_create4-3',
        component: ComponentCreator('/docs/creating-courses/임시 폴더/course_create4-3', '9f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더/course_create4-4',
        component: ComponentCreator('/docs/creating-courses/임시 폴더/course_create4-4', '8f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더2/course_create5-1',
        component: ComponentCreator('/docs/creating-courses/임시 폴더2/course_create5-1', 'bc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더2/course_create5-2',
        component: ComponentCreator('/docs/creating-courses/임시 폴더2/course_create5-2', '6ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더2/course_create5-3',
        component: ComponentCreator('/docs/creating-courses/임시 폴더2/course_create5-3', '369'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더3/course_create7-1',
        component: ComponentCreator('/docs/creating-courses/임시 폴더3/course_create7-1', '75a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더3/course_create7-2',
        component: ComponentCreator('/docs/creating-courses/임시 폴더3/course_create7-2', 'c14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/임시 폴더3/course_create7-3',
        component: ComponentCreator('/docs/creating-courses/임시 폴더3/course_create7-3', 'e40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course_create1',
        component: ComponentCreator('/docs/creating-courses/course_create1', '565'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course_create2',
        component: ComponentCreator('/docs/creating-courses/course_create2', '1c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course_create3',
        component: ComponentCreator('/docs/creating-courses/course_create3', '6f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course_create6',
        component: ComponentCreator('/docs/creating-courses/course_create6', '109'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-courses/course_create8',
        component: ComponentCreator('/docs/creating-courses/course_create8', '532'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-cp-learning-content/resource_cp1',
        component: ComponentCreator('/docs/creating-cp-learning-content/resource_cp1', '851'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-cp-learning-content/resource_cp2',
        component: ComponentCreator('/docs/creating-cp-learning-content/resource_cp2', '853'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/임시 폴더 copy/forms4-1',
        component: ComponentCreator('/docs/creating-forms/임시 폴더 copy/forms4-1', '826'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/임시 폴더 copy/forms4-2',
        component: ComponentCreator('/docs/creating-forms/임시 폴더 copy/forms4-2', '6a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/임시 폴더 copy/forms4-3',
        component: ComponentCreator('/docs/creating-forms/임시 폴더 copy/forms4-3', '47e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/임시 폴더 copy/forms4-4',
        component: ComponentCreator('/docs/creating-forms/임시 폴더 copy/forms4-4', '371'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/임시 폴더 copy/forms4-5',
        component: ComponentCreator('/docs/creating-forms/임시 폴더 copy/forms4-5', 'b19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/임시 폴더/forms3-1',
        component: ComponentCreator('/docs/creating-forms/임시 폴더/forms3-1', 'fc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/임시 폴더/forms3-2',
        component: ComponentCreator('/docs/creating-forms/임시 폴더/forms3-2', 'aec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/임시 폴더/forms3-3',
        component: ComponentCreator('/docs/creating-forms/임시 폴더/forms3-3', 'fb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/forms1',
        component: ComponentCreator('/docs/creating-forms/forms1', 'bf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-forms/forms2',
        component: ComponentCreator('/docs/creating-forms/forms2', '193'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-podcasts/resource_podcast1',
        component: ComponentCreator('/docs/creating-podcasts/resource_podcast1', 'e0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-podcasts/resource_podcast2',
        component: ComponentCreator('/docs/creating-podcasts/resource_podcast2', '2ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더 copy/portfolio7-1',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더 copy/portfolio7-1', '158'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더 copy/portfolio7-2',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더 copy/portfolio7-2', '4ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더 copy/portfolio7-3',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더 copy/portfolio7-3', 'cff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더 copy/portfolio7-4',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더 copy/portfolio7-4', 'e0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더 copy/portfolio7-5',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더 copy/portfolio7-5', '794'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더 copy/portfolio7-6',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더 copy/portfolio7-6', 'a43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더/portfolio2-1',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더/portfolio2-1', '138'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더/portfolio2-2',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더/portfolio2-2', '0c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더/portfolio2-3',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더/portfolio2-3', 'af5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더/portfolio2-4',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더/portfolio2-4', '179'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더/portfolio2-5',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더/portfolio2-5', '9b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/임시 폴더/portfolio2-6',
        component: ComponentCreator('/docs/creating-portfolios/임시 폴더/portfolio2-6', 'ab4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/portfolio1',
        component: ComponentCreator('/docs/creating-portfolios/portfolio1', '2d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/portfolio3',
        component: ComponentCreator('/docs/creating-portfolios/portfolio3', '50a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/portfolio4',
        component: ComponentCreator('/docs/creating-portfolios/portfolio4', '8ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/portfolio5',
        component: ComponentCreator('/docs/creating-portfolios/portfolio5', '1ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-portfolios/portfolio6',
        component: ComponentCreator('/docs/creating-portfolios/portfolio6', '291'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tasks/task1',
        component: ComponentCreator('/docs/creating-tasks/task1', '416'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tasks/task2',
        component: ComponentCreator('/docs/creating-tasks/task2', '320'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tasks/task3',
        component: ComponentCreator('/docs/creating-tasks/task3', '82a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/임시 폴더/tests3-1',
        component: ComponentCreator('/docs/creating-tests/임시 폴더/tests3-1', '446'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/임시 폴더/tests3-2',
        component: ComponentCreator('/docs/creating-tests/임시 폴더/tests3-2', '902'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/임시 폴더/tests3-3',
        component: ComponentCreator('/docs/creating-tests/임시 폴더/tests3-3', 'b45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/임시 폴더/tests3-4',
        component: ComponentCreator('/docs/creating-tests/임시 폴더/tests3-4', 'e26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/tests1',
        component: ComponentCreator('/docs/creating-tests/tests1', '1c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/tests2',
        component: ComponentCreator('/docs/creating-tests/tests2', '084'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/tests4',
        component: ComponentCreator('/docs/creating-tests/tests4', '2e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/tests5',
        component: ComponentCreator('/docs/creating-tests/tests5', 'be7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-tests/tests6',
        component: ComponentCreator('/docs/creating-tests/tests6', '9fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-videos/resource_video1',
        component: ComponentCreator('/docs/creating-videos/resource_video1', '74f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-videos/resource_video2',
        component: ComponentCreator('/docs/creating-videos/resource_video2', '05f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-videos/resource_video3',
        component: ComponentCreator('/docs/creating-videos/resource_video3', 'e32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-videos/resource_video4',
        component: ComponentCreator('/docs/creating-videos/resource_video4', '1af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/creating-wikis/resource_wiki1',
        component: ComponentCreator('/docs/creating-wikis/resource_wiki1', '6c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/curriculum-management/curriculum_management1',
        component: ComponentCreator('/docs/curriculum-management/curriculum_management1', 'f26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/e-assessment/e_assessment1',
        component: ComponentCreator('/docs/e-assessment/e_assessment1', '7f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/e-assessment/e_assessment2',
        component: ComponentCreator('/docs/e-assessment/e_assessment2', '363'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/e-assessment/e_assessment3',
        component: ComponentCreator('/docs/e-assessment/e_assessment3', 'ac2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/group1',
        component: ComponentCreator('/docs/group/group1', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/group2',
        component: ComponentCreator('/docs/group/group2', 'f1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/group3',
        component: ComponentCreator('/docs/group/group3', '858'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/group4',
        component: ComponentCreator('/docs/group/group4', '160'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/group/group5',
        component: ComponentCreator('/docs/group/group5', '64f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/how1',
        component: ComponentCreator('/docs/how-to/how1', '377'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/how2',
        component: ComponentCreator('/docs/how-to/how2', 'e10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to/how3',
        component: ComponentCreator('/docs/how-to/how3', '31e'),
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
        path: '/docs/learning-activities/learning_activities_in_course2',
        component: ComponentCreator('/docs/learning-activities/learning_activities_in_course2', '0db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/learning_activities_in_course3',
        component: ComponentCreator('/docs/learning-activities/learning_activities_in_course3', '17d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/learning_activities_in_course4',
        component: ComponentCreator('/docs/learning-activities/learning_activities_in_course4', 'e30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-1',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-1', '137'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-2',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-2', 'd6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-3',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-3', '5f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-4',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-4', '842'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-5',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-5', 'abf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-6',
        component: ComponentCreator('/docs/learning-activities/working-with-course-elements/learning_activities_in_course1-6', '4d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/managing-topics/topic_assignment1',
        component: ComponentCreator('/docs/managing-topics/topic_assignment1', '4c3'),
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
        path: '/docs/question-bank/question_bank1',
        component: ComponentCreator('/docs/question-bank/question_bank1', 'fa2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/question_bank2',
        component: ComponentCreator('/docs/question-bank/question_bank2', 'a14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/question_bank3',
        component: ComponentCreator('/docs/question-bank/question_bank3', '089'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/question_bank4',
        component: ComponentCreator('/docs/question-bank/question_bank4', 'e8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/question_bank5',
        component: ComponentCreator('/docs/question-bank/question_bank5', 'b6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/question_bank6',
        component: ComponentCreator('/docs/question-bank/question_bank6', '353'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/question-bank/question_bank7',
        component: ComponentCreator('/docs/question-bank/question_bank7', 'd25'),
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
        path: '/docs/supported-technologies/supported_tech1',
        component: ComponentCreator('/docs/supported-technologies/supported_tech1', '12f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 2/course_element2-1',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 2/course_element2-1', 'f4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 2/course_element2-2',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 2/course_element2-2', 'a00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 2/course_element2-3',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 2/course_element2-3', '0f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 3/course_element3-1',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 3/course_element3-1', 'b3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 3/course_element3-2',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 3/course_element3-2', '245'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 3/course_element3-3',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 3/course_element3-3', '7cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 3/course_element3-4',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 3/course_element3-4', '718'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 3/course_element3-5',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 3/course_element3-5', '6e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 3/course_element3-6',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 3/course_element3-6', '89c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 3/course_element3-7',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 3/course_element3-7', '4b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 3/course_element3-8',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 3/course_element3-8', '3b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더 3/course_element3-9',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더 3/course_element3-9', 'd75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더/course_element1-1',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더/course_element1-1', '268'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더/course_element1-2',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더/course_element1-2', '825'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더/course_element1-3',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더/course_element1-3', '07d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더/course_element1-4',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더/course_element1-4', 'e8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더/course_element1-5',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더/course_element1-5', '25c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더/course_element1-6',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더/course_element1-6', '20f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/types-of-course-element/임시 폴더/course_element1-7',
        component: ComponentCreator('/docs/types-of-course-element/임시 폴더/course_element1-7', '2a9'),
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
