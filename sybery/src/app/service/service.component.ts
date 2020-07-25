import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'service-component',
    templateUrl: './service.component.html',
    styleUrls: [`./service.component.css`]
})

export class ServiceComponent implements OnInit {
    public title :string;
    ngOnInit(){
        this.title = 'Service';
    }
}