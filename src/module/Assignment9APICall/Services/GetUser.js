const getUser = async (id) => {
  try {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export default getUser;
