## 1.프로젝트 소개

일정 관리 시스템입니다. 
사용자는 일정(할 일)을 생성하고, 수정, 삭제할 수 있습니다. 
또한, 일정을 날짜별로 확인할 수 있는 달력 뷰를 제공하여, 
각 날짜에 할 일이 있는 경우 해당 날짜를 클릭하여 할 일에 대한 상세 정보를 확인할 수 있습니다. 

앱의 주요 기능은 다음과 같습니다

- **ToDo 생성/수정/삭제:** 사용자가 새로운 할 일을 추가하거나, 기존의 할 일을 수정 및 삭제할 수 있습니다.
- **날짜별 일정 확인:** 달력에서 각 날짜에 대한 일정을 확인하고, 상세 보기 및 삭제가 가능합니다.
- **기본적인 CRUD 기능:** 일정 데이터는 백엔드에서 관리되며, React와 Spring Boot를 사용하여 프론트엔드와 백엔드를 분리하여 개발되었습니다.

| back-end  | ver    | front-end  | ver    |
|-----------|--------|------------|--------|
| SpringBoot | 3.3.7  | React      | 18.2.0 |
| Java       | 17     | Axios      | 1.7.9  |
| JPA        |        | Bootstrap  | 5.3.3  |
| DB         |        | MySQL      |        |

## 2.	소스 빌드 및 실행 방법 메뉴얼

- **1단계:** Java 17 이상의 버전이 설치되어 있는지 확인합니다.
- **2단계:** 소스를 다운 받아 압축을 풀고 IDE에서 프로젝트를 오픈합니다.
- **3단계:** 애플리케이션을 실행합니다.
- **4단계:** 정상적으로 실행되면 http://localhost:8080에서 API 서버가 실행됩니다.

## 개발 기간 및 인원

- **기간:** 2024년 12월 19일 ~ 2024년 12월 22일 (3일간)
- **인원:** 개발자 1명

## 3.	주력으로 사용한 라이브러리

- **React:** 사용자 인터페이스를 구축하기 위해 사용되었습니다. React의 컴포넌트 기반 아키텍처를 활용하여 각 기능을 모듈화하고 재사용 가능한 컴포넌트들을 설계했습니다.
- **Spring Boot:** 백엔드 서버를 구축하기 위해 사용되었습니다. Spring Boot는 설정이 간단하고 빠르게 애플리케이션을 생성할 수 있어 개발 효율성이 높습니다.
- **Swagger UI:** API 문서화를 위해 사용되었습니다. Swagger UI는 API에 대한 직관적인 UI를 제공하며, 사용자가 직접 API를 테스트할 수 있게 도와줍니다.
- **Axios:** 사용자가 읽지 않은 메시지가 있을 경우 실시간 알림을 통해 확인할 수 있습니다.
- **Bootstrap:** 스타일링을 위해 사용되었습니다. 빠르고 간편하게 반응형 웹 디자인을 구현하기 위해 Bootstrap 무료 템플릿을 사용하여 일관된 UI를 만들었습니다.

## 4. API 명세

- http://localhost:8080/swagger-ui/index.html 접속하여 확인 및 테스트 가능
- **GET /api/todo/{id}:** 특정 ID에 해당하는 할 일 정보를 반환합니다.
- **POST /api/todo:** 새로운 할 일을 생성합니다.
- **PUT /api/todo/{id}:** 특정 ID에 해당하는 할 일을 수정합니다.
- **DELETE /api/todo/{id}:** 특정 ID에 해당하는 할 일을 삭제합니다.
- **GET /api/todo:** 모든 할 일 목록을 반환합니다.
- **GET /api/todo/count:** 특정 월의 날짜별 할 일 개수를 반환합니다.

## 5.	테스트케이스

- **ToDoServiceTest:** 서비스 계층에 대한 단위 테스트를 작성하여 각 CRUD 기능이 정상적으로 동작하는지 확인합니다.
