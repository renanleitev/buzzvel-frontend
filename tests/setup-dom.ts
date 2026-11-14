import { JSDOM } from "jsdom";

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
  url: "http://localhost:3000",
});

Object.defineProperty(globalThis, "window", {
  value: dom.window,
  writable: true,
});
Object.defineProperty(globalThis, "document", {
  value: dom.window.document,
  writable: true,
});
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  writable: true,
});
Object.defineProperty(globalThis, "HTMLElement", {
  value: dom.window.HTMLElement,
  writable: true,
});
Object.defineProperty(globalThis, "HTMLInputElement", {
  value: dom.window.HTMLInputElement,
  writable: true,
});
Object.defineProperty(globalThis, "HTMLTextAreaElement", {
  value: dom.window.HTMLTextAreaElement,
  writable: true,
});
Object.defineProperty(globalThis, "Event", {
  value: dom.window.Event,
  writable: true,
});
Object.defineProperty(globalThis, "KeyboardEvent", {
  value: dom.window.KeyboardEvent,
  writable: true,
});
Object.defineProperty(globalThis, "MouseEvent", {
  value: dom.window.MouseEvent,
  writable: true,
});
