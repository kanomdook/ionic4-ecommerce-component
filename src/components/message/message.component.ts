import { Component, OnInit, Input } from '@angular/core';
const HTML_TEMPLATE = `
<div class="message">
  <div *ngIf="message" class="{{
  type === 'success' ? 'alert alert-success' : 
  type === 'danger' ? 'alert alert-danger' : 
  type === 'warning' ? 'alert alert-warning' : 
  type === 'info' ? 'alert alert-info' : ''}}">
    {{message}}
  </div>
</div>
`;

const CSS_STYLE = `
.message {
    .alert {
      position: inline-block;
      margin: auto;
      padding: 4px;
      margin-bottom: 10px !important;
      border: 1px solid transparent;
      border-radius: .25rem;
      max-width: 300px !important;
      width: 100vw !important;
      font-size: 14px;
    }
  
    .alert-danger {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }
  
    .alert-success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }
  
    .alert-warning {
      color: #856404;
      background-color: #fff3cd;
      border-color: #ffeeba;
    }
  
    .alert-info {
      color: #0c5460;
      background-color: #d1ecf1;
      border-color: #bee5eb;
    }
  }
  
`;
@Component({
    selector: 'message',
    template: HTML_TEMPLATE,
    styles: [CSS_STYLE]
})
export class MessageComponent implements OnInit {
    @Input() type: string = '';
    @Input() message: string = '';

    constructor() {

    }

    ngOnInit() {
    }
}