var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var HTML_TEMPLATE = "\n<div class=\"message\">\n  <div *ngIf=\"message\" class=\"{{\n  type === 'success' ? 'alert alert-success' : \n  type === 'danger' ? 'alert alert-danger' : \n  type === 'warning' ? 'alert alert-warning' : \n  type === 'info' ? 'alert alert-info' : ''}}\">\n    {{message}}\n  </div>\n</div>\n";
var CSS_STYLE = "\n.message {\n    .alert {\n      position: inline-block;\n      margin: auto;\n      padding: 4px;\n      margin-bottom: 10px !important;\n      border: 1px solid transparent;\n      border-radius: .25rem;\n      max-width: 300px !important;\n      width: 100vw !important;\n      font-size: 14px;\n    }\n  \n    .alert-danger {\n      color: #721c24;\n      background-color: #f8d7da;\n      border-color: #f5c6cb;\n    }\n  \n    .alert-success {\n      color: #155724;\n      background-color: #d4edda;\n      border-color: #c3e6cb;\n    }\n  \n    .alert-warning {\n      color: #856404;\n      background-color: #fff3cd;\n      border-color: #ffeeba;\n    }\n  \n    .alert-info {\n      color: #0c5460;\n      background-color: #d1ecf1;\n      border-color: #bee5eb;\n    }\n  }\n  \n";
var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.type = '';
        this.message = '';
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = __decorate([
        Component({
            selector: 'message',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());
export { MessageComponent };
//# sourceMappingURL=message.component.js.map