export interface GetManagementResponse {
  users: [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6";
      firstName: "string";
      lastName: "string";
      email: "string";
      createdAt: "2023-09-11T10:51:59.761Z";
    }
  ];
}

export type Role =
  | "Undefined"
  | "SuperAdmin"
  | "Admin"
  | "User"
  | "Shelter"
  | "Worker";


  export interface WorkerInterface {
    fullName: string;
    email: string;
    additionDate: string;
  }