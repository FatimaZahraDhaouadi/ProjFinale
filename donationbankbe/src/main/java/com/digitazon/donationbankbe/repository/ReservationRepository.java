package com.digitazon.donationbankbe.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.digitazon.donationbankbe.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
