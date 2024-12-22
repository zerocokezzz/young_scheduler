package com.young_scheduler.young_scheduler.service;

import com.young_scheduler.young_scheduler.dto.ToDoDTO;
import com.young_scheduler.young_scheduler.entity.ToDo;
import com.young_scheduler.young_scheduler.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * ToDo 서비스 클래스
 * - 비즈니스 로직을 처리하고, Repository와 Controller 간의 연결 역할
 */
@Service
public class ToDoService {

    @Autowired
    private ToDoRepository toDoRepository;

    /**
     * 새로운 ToDo 저장
     * @param toDoDTO 저장할 ToDo 데이터
     * @return 저장된 ToDo의 ID
     */
    public Long saveToDo(ToDoDTO toDoDTO) {
        ToDo toDo = ToDo.builder()
                .title(toDoDTO.getTitle())
                .date(toDoDTO.getDate())
                .time(toDoDTO.getTime())
                .description(toDoDTO.getDescription())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        return toDoRepository.save(toDo).getId();
    }

    /**
     * 기존 ToDo 업데이트
     * @param id 업데이트할 ToDo의 ID
     * @param toDoDTO 업데이트할 데이터
     * @return 업데이트 결과 메시지
     */
    public String updateToDo(Long id, ToDoDTO toDoDTO) {
        Optional<ToDo> optionalToDo = toDoRepository.findById(id);
        if (optionalToDo.isEmpty()) {
            return "ToDo not found with ID: " + id;
        }
        ToDo existingToDo = optionalToDo.get();
        existingToDo.setTitle(toDoDTO.getTitle());
        existingToDo.setDate(toDoDTO.getDate());
        existingToDo.setTime(toDoDTO.getTime());
        existingToDo.setDescription(toDoDTO.getDescription());
        existingToDo.setUpdatedAt(LocalDateTime.now());
        toDoRepository.save(existingToDo);
        return "ToDo updated successfully with ID: " + id;
    }

    /**
     * ToDo 삭제
     * @param id 삭제할 ToDo의 ID
     * @return 삭제 결과 메시지
     */
    public String deleteToDo(Long id) {
        if (!toDoRepository.existsById(id)) {
            return "ToDo not found with ID: " + id;
        }
        toDoRepository.deleteById(id);
        return "ToDo deleted successfully with ID: " + id;
    }

    /**
     * 단일 ToDo 조회
     * @param id 조회할 ToDo의 ID
     * @return 조회된 ToDo
     */
    public ToDo getToDoById(Long id) {
        return toDoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("ToDo not found with ID: " + id));
    }

    /**
     * 모든 ToDo 조회
     * @return 전체 ToDo 목록
     */
    public List<ToDo> getAllToDos() {
        return toDoRepository.findAll();
    }

    /**
     * 특정 기간 동안 날짜별 ToDo 개수 조회
     * @param year 조회할 연도
     * @param month 조회할 월 (1부터 12까지)
     * @return 날짜별 ToDo 개수 맵
     */
    public Map<String, Long> getTodoCountByDate(int year, int month) {
        LocalDate startDate = LocalDate.of(year, month, 1);
        LocalDate endDate = startDate.withDayOfMonth(startDate.lengthOfMonth());
        List<ToDo> todos = toDoRepository.findAllByDateBetween(startDate, endDate);

        return todos.stream()
                .collect(Collectors.groupingBy(
                        todo -> todo.getDate().toString(),
                        Collectors.counting()
                ));
    }
}
