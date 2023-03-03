package com.digitazon.donationbankbe.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.AccessLevel;

@Entity
@Data
@NoArgsConstructor
public class Collaborator {
      
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.NONE)
    private Long id;
    
    @Column
    private String name;

    @Column
    private String surname;

    @Column
    private String badge;

    public Collaborator(String name, String surname, String badge) {
        this.name = name;
        this.surname = surname;
        this.badge = badge;
    }
}
