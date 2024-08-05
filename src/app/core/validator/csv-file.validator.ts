import { AbstractControl, ValidatorFn } from '@angular/forms';

export function csvFileValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const file = control.value;
    if (file) {
      const allowedExtensions = /(\.csv)$/i;
      if (!allowedExtensions.exec(file.name)) {
        return { invalidExtension: true };
      }

      const mimeType = file.type;
      if (mimeType !== 'text/csv') {
        return { invalidMimeType: true };
      }
    }
    return null;
  };
}
