package com.young_scheduler.young_scheduler.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * CORS 설정 클래스
 * - 클라이언트 애플리케이션에서 서버의 API로 요청을 허용하기 위한 설정
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    /**
     * CORS 매핑 설정
     * - "/api/**" 경로로 들어오는 요청에 대해 특정 출처의 요청을 허용
     * - 허용 출처: "http://localhost:3000", "http://localhost:8080"
     * - 허용 HTTP 메서드: GET, POST, PUT, DELETE
     *
     * @param registry CORS 설정을 등록하는 객체
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // API 경로에 대해 CORS 허용
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:8080") // 허용할 출처
                .allowedMethods("GET", "POST", "PUT", "DELETE"); // 허용할 HTTP 메서드
    }
}
