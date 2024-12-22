package com.young_scheduler.young_scheduler.repository;

import com.young_scheduler.young_scheduler.entity.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

/**
 * ToDo Repository 인터페이스
 * - ToDo 엔티티에 대한 데이터베이스 접근 로직 정의
 * - JpaRepository를 확장하여 기본 CRUD 메서드 제공
 */
@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {

    /**
     * 특정 기간에 해당하는 모든 ToDo 조회
     * @param startDate 조회할 시작 날짜
     * @param endDate 조회할 종료 날짜
     * @return 기간 내의 ToDo 목록
     */
    List<ToDo> findAllByDateBetween(LocalDate startDate, LocalDate endDate);
}
