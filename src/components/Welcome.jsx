import React from "react";

import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import { div } from "framer-motion/client";

const Welcome = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-4">Dashboard Admin Gold Shop</h1>
                    <p className="lead">Kelola stok emas, transaksi penjualan, pembelian, dan laporan keuangan secara efisien dan akurat.</p>
                </div>
            </div>
            <div className="row mt-1 justify-content-center">
                <div className="col-md-4 mt-5">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Stok Emas</h5>
                            <p className="card-text">Kelola data stok emas</p>
                            <Link to="/dashboard/stok-emas" className="btn btn-primary">
                                Go
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-5">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Transaksi Penjualan</h5>
                            <p className="card-text">Buat data penjualan emas</p>
                            <Link to="/dashboard/transaksi-penjualan" className="btn btn-primary">
                                Go
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-5">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Transaksi Pembelian</h5>
                            <p className="card-text">Buat data pembelian emas</p>
                            <Link to="/dashboard/transaksi-pembelian" className="btn btn-primary">
                                Go
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-5">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Laporan Keuangan</h5>
                            <p className="card-text">Ringkasan penjualan dan pembelian</p>
                            <Link to="/dashboard/laporan-keuangan" className="btn btn-primary">
                                Go
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;