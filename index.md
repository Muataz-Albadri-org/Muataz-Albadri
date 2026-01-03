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

      <div>
        <h1 style="margin:0;">Muataz Albadri</h1>
        <h3 style="
          margin:6px 0 0;
          font-weight:400;
          color:#666;
        ">
          R&amp;D Engineer &amp; Scan-to-BIM Specialist
        </h3>
      </div>

      <p style="
        max-width:760px;
        margin-top:24px;
        text-align:justify;
        text-justify:inter-word;
        hyphens:auto;
      ">
        I help engineering firms, contractors, and asset owners transform reality capture
        data into reliable digital twins and automated BIM workflows. My work focuses on
        reducing delivery time, minimizing modeling errors, and enabling data-driven
        decision-making across the asset lifecycle.
      </p>

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
  border-radius: 10px;
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
  background: linear-gradient(to right, #0b0d12 0%, transparent 100%);
}

.logo-scroll-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #0b0d12 0%, transparent 100%);
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
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 2px solid #2c3e50;
  background: transparent;
  padding: 12px;
  filter: grayscale(100%);
  transition: transform 0.3s ease, filter 0.3s ease;
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
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 4px;
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
    gap: 32px;
  }

  .logo-item img {
    width: 100px;
    height: 100px;
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

<section style="margin-bottom:60px;">
  <h2>Technology Stack</h2>

  <div class="logo-scroll-wrapper">
    <div class="logo-scroll-track">

      <div class="logo-item" data-label="Laser Scanners">
        <img src="{{ '/assets/logos/laser-scanner.svg' | relative_url }}" alt="Laser Scanners">
      </div>

      <div class="logo-item" data-label="Python">
        <img src="{{ '/assets/logos/python.svg' | relative_url }}" alt="Python">
      </div>

      <div class="logo-item" data-label="Artificial Intelligence">
        <img src="{{ '/assets/logos/ai.svg' | relative_url }}" alt="AI">
      </div>

      <div class="logo-item" data-label="Autodesk ReCap">
        <img src="{{ '/assets/logos/recap.svg' | relative_url }}" alt="ReCap">
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
        <img src="{{ '/assets/logos/laser-scanner.svg' | relative_url }}" alt="">
      </div>

      <div class="logo-item" data-label="Python">
        <img src="{{ '/assets/logos/python.svg' | relative_url }}" alt="">
      </div>

    </div>
  </div>
</section>

  <!-- =========================
       SERVICES
  ========================== -->
  <section style="margin-bottom:60px;">
    <h2>Consulting Services</h2>

    <div class="services">

      <div class="service">
        <span>Scan-to-BIM</span>
        <p style="
          margin:8px 0 0;
          text-align:justify;
          hyphens:auto;
        ">
          Conversion of point clouds into Revit and IFC models with structured semantics,
          modeling standards compliance, and quality-assurance–ready deliverables.
        </p>
      </div>

      <div class="service">
        <span>AI for Reality Data</span>
        <p style="
          margin:8px 0 0;
          text-align:justify;
          hyphens:auto;
        ">
          Automated detection and classification of building elements from laser scanning
          and photogrammetric data using AI-assisted workflows.
        </p>
      </div>

      <div class="service">
        <span>BIM Automation</span>
        <p style="
          margin:8px 0 0;
          text-align:justify;
          hyphens:auto;
        ">
          Development of scalable production pipelines using Python, Dynamo, and the Revit
          API to standardize and accelerate BIM delivery.
        </p>
      </div>

      <div class="service">
        <span>Digital Twins</span>
        <p style="
          margin:8px 0 0;
          text-align:justify;
          hyphens:auto;
        ">
          Creation of operational-ready BIM models integrated with analytics and asset
          management platforms to support informed operational decisions.
        </p>
      </div>

    </div>
  </section>

  <!-- =========================
       TECHNICAL DEMO
  ========================== -->
  <section style="margin-bottom:60px;">
    <h2>Technical Demonstration</h2>

    <video
      autoplay
      muted
      loop
      playsinline
      style="
        width:100%;
        max-width:900px;
        margin:20px 0;
        border-radius:8px;
        display:block;
      "
    >
      <source src="assets/demo.mp4" type="video/mp4">
    </video>

    <p style="
      max-width:900px;
      text-align:justify;
      hyphens:auto;
    ">
      Demonstration of Scan-to-BIM automation workflows, AI-based semantic segmentation,
      and BIM scripting pipelines applied to real-world project data.
    </p>
  </section>

  <!-- =========================
       EXPERIENCE
  ========================== -->
  <section style="margin-bottom:60px;">
    <h2>Selected Engagements</h2>

    <ul style="
      max-width:900px;
      text-align:justify;
      hyphens:auto;
    ">
      <li>
        <strong>Automated Indoor Scan-to-BIM</strong> — Achieved a reduction in modeling
        time exceeding 60% through automation and standardized workflows.
      </li>
      <li>
        <strong>AI-Based Object Recognition</strong> — Integrated semantic segmentation
        outputs directly into downstream BIM authoring processes.
      </li>
      <li>
        <strong>Enterprise BIM Automation</strong> — Delivered reusable, production-ready
        pipelines supporting large-scale and multi-site projects.
      </li>
    </ul>
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
