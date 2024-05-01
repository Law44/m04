package com.demo.m04.json;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "homes", path = "homes")
@CrossOrigin(origins = "*")
public interface RestHomeInterface extends PagingAndSortingRepository<HomeEntity, Long>, CrudRepository<HomeEntity, Long> {

    List<HomeEntity> findByName(@Param("name") String name);

    
}
