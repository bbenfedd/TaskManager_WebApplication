package fr.project.TaskManager.Projects;

//import javax.persistence.*;


import javax.persistence.*;

@Entity
@Table
public class Project {
    @Id
    @SequenceGenerator(
            name = "project_sequence",
            sequenceName =  "project_sequence",
            allocationSize =  1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
                    generator = "project_sequence"
    )
    private Long id;
    // Nom du projet
    private String name;
    // Description du projet
    private String description;
    // liste des utilisateurs dans ce projet
    //@ManyToMany(mappedBy = "users")
  //  private String List<String> members;
    // liste des tâches dans ce projet
    //@OneToMany(mappedBy = "task")
    // private String List<Task> tasks;


    public Project() {
    }

    public Project(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Project(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
