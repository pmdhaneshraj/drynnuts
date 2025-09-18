import { setupWorker } from "msw/browser";
import { handlers } from "./handlers/handlers";

export const browser = setupWorker(...handlers);
export const enableMocking = (flag) => {
  if (!flag) {
    return Promise.resolve();
  }
  return browser.start({ onUnhandledRequest: "bypass" });
}