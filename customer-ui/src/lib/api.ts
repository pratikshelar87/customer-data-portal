export async function fetchCustomers(page = 1, limit = 10) {
  const res = await fetch(
    `https://qhxx3y3229.execute-api.ap-southeast-2.amazonaws.com/prod/customers?page=${page}&limit=${limit}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY!,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch customers");
  return res.json();
}
