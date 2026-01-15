---
layout: landing
permalink: /
title: ""
---
<div style="max-width:1100px; margin:0 auto; padding:40px 20px;">

<!-- ========================= HERO ========================== -->
<section style="margin-bottom:60px;">
  <div style="display:flex; flex-direction:column; align-items:center; text-align:center; gap:20px;">

    <img src="{{ '/assets/images/Muataz.jpg' | relative_url }}" alt="Muataz Albadri"
      style="width:200px; height:200px; border-radius:50%; object-fit:cover; border:3px solid #2C3E50; box-shadow:0 4px 20px rgba(0,0,0,0.2);">

    <div>
      <h1 style="margin:0;">Muataz Albadri</h1>
      <h3 style="margin:6px 0 0; font-weight:400; color:#888; line-height:1.35;">
        Senior Civil Engineer · PhD Candidate · Scan-to-BIM & Digital Construction
      </h3>
    </div>

    <div style="display:flex; flex-direction:column; align-items:center; gap:6px; max-width:760px;">
      <p style="margin:0; text-align:justify; line-height:1.6;">
        I design and deliver Scan-to-BIM solutions that transform your spatial data into reliable digital assets through
        automated and AI-assisted workflows.
      </p>

      <a href="{{ '/about/' | relative_url }}" class="btn-primary"
        style="margin-top:20px; padding:12px 28px; color:#fff; background:#2C3E50; border-radius:6px; text-decoration:none; transition:all 0.3s ease;">
        About Me
      </a>
    </div>
  </div>
</section>


<!-- ========================= SERVICES ========================== -->
<section style="margin:100px 0 80px; padding:40px 32px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:12px;">
  <h2 style="text-align:center; margin-top:0; margin-bottom:50px;">Digital Solutions</h2>

  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:28px;">

    <div style="padding:22px 24px; background:rgba(255,255,255,0.03); border-radius:10px;">
      <h3 style="margin-top:0; margin-bottom:12px;">Spatial Data Processing & Analysis</h3>
      <p style="margin:0; line-height:1.6;">
        Automated processing and analysis of point clouds and imagery to extract accurate geometric,
        semantic, and spatial information supporting modeling and engineering decisions.
      </p>
    </div>

    <div style="padding:22px 24px; background:rgba(255,255,255,0.03); border-radius:10px;">
      <h3 style="margin-top:0; margin-bottom:12px;">As-Built BIM</h3>
      <p style="margin:0; line-height:1.6;">
        Generation of as-built BIM models aligned with project objectives, asset lifecycle requirements,
        and OpenBIM standards (e.g., IFC).
      </p>
    </div>

    <div style="padding:22px 24px; background:rgba(255,255,255,0.03); border-radius:10px;">
      <h3 style="margin-top:0; margin-bottom:12px;">AI & Automation</h3>
      <p style="margin:0; line-height:1.6;">
        Design and implementation of AI-assisted and automated workflows to reduce manual effort,
        improve consistency, and scale Scan-to-BIM delivery.
      </p>
    </div>

  </div>
</section>


<!-- ========================= DEMO ========================== -->
<section style="margin:100px 0 80px; text-align:center;">
  <h2 style="margin-bottom:30px;">Demo Reel</h2>
  <video autoplay muted loop playsinline 
    style="width:100%; max-width:900px; border-radius:12px; box-shadow:0 8px 30px rgba(0,0,0,0.3);">
    <source src="{{ '/assets/demo.mp4' | relative_url }}" type="video/mp4">
  </video>
</section>


<!-- ========================= PROJECTS ========================== -->
<section style="margin:100px 0 80px; padding:40px 32px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:12px;">
  <h2 style="text-align:center; margin-top:0; margin-bottom:50px;">Selected Projects</h2>

  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:28px;">

    <div style="padding:24px; background:rgba(255,255,255,0.03); border-radius:10px; transition:transform 0.3s ease;" class="project-card">
      <h3 style="margin-top:0; margin-bottom:8px;">
  Residential Building Demolition
</h3>

<p style="color:#aaa; margin:0 0 16px 0; font-size:14px;">
  Spain · 2025
</p>

<p style="margin:0 0 8px 0;">
  <strong>Challenge:</strong><br>
  Lack of accurate and up-to-date documentation for an existing residential building scheduled for demolition, requiring reliable digital data for planning and analysis.
</p>

<p style="margin:0 0 8px 0;">
  <strong>Solution:</strong><br>
  Implementation of a Scan-to-BIM workflow using AI-assisted semantic segmentation and automated as-built model generation.
</p>

<p style="margin:0 0 8px 0;">
  <strong>Tools:</strong><br>
  Point clouds, AI-based segmentation algorithms, BIM automation pipelines, IFC-compliant modeling workflows.
</p>

<p style="margin:0;">
  <strong>Outcome:</strong><br>
  Approximately 60% reduction in manual modeling time, with delivery of an IFC-ready as-built BIM model suitable for demolition planning and downstream use.
</p>
    </div>

    <div style="padding:24px; background:rgba(255,255,255,0.03); border-radius:10px; transition:transform 0.3s ease;" class="project-card">
      <h3 style="margin-top:0; margin-bottom:8px; cursor:pointer;">Urban Infrastructure Upgrade</h3>
      <p style="color:#aaa; margin:0 0 16px 0; font-size:14px;">Berlin · 2024</p>
      <ul style="margin:0; padding-left:20px; line-height:1.8;">
        <li>LiDAR and GIS data integration</li>
        <li>Automated utility and asset mapping</li>
        <li>50% faster planning and approval cycles</li>
      </ul>
    </div>

    <div style="padding:24px; background:rgba(255,255,255,0.03); border-radius:10px; transition:transform 0.3s ease;" class="project-card">
      <h3 style="margin-top:0; margin-bottom:8px; cursor:pointer;">Commercial Office Complex</h3>
      <p style="color:#aaa; margin:0 0 16px 0; font-size:14px;">Dubai · 2025</p>
      <ul style="margin:0; padding-left:20px; line-height:1.8;">
        <li>Revit and Navisworks automation workflows</li>
        <li>OpenBIM-based multidisciplinary coordination</li>
        <li>70% reduction in detected clashes</li>
      </ul>
    </div>

  </div>
</section>


<!-- ========================= TECH STACK ========================== -->
<section id="tech-stack" style="margin:80px 0;">
  <h2 style="text-align:center; margin-bottom:32px;">Technology Stack</h2>

  <div style="overflow:hidden; max-width:1100px; margin:0 auto;">
    <div class="tech-scroll" style="
      display:flex;
      gap:48px;
      align-items:center;
      animation:scroll 30s linear infinite;
      white-space:nowrap;
    ">
      <img src="{{ '/assets/logos/python.svg' | relative_url }}" alt="Python" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/revit.svg' | relative_url }}" alt="Revit" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/ifc.svg' | relative_url }}" alt="IFC" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/blenderbim.svg' | relative_url }}" alt="BlenderBIM" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/ai.svg' | relative_url }}" alt="AI" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/autocad.svg' | relative_url }}" alt="AutoCAD" style="height:80px; width:auto; opacity:0.9;">
      <!-- Duplicated for seamless loop -->
      <img src="{{ '/assets/logos/python.svg' | relative_url }}" alt="Python" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/revit.svg' | relative_url }}" alt="Revit" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/ifc.svg' | relative_url }}" alt="IFC" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/blenderbim.svg' | relative_url }}" alt="BlenderBIM" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/ai.svg' | relative_url }}" alt="AI" style="height:80px; width:auto; opacity:0.9;">
      <img src="{{ '/assets/logos/autocad.svg' | relative_url }}" alt="AutoCAD" style="height:80px; width:auto; opacity:0.9;">
    </div>
  </div>
</section>


<!-- ========================= CV ========================== -->
<section style="text-align:center; margin:80px 0;">
  <a href="{{ '/assets/portfolio.pdf' | relative_url }}" target="_blank" class="btn-primary"
    style="display:inline-block; padding:14px 32px; background:#2C3E50; color:white; border-radius:8px; text-decoration:none; font-size:16px; transition:all 0.3s ease;">
    Download CV
  </a>
</section>


<!-- ========================= CONTACT ========================== -->
<section style="text-align:center; margin:80px 0;">
  <h2 style="margin-bottom:24px;">Contact</h2>
  <p style="margin:8px 0;">Email: <a href="mailto:muataz.albadri@gmail.com" style="color:#5DADE2;">muataz.albadri@gmail.com</a></p>
  <p style="margin:8px 0;">
    LinkedIn:
    <a href="https://www.linkedin.com/in/muataz-albadri-2290381a4/" target="_blank" style="color:#5DADE2;">
      linkedin.com/in/muataz-albadri
    </a>
  </p>
</section>


<footer style="text-align:center; padding:40px 0 20px; color:#777; border-top:1px solid rgba(255,255,255,0.08); margin-top:60px;">
  © {{ site.time | date: "%Y" }} Muataz Albadri · Scan-to-BIM & AI Consulting
</footer>

</div>

<!-- ========================= STYLES ========================== -->
<style>
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.tech-scroll img:hover {
  opacity: 1;
  transform: scale(1.1);
}

.tech-scroll img {
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #3d566e !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.project-card:hover {
  transform: translateY(-4px);
  background: rgba(255,255,255,0.05) !important;
}

a {
  transition: color 0.2s ease;
}
</style>
