<template>
  <!-- Start: Login Form Basic -->
  <section class="position-relative py-4 py-xl-5">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-xl-4">
          <div class="card mb-5">
            <div
              class="card-body d-flex flex-column align-items-center"
              style="border-radius: 20px"
            >
              <div
                class="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"
                style="background:  #b7642d"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  class="bi bi-person"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                  ></path>
                </svg>
              </div>
              <form class="text-center" method="post">
                <div class="mb-3">
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    placeholder="Correo"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                    minlength="8"
                    maxlength="10"
                  />
                </div>
                <div class="mb-3">
                  <button
                    class="btn btn-primary d-block w-100"
                    style="background:  #b7642d; border-style: none;"
                  >
                    Entrar
                  </button>
                </div>
                <!-- <router-link class="link" to="/Registro">
                <p class="text-muted">¿No esta registrado? Regístrese&nbsp;</p>
              </router-link> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End: Login Form Basic -->
</template>

<style>

</style>
