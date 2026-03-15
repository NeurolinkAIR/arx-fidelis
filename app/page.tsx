export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --red: #cc0000; --red2: #e00000;
          --dark: #1a1a1a; --text: #2d2d2d;
          --white: #ffffff; --beige: #f7f4ef;
          --beige2: #ede9e2; --muted: #6b7280;
          --light: #e8e4df; --silver: #9aa5b4;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Jost', sans-serif; background: var(--white); color: var(--text); overflow-x: hidden; }

        /* NAV */
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 0 4rem; height: 70px; background: var(--white); border-bottom: 1px solid var(--light); }
        .nav-logo { height: 44px; width: auto; object-fit: contain; }
        nav ul { list-style: none; display: flex; gap: 2.5rem; align-items: center; }
        nav ul a { text-decoration: none; color: var(--muted); font-size: .78rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; transition: color .2s; }
        nav ul a:hover { color: var(--red); }
        .nav-contact { background: var(--red); color: var(--white) !important; padding: .4rem 1.2rem; }
        .nav-contact:hover { background: var(--red2) !important; }

        /* HERO */
        .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; }
        .hero-left { background: var(--dark); display: flex; flex-direction: column; justify-content: center; padding: 8rem 4rem 4rem; position: relative; overflow: hidden; }
        .hero-left::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(204,0,0,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,.04) 1px, transparent 1px); background-size: 50px 50px; }
        .hero-logo { height: 90px; width: auto; max-width: 250px; object-fit: contain; margin-bottom: 3rem; position: relative; z-index: 1; animation: fadeUp .8s ease both; mix-blend-mode: screen; }
        .hero-label { display: inline-flex; align-items: center; gap: .6rem; color: var(--silver); font-size: .7rem; font-weight: 500; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 1.5rem; position: relative; z-index: 1; animation: fadeUp .8s .1s ease both; }
        .hero-label::before { content: ''; width: 24px; height: 1px; background: var(--red); }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.4rem, 4vw, 4rem); font-weight: 700; color: var(--white); line-height: 1.1; position: relative; z-index: 1; animation: fadeUp .8s .2s ease both; }
        .hero h1 em { font-style: italic; color: rgba(255,100,100,.9); }
        .hero-line { width: 50px; height: 2px; background: var(--red); margin: 2rem 0; position: relative; z-index: 1; animation: fadeUp .8s .3s ease both; }
        .hero-sub { font-size: .95rem; font-weight: 300; color: rgba(255,255,255,.6); line-height: 1.9; max-width: 420px; position: relative; z-index: 1; animation: fadeUp .8s .4s ease both; }
        .hero-cta { margin-top: 2.5rem; display: flex; gap: 1rem; position: relative; z-index: 1; animation: fadeUp .8s .5s ease both; }
        .hero-right { background: var(--beige); display: flex; flex-direction: column; justify-content: center; padding: 8rem 4rem 4rem; }
        .hero-infos { display: flex; flex-direction: column; gap: 1.5rem; }
        .hero-info-item { display: flex; gap: 1.2rem; align-items: flex-start; padding-bottom: 1.5rem; border-bottom: 1px solid var(--light); }
        .hero-info-item:last-child { border-bottom: none; padding-bottom: 0; }
        .hi-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: .1rem; }
        .hi-label { font-size: .68rem; font-weight: 700; color: var(--red); text-transform: uppercase; letter-spacing: .1em; margin-bottom: .3rem; }
        .hi-value { font-size: .95rem; color: var(--text); font-weight: 500; line-height: 1.5; }
        .hi-value a { color: var(--text); text-decoration: none; } .hi-value a:hover { color: var(--red); }
        @keyframes fadeUp { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: translateY(0); } }

        /* BOUTONS */
        .btn { display: inline-block; padding: .8rem 2rem; font-size: .78rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; text-decoration: none; border: none; cursor: pointer; transition: all .2s; }
        .btn:hover { transform: translateY(-1px); }
        .btn-red { background: var(--red); color: var(--white); } .btn-red:hover { background: var(--red2); }
        .btn-ghost { border: 1px solid rgba(255,255,255,.25); color: rgba(255,255,255,.8); background: transparent; } .btn-ghost:hover { border-color: rgba(255,255,255,.5); }
        .btn-dark { background: var(--dark); color: var(--white); } .btn-dark:hover { background: #2a2a2a; }

        /* SECTIONS */
        section { padding: 6rem 4rem; }
        .section-inner { max-width: 1200px; margin: 0 auto; }
        .section-header { margin-bottom: 4rem; max-width: 600px; }
        .section-tag { display: inline-flex; align-items: center; gap: .5rem; font-size: .68rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--red); margin-bottom: .8rem; }
        .section-tag::before { content: ''; width: 20px; height: 1px; background: var(--red); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; line-height: 1.2; color: var(--text); }
        .section-title span { color: var(--red); font-style: italic; }
        .section-desc { margin-top: .8rem; color: var(--muted); font-size: .9rem; line-height: 1.8; }

        /* SERVICES AVEC PHOTOS */
        .services { background: var(--white); }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .service-card { position: relative; overflow: hidden; background: var(--beige); border-bottom: 3px solid transparent; transition: border-color .3s, transform .3s, box-shadow .3s; }
        .service-card:hover { border-color: var(--red); transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,.1); }
        .service-photo { width: 100%; height: 180px; object-fit: cover; display: block; transition: transform .4s; }
        .service-card:hover .service-photo { transform: scale(1.04); }
        .service-body { padding: 1.6rem; }
        .si-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 700; color: rgba(0,0,0,.07); line-height: 1; margin-bottom: .6rem; }
        .service-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: .4rem; line-height: 1.3; }
        .si-line { width: 24px; height: 2px; background: var(--red); margin: .6rem 0; opacity: 0; transition: opacity .2s; }
        .service-card:hover .si-line { opacity: 1; }
        .service-card p { font-size: .82rem; color: var(--muted); line-height: 1.7; }

        /* A PROPOS */
        .about { background: var(--beige); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .about-img-wrap { position: relative; }
        .about-img-wrap img { width: 100%; height: 520px; object-fit: cover; display: block; }
        .about-badge { position: absolute; bottom: -1px; right: -1px; background: var(--red); color: var(--white); padding: 1.8rem 2rem; }
        .about-badge strong { display: block; font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 700; line-height: 1; }
        .about-badge span { font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; opacity: .85; }
        .about-text p { font-size: .9rem; color: var(--muted); line-height: 1.9; margin-bottom: 1rem; }
        .about-person { margin-top: 2.5rem; padding: 1.8rem; background: var(--white); border-left: 3px solid var(--red); display: flex; align-items: center; gap: 1.2rem; }
        .person-avatar { width: 56px; height: 56px; background: var(--beige2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
        .person-info h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 700; color: var(--text); }
        .person-info p  { font-size: .82rem; color: var(--muted); line-height: 1.5; margin-top: .2rem; }
        .person-tag { display: inline-block; margin-top: .5rem; background: var(--red); color: var(--white); font-size: .65rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; padding: .2rem .6rem; }

        /* ORIAS */
        .orias { background: var(--dark); padding: 5rem 4rem; }
        .orias-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .orias-text .section-tag { color: rgba(255,255,255,.4); }
        .orias-text .section-tag::before { background: var(--red); }
        .orias-text .section-title { color: var(--white); }
        .orias-text p { margin-top: 1rem; color: rgba(255,255,255,.55); line-height: 1.9; font-size: .9rem; }
        .orias-card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-top: 3px solid var(--red); padding: 2.5rem; }
        .orias-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: var(--white); margin-bottom: 1.5rem; }
        .orias-rows { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
        .orias-row { display: grid; grid-template-columns: 100px 1fr; gap: 1rem; align-items: baseline; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,.06); }
        .orias-row:last-child { border-bottom: none; padding-bottom: 0; }
        .or-label { font-size: .68rem; font-weight: 700; color: rgba(255,255,255,.3); text-transform: uppercase; letter-spacing: .1em; }
        .or-value { font-size: .9rem; color: rgba(255,255,255,.8); }

        /* CONTACT */
        .contact { background: var(--beige); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
        .contact-details h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 700; color: var(--text); margin-bottom: 2rem; }
        .contact-list { display: flex; flex-direction: column; gap: 1.5rem; }
        .contact-row { display: flex; gap: 1rem; align-items: flex-start; }
        .cr-icon { width: 40px; height: 40px; background: var(--white); border: 1px solid var(--light); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
        .cr-label { font-size: .68rem; font-weight: 700; color: var(--red); text-transform: uppercase; letter-spacing: .1em; margin-bottom: .25rem; }
        .cr-value { font-size: .92rem; color: var(--text); font-weight: 500; line-height: 1.5; }
        .cr-value a { color: var(--text); text-decoration: none; } .cr-value a:hover { color: var(--red); }
        .contact-form-wrap { background: var(--white); padding: 3rem; border-top: 3px solid var(--red); }
        .contact-form-wrap h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; color: var(--text); margin-bottom: 1.8rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group { margin-bottom: 1rem; }
        .form-group label { display: block; font-size: .68rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: .1em; margin-bottom: .4rem; }
        .form-group input, .form-group textarea, .form-group select { width: 100%; padding: .75rem 1rem; border: 1px solid var(--light); font-family: 'Jost', sans-serif; font-size: .88rem; color: var(--text); background: var(--beige); transition: border-color .2s; outline: none; }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: var(--red); background: var(--white); }
        .form-group textarea { resize: vertical; min-height: 100px; }

        /* FOOTER */
        footer { background: #111; padding: 2.5rem 4rem; }
        .footer-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
        .footer-logo { height: 40px; filter: brightness(0) invert(1); opacity: .6; }
        .footer-mid { font-size: .78rem; color: rgba(255,255,255,.35); line-height: 1.8; text-align: center; }
        .footer-right { font-size: .78rem; color: rgba(255,255,255,.3); text-align: right; }
        footer a { color: rgba(255,255,255,.3); text-decoration: none; } footer a:hover { color: rgba(255,255,255,.7); }

        @media (max-width: 900px) {
          nav ul { display: none; } nav { padding: 0 2rem; }
          .hero { grid-template-columns: 1fr; }
          .hero-left, .hero-right { padding: 5rem 2rem 3rem; }
          .services-grid { grid-template-columns: 1fr 1fr; }
          .about-grid, .orias-inner, .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          section { padding: 4rem 2rem; }
          .orias { padding: 4rem 2rem; }
          .form-row { grid-template-columns: 1fr; }
          .about-badge { right: 0; bottom: 0; }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet"/>

      {/* NAV */}
      <nav>
        <img src="/logo-arx.png" alt="ARX Fidelis" className="nav-logo"/>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#orias">ORIAS</a></li>
          <li><a href="#contact" className="nav-contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <img src="/logo-arx.png" alt="ARX Fidelis" className="hero-logo"/>
          <div className="hero-label">Courtier en assurance — Hirsingue</div>
          <h1>Notre Engagement<br/><em>pérennise</em><br/>votre Univers</h1>
          <div className="hero-line"></div>
          <p className="hero-sub">Cabinet de courtage indépendant, Arx Fidelis vous accompagne dans la protection de vos activités, de votre patrimoine et de vos proches.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-red">Prendre contact</a>
            <a href="#services" className="btn btn-ghost">Nos services</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-infos">
            <div className="hero-info-item">
              <span className="hi-icon">📍</span>
              <div><div className="hi-label">Adresse</div><div className="hi-value">15 rue du Général de Gaulle<br/>68560 Hirsingue</div></div>
            </div>
            <div className="hero-info-item">
              <span className="hi-icon">📞</span>
              <div><div className="hi-label">Téléphone</div><div className="hi-value"><a href="tel:0670699650">06 70 69 96 50</a></div></div>
            </div>
            <div className="hero-info-item">
              <span className="hi-icon">📧</span>
              <div><div className="hi-label">Email</div><div className="hi-value"><a href="mailto:direction@arx-fidelis.fr">direction@arx-fidelis.fr</a></div></div>
            </div>
            <div className="hero-info-item">
              <span className="hi-icon">🔏</span>
              <div><div className="hi-label">ORIAS</div><div className="hi-value"><a href="https://www.orias.fr" target="_blank">N° 14005505 — Vérifier ↗</a></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Nos expertises</div>
            <h2 className="section-title">Des solutions <span>adaptées</span> à chaque besoin</h2>
            <p className="section-desc">En tant que courtier indépendant, nous sélectionnons pour vous les meilleures garanties sur le marché, adaptées à votre profil et à votre activité.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <img src="/gettyimages-2190572397-612x612.jpg" alt="Assurance Entreprise" className="service-photo"/>
              <div className="service-body">
                <div className="si-num">01</div>
                <h3>Assurance Entreprise</h3>
                <div className="si-line"></div>
                <p>Multirisque professionnelle, RC exploitation, protection de vos locaux, matériels et marchandises.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/gettyimages-1378269637-612x612.jpg" alt="Assurance Transport" className="service-photo"/>
              <div className="service-body">
                <div className="si-num">02</div>
                <h3>Assurance Transport</h3>
                <div className="si-line"></div>
                <p>Couverture de vos marchandises transportées, flotte de véhicules professionnels, RC transporteur.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/gettyimages-1035150690-612x612.jpg" alt="Assurance Construction" className="service-photo"/>
              <div className="service-body">
                <div className="si-num">03</div>
                <h3>Assurance Construction</h3>
                <div className="si-line"></div>
                <p>Dommages-ouvrage, responsabilité décennale, tous risques chantier pour vos projets immobiliers.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/gettyimages-1783705805-612x612.jpg" alt="Assurance Dirigeants" className="service-photo"/>
              <div className="service-body">
                <div className="si-num">04</div>
                <h3>Assurance des Dirigeants</h3>
                <div className="si-line"></div>
                <p>Protection du mandataire social, RC des dirigeants, prévoyance et garanties spécifiques aux cadres.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/gettyimages-1468025006-612x612.jpg" alt="Garantie Financière" className="service-photo"/>
              <div className="service-body">
                <div className="si-num">05</div>
                <h3>Garantie Financière</h3>
                <div className="si-line"></div>
                <p>Garanties réglementaires pour agents immobiliers, administrateurs de biens et professions réglementées.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/gettyimages-1317277259-612x612.jpg" alt="Assurance Transaction" className="service-photo"/>
              <div className="service-body">
                <div className="si-num">06</div>
                <h3>Assurance Transaction</h3>
                <div className="si-line"></div>
                <p>Protection des transactions immobilières, garantie des actes notariés et couverture des risques liés aux cessions.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/gettyimages-1346252956-612x612.jpg" alt="Assurance Crédit" className="service-photo"/>
              <div className="service-body">
                <div className="si-num">07</div>
                <h3>Assurance Crédit</h3>
                <div className="si-line"></div>
                <p>Protection contre les impayés, couverture du risque client, sécurisation de votre trésorerie et de vos créances.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/1200x680.webp" alt="Assurance Particuliers" className="service-photo"/>
              <div className="service-body">
                <div className="si-num">08</div>
                <h3>Assurance des Particuliers</h3>
                <div className="si-line"></div>
                <p>Habitation, automobile, prévoyance individuelle, protection juridique et assurance vie.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/gettyimages-1783705805-612x612__1_.jpg" alt="Collective Santé" className="service-photo"/>
              <div className="service-body">
                <div className="si-num">09</div>
                <h3>Collective Santé</h3>
                <div className="si-line"></div>
                <p>Mutuelle collective obligatoire, prévoyance groupe, solutions de santé pour vos salariés.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img src="/arbre-arx.jpg" alt="Notre engagement"/>
              <div className="about-badge"><strong>ARX</strong><span>Fidelis</span></div>
            </div>
            <div>
              <div className="section-tag">À propos</div>
              <h2 className="section-title">Un courtier <span>indépendant</span><br/>à vos côtés</h2>
              <div style={{marginTop:'1.5rem'}}>
                <p className="about-text">Arx Fidelis est un cabinet de courtage en assurance indépendant, basé à Hirsingue en Alsace. Notre indépendance nous permet de comparer objectivement les offres du marché et de vous proposer les solutions les plus adaptées.</p>
                <p className="about-text">Immatriculé à l&apos;ORIAS sous le numéro 14005505, notre cabinet respecte des obligations strictes de compétence professionnelle, d&apos;honorabilité et de capacité financière.</p>
                <p className="about-text">Nous intervenons auprès des entreprises, des professionnels de l&apos;immobilier et des particuliers, avec une approche personnalisée et un accompagnement sur le long terme.</p>
              </div>
              <div className="about-person">
                <div className="person-avatar">👨‍💼</div>
                <div className="person-info">
                  <h4>Cédric Lebas</h4>
                  <p>Fondateur & Courtier en assurance<br/>Négociateur immobilier — Étude notariale d&apos;Hirsingue</p>
                  <span className="person-tag">ORIAS N° 14005505</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIAS */}
      <section className="orias" id="orias">
        <div className="orias-inner">
          <div className="orias-text">
            <div className="section-tag">Réglementation</div>
            <h2 className="section-title" style={{color:'white'}}>Immatriculé à <span>l&apos;ORIAS</span></h2>
            <p>L&apos;ORIAS est le registre officiel des intermédiaires en assurance en France. Cette immatriculation atteste que notre cabinet satisfait aux exigences légales de compétence et d&apos;honorabilité.</p>
            <p style={{marginTop:'.8rem'}}>Vous pouvez vérifier notre immatriculation à tout moment en ligne sur le site officiel.</p>
            <a href="https://www.orias.fr" target="_blank" className="btn btn-red" style={{marginTop:'2rem', display:'inline-block'}}>Vérifier sur orias.fr ↗</a>
          </div>
          <div className="orias-card">
            <h3>🔏 Fiche ORIAS</h3>
            <div className="orias-rows">
              <div className="orias-row"><span className="or-label">Cabinet</span><span className="or-value">Arx Fidelis</span></div>
              <div className="orias-row"><span className="or-label">N° ORIAS</span><span className="or-value">14005505</span></div>
              <div className="orias-row"><span className="or-label">Responsable</span><span className="or-value">Cédric Lebas</span></div>
              <div className="orias-row"><span className="or-label">Adresse</span><span className="or-value">15 rue du Général de Gaulle, 68560 Hirsingue</span></div>
              <div className="orias-row"><span className="or-label">Téléphone</span><span className="or-value">06 70 69 96 50</span></div>
              <div className="orias-row"><span className="or-label">Catégorie</span><span className="or-value">Courtier en assurance (COA)</span></div>
            </div>
            <a href="https://www.orias.fr/welcome" target="_blank" className="btn btn-red" style={{width:'100%', textAlign:'center', display:'block'}}>Consulter le registre ORIAS</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Contact</div>
            <h2 className="section-title">Parlons de votre <span>projet</span></h2>
            <p className="section-desc">Contactez-nous pour un premier entretien gratuit et sans engagement.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-details">
              <h3>Nos coordonnées</h3>
              <div className="contact-list">
                <div className="contact-row"><div className="cr-icon">📍</div><div><div className="cr-label">Adresse</div><div className="cr-value">15 rue du Général de Gaulle<br/>68560 Hirsingue</div></div></div>
                <div className="contact-row"><div className="cr-icon">📞</div><div><div className="cr-label">Téléphone</div><div className="cr-value"><a href="tel:0670699650">06 70 69 96 50</a></div></div></div>
                <div className="contact-row"><div className="cr-icon">📧</div><div><div className="cr-label">Email</div><div className="cr-value"><a href="mailto:direction@arx-fidelis.fr">direction@arx-fidelis.fr</a></div></div></div>
                <div className="contact-row"><div className="cr-icon">🔏</div><div><div className="cr-label">ORIAS</div><div className="cr-value"><a href="https://www.orias.fr" target="_blank">N° 14005505 — Vérifier ↗</a></div></div></div>
              </div>
            </div>
            <div className="contact-form-wrap">
              <h3>Envoyer un message</h3>
              <div className="form-row">
                <div className="form-group"><label>Nom</label><input type="text" placeholder="Votre nom"/></div>
                <div className="form-group"><label>Prénom</label><input type="text" placeholder="Votre prénom"/></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Email</label><input type="email" placeholder="votre@email.fr"/></div>
                <div className="form-group"><label>Téléphone</label><input type="tel" placeholder="06 XX XX XX XX"/></div>
              </div>
              <div className="form-group">
                <label>Vous êtes</label>
                <select>
                  <option value="">Sélectionnez...</option>
                  <option>Un particulier</option>
                  <option>Une entreprise</option>
                  <option>Un professionnel de l&apos;immobilier</option>
                  <option>Un dirigeant</option>
                </select>
              </div>
              <div className="form-group"><label>Message</label><textarea placeholder="Décrivez votre besoin..."></textarea></div>
              <a href="mailto:direction@arx-fidelis.fr" className="btn btn-dark" style={{width:'100%', textAlign:'center', display:'block'}}>Envoyer le message</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <img src="/logo-arx.png" alt="ARX Fidelis" className="footer-logo"/>
          <div className="footer-mid">
            <div>15 rue du Général de Gaulle — 68560 Hirsingue</div>
            <div style={{marginTop:'.3rem'}}>06 70 69 96 50 — direction@arx-fidelis.fr</div>
          </div>
          <div className="footer-right">
            <div>© 2026 Arx Fidelis</div>
            <div style={{marginTop:'.3rem'}}><a href="https://www.orias.fr" target="_blank">ORIAS N° 14005505</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}
