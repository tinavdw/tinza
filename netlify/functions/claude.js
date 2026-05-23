export default async (request) => {
  const body = await request.text();
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: body
  });
  const data = await response.json();
  return Response.json(data);
};

export const config = { path: "/api/claude" };
