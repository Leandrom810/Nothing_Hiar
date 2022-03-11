package com.flight.webservice.resources;

import com.flight.webservice.entities.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//REST CONTROLLER
@RestController
@RequestMapping(value = "/users")
public class UserResource {

    @GetMapping
    public ResponseEntity<User> findAll() {
        User u = new User(1L, "Mario", "Luigi@gmail.com", "9999999", "pass");
        return ResponseEntity.ok().body(u);

    }
}
