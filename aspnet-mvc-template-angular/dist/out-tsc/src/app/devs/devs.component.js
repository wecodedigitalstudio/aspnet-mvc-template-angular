var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'datatables.net';
var DevsComponent = /** @class */ (function () {
    function DevsComponent(http, chRef) {
        this.http = http;
        this.chRef = chRef;
    }
    DevsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
            .subscribe(function (data) {
            _this.clients = data;
            // You'll have to wait that changeDetection occurs and projects data into 
            // the HTML template, you can ask Angular to that for you ;-)
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable();
        });
    };
    DevsComponent = __decorate([
        Component({
            selector: 'app-devs',
            templateUrl: './devs.component.html',
            styleUrls: ['./devs.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient, ChangeDetectorRef])
    ], DevsComponent);
    return DevsComponent;
}());
export { DevsComponent };
//# sourceMappingURL=devs.component.js.map