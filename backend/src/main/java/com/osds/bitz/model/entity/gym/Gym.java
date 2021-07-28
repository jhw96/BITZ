package com.osds.bitz.model.entity.gym;

import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="gym")
@Builder
public class Gym {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;                    // 체육관ID

    @Column(nullable = false)
    private String businessId;          // 사업자ID

    @Column(nullable = false)
    private String name;                // 체육관명

    @Column(nullable = false)
    private String address;             // 체육관 주소

    @Column(nullable = false)
    private int courtWidth;             // 농구장 가로

    @Column(nullable = false)
    private int courtLength;            // 농구장 세로

    @Column(nullable = false)
    private boolean isParking;          // 주차여부

    @Column(nullable = false)
    private boolean isShower;           // 샤워장여부

    @Column(nullable = false)
    private boolean isAirconditional;   // 에어컨여부

    @Column(nullable = false)
    private boolean isWater;            // 정수기여부

    @Column(nullable = false)
    private boolean isBasketball;       // 농구공 대여여부

    @Column(nullable = false)
    private boolean isScoreboard;       // 점수판(휘슬)여부

}