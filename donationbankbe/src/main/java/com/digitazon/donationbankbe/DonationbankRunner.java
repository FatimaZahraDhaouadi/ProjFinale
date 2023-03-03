package com.digitazon.donationbankbe;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.boot.CommandLineRunner;

import com.digitazon.donationbankbe.model.Collaborator;
import com.digitazon.donationbankbe.model.Reservation;
import com.digitazon.donationbankbe.model.User;
import com.digitazon.donationbankbe.service.CollaboratorService;
import com.digitazon.donationbankbe.service.ReservationService;
import com.digitazon.donationbankbe.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class DonationbankRunner implements CommandLineRunner{
    
    @Autowired
    UserService userService;

    @Autowired
    CollaboratorService collaboratorService;

    @Autowired
    ReservationService reservationService;

    @Override
    public void run(String... args) throws Exception{

        log.info("run go");


        User u1 = new User("Andrea", "Basso", "Basso@myemail.com", "+39 3285250031", "Diabetic");
        User u2 = new User("Federico", "Bernardi", "Federico@myemail.com", "+39 3285560061", null);
        User u3 = new User("Angelica", "Rossi", "Angelica@myemail.com", "+39 3345650029", null);
        User u4 = new User("Alice", "Cabrele", "Alice@myemail.com", "+39 3345750134", null);
        User u5 = new User("Francesca", "Baggio", "Francesca@myemail.com", "+39 367456909", "Pregnant");
        User u6 = new User("Edoardo", "Veronese", "Edoardo@myemail.com", "+39 3242650029", null);
        User u7 = new User("Nicholas", "Tizzani", "Nicholas@myemail.com", "+39 3235711029", null);
        User u8 = new User("Marianna", "Laudisi", "Marianna@myemail.com", "+39 331545059", "Diabetic");
        User u9 = new User("Patrick", "Annese", "Patrick@myemail.com", "+39 3346750020", null);
        User u10 = new User("Giorgio", "Leo", "Giorgio@myemail.com", "+39 3285730029", null);

        userService.saveUser(u1);
        userService.saveUser(u2);
        userService.saveUser(u3);
        userService.saveUser(u4);
        userService.saveUser(u5);
        userService.saveUser(u6);
        userService.saveUser(u7);
        userService.saveUser(u8);
        userService.saveUser(u9);
        userService.saveUser(u10);

        Collaborator cl1 = new Collaborator("Anna", "Frigo", "MR2LI03");
        Collaborator cl2 = new Collaborator("Alex", "Vettorel", "F1D36TRS");
        Collaborator cl3 = new Collaborator("Viola", "Migliozzi", "MR2LI03");
        Collaborator cl4 = new Collaborator("Tommaso", "Vanin", "F1D36TRS");

        collaboratorService.saveCollaborator(cl1);
        collaboratorService.saveCollaborator(cl2);
        collaboratorService.saveCollaborator(cl3);
        collaboratorService.saveCollaborator(cl4);
      

        Reservation rs1 = new Reservation(LocalDateTime.of(2023,2,23, 9,00,00), "Ritoplasmapheresis",u1, cl1);   
        Reservation rs2 = new Reservation(LocalDateTime.of(2023, 2, 23, 10, 20, 00), "whole blood",u2, cl1);
        Reservation rs3 = new Reservation(LocalDateTime.of(2023, 3, 5, 9, 00, 00),"plasma",u3, cl1);
        Reservation rs4 = new Reservation(LocalDateTime.of(2023, 3, 6, 9, 00, 00), "platelets",u4, cl2);
        Reservation rs5 = new Reservation(LocalDateTime.of(2023, 3, 6, 10, 20, 00), "Ritoplasmapheresis", u5, cl2);
        Reservation rs6 = new Reservation(LocalDateTime.of(2023, 3, 7, 9, 00, 00), "plasma",u6, cl2);
        Reservation rs7 = new Reservation(LocalDateTime.of(2023, 3, 7, 10, 20, 00), "platelets",u7, cl3);
        Reservation rs8 = new Reservation(LocalDateTime.of(2023, 4, 7, 10, 40, 00), "plasma",u8, cl3);
        Reservation rs9 = new Reservation(LocalDateTime.of(2023, 4, 8, 9, 00, 00), "Ritoplasmapheresis",u9, cl4);
        Reservation rs10 = new Reservation(LocalDateTime.of(2023, 4, 8, 9, 00, 00), "whole blood",u10, cl4);

        reservationService.saveReservation(rs1);
        reservationService.saveReservation(rs2);
        reservationService.saveReservation(rs3);
        reservationService.saveReservation(rs4);
        reservationService.saveReservation(rs5);
        reservationService.saveReservation(rs6);
        reservationService.saveReservation(rs7);
        reservationService.saveReservation(rs8);
        reservationService.saveReservation(rs9);
        reservationService.saveReservation(rs10);
   


        log.info("run end");
    }
}
