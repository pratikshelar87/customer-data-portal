import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import { Card } from "@/components/ui/card";
import { Customer } from "@/types/customer";



export function CustomerTable({ 
  customers
}: { 
  customers: Customer[]
}) {
  return (
    <Card className="border rounded-lg overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Registered</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((c) => (
            <TableRow key={c.id} className="border-b">
              <TableCell>{c.id}</TableCell>
              <TableCell>{c.fullName}</TableCell>
              <TableCell>{c.email}</TableCell>
              <TableCell>{new Date(c.registrationDate).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}