package vumc.org.springreact.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vumc.org.springreact.model.Bourbon;
import vumc.org.springreact.service.BourbonService;

import java.util.List;

@RestController
@RequestMapping("/api/bourbons")
public class BourbonController {

    private final BourbonService bourbonService;

    @Autowired
    public BourbonController(BourbonService bourbonService) {
        this.bourbonService = bourbonService;
    }

    @GetMapping
    public ResponseEntity<List<Bourbon>> getAllBourbons() {
        List<Bourbon> bourbons = bourbonService.getAllBourbons();
        return ResponseEntity.ok(bourbons);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bourbon> getBourbonById(@PathVariable Long id) {
        Bourbon bourbon = bourbonService.getBourbonById(id);
        if (bourbon != null) {
            return ResponseEntity.ok(bourbon);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Bourbon> createBourbon(@RequestBody Bourbon bourbon) {
        Bourbon createdBourbon = bourbonService.createBourbon(bourbon);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBourbon);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bourbon> updateBourbon(@PathVariable Long id, @RequestBody Bourbon bourbonDetails) {
        Bourbon updatedBourbon = bourbonService.updateBourbon(id, bourbonDetails);
        if (updatedBourbon != null) {
            return ResponseEntity.ok(updatedBourbon);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBourbon(@PathVariable Long id) {
        boolean deleted = bourbonService.deleteBourbon(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}