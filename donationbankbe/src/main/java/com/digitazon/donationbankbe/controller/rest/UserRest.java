package com.digitazon.donationbankbe.controller.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.digitazon.donationbankbe.model.User;
import com.digitazon.donationbankbe.repository.UserRepository;
import com.digitazon.donationbankbe.service.UserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserRest {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;
   
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User payload) {
        User user = userService.findUserByEmail(payload.getEmail());
        if (user == null) {
            // L'utente non esiste nel database
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Email non valida");
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        } else {
            // L'utente esiste nel database
            Map<String, String> successResponse = new HashMap<>();
            successResponse.put("message", "Accesso riuscito");
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
    }
    

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUser() {

        return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {

        return new ResponseEntity<>(userService.findUserById(id), HttpStatus.OK);
    }

   
    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User newUser) {

        return new ResponseEntity<User>(userService.saveUser(newUser), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable String id) {

        Long idLong = Long.parseLong(id);

        userService.deleteUserById(idLong);

        return new ResponseEntity<>("delete successful", HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User newUser) {

        return new ResponseEntity<>(userService.updateUser(newUser), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUserById(@PathVariable Long id, @RequestBody User newUser) {

        return new ResponseEntity<User>(userService.updateUserById(newUser, id), HttpStatus.OK);
    }
}
