
function Meio() {
  return (
    <section className="container-fluid text-center text-white py-5">
      <div className="d-flex flex-column align-items-center gap-4 py-5">

        <h1 className="display-1 fw-bold fst-italic">
          Crie livremente
        </h1>

        <p className="fs-4">
          Design profissional, edição de fotos e layout de páginas no mesmo app.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a
            href="#"
            className="btn-solid rounded-pill"
            style={{ backgroundColor: '#a4f276', color: '#111' }}
          >
            Obtenha grátis
          </a>

          <a
            href="#"
            className="btn-solid theme-secondary rounded-pill"
          >
            Adquira para empresas
          </a>
        </div>

        <p className="small">
          by <strong className="fs-3 fst-italic">Canva</strong>
        </p>

      </div>
    </section>
  )
}

export default Meio;
