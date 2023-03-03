package com.digitazon.donationbankbe.model;


import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Setter;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.NONE)
    private Long id;

    @Column
    private LocalDateTime dateTime;

    @Column
    private String donationType;

    @ManyToOne //DA RIVEDERE 
    private User user;

    @ManyToOne
    private Collaborator collaborator;

    public Reservation(LocalDateTime dateTime, String donationType,  User user,
            Collaborator collaborator) {
        this.dateTime = dateTime;
        this.donationType = donationType;
  
        this.user = user;
        this.collaborator = collaborator;
    }

 
}
