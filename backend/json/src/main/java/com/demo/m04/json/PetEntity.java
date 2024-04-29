package com.demo.m04.json;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Entity(name = "pet")
@Data
public class PetEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String species;
    private String image;
    private Integer age;

    @OneToMany(mappedBy = "pet", cascade = CascadeType.ALL)
    private List<HomeEntity> homes;
    
}
