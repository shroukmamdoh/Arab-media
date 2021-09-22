import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-interaction',
  templateUrl: './social-interaction.component.html',
  styleUrls: ['./social-interaction.component.scss']
})
export class SocialInteractionComponent implements OnInit {
@Input()shareNumber:any
@Input()commentsNum:any
  constructor() { }

  ngOnInit(): void {
  }

}
