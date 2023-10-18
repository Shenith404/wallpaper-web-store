package com.shenith.sampleserver.DAO;

import com.shenith.sampleserver.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDAO extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String username);
}
