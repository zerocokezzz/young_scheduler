package com.young_scheduler.young_scheduler.controller;

import com.young_scheduler.young_scheduler.dto.ToDoDTO;
import com.young_scheduler.young_scheduler.entity.ToDo;
import com.young_scheduler.young_scheduler.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
<<<<<<< HEAD:src/main/java/com/young_scheduler/young_scheduler/controller/ToDoController.java
@RequestMapping("/todo") // API 엔드포인트를 명확히 정의
=======
@RequestMapping("/api/todo")
>>>>>>> main:src/main/backend/java/com/young_scheduler/young_scheduler/controller/ToDoController.java
public class ToDoController {

    @Autowired
    private ToDoService toDoService;

    /**
     * 새로운 ToDo 생성
     * @param toDoDTO 생성할 ToDo 데이터
     * @return 생성된 ToDo의 ID
     */
    @PostMapping
    public ResponseEntity<Long> createToDo(@RequestBody ToDoDTO toDoDTO) {
        Long id = toDoService.saveToDo(toDoDTO);
        return ResponseEntity.ok(id);
    }

    /**
     * 기존 ToDo 업데이트
     * @param id 업데이트할 ToDo의 ID
     * @param toDoDTO 업데이트할 데이터
     * @return 성공 메시지
     */
    @PutMapping("/{id}")
    public ResponseEntity<String> updateToDo(@PathVariable Long id, @RequestBody ToDoDTO toDoDTO) {
        String result = toDoService.updateToDo(id, toDoDTO);
        return ResponseEntity.ok(result);
    }

    /**
     * ToDo 삭제
     * @param id 삭제할 ToDo의 ID
     * @return 성공 메시지
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteToDo(@PathVariable Long id) {
        String result = toDoService.deleteToDo(id);
        return ResponseEntity.ok(result);
    }

    /**
     * 특정 ToDo 조회
     * @param id 조회할 ToDo의 ID
     * @return 조회된 ToDo 데이터
     */
    @GetMapping("/{id}")
    public ResponseEntity<ToDo> getToDoById(@PathVariable Long id) {
        ToDo toDo = toDoService.getToDoById(id);
        return ResponseEntity.ok(toDo);
    }

    /**
     * 모든 ToDo 조회
     * @return 전체 ToDo 목록
     */
    @GetMapping
    public ResponseEntity<List<ToDo>> getAllToDos() {
        List<ToDo> toDoList = toDoService.getAllToDos();
        return ResponseEntity.ok(toDoList);
    }

    /**
     * 특정 연도와 월의 ToDo 개수 조회
     * @param year 조회할 연도
     * @param month 조회할 월 (1부터 12까지)
     * @return 날짜별 ToDo 개수
     */
    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> getTodoCount(
            @RequestParam int year,
            @RequestParam int month
    ) {
        Map<String, Long> todoCountByDate = toDoService.getTodoCountByDate(year, month);
        return ResponseEntity.ok(todoCountByDate);
    }
}
