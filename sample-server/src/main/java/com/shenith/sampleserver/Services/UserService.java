package com.shenith.sampleserver.Services;

import com.shenith.sampleserver.DAO.UserDAO;
import com.shenith.sampleserver.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserDAO userDAO;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder ;



// ...

    public ResponseEntity<User>   userAuth(User user) {
        Optional<User> user1 = userDAO.findByEmail(user.getEmail());

        if (user1.isPresent()) {

            User existingUser = user1.get();
            String hashedPassword = existingUser.getPassword();


           if (bCryptPasswordEncoder.matches(user.getPassword(), hashedPassword)) {

                return new ResponseEntity<>(existingUser,HttpStatus.ACCEPTED);
            }
        }


        return new ResponseEntity<>(null,HttpStatus.LOCKED);
    }

    public ResponseEntity<List<User>> getAllUsers() {
        try {
            return new ResponseEntity<>( userDAO.findAll(), HttpStatus.OK);

        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>( new ArrayList<>(), HttpStatus.BAD_REQUEST);

    }

    public ResponseEntity<User> getOneUser(int id) {
        try {
            return new ResponseEntity<>( userDAO.findById(id).orElse(null),HttpStatus.OK);

        }catch (Exception e){e.printStackTrace();   }
        return new ResponseEntity<>( new User(),HttpStatus.BAD_REQUEST);


    }

    public ResponseEntity<User> addUser(User user) {

        try {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            return new ResponseEntity<>(  userDAO.save(user),HttpStatus.CREATED);

        }catch (Exception e){e.printStackTrace();   }
        return new ResponseEntity<>( new User(),HttpStatus.BAD_REQUEST);


    }

    public String deleteUser(int id) {
        userDAO.deleteById(id);
        return id +" deleted";
    }

    public User updateUser (User user){
        User exchangeUser =userDAO.findById(user.getId()).orElse(null);
        exchangeUser.setUsername(user.getUsername());
        exchangeUser.setEmail(user.getEmail());
        exchangeUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userDAO.save(exchangeUser);
        return exchangeUser;
    }
}
