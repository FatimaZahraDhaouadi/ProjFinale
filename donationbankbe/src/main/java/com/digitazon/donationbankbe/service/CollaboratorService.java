package com.digitazon.donationbankbe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitazon.donationbankbe.model.Collaborator;
import com.digitazon.donationbankbe.repository.CollaboratorRepository;

@Service
public class CollaboratorService {
        
    @Autowired
    private CollaboratorRepository collaboratorRepository;

    public Collaborator saveCollaborator(Collaborator collaborator){
        return collaboratorRepository.save(collaborator);
    }

    public List<Collaborator> getAllCollaborator(){
        return collaboratorRepository.findAll();
    }

    public Collaborator findCollaboratorById(Long id){
        Optional<Collaborator> tempCollaborator = collaboratorRepository.findById(id);

        if(tempCollaborator.isPresent()){
            return tempCollaborator.get();
        } else {
            return null;
        }
    }
    
    public void deleteCollaboratorById(Long id){
        collaboratorRepository.deleteById(id);
    }

    public Collaborator updateCollaborator(Collaborator newCollaborator){

        Collaborator oldCollaborator = findCollaboratorById(newCollaborator.getId());

        if(oldCollaborator != null){
            oldCollaborator.setName(newCollaborator.getName());
            oldCollaborator.setSurname(newCollaborator.getSurname());
            oldCollaborator.setBadge(newCollaborator.getBadge());

            return collaboratorRepository.save(oldCollaborator);
        }
        return null;
    }

    public Collaborator updateCollaboratorById(Collaborator newCollaborator, Long id){

        Optional<Collaborator> tempCollaborator = collaboratorRepository.findById(newCollaborator.getId());

        if (tempCollaborator.isPresent()){

            Collaborator oldCollaborator = tempCollaborator.get();
            oldCollaborator.setName(newCollaborator.getName());
            oldCollaborator.setSurname(newCollaborator.getSurname());
            oldCollaborator.setBadge(newCollaborator.getBadge());

             return collaboratorRepository.save(oldCollaborator);
        }
        return null;
    }
}
