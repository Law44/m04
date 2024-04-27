package com.demo.m04.json;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
public class PetRestController {

    final RestPetInterface restPetInterface;
    
    @PostMapping("/pets/list")
    public ResponseEntity<Void> postMethodName(@RequestBody List<PetEntity> pet)  {
        restPetInterface.saveAll(pet);
        return ResponseEntity.created(null).build();
    }

}
