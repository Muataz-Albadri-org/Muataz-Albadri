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
        Senior Civil Engineer | PhD Candidate | Scan-to-BIM Solutions
      </h3>
    </div>

    <div style="display:flex; flex-direction:column; align-items:center; gap:6px; max-width:760px;">
      <p style="margin:0; text-align:justify;">
        I help engineering firms, contractors, and asset owners transform reality data into digital models,
        driving digital transformation through Scan-to-BIM, automation, and AI-assisted workflows.
      </p>

      <a href="{{ '/about/' | relative_url }}"
        style="margin-top:20px; padding:12px 28px; color:#fff; background:#2C3E50; border-radius:6px; text-decoration:none;">
        About Me
      </a>
    </div>
  </div>
</section>

<!-- ========================= SERVICES ========================== -->
<section style="margin-bottom:80px; padding:40px 32px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:12px;">
  <h2 style="text-align:center;">Digital Solutions</h2>

  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:28px;">

    <div style="padding:22px 24px; background:rgba(255,255,255,0.03); border-radius:10px;">
      <h3>Data Processing & Analysis</h3>
      <p>Automated processing of point clouds to extract geometry and spatial relationships for as-built BIM and asset management.</p>
    </div>

    <div style="padding:22px 24px; background:rgba(255,255,255,0.03); border-radius:10px;">
      <h3>As-Built BIM</h3>
      <p>Automated BIM generation aligned with project objectives, lifecycle needs, and OpenBIM standards.</p>
    </div>

    <div style="padding:22px 24px; background:rgba(255,255,255,0.03); border-radius:10px;">
      <h3>AI & Automation</h3>
      <p>AI-driven Scan-to-BIM workflows to increase speed, consistency, and scalability.</p>
    </div>

  </div>
</section>

<!-- ========================= DEMO ========================== -->
<section style="margin-bottom:80px; text-align:center;">
  <h2>Demo Reel</h2>
  <video autoplay muted loop playsinline style="width:100%; max-width:900px;">
    <source src="{{ '/assets/demo.mp4' | relative_url }}" type="video/mp4">
  </video>
</section>

<!-- ========================= CONTACT ========================== -->
<section style="text-align:center;">
  <h2>Contact</h2>
  <p>Email: muatazs.abed@gmail.com</p>
  <p>
    LinkedIn:
    <a href="https://www.linkedin.com/in/muataz-albadri-2290381a4/" target="_blank">
      linkedin.com/in/muataz-albadri
    </a>
  </p>
</section>

</div>

<footer style="text-align:center; padding:20px 0; color:#777;">
  © {{ site.time | date: "%Y" }} Muataz Albadri · Scan-to-BIM & AI Consulting
</footer>

