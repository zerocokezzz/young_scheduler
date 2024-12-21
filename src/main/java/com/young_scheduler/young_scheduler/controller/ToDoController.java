package com.young_scheduler.young_scheduler.controller;

import com.young_scheduler.young_scheduler.dto.ToDoDTO;
import com.young_scheduler.young_scheduler.entity.ToDo;
import com.young_scheduler.young_scheduler.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo") // API 엔드포인트를 명확히 정의
public class ToDoController {

    @Autowired
    private ToDoService toDoService;

    /**
     * ToDo 저장 메서드
     * @param toDoDTO 저장할 데이터를 포함한 DTO
     * @return 저장 결과 메시지
     */
    @PostMapping
    public ResponseEntity<Long> createToDo(@RequestBody ToDoDTO toDoDTO) {
        Long id = toDoService.saveToDo(toDoDTO);
        return ResponseEntity.ok(id);
    }

    /**
     * ToDo 업데이트 메서드
     * @param id 업데이트할 ToDo의 ID
     * @param toDoDTO 업데이트할 데이터를 포함한 DTO
     * @return 업데이트 결과 메시지
     */
    @PutMapping("/{id}")
    public ResponseEntity<String> updateToDo(@PathVariable Long id, @RequestBody ToDoDTO toDoDTO) {
        String result = toDoService.updateToDo(id, toDoDTO);
        return ResponseEntity.ok(result);
    }

    /**
     * ToDo 삭제 메서드
     * @param id 삭제할 ToDo의 ID
     * @return 삭제 결과 메시지
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteToDo(@PathVariable Long id) {
        String result = toDoService.deleteToDo(id);
        return ResponseEntity.ok(result);
    }

    /**
     * 단일 ToDo 조회 메서드
     * @param id 조회할 ToDo의 ID
     * @return 조회된 ToDo
     */
    @GetMapping("/{id}")
    public ResponseEntity<ToDo> getToDoById(@PathVariable Long id) {
        ToDo toDo = toDoService.getToDoById(id);
        return ResponseEntity.ok(toDo);
    }

    /**
     * 전체 ToDo 조회 메서드
     * @return 전체 ToDo 목록
     */
    @GetMapping
    public ResponseEntity<List<ToDo>> getAllToDos() {
        List<ToDo> toDoList = toDoService.getAllToDos();
        return ResponseEntity.ok(toDoList);
    }

}
