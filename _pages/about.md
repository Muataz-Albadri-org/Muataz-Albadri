---
title: About Me
permalink: /about/
layout: page
---

<div style="
  max-width:900px;
  margin:0 auto;
  padding:40px 20px;
  background:#0b0d12;
  color:#e5e7eb;
">

<!-- ========================= PROFILE HEADER ========================== -->
<section style="
  display:flex;
  flex-wrap:wrap;
  gap:40px;
  align-items:center;
  margin-bottom:60px;
">

  <img src="{{ '/assets/images/Muataz.jpg' | relative_url }}"
       alt="Muataz Albadri"
       style="
         width:220px;
         height:220px;
         border-radius:50%;
         object-fit:cover;
         border:3px solid #2563eb;
         box-shadow:0 8px 28px rgba(0,0,0,0.5);
         flex-shrink:0;
         background:#111827;
       ">

  <div style="flex:1; min-width:280px;">
    <h1 style="margin:0 0 8px 0; color:#f9fafb;">
      Muataz Albadri
    </h1>

    <p style="color:#9ca3af; font-size:18px; margin:0 0 16px 0;">
      Senior Civil Engineer · PhD Candidate · Scan-to-BIM Specialist
    </p>

    <p style="line-height:1.7; text-align:justify; color:#d1d5db;">
      I help teams transform reality capture data into reliable digital assets.
      My work focuses on converting unstructured data such as point clouds into
      accurate, interoperable BIM models through automated and AI-assisted workflows.
    </p>
  </div>
</section>

<!-- ========================= BACKGROUND ========================== -->
<section style="margin-bottom:60px;">
  <h2 style="
    border-bottom:2px solid #2563eb;
    padding-bottom:10px;
    margin-bottom:24px;
    color:#f9fafb;
  ">
    Background
  </h2>

  <p style="line-height:1.8; text-align:justify; color:#d1d5db;">
    With over <strong>10 years of experience</strong> in civil engineering and digital
    construction, I have contributed to infrastructure and building projects across
    Europe and the Middle East. My expertise lies in Scan-to-BIM, as-built modeling,
    and reality-based digitalization for design, construction, and asset management.
  </p>

  <p style="line-height:1.8; text-align:justify; color:#d1d5db; margin-top:16px;">
    I am currently pursuing a <strong>PhD in Digital Construction</strong>, focusing on
    AI-driven automation of Scan-to-BIM workflows. My research aims to reduce manual
    modeling effort, improve data quality, and enable OpenBIM interoperability across
    the project lifecycle.
  </p>
</section>

<!-- ========================= EXPERTISE ========================== -->
<section style="margin-bottom:60px;">
  <h2 style="
    border-bottom:2px solid #2563eb;
    padding-bottom:10px;
    margin-bottom:24px;
    color:#f9fafb;
  ">
    Areas of Expertise
  </h2>

  <div style="
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:20px;
  ">

    <div style="
      padding:20px;
      background:#111827;
      border-radius:10px;
      border:1px solid #1f2937;
    ">
      <h4 style="margin:0 0 8px 0; color:#f3f4f6;">Scan-to-BIM</h4>
      <p style="margin:0; color:#9ca3af; font-size:14px;">
        Reality-based as-built modeling from point clouds and imagery.
      </p>
    </div>

    <div style="
      padding:20px;
      background:#111827;
      border-radius:10px;
      border:1px solid #1f2937;
    ">
      <h4 style="margin:0 0 8px 0; color:#f3f4f6;">OpenBIM & IFC</h4>
      <p style="margin:0; color:#9ca3af; font-size:14px;">
        Interoperable BIM delivery aligned with open standards.
      </p>
    </div>

    <div style="
      padding:20px;
      background:#111827;
      border-radius:10px;
      border:1px solid #1f2937;
    ">
      <h4 style="margin:0 0 8px 0; color:#f3f4f6;">AI & Automation</h4>
      <p style="margin:0; color:#9ca3af; font-size:14px;">
        Semantic segmentation and automated processing of point clouds.
      </p>
    </div>

    <div style="
      padding:20px;
      background:#111827;
      border-radius:10px;
      border:1px solid #1f2937;
    ">
      <h4 style="margin:0 0 8px 0; color:#f3f4f6;">Digital Construction</h4>
      <p style="margin:0; color:#9ca3af; font-size:14px;">
        BIM coordination, data validation, and digital project delivery.
      </p>
    </div>

  </div>
</section>

<!-- ========================= EDUCATION ========================== -->
<section style="margin-bottom:60px;">
  <h2 style="
    border-bottom:2px solid #2563eb;
    padding-bottom:10px;
    margin-bottom:24px;
    color:#f9fafb;
  ">
    Education
  </h2>

  <div style="margin-bottom:20px;">
    <h4 style="margin:0; color:#f3f4f6;">
      PhD in Digital Construction
      <span style="color:#9ca3af; font-weight:400;">(In Progress)</span>
    </h4>
    <p style="margin:4px 0 0; color:#9ca3af;">
      Research focus: AI-assisted Scan-to-BIM automation
    </p>
  </div>

  <div style="margin-bottom:20px;">
    <h4 style="margin:0; color:#f3f4f6;">MSc in Civil Engineering</h4>
  </div>

  <div>
    <h4 style="margin:0; color:#f3f4f6;">BSc in Civil Engineering</h4>
  </div>
</section>

<!-- ========================= CTA ========================== -->
<section style="text-align:center; margin:60px 0 40px;">
  <a href="{{ '/assets/portfolio.pdf' | relative_url }}" target="_blank"
     style="
       display:inline-block;
       padding:14px 32px;
       background:#2563eb;
       color:white;
       border-radius:8px;
       text-decoration:none;
       font-size:16px;
       margin:8px;
     ">
    Download CV
  </a>

  <a href="{{ '/' | relative_url }}"
     style="
       display:inline-block;
       padding:14px 32px;
       background:transparent;
       color:#93c5fd;
       border:1px solid #2563eb;
       border-radius:8px;
       text-decoration:none;
       font-size:16px;
       margin:8px;
     ">
    ← Back to Home
  </a>
</section>

</div>
