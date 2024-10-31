// import axios from 'axios';
import {useEffect, useState } from "react";
import api from '../api'; // Asegúrate de ajustar la ruta si está en una subcarpeta

// Elimina axios.defaults y usa api en su lugar

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
    const result = await api.get("/student"); // Usa api en lugar de axios
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
      {/* Resto del código del componente */}
    </div>
  );
}

export default Student;
