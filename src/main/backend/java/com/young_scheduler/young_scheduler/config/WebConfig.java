package com.young_scheduler.young_scheduler.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 웹 설정 클래스
 * - React SPA(Single Page Application)와 정적 리소스 처리를 위한 설정
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    /**
     * React 라우팅 처리를 위한 ViewController 설정
     * - ".html" 확장자가 없는 경로 요청을 React의 "index.html"로 포워딩
     * - 모든 React 라우팅 경로를 처리
     *
     * @param registry ViewController 등록 객체
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // 정적 파일이 아닌 경로를 React의 index.html로 포워딩
        registry.addViewController("/{spring:[^.]*}").setViewName("forward:/index.html");
        registry.addViewController("/**/{spring:[^.]*}").setViewName("forward:/index.html");
    }

    /**
     * 정적 리소스 처리
     * - React의 정적 파일을 제공하기 위해 설정
     *
     * @param registry ResourceHandler 등록 객체
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 정적 파일 경로 설정
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/");
    }
}
