package com.young_scheduler.young_scheduler.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

/**
 * ToDo 엔티티 클래스
 * - 데이터베이스 테이블 'todo'와 매핑
 * - 할 일(ToDo) 정보를 관리
 */
@Entity
@Table(name = "todo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class ToDo {

    /** Primary Key (자동 증가) */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO_INCREMENT 매핑
    private Long id;

    /** 할 일 제목 (필수, 최대 255자) */
    @Column(nullable = false, length = 255) // NOT NULL, 길이 제한
    private String title;

    /** 할 일 날짜 (필수) */
    @Column(nullable = false) // NOT NULL
    private LocalDate date;

    /** 할 일 시간 (옵션) */
    @Column
    private LocalTime time; // NULL 허용

    /** 할 일 상세 설명 (옵션, TEXT 타입) */
    @Column(columnDefinition = "TEXT")
    private String description; // NULL 허용

    /** 생성 시각 (자동 설정, 수정 불가) */
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    /** 수정 시각 (자동 설정) */
    @Column(nullable = false)
    private LocalDateTime updatedAt;

    /**
     * 엔티티 생성 전 실행
     * - 생성 시 'createdAt'과 'updatedAt'을 현재 시각으로 설정
     */
    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    /**
     * 엔티티 업데이트 전 실행
     * - 수정 시 'updatedAt'을 현재 시각으로 갱신
     */
    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
