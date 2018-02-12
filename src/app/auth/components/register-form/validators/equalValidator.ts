import { FormControl, FormGroup } from "@angular/forms";

export function equalValidator(normalControl: string, confirmControl: string) {
  return (g: FormGroup) => {
    if (g.controls[normalControl].valid && g.controls[confirmControl].dirty) {
      return g.controls[normalControl].value ===
        g.controls[confirmControl].value
        ? null
        : { noMatch: true };
    } else {
      return null;
    }
  };
}
