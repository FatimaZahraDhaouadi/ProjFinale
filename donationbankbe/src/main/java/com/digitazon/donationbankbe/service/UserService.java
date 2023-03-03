package com.digitazon.donationbankbe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitazon.donationbankbe.model.User;
import com.digitazon.donationbankbe.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    public User saveUser(User user){
        return userRepository.save(user);
    }

    public List<User> getAllUser(){
        return userRepository.findAll();
    }


    public User findUserById(Long id){
        Optional<User> tempUser = userRepository.findById(id);

        if(tempUser.isPresent()){
            return tempUser.get();
        } else {
            return null;
        }
    }

    public void deleteUserById(Long id){
        userRepository.deleteById(id);
    }

    public User updateUser(User newUser){

        User oldUser = findUserById(newUser.getId());

        if(oldUser != null){
            oldUser.setName(newUser.getName());
            oldUser.setSurname(newUser.getSurname());
            oldUser.setEmail(newUser.getEmail());
            oldUser.setPhoneNumber(newUser.getPhoneNumber());
            oldUser.setMessage(newUser.getMessage());
            return userRepository.save(oldUser);
        }
        return null;
    }

    public User updateUserById(User newUser, Long id){

        Optional<User> tempUser = userRepository.findById(newUser.getId());

        if (tempUser.isPresent()){

            User oldUser = tempUser.get();
            oldUser.setName(newUser.getName());
            oldUser.setSurname(newUser.getSurname());
            oldUser.setEmail(newUser.getEmail());
            oldUser.setPhoneNumber(newUser.getPhoneNumber());
            oldUser.setMessage(newUser.getMessage());

             return userRepository.save(oldUser);
        }
        return null;
    }
}



