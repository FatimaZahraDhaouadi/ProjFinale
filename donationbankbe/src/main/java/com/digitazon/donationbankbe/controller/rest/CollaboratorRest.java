package com.digitazon.donationbankbe.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digitazon.donationbankbe.model.Collaborator;
import com.digitazon.donationbankbe.service.CollaboratorService;

@RestController
@RequestMapping("/api/collaborator")
@CrossOrigin
public class CollaboratorRest {
    
    @Autowired
    CollaboratorService collaboratorService;

    @GetMapping("/all")
    public ResponseEntity<List<Collaborator>> getAllCollaborator(){
        
        return new ResponseEntity<>(collaboratorService.getAllCollaborator(), HttpStatus.OK);
    }
 
    @GetMapping("/find/{id}")
    public ResponseEntity<Collaborator> getCollaboratorById(@PathVariable Long id){

        return new ResponseEntity<>(collaboratorService.findCollaboratorById(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Collaborator> createCollaborator(@RequestBody Collaborator newCollaborator){

        return new ResponseEntity<Collaborator>(collaboratorService.saveCollaborator(newCollaborator), HttpStatus.OK);
    }

     
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCollaboratorById(@PathVariable String id){

        Long idLong = Long.parseLong(id);

        collaboratorService.deleteCollaboratorById(idLong);

        return new ResponseEntity<>("delete successful", HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Collaborator> updateCollaborator(@PathVariable long id, @RequestBody Collaborator newCollaborator){

        return new ResponseEntity<>(collaboratorService.updateCollaborator(newCollaborator),HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Collaborator> updateCollaboratorById(@PathVariable Long id, @RequestBody Collaborator newCollaborator){
        
        return new ResponseEntity<Collaborator>(collaboratorService.updateCollaboratorById(newCollaborator, id), HttpStatus.OK);
    }
}
