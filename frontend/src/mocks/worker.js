import { setupWorker } from "msw/browser";
import { handlers } from "./handlers/handlers";

export const worker = setupWorker(...handlers);
export const enableMocking = (flag) => {
  if (!flag) {
    return Promise.resolve();
  }
  return worker.start({ onUnhandledRequest: "bypass" });
}