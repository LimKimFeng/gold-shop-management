import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/dashboard/*" className="navbar-brand">GoldShop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="stok-emas" className="nav-link">Stok Emas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Transaksi-penjualan" className="nav-link">Transaksi Penjualan</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="transaksi-pembelian" className="nav-link">Transaksi Pembelian</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="laporan-keuangan" className="nav-link">Laporan Keuangan</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;