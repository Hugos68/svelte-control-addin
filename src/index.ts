import App from "./index.svelte";
import { mount } from "svelte";

const app = mount(App, {
  target: document.querySelector("#controlAddIn")!,
});

export default app;
