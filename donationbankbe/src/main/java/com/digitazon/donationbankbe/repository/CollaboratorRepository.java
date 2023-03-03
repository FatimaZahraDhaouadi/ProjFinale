package com.digitazon.donationbankbe.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.digitazon.donationbankbe.model.Collaborator;

public interface CollaboratorRepository extends JpaRepository<Collaborator, Long>{
    
}

