package com.shenith.sampleserver.Controllers;

import com.shenith.sampleserver.Models.User;
import com.shenith.sampleserver.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Accounts")
@CrossOrigin
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> userAuth(@RequestBody User user){
        return userService.userAuth(user);
    }
    @GetMapping("/users")
    public ResponseEntity<List<User> >getUsers(){
        return userService.getAllUsers();
    }
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getOneUser(@PathVariable int id){
        return userService.getOneUser(id);
    }
    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable int id){
         userService.deleteUser(id);
         return id + " deleted";
    }

    @PutMapping("/users")
    public  User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }






}
