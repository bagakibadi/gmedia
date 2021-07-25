<template>
  <div class="dashboard">
    <NavbarPemandu :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="title-content">Data Presensi</div>
              <button type="button" class="btn btn-success">+ Tambah</button>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-6">
                <label class="form-label">Prodi</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <label class="form-label">Tanggal</label>
                <input class="form-control" type="date" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">NAMA</th>
                    <th scope="col">PRODI</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">TANGGAL</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="align-middle">
                    <td>
                      <div>
                        <div class="d-flex align-items-center">
                          <div
                            class="image d-flex align-items-center justify-content-center"
                          >
                            <img
                              src="../../assets/images/profile.jpeg"
                              alt=""
                            />
                          </div>
                          <div class="ms-3">
                            <div class="main-text">Tim Amstrong</div>
                            <div class="sub-text">120788006</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="main-text">Teknik Perminyakan</div>
                        <div class="sub-text">Gugus 1</div>
                      </div>
                    </td>
                    <td>tim.amstrong@gmail.com</td>
                    <td>
                      <div>
                        <div class="main-text">30 Jul 2021</div>
                        <div class="sub-text">Pukul 05:58:45 WIB</div>
                      </div>
                    </td>
                    <td>
                      <div class="badge-custom success text-success">Masuk</div>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm text-white"
                      >
                        <i class="fas fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
/* eslint-env jquery */

export default {
  data: function() {
    return {
      width: null,
    };
  },
  mounted() {
    this.width = $(document).width();

    $(document).ready(function() {
      $(".table").DataTable();
    });
    axios.get('https://gmedia.primakom.co.id/gmedia/pemandu/presensi', {
      headers: {
        Authorization: localStorage.token
      }
    }).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    });
  },
};
</script>
