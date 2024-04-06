package vumc.org.springreact.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vumc.org.springreact.model.BourbonDistillery;

@Repository
public interface BourbonDistilleryRepository extends JpaRepository<BourbonDistillery, Long> {
}
