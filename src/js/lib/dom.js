// DOM libary

// fetch first node from selector
export function get(selector, doc = document) {
  return doc.querySelector(selector);
}

// fetch all nodes from selector
export function getAll(selector, doc = document) {
  return Array.from(doc.querySelectorAll(selector));
}
