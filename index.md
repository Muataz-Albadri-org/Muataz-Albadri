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
      style="width:200px; height:200px; border-radius:50%; object-fit:cover; border:3px solid #2C3E50;">

    <div>
      <h1 style="margin:0;">Muataz Albadri</h1>
      <h3 style="margin:6px 0 0; font-weight:400; color:#666; line-height:1.35;">
        Senior Civil Engineer · PhD Candidate · Scan-to-BIM & Digital Construction
      </h3>
    </div>

    <div style="display:flex; flex-direction:column; align-items:center; gap:6px; max-width:760px;">
      <p style="margin:0; text-align:justify;">
        I design and deliver Scan-to-BIM solutions that transform reality capture data into reliable,
        interoperable digital assets, bridging field conditions with intelligent construction through
        automated and AI-assisted workflows.
      </p>

      <a href="{{ '/about/' | relative_url }}"
        style="margin-top:20px; padding:12px 28px; color:#fff; background:#2C3E50; border-radius:6px; text-decoration:none;">
        About Me
      </a>
    </div>
  </div>
</section>


<!-- ========================= SERVICES ========================== -->
<section style="margin:100px 0 80px; padding:40px 32px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:12px;">
  <h2 style="text-align:center; margin-top:0;">Digital Solutions</h2>

  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:28px;">

    <div style="padding:22px 24px; background:rgba(255,255,255,0.03); border-radius:10px;">
      <h3>Spatial Data Processing & Analysis</h3>
      <p>
        Automated processing and analysis of point clouds and imagery to extract accurate geometric,
        semantic, and spatial information supporting modeling and engineering decisions.
      </p>
    </div>

    <div style="padding:22px 24px; background:rgba(255,255,255,0.03); border-radius:10px;">
      <h3>As-Built BIM</h3>
      <p>
        Generation of as-built BIM models aligned with project objectives, asset lifecycle requirements,
        and OpenBIM standards (e.g., IFC).
      </p>
    </div>

    <div style="padding:22px 24px; background:rgba(255,255,255,0.03); border-radius:10px;">
      <h3>AI & Automation</h3>
      <p>
        Design and implementation of AI-assisted and automated workflows to reduce manual effort,
        improve consistency, and scale Scan-to-BIM delivery.
      </p>
    </div>

  </div>
</section>

<!-- ========================= DEMO ========================== -->
<section style="margin:100px 0 80px; text-align:center;">
  <h2>Demo Reel</h2>
  <video autoplay muted loop playsinline style="width:100%; max-width:900px;">
    <source src="{{ '/assets/demo.mp4' | relative_url }}" type="video/mp4">
  </video>
</section>


<!-- ========================= PROJECTS ========================== -->
<section style="margin-bottom:80px; padding:40px 32px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:12px;">
<h2 style="text-align:center;">Selected Projects</h2>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:28px;">

<div style="padding:24px; background:rgba(255,255,255,0.03); border-radius:10px;">
<h3 style="cursor:pointer;">Heritage Building Renovation</h3>
<p style="color:#aaa;">London · 2025</p>
<div class="proj">
<ul>
<li>AI-based semantic segmentation of point clouds</li>
<li>Automated IFC-compliant as-built BIM generation</li>
<li>60% reduction in manual modeling time</li>
</ul>
</div>
</div>

<div style="padding:24px; background:rgba(255,255,255,0.03); border-radius:10px;">
<h3 style="cursor:pointer;">Urban Infrastructure Upgrade</h3>
<p style="color:#aaa;">Berlin · 2024</p>
<div class="proj">
<ul>
<li>LiDAR and GIS data integration</li>
<li>Automated utility and asset mapping</li>
<li>50% faster planning and approval cycles</li>
</ul>
</div>
</div>

<div style="padding:24px; background:rgba(255,255,255,0.03); border-radius:10px;">
<h3 style="cursor:pointer;">Commercial Office Complex</h3>
<p style="color:#aaa;">Dubai · 2025</p>
<div class="proj">
<ul>
<li>Revit and Navisworks automation workflows</li>
<li>OpenBIM-based multidisciplinary coordination</li>
<li>70% reduction in detected clashes</li>
</ul>
</div>
</div>

</div>
</section>

<!-- ========================= TECH STACK ========================== -->
<section id="tech-stack" style="margin:80px 0;">
  <h2 style="text-align:center; margin-bottom:32px;">Technology Stack</h2>

  <div style="overflow:hidden; max-width:1100px; margin:0 auto;">
    <div style="
      display:flex;
      gap:48px;
      align-items:center;
      animation: scroll 30s linear infinite;
      white-space:nowrap;
    ">

      <img src="{{ '/assets/logos/python.svg' | relative_url }}"
           alt="Python – Automation and data processing"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/revit.svg' | relative_url }}"
           alt="Autodesk Revit – BIM authoring"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/ifc.svg' | relative_url }}"
           alt="IFC – OpenBIM interoperability"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/blenderbim.svg' | relative_url }}"
           alt="BlenderBIM – Open-source BIM workflows"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/ai.svg' | relative_url }}"
           alt="AI and machine learning for semantic automation"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/autocad.svg' | relative_url }}"
           alt="AutoCAD – Legacy CAD integration"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <!-- repeated logos for continuous scroll -->

      <img src="{{ '/assets/logos/python.svg' | relative_url }}"
           alt="Python – Automation and data processing"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/revit.svg' | relative_url }}"
           alt="Autodesk Revit – BIM authoring"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/ifc.svg' | relative_url }}"
           alt="IFC – OpenBIM interoperability"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/blenderbim.svg' | relative_url }}"
           alt="BlenderBIM – Open-source BIM workflows"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/ai.svg' | relative_url }}"
           alt="AI and machine learning for semantic automation"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">

      <img src="{{ '/assets/logos/autocad.svg' | relative_url }}"
           alt="AutoCAD – Legacy CAD integration"
           style="height:80px; width:auto; opacity:0.9; transition:transform 0.3s;">
    </div>
  </div>
</section>

<!-- Inline keyframes for scroll animation -->
<style>
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

img:hover {
  opacity: 1;
  transform: scale(1.05);
  transition: 0.3s;
}
</style>




<!-- ========================= CV ========================== -->
<section style="text-align:center; margin:80px 0;">
<a href="{{ '/assets/portfolio.pdf' | relative_url }}" target="_blank"
style="padding:14px 32px; background:#2C3E50; color:white; border-radius:8px; text-decoration:none; font-size:16px;">
Download CV
</a>
</section>

<!-- ========================= CONTACT ========================== -->
<section style="text-align:center;">
  <h2>Contact</h2>
  <p>Email: muataz.albadri@gmail.com</p>
  <p>
    LinkedIn:
    <a href="https://www.linkedin.com/in/muataz-albadri-2290381a4/" target="_blank">
      linkedin.com/in/muataz-albadri
    </a>
  </p>
</section>

<footer style="text-align:center; padding:20px 0; color:#777;">
  © {{ site.time | date: "%Y" }} Muataz Albadri · Scan-to-BIM & AI Consulting
</footer>
