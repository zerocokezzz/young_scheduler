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

@Service
public class ToDoService {

    @Autowired
    private ToDoRepository toDoRepository;

    /**
     * ToDo를 저장하는 메서드
     * @param toDoDTO 저장할 ToDo 데이터를 포함한 DTO
     * @return 저장된 ToDo의 ID
     */
    public Long saveToDo(ToDoDTO toDoDTO) {
        // ToDo 객체를 생성 및 매핑
        ToDo toDo = ToDo.builder()
                .title(toDoDTO.getTitle())
                .date(toDoDTO.getDate())
                .time(toDoDTO.getTime())
                .description(toDoDTO.getDescription())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        // ToDo를 DB에 저장
        ToDo savedToDo = toDoRepository.save(toDo);

        // 저장된 ToDo의 ID 반환
        return savedToDo.getId();
    }

    /**
     * ToDo 업데이트 메서드
     * @param id 업데이트할 ToDo의 ID
     * @param toDoDTO 업데이트할 데이터를 포함한 DTO
     * @return 업데이트 결과 메시지
     */
    public String updateToDo(Long id, ToDoDTO toDoDTO) {
        Optional<ToDo> optionalToDo = toDoRepository.findById(id);

        if (optionalToDo.isEmpty()) {
            return "ToDo not found with ID: " + id;
        }

        ToDo existingToDo = optionalToDo.get();

        // 업데이트할 필드 설정
        existingToDo.setTitle(toDoDTO.getTitle());
        existingToDo.setDate(toDoDTO.getDate());
        existingToDo.setTime(toDoDTO.getTime());
        existingToDo.setDescription(toDoDTO.getDescription());
        existingToDo.setUpdatedAt(java.time.LocalDateTime.now());

        // 저장
        toDoRepository.save(existingToDo);

        return "ToDo updated successfully with ID: " + id;
    }

    /**
     * ToDo 삭제 메서드
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
     * 단일 ToDo 조회 메서드
     * @param id 조회할 ToDo의 ID
     * @return 조회된 ToDo
     */
    public ToDo getToDoById(Long id) {
        return toDoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("ToDo not found with ID: " + id));
    }

    /**
     * 전체 ToDo 조회 메서드
     * @return 전체 ToDo 목록
     */
    public List<ToDo> getAllToDos() {
        return toDoRepository.findAll();
    }

    public Map<String, Long> getTodoCountByDate(int year, int month) {
        LocalDate startDate = LocalDate.of(year, month, 1);
        LocalDate endDate = startDate.withDayOfMonth(startDate.lengthOfMonth());

        List<ToDo> todos = toDoRepository.findAllByDateBetween(startDate, endDate);

        // 날짜별 할 일 개수 계산
        return todos.stream()
                .collect(Collectors.groupingBy(
                        todo -> todo.getDate().toString(), // 날짜를 문자열로 변환
                        Collectors.counting()
                ));
    }

}
