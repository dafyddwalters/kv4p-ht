import { Dialog } from "@material/web/dialog/internal/dialog.js";
import { styles } from "@material/web/dialog/internal/dialog-styles.css";
export class EwDialog extends Dialog {
}
EwDialog.styles = [styles];
customElements.define("ew-dialog", EwDialog);
