package vumc.org.springreact.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vumc.org.springreact.model.BourbonDistillery;
import vumc.org.springreact.model.Customer;
import vumc.org.springreact.repository.BourbonDistilleryRepository;

import java.util.Collection;
import java.util.Optional;

@Service
public class BourbonDistilleryService {

    private final BourbonDistilleryRepository bourbonDistilleryRepository;

    @Autowired
    public BourbonDistilleryService(BourbonDistilleryRepository bourbonDistilleryRepository) {
        this.bourbonDistilleryRepository = bourbonDistilleryRepository;
    }

    public Collection<BourbonDistillery> getAllDistilleries() {
        return bourbonDistilleryRepository.findAll();
    }

    public BourbonDistillery getDistilleryById(Long id) {
        return bourbonDistilleryRepository.findById(id).orElse(null);
    }

    public BourbonDistillery createDistillery(BourbonDistillery distillery) {
        return bourbonDistilleryRepository.save(distillery);
    }

    public BourbonDistillery updateDistillery(Long id, BourbonDistillery distilleryDetails) {
        Optional<BourbonDistillery> optionalBourbonDistillery = bourbonDistilleryRepository.findById(id);
        if (optionalBourbonDistillery.isPresent()) {
            BourbonDistillery distillery = optionalBourbonDistillery.get();
            distillery.setName(distilleryDetails.getName());
            distillery.setLicenseNumber(distilleryDetails.getLicenseNumber());
            distillery.setAddress(distilleryDetails.getAddress());
            distillery.setBourbons(distilleryDetails.getBourbons());
            distillery.setCustomers(distilleryDetails.getCustomers());
            return bourbonDistilleryRepository.save(distillery);
        } else {
            return null;
        }
    }

    public boolean deleteDistillery(Long id) {
        Optional<BourbonDistillery> optionalBourbonDistillery = bourbonDistilleryRepository.findById(id);
        if (optionalBourbonDistillery.isPresent()) {
            bourbonDistilleryRepository.deleteById(id);
            return true;
        } else {
            return false;
        }

    }
}