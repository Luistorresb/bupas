import { Component } from '@angular/core';

@Component({
  selector: 'wlrd-request-logs',
  templateUrl: './request-logs.component.html',
  styleUrls: ['./request-logs.component.scss'],
})
export class RequestLogsComponent {
  notifications = [
    {
      Id: 1,
      Asunto: 'Notificación de prueba',
      FechaRegistro: '2024-08-01',
      Cantidad: 100,
      DetalleCentroNotificacionId: 'ABC123',
      Observacion: 'Observación de prueba',
      Condicion: '200' // Example value
    },

    {
      Id: 2,
      Asunto: 'Notificación de prueba2',
      FechaRegistro: '2024-08-01',
      Cantidad: 50,
      DetalleCentroNotificacionId: 'ABC123',
      Observacion: 'Observación de prueba',
      Condicion: '404' // Example value
    },
    // Add more notifications with Condicion
    {
      Id: 3,
      Asunto: 'Notificación de prueba3',
      FechaRegistro: '2024-08-01',
      Cantidad: 20,
      DetalleCentroNotificacionId: 'ABC123',
      Observacion: 'Observación de prueba3',
      Condicion: '500' // Example value
    },
    {
      Id: 4,
      Asunto: 'Notificación de prueba4',
      FechaRegistro: '2024-08-01',
      Cantidad: 500,
      DetalleCentroNotificacionId: 'ABC123',
      Observacion: 'Observación de prueba4',
      Condicion: '400' // Example value
    },
  ];

  errorOptions = [
    { value: '404', label: 'Error 404 - Not Found' },
    { value: '500', label: 'Error 500 - Internal Server Error' },
    { value: '400', label: 'Error 400 - Bad Request' },
    { value: '401', label: 'Error 401 - Unauthorized' },
    { value: '403', label: 'Error 403 - Forbidden' }
  ];

  viewInfo = 'List';
  viewSection = true;
  selectedNotificationId: number | null = null;

  notify = {
    TipoProcesoNotifcacionId: '',
    FechaInicio: '',
    FechaFin: ''
  };

 

  getNotifications() {
    // Logic to retrieve notifications
  }

  sumCantProcess() {
    return this.notifications.reduce((sum, notif) => sum + notif.Cantidad, 0);
  }

  selectNotification(notificationId: number) {
    this.selectedNotificationId = notificationId;
  }
}
