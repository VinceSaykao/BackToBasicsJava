

import com.model.Person;
import java.util.UUID;

// define operations allowed for actual contract for anyone to implement this interface
// we can use dependancy injection to switch between implmentations with one line of code
public interface PersonDao {

    int insertPerson(UUID id, Person person);

    // generate UUID ourselves
    default int addPerson(Person person) {
        UUID id = UUID.randomUUID();
        return insertPerson(id, person);

    }
}
