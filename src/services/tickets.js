// src/services/tickets.js

// Helper function to load tickets from localStorage
function loadTickets() {
  const data = localStorage.getItem("tickets");
  return data ? JSON.parse(data) : [];
}

// Helper function to save tickets to localStorage
function saveTickets(tickets) {
  localStorage.setItem("tickets", JSON.stringify(tickets));
}

// Simulate async delay (like an API call)
function simulateAsync(data, delay = 300) {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

// ✅ GET all tickets
export async function getTickets() {
  const tickets = loadTickets();
  return simulateAsync(tickets);
}

// ✅ CREATE new ticket
export async function createTicket(ticket) {
  const tickets = loadTickets();
  const newTicket = {
    ...ticket,
    id: Date.now().toString(),
    created_at: new Date().toISOString(),
  };
  tickets.push(newTicket);
  saveTickets(tickets);
  return simulateAsync(newTicket);
}

// ✅ UPDATE ticket by ID
export async function updateTicket(id, updatedTicket) {
  const tickets = loadTickets();
  const index = tickets.findIndex((t) => t.id === id);
  if (index === -1) throw new Error("Ticket not found");

  tickets[index] = { ...tickets[index], ...updatedTicket };
  saveTickets(tickets);
  return simulateAsync(tickets[index]);
}

// ✅ DELETE ticket by ID
export async function deleteTicket(id) {
  const tickets = loadTickets();
  const newList = tickets.filter((t) => t.id !== id);
  saveTickets(newList);
  return simulateAsync(true);
}
