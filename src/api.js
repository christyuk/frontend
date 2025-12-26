const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3000";

export async function loginUser(username, password) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function truthCheck(text, token) {
  const res = await fetch(`${API_BASE_URL}/truth/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text }),
  });
  return res.json();
}
