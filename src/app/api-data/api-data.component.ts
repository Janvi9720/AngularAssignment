import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [HttpClientModule, CommonModule],  // Add CommonModule here
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {
  comments: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts/1/comments')
      .subscribe(
        data => {
          console.log('Fetched comments:', data);
          this.comments = data;
        },
        error => {
          console.error('Error fetching data', error);
        }
      );
  }
}
