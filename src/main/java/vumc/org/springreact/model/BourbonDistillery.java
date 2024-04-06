package vumc.org.springreact.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bourbon_distillery")
public class BourbonDistillery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(max = 255, message = "Name cannot exceed 255 characters")
    private String name;

    @NotBlank(message = "License number is required")
    @Size(max = 50, message = "License number cannot exceed 50 characters")
    private String licenseNumber;

    @NotBlank(message = "Address is required")
    @Size(max = 255, message = "Address cannot exceed 255 characters")
    private String address;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "distillery_id", referencedColumnName = "id")
    private List<Bourbon> bourbons;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "distillery_id", referencedColumnName = "id")
    private List<Customer> customers;

    public BourbonDistillery(String name) {
        this.name = name;
    }

    public BourbonDistillery(List<Bourbon> bourbons) {
        this.bourbons = bourbons;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Bourbon> getBourbons() {
        return bourbons;
    }

    public void setBourbons(List<Bourbon> bourbons) {
        this.bourbons = bourbons;
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }
}


