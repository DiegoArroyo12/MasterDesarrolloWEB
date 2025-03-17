import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
      $("#logo").click(function(e) {
        e.preventDefault();
        $("header").css("background","green")
                   .css("height","5rem");
      });
  }
}
