import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  @Input() name: string

  @Input('size') fontSize: number  
  @Output() sizeChange = new EventEmitter<number>()

  @Input() isSpecial: boolean
  @Output() isSpecialChange = new EventEmitter<boolean>()

  bigger() {
    this.sizeChange.emit(this.fontSize++)
  }

  smaller() {
    this.sizeChange.emit(this.fontSize--)
  }

  special() {
    this.isSpecialChange.emit(!this.isSpecial)
  }

  constructor() { }

  ngOnInit() {
  }

}
