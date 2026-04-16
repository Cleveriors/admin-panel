export async function sync(url, data) {
  await fetch(url + "/.json", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}
