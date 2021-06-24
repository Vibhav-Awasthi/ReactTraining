const getList = async () => {
  // fetch("https://reqres.in/api/users")
  //   .then((res) => {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then((json) => {
  //     jsondata = json?.data;
  //     console.log(jsondata);
  //     return json?.data;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  try {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export default getList;
