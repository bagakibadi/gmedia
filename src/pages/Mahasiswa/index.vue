<template>
  <div class="dashboard">
    <NavbarMahasiswa :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="title-content">Presensi</div>
            </div>
          </div>
        </div>
        <div class="card-shadow warning mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <div class="title-content text-danger">Presensi Online</div>
                <div class="sub-content mb-4">
                  Anda belum melakukan Presensi hari ini!
                </div>
                <div class="third-content">
                  *Ambil gambar setengah badan Anda untuk melakukan Presensi
                  secara online!
                </div>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-backdrop="static"
                data-keyboard="false"
                data-target="#presensiModal"
                id="openModal"
              >
                Ambil Presensi
              </button>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">FOTO WAJAH</th>
                    <th scope="col">TANGGAL</th>
                    <th scope="col">JAM</th>
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
                            class="image-presensi d-flex align-items-center justify-content-center"
                          >
                            <img
                              src="../../assets/images/profile.jpeg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      30 Jul 2021
                    </td>
                    <td>
                      05:58:45 WIB
                    </td>
                    <td>
                      <div class="badge-custom success text-success">Masuk</div>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-warning btn-sm text-white"
                      >
                        <i class="fas fa-pencil-alt"></i>
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

    <div
      class="modal fade"
      id="presensiModal"
      tabindex="-1"
      no-close-on-backdrop
      no-close-on-keyboard
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body" id="widthModal">
            <div class="d-flex justify-content-between mb-5">
              <h5 class="modal-title" id="exampleModalLabel">Presensi</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="w-100">
              <video id="webcam" autoplay playsinline height="480"></video>
              <canvas id="canvas" class="d-none"></canvas>
              <audio id="snapSound" src="audio/snap.wav" preload="auto"></audio>
            </div>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-primary" id="takePicture">
                Ambil Presensi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-env jquery */
import Webcam from "webcam-easy";

export default {
  data: function() {
    return {
      width: null,
      widthModal: null,
    };
  },
  methods: {},
  mounted() {
    this.width = $(document).width();

    const webcamElement = document.getElementById("webcam");
    const canvasElement = document.getElementById("canvas");
    const snapSoundElement = document.getElementById("snapSound");
    const webcam = new Webcam(
      webcamElement,
      "user",
      canvasElement,
      snapSoundElement
    );

    $("#openModal").click(function() {
      $("#presensiModal").modal("show");

      webcam
        .start()
        .then((result) => {
          console.log("webcam started");
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      if (window.navigator.geolocation) {
        console.log("bisa dong");
        window.navigator.geolocation.getCurrentPosition(
          console.log,
          console.log
        );
      }
    });

    $("#takePicture").click(function() {
      var picture1 = null;
      var picture2 = null;
      var picture3 = null;
      var picture4 = null;
      var picture5 = null;

      setTimeout(function() {
        picture1 = webcam.snap();
      }, 1000);
      setTimeout(function() {
        picture2 = webcam.snap();
      }, 2000);
      setTimeout(function() {
        picture3 = webcam.snap();
      }, 3000);
      setTimeout(function() {
        picture4 = webcam.snap();
      }, 4000);
      setTimeout(function() {
        picture5 = webcam.snap();
      }, 5000);

      setTimeout(function() {
        console.log(picture1, picture2, picture3, picture4, picture5);
      }, 6000);
    });

    var myModalEl = document.getElementById("presensiModal");
    myModalEl.addEventListener("hidden.bs.modal", function(event) {
      // do something...
      console.log(event);
      webcam.stop();
    });

    $(document).ready(function() {
      $(".table").DataTable();
    });
  },
};
</script>
