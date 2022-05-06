@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    // Nom du projet
    private String name;
    // Description du projet
    private String description;
    // liste des utilisateurs dans ce projet
    @ManytoMany(mappedBy = "users")
    private String List<String> members;
    // liste des tâches dans ce projet
    @OneToMany(mappedBy = "task")
    private String List<Task> tasks;
}