package com.young_scheduler.young_scheduler;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // React 라우팅을 위한 설정
        registry.addViewController("/{spring:[^.]*}")
                .setViewName("forward:/index.html");
        registry.addViewController("/**/{spring:[^.]*}")
                .setViewName("forward:/index.html");
        registry.addViewController("/{spring:[^.]*}/**{spring:[^.]*}")
                .setViewName("forward:/index.html");
    }
}