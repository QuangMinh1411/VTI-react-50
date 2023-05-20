package com.vti.car_demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "type")
    private String type;
    private String model;
    private String maker;

    @Lob // Large Object
    @Column(name = "image", columnDefinition = "LONGBLOB")

    private byte[] image;

    public Car(String type,String model,String maker,byte[] image){
        this.type=type;
        this.model=model;
        this.maker=maker;
        this.image=image;
    }

}
