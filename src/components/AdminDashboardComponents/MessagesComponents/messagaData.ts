export interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  timestamp: number;
}

export const JohnMessages: ChatMessage[] = [
  {
    id: 1,
    sender: "John",
    message: "fsafds!",
    timestamp: 1626547200,
  },
  {
    id: 2,
    sender: "Michał",
    message: "Hfds fads!",
    timestamp: 1626547300,
  },
  {
    id: 3,
    sender: "John",
    message: "fdsfdsaf?",
    timestamp: 1626547400,
  },
];

export const AliceMessages: ChatMessage[] = [
  {
    id: 1,
    sender: "Alice",
    message: "test123",
    timestamp: 1626547200,
  },
  {
    id: 2,
    sender: "Michał",
    message: "Hfds fads!",
    timestamp: 1626547300,
  },
  {
    id: 3,
    sender: "Alice",
    message: "test123",
    timestamp: 1626547400,
  },
];

export const BobMessages: ChatMessage[] = [
  {
    id: 1,
    sender: "Bob",
    message: "test4314",
    timestamp: 1626547200,
  },
  {
    id: 2,
    sender: "Michał",
    message: "Hfds fads!",
    timestamp: 1626547300,
  },
  {
    id: 3,
    sender: "Bob",
    message: "test4314",
    timestamp: 1626547400,
  },
];
