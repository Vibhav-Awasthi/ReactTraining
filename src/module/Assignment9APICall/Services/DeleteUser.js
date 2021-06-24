const deleteUser = async (id) => {
  try {
    const res = await fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
    });
    return res;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export default deleteUser;
