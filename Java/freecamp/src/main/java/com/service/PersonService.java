import com.model.Person;
import com.dao.PersonDao;

public class PersonService {

    private final PersonDao personDao;

    public PersonSerivce(PersonDao personDao) {
        this.personDao = personDao;
    }

    public int addPerson(Person person) {
        return personDao.insertPerson(person);
    }
    
}
