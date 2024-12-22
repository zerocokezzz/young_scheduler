package com.young_scheduler.young_scheduler;

import com.young_scheduler.young_scheduler.dto.ToDoDTO;
import com.young_scheduler.young_scheduler.entity.ToDo;
import com.young_scheduler.young_scheduler.repository.ToDoRepository;
import com.young_scheduler.young_scheduler.service.ToDoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * ToDoService 테스트 클래스
 * - ToDoService 및 ToDoRepository의 주요 동작을 검증
 * DB 생성하려면 Transactional 제거 후 Test
 */
@SpringBootTest
@Transactional
public class ToDoServiceTest {

    @Autowired
    private ToDoService toDoService;

    @Autowired
    private ToDoRepository toDoRepository;

    /**
     * 새로운 ToDo 저장 테스트
     * - ToDo 데이터를 저장하고 저장 결과를 검증
     */
    @Test
    void testSaveToDo() {
        // Given: 저장할 ToDoDTO 생성
        ToDoDTO toDoDTO = ToDoDTO.builder()
                .title("점심")
                .date(LocalDate.of(2024, 12, 25))
                .time(LocalTime.of(12, 0))
                .description("짬뽕지존")
                .build();

        // When: ToDo 저장
        Long savedId = toDoService.saveToDo(toDoDTO);

        // Then: 저장된 ToDo 검증
        assertNotNull(savedId, "저장된 ToDo ID는 null이 아니어야 합니다.");
        ToDo savedToDo = toDoRepository.findById(savedId).orElse(null);
        assertNotNull(savedToDo, "저장된 ToDo는 null이 아니어야 합니다.");
        assertEquals(toDoDTO.getTitle(), savedToDo.getTitle(), "제목이 일치해야 합니다.");
        assertEquals(toDoDTO.getDate(), savedToDo.getDate(), "날짜가 일치해야 합니다.");
        assertEquals(toDoDTO.getTime(), savedToDo.getTime(), "시간이 일치해야 합니다.");
        assertEquals(toDoDTO.getDescription(), savedToDo.getDescription(), "설명이 일치해야 합니다.");
    }

    /**
     * 기존 ToDo 업데이트 테스트
     * - 특정 ToDo 데이터를 업데이트하고 결과를 검증
     */
    @Test
    void testUpdateToDo() {
        // Given: 기존 ToDo 가져오기
        Long existingId = 1L; // 업데이트할 ToDo ID
        ToDo existingToDo = toDoRepository.findById(existingId).orElse(null);
        assertNotNull(existingToDo, "기존 ToDo는 null이 아니어야 합니다.");

        // When: 업데이트 데이터 설정 및 실행
        ToDoDTO updateDTO = ToDoDTO.builder()
                .title("Updated Title")
                .date(LocalDate.of(2024, 12, 25))
                .time(LocalTime.of(14, 0))
                .description("Updated Description")
                .build();

        String result = toDoService.updateToDo(existingId, updateDTO);

        // Then: 업데이트 결과 검증
        assertEquals("ToDo updated successfully with ID: " + existingId, result);
        ToDo updatedToDo = toDoRepository.findById(existingId).orElse(null);
        assertNotNull(updatedToDo, "업데이트된 ToDo는 null이 아니어야 합니다.");
        assertEquals(updateDTO.getTitle(), updatedToDo.getTitle(), "제목이 업데이트되어야 합니다.");
        assertEquals(updateDTO.getDate(), updatedToDo.getDate(), "날짜가 업데이트되어야 합니다.");
        assertEquals(updateDTO.getTime(), updatedToDo.getTime(), "시간이 업데이트되어야 합니다.");
        assertEquals(updateDTO.getDescription(), updatedToDo.getDescription(), "설명이 업데이트되어야 합니다.");
    }

    /**
     * ToDo 삭제 테스트
     * - 특정 ToDo 데이터를 삭제하고 결과를 검증
     */
    @Test
    void testDeleteExistingToDo() {
        // Given: 삭제할 ToDo 가져오기
        Long existingId = 3L; // 삭제 대상 ToDo ID
        ToDo existingToDo = toDoRepository.findById(existingId).orElse(null);
        assertNotNull(existingToDo, "삭제할 ToDo는 null이 아니어야 합니다.");

        // When: ToDo 삭제
        String result = toDoService.deleteToDo(existingId);

        // Then: 삭제 결과 검증
        assertEquals("ToDo deleted successfully with ID: " + existingId, result);
        assertFalse(toDoRepository.existsById(existingId), "ToDo는 삭제된 상태여야 합니다.");
    }

    /**
     * 단일 ToDo 조회 테스트
     * - 특정 ID로 ToDo를 조회하고 결과를 검증
     */
    @Test
    void testGetToDoById() {
        // Given: 조회할 ToDo ID
        Long existingId = 1L;
        ToDo existingToDo = toDoRepository.findById(existingId).orElse(null);
        assertNotNull(existingToDo, "기존 ToDo는 null이 아니어야 합니다.");

        // When: ID로 ToDo 조회
        ToDo foundToDo = toDoService.getToDoById(existingId);

        // Then: 조회 결과 검증
        assertNotNull(foundToDo, "조회된 ToDo는 null이 아니어야 합니다.");
        assertEquals(existingToDo.getTitle(), foundToDo.getTitle(), "제목이 일치해야 합니다.");
        assertEquals(existingToDo.getDate(), foundToDo.getDate(), "날짜가 일치해야 합니다.");
        assertEquals(existingToDo.getTime(), foundToDo.getTime(), "시간이 일치해야 합니다.");
        assertEquals(existingToDo.getDescription(), foundToDo.getDescription(), "설명이 일치해야 합니다.");
    }

    /**
     * 모든 ToDo 조회 테스트
     * - 전체 ToDo 목록을 조회하고 결과를 검증
     */
    @Test
    void testGetAllToDos() {
        // Given: 기존 ToDo 목록
        List<ToDo> existingToDos = toDoRepository.findAll();
        assertNotNull(existingToDos, "기존 ToDo 목록은 null이 아니어야 합니다.");
        assertTrue(!existingToDos.isEmpty(), "기존 ToDo 목록은 비어 있지 않아야 합니다.");

        // When: 전체 ToDo 조회
        List<ToDo> toDoList = toDoService.getAllToDos();

        // Then: 조회 결과 검증
        assertNotNull(toDoList, "조회된 ToDo 목록은 null이 아니어야 합니다.");
        assertEquals(existingToDos.size(), toDoList.size(), "ToDo 개수가 일치해야 합니다.");
    }

    /**
     * 다수의 ToDo 저장 테스트
     * - 반복적으로 ToDo를 저장하고 저장된 데이터 검증
     */
    @Test
    void testSaveMultipleToDos() {
        // Given: 50개의 ToDo 데이터를 생성 및 저장
        for (int i = 1; i <= 50; i++) {
            ToDoDTO toDoDTO = ToDoDTO.builder()
                    .title(i + "번 제목")
                    .date(LocalDate.of(2024, 12, 31))
                    .time(LocalTime.of(12, 0))
                    .description(i + "번 설명")
                    .build();

            // When: ToDo 저장
            Long savedId = toDoService.saveToDo(toDoDTO);

            // Then: 저장된 데이터 검증
            assertNotNull(savedId, "저장된 ToDo ID는 null이 아니어야 합니다.");
            ToDo savedToDo = toDoRepository.findById(savedId).orElse(null);
            assertNotNull(savedToDo, "저장된 ToDo는 null이 아니어야 합니다.");
            assertEquals(toDoDTO.getTitle(), savedToDo.getTitle(), "제목이 일치해야 합니다.");
            assertEquals(toDoDTO.getDate(), savedToDo.getDate(), "날짜가 일치해야 합니다.");
            assertEquals(toDoDTO.getTime(), savedToDo.getTime(), "시간이 일치해야 합니다.");
            assertEquals(toDoDTO.getDescription(), savedToDo.getDescription(), "설명이 일치해야 합니다.");
        }

        // 총 저장된 데이터 개수 검증
        List<ToDo> allToDos = toDoRepository.findAll();
        assertTrue(allToDos.size() >= 50, "저장된 ToDo의 개수가 50 이상이어야 합니다.");
    }
}
