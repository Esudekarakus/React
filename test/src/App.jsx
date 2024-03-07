import  { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [createName, setCreateName] = useState('');
  const [createAdres, setCreateAdres] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updateAdres, setUpdateAdres] = useState('');
  const [idToUpdate, setIdToUpdate] = useState(null);

  const api = 'https://localhost:7046/api/Hastane';

  const getListFetch = async () => {
    try {
      const response = await fetch(`${api}/GetAllHospitals`);
      if (response.ok) {
        const data = await response.json();
        setHospitals(data);
      } else {
        // Handle error
      }
    } catch (error) {
      alert(error);
    }
  };

  const createHospitalFetch = async () => {
    try {
      const response = await fetch(`${api}/AddHospital`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          HastaneAd: createName,
          Adres: createAdres,
        }),
      });
      if (response.status === 200) {
        alert('Başarıyla eklendi');
        clearCreateFields();
        getListFetch();
      } else {
        // Handle error
      }
    } catch (error) {
      alert(error);
    }
  };

  const getUpdateDiv = async (id) => {
    try {
      if (idToUpdate !== id) {
        clearUpdateFields();

        const response = await fetch(`${api}/GetHospitalById?id=${id}`);
        if (response.status === 200) {
          const data = await response.json();
          setIdToUpdate(data.id);
          setUpdateName(data.hastaneAd);
          setUpdateAdres(data.adres);
        } else {
          // Handle error
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const clearCreateFields = () => {
    setCreateName('');
    setCreateAdres('');
  };

  const clearUpdateFields = () => {
    setIdToUpdate(null);
    setUpdateName('');
    setUpdateAdres('');
  };

  const updateHospitalFetch = async () => {
    try {
      const veri = {
        id: idToUpdate,
        hastaneAd: updateName,
        adres: updateAdres,
      };
      const response = await fetch(`${api}/UpdateHospital?id=${veri.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(veri),
      });
      if (response.ok) {
        alert('Başarıyla güncellendi');
        clearUpdateFields();
        getListFetch();
      } else {
        // Handle error
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteWithFetch = async (id) => {
    try {
      const response = await fetch(`${api}/DeleteHospital?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        alert('Hastane Başarıyla Silindi');
        getListFetch();
      } else {
        // Handle error
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getListFetch();
  }, []);

  return (
    <div>
      <button onClick={getListFetch}>Listeyi Getir</button>
      <div id="list">
        <table className="table table-secondary">
          <thead>
            <tr>
              <th>Id</th>
              <th>Hastane Adı</th>
              <th>Adres</th>
              <th>Güncelle</th>
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hastane) => (
              <tr key={hastane.id}>
                <td>{hastane.id}</td>
                <td>{hastane.hastaneAd}</td>
                <td>{hastane.adres}</td>
                <td>
                  <button onClick={() => getUpdateDiv(hastane.id)}>Güncelle</button>
                </td>
                <td>
                  <button onClick={() => deleteWithFetch(hastane.id)}>Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="errorFetch"></div>

      <h2>Hastane Ekle</h2>
      <div id="create">
        <label>Hastane Adı</label>
        <input type="text" value={createName} onChange={(e) => setCreateName(e.target.value)} />
        <label>Adres</label>
        <input type="text" value={createAdres} onChange={(e) => setCreateAdres(e.target.value)} />
        <button className="btn btn-success" onClick={createHospitalFetch}>
          Kaydet
        </button>
      </div>

      <h2>Hastaneyi Güncelle</h2>
      <div id="update">
        <label>Id</label>
        <input type="text" value={idToUpdate || ''} readOnly />
        <label>Hastane Adı</label>
        <input type="text" value={updateName} onChange={(e) => setUpdateName(e.target.value)} />
        <label>Adres</label>
        <input type="text" value={updateAdres} onChange={(e) => setUpdateAdres(e.target.value)} />
        <button className="btn btn-success" onClick={updateHospitalFetch}>
          Kaydet
        </button>
        <button className="btn btn-danger" onClick={clearUpdateFields}>
          Temizle
        </button>
      </div>
    </div>
  );
};

export default HospitalList;
