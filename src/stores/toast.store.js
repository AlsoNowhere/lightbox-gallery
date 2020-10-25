
import { Store } from "../lib/store/Store";

export const toastStore = new Store({
    showToast: false,
    message: "",
    timeout: null
});
