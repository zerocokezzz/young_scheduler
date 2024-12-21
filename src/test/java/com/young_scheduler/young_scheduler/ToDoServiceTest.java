package com.young_scheduler.young_scheduler;

import com.young_scheduler.young_scheduler.dto.ToDoDTO;
import com.young_scheduler.young_scheduler.entity.ToDo;
import com.young_scheduler.young_scheduler.repository.ToDoRepository;
import com.young_scheduler.young_scheduler.service.ToDoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
//@Transactional // 테스트 후 데이터 롤백
public class ToDoServiceTest {

    @Autowired
    private ToDoService toDoService;

    @Autowired
    private ToDoRepository toDoRepository;

    @Test
    void testSaveToDo() {
        // Given: ToDoDTO 생성
        ToDoDTO toDoDTO = ToDoDTO.builder()
                .title("점심")
                .date(LocalDate.of(2024, 12, 25))
                .time(LocalTime.of(12, 0))
                .description("짬뽕지존")
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

    @Test
    void testUpdateToDo() {
        // Given: 기존에 존재하는 ToDo 데이터 가져오기
        Long existingId = 1L; // 테스트 대상 ToDo ID
        ToDo existingToDo = toDoRepository.findById(existingId).orElse(null);
        assertNotNull(existingToDo, "Existing ToDo should not be null");

        // 기존 데이터 출력 (디버깅용)
        System.out.println("Before Update: " + existingToDo);

        // When: 업데이트 데이터 설정 및 실행
        ToDoDTO updateDTO = ToDoDTO.builder()
                .title("Updated Title")
                .date(LocalDate.of(2024, 12, 25))
                .time(LocalTime.of(14, 0))
                .description("Updated Description")
                .build();

        String result = toDoService.updateToDo(existingId, updateDTO);

        // Then: 업데이트 결과 확인
        assertEquals("ToDo updated successfully with ID: " + existingId, result);

        ToDo updatedToDo = toDoRepository.findById(existingId).orElse(null);
        assertNotNull(updatedToDo, "Updated ToDo should not be null");
        assertEquals(updateDTO.getTitle(), updatedToDo.getTitle(), "Title should be updated");
        assertEquals(updateDTO.getDate(), updatedToDo.getDate(), "Date should be updated");
        assertEquals(updateDTO.getTime(), updatedToDo.getTime(), "Time should be updated");
        assertEquals(updateDTO.getDescription(), updatedToDo.getDescription(), "Description should be updated");

        // 결과 출력 (디버깅용)
        System.out.println("After Update: " + updatedToDo);
    }

    @Test
    void testDeleteExistingToDo() {
        // Given: 기존에 존재하는 ToDo 데이터 가져오기
        Long existingId = 3L; // 삭제하려는 ToDo의 ID
        ToDo existingToDo = toDoRepository.findById(existingId).orElse(null);
        assertNotNull(existingToDo, "Existing ToDo should not be null");
        System.out.println("Before Delete: " + existingToDo);

        // When: ToDo 삭제 실행
        String result = toDoService.deleteToDo(existingId);

        // Then: 삭제 결과 확인
        assertEquals("ToDo deleted successfully with ID: " + existingId, result);
        assertFalse(toDoRepository.existsById(existingId), "ToDo should no longer exist in the database");

        // 삭제 후 출력 (디버깅용)
        System.out.println("After Delete: ToDo with ID " + existingId + " has been deleted.");
    }

    @Test
    void testGetToDoById() {
        // Given: 기존에 존재하는 ToDo 데이터
        Long existingId = 1L; // 테스트할 ToDo ID
        ToDo existingToDo = toDoRepository.findById(existingId).orElse(null);
        assertNotNull(existingToDo, "Existing ToDo should not be null");
        System.out.println("Before Read: " + existingToDo);

        // When: ID로 ToDo 조회
        ToDo foundToDo = toDoService.getToDoById(existingId);

        // Then: 조회 결과 확인
        assertNotNull(foundToDo, "Found ToDo should not be null");
        assertEquals(existingToDo.getTitle(), foundToDo.getTitle(), "Title should match");
        assertEquals(existingToDo.getDate(), foundToDo.getDate(), "Date should match");
        assertEquals(existingToDo.getTime(), foundToDo.getTime(), "Time should match");
        assertEquals(existingToDo.getDescription(), foundToDo.getDescription(), "Description should match");
    }

    @Test
    void testGetAllToDos() {
        // Given: 기존에 존재하는 ToDo 데이터
        List<ToDo> existingToDos = toDoRepository.findAll();
        assertNotNull(existingToDos, "Existing ToDo list should not be null");
        assertTrue(!existingToDos.isEmpty(), "ToDo list should not be empty");
        System.out.println("Before Read All: " + existingToDos);

        // When: 전체 ToDo 조회
        List<ToDo> toDoList = toDoService.getAllToDos();

        // Then: 조회 결과 확인
        assertNotNull(toDoList, "ToDo list should not be null");
        assertEquals(existingToDos.size(), toDoList.size(), "The number of ToDos should match");
    }

    @Test
    void testSaveMultipleToDos() {
        // Given: 50개의 ToDo 데이터 생성 및 저장
        for (int i = 1; i <= 50; i++) {
            // 각 반복에서 제목과 설명 설정
            String title = i + "번 제목";
            String description = i + "번 설명";

            ToDoDTO toDoDTO = ToDoDTO.builder()
                    .title(title)
                    .date(LocalDate.of(2024, 12, 31)) // 동일한 날짜 사용
                    .time(LocalTime.of(12, 0)) // 동일한 시간 사용
                    .description(description)
                    .build();

            // When: ToDo 저장
            Long savedId = toDoService.saveToDo(toDoDTO);

            // Then: 저장 결과 검증
            assertNotNull(savedId, "저장된 ToDo ID는 null이 아니어야 합니다.");

            ToDo savedToDo = toDoRepository.findById(savedId).orElse(null);
            assertNotNull(savedToDo, "저장된 ToDo는 null이 아니어야 합니다.");
            assertEquals(toDoDTO.getTitle(), savedToDo.getTitle(), "제목이 일치해야 합니다.");
            assertEquals(toDoDTO.getDate(), savedToDo.getDate(), "날짜가 일치해야 합니다.");
            assertEquals(toDoDTO.getTime(), savedToDo.getTime(), "시간이 일치해야 합니다.");
            assertEquals(toDoDTO.getDescription(), savedToDo.getDescription(), "설명이 일치해야 합니다.");

            // 디버깅용 출력
            System.out.println("Saved ToDo: " + savedToDo);
        }

        // 저장된 총 데이터 개수 확인
        List<ToDo> allToDos = toDoRepository.findAll();
        assertTrue(allToDos.size() >= 50, "저장된 ToDo의 개수가 50 이상이어야 합니다.");
        System.out.println("Total ToDos: " + allToDos.size());
    }
}