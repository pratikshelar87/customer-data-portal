import { fetchCustomers } from "@/lib/api";
import { CustomerTable } from "@/components/customer-table";
import { PaginationControls } from "@/components/pagination-controls";

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = parseInt(searchParams?.page || "1", 10);
  const { customers, totalPages } = await fetchCustomers(page, 10);

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Customer Explorer</h1>
      <CustomerTable customers={customers} />
      <PaginationControls currentPage={page} totalPages={totalPages} />
    </main>
  );
}
