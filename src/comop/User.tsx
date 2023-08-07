import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState<any>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      data && setUserData(data);
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>All User</h1>
      {loading && <p>loading...</p>}
      <p style={{ color: "red" }}> {error && error} </p>

      {userData?.length > 0 ? (
        userData.map((user: any) => {
          return <p key={user.id}>{user.name}</p>;
        })
      ) : (
        <span>No data to display</span>
      )}
    </>
  );
};

export default User;
