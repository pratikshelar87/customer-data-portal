import { render, screen } from "@testing-library/react";
import { CustomerTable } from "../customer-table";
import React from "react";


const mockCustomers = [
  { id: 1, fullName: "John Doe", email: "john@example.com", registrationDate: "2024-01-01" },
  { id: 2, fullName: "Jane Smith", email: "jane@example.com", registrationDate: "2024-02-01" },
];

describe("CustomerTable", () => {
  it("renders customer names", () => {
    render(<CustomerTable customers={mockCustomers} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });
});
