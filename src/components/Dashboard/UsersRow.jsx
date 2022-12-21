import { fetchData } from "./../../axios";

const UsersRow = ({ index, user, refetch }) => {
  const { name, email, admin } = user;

  const handleAdminReq = async (email) => {
    const url = `http://localhost:5000/api/users/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {!admin ? (
          <button
            className="btn btn-sm mr-5"
            onClick={() => handleAdminReq(email)}
          >
            Make Admin
          </button>
        ) : undefined}
        <button className="btn btn-sm btn-error text-white">Remove User</button>
      </td>
    </tr>
  );
};

export default UsersRow;
