# 프로젝트 소개


일정 관리 시스템으로, 사용자가 **할 일(ToDo)**을 생성, 수정, 삭제할 수 있는 기능을 제공합니다. 

또한, **달력 뷰**를 통해 날짜별로 일정을 확인하고, 

각 날짜를 클릭하여 상세 정보를 볼 수 있습니다. 


주요 기능은 다음과 같습니다


- **ToDo 생성/수정/삭제:** 사용자는 새로운 할 일을 추가하거나, 기존 할 일을 수정 및 삭제할 수 있습니다.
- **날짜별 일정 확인:** 달력에서 각 날짜에 대한 일정을 확인하고, 상세 보기 및 삭제가 가능합니다.
- **월별 일정 확인:** 달력에서 각 월에 대한 **[이전 달]**, **[다음 달]** 버튼을 통해 이동하여 확인 가능하며, 상세보기나 날짜별 확인 후 **[x년x월]** 클릭 시 해당 월의 전체 일정을 볼 수 있습니다.
- **기본적인 CRUD 기능:** 일정 데이터는 백엔드에서 관리되며, **React**와 **Spring Boot**를 사용하여 프론트엔드와 백엔드를 분리하여 개발하였습니다.
![웹_list](https://github.com/user-attachments/assets/73da1e6d-2397-4228-a543-842152ba3a37)
![웹_일자별](https://github.com/user-attachments/assets/5289892f-08b5-4b3e-a610-bf3614c2848f)
![웹_다음달](https://github.com/user-attachments/assets/1389c720-08b8-48fe-9e1d-420b80ddd77b)
![웹_create](https://github.com/user-attachments/assets/2febb42f-8655-4785-9a17-d2455e3b4776)


---

## 기술 스택

| back-end  | ver    | front-end  | ver    |
|-----------|--------|------------|--------|
| SpringBoot | 3.3.7  | React      | 18.2.0 |
| Java       | 17     | Axios      | 1.7.9  |
| JPA        |        | Bootstrap  | 5.3.3  |
| <td colspan="2">DB</td> |        | <td colspan="2">MySQL</td> |

---

## 소스 빌드 및 실행 방법

1. **Java 17** 이상 버전이 설치되어 있는지 확인합니다.
2. 소스를 다운받아 압축을 풀고, **IDE**에서 프로젝트를 엽니다.
3. 애플리케이션을 실행합니다.
4. 정상적으로 실행되면 [http://localhost:8080](http://localhost:8080)에서 API 서버를 확인할 수 있습니다.
5. DB는 프로젝트 > src > main > db > young_scheduler_db_backup.sql 참고

---

## 개발 기간 및 인원

- **기간:** 2024년 12월 19일 ~ 2024년 12월 22일 (3일간)
- **인원:** 개발자 1명

---

## 주력으로 사용한 라이브러리

- **React:** 사용자 인터페이스 구축에 사용되었습니다. React의 컴포넌트 기반 아키텍처를 활용하여 각 기능을 모듈화하고, 재사용 가능한 컴포넌트를 설계했습니다.
- **Spring Boot:** 백엔드 서버 구축에 사용되었습니다. Spring Boot는 설정이 간단하고 빠르게 애플리케이션을 생성할 수 있어 개발 효율성을 높입니다.
- **Swagger UI:** API 문서화 도구로 사용되었습니다. Swagger UI는 API를 직관적으로 확인하고 테스트할 수 있도록 도와줍니다.
- **Axios:** API 요청을 처리하는 데 사용되었습니다. React에서 백엔드와의 데이터 통신을 위해 사용됩니다.
- **Bootstrap:** 스타일링을 위한 라이브러리로, 빠르고 간편한 반응형 웹 디자인을 구현하기 위해 사용되었습니다.

---

## API 명세

Swagger UI를 통해 [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)에서 API를 확인하고 테스트할 수 있습니다.

### **API Endpoints:**

- **GET /api/todo/{id}**: 특정 ID에 해당하는 할 일 정보를 반환합니다.
- **POST /api/todo**: 새로운 할 일을 생성합니다.
- **PUT /api/todo/{id}**: 특정 ID에 해당하는 할 일을 수정합니다.
- **DELETE /api/todo/{id}**: 특정 ID에 해당하는 할 일을 삭제합니다.
- **GET /api/todo**: 모든 할 일 목록을 반환합니다.
- **GET /api/todo/count**: 특정 월의 날짜별 할 일 개수를 반환합니다.

![swagger_ui](https://github.com/user-attachments/assets/68f63dfa-7785-44b5-b5e7-475bf033a03a)


---

## 테스트케이스

- **ToDoServiceTest**: 서비스 계층의 단위 테스트를 작성하여 각 CRUD 기능이 정상적으로 동작하는지 확인합니다.
