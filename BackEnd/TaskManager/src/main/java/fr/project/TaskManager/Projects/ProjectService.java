package fr.project.TaskManager.Projects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service

public class ProjectService {

    public final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getProjects() {
       return projectRepository.findAll();

    }

    public void addNewProject(Project project) {
    
        List<Project> projects = projectRepository.findAll();

        for(Project projet : projects){
            if(projet.getName().equals(project.getName())){
                throw new IllegalStateException("Project name already exsit !");
                
            }
        }


        projectRepository.save(project);

    }
}
