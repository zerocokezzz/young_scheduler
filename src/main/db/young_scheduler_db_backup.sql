/*
1. 스키마 생성 및 사용
*/

CREATE DATABASE IF NOT EXISTS young_scheduler_db CHARACTER SET utf8 COLLATE utf8_general_ci;

USE young_scheduler_db;

/*
2. 프로젝트 실행 시 테이블 자동 생성 또는 아래 쿼리문 사용
*/
CREATE TABLE todo (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY,          -- Primary Key with AUTO_INCREMENT
                      title VARCHAR(255) NOT NULL,                   -- Not null field for 'title' with max length 255
                      date DATE NOT NULL,                            -- Not null field for 'date'
                      time TIME,                                    -- Optional 'time' field (nullable)
                      description TEXT,                             -- Optional 'description' field (nullable)
                      createdAt TIMESTAMP NOT NULL,                  -- 'createdAt' field (automatically set)
                      updatedAt TIMESTAMP NOT NULL,                  -- 'updatedAt' field (automatically updated)
                      CONSTRAINT UC_TODO UNIQUE (title, date)        -- Optional: Unique constraint for title and date, if required
);

-- Additional commands for constraints, indexes, etc. can be added if needed

/*
3. 기초데이터
*/
INSERT INTO `` (`id`,`created_at`,`date`,`description`,`time`,`title`,`updated_at`) VALUES (1,'2024-12-22 14:40:52.442587','2024-12-22','과제 제출','23:59:00.000000','마감','2024-12-22 14:40:52.442587');
INSERT INTO `` (`id`,`created_at`,`date`,`description`,`time`,`title`,`updated_at`) VALUES (2,'2024-12-22 14:41:17.370342','2024-12-25','케빈과 함께','00:00:00.000000','크리스마스','2024-12-22 14:41:17.370342');
INSERT INTO `` (`id`,`created_at`,`date`,`description`,`time`,`title`,`updated_at`) VALUES (3,'2024-12-22 14:41:46.110607','2024-12-26','강남역','12:00:00.000000','점심 약속','2024-12-22 14:41:46.110607');
INSERT INTO `` (`id`,`created_at`,`date`,`description`,`time`,`title`,`updated_at`) VALUES (4,'2024-12-22 14:42:10.474332','2024-12-26','미정','15:00:00.000000','저녁 약속','2024-12-22 14:42:10.474332');
INSERT INTO `` (`id`,`created_at`,`date`,`description`,`time`,`title`,`updated_at`) VALUES (5,'2024-12-22 14:43:00.812123','2024-12-07','리눅스마스터','13:00:00.000000','시험','2024-12-22 14:43:00.812123');
INSERT INTO `` (`id`,`created_at`,`date`,`description`,`time`,`title`,`updated_at`) VALUES (6,'2024-12-22 14:55:27.142635','2025-01-01','까치까치','00:00:00.000000','신정','2024-12-22 14:55:27.142635');
INSERT INTO `` (`id`,`created_at`,`date`,`description`,`time`,`title`,`updated_at`) VALUES (7,'2024-12-22 15:09:48.680413','2024-11-11','',NULL,'test','2024-12-22 15:09:48.680413');
