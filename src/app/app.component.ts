import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksService } from './services/tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public listTasks: string[] = [];
  public newTask: string = '';
  public _tasksService = inject(TasksService);

  ngOnInit(): void {
    this.getListTasks();
  }

  public deleteTask(index: number): void {
    this._tasksService.deleteTask(index);
    this.getListTasks();
  }

  public addTask(): void {
    if (this.newTask == '') {
      return;
    } else {
      this._tasksService.addTask(this.newTask);
      this.getListTasks();
      this.newTask = '';
    }
  }

  private getListTasks(): void {
    this.listTasks = this._tasksService.getTasks();
  }
}
