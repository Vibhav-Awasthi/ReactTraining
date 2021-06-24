const addList = async (user) => {
  console.log(user);
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  const response = await fetch("https://reqres.in/api/users", requestOptions);
  const data = await response.json();
  return data;
};

export default addList;
