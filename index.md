---
layout: home
title: ""
show_posts: false
---
<div style="
  max-width:1100px;
  margin:0 auto;
  padding:40px 20px;
">

  <!-- =========================
     HERO
========================== -->
<section style="margin-bottom:60px;">

  <div style="
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:20px;
  ">

    <!-- Avatar -->
    <img
      src="{{ '/assets/images/Muataz.jpg' | relative_url }}"
      alt="Muataz Albadri"
      style="
        width:200px;
        height:200px;
        border-radius:50%;
        object-fit:cover;
        border:3px solid #2C3E50;
      "
    >

    <!-- Name & Title -->
<div>
  <h1 style="margin:0;">Muataz Albadri</h1>

  <h3 style="
    margin:6px 0 0;
    font-weight:400;
    color:#666;
    line-height:1.35;
  ">
    Senior Civil Engineer | Digital Transformation &amp; Scan-to-BIM
  </h3>
</div>



    <!-- Description + Button (grouped for tight spacing) -->
    <div style="
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:6px;
      max-width:760px;
    ">

      <p style="
        margin:0;
        text-align:justify;
        text-justify:inter-word;
        hyphens:auto;
      ">
        I help engineering firms, contractors, and asset owners transform reality 
        data into reliable digital models, driving digital transfotmation through 
        Scan-to-BIM, autmoation, and AI-powered enginering workflows. 
      </p>

      <a href="{{ '/about/' | relative_url }}"
         style="
           padding:12px 28px;
           font-size:15px;
           font-weight:500;
           text-decoration:none;
           color:#ffffff;
           background:#2C3E50;
           border-radius:6px;
           transition:background 0.3s ease, transform 0.2s ease;
         "
         onmouseover="this.style.background='#1f2d3a'; this.style.transform='translateY(-2px)'"
         onmouseout="this.style.background='#2C3E50'; this.style.transform='translateY(0)'"
      >
        About Me
      </a>

    </div>

  </div>
</section>

<!-- =========================
     SERVICES
========================== -->
<section style="
  margin-bottom:80px;
  padding:40px 32px;
  background: rgba(255,255,255,0.02);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
">

  <h2 style="
    margin-top:0;
    margin-bottom:32px;
    text-align:center;
  ">
    Professional Services
  </h2>

  <div style="
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap:28px;
  ">

    <!-- Service cards (existing) -->
    <div style="
      padding:22px 24px;
      background: rgba(255,255,255,0.03);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:10px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);
    ">
      <h3 style="margin:0; font-size:1.05rem;">Data Collection for Buildings & Infrastructure</h3>
      <p style="margin:10px 0 0; text-align:justify; hyphens:auto; line-height:1.5;">
        Planning and coordination of reality data collection for buildings, bridges, and roads, including LiDAR and photogrammetry, and ensuring data quality, coverage, and suitability.
      </p>
    </div>

    <div style="
      padding:22px 24px;
      background: rgba(255,255,255,0.03);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:10px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);
    ">
      <h3 style="margin:0; font-size:1.05rem;">Spatial Data Processing & Engineering Analysis</h3>
      <p style="margin:10px 0 0; text-align:justify; hyphens:auto; line-height:1.5;">
        Processing, cleaning, and analysis of point clouds, images, and geospatial data to extract reliable geometric, spatial, and condition information that supports decision making and downstream workflows.
      </p>
    </div>

    <div style="
      padding:22px 24px;
      background: rgba(255,255,255,0.03);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:10px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);
    ">
      <h3 style="margin:0; font-size:1.05rem;">As-Built BIM & Digital Asset Modelling</h3>
      <p style="margin:10px 0 0; text-align:justify; hyphens:auto; line-height:1.5;">
        Development of accurate as-built BIM models for buildings and infrastructure, structured according to project objectives, asset lifecycle needs, and OpenBIM standards (e.g., IFC).
      </p>
    </div>

    <div style="
      padding:22px 24px;
      background: rgba(255,255,255,0.03);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:10px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);
    ">
      <h3 style="margin:0; font-size:1.05rem;">AI & Automation for Construction and Asset Management</h3>
      <p style="margin:10px 0 0; text-align:justify; hyphens:auto; line-height:1.5;">
        Design and implementation of AI-assisted and automated workflows to accelerate extract information from reality data, BIM modelling, and improve efficiency across the projects.
      </p>
    </div>

  </div>

  <!-- Summary sentence at the end -->
  <p style="
    margin-top:32px;
    text-align:center;
    font-style:italic;
    color:#aaa;
    max-width:720px;
    margin-left:auto;
    margin-right:auto;
  ">
    Services are delivered as standalone tasks or as an integrated digital workflow, depending on project needs.
  </p>

</section>



  <!-- =========================
     TECHNICAL DEMO
========================== -->
<section style="
  margin-bottom:80px;
  padding:32px 24px;
  background: rgba(255,255,255,0.02);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:12px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.25);
  text-align:center;
">

  <h2 style="margin-top:0; margin-bottom:24px;">Demo Real</h2>

  <video
    autoplay
    muted
    loop
    playsinline
    style="
      width:100%;
      max-width:900px;
      border-radius:8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
      display:block;
      margin:0 auto 20px auto;
    "
  >
    <source src="assets/demo.mp4" type="video/mp4">
  </video>

  <p style="
    max-width:900px;
    margin:0 auto;
    text-align:justify;
    hyphens:auto;
    line-height:1.5;
    color:#ccc;
  ">
    Demonstration of Scan-to-BIM automation workflows, AI-based semantic segmentation,
    and BIM scripting pipelines applied to real-world project data.
  </p>

</section>

<!-- =========================
     PROJECTS
========================== -->
<section style="
  margin-bottom:80px;
  padding:40px 32px;
  background: rgba(255,255,255,0.02);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
">

  <h2 style="margin-top:0; margin-bottom:36px; text-align:center;">Projects</h2>

  <div style="
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap:28px;
  ">

    <!-- Project 1 -->
    <div style="
      padding:24px 28px;
      background: rgba(255,255,255,0.03);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:10px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);
    ">
      <h3 style="margin:0 0 8px 0; font-size:1.1rem;">
        <a href="{{ '/projects/heritage-building' | relative_url }}" 
           style="text-decoration:none; color:#ffffff; transition:color 0.3s ease;"
           onmouseover="this.style.color='#2C3E50';" 
           onmouseout="this.style.color='#ffffff';">
           Heritage Building Renovation
        </a>
      </h3>
      <p style="margin:0 0 6px 0; font-style:italic; color:#aaa;">
        Location: London, UK | Timeline: Jan–Jun 2025
      </p>
    </div>

    <!-- Project 2 -->
    <div style="
      padding:24px 28px;
      background: rgba(255,255,255,0.03);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:10px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);
    ">
      <h3 style="margin:0 0 8px 0; font-size:1.1rem;">
        <a href="{{ '/projects/urban-infra-upgrade' | relative_url }}" 
           style="text-decoration:none; color:#ffffff; transition:color 0.3s ease;"
           onmouseover="this.style.color='#2C3E50';" 
           onmouseout="this.style.color='#ffffff';">
           Urban Infrastructure Upgrade
        </a>
      </h3>
      <p style="margin:0 0 6px 0; font-style:italic; color:#aaa;">
        Location: Berlin, Germany | Timeline: Mar–Sep 2024
      </p>
    </div>

    <!-- Project 3 -->
    <div style="
      padding:24px 28px;
      background: rgba(255,255,255,0.03);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:10px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);
    ">
      <h3 style="margin:0 0 8px 0; font-size:1.1rem;">
        <a href="{{ '/projects/commercial-office' | relative_url }}" 
           style="text-decoration:none; color:#ffffff; transition:color 0.3s ease;"
           onmouseover="this.style.color='#2C3E50';" 
           onmouseout="this.style.color='#ffffff';">
           Commercial Office Complex
        </a>
      </h3>
      <p style="margin:0 0 6px 0; font-style:italic; color:#aaa;">
        Location: Dubai, UAE | Timeline: Jul–Dec 2025
      </p>
    </div>

  </div>

  <!-- More Projects Button -->
  <div style="text-align:center; margin-top:36px;">
    <a href="{{ '/Projects/' | relative_url }}"
       style="
         display:inline-block;
         padding:12px 28px;
         font-size:15px;
         font-weight:500;
         text-decoration:none;
         color:#ffffff;
         background:#2C3E50;
         border-radius:6px;
         transition:background 0.3s ease, transform 0.2s ease;
       "
       onmouseover="this.style.background='#1f2d3a'; this.style.transform='translateY(-2px)';"
       onmouseout="this.style.background='#2C3E50'; this.style.transform='translateY(0)';"
    >
      More Projects
    </a>
  </div>

</section>



<!-- =========================
     TECHNOLOGY STACK
========================== -->

<style>
/* -------------------------
   Base container (dark)
-------------------------- */
.logo-scroll-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 28px 0;
  background: transparent;
  border-radius: 0;
}

/* Fade edges */
.logo-scroll-wrapper::before,
.logo-scroll-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  width: 80px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.logo-scroll-wrapper::before {
  left: 0;
  background: transparent;
}

.logo-scroll-wrapper::after {
  right: 0;
  background: transparent;
}

/* -------------------------
   Scrolling track
-------------------------- */
.logo-scroll-track {
  display: flex;
  align-items: center;
  gap: 48px;
  width: max-content;
  animation: logo-scroll 25s linear infinite;
}

/* Pause on hover */
.logo-scroll-wrapper:hover .logo-scroll-track {
  animation-play-state: paused;
}

/* -------------------------
   Logo items
-------------------------- */
.logo-item {
  flex: 0 0 auto;
  position: relative;
}

.logo-item img {
  width: auto;
  height: 150px;
  border-radius: 6px;
  object-fit: contain;
  background: rgba(255,255,255,0.03);
  border: none;
  padding: 0;
}

  
.logo-item:hover img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

/* -------------------------
   Tooltip
-------------------------- */
.logo-item::after {
  content: attr(data-label);
  position: absolute;
  bottom: -36px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  color: #e6e8eb;
  padding: 0;
  font-size: 12px;
  border-radius: 0;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.logo-item:hover::after {
  opacity: 1;
}

/* -------------------------
   Animation
-------------------------- */
@keyframes logo-scroll {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

/* -------------------------
   Mobile behavior
-------------------------- */
@media (max-width: 768px) {
  .logo-scroll-track {
    animation-duration: 40s;
    gap: 10px;
  }

  .logo-item img {
    width: 150px;
    height: 150px;
  }
}

/* -------------------------
   Accessibility: reduced motion
-------------------------- */
@media (prefers-reduced-motion: reduce) {
  .logo-scroll-track {
    animation: none;
    transform: translateX(0);
  }
}
</style>

<section style="margin-bottom:10px;">
  <h2>Technology Stack</h2>

  <div class="logo-scroll-wrapper">
    <div class="logo-scroll-track">

      <div class="logo-item" data-label="Laser Scanners">
        <img src="{{ '/assets/logos/laser-scanner.svg' | relative_url }}" alt="Laser Scanners">
      </div>

      <div class="logo-item" data-label="Python">
        <img src="{{ '/assets/logos/python.svg' | relative_url }}" alt="Python">
      </div>
      
      <div class="logo-item" data-label="Figure">
        <img src="{{ '/assets/logos/Figure 7.svg' | relative_url }}" alt="Figure">
      </div>
      
      <div class="logo-item" data-label="Artificial Intelligence">
        <img src="{{ '/assets/logos/ai.svg' | relative_url }}" alt="AI">
      </div>

      <div class="logo-item" data-label="Autodesk Revit">
        <img src="{{ '/assets/logos/revit.svg' | relative_url }}" alt="Revit">
      </div>

      <div class="logo-item" data-label="AutoCAD">
        <img src="{{ '/assets/logos/autocad.svg' | relative_url }}" alt="AutoCAD">
      </div>

      <div class="logo-item" data-label="BlenderBIM">
        <img src="{{ '/assets/logos/blenderbim.svg' | relative_url }}" alt="BlenderBIM">
      </div>

      <div class="logo-item" data-label="IFC / buildingSMART">
        <img src="{{ '/assets/logos/ifc.svg' | relative_url }}" alt="IFC">
      </div>

      <!-- Duplicate for seamless loop -->
      <div class="logo-item" data-label="Laser Scanners">
        <img src="{{ '/assets/logos/laser-scanner.svg' | relative_url }}" alt="Laser Scanners">
      </div>

      <div class="logo-item" data-label="Python">
        <img src="{{ '/assets/logos/python.svg' | relative_url }}" alt="Python">
      </div>
      
      <div class="logo-item" data-label="Figure">
        <img src="{{ '/assets/logos/Figure 7.svg' | relative_url }}" alt="Figure">
      </div>
      
      <div class="logo-item" data-label="Artificial Intelligence">
        <img src="{{ '/assets/logos/ai.svg' | relative_url }}" alt="AI">
      </div>

      <div class="logo-item" data-label="Autodesk Revit">
        <img src="{{ '/assets/logos/revit.svg' | relative_url }}" alt="Revit">
      </div>

      <div class="logo-item" data-label="AutoCAD">
        <img src="{{ '/assets/logos/autocad.svg' | relative_url }}" alt="AutoCAD">
      </div>

      <div class="logo-item" data-label="BlenderBIM">
        <img src="{{ '/assets/logos/blenderbim.svg' | relative_url }}" alt="BlenderBIM">
      </div>

      <div class="logo-item" data-label="IFC / buildingSMART">
        <img src="{{ '/assets/logos/ifc.svg' | relative_url }}" alt="IFC">
      </div>

    </div>
  </div>
</section>
  <!-- =========================
       PORTFOLIO
  ========================== -->
  <section style="margin-bottom:60px;">
    <h2>Portfolio &amp; Credentials</h2>

    <a
      href="assets/portfolio.pdf"
      target="_blank"
      class="button"
    >
      Download Consultant Portfolio
    </a>
  </section>

  <!-- =========================
       CONTACT
  ========================== -->
  <section>
    <h2>Contact</h2>

    <p>Email: your@email.com</p>

    <p>
      LinkedIn:
      <a
        href="https://www.linkedin.com/in/muataz-albadri-2290381a4/"
        target="_blank"
      >
        linkedin.com/in/muataz-albadri
      </a>
    </p>
  </section>

</div>

<footer style="
  text-align:center;
  padding:20px 0;
  color:#777;
">
  © {{ site.time | date: "%Y" }} Muataz Albadri · Scan-to-BIM &amp; AI Consulting
</footer>
