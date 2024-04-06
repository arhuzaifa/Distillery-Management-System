//package vumc.org.springreact;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//import vumc.org.springreact.model.Bourbon;
//import vumc.org.springreact.model.BourbonDistillery;
//import vumc.org.springreact.model.Customer;
//import vumc.org.springreact.repository.BourbonDistilleryRepository;
//import vumc.org.springreact.repository.BourbonRepository;
//import vumc.org.springreact.repository.CustomerRepository;
//
//import java.util.stream.Stream;
//
//@Component
//public class Initializer implements CommandLineRunner {
//    private final BourbonDistilleryRepository bourbonDistilleryRepository;
//    private final BourbonRepository bourbonRepository;
//    private final CustomerRepository customerRepository;
//
//
//    public Initializer(BourbonDistilleryRepository bourbonDistilleryRepository, BourbonRepository bourbonRepository, CustomerRepository customerRepository) {
//        this.bourbonDistilleryRepository = bourbonDistilleryRepository;
//        this.bourbonRepository = bourbonRepository;
//        this.customerRepository = customerRepository;
//    }
//
//    @Override
//    public void run(String... args) {
//        Stream.of("Buffalo Trace", "Woodford Reserve", "Castle & Key", "four Roses")
//                .forEach(name -> bourbonDistilleryRepository.save(new BourbonDistillery(name)));
//        Stream.of("Murree Brewery", "Black Label", "White Label")
//                .forEach(name -> bourbonRepository.save(new Bourbon(name)));
//        Stream.of("Matt", "Ceiser", "Joseph")
//                .forEach(name -> customerRepository.save(new Customer(name)));
//
//
//        bourbonDistilleryRepository.findAll().forEach(System.out::println);
//    }
//}
