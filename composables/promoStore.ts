export const usePromoStore = defineStore('promoStore', {
    state: () => ({
        all_promo : [
            {
                id_promo : 9,
                nama_promo : 'Program Beli Pulsa HUT BTN 74',
                deskripsi_promo : 'Cashback berupa saldo tabungan sebesar 74% maksimal Rp50.000,- kepada nasabah yang melakukan pembelian pulsa (Telkomsel, Indosat, XL) minimal sebesar Rp50.000,- melalui BTN Mobile',
                periode_promo : '1 Februari 2024 s.d. 10 Februari 2024',
                jenis_promo : 'BTN Mobile',
                nasabah_promo : 'Seluruh nasabah bank BTN ',
                gambar_promo : '/img/promo09.jpg',
                syarat_promo : [
                    {
                        id_syarat : 1,
                        keterangan : 'Cashback berupa saldo tabungan sebesar 74% maksimal Rp50.000,- kepada nasabah yang melakukan pembelian pulsa (Telkomsel, Indosat, XL) minimal sebesar Rp50.000,- melalui BTN Mobile.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Kuota : 150/ hari.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : '1 nasabah hanya berhak menerima 1x cashback selama periode program.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Promo tidak berlaku kelipatan.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Cashback akan diberikan maksimal H+5 hari kerja setelah periode program promo berakhir.'
                    },
                    {
                        id_syarat : 6,
                        keterangan : ' Apabila pada saat pengkreditan cashback, rekening nasabah sudah dalam kondisi tidak aktif dan/atau tutup, maka nasabah dianggap tidak eligible dan didiskualifikasi untuk mendapatkan benefit program.'
                    }
                ]
            },
            {
                id_promo : 8,
                nama_promo : 'Program Home Service “HUTBTN74”',
                deskripsi_promo : 'Diskon sebesar Rp35.000 untuk transaksi pada fitur Daily Cleaning, Health Beauty & Wellness pada aplikasi BTN Properti dan BTN Smart Residence',
                periode_promo : '9 Februari 2024 s.d. 29 Februari 2024',
                jenis_promo : 'Aplikasi BTN Smart Residence dan BTN Properti',
                nasabah_promo : 'Pengguna Aplikasi BTN Smart Residence dan BTN Properti',
                gambar_promo : '/img/promo08.jpg',
                syarat_promo : [
                    {
                        id_syarat : 1,
                        keterangan : 'Diskon sebesar Rp35.000 untuk pemesanan Jasa Layanan pada fitur Home Service khususnya Daily Cleaning serta Health, Beauty & Wellness pada aplikasi BTN Smart Residence dan Portal atau Aplikasi BTN Properti.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Diskon didapatkan oleh nasabah / customer dengan menginputkan kode voucher “HUTBTN74” sebelum melakukan pembayaran.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : 'Berlaku untuk minimum transaksi Rp100.000.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Total kuota : 300 transaksi/periode.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Program berlaku HANYA untuk pemesanan layanan menggunakan Aplikasi BTN Smart Residence atau BTN Properti.'
                    },
                    {
                        id_syarat : 6,
                        keterangan : 'Program promo tidak dapat diuangkan dan digabung dengan program promo lainnya.'
                    }
                ]
            },
            {
                id_promo : 7,
                nama_promo : 'Program PLN Prepaid Gajian Pertama 2024',
                deskripsi_promo : 'Cashback berupa saldo tabungan sebesar 20,24% maksimal Rp20.000,- kepada nasabah yang melakukan pembelian token listrik minimal sebesar Rp50.000,- melalui BTN Mobile',
                periode_promo : '25 januari 2024 s.d. 10 Februari 2024',
                jenis_promo : 'BTN Mobile',
                nasabah_promo : 'Seluruh nasabah bank BTN ',
                gambar_promo : '/img/promo07.jpg',
                syarat_promo : [
                    {
                        id_syarat : 1,
                        keterangan : 'Cashback berupa saldo tabungan sebesar 20,24% maksimal Rp20.000,- kepada nasabah yang melakukan pembelian token listrik minimal sebesar Rp50.000,- melalui BTN Mobile.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Kuota : 200/ hari.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : '1 nasabah hanya berhak menerima 1x cashback selama periode program.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Promo tidak berlaku kelipatan.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Cashback akan diberikan maksimal H+5 hari kerja setelah periode program promo berakhir.'
                    },
                    {
                        id_syarat : 6,
                        keterangan : ' Apabila pada saat pengkreditan cashback, rekening nasabah sudah dalam kondisi tidak aktif dan/atau tutup, maka nasabah dianggap tidak eligible dan didiskualifikasi untuk mendapatkan benefit program.'
                    }
                ]
            },
            {
                id_promo : 1,
                nama_promo : 'Flash Sale 11.11 BTN Spekta',
                deskripsi_promo : 'Dapatkan Flash Sale Special Offer untuk Voucher MAP 500.000, Logam Mulia 0,5 gr, Logam Mulia 1gr, Logam Mulia 2gr',
                periode_promo : '1 November 2023 s.d. 31 March 2024',
                jenis_promo : 'Nasabah melakukan penukaran poin melalui BTN Mobile dengan melakukan klik pada menu Poin Spekta',
                nasabah_promo : 'Seluruh nasabah bank BTN yang memiliki Poin Spekta',
                gambar_promo : '/img/promo01.jpg',
                syarat_promo : [
                    {
                        id_syarat : 1,
                        keterangan : 'Peserta flash sale merupakan nasabah Bank BTN yang memiliki poin yang cukup untuk ditukarkan dengan hadiah baik itu berupa barang atau voucher belanja.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Masing-masing nasabah hanya memiliki lima kesempatan melakukan redeem poin untuk setiap jenis hadiah selama periode berlangsung.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : 'Program berlangsung pada waktu-waktu tertentu dan nasabah dapat mengikuti program melalui BTN Mobile dengan klik menu poin spekta.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Quota terbatas hanya untuk 1000 orang pertama.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Bank BTN berhak melakukan verifikasi ataupun membatalkan keikutsertaan secara sepihak jika ditemukan adanya penyimpangan yang dilakukan nasabah, dan keputusan Bank tidak dapat diganggu gugat.'
                    },
                    {
                        id_syarat : 6,
                        keterangan : 'Dengan berpartisipasi dalam program ini, nasabah dianggap telah memahami dan menyetujui Syarat & Ketentuan yang berlaku.'
                    }
                ]
            },
            {
                id_promo : 2,
                nama_promo : 'Program IM3 Paket Data Bonus Pulsa',
                deskripsi_promo : 'Dapatkan Program berupa bonus pulsa hingga 20.000 diberikan kepada nasabah yang melakukan transaksi pembelian paket data IM3 melalui BTN e-Channels',
                periode_promo : '1 January 2024 – 22 January 2024',
                jenis_promo : 'BTN e-Channels',
                nasabah_promo : 'Seluruh nasabah Perorangan bank BTN',
                gambar_promo : '/img/promo06.jpg',
                syarat_promo : [
                    {
                        id_syarat : 1,
                        keterangan : 'Cashback berupa bonus pulsa hingga 20.000 diberikan kepada nasabah yang melakukan transaksi pembelian paket data IM3 melalui BTN e-Channels, yaitu Paket data Freedom Internet 35GB/ 30 Hari dengan Bonus Pulsa 15.000 dan paket data Freedom Internet 50GB/ 30 Hari dengan bonus pulas 20.000'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Bonus pulsa diberikan jika pembelian dinyatakan berhasil oleh sistem Indosat.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : 'Bonus pulsa diberikan HANYA 1 kali dalam satu hari untuk setiap nomor Indosat yang bertransaksi.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Bonus pulsa akan masuk dalam pulsa utama nasabah sehingga dapat digunakan untuk melakukan layanan Indosat seperti panggilan, SMS ke semua operator, pembelian apps berbasis pulsa (produk digital yang dapat dibeli di market place iTunes, Ratakan, ClickBank, AppStore, PlayStore, VIU, Strava, Games,Vidio, dll).'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Bonus akan dikirimkan kepada pelanggan secara real-time pada saat selesai bertransaksi.'
                    }
                ]
            },
            {
                id_promo : 3,
                nama_promo : 'Program Promo E-Wallet Spesial Tahun Baru',
                deskripsi_promo : 'Dapatkan Cashback berupa saldo tabungan sebesar 20,24% (maksimal Rp20.000) kepada nasabah yang melakukan top up Gopay, OVO, ShopeePay, dan Dana melalui BTN Mobile',
                periode_promo : '10 January 2024 – 31 January 2024',
                jenis_promo : 'BTN Mobile',
                nasabah_promo : 'Seluruh nasabah Perorangan bank BTN',
                gambar_promo : '/img/promo05.jpg',
                syarat_promo : [
                    {
                        id_syarat : 1,
                        keterangan : 'Cashback berupa saldo tabungan sebesar 20,24% maksimal Rp20.000 kepada nasabah yang melakukan top up Gopay, OVO, ShopeePay, dan Dana melalui BTN Mobile.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Kuota: 300/hari selama periode promo.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : '1 (satu) nasabah hanya berhak menerima 1x (satu kali) cashback selama periode program.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Cashback akan diberikan maksimal H+5 kerja setelah periode program promo berakhir.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Apabila pada saat pengkreditan cashback, rekening nasabah sudah dalam kondisi tidak aktif dan/atau tutup, maka nasabah dianggap tidak eligible dan didiskualifikasi untuk mendapatkan benefit program.'
                    }
                ]
            },
            {
                id_promo : 4,
                nama_promo : 'Transaksi Kartu Debit BTN VISA di Alfamart & Indomaret',
                deskripsi_promo : 'Dapatkan Cashback 30.000 POIN SPEKTA bertransaksi di Alfamart dan Indomaret dengan Kartu Debit BTN VISA',
                periode_promo : '1 November 2023 s.d. 31 December 2023',
                jenis_promo : 'Kartu Debit BTN Visa',
                nasabah_promo : 'Nasabah/konsumen BTN Perorangan dan Bisnis',
                gambar_promo : '/img/promo03.jpg',
                syarat_promo : [
                    {
                        id_syarat : 1,
                        keterangan : 'Cashback 30.000 Poin Spekta.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Berlaku akumulasi transaksi pembelanjaan minimal Rp500.000 per bulan.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : 'Penghitungan cashback dilakukan atas akumulasi transaksi di Alfamart dan Indomaret yang dilakukan selama 1 bulan berjalan.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Cashback berlaku 1 kartu per bulan.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Tidak berlaku kelipatan.'
                    },
                    {
                        id_syarat : 6,
                        keterangan : 'Cashback akan dikreditkan ke masing-masing nasabah maksimal tanggal 15 di bulan berikutnya.'
                    },
                    {
                        id_syarat : 7,
                        keterangan : 'Apabila pada saat pengkreditan cashback, akun Poin Spekta Nasabah tidak aktif / belum terdaftar  maka nasabah dianggap tidak eligible untuk mendapatkan cashback.'
                    },
                    {
                        id_syarat : 8,
                        keterangan : 'Nasabah bertransaksi di Alfamart dan Indomaret menggunakan Kartu Debit BTN VISA.'
                    },
                    {
                        id_syarat : 9,
                        keterangan : 'Untuk akumulasi transaksi minimal Rp500.000 dalam 1 bulan, Nasabah akan berhak mendapatkan cashback 30.000 Poin Spekta.'
                    },
                    {
                        id_syarat : 10,
                        keterangan : 'Bank BTN berhak melakukan peninjauan dan/atau pemeriksaan terhadap kewajaran transaksi Nasabah. Apabila berdasarkan pertimbangan ditemukan adanya indikasi penyalahgunaan dan/atau tindak kecurangan pada Program, maka Bank BTN berhak menunda atau tidak membayarkan cashback kepada nasabah.'
                    },
                    {
                        id_syarat : 11,
                        keterangan : 'Berlaku untuk semua jenis Kartu Debit BTN VISA'
                    },
                ]
            }
        ],

        all_program : [
            {
                id_program : 6,
                nama_program : 'Program Siap Cashback',
                deskripsi_program : 'Pemberian benefit berupa cashback kepada nasabah yang melakukan pembukaan rekening Tabungan BTN Siap. ',
                periode_program : '1 Januari 2024 s.d. 31 Maret 2024',
                jenis_program : 'Tabungan BTN Siap',
                nasabah_program : 'Seluruh nasabah bank BTN',
                lokasi_program : 'Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)',
                benefit_program : [
                    {
                        id_benefit : 1,
                        keterangan_benefit : 'Setoran rutin 100 rb - 500 rb. Jangka waktu 24 bulan, cashback 25.000.'
                    },
                    {
                        id_benefit : 2,
                        keterangan_benefit : 'Setoran rutin >500 rb - 1 Juta. Jangka waktu 24 bulan, cashback 50.000.'
                    },
                    {
                        id_benefit : 3,
                        keterangan_benefit : 'Setoran rutin >1 Juta. Jangka waktu 24 bulan, cashback 100.000.'
                    }
                ],
                syarat_program : [
                    {
                        id_syarat : 1,
                        keterangan : 'Minimal setoran 100ribu dengan jangka waktu minimal 24 bulan.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Nasabah wajib teraktivasi Mobile Banking.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : 'Nominal cashback dipotong pajak sebesar 20% (mengikuti aturan PPh 4 Ayat 2).'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Benefit cashback akan dibayarkan  maksimal tanggal 20 di bulan berikutnya.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Berlaku untuk pembukaan  Tabungan  BTN Siap melalui outlet maupun mobile banking.'
                    }
                ]
            },
            {
                id_program : 5,
                nama_program : 'HEBOH DEPOSITO BTN MOJOKERTO',
                deskripsi_program : 'Penempatan Freshfund Deposito atau e-Deposito minimal 10 Juta Rupiah dan Jangka Waktu Minimal selama 3 bulan akan mendapatkan benefit dimuka berupa sembako atau voucher belanja sesuai ketentuan. ',
                periode_program : '1 Januari 2024 s.d. 31 Juni 2024',
                jenis_program : 'Deposito & e-Deposito',
                nasabah_program : 'Seluruh nasabah bank BTN',
                lokasi_program : 'Outlet Bank BTN KC Mojokerto, KCP Mojosari, KCP Jombang',
                benefit_program : [
                    {
                        id_benefit : 1,
                        keterangan_benefit : 'Penempatan nominal 10.000.000 - 50.000.000. Benefit Sembako Rp. 25.000.'
                    },
                    {
                        id_benefit : 2,
                        keterangan_benefit : 'Penempatan nominal 51.000.000 - 100.000.000. Benefit Sembako Rp. 50.000.'
                    },
                    {
                        id_benefit : 3,
                        keterangan_benefit : 'Penempatan nominal 101.000.000 - 150.000.000. Benefit Sembako Rp. 75.000.'
                    },
                    {
                        id_benefit : 4,
                        keterangan_benefit : 'Penempatan nominal 151.000.000 - 200.000.000. Benefit Voucher Belanja Rp. 100.000.'
                    },
                    {
                        id_benefit : 5,
                        keterangan_benefit : 'Penempatan nominal 201.000.000 - 300.000.000. Benefit Voucher Belanja Rp. 150.000.'
                    },
                    {
                        id_benefit : 6,
                        keterangan_benefit : 'Penempatan nominal 301.000.000 - 500.000.000. Benefit Voucher Belanja Rp. 200.000.'
                    },
                ],
                syarat_program : [
                    {
                        id_syarat : 1,
                        keterangan : 'Penempatan deposito jangka waktu min 3 bulan.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Nasabah wajib melakukan pengisian Form Keikutsertaan Program.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : 'Pilihan benefit berupa sembako atau voucher belanja sesuai tiering penempatan.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Nasabah boleh memilih akan melakukan pembukaan Deposito atau e-Deposito.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Tidak dapat di Bundling dengan program serupa.'
                    },
                    {
                        id_syarat : 6,
                        keterangan : 'Tidak berlaku bagi karyawan BTN.'
                    }
                ]
            },
            {
                id_program : 4,
                nama_program : 'Program Spektadeal eDeposito & eSiap',
                deskripsi_program : 'Pemberian benefit hadiah untuk nasabah e-deposito dan e-siap yang beruntung',
                periode_program : '1 Januari 2024 s.d. 31 Desember 2024',
                jenis_program : 'E-Deposito & e-siap',
                nasabah_program : 'Seluruh nasabah bank BTN',
                lokasi_program : 'Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)',
                benefit_program : [
                    {
                        id_benefit : 1,
                        keterangan_benefit : 'e-Voucher yang akan diberikan adalah e-voucher indomaret.'
                    },
                    {
                        id_benefit : 2,
                        keterangan_benefit : 'e-Voucher akan dikirimkan melalui email//WA Nasabah dalam waktu 5 x 24 jam.'
                    },
                    {
                        id_benefit : 3,
                        keterangan_benefit : 'e-Voucher 25.000 untuk penempatan 5-25 jt, 50.000 untuk >25 - 50jt & 100.000 untuk >50 jt'
                    },
                ],
                syarat_program : [
                    {
                        id_syarat : 1,
                        keterangan : 'Pembukaan  e-Deposito  min 50 jt / 1 poin undian.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Penempatan deposito jangka waktu min 3 bulan.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : 'Berlaku  untuk nasabah e-deposito new atau eksisting.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Pembukaan e-Siap  min 500rb / 1 poin undian.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'setoran tabungan Siap jangka waktu min 12 bulan.'
                    },
                    {
                        id_syarat : 6,
                        keterangan : 'Berlaku untuk nasabah e-siap new atau eksisting.'
                    },
                    {
                        id_syarat : 7,
                        keterangan : 'Minimal transaksi 4x transaksi BTN Mobile.'
                    },
                    {
                        id_syarat : 8,
                        keterangan : 'Tidak  berlaku untuk nasabah yang sudah pemah mendapatkan  undian.'
                    },
                    {
                        id_syarat : 9,
                        keterangan : 'e-Deposito belum jatuh tempo ketika dilaksanakan  undian.'
                    },
                    {
                        id_syarat : 10,
                        keterangan : 'Tidak berlaku untuk karyawan BTN.'
                    },
                    {
                        id_syarat : 10,
                        keterangan : 'Undian  akan dilaksanakan pada bulan April 2024, Juli 2024, Oktober 2024 dan Januari 2025.'
                    }
                ]
            },
            {
                id_program : 1,
                nama_program : 'Program EXPO (Extra e-Deposito)',
                deskripsi_program : 'Pemberian benefit hadiah e-voucher kepada nasabah yang melakukan pembukaan e-deposito baru',
                periode_program : '1 November 2023 s.d. 31 Desember 2023',
                jenis_program : 'E-Deposito',
                nasabah_program : 'Seluruh nasabah bank BTN',
                lokasi_program : 'Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)',
                benefit_program : [
                    {
                        id_benefit : 1,
                        keterangan_benefit : 'e-Voucher yang akan diberikan adalah e-voucher indomaret.'
                    },
                    {
                        id_benefit : 2,
                        keterangan_benefit : 'e-Voucher akan dikirimkan melalui email//WA Nasabah dalam waktu 5 x 24 jam.'
                    },
                    {
                        id_benefit : 3,
                        keterangan_benefit : 'e-Voucher 25.000 untuk penempatan 5-25 jt, 50.000 untuk >25 - 50jt & 100.000 untuk >50 jt'
                    },
                ],
                syarat_program : [
                    {
                        id_syarat : 1,
                        keterangan : 'Pemberian  benefit  bagi  nasabah yang  melakukan  pembukaan rekening eDeposito ritel min Rp.5 Juta.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Benefit diberikan kepada nasabah yang pertama kali membuka E-Deposito.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : 'Benefit diberikan sekali selama program.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Penempatan deposito minimal jangka waktu 3 bulan.'
                    },
                    {
                        id_syarat : 5,
                        keterangan : 'Voucher yang diberikan berupa voucher voucher belanja elektronik (VBE).'
                    },
                    {
                        id_syarat : 6,
                        keterangan : 'E-Voucher akan dikirimkan melalui WA Nasabah.'
                    }
                ]
            },
            {
                id_program : 2,
                nama_program : 'Program E-Voucher Tabungan Online',
                deskripsi_program : 'Pemberian benefit E-Voucher kepada nasabah yang melakukan pembukaan tabungan online',
                periode_program : '1 November 2023 s.d. 31 Desember 2023',
                jenis_program : 'Tabungan Batara Online',
                nasabah_program : 'Seluruh nasabah bank BTN',
                lokasi_program : 'Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)',
                benefit_program : [
                    {
                        id_benefit : 1,
                        keterangan_benefit : 'Produk Batara Online setoran awal 500.000 mendapat benefit E-Voucher 50.000.'
                    },
                    {
                        id_benefit : 2,
                        keterangan_benefit : 'Produk Bundling Batara Online & Siap Online, setoran awal 500.000 & installment Siap 100.000 mendapata benefit E-Voucher 100.000.'
                    },
                    {
                        id_benefit : 3,
                        keterangan_benefit : 'e-Voucher berupa voucher belanja elektronik (VBE) Indomaret.'
                    },
                    {
                        id_benefit : 4,
                        keterangan_benefit : 'Khusus KC yang tidak ada indomaret (KC Padang) maka beneft dialihkan menjadi e-Voucher Tokopedia'
                    },
                    {
                        id_benefit : 5,
                        keterangan_benefit : 'Voucher dikirm minimal 5 hari kerja.'
                    },
                ],
                syarat_program : [
                    {
                        id_syarat : 1,
                        keterangan : 'Pemberian benefit bagi Nasabah yang melakukan pembukaan rekening Tabungan Batara Online yang sudah melakukan setoran awal.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Benefit diberikan kepada nasabah yang membuka Tabungan Batara Online melalui mobile banking.'
                    },
                    {
                        id_syarat : 3,
                        keterangan : 'Setoran awal minimal 500.000.'
                    },
                    {
                        id_syarat : 4,
                        keterangan : 'Apabila nasabah membuka Tabungan Siap Online min 100.00 maka akan mendapat tambahan benefit.'
                    }
                ]
            },
            {
                id_program : 3,
                nama_program : 'Program Cashback Bank BTN',
                deskripsi_program : 'Pemberian benefit bagi  Nasabah yang melakukan pembukaan rekening Tabungan BTN Siap! dengan min setoran rutin Rp 100 ribu dengan jangka waktu minimal 24 Bulan.',
                periode_program : '1 Oktober 2023 s.d. 31 Desember 2023',
                jenis_program : 'Tabungan BTN Siap',
                nasabah_program : 'Seluruh nasabah bank BTN',
                lokasi_program : 'Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)',
                benefit_program : [
                    {
                        id_benefit : 1,
                        keterangan_benefit : 'Setoran rutin 100.000 - 500.000 mendapat cashback 25.000.'
                    },
                    {
                        id_benefit : 2,
                        keterangan_benefit : 'Setoran rutin >500.000 - 1.000.000 mendapat cashback 50.000.'
                    },
                    {
                        id_benefit : 3,
                        keterangan_benefit : 'Setoran rutin >1.000.000 mendapat cashback 100.000.'
                    }
                ],
                syarat_program : [
                    {
                        id_syarat : 1,
                        keterangan : 'Minimal setoran 100.000 dalam jangka waktu minimal 24 bulan.'
                    },
                    {
                        id_syarat : 2,
                        keterangan : 'Nasabah wajib teraktivasi Mobile Banking.'
                    },
                ]
            },
        ]

    }),
})
