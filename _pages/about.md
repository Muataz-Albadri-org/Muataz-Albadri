---
title: About Me
permalink: /about/
layout: page
---

<div style="background:#0b0d12; color:#e5e7eb;">

<!-- ========================= HERO / PROFILE ========================== -->
<section class="page-section">
  <div class="section-inner profile">

    <img src="{{ '/assets/images/Muataz.jpg' | relative_url }}" alt="Muataz Albadri">

    <h1>Muataz Albadri</h1>
    <p class="subtitle">
      Senior Civil Engineer · PhD Candidate · Scan-to-BIM Specialist
    </p>

    <p class="intro">
      I help teams transform reality capture data into reliable digital assets.
      My work focuses on converting unstructured data such as point clouds into
      accurate, interoperable BIM models through automated and AI-assisted workflows.
    </p>

  </div>
</section>

<!-- ========================= BACKGROUND ========================== -->
<section class="page-section">
  <div class="section-inner">

    <h2 class="section-title">Background</h2>

    <p>
      With over <strong>10 years of experience</strong> in civil engineering and digital
      construction, I have contributed to building and infrastructure projects across
      Europe and the Middle East. My professional background combines on-site engineering
      experience with advanced digital modeling and automation.
    </p>

    <p>
      I specialize in Scan-to-BIM, as-built modeling, and reality-based digitalization
      for design, construction, and asset management workflows.
    </p>

    <p>
      I am currently pursuing a <strong>PhD in Digital Construction</strong>, focusing on
      AI-driven automation of Scan-to-BIM pipelines. My research aims to reduce manual
      modeling effort, improve data quality, and enable OpenBIM interoperability across
      the project lifecycle.
    </p>

  </div>
</section>

<!-- ========================= EXPERTISE ========================== -->
<section class="page-section">
  <div class="section-inner">

    <h2 class="section-title">Areas of Expertise</h2>

    <div class="expertise-grid">

      <div class="card">
        <h4>Scan-to-BIM</h4>
        <p>
          Reality-based as-built modeling from point clouds and imagery,
          aligned with LOD and project requirements.
        </p>
      </div>

      <div class="card">
        <h4>OpenBIM & IFC</h4>
        <p>
          Interoperable BIM delivery using open standards,
          ensuring long-term usability and system integration.
        </p>
      </div>

      <div class="card">
        <h4>AI & Automation</h4>
        <p>
          Semantic segmentation and automated processing of point clouds
          using AI- and rule-based methods.
        </p>
      </div>

      <div class="card">
        <h4>Digital Construction</h4>
        <p>
          BIM coordination, data validation, and digital workflows
          supporting construction and asset management.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- ========================= EDUCATION ========================== -->
<section class="page-section">
  <div class="section-inner">

    <h2 class="section-title">Education</h2>

    <div class="edu-item">
      <h4>PhD in Digital Construction <span>(In Progress)</span></h4>
      <p>
        Research focus: AI-assisted Scan-to-BIM automation and semantic
        segmentation of point clouds.
      </p>
    </div>

    <div class="edu-item">
      <h4>MSc in Civil Engineering</h4>
    </div>

    <div class="edu-item">
      <h4>BSc in Civil Engineering</h4>
    </div>

  </div>
</section>

<!-- ========================= CTA ========================== -->
<section class="page-section cta">
  <div class="section-inner">

    <h2 class="section-title">Let’s Work Together</h2>

    <div class="cta-buttons">
      <a href="{{ '/assets/portfolio.pdf' | relative_url }}" target="_blank" class="btn primary">
        Download CV
      </a>

      <a href="{{ '/' | relative_url }}" class="btn secondary">
        ← Back to Home
      </a>
    </div>

  </div>
</section>

</div>

<!-- ========================= STYLES ========================== -->
<style>
/* ===================== GLOBAL ===================== */
.page-section {
  min-height: 85vh;
  display: flex;
  align-items: center;
  padding: 80px 20px;
  border-bottom: 1px solid rgba(59,130,246,0.15);
}

.section-inner {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

h1 {
  font-size: 36px;
  margin-bottom: 8px;
}

.subtitle {
  color: #9ca3af;
  font-size: 18px;
  margin-bottom: 24px;
}

.section-title {
  font-size: 28px;
  margin-bottom: 32px;
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: #3b82f6;
  margin-top: 12px;
}

p {
  max-width: 720px;
  line-height: 1.8;
  margin-bottom: 16px;
}

/* ===================== PROFILE ===================== */
.profile {
  text-align: center;
}

.profile img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #3b82f6;
  margin-bottom: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
}

/* ===================== EXPERTISE ===================== */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.card {
  background: #111827;
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
}

.card h4 {
  margin-bottom: 8px;
}

/* ===================== EDUCATION ===================== */
.edu-item {
  margin-bottom: 20px;
}

.edu-item span {
  color: #9ca3af;
  font-weight: normal;
}

/* ===================== CTA ===================== */
.cta {
  min-height: 60vh;
  text-align: center;
}

.cta-buttons {
  margin-top: 32px;
}

.btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  margin: 8px;
}

.btn.primary {
  background: #3b82f6;
  color: white;
}

.btn.secondary {
  border: 2px solid #3b82f6;
  color: #3b82f6;
}

/* ===================== MOBILE ===================== */
@media (max-width: 768px) {
  .page-section {
    min-height: auto;
    padding: 60px 16px;
  }

  h1 {
    font-size: 28px;
  }

  .section-title {
    font-size: 22px;
  }

  .profile img {
    width: 160px;
    height: 160px;
  }
}
</style>
