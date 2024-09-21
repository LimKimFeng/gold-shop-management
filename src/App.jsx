import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import 'boxicons/css/boxicons.min.css';

import Welcome from './components/Welcome.jsx'
import StokEmas from './components/StokEmas.jsx';
import TransaksiPenjualan from './components/TransaksiPenjualan.jsx';
import TransaksiPembelian from './components/TransaksiPembelian.jsx';
import LaporanKeuangan from './components/LaporanKeuangan.jsx';


function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard/' element={<Dashboard />} >
          <Route path="welcome" element={<Welcome />} />
          <Route path="stok-emas" element={<StokEmas />} />
          <Route path="transaksi-penjualan" element={<TransaksiPenjualan />} />
          <Route path="transaksi-pembelian" element={<TransaksiPembelian />} />
          <Route path="laporan-keuangan" element={<LaporanKeuangan />} />
          <Route path="*" element={<Navigate to="welcome" />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;