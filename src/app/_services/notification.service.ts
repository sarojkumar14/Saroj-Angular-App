import { Injectable, ViewContainerRef } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

    constructor(private notification: ToastrService) {
    }

    showSuccess(message, title?: string) {
        this.notification.success(message, title, {
            closeButton: true,
            progressBar: true
        });
    }

    showError(message, title?: string) {
        this.notification.error(message, title, {
            closeButton: true,
            progressBar: true
        });
    }

    showWarning(message, title?: string) {
        this.notification.warning(message, title, {
            closeButton: true,
            progressBar: true
        });
    }

    showInfo(message, title?: string) {
        this.notification.info(message, title, {
            closeButton: true,
            progressBar: true
        });
    }
}