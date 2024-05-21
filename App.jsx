import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBoxOpen, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from 'antd';
import moment from 'moment';

const Navbar = () => {
  return (
    <div className="navbar-revisi">
      <div className="nav-color">
        <div className="searching">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <div className="searching2">
            <FontAwesomeIcon className="ikon" icon={faSearch} />
            <span className="placeholder">Search</span>
            <div className="search-1">
              <div className="search-container">
                <div className="leading-icon">
                  <FontAwesomeIcon className="ikon" icon={faSearch} />
                </div>
                <input className="placeholder" placeholder='Search'></input>
              </div>
            </div>
            <button className="tombol-cari">
              <span className="cari">Cari</span>
            </button>
          </div>
        </div>
        <div className="konten1">
          <div className="konten2">
          <div className="notifikasi">
              <div className="notif">
                <img  src='bell.png' alt='bell'></img>
              </div>
              <div className="notifikasi">Notifikasi</div>
            </div>
            <div className="keranjang">
              <div className="shop">
              <img src='cart3.png' alt='bell'></img>
              </div>
              <div className="keranjang">Keranjang</div>
            </div>
            <div className="pesanan">
              <div className="box">
              <img src='box.png' alt='bell'></img>
              </div>
              <div className="pesanan">Pesanan</div>
            </div>
          </div>
          <div className="btn-daftar">
            <span>Daftar</span>
          </div>
        </div>
      </div>
      <div className="nav2">
        <div className="kategori">
          <div className="primary-button-4">
            <span className="pilih-kategori-barang">Pilih Kategori Barang</span>
            <FontAwesomeIcon className="panah" icon={faChevronDown} />
          </div>
          <div className="menu">
            <div className="beranda"><span>Beranda</span></div>
            <div className="menu2"><span>Katalog</span></div>
            <div className="menu2"><span>Request</span></div>
            <div className="menu2"><span>Chat</span></div>
            <div className="menu2"><span>Bantuan</span></div>
          </div>
        </div>
        <div className="alamat1">
          <input className="alamat2" placeholder='Masukan alamat'></input>
          <div className="search-3">
          <FontAwesomeIcon className="ikon2" icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const [dates, setDates] = useState([]);

  return (
    <section>
      <div className="container flex">
        <div className="left">
          <div className="main_image">
            <img src="kamera.png" className="slide" alt="kamera" />
          </div>
        </div>
        <div className="right">
          <h2 className="flex-container">
            Kamera Cannon
            <div className="rating1">4.6 &#9733;</div>
          </h2>
          <h1><small>Rp</small> 100.000/1 Hari</h1>
          <h3 className="flex-container"> Harga deposit
            <div className="depo">
              <input type="number" className="deposit-input" placeholder="Masukk]an harga deposit" />
              <div className='deposit'>Rp</div>
            </div>
          </h3>
          <h3 className="flex-container">Durasi Sewa
              <DatePicker.RangePicker
                className='durasi'
                onChange={(values) => {
                  setDates(values.map(item => moment(item).format('MM-DD-YYYY')));
                }}
              />
          </h3>
          <h3 className="flex-container"> Jumlah barang
            <div className="jumlah">
              <input type="number" className="jumlah-input" placeholder="1" />
              <div className='kurang'>-</div>
              <div className='tambah'>+</div>
              <div className='sisa'>(tersisa 7 buah)</div>
            </div>
          </h3>
          <h3 className="flex-container">Pilih Lokasi Anda
          <div className="lokasi">
          <input className="lokasi2" placeholder='Masukan alamat'></input>
          <div className="pilihLokasi">
          <FontAwesomeIcon className="ikon2" icon={faSearch} />
          </div>
        </div>
          </h3>
          <button className='btn-pesan'>Pesan Sekarang</button>
        </div>
      </div>
    </section>
  );
};

const StoreInfo = () => {
  return (
    <>
      <hr className="custom-hr-atas" />
      <div className="toko-container">
        <img src="Toko.png" alt="Toko Serba Ada" className="toko-img" width="150" />
        <div>
          <div className="toko-info">Serba Ada <span className="toko-rating">4.8 &#9733;</span></div>
          <div className="online-info">Aktif 5 Menit Lalu</div>
          <div className="button-container">
            <button className="button">Chat</button>
            <button className="button">Lihat Produk</button>
          </div>
        </div>
        <div className="jaminan-container">
          <div>
            <p className="text">Toko ini memiliki jaminan</p>
            <img className="gambar" src="orange.png" alt="orange" />
            <img className="gambar" src="hijau.png" alt="hijau" />
            <img className="gambar" src="ungu.png" alt="ungu" />
          </div>
        </div>
      </div>
      <hr className="custom-hr-bawah" />
    </>
  );
};


const ProductDescription = () => {
  return (
    <div className="text">
      <div className="deskripsi_produk">
        <h2 className="deskripsi">Deskripsi Produk</h2>
        <p>Canon 1500D adalah kamera DSLR yang ideal bagi para fotografer pemula yang ingin menjelajahi dunia fotografi dengan kualitas gambar yang luar biasa. Dengan sensor CMOS 24,1 megapiksel, kamera ini memungkinkan Anda untuk mengambil gambar yang tajam dan detail dengan mudah. Dilengkapi dengan prosesor gambar DIGIC 4+, kamera ini memberikan kinerja yang cepat dan responsif, bahkan dalam kondisi pencahayaan yang rendah.</p>
      </div>
      <div className="deskripsi_produk">
        <h2 className="deskripsi">Kondisi produk</h2>
        <p>Dengan spesifikasi yang cocok untuk fotografer pemula maupun yang berpengalaman, kamera ini adalah pilihan ideal untuk acara-acara khusus, proyek fotografi, atau keperluan lainnya. Kondisi kamera selalu dijaga dengan baik, dan setiap penyewa akan mendapatkan aksesori standar yang dibutuhkan untuk penggunaan yang nyaman dan optimal.</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="scroll-container">
      <div className="content">
        {[
          { img: 'marvin.png', name: 'Marvin', text: 'Siap makasih puas dengan pelayanannya. Akan saya rekomendasikan ke orang lain.', rating: 5 },
          { img: 'audrey.png', name: 'Audrey', text: 'Siap makasih puas dengan pelayanannya. Akan saya rekomendasikan ke orang lain.', rating: 5 },
          { img: 'robert.png', name: 'Robert', text: 'Siap makasih puas dengan pelayanannya. Akan saya rekomendasikan ke orang lain.', rating: 5 },
          { img: 'marvin.png', name: 'Marvin', text: 'Siap makasih puas dengan pelayanannya. Akan saya rekomendasikan ke orang lain.', rating: 5 },
          { img: 'audrey.png', name: 'Audrey', text: 'Siap makasih puas dengan pelayanannya. Akan saya rekomendasikan ke orang lain.', rating: 5 },
          { img: 'robert.png', name: 'Robert', text: 'Siap makasih puas dengan pelayanannya. Akan saya rekomendasikan ke orang lain.', rating: 5 },
        ].map((review, index) => (
          <div className="testi" key={index}>
            <img src={review.img} alt={review.name} />
            <span className='rating'>{'★'.repeat(review.rating)}</span>
            <span className="testii">{review.text}</span>
            <p>{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SimilarProducts = () => {
  return (
    <div className="scroll-container">
      <div className="content2">
        {[
          { img: 'kamera.png', name: 'Kamera DSLR EOS', price: 'Rp 100.000/1 Hari', reviews: 20, rating: 4.8 },
          { img: 'kamera2.png', name: 'Sony A6000 Mirrorless', price: 'Rp 150.000/1 Hari', reviews: 20, rating: 4.8 },
          { img: 'kamera3.png', name: 'Mirrorless Samsung NX 210', price: 'Rp 70.000/1 Hari', reviews: 20, rating: 4.8 },
          { img: 'kamera4.png', name: 'Mirrorless Canon', price: 'Rp 80.000/1 Hari', reviews: 20, rating: 4.8 },
        ].map((product, index) => (
          <div className="menu_card" key={index}>
            <div className="menu_image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="menu_info">
              <span className="produk">{product.rating} &#9733;</span>
              <span className="produk">{product.rating} &#9733;</span>
              <span>({product.reviews} Reviews)</span>
              <h2>{product.name}</h2>
              <h2 style={{ fontWeight: 'bold', color: '#003F62' }}>{product.price}</h2>
              <div className="waktu">
                <div className="per">Harian</div>
                <div className="per">Mingguan</div>
                <div className="per">Bulanan</div>
              </div>
              <a href="#" className="menu_btn">Keranjang</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <ProductDetail />
      <StoreInfo />
      <ProductDescription />
      <h2 style={{ paddingLeft: '80px', paddingBottom: '10px', color: '#003F62', fontWeight: 'bold' }}>Ulasan</h2>
      <Reviews />
      <h2 className="serupa">Produk Serupa</h2>
      <SimilarProducts />
    </div>
  );
};

export default App;

