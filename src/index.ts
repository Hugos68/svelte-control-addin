import App from "./index.svelte";
import { mount } from "svelte";

mount(App, {
  target: document.querySelector("#controlAddIn")!,
});
