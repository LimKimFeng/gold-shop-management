import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const StokEmas = () => {
    const [stokEmas, setStokEmas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEmas, setSelectedEmas] = useState(null);

    useEffect(() => {
        fetchStokEmas();
    }, []);

    const fetchStokEmas = async () => {
        try {
            const response = await axios.get('http://localhost:3001/stok_emas');
            setStokEmas(response.data);
        } catch (error) {
            console.error('Error fetching data stok emas:', error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/stok_emas/${id}');
            fetchStokEmas();
            setShowModal(false);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }

    const openModal = (emas) => {
        setSelectedEmas(emas);
        setShowModal(true);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-4">Stok Emas</h1>
                    <p className="lead">Kelola data stok emas</p>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row mb-3">
                    <div className="col">
                        <h3 className="text-primary">Tabel Stok Emas</h3>
                    </div>
                    <div className="col text-end">
                        <a href="/tambah-emas" className="btn btn-primary btn-sm">Tambah Data</a>
                    </div>
                </div>
                <table className="table table-striped table-hover table-sm">
                    <thead className="table-primary">
                        <tr>
                            <th>No</th>
                            <th>ID Emas</th>
                            <th>Jenis Emas</th>
                            <th>Berat (gram)</th>
                            <th>Karat</th>
                            <th>Harga per Gram</th>
                            <th>Jumlah Stok</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stokEmas.length > 0 ? (
                            stokEmas.map((emas, index) => (
                                <tr key={emas.id}>
                                    <td>{index + 1}</td>
                                    <td>{emas.id}</td>
                                    <td>{emas.jenis_emas}</td>
                                    <td>{emas.berat}</td>
                                    <td>{emas.karat}</td>
                                    <td>{emas.harga_per_gram}</td>
                                    <td>{emas.jumlah_stok}</td>
                                    <td>
                                        <a href={`/edit-emas/${emas.id}`} className="btn btn-warning btn-sm">Edit</a>
                                        <button
                                            className="btn btn-danger btn-sm ms-2"
                                            onClick={() => openModal(emas)}
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">Tidak ada data emas</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal Konfirmasi Hapus */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Konfirmasi Hapus</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Apakah anda yakin ingin menghapus data emas <strong>{selectedEmas?.jenis_emas}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Batal
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(selectedEmas.id)}>
                        Hapus
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>


    );
}

export default StokEmas;