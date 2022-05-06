public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    // Nom de l'utilisateur
    private String name;
    // email de l'utilisateur
    private String email;
    // mot de passe de l'utilisateur
    private String password;
    // Role de l'utilisateur soit Student ou Teacher
    public enum Role {
        Student, Teacher
        }
    // Role de l'utilisateur dans le projet
    private Role role;

    // liste des projets dans lesquels l'utilisateur est inscrit
    @ManytoMany
    private List<Project> projects;

    // liste des tâches dans lesquels l'utilisateur est inscrit
    @OneToMany
    private List<Task> tasks;



}   