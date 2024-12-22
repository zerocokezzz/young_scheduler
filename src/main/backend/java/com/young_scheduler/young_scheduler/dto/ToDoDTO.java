package com.young_scheduler.young_scheduler.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

/**
 * ToDo 데이터 전송 객체 (DTO)
 * - 클라이언트와 서버 간 데이터 전달에 사용
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ToDoDTO {

    /** 할 일 제목 */
    private String title;

    /** 할 일 날짜 */
    private LocalDate date;

    /** 할 일 시간 */
    private LocalTime time;

    /** 할 일 상세 설명 */
    private String description;

}
