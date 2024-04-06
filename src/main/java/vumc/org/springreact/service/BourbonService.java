package vumc.org.springreact.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vumc.org.springreact.model.Bourbon;
import vumc.org.springreact.repository.BourbonRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BourbonService {

    private final BourbonRepository bourbonRepository;

    @Autowired
    public BourbonService(BourbonRepository bourbonRepository) {
        this.bourbonRepository = bourbonRepository;
    }

    public List<Bourbon> getAllBourbons() {
        return bourbonRepository.findAll();
    }

    public Bourbon getBourbonById(Long id) {
        Optional<Bourbon> optionalBourbon = bourbonRepository.findById(id);
        return optionalBourbon.orElse(null);
    }

    public Bourbon createBourbon(Bourbon bourbon) {
        return bourbonRepository.save(bourbon);
    }

    public Bourbon updateBourbon(Long id, Bourbon bourbonDetails) {
        Optional<Bourbon> optionalBourbon = bourbonRepository.findById(id);
        if (optionalBourbon.isPresent()) {
            Bourbon bourbon = optionalBourbon.get();
            bourbon.setName(bourbonDetails.getName());
            bourbon.setType(bourbonDetails.getType());
            bourbon.setAbv(bourbonDetails.getAbv());
            return bourbonRepository.save(bourbon);
        } else {
            return null;
        }
    }

    public boolean deleteBourbon(Long id) {
        Optional<Bourbon> optionalBourbon = bourbonRepository.findById(id);
        if (optionalBourbon.isPresent()) {
            bourbonRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}

