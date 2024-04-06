package vumc.org.springreact.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vumc.org.springreact.model.BourbonDistillery;
import vumc.org.springreact.service.BourbonDistilleryService;

import java.util.Collection;

@RestController
@RequestMapping("/api/distilleries")
public class BourbonDistilleryController {

    private final BourbonDistilleryService bourbonDistilleryService;

    @Autowired
    public BourbonDistilleryController(BourbonDistilleryService bourbonDistilleryService) {
        this.bourbonDistilleryService = bourbonDistilleryService;
    }

    @GetMapping
    public ResponseEntity<Collection<BourbonDistillery>> getAllDistilleries() {
        Collection<BourbonDistillery> distilleries = bourbonDistilleryService.getAllDistilleries();
        return ResponseEntity.ok(distilleries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BourbonDistillery> getDistilleryById(@PathVariable Long id) {
        BourbonDistillery distillery = bourbonDistilleryService.getDistilleryById(id);
        if (distillery != null) {
            return ResponseEntity.ok(distillery);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<BourbonDistillery> createDistillery(@RequestBody BourbonDistillery distillery) {
        BourbonDistillery createdDistillery = bourbonDistilleryService.createDistillery(distillery);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDistillery);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BourbonDistillery> updateDistillery(@PathVariable Long id, @RequestBody BourbonDistillery distilleryDetails) {
        BourbonDistillery updatedDistillery = bourbonDistilleryService.updateDistillery(id, distilleryDetails);
        if (updatedDistillery != null) {
            return ResponseEntity.ok(updatedDistillery);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDistillery(@PathVariable Long id) {
        boolean deleted = bourbonDistilleryService.deleteDistillery(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
