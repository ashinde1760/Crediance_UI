export interface User {
  id?: string;
  userName?: string;
  mobile?: string;
  email?: string;
  role?: string;
  clientName?: string;
}

export interface Clients {
  clientName?: string;
}

export interface Role {
  role: string;
}
