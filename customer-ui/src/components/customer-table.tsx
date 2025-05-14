import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Customer } from "@/types/customer";

export function CustomerTable({ customers }: { customers: Customer[] }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border">
      <Table className="min-w-[600px] text-sm">
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
            <TableRow key={c.id}>
              <TableCell>{c.id}</TableCell>
              <TableCell>{c.fullName}</TableCell>
              <TableCell>{c.email}</TableCell>
              <TableCell>{new Date(c.registrationDate).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
