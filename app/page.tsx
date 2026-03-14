export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --red:     #9b1c1c;
          --red2:    #c0392b;
          --silver:  #8a9ab0;
          --silver2: #b0bcc8;
          --dark:    #1e1e1e;
          --text:    #2d2d2d;
          --white:   #ffffff;
          --beige:   #f7f4ef;
          --beige2:  #ede9e2;
          --muted:   #6b7280;
          --light:   #e8e4df;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Jost', sans-serif; background: var(--white); color: var(--text); overflow-x: hidden; }

        /* NAV */
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 0 4rem; height: 72px; background: rgba(247,244,239,.97); border-bottom: 1px solid var(--light); box-shadow: 0 1px 12px rgba(0,0,0,.06); }
        .nav-brand { display: flex; align-items: center; gap: 1rem; }
        .nav-logo-box { width: 40px; height: 40px; background: var(--red); display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 700; color: var(--white); }
        .nav-name { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 600; color: var(--text); letter-spacing: .04em; }
        .nav-name span { color: var(--red); }
        nav ul { list-style: none; display: flex; gap: 2.5rem; align-items: center; }
        nav ul a { text-decoration: none; color: var(--muted); font-size: .82rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; transition: color .2s; }
        nav ul a:hover { color: var(--red); }
        .nav-orias { background: var(--red) !important; color: var(--white) !important; padding: .45rem 1.2rem; }
        .nav-orias:hover { background: var(--red2) !important; color: var(--white) !important; }

        /* HERO */
        .hero { min-height: 100vh; background: var(--beige); display: grid; grid-template-columns: 1fr 1fr; align-items: center; padding: 8rem 4rem 4rem; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(155,28,28,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(155,28,28,.04) 1px, transparent 1px); background-size: 60px 60px; }
        .hero-left { position: relative; z-index: 2; }
        .hero-tag { display: inline-flex; align-items: center; gap: .6rem; border: 1px solid var(--light); color: var(--silver); font-size: .72rem; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; padding: .4rem 1rem; margin-bottom: 2rem; animation: fadeUp .8s ease both; }
        .hero-tag::before { content: ''; width: 20px; height: 1px; background: var(--red); }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 5vw, 5.5rem); font-weight: 700; color: var(--text); line-height: 1.05; animation: fadeUp .8s .1s ease both; }
        .hero h1 em { font-style: italic; color: var(--red); }
        .hero-divider { width: 60px; height: 2px; background: var(--red); margin: 1.8rem 0; animation: fadeUp .8s .2s ease both; }
        .hero-sub { font-size: 1rem; font-weight: 300; color: var(--muted); line-height: 1.8; max-width: 480px; animation: fadeUp .8s .3s ease both; }
        .hero-address { margin-top: 1.5rem; display: flex; align-items: flex-start; gap: .8rem; animation: fadeUp .8s .4s ease both; }
        .hero-address .icon { color: var(--red); }
        .hero-address p { font-size: .9rem; color: var(--muted); line-height: 1.6; }
        .hero-cta { margin-top: 2.5rem; display: flex; gap: 1rem; flex-wrap: wrap; animation: fadeUp .8s .5s ease both; }
        .hero-right { position: relative; z-index: 2; display: flex; justify-content: center; align-items: center; }
        .hero-shield { width: 300px; height: 360px; position: relative; }
        .shield-svg { width: 100%; height: 100%; opacity: .2; }
        .hero-cards { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; gap: 1rem; padding: 2rem; }
        .hero-card { background: var(--white); border: 1px solid var(--light); border-left: 3px solid var(--red); padding: 1rem 1.2rem; box-shadow: 0 2px 10px rgba(0,0,0,.05); animation: fadeUp .8s ease both; }
        .hero-card:nth-child(1){animation-delay:.3s} .hero-card:nth-child(2){animation-delay:.45s} .hero-card:nth-child(3){animation-delay:.6s}
        .hero-card h4 { font-size: .78rem; font-weight: 600; color: var(--red); letter-spacing: .08em; text-transform: uppercase; margin-bottom: .3rem; }
        .hero-card p  { font-size: .85rem; color: var(--muted); line-height: 1.5; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }

        /* BOUTONS */
        .btn { display: inline-block; padding: .85rem 2.2rem; font-size: .82rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; text-decoration: none; border: none; cursor: pointer; transition: all .25s; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.12); }
        .btn-red     { background: var(--red); color: var(--white); }
        .btn-red:hover { background: var(--red2); }
        .btn-outline { border: 1px solid var(--red); color: var(--red); background: transparent; }
        .btn-outline:hover { background: var(--red); color: var(--white); }
        .btn-dark    { background: var(--text); color: var(--white); }
        .btn-dark:hover { background: #3a3a3a; }

        /* SECTIONS */
        section { padding: 6rem 4rem; }
        .section-inner { max-width: 1200px; margin: 0 auto; }
        .section-header { margin-bottom: 3.5rem; }
        .section-label { display: inline-flex; align-items: center; gap: .6rem; font-size: .72rem; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: var(--red); margin-bottom: .8rem; }
        .section-label::before { content: ''; width: 24px; height: 1px; background: var(--red); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; line-height: 1.15; color: var(--text); }
        .section-title span { color: var(--red); font-style: italic; }
        .section-sub { margin-top: .8rem; color: var(--muted); font-size: .95rem; line-height: 1.8; max-width: 580px; }

        /* SERVICES */
        .services { background: var(--white); }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
        .service-card { background: var(--beige); padding: 2.4rem; border-bottom: 3px solid transparent; transition: border-color .3s, transform .3s, box-shadow .3s; }
        .service-card:hover { border-color: var(--red); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(155,28,28,.08); }
        .service-icon { font-size: 2rem; margin-bottom: 1.2rem; }
        .service-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 700; color: var(--text); margin-bottom: .6rem; }
        .service-card p  { font-size: .88rem; color: var(--muted); line-height: 1.75; }

        /* A PROPOS */
        .about { background: var(--beige); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .about-left p { font-size: .95rem; color: var(--muted); line-height: 1.9; margin-bottom: 1rem; }
        .about-person { margin-top: 2rem; padding: 2rem; background: var(--white); border-left: 4px solid var(--red); display: flex; align-items: center; gap: 1.4rem; box-shadow: 0 2px 12px rgba(0,0,0,.05); }
        .person-avatar { width: 64px; height: 64px; background: var(--beige2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0; }
        .person-info h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 700; color: var(--text); }
        .person-info p  { font-size: .85rem; color: var(--muted); margin-top: .2rem; }
        .person-tag { display: inline-block; margin-top: .5rem; background: var(--red); color: var(--white); font-size: .7rem; font-weight: 500; letter-spacing: .08em; text-transform: uppercase; padding: .25rem .7rem; }
        .about-right { display: flex; flex-direction: column; gap: 1.2rem; }
        .value-item { display: flex; gap: 1.2rem; align-items: flex-start; padding: 1.4rem; background: var(--white); border: 1px solid var(--light); transition: border-color .2s, box-shadow .2s; }
        .value-item:hover { border-color: var(--red); box-shadow: 0 4px 16px rgba(155,28,28,.06); }
        .value-num { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 700; color: rgba(155,28,28,.15); line-height: 1; flex-shrink: 0; width: 40px; }
        .value-item h4 { font-size: .9rem; font-weight: 600; color: var(--text); margin-bottom: .3rem; }
        .value-item p  { font-size: .85rem; color: var(--muted); line-height: 1.65; }

        /* ORIAS */
        .orias { background: var(--beige2); }
        .orias-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .orias-text .section-title span { color: var(--red); }
        .orias-text p { margin-top: 1rem; color: var(--muted); line-height: 1.8; font-size: .95rem; }
        .orias-box { background: var(--white); border: 1px solid var(--light); border-top: 4px solid var(--red); padding: 2.5rem; box-shadow: 0 4px 24px rgba(0,0,0,.06); }
        .orias-box h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: var(--text); margin-bottom: 1.2rem; }
        .orias-info { display: flex; flex-direction: column; gap: .8rem; margin-bottom: 1.8rem; }
        .orias-row { display: flex; gap: .8rem; align-items: flex-start; }
        .or-icon { color: var(--red); flex-shrink: 0; }
        .orias-row h5 { font-size: .75rem; font-weight: 600; color: var(--silver); text-transform: uppercase; letter-spacing: .08em; }
        .orias-row p  { font-size: .9rem; color: var(--text); margin-top: .1rem; }

        /* CONTACT */
        .contact { background: var(--white); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .contact-info h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 700; color: var(--text); margin-bottom: 1.5rem; }
        .contact-items { display: flex; flex-direction: column; gap: 1.2rem; }
        .contact-item { display: flex; gap: 1rem; align-items: flex-start; }
        .ci-icon { width: 44px; height: 44px; background: var(--beige); border: 1px solid var(--light); color: var(--red); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
        .contact-item h4 { font-size: .72rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .08em; }
        .contact-item p  { font-size: .95rem; color: var(--text); font-weight: 500; margin-top: .2rem; line-height: 1.5; }
        .contact-item a  { color: var(--red); text-decoration: none; }
        .contact-item a:hover { text-decoration: underline; }
        .contact-form { background: var(--beige); padding: 2.5rem; border: 1px solid var(--light); }
        .contact-form h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: var(--text); margin-bottom: 1.5rem; }
        .form-group { margin-bottom: 1.2rem; }
        .form-group label { display: block; font-size: .75rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .08em; margin-bottom: .4rem; }
        .form-group input, .form-group textarea { width: 100%; padding: .8rem 1rem; border: 1px solid var(--light); font-family: 'Jost', sans-serif; font-size: .9rem; color: var(--text); background: var(--white); transition: border-color .2s; outline: none; }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--red); }
        .form-group textarea { resize: vertical; min-height: 110px; }

        /* FOOTER */
        footer { background: var(--text); color: rgba(255,255,255,.5); padding: 2rem 4rem; display: flex; align-items: center; justify-content: space-between; font-size: .8rem; flex-wrap: wrap; gap: 1rem; }
        .footer-brand { font-family: 'Cormorant Garamond', serif; color: var(--silver2); font-size: 1rem; }
        footer a { color: rgba(255,255,255,.4); text-decoration: none; }
        footer a:hover { color: var(--silver2); }

        @media (max-width: 900px) {
          nav ul { display: none; }
          .hero { grid-template-columns: 1fr; padding: 7rem 2rem 3rem; }
          .hero-right { display: none; }
          .about-grid, .orias-inner, .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          section { padding: 4rem 2rem; }
          nav { padding: 0 2rem; }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet"/>

      {/* NAV */}
      <nav>
        <div className="nav-brand">
          <div className="nav-logo-box">A</div>
          <div className="nav-name">Arx <span>Fidelis</span></div>
        </div>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#orias">ORIAS</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://www.orias.fr" target="_blank" className="nav-orias">Vérifier ORIAS</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">Courtier en assurance — Hirsingue</div>
          <h1>Protégez ce qui<br/>vous est <em>essentiel</em></h1>
          <div className="hero-divider"></div>
          <p className="hero-sub">Arx Fidelis vous accompagne dans le choix et la gestion de vos assurances. Des solutions personnalisées, adaptées à votre situation.</p>
          <div className="hero-address">
            <span className="icon">📍</span>
            <p>15 rue du Général de Gaulle<br/>68130 Hirsingue</p>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-red">Nous contacter</a>
            <a href="#services" className="btn btn-outline">Nos services</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-shield">
            <svg className="shield-svg" viewBox="0 0 200 240" fill="none">
              <path d="M100 10 L190 50 L190 130 Q190 200 100 230 Q10 200 10 130 L10 50 Z" stroke="#9b1c1c" strokeWidth="3" fill="none"/>
              <path d="M100 30 L170 62 L170 128 Q170 188 100 210 Q30 188 30 128 L30 62 Z" stroke="#8a9ab0" strokeWidth="1.5" fill="none" opacity=".6"/>
            </svg>
            <div className="hero-cards">
              <div className="hero-card"><h4>🏠 Habitation</h4><p>Protection complète de votre logement</p></div>
              <div className="hero-card"><h4>🚗 Auto & Mobilité</h4><p>Couverture adaptée à tous vos véhicules</p></div>
              <div className="hero-card"><h4>💼 Prévoyance</h4><p>Sécurisez l&apos;avenir de vos proches</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Nos expertises</div>
            <h2 className="section-title">Des solutions <span>sur mesure</span></h2>
            <p className="section-sub">Nous analysons vos besoins pour vous proposer les couvertures les plus adaptées à votre profil et à votre budget.</p>
          </div>
          <div className="services-grid">
            <div className="service-card"><div className="service-icon">🏠</div><h3>Assurance Habitation</h3><p>Protection de votre résidence principale, secondaire ou en location. Couverture incendie, dégâts des eaux, vol et responsabilité civile.</p></div>
            <div className="service-card"><div className="service-icon">🚗</div><h3>Assurance Auto</h3><p>Formules au tiers, intermédiaires ou tous risques. Solutions pour tous profils de conducteurs.</p></div>
            <div className="service-card"><div className="service-icon">❤️</div><h3>Santé & Prévoyance</h3><p>Complémentaires santé individuelles et collectives. Protection en cas d&apos;arrêt de travail, invalidité ou décès.</p></div>
            <div className="service-card"><div className="service-icon">💼</div><h3>Assurance Professionnelle</h3><p>Responsabilité civile professionnelle, protection de vos locaux et de votre matériel.</p></div>
            <div className="service-card"><div className="service-icon">🌿</div><h3>Assurance Agricole</h3><p>Couverture spécifique pour les exploitations agricoles. Protection des récoltes, du bétail et des équipements.</p></div>
            <div className="service-card"><div className="service-icon">📋</div><h3>Audit & Conseil</h3><p>Analyse complète de vos contrats existants. Recommandations pour optimiser vos couvertures.</p></div>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-left">
              <div className="section-label">À propos</div>
              <h2 className="section-title">Un courtier <span>de confiance</span><br/>à vos côtés</h2>
              <p style={{marginTop:'1.2rem'}}>Arx Fidelis est un cabinet de courtage en assurance indépendant, basé à Hirsingue en Alsace. Notre indépendance nous permet de comparer les offres du marché pour vous proposer les meilleures solutions.</p>
              <p>En tant que courtier immatriculé à l&apos;ORIAS sous le numéro 14005505, nous respectons des obligations strictes de compétence et d&apos;honorabilité.</p>
              <p>Notre approche repose sur l&apos;écoute, la proximité et un accompagnement personnalisé tout au long de votre contrat.</p>
              <div className="about-person">
                <div className="person-avatar">👨‍💼</div>
                <div className="person-info">
                  <h4>Cédric Lebas</h4>
                  <p>Fondateur & Courtier en assurance</p>
                  <p>Négociateur immobilier — Étude notariale d&apos;Hirsingue</p>
                  <span className="person-tag">ORIAS N° 14005505</span>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="value-item"><div className="value-num">01</div><div><h4>Indépendance</h4><p>Nous travaillons avec de nombreux assureurs pour vous proposer les meilleures offres du marché.</p></div></div>
              <div className="value-item"><div className="value-num">02</div><div><h4>Transparence</h4><p>Nos honoraires vous sont communiqués clairement, sans surprise ni frais cachés.</p></div></div>
              <div className="value-item"><div className="value-num">03</div><div><h4>Proximité</h4><p>Un interlocuteur unique, disponible et réactif, qui vous accompagne dans vos démarches.</p></div></div>
              <div className="value-item"><div className="value-num">04</div><div><h4>Expertise</h4><p>Une formation continue et une veille permanente du marché pour vous conseiller au mieux.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIAS */}
      <section className="orias" id="orias">
        <div className="orias-inner">
          <div className="orias-text">
            <div className="section-label">Réglementation</div>
            <h2 className="section-title">Immatriculé à <span>l&apos;ORIAS</span></h2>
            <p>L&apos;ORIAS est le registre officiel des intermédiaires en assurance en France. Cette immatriculation garantit notre sérieux et notre conformité aux exigences légales.</p>
            <p style={{marginTop:'.8rem'}}>Vous pouvez vérifier notre immatriculation N° 14005505 à tout moment sur le site officiel de l&apos;ORIAS.</p>
            <a href="https://www.orias.fr" target="_blank" className="btn btn-red" style={{marginTop:'1.8rem', display:'inline-block'}}>Vérifier sur orias.fr ↗</a>
          </div>
          <div className="orias-box">
            <h3>🔏 Nos informations ORIAS</h3>
            <div className="orias-info">
              <div className="orias-row"><span className="or-icon">📋</span><div><h5>Cabinet</h5><p>Arx Fidelis</p></div></div>
              <div className="orias-row"><span className="or-icon">🔢</span><div><h5>Numéro ORIAS</h5><p>14005505</p></div></div>
              <div className="orias-row"><span className="or-icon">👤</span><div><h5>Responsable</h5><p>Cédric Lebas</p></div></div>
              <div className="orias-row"><span className="or-icon">📍</span><div><h5>Adresse</h5><p>15 rue du Général de Gaulle, 68130 Hirsingue</p></div></div>
              <div className="orias-row"><span className="or-icon">📞</span><div><h5>Téléphone</h5><p>06 70 69 96 50</p></div></div>
              <div className="orias-row"><span className="or-icon">🏛️</span><div><h5>Registre</h5><p>ORIAS N° 14005505 — Courtier en assurance (COA)</p></div></div>
            </div>
            <a href="https://www.orias.fr/welcome" target="_blank" className="btn btn-red" style={{width:'100%', textAlign:'center', display:'block'}}>Consulter le registre ORIAS</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Parlons de votre <span>projet</span></h2>
            <p className="section-sub">Contactez-nous pour un premier rendez-vous gratuit et sans engagement.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Nos coordonnées</h3>
              <div className="contact-items">
                <div className="contact-item"><div className="ci-icon">📍</div><div><h4>Adresse</h4><p>15 rue du Général de Gaulle<br/>68130 Hirsingue</p></div></div>
                <div className="contact-item"><div className="ci-icon">📞</div><div><h4>Téléphone</h4><p><a href="tel:0670699650">06 70 69 96 50</a></p></div></div>
                <div className="contact-item"><div className="ci-icon">📧</div><div><h4>Email</h4><p><a href="mailto:direction@arxfidelis.fr">contact@arxfidelis.fr</a></p></div></div>
                <div className="contact-item"><div className="ci-icon">🔏</div><div><h4>ORIAS N° 14005505</h4><p><a href="https://www.orias.fr" target="_blank">Vérifier notre immatriculation ↗</a></p></div></div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Envoyer un message</h3>
              <div className="form-group"><label>Nom complet</label><input type="text" placeholder="Votre nom"/></div>
              <div className="form-group"><label>Email</label><input type="email" placeholder="votre@email.fr"/></div>
              <div className="form-group"><label>Téléphone</label><input type="tel" placeholder="06 XX XX XX XX"/></div>
              <div className="form-group"><label>Message</label><textarea placeholder="Décrivez votre besoin..."></textarea></div>
              <a href="mailto:contact@arxfidelis.fr" className="btn btn-dark" style={{width:'100%', textAlign:'center', display:'block'}}>Envoyer le message</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <div className="footer-brand">Arx Fidelis</div>
          <div style={{marginTop:'.3rem'}}>15 rue du Général de Gaulle, 68130 Hirsingue — 06 70 69 96 50 — ORIAS N° 14005505</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div>© 2026 Arx Fidelis — Tous droits réservés</div>
          <div style={{marginTop:'.3rem'}}><a href="https://www.orias.fr" target="_blank">Immatriculé ORIAS</a></div>
        </div>
      </footer>
    </>
  );
}