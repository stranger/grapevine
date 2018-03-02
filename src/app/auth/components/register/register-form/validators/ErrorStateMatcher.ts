import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";

import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    // If respective form group has noMatch error, display "noMatch" error.
    // Or If confirm control has not been edited and normal control has been edited, display "required" error.
    if (
      control.parent.hasError("noMatch") ||
      (!control.dirty && control.parent.dirty)
    ) {
      return true;
    }
  }
}
