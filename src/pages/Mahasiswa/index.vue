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
        <div class="card-shadow warning mb-3" v-if="!presensi && learning">
          <div class="p-3">
            <div
              class="d-flex flex-md-row flex-column justify-content-md-between align-items-md-center align-items-start"
            >
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
                class="btn btn-primary mt-3 mt-md-0"
                data-toggle="modal"
                data-backdrop="static"
                data-keyboard="false"
                @click="openModalPresensi"
              >
                Ambil Presensi
              </button>
            </div>
          </div>
        </div>

        <div class="card-shadow warning mb-3" v-else-if="!learning">
          <div class="p-3">
            <div
              class="d-flex flex-md-row flex-column justify-content-md-between align-items-md-center align-items-start"
            >
              <div>
                <div class="title-content text-danger">Verifikasi Wajah</div>
                <div class="sub-content mb-4">
                  Anda wajib melakukan verifikasi wajah sebelum melakukan
                  presensi!
                </div>
                <div class="third-content">
                  *Ambil gambar setengah badan Anda untuk melakukan Presensi
                  secara online!
                </div>
              </div>
              <button
                type="button"
                class="btn btn-primary mt-3 mt-md-0"
                data-toggle="modal"
                data-backdrop="static"
                data-keyboard="false"
                @click="openModalLearning"
              >
                Verifikasi
              </button>
            </div>
          </div>
        </div>

        <div class="card-shadow success mb-3" v-else>
          <div class="p-3">
            <div class="title-content text-success">Presensi Diterima</div>
            <div class="sub-content">
              Terima kasih, anda telah melakukan presensi hari ini.
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
            <div class="d-flex justify-content-between mb-4">
              <div>
                <h5 class="modal-title" id="exampleModalLabel">Presensi</h5>
                <div
                  class="d-flex align-items-center mt-2"
                  style="opacity: .7;"
                >
                  <i
                    class="fas fa-map-marked-alt me-2"
                    style="font-size: 20px;"
                  ></i
                  ><span id="location">Sedang memuat</span>
                </div>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="w-100">
              <video
                id="webcamPresensi"
                autoplay
                playsinline
                height="100"
              ></video>
              <canvas id="canvasPresensi" class="d-none"></canvas>
              <audio
                id="snapSoundPresensi"
                src="audio/snap.wav"
                preload="auto"
              ></audio>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <button type="button" class="btn btn-primary" @click="doPresensi">
                Ambil Presensi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="learningModal"
      tabindex="-1"
      no-close-on-backdrop
      no-close-on-keyboard
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body" id="widthModal">
            <div class="d-flex justify-content-between mb-4">
              <h5 class="modal-title" id="exampleModalLabel">
                Verifikasi Wajah
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="p-3 warning mb-3 d-flex align-items-center"
              style="border-radius: 7px;"
            >
              <i
                class="fas fa-exclamation-circle text-danger me-2"
                style="font-size: 26px;"
              ></i>
              <span style="font-size: 16px;">
                Pastikan anda berada di ruangan yang terang dan wajah di layar
                tertampil jelas.
              </span>
            </div>
            <div class="w-100 position-relative">
              <div
                v-if="statusCounter"
                :class="
                  `status-video ${
                    submitLearning && successLearning ? 'success' : 'ongoing'
                  } animate__animated animate__fadeIn animate__fast`
                "
              >
                <div v-if="counterLearning < 11">
                  Tahan posisi anda selama 10 detik!
                </div>
                <div
                  class="fw-bold"
                  style="font-size: 24px"
                  v-if="counterLearning < 12 && !successLearning"
                >
                  {{
                    counterLearning > 10
                      ? "Sedang Mengirim Data."
                      : counterLearning
                  }}
                </div>
                <div
                  class="fw-bold"
                  style="font-size: 24px"
                  v-if="submitLearning && successLearning"
                >
                  Data Berhasil Dikirim
                </div>
              </div>
              <video
                id="webcamLearning"
                autoplay
                playsinline
                height="100"
              ></video>
              <canvas id="canvasLearning" class="d-none"></canvas>
              <audio
                id="snapSoundLearning"
                src="audio/snap.wav"
                preload="auto"
              ></audio>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <button
                type="button"
                class="btn btn-primary"
                @click="doLearning"
                v-if="counterLearning == 0 && !statusCounter"
              >
                Verifikasi Wajah
              </button>
              <button type="button" class="btn btn-secondary" disabled v-else>
                Dalam Proses Verifikasi
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
      presensi: false,
      learning: false,
      location: {
        long: null,
        lat: null,
      },
      camPresensi: {
        webcamElement: null,
        canvasElement: null,
        snapSoundElement: null,
        webcam: null,
      },
      camLearning: {
        webcamElement: null,
        canvasElement: null,
        snapSoundElement: null,
        webcam: null,
      },
      address: null,
      counterLearning: 0,
      statusCounter: false,
      submitLearning: false,
      successLearning: false,
    };
  },
  methods: {
    setLocation(address) {
      this.address = address;
    },
    getLocation(longitude, latitude) {
      console.log(latitude);
      console.log(longitude);
      var address;
      var GEOCODING =
        "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
        latitude +
        "&longitude=" +
        longitude +
        "&localityLanguage=id";
      $.getJSON(GEOCODING).done(function(location) {
        console.log(location);

        address =
          location.localityInfo.administrative[4].name +
          ", " +
          location.localityInfo.administrative[3].name +
          ", " +
          location.localityInfo.administrative[2].name +
          ", " +
          location.localityInfo.administrative[1].name;

        console.log(address);

        $("#location").text(address);
      });

      console.log(this.address);
    },
    openModalPresensi() {
      $("#presensiModal").modal("show");

      this.camPresensi.webcam
        .start()
        .then((result) => {
          console.log("webcam started");
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      const dataLocation = (position) => {
        this.location.long = position.coords.longitude;
        this.location.lat = position.coords.latitude;

        this.getLocation(position.coords.longitude, position.coords.latitude);

        console.log(this.location);
      };

      if (window.navigator.geolocation) {
        console.log("bisa dong");
        window.navigator.geolocation.getCurrentPosition(
          dataLocation,
          console.log
        );
        console.log("Ambil lokasi berhasil");
      } else {
        alert("Ambil lokasi gagal");
      }
    },

    openModalLearning() {
      $("#learningModal").modal("show");

      this.camLearning.webcam
        .start()
        .then((result) => {
          console.log("webcam started");
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    doPresensi() {
      var picture1 = null;

      picture1 = this.camPresensi.webcam.snap();

      console.log(picture1.split(",")[1]);
    },

    doLearning() {
      this.statusCounter = true;
      // let count = 0;
      let arr = [];
      var picture1 = null;
      // var picture2 = null;
      // var picture3 = null;
      // var picture4 = null;
      // var picture5 = null;

      setInterval(() => {
        if (this.counterLearning < 11) {
          this.counterLearning++;
          console.log(this.counterLearning);
        }

        if (this.counterLearning == 11) {
          this.submitLearning = true;
        }
      }, 1000);

      setTimeout(() => {
        picture1 = this.camLearning.webcam.snap();
        this.successLearning = true;
        console.log(picture1);
      }, 13000);

      // setTimeout(() => {
      //   picture1 = this.camLearning.webcam.snap();
      // }, 2000);

      // setTimeout(() => {
      //   picture2 = this.camLearning.webcam.snap();
      // }, 4000);

      // setTimeout(() => {
      //   picture3 = this.camLearning.webcam.snap();
      // }, 6000);

      // setTimeout(() => {
      //   picture4 = this.camLearning.webcam.snap();
      // }, 8000);

      // setTimeout(() => {
      //   picture5 = this.camLearning.webcam.snap();
      // }, 10000);

      // arr = [
      //   picture1.split(",")[1],
      //   picture2.split(",")[1],
      //   picture3.split(",")[1],
      //   picture4.split(",")[1],
      //   picture5.split(",")[1],
      // ];

      console.log(arr);
    },
  },
  mounted() {
    this.width = $(document).width();
    this.camPresensi.webcamElement = document.getElementById("webcamPresensi");
    this.camPresensi.canvasElement = document.getElementById("canvasPresensi");
    this.camPresensi.snapSoundElement = document.getElementById(
      "snapSoundPresensi"
    );
    this.camPresensi.webcam = new Webcam(
      this.camPresensi.webcamElement,
      "user",
      this.camPresensi.canvasElement,
      this.camPresensi.snapSoundElement
    );

    this.camLearning.webcamElement = document.getElementById("webcamLearning");
    this.camLearning.canvasElement = document.getElementById("canvasLearning");
    this.camLearning.snapSoundElement = document.getElementById(
      "snapSoundLearning"
    );
    this.camLearning.webcam = new Webcam(
      this.camLearning.webcamElement,
      "user",
      this.camLearning.canvasElement,
      this.camLearning.snapSoundElement
    );

    var newCamPresensi = this.camPresensi.webcam;
    var presensi = document.getElementById("presensiModal");
    presensi.addEventListener("hidden.bs.modal", function(event) {
      // do something...
      console.log(event);
      newCamPresensi.stop();
    });

    var newCamLearning = this.camLearning.webcam;
    var learning = document.getElementById("learningModal");
    learning.addEventListener("hidden.bs.modal", function(event) {
      // do something...
      console.log(event);
      newCamLearning.stop();
    });

    $(document).ready(function() {
      $(".table").DataTable();
    });
  },
};
</script>
