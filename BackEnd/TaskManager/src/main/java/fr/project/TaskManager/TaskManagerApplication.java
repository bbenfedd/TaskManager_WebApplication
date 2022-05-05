package fr.project.TaskManager;

import fr.project.TaskManager.Projects.Project;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
public class TaskManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskManagerApplication.class, args);
	}

	@GetMapping
	public List<Project> sayHello(){
		return List.of(new Project(1,"Task Manager","Task Manager Description "),
				new Project(2,"Hotel Manager","Hotel Manager Description ")
				);
	}
}
