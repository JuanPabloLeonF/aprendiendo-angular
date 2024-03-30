import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private localStrorage = "lista tareas";

  public getTasks() {
    return JSON.parse(localStorage.getItem(this.localStrorage) as string) || [];
  }

  public addTask(task: string) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.localStrorage, JSON.stringify(tasks));
  }

  public deleteTask(index: number) {
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    localStorage.setItem(this.localStrorage, JSON.stringify(tasks));
  }
}
