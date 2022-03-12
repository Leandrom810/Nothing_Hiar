package application;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Program {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        /*Person p1 = new Person(null, "Leandro", "funkypudimcat@gmail.com");
        Person p2 = new Person(null, "Leandrotm17bolsonaro", "funkypudimpatriotacat@gmail.com");
        Person p3 = new Person(null, "Leandropopularsocial", "funkypudimsocialistacat@gmail.com");
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);*/
        EntityManagerFactory EMF = Persistence.createEntityManagerFactory("example-jpa");
        EntityManager EM = EMF.createEntityManager();
        /*EM.getTransaction().begin();
        EM.persist(p1);
        EM.persist(p2);
        EM.persist(p3);
        EM.getTransaction().commit();*/
        /*EM.getTransaction().begin();
        EM.remove(EM.find(Person.class, 3));
        EM.getTransaction().commit();*/
        System.out.println("Done!");
        EM.close();
        EMF.close();
        
    }
}
