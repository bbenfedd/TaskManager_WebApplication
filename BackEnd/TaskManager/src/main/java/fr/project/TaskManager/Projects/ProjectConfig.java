package fr.project.TaskManager.Projects;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ProjectConfig {

    @Bean
    CommandLineRunner commandLineRunner(ProjectRepository repository){

        return args -> {
            Project restaurant =
                    new Project("Restaurant Manager","Restaurant Manager Description");

            Project hotel =
                        new Project("Hotel Manager","Hotel Manager Description");

            repository.saveAll(List.of(restaurant,hotel));
        };


    }
}
