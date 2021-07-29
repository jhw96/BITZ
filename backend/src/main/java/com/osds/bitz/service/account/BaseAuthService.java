package com.osds.bitz.service.account;

import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;
import java.util.Random;

public class BaseAuthService {

    public JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

    @Bean
    public JavaMailSenderImpl mailSender() {
        javaMailSender.setProtocol("smtp");
        javaMailSender.setHost("smtp.gmail.com");
        javaMailSender.setPort(587);
        javaMailSender.setUsername("angpang1106@gmail.com");
        javaMailSender.setPassword("rozqumdjyahhtaui");
        javaMailSender.setDefaultEncoding("UTF-8");
        Properties properties = javaMailSender.getJavaMailProperties();
        properties.put("mail.smtp.starttls.enable", true);
        properties.put("mail.smtp.auth", true);
        properties.put("mail.debug", true);
        javaMailSender.setJavaMailProperties(properties);
        return javaMailSender;
    }

    // 회원가입용 고유 아이디 생성
    // 7자리 난수 만들기
    public String generateRandomNumber(boolean isGeneral) {
        int length = 7;

        Random random = new Random(System.currentTimeMillis());
        int range = (int) Math.pow(10, length);
        int trim = (int) Math.pow(10, length - 1);
        int result = random.nextInt(range) + trim;

        if (result > range) result = result - trim;

        String id = String.valueOf(result);

        if (isGeneral) return "S" + id;      // 일반 사용자
        else return "B" + id;               // 관리자
    }

    // 비밀번호 찾기용 임시 비밀번호 생성
    // 10자리 난수 만들기
    public String generateRandomNumber(){
        int length = 10;
        String result = "";

        for(int i = 0; i < length; i++){
            result = result + String.valueOf(new Random().nextInt(9)+1);
        }
        return result;
    }
}