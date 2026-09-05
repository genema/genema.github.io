---
permalink: /
layout: home
title: "Research & Engineering"
excerpt: "Researcher and algorithm engineer studying long-horizon learning, credit assignment, memory, and machine intelligence."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="profile-intro" aria-labelledby="profile-name">
  <div class="profile-intro__heading">
    <p class="profile-intro__eyebrow">Research &amp; Engineering</p>
    <h1 id="profile-name" class="profile-intro__name" itemprop="name">
      Gehua Ma<span class="typing-cursor" aria-hidden="true"></span>
    </h1>
    <p class="profile-intro__role" itemprop="jobTitle">
      Senior Algorithmic Engineer at
      <a href="https://www.bytedance.com/en/">ByteDance</a>
    </p>
  </div>

  <div class="profile-intro__copy">
    <p class="profile-intro__lead">
      I build learning systems that connect long-horizon objectives with
      reliable credit assignment and memory.
    </p>
    <nav class="profile-links" aria-label="Profile links">
      <a href="mailto:gehuama@icloud.com"><i class="fas fa-envelope" aria-hidden="true"></i>Email</a>
      <a href="https://github.com/genema"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a>
      <a href="https://www.researchgate.net/profile/Gehua-Ma-2"><i class="fab fa-researchgate" aria-hidden="true"></i>ResearchGate</a>
      <a href="https://twitter.com/MarcusMa417"><i class="fab fa-twitter" aria-hidden="true"></i>X / Twitter</a>
    </nav>
  </div>

  <figure class="profile-intro__portrait">
    <img
      src="{{ '/images/ghm.png' | relative_url }}"
      width="502"
      height="640"
      alt="Portrait of Gehua Ma"
      decoding="async"
      fetchpriority="high"
      itemprop="image">
    <figcaption>Hangzhou, China</figcaption>
  </figure>
</section>

<section id="about" class="home-section home-section--about" aria-labelledby="about-title">
  <header class="section-heading">
    <p class="section-heading__index">About</p>
    <div>
      <h2 id="about-title">Research Perspective</h2>
      <p>Connecting learning dynamics, memory, and intelligent behavior.</p>
    </div>
  </header>

  <div class="about-copy">
    <p>
      My work asks how intelligent systems can preserve useful experience,
      assign credit across long horizons, and form reusable representations.
      I approach these questions through recommender systems, associative
      memory, representation learning, and computational neuroscience.
    </p>
    <p>
      Before, I earned my PhD in Artificial Intelligence at
      the State Key Lab of Brain-Machine Intelligence, ZJU. My
      <a href="https://github.com/genema/genema.github.io/blob/master/_publications/Research_on_A_Spiking_Generative_Model_of_Spatiotemporal_Memory_Construction_and_Computation.pdf">dissertation</a>
      investigated how sparse latent codes can support recognition, memory
      formation, and memory-conditioned computation.
    </p>
  </div>
</section>

<section id="recognition" class="home-section" aria-labelledby="recognition-title">
  <header class="section-heading">
    <p class="section-heading__index">01</p>
    <div>
      <h2 id="recognition-title">Recognition &amp; Service</h2>
      <p>Selected honors and academic contributions.</p>
    </div>
  </header>

  <div class="recognition-grid">
    <div>
      <h3>Honors</h3>
      <ul class="plain-list">
        <li>Inaugural <a href="https://www.tencent.com/">Tencent</a> <a href="https://join.qq.com/qingyun.html">Project UP</a> Talent Initiative 入选首届"青云计划"</li>
        <li><a href="https://www.chinamobileltd.com/en/global/home.php">China Mobile</a> Project Golden Seed Talent Initiative</li>
        <li>Award of Honor for Graduate of <a href="https://www.zju.edu.cn/english/">Zhejiang University</a></li>
        <li>Outstanding Graduate Student of CCNT, Zhejiang University</li>
        <li>Graduate of Merit / Triple A Graduate, Zhejiang University</li>
      </ul>
    </div>
    <div>
      <h3>Academic Service</h3>
      <p>
        Served for top-tier tracks&journals including NeurIPS, ICLR, ICML, IJCAI, ICASSP, Proceedings of the IEEE,
        Nature Communications, IEEE TPAMI, IEEE TNNLS, Neural Networks, and
        related venues.
      </p>
      <h3 class="recognition-grid__subheading">International Exchange</h3>
      <ul class="plain-list plain-list--compact">
        <li>Chinese University of Hong Kong, 2016</li>
        <li>Technical University of Munich, 2014</li>
        <li>New York University, 2012</li>
      </ul>
    </div>
  </div>
</section>

<section id="research" class="home-section" aria-labelledby="research-title">
  <header class="section-heading">
    <p class="section-heading__index">02</p>
    <div>
      <h2 id="research-title">Selected Research</h2>
      <p>Work on memory, credit assignment, and learning systems.</p>
    </div>
  </header>

  <div class="research-list">
    <article class="research-item">
      <figure class="research-item__visual">
        <img src="{{ '/images/research/dissertation.jpg' | relative_url }}" width="480" height="296" loading="lazy" decoding="async" alt="Brain-inspired long-term and short-term memory architecture">
      </figure>
      <div class="research-item__meta">
        <span>2024</span>
        <span>PhD Dissertation</span>
      </div>
      <div class="research-item__body">
        <h3>
          <a href="https://github.com/genema/genema.github.io/blob/master/_publications/Research_on_A_Spiking_Generative_Model_of_Spatiotemporal_Memory_Construction_and_Computation.pdf">
            Research on a Spiking Generative Model of Spatiotemporal Memory Construction and Computation
          </a>
        </h3>
        <p>A unified study of multimodal world modeling, associative memory, and credit assignment in binary neural systems.</p>
        <div class="research-tags" aria-label="Topics">
          <span>World Models</span><span>Associative Memory</span><span>Credit Assignment</span>
        </div>
      </div>
    </article>

    <article class="research-item">
      <figure class="research-item__visual">
        <img src="{{ '/images/research/tecos.jpg' | relative_url }}" width="480" height="130" loading="lazy" decoding="async" alt="Temporal conditioning latent-variable model">
      </figure>
      <div class="research-item__meta">
        <span>2023</span>
        <span>NeurIPS</span>
      </div>
      <div class="research-item__body">
        <h3>
          <a href="https://neurips.cc/virtual/2023/poster/71480">
            Temporal Conditioning Spiking Latent Variable Models of the Neural Response to Natural Visual Scenes
          </a>
        </h3>
        <p>A temporally conditioned latent-variable model for predicting neural responses to natural visual scenes.</p>
        <div class="research-tags" aria-label="Topics">
          <span> Memory-conditioned Computation </span><span>Latent Variables</span><span>Time Series</span>
        </div>
      </div>
    </article>

    <article class="research-item">
      <figure class="research-item__visual">
        <img src="{{ '/images/research/noisy-snn.jpg' | relative_url }}" width="480" height="260" loading="lazy" decoding="async" alt="Noise-driven learning in a spiking neural network">
      </figure>
      <div class="research-item__meta">
        <span>2022</span>
        <span>CELL Patterns</span>
      </div>
      <div class="research-item__body">
        <h3>
          <a href="https://www.cell.com/patterns/fulltext/S2666-3899(23)00200-3">
            Exploiting Noise as a Resource for Computation and Learning in Spiking Neural Networks
          </a>
        </h3>
        <p>A theoretical and empirical framework that turns neuronal noise into a useful signal for learning and computation.</p>
        <div class="research-tags" aria-label="Topics">
          <span>Gradient Estimator</span><span>Probabilistic Neural Model</span><span>Credit Assignment</span>
        </div>
      </div>
    </article>

    <article class="research-item">
      <figure class="research-item__visual">
        <img src="{{ '/images/research/dual-memory.jpg' | relative_url }}" width="480" height="248" loading="lazy" decoding="async" alt="Dual-memory architecture for continual learning">
      </figure>
      <div class="research-item__meta">
        <span>2021</span>
        <span>Neural Networks</span>
      </div>
      <div class="research-item__body">
        <h3>
          <a href="https://github.com/genema/genema.github.io/blob/master/files/1-s2.0-S0893608023003672-main.pdf">
            Dual Memory Model for Experience-once Task-incremental Lifelong Learning
          </a>
        </h3>
        <p>A complementary-memory architecture designed for rapid, experience-once task-incremental learning.</p>
        <div class="research-tags" aria-label="Topics">
          <span>Continual Learning</span><span>Associative Memory</span>
        </div>
      </div>
    </article>

    <article class="research-item">
      <figure class="research-item__visual research-item__visual--contain">
        <img src="{{ '/images/research/step.jpg' | relative_url }}" width="720" height="336" loading="lazy" decoding="async" alt="Architecture of the STEP spatiotemporal recommendation model">
      </figure>
      <div class="research-item__meta">
        <span>2020</span>
        <span>AAAI</span>
      </div>
      <div class="research-item__body">
        <h3>
          <a href="https://ojs.aaai.org/index.php/AAAI/article/view/27813">
            Successive POI Recommendation via Brain-inspired Spatiotemporal Aware Representation
          </a>
        </h3>
        <p>A brain-inspired model that jointly captures spatial and temporal context for successive point-of-interest recommendation.</p>
        <div class="research-tags" aria-label="Topics">
          <span>Recommendation</span><span>Representation Learning</span><span>spatiotemporal model</span>
        </div>
      </div>
    </article>

    <article class="research-item">
      <figure class="research-item__visual research-item__visual--contain">
        <img src="{{ '/images/research/bioimaging.jpg' | relative_url }}" width="720" height="584" loading="lazy" decoding="async" alt="Microscopy and 3D reconstruction of dissolvable microneedle arrays">
      </figure>
      <div class="research-item__meta">
        <span>2020</span>
        <span>Research</span>
      </div>
      <div class="research-item__body">
        <h3>
          <a href="https://doi.org/10.34133/2022/9758491">
            Bioimaging of Dissolvable Microneedle Arrays: Challenges and Opportunities
          </a>
        </h3>
        <p>A review of imaging methods, measurement challenges, and opportunities for medical bioimages.</p>
        <div class="research-tags" aria-label="Topics">
          <span>Bioinformatics</span><span>Bioimaging</span>
        </div>
      </div>
    </article>
  </div>
</section>

<section id="experience" class="home-section home-section--last" aria-labelledby="experience-title">
  <header class="section-heading">
    <p class="section-heading__index">03</p>
    <div>
      <h2 id="experience-title">Experience</h2>
      <p>Applied research across recommender systems, machine intelligence, and computational neuroscience.</p>
    </div>
  </header>

  <ol class="timeline">
    <li>
      <div class="timeline__date">2024.08 - Present</div>
      <div>
        <h3><a href="https://www.bytedance.com/en/">ByteDance Inc.</a></h3>
        <p class="timeline__role">Senior Algorithmic Engineer</p>
        <p>Long-term reward and credit assignment.</p>
      </div>
    </li>
    <li>
      <div class="timeline__date">2022.07 - 2024.07</div>
      <div>
        <h3><a href="http://liangzhulab.zju.edu.cn">Liangzhu Laboratory</a></h3>
        <p class="timeline__role">Research Intern</p>
        <p>Representation learning and associative memory.</p>
      </div>
    </li>
    <li>
      <div class="timeline__date">2020.09 - 2024.06</div>
      <div>
        <h3><a href="http://fit.zju.edu.cn/fitcn/2023/0406/c34346a2738116/page.htm">Brain-Machine Intelligence State Key Lab</a></h3>
        <p class="timeline__role">PhD Candidate, Zhejiang University</p>
      </div>
    </li>
    <li>
      <div class="timeline__date">2020.07 - 2021.06</div>
      <div>
        <h3><a href="https://www.zhejianglab.com/home">Zhejiang Laboratory</a></h3>
        <p class="timeline__role">Research Intern</p>
        <p>Credit assignment and neuromorphic algorithms.</p>
      </div>
    </li>
  </ol>
</section>
