import { Component, OnDestroy, OnInit } from '@angular/core';
// For MDB Angular Free

@Component ({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: [`./home.component.css`]
})

export class HomeComponent implements OnInit {
    public title: string;

    constructor() {
    }

    ngOnInit() {
       this.title = 'Sybery';
    }


}