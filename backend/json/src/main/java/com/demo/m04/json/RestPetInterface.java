package com.demo.m04.json;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "pets", path = "pets")
public interface RestPetInterface extends PagingAndSortingRepository<PetEntity, Long>, CrudRepository<PetEntity, Long> {

    List<PetEntity> findByName(@Param("name") String name);
    
}
