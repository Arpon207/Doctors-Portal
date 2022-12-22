import { fetchData } from "../../axios";
import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, setSelectedDoctor }) => {
  const { name, image, email, specialty } = doctor;

  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={image.url} alt="Doctors Image" />
          </div>
        </div>
      </th>
      <td>{name}</td>
      <td>{email}</td>
      <th>{specialty}</th>
      <td>
        <label
          htmlFor="confirmation-modal"
          className="btn btn-sm btn-error text-white"
          onClick={() => setSelectedDoctor(doctor)}
        >
          Remove
        </label>
      </td>
    </tr>
  );
};

export default DoctorsRow;
