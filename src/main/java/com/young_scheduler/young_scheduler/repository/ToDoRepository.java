package com.young_scheduler.young_scheduler.repository;


import com.young_scheduler.young_scheduler.entity.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {



}
