package com.demo.m04.json;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class HomeRestController {

    final RestHomeInterface restHomeInterface;
    
    @PostMapping("/homes/list")
    public ResponseEntity<Void> postMethodName(@RequestBody List<HomeEntity> home)  {
        restHomeInterface.saveAll(home);
        return ResponseEntity.created(null).build();
    }

}
