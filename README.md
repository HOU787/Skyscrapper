# Skyscrapper_project
SpringBoot를 이용한 B2B E-Marketplace 웹 개발 프로젝트

## 프로젝트 소개
비정상 이용자 분류 및 상품군별 감정분석 그래프를 제공하는 E-Marketplace를 구축하는 프로젝트 입니다.

## 포트폴리오
https://frequent-cloak-f0f.notion.site/B2B-E-Marketplace-0286fed6d34f46d2a5bb2c294fb296fb?pvs=74

## 개발기간
23.06.19 ~ 23.07.16

## 맴버구성
* PM염승호(팀장): DB구축, 웹비즈니스 로직 개발, 감정분석 로직 개발, 통합 및 형상관리
* PL 김호재: DB설계, 사용자 인증 및 권한 관리 로직 개발, 비정상 이용자 분류 로직 개발, 일정 및 버전 관리
* 이선재: 웹사이트 디자인 및 구현, UI/UX 디자인 및 구현
* 최수지: 웹사이트 디자인, 시각화 대시보드 디자인 및 구현

## 개발환경
### 개발 언어
* Java 1.8 / JDK 17
* Python 3.9.13
* JavaScrpit

### 프레임워크
* SpringBoot 2.7.12
* FastAPI

### 데이터베이스
* OracleSQL

### 라이브러리
* Any Chart 8.11.1
* Chart JS
* BootStrap 5.2.3
* JQuery 3.6.0
  
## 주요 기능
### SpringSecurity
* 로그인
* 회원가입
* 비밀번호 암호화
* 관리자 권한 통제
* 인증/비인증 사용자 통제

### 웹페이지
* 상품글 작성, 수정, 삭제
* 감정분석 데시보드 제공
* 인콰이어리 작성
* 관리자 페이지 구분(비인가 사용자 접근시 리다이렉팅)

### 관리자페이지
* 상품글 작성 후 스팸분류 결과 모니터링
* 인콰이어리 작성 후 스팸분류 결과 모니터링

