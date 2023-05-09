# rest-api-buku


berikut adalah beberapa endpoint yang mungkin ada dalam REST API buku:

GET /books: Endpoint ini digunakan untuk mengambil daftar seluruh buku yang tersedia. Respon yang diberikan mungkin berupa daftar buku beserta informasi seperti judul, penulis, dan tahun terbit.

GET /books/{id}: Endpoint ini digunakan untuk mengambil informasi spesifik mengenai sebuah buku berdasarkan ID-nya. Pengguna dapat mengirimkan permintaan GET dengan menyertakan ID buku yang diinginkan, dan respon yang diberikan akan berisi informasi terkait buku tersebut.

POST /books: Endpoint ini digunakan untuk menambahkan buku baru ke dalam sistem. Pengguna dapat mengirimkan permintaan POST dengan menyertakan data buku seperti judul, penulis, dan tahun terbit. Setelah berhasil ditambahkan, API akan memberikan respon dengan memberikan informasi terkait buku yang baru ditambahkan, termasuk ID yang unik untuk buku tersebut.

PUT /books/{id}: Endpoint ini digunakan untuk memperbarui informasi buku yang sudah ada. Pengguna dapat mengirimkan permintaan PUT dengan menyertakan ID buku yang ingin diperbarui, serta data yang diperbarui seperti judul, penulis, atau tahun terbit. Setelah berhasil diperbarui, API akan memberikan respon yang memperlihatkan informasi terkini mengenai buku yang telah diperbarui.

DELETE /books/{id}: Endpoint ini digunakan untuk menghapus sebuah buku dari sistem berdasarkan ID-nya. Pengguna dapat mengirimkan permintaan DELETE dengan menyertakan ID buku yang ingin dihapus. Setelah berhasil dihapus, API akan memberikan respon yang mengkonfirmasi bahwa buku telah dihapus dari sistem.