import React from 'react';
import {ArrowRight,ArrowUpRight,Truck,RefreshCw,ShieldCheck,Sparkles} from 'lucide-react';
export default function HomePage({products,onShop,onOpenProduct}){
 const collections=[['Sarees','Timeless drapes','category-sarees'],['Ethnic Sets','Made for celebrations','category-ethnic'],['Dresses','Everyday statement','category-dresses'],['Accessories','The finishing touch','category-accessories']];
 return <div className="page home-page">


<section className="sv-hero">
  <style>{`
    .sv-hero {
      position: relative;
      isolation: isolate;
      display: grid;
      grid-template-columns: 48% 52%;
      width: 100%;
      min-height: 520px;
      overflow: hidden;
      background-color: #f1e3d3;
      background-image: url("/data/home1.png");
      background-size: cover;
      background-position: center right;
      background-repeat: no-repeat;
      box-sizing: border-box;
    }

    .sv-hero-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 40px 20px 40px 7%;
      min-width: 0;
    }

    .sv-hero-label {
      color: #801b2b;
      font-size: 10px;
      letter-spacing: 2px;
      margin-bottom: 18px;
    }

    .sv-hero-title {
      color: #701626;
      font-family: Georgia, serif;
      font-size: clamp(38px, 4.5vw, 66px);
      font-weight: 400;
      line-height: 1.04;
      margin: 0 0 18px;
    }

    .sv-hero-title em {
      display: block;
      font-weight: 400;
    }

    .sv-hero-description {
      max-width: 370px;
      color: #46352f;
      font-size: 13px;
      line-height: 1.8;
      margin: 0 0 24px;
    }

    .sv-hero-button {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: #701626;
      color: #fff;
      text-decoration: none;
      padding: 15px 20px;
      font-size: 10px;
      letter-spacing: 1px;
    }

    /* Tablet */
    @media (min-width: 601px) and (max-width: 1024px) {
      .sv-hero {
        min-height: 430px;
        grid-template-columns: 48% 52%;
        background-position: 65% center;
      }

      .sv-hero-content {
        padding-left: 5%;
        padding-right: 12px;
      }

      .sv-hero-title {
        font-size: clamp(34px, 5vw, 48px);
      }

      .sv-hero-description {
        font-size: 12px;
      }
    }

    /* Mobile */
    @media (max-width: 600px) {
      .sv-hero {
        display: block;
        height: 510px;
        min-height: 0;
        background-size: auto 100%;
        background-position: 72% center;
        background-repeat: no-repeat;
      }

      .sv-hero::before {
        content: "";
        position: absolute;
        z-index: 0;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba(241, 227, 211, 0.98) 0%,
          rgba(241, 227, 211, 0.93) 27%,
          rgba(241, 227, 211, 0.62) 43%,
          rgba(241, 227, 211, 0.18) 57%,
          rgba(241, 227, 211, 0.02) 70%,
          
        );
        pointer-events: none;
      }

      .sv-hero-content {
        padding: 24px 20px;
        width: 100%;
        justify-content: flex-start;
      }

      .sv-hero-label {
        font-size: 9px;
        letter-spacing: 1.5px;
        margin-bottom: 14px;
      }

      .sv-hero-title {
        font-size: clamp(35px, 9vw, 44px);
        line-height: 1.02;
        margin-bottom: 12px;
      }

      .sv-hero-description {
        max-width: 290px;
        font-size: 12px;
        line-height: 1.65;
        margin-bottom: 18px;
      }

      .sv-hero-button {
        padding: 13px 16px;
        font-size: 9px;
      }
    }

    @media (max-width: 360px) {
      .sv-hero {
        height: 480px;
        background-position: 76% center;
      }

      .sv-hero-content {
        padding: 22px 15px;
      }

      .sv-hero-title {
        font-size: 34px;
      }
    }
  `}</style>

  <div className="sv-hero-content">
    <span className="sv-hero-label">
      THE FESTIVE &amp; EVERYDAY EDIT
    </span>

    <h1 className="sv-hero-title">
      Grace in
      <em>Every Occasion</em>
    </h1>

    <p className="sv-hero-description">
      Traditional roots. Contemporary styles. Timeless you.
      Discover pieces that make every moment feel like yours.
    </p>

    <a href="/shop" className="sv-hero-button">
      SHOP NEW ARRIVALS <span>↗</span>
    </a>
  </div>
</section>


 
<section className="benefit-strip">
  <style>{`
    .benefit-strip {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      width: 100%;
      background: #fffaf5;
      border-top: 1px solid #eadbce;
      border-bottom: 1px solid #eadbce;
    }

    .benefit-strip a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 22px 12px;
      color: #651626;
      text-decoration: none;
      min-width: 0;
      transition: background 0.2s ease;
    }

    .benefit-strip a:hover {
      background: #f4e8dc;
    }

    .benefit-strip a:focus-visible {
      outline: 2px solid #801b2b;
      outline-offset: -3px;
    }

    .benefit-strip a svg {
      width: 25px;
      height: 25px;
      flex-shrink: 0;
    }

    .benefit-strip a span {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .benefit-strip a b {
      font-size: 12px;
      font-weight: 600;
    }

    .benefit-strip a small {
      color: #76665c;
      font-size: 11px;
      line-height: 1.5;
    }

    @media (max-width: 700px) {
      .benefit-strip {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .benefit-strip a {
        justify-content: flex-start;
        padding: 16px 12px;
        gap: 9px;
      }

      .benefit-strip a:nth-child(odd) {
        border-right: 1px solid #eadbce;
      }

      .benefit-strip a:nth-child(-n+2) {
        border-bottom: 1px solid #eadbce;
      }

      .benefit-strip a svg {
        width: 21px;
        height: 21px;
      }

      .benefit-strip a b {
        font-size: 11px;
      }

      .benefit-strip a small {
        font-size: 10px;
      }
    }

    @media (max-width: 360px) {
      .benefit-strip a {
        padding: 13px 8px;
        gap: 6px;
      }

      .benefit-strip a b {
        font-size: 10px;
      }

      .benefit-strip a small {
        font-size: 9px;
      }
    }
  `}</style>

  <a href="/shipping">
    <Truck />
    <span>
      <b>Complimentary shipping</b>
      <small>On orders above ₹1,999</small>
    </span>
  </a>

  <a href="/returns">
    <RefreshCw />
    <span>
      <b>Easy returns</b>
      <small>Within 7 days of delivery</small>
    </span>
  </a>

  <a href="/quality">
    <ShieldCheck />
    <span>
      <b>Thoughtful quality</b>
      <small>Pieces you'll wear again</small>
    </span>
  </a>

  <a href="/style-guide">
    <Sparkles />
    <span>
      <b>Personal style</b>
      <small>Find your own signature</small>
    </span>
  </a>
</section>

  <section className="section-block"><div className="section-heading"><div><span className="eyebrow">SHOP BY MOOD</span><h2>Find your <em>kind of beautiful.</em></h2></div><button className="text-link" onClick={()=>onShop('All')}>VIEW ALL CATEGORIES <ArrowRight size={15}/></button></div><div className="collection-grid">{collections.map(([name,sub,cls],i)=><button className={`collection-tile ${cls}`} key={name} onClick={()=>onShop(name)}><div className="tile-image"><img
        src="./data/sare.png"
        alt="Sareee img"
        className="saree-image"></img></div><div className="tile-meta"><span><b>{name}</b><small>{sub}</small></span><i><ArrowUpRight size={17}/></i></div></button>)}</div></section>
  <section className="section-block trending-block"><div className="section-heading"><div><span className="eyebrow">CURATED FOR YOU</span><h2>New season, <em>new favourites.</em></h2><p className="section-intro">A considered edit of pieces for celebrations, everyday rituals and everything in between.</p></div><button className="text-link" onClick={()=>onShop('All')}>SHOP THE COLLECTION <ArrowRight size={15}/></button></div><div className="product-grid home-product-grid">{products.slice(0,4).map((p,i)=><article className="product-card" key={p.id}><button className="product-media" onClick={()=>onOpenProduct(p)} aria-label={`View ${p.name}`}>{p.image ? <img className="product-photo" src={p.image} alt={p.name} loading="lazy" onError={e=>{e.currentTarget.style.display="none";}}/> : <div className="image-slot"><span>ADD PRODUCT IMAGE</span><small>{String(i+1).padStart(2,'0')} · {p.category}</small></div>}<span className="product-tag">{p.badge||'NEW SEASON'}</span></button><div className="product-info"><div><span className="product-category">{p.category}</span><h3>{p.name}</h3><small>{p.colour||'Colour details coming soon'}</small></div><b>₹{Number(p.price).toLocaleString('en-IN')}</b></div><button className="quick-add" onClick={()=>onOpenProduct(p)}>VIEW DETAILS <ArrowRight size={14}/></button></article>)}</div></section>
  <section className="quote-banner"><div className="quote-image"><span>EDITORIAL IMAGE SLOT</span><small>public/images/editorial/</small></div><div className="quote-copy"><span className="eyebrow">THE SRI VOGUE PHILOSOPHY</span><h2>Style is not what you wear.<br/><em>It's how you arrive.</em></h2><p>Thoughtfully selected silhouettes, expressive details and versatile pieces that move with your life.</p><button className="btn btn-primary" onClick={()=>onShop('All')}>EXPLORE SRI VOGUE <ArrowRight size={16}/></button></div></section>
 </div>
}
