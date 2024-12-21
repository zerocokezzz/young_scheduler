package com.young_scheduler.young_scheduler.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ToDoDTO {

    private String title;

    private LocalDate date;

    private LocalTime time;

    private String description;

}