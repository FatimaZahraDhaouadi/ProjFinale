package com.digitazon.donationbankbe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitazon.donationbankbe.model.Reservation;
import com.digitazon.donationbankbe.repository.ReservationRepository;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    
    public Reservation saveReservation(Reservation reservation){
        return reservationRepository.save(reservation);
    }

    public List<Reservation> getAllReservation(){
        return reservationRepository.findAll();
    }

    public Reservation findReservationById(Long id){
        Optional<Reservation> tempReservation = reservationRepository.findById(id);

        if(tempReservation.isPresent()){
            return tempReservation.get();
        } else {
            return null;
        }
    }

    public void deleteReservationById(Long id){
        reservationRepository.deleteById(id);
    }

    public Reservation updateReservation(Reservation newReservation){

        Reservation oldReservation = findReservationById(newReservation.getId());

        if(oldReservation != null){
            oldReservation.setDateTime(newReservation.getDateTime());
            oldReservation.setDonationType(newReservation.getDonationType());
            oldReservation.setUser(newReservation.getUser());
            oldReservation.setCollaborator(newReservation.getCollaborator());

            return reservationRepository.save(oldReservation);
        }
        return null;
    }

    public Reservation updateReservationById(Reservation newReservation, Long id){

        Optional<Reservation> tempReservation = reservationRepository.findById(newReservation.getId());

        if (tempReservation.isPresent()){

            Reservation oldReservation = tempReservation.get();
            oldReservation.setDonationType(newReservation.getDonationType());
            oldReservation.setUser(newReservation.getUser());
            oldReservation.setCollaborator(newReservation.getCollaborator());
            oldReservation.setDateTime(newReservation.getDateTime());
            return reservationRepository.save(oldReservation);
        }
        return null;
    }
}

