public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    // Nom de la tâche
    private String name;
    // Description de la tâche
    private String description;
    // type Staatus qui regroupe les différents statuts possibles
    public enum Status {
        TODO, IN_PROGRESS, DONE 
        }
    // Statut de la tâche
    private Status TaskStatus;
    // note de la tâche
    private int Mark;

    // utilisateur associé à la tâche
    @ManytoOne
    private User user;
    
    // projet associé à la tâche
    @ManytoOne
    private Project project;


