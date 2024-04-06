package vumc.org.springreact.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import vumc.org.springreact.util.BourbonType;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bourbon")
public class Bourbon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Name is required")
    private String name;

    @NotNull(message = "Type is required")
    @Enumerated(EnumType.STRING)
    private BourbonType type;

    @Positive(message = "ABV must be a positive number")
    private double abv;


    public Bourbon(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public BourbonType getType() {
        return type;
    }

    public double getAbv() {
        return abv;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(BourbonType type) {
        this.type = type;
    }

    public void setAbv(double abv) {
        this.abv = abv;
    }
}
