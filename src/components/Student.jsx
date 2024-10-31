import { useEffect, useState } from "react";
import api from '../api'; // Asegúrate de ajustar la ruta si api.js está en una subcarpeta

function Student() {
  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await api.get("/student");
    setStudents(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await api.post("/student", { name, address, phone });
      alert("Student Registration Successfully");
      setId("");
      setName("");
      setAddress("");
      setPhone("");
      Load();
    } catch (err) {
      console.error("Error:", err);
      alert("Student Registration Failed");
    }
  }

  async function editStudent(student) {
    setName(student.name);
    setAddress(student.address);
    setPhone(student.phone);
    setId(student.id);
  }

  async function DeleteStudent(id) {
    await api.delete(`/student/${id}`);
    alert("Student deleted Successfully");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await api.put(`/student/${id}`, { id, name, address, phone });
      alert("Registration Updated");
      setId("");
      setName("");
      setAddress("");
      setPhone("");
      Load();
    } catch (err) {
      console.error("Error:", err);
      alert("User Registration Failed");
    }
  }

  return (
    <div>
      <h1>Student Details</h1>
      <div className="container">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="student_id" hidden
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
            <label>Student Name</label>
            <input type="text" className="form-control" id="studentName"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Student Address</label>
            <input type="text" className="form-control" id="studentAddress"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" id="studentPhone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save}>Register</button>
            <button className="btn btn-warning mt-4" onClick={update}>Update</button>
          </div>
        </form>
      </div>
      <br />
      <div>
        <table className="table table-dark" align="center">
          <thead>
            <tr>
              <th scope="col">Student Id</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Address</th>
              <th scope="col">Student Phone</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          {students.map(student => (
            <tbody key={student.id}>
              <tr>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.phone}</td>
                <td>
                  <button type="button" className="btn btn-warning" onClick={() => editStudent(student)}>Edit</button>
                  <button type="button" className="btn btn-danger" onClick={() => DeleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Student;
