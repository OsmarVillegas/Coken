import { Component, OnInit } from '@angular/core';
import * as paypal from 'paypal-checkout';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    paypal.Button.render({
      env: 'sandbox',
      client: {
        sandbox: 'ATha99mi4g4MrxnZYe-9hdp0cy6QhrWOav6fC5RY2qXRe6zG6tUSr4kY5b61iBjJ7wx8KAe-xcg_510q',
        locale: 'es_MX'
      },
      commit: true,
      payment: (data: any, actions: any) => {
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: {
                  total: '100.00',
                  currency: 'MXN'
                }
              }
            ]
          }
        });
      },
      onAuthorize: (data: any, actions: any) => {
        return actions.payment.execute().then(() => {
          // Realizar acciones adicionales aquí
        });
      }
    }, '#paypal-button-1');

    paypal.Button.render({
      env: 'sandbox',
      client: {
        sandbox: 'ATha99mi4g4MrxnZYe-9hdp0cy6QhrWOav6fC5RY2qXRe6zG6tUSr4kY5b61iBjJ7wx8KAe-xcg_510q',
        locale: 'es_MX'
      },
      commit: true,
      payment: (data: any, actions: any) => {
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: {
                  total: '200.00',
                  currency: 'MXN'
                }
              }
            ]
          }
        });
      },
      onAuthorize: (data: any, actions: any) => {
        return actions.payment.execute().then(() => {
          // Realizar acciones adicionales aquí
        });
      }
    }, '#paypal-button-2');

    paypal.Button.render({
      env: 'sandbox',
      client: {
        sandbox: 'ATha99mi4g4MrxnZYe-9hdp0cy6QhrWOav6fC5RY2qXRe6zG6tUSr4kY5b61iBjJ7wx8KAe-xcg_510q',
        locale: 'es_MX'
      },
      commit: true,
      payment: (data: any, actions: any) => {
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: {
                  total: '300.00',
                  currency: 'MXN'
                }
              }
            ]
          }
        });
      },
      onAuthorize: (data: any, actions: any) => {
        return actions.payment.execute().then(() => {
          // Realizar acciones adicionales aquí
        });
      }
    }, '#paypal-button-3');

  }

  shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=www.google.com&quote=' + encodeURIComponent('¡Unete a esta página!'), 'facebook-share-dialog', 'width=626,height=436');
  return false;
  }

}
