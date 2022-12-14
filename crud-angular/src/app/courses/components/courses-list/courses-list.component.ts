import { Course } from '../../model/course';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = []
  @Output() add = new EventEmitter(false)

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor( ) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true)
  }
}
