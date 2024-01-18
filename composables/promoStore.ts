export const usePromoStore = defineStore('promoStore', {
    state: () => ({
        all_promo : [
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
            }
        ]

    }),
})
