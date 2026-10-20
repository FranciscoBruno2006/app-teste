function Navbar() {
    return(
        <nav className="navbar md:navbar-expand bg-1" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="">Affinity</a>
        <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDarkDrawer" aria-controls="navbarDarkDrawer" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <dialog className="drawer drawer-end" tabIndex="-1" id="navbarDarkDrawer" aria-labelledby="navbarDarkDrawerLabel">
          <div className="drawer-header">
            <h5 className="drawer-title" id="navbarDarkDrawerLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
          </div>
          <div className="drawer-body mb-2 md:mb-0">
            <ul className="nav navbar-nav me-auto">
              <li className="nav-item">
                <button className="nav-link active" type="button" data-bs-toggle="menu" aria-expanded="false">
                  Produto
                </button>
                <div className="menu">
                  <a className="menu-item d-flex flex-column align-items-start" href="#">Design Grafico
                    <p>Tudo o que é necessário para design vetorial e ilustrações digitais</p>
                  </a>
                  <a className="menu-item  d-flex flex-column align-items-start" href="#">Edição de fotos
                    <p>Ferramentas profissionais de edição e retoque de imagens</p>
                  </a>
                  <a className="menu-item  d-flex flex-column align-items-start" href="#">Layout de página
                    <p>As ferramentas mais poderosas de design e edição de fotos</p>
                  </a>
                  <a className="menu-item  d-flex flex-column align-items-start" href="#">Ilustração digital
                    <p>Ferramentas vetoriais e raster poderosas para ilustração digital</p>
                  </a>
                  <a className="menu-item  d-flex flex-column align-items-start" href="#">Design Tipográfico
                    <p>Controle total sobre cada detalhe da sua tipografia</p>
                  </a>
                  <a className="menu-item  d-flex flex-column align-items-start" href="#">Integração com o Canva
                    <p>Simplifique fluxos de trabalho com o Canva IA e a exportação fácil</p>
                  </a>
                  <a className="menu-item  d-flex flex-column align-items-start" href="#">Integração de Produtos
                    <p>Seus fluxos de trabalho profissionais em um único espaço criativo</p>

                  </a>
                  <a className="menu-item  d-flex flex-column align-items-start" href="#">Sobre o Affinity
                    <p>Feito para pessoas obcecadas pela criação, por pessoas que respeitam a criação</p>
                  </a>  
                </div>
              </li>
              <li className="nav-item">
                <button className="nav-link active" type="button" data-bs-toggle="menu" aria-expanded="false">
                  Descubra
                </button>
                <div className="menu">
                  <a className="menu-item" href="#">Inspiracao.af</a>
                  <a className="menu-item" href="#">Em destaque</a>
                  <a className="menu-item" href="#">Recursos de aprendizados</a>

                </div>
              </li>
              <li className="nav-item">
                <button className="nav-link active" type="button" data-bs-toggle="menu" aria-expanded="false">
                  Ajuda
                </button>
                
              </li>


            </ul>
            <form className="hstack gap-2 d-grid gap-2 md:d-flex md:justify-content-end" role="search">
              <button type="button" className="btn-solid theme-success">Obtenha o Affinity
                
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </nav>
    )
    
}
export default Navbar;
