package com.demo.m04.json;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "pets", path = "pets")
@CrossOrigin(origins = "*")
public interface RestPetInterface extends PagingAndSortingRepository<PetEntity, Long>, CrudRepository<PetEntity, Long> {

    List<PetEntity> findByName(@Param("name") String name);

     // Add a method to save a PetEntity along with its associated HomeEntity
     default PetEntity saveWithHome(PetEntity petEntity, List<HomeEntity> homeEntity) {
        petEntity.setHomes(homeEntity); // Set the HomeEntity for the pet
        return save(petEntity); // Save the petEntity
    }
    
}
