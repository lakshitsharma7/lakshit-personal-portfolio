import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreeBackground
 * 
 * Integrated 3D WebGL background combining:
 * 1. Morphing 3D Particle Sculpture (PYTHON, Bar Chart, DNA, Regression, DATA, Network)
 * 2. Rolling 3D Data Analytics Bar Grid
 * 3. Glowing Network Nodes & Connecting Lines
 * 4. Floating Programming Code Snippets
 * 5. Interactive Cursor Repulsion & Camera Parallax
 *
 * Strict Color Palette:
 * - Jet Black: #0A0A0A
 * - Cerulean Blue: #007BA7
 * - Neon Rose: #FF2D95
 */

const COLOR_JET_BLACK = '#0A0A0A';
const COLOR_CERULEAN = '#007BA7';
const COLOR_NEON_ROSE = '#FF2D95';

const THREE_JET_BLACK = new THREE.Color(COLOR_JET_BLACK);
const THREE_CERULEAN = new THREE.Color(COLOR_CERULEAN);
const THREE_NEON_ROSE = new THREE.Color(COLOR_NEON_ROSE);

export const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
    } catch {
      return; // WebGL not available, gracefully exit
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(THREE_JET_BLACK, 1);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0A0A0A, 14, 38);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 1.8, 14);

    // Scene Lighting using strict palette
    const ambientLight = new THREE.AmbientLight(0x007BA7, 0.65);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x007BA7, 0.85);
    dirLight.position.set(4, 10, 6);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xFF2D95, 1.4, 35);
    pointLight.position.set(-4, 3, 3);
    scene.add(pointLight);

    // Helper: Random in range
    const rnd = (a: number, b: number) => a + Math.random() * (b - a);
    const gauss = () => {
      let u = 0;
      for (let i = 0; i < 4; i++) u += Math.random();
      return (u - 2) / 0.58;
    };

    const isMobile = window.innerWidth < 768;
    const N = isMobile ? 3600 : 6000;
    const tmp = new THREE.Color();

    // ----------------------------------------------------
    // Particle Sprite Texture
    // ----------------------------------------------------
    const dotCanvas = document.createElement('canvas');
    dotCanvas.width = dotCanvas.height = 64;
    const dotCtx = dotCanvas.getContext('2d');
    if (dotCtx) {
      const grd = dotCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grd.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grd.addColorStop(0.25, 'rgba(0, 123, 167, 0.9)');
      grd.addColorStop(0.65, 'rgba(255, 45, 149, 0.4)');
      grd.addColorStop(1, 'rgba(10, 10, 10, 0)');
      dotCtx.fillStyle = grd;
      dotCtx.fillRect(0, 0, 64, 64);
    }
    const dotTex = new THREE.CanvasTexture(dotCanvas);

    // ----------------------------------------------------
    // LAYER 1: Morphing 3D Particle Sculpture (from File 2)
    // ----------------------------------------------------
    function put(P: Float32Array, C: Float32Array, i: number, x: number, y: number, z: number, col: THREE.Color) {
      P[i * 3] = x; P[i * 3 + 1] = y; P[i * 3 + 2] = z;
      C[i * 3] = col.r; C[i * 3 + 1] = col.g; C[i * 3 + 2] = col.b;
    }

    // 1. Text Shapes (PYTHON, DATA)
    function textShape(str: string, width: number, colorFn: (c: THREE.Color, kx: number, ky: number) => void) {
      const c = document.createElement('canvas');
      c.width = 1600; c.height = 520;
      const ctx = c.getContext('2d');
      if (!ctx) return { pts: new Float32Array(N * 3), cols: new Float32Array(N * 3) };

      const fam = '"Plus Jakarta Sans", "Inter", "Segoe UI", system-ui, sans-serif';
      ctx.font = '700 300px ' + fam;
      let w = ctx.measureText(str).width;
      const px = Math.floor(300 * Math.min(1, 1500 / w));
      ctx.font = '700 ' + px + 'px ' + fam;
      w = ctx.measureText(str).width;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.fillText(str, 800, 260);

      const d = ctx.getImageData(0, 0, 1600, 520).data;
      const list: number[] = [];
      let minY = 1e9, maxY = -1e9, minX = 1e9, maxX = -1e9;
      for (let y = 0; y < 520; y += 4) {
        for (let x = 0; x < 1600; x += 4) {
          if (d[(y * 1600 + x) * 4 + 3] > 128) {
            list.push(x, y);
            if (y < minY) minY = y; if (y > maxY) maxY = y;
            if (x < minX) minX = x; if (x > maxX) maxX = x;
          }
        }
      }
      const s = width / w;
      const cnt = list.length / 2;
      const P = new Float32Array(N * 3);
      const C = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const k = Math.floor(Math.random() * cnt);
        const gx = list[k * 2], gy = list[k * 2 + 1];
        const kx = (gx - minX) / Math.max(1, maxX - minX);
        const ky = (gy - minY) / Math.max(1, maxY - minY);
        colorFn(tmp, kx, ky);
        put(P, C, i, (gx - 800 + rnd(-2, 2)) * s, -(gy - 260 + rnd(-2, 2)) * s, rnd(-0.4, 0.4), tmp);
      }
      return { pts: P, cols: C };
    }

    // 2. Bar Chart Shape
    function barShape() {
      const H = [2.2, 3.0, 2.5, 3.8, 3.3, 4.6, 4.1, 5.4, 6.2];
      const w = 0.9, gap = 0.38, yoff = -3.2;
      const total = H.length * w + (H.length - 1) * gap;
      const x0 = -total / 2;
      const sum = H.reduce((a, b) => a + b, 0);
      const P = new Float32Array(N * 3);
      const C = new Float32Array(N * 3);
      const nBars = Math.floor(N * 0.74);
      const nAx = Math.floor(N * 0.14);

      for (let i = 0; i < N; i++) {
        if (i < nBars) {
          let r = Math.random() * sum, b = 0;
          while (b < H.length - 1 && r > H[b]) { r -= H[b]; b++; }
          const h = H[b];
          tmp.copy(THREE_CERULEAN).lerp(THREE_NEON_ROSE, h / 6.2);
          put(P, C, i, x0 + b * (w + gap) + rnd(0, w), yoff + rnd(0, h), rnd(-0.45, 0.45), tmp);
        } else if (i < nBars + nAx) {
          tmp.copy(THREE_CERULEAN).multiplyScalar(0.45);
          if (Math.random() < 0.6) {
            put(P, C, i, rnd(x0 - 0.5, -x0 + 0.5), yoff + rnd(-0.03, 0.03), rnd(-0.05, 0.05), tmp);
          } else {
            put(P, C, i, x0 - 0.5 + rnd(-0.03, 0.03), yoff + rnd(0, 7.4), rnd(-0.05, 0.05), tmp);
          }
        } else {
          const u = Math.random();
          put(P, C, i, x0 + u * total, yoff + 2.8 + u * 4.2 + Math.sin(u * 9) * 0.15 + rnd(-0.04, 0.04), rnd(-0.05, 0.05), THREE_NEON_ROSE);
        }
      }
      return { pts: P, cols: C };
    }

    // 3. DNA Helix Shape
    function helixShape() {
      const R = 2.2, turns = 3.2, Hh = 10, rungs = 26;
      const P = new Float32Array(N * 3);
      const C = new Float32Array(N * 3);
      const at = (t: number, off: number) => {
        const a = t * turns * Math.PI * 2 + off;
        return [R * Math.cos(a), (t - 0.5) * Hh, R * Math.sin(a)];
      };
      const nStrand = Math.floor(N * 0.68);

      for (let i = 0; i < N; i++) {
        if (i < nStrand) {
          const isFirstStrand = i % 2 === 0;
          const t = Math.random();
          const p = at(t, isFirstStrand ? 0 : Math.PI);
          put(P, C, i, p[0] + rnd(-0.14, 0.14), p[1] + rnd(-0.14, 0.14), p[2] + rnd(-0.14, 0.14), isFirstStrand ? THREE_CERULEAN : THREE_NEON_ROSE);
        } else {
          const tr = Math.floor(Math.random() * rungs) / (rungs - 1) * 0.98 + 0.01;
          const a = at(tr, 0), b = at(tr, Math.PI);
          const s = Math.random();
          tmp.copy(THREE_CERULEAN).lerp(THREE_NEON_ROSE, s);
          put(P, C, i, a[0] + (b[0] - a[0]) * s, a[1] + (b[1] - a[1]) * s + rnd(-0.03, 0.03), a[2] + (b[2] - a[2]) * s, tmp);
        }
      }
      return { pts: P, cols: C };
    }

    // 4. Regression Scatter Plot Shape
    function scatterShape() {
      const P = new Float32Array(N * 3);
      const C = new Float32Array(N * 3);
      const nAx = Math.floor(N * 0.1);
      const nLine = Math.floor(N * 0.08);

      for (let i = 0; i < N; i++) {
        if (i < nAx) {
          const m = Math.random();
          tmp.copy(THREE_CERULEAN).multiplyScalar(0.4);
          if (m < 0.4) put(P, C, i, rnd(-5.4, 5.4), -3.4, 0, tmp);
          else if (m < 0.75) put(P, C, i, -5.4, rnd(-3.4, 3.8), 0, tmp);
          else put(P, C, i, -5.4, -3.4, rnd(-3, 3), tmp);
        } else if (i < nAx + nLine) {
          const x = rnd(-4.8, 4.8);
          put(P, C, i, x, 0.55 * x + rnd(-0.03, 0.03), rnd(-0.04, 0.04), THREE_NEON_ROSE);
        } else {
          const px = rnd(-4.6, 4.6);
          const res = gauss() * 0.8;
          let py = 0.55 * px + res;
          py = Math.max(-3.2, Math.min(3.6, py));
          tmp.copy(THREE_CERULEAN).lerp(THREE_NEON_ROSE, Math.min(1, Math.abs(res) / 1.8));
          put(P, C, i, px, py, rnd(-2.6, 2.6), tmp);
        }
      }
      return { pts: P, cols: C };
    }

    // 5. Network Sphere Shape
    function sphereShape() {
      const R = 4.3;
      const P = new Float32Array(N * 3);
      const C = new Float32Array(N * 3);

      for (let i = 0; i < N; i++) {
        const inner = Math.random() < 0.1;
        const rad = inner ? R * rnd(0.2, 0.9) : R;
        const lat = Math.asin(rnd(-1, 1));
        let lon = rnd(0, Math.PI * 2);
        let col: THREE.Color;

        if (!inner && Math.random() < 0.3) {
          lon = Math.round(lon / (Math.PI / 6)) * (Math.PI / 6);
          col = THREE_NEON_ROSE;
        } else {
          tmp.copy(THREE_CERULEAN).lerp(THREE_NEON_ROSE, (Math.sin(lat) + 1) / 2);
          col = tmp;
        }
        put(P, C, i, rad * Math.cos(lat) * Math.cos(lon), rad * Math.sin(lat), rad * Math.cos(lat) * Math.sin(lon), col);
      }
      return { pts: P, cols: C };
    }

    const shapes = [
      textShape('PYTHON', 11.2, (c, _kx, ky) => { c.copy(THREE_CERULEAN).lerp(THREE_NEON_ROSE, ky); }),
      barShape(),
      helixShape(),
      scatterShape(),
      textShape('DATA', 8.6, (c, kx) => { c.copy(THREE_NEON_ROSE).lerp(THREE_CERULEAN, kx); }),
      sphereShape()
    ];

    // Main particle cloud
    const pos = new Float32Array(N * 3);
    const vel = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const stiff = new Float32Array(N);
    const phase = new Float32Array(N);

    for (let i = 0; i < N; i++) {
      const r = rnd(8, 22), a = rnd(0, Math.PI * 2), b = Math.acos(rnd(-1, 1));
      pos[i * 3] = r * Math.sin(b) * Math.cos(a);
      pos[i * 3 + 1] = r * Math.cos(b);
      pos[i * 3 + 2] = r * Math.sin(b) * Math.sin(a);
      col[i * 3] = 0.0; col[i * 3 + 1] = 0.48; col[i * 3 + 2] = 0.65; // Cerulean start
      stiff[i] = rnd(0.012, 0.034);
      phase[i] = rnd(0, Math.PI * 2);
    }

    const cloudGeo = new THREE.BufferGeometry();
    cloudGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    cloudGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const cloudMat = new THREE.PointsMaterial({
      size: 0.11,
      map: dotTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const cloud = new THREE.Points(cloudGeo, cloudMat);
    const sculptureGroup = new THREE.Group();
    sculptureGroup.add(cloud);
    scene.add(sculptureGroup);

    // Orbit Rings
    const rings: THREE.LineLoop[] = [];
    const createRing = (r: number, tx: number, tz: number, color: number, op: number, spd: number) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i < 180; i++) {
        const a = (i / 180) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
      }
      const g = new THREE.BufferGeometry().setFromPoints(pts);
      const l = new THREE.LineLoop(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity: op }));
      l.rotation.x = tx; l.rotation.z = tz;
      l.userData = { spd };
      sculptureGroup.add(l);
      rings.push(l);
    };

    createRing(7.0, 1.2, 0.3, 0x007BA7, 0.32, 0.12);
    createRing(7.8, 0.5, -0.6, 0xFF2D95, 0.25, -0.09);
    createRing(8.6, 1.5, 0.9, 0x007BA7, 0.18, 0.06);

    // Shape Morphing State
    let curShapeIdx = 0;
    let tgtPts = shapes[0].pts;
    let tgtCols = shapes[0].cols;

    const setShape = (i: number, burst: boolean) => {
      curShapeIdx = i;
      tgtPts = shapes[i].pts;
      tgtCols = shapes[i].cols;
      if (burst) {
        for (let k = 0; k < N; k++) {
          vel[k * 3] += rnd(-0.45, 0.45);
          vel[k * 3 + 1] += rnd(-0.45, 0.45);
          vel[k * 3 + 2] += rnd(-0.45, 0.45);
        }
      }
    };
    setShape(0, false);

    // ----------------------------------------------------
    // LAYER 2: Rolling 3D Data Bars (from File 1)
    // ----------------------------------------------------
    const GRID = 12;
    const barsGroup = new THREE.Group();
    const barGeo = new THREE.BoxGeometry(0.55, 1, 0.55);
    barGeo.translate(0, 0.5, 0);

    const barMat = new THREE.MeshStandardMaterial({
      roughness: 0.35,
      metalness: 0.2,
      wireframe: false,
    });
    const bars = new THREE.InstancedMesh(barGeo, barMat, GRID * GRID);
    barsGroup.add(bars);
    scene.add(barsGroup);

    const barDummy = new THREE.Object3D();
    const cLow = THREE_JET_BLACK;
    const cMid = THREE_CERULEAN;
    const cHigh = THREE_NEON_ROSE;

    function updateBars(t: number) {
      const half = (GRID - 1) / 2;
      let idx = 0;
      for (let gx = 0; gx < GRID; gx++) {
        for (let gz = 0; gz < GRID; gz++) {
          const x = (gx - half) * 0.82;
          const z = (gz - half) * 0.82;
          const d = Math.sqrt(x * x + z * z);
          const h = 0.25 + (Math.sin(d * 0.85 - t * 1.2) + Math.cos(x * 0.45 + t * 0.55) + 2) * 0.48;

          barDummy.position.set(x, 0, z);
          barDummy.scale.set(1, h, 1);
          barDummy.updateMatrix();
          bars.setMatrixAt(idx, barDummy.matrix);

          const k = Math.min(1, Math.max(0, (h - 0.25) / 1.8));
          if (k < 0.5) {
            tmp.copy(cLow).lerp(cMid, k * 2);
          } else {
            tmp.copy(cMid).lerp(cHigh, (k - 0.5) * 2);
          }
          bars.setColorAt(idx, tmp);
          idx++;
        }
      }
      bars.instanceMatrix.needsUpdate = true;
      if (bars.instanceColor) bars.instanceColor.needsUpdate = true;
    }

    // ----------------------------------------------------
    // LAYER 3: Glowing Network Nodes & Connecting Lines (File 1)
    // ----------------------------------------------------
    const NODES = 52;
    const netGroup = new THREE.Group();
    scene.add(netGroup);

    const netBase: THREE.Vector3[] = [];
    const netPhase: number[] = [];
    const nodePos = new Float32Array(NODES * 3);

    for (let n = 0; n < NODES; n++) {
      netBase.push(new THREE.Vector3(rnd(-22, 22), rnd(-12, 12), -2 - rnd(0, 14)));
      netPhase.push(Math.random() * Math.PI * 2);
    }

    const netNodeGeo = new THREE.BufferGeometry();
    netNodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));
    const netNodes = new THREE.Points(
      netNodeGeo,
      new THREE.PointsMaterial({
        color: 0xFF2D95,
        size: 0.18,
        map: dotTex,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      })
    );
    netGroup.add(netNodes);

    const MAX_SEG = 380;
    const linePos = new Float32Array(MAX_SEG * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    lineGeo.setDrawRange(0, 0);

    const netLines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({
        color: 0x007BA7,
        transparent: true,
        opacity: 0.32,
        blending: THREE.AdditiveBlending,
      })
    );
    netGroup.add(netLines);

    function updateNetwork(t: number) {
      for (let i = 0; i < NODES; i++) {
        const b = netBase[i], p = netPhase[i];
        nodePos[i * 3] = b.x + Math.sin(t * 0.35 + p) * 0.9;
        nodePos[i * 3 + 1] = b.y + Math.cos(t * 0.3 + p * 1.3) * 0.8;
        nodePos[i * 3 + 2] = b.z + Math.sin(t * 0.25 + p * 0.7) * 0.9;
      }
      netNodeGeo.attributes.position.needsUpdate = true;

      let seg = 0;
      for (let a = 0; a < NODES && seg < MAX_SEG; a++) {
        for (let c = a + 1; c < NODES && seg < MAX_SEG; c++) {
          const dx = nodePos[a * 3] - nodePos[c * 3];
          const dy = nodePos[a * 3 + 1] - nodePos[c * 3 + 1];
          const dz = nodePos[a * 3 + 2] - nodePos[c * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < 18) {
            const o = seg * 6;
            linePos[o] = nodePos[a * 3]; linePos[o + 1] = nodePos[a * 3 + 1]; linePos[o + 2] = nodePos[a * 3 + 2];
            linePos[o + 3] = nodePos[c * 3]; linePos[o + 4] = nodePos[c * 3 + 1]; linePos[o + 5] = nodePos[c * 3 + 2];
            seg++;
          }
        }
      }
      lineGeo.setDrawRange(0, seg * 2);
      lineGeo.attributes.position.needsUpdate = true;
    }

    // ----------------------------------------------------
    // LAYER 4: Floating Code Snippets (Strict Palette)
    // ----------------------------------------------------
    const codeGroup = new THREE.Group();
    scene.add(codeGroup);

    const snippets = [
      ['import pandas as pd', COLOR_CERULEAN],
      ['df.groupby("region")', COLOR_NEON_ROSE],
      ['def train(model):', COLOR_CERULEAN],
      ['SELECT * FROM telemetry', COLOR_NEON_ROSE],
      ['np.array([1, 2, 3])', COLOR_CERULEAN],
      ['plt.show()', COLOR_NEON_ROSE],
      ['{ }', COLOR_CERULEAN],
      ['</>', COLOR_NEON_ROSE],
      ['df.describe()', COLOR_CERULEAN],
      ['async fetch_api()', COLOR_NEON_ROSE],
      ['pip install scikit-learn', COLOR_CERULEAN],
      ['git push origin main', COLOR_NEON_ROSE],
      ['lambda x: x ** 2', COLOR_CERULEAN],
      ['class Pipeline:', COLOR_NEON_ROSE],
      ['r2_score(y, y_hat)', COLOR_CERULEAN],
      ['sns.lineplot(data)', COLOR_NEON_ROSE]
    ];

    const codeLabels: THREE.Sprite[] = [];

    snippets.forEach(([text, color]) => {
      const c = document.createElement('canvas');
      c.width = 640; c.height = 96;
      const ctx = c.getContext('2d');
      if (!ctx) return;
      ctx.font = '600 36px "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = color;
      ctx.fillText(text, 12, 48);

      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.LinearFilter;
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        opacity: 0.42,
        depthWrite: false,
      });

      const sp = new THREE.Sprite(mat);
      const scaleX = (640 / 96) * 0.58;
      sp.scale.set(scaleX, 0.58, 1);
      sp.center.set(0, 0.5);
      sp.position.set(rnd(-26, 22), rnd(-12, 12), -1 - rnd(2, 14));
      sp.userData = { speed: rnd(0.12, 0.28) };
      codeGroup.add(sp);
      codeLabels.push(sp);
    });

    // ----------------------------------------------------
    // LAYER 5: Background Deep Dust
    // ----------------------------------------------------
    const dustN = 350;
    const dustP = new Float32Array(dustN * 3);
    for (let d = 0; d < dustN; d++) {
      dustP[d * 3] = rnd(-32, 32);
      dustP[d * 3 + 1] = rnd(-18, 18);
      dustP[d * 3 + 2] = rnd(-30, -5);
    }
    const dustG = new THREE.BufferGeometry();
    dustG.setAttribute('position', new THREE.BufferAttribute(dustP, 3));
    const dust = new THREE.Points(
      dustG,
      new THREE.PointsMaterial({
        size: 0.08,
        map: dotTex,
        color: 0x007BA7,
        transparent: true,
        opacity: 0.35,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(dust);

    // ----------------------------------------------------
    // Layout and Viewport Scaling
    // ----------------------------------------------------
    let halfW = 13;
    const handleLayout = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      halfW = Math.tan((27.5 * Math.PI) / 180) * 14 * camera.aspect;

      if (camera.aspect < 0.95) {
        // Mobile view: center sculpture and lower bars
        sculptureGroup.position.set(0, -1.8, 0);
        sculptureGroup.scale.setScalar(Math.min(0.85, halfW / 6.2));

        barsGroup.position.set(0, -4.8, -7);
        barsGroup.scale.setScalar(0.7);
      } else {
        // Desktop view: position sculpture on the right
        const xPos = halfW * 0.42;
        sculptureGroup.position.set(xPos, 0.4, 0);
        sculptureGroup.scale.setScalar(Math.min(1.05, (halfW - xPos) / 5.8));

        barsGroup.position.set(xPos + 0.8, -3.8, -5);
        barsGroup.scale.setScalar(0.95);
      }

      if (reduceMotion) {
        renderer.render(scene, camera);
      }
    };

    window.addEventListener('resize', handleLayout);
    handleLayout();

    // ----------------------------------------------------
    // Mouse Interaction: Parallax & Particle Repulsion
    // ----------------------------------------------------
    const ndc = new THREE.Vector2();
    let hasPointer = false;
    let pulseImpulse = false;

    const handlePointerMove = (e: MouseEvent) => {
      ndc.x = (e.clientX / window.innerWidth) * 2 - 1;
      ndc.y = -(e.clientY / window.innerHeight) * 2 + 1;
      hasPointer = true;
    };

    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest && target.closest('a, button, input, textarea, select')) return;
      ndc.x = (e.clientX / window.innerWidth) * 2 - 1;
      ndc.y = -(e.clientY / window.innerHeight) * 2 + 1;
      hasPointer = true;
      pulseImpulse = true;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    const ray = new THREE.Raycaster();
    const hitPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const hitPoint = new THREE.Vector3();
    let mx = 0, my = 0, mz = 0;
    let mouseOn = false;
    let camPx = 0, camPy = 0;

    // ----------------------------------------------------
    // Automatic Shape Morphing Cycle
    // ----------------------------------------------------
    let cycleTimer: ReturnType<typeof setInterval> | null = null;
    let pauseUntil = 0;

    const startCycle = () => {
      if (reduceMotion) return;
      cycleTimer = setInterval(() => {
        if (Date.now() < pauseUntil || document.hidden) return;
        setShape((curShapeIdx + 1) % shapes.length, true);
      }, 6500);
    };

    startCycle();

    // ----------------------------------------------------
    // Animation Loop
    // ----------------------------------------------------
    let reqId: number;
    let lastTime = performance.now();
    const R_REPULSE = 2.4;
    const R2 = R_REPULSE * R_REPULSE;

    const animate = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      const t = now / 1000;
      const f = dt * 60;

      // 1. Smooth Camera Parallax
      camPx += ((hasPointer ? ndc.x : 0) - camPx) * 0.04;
      camPy += ((hasPointer ? ndc.y : 0) - camPy) * 0.04;
      camera.position.x = camPx * 1.3;
      camera.position.y = 1.8 + camPy * 0.85;
      camera.lookAt(0, 0, 0);

      // 2. Rotate Sculpture & Update World Matrix
      sculptureGroup.rotation.y = Math.sin(t * 0.2) * 0.35;
      sculptureGroup.updateMatrixWorld(true);

      // 3. Mouse Raycasting to Sculpture Plane
      mouseOn = false;
      if (hasPointer) {
        hitPlane.constant = -sculptureGroup.position.z;
        ray.setFromCamera(ndc, camera);
        if (ray.ray.intersectPlane(hitPlane, hitPoint)) {
          sculptureGroup.worldToLocal(hitPoint);
          mx = hitPoint.x; my = hitPoint.y; mz = hitPoint.z;
          mouseOn = true;
        }
      }

      // 4. Update Morphing Sculpture Particles
      for (let i = 0; i < N; i++) {
        const ix = i * 3;
        const k = stiff[i] * f;
        const ph = phase[i];
        const x = pos[ix], y = pos[ix + 1], z = pos[ix + 2];
        let vx = vel[ix], vy = vel[ix + 1], vz = vel[ix + 2];

        vx += (tgtPts[ix] + Math.sin(t * 0.9 + ph) * 0.04 - x) * k;
        vy += (tgtPts[ix + 1] + Math.cos(t * 0.8 + ph) * 0.04 - y) * k;
        vz += (tgtPts[ix + 2] + Math.sin(t * 0.7 + ph * 1.3) * 0.04 - z) * k;

        if (mouseOn) {
          const dx = x - mx, dy = y - my, dz = z - mz;
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < R2 * (pulseImpulse ? 3 : 1) && d2 > 0.0001) {
            const d = Math.sqrt(d2);
            let s = 1 - d / (R_REPULSE * (pulseImpulse ? 1.7 : 1));
            s = (s * s * (pulseImpulse ? 3.2 : 0.55)) / d;
            vx += dx * s; vy += dy * s; vz += dz * s;
          }
        }

        vx *= 0.9; vy *= 0.9; vz *= 0.9;
        vel[ix] = vx; vel[ix + 1] = vy; vel[ix + 2] = vz;
        pos[ix] = x + vx * f; pos[ix + 1] = y + vy * f; pos[ix + 2] = z + vz * f;

        // Smooth color interpolation
        col[ix] += (tgtCols[ix] - col[ix]) * 0.05;
        col[ix + 1] += (tgtCols[ix + 1] - col[ix + 1]) * 0.05;
        col[ix + 2] += (tgtCols[ix + 2] - col[ix + 2]) * 0.05;
      }
      pulseImpulse = false;
      cloudGeo.attributes.position.needsUpdate = true;
      cloudGeo.attributes.color.needsUpdate = true;

      // 5. Rotate Orbit Rings
      for (let r = 0; r < rings.length; r++) {
        rings[r].rotation.y += dt * (rings[r].userData as { spd: number }).spd;
      }

      // 6. Update Rolling Data Bars
      updateBars(t);
      barsGroup.rotation.y = -0.45 + Math.sin(t * 0.12) * 0.22;

      // 7. Update Glowing Network Nodes & Lines
      updateNetwork(t);

      // 8. Update Floating Code Labels
      for (let l = 0; l < codeLabels.length; l++) {
        const sp = codeLabels[l];
        sp.position.y += (sp.userData as { speed: number }).speed * dt;
        if (sp.position.y > 10) sp.position.y = -10;
      }

      // 9. Rotate Ambient Dust
      dust.rotation.y = t * 0.01 + camPx * 0.05;

      // Render Frame
      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    };

    if (reduceMotion) {
      updateBars(2.0);
      updateNetwork(2.0);
      renderer.render(scene, camera);
    } else {
      reqId = requestAnimationFrame(animate);
    }

    // ----------------------------------------------------
    // Cleanup on Component Unmount
    // ----------------------------------------------------
    return () => {
      if (cycleTimer) clearInterval(cycleTimer);
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleLayout);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);

      // Dispose Geometries and Materials
      cloudGeo.dispose();
      cloudMat.dispose();
      barGeo.dispose();
      barMat.dispose();
      netNodeGeo.dispose();
      netNodes.material.dispose();
      lineGeo.dispose();
      netLines.material.dispose();
      dustG.dispose();
      dust.material.dispose();
      dotTex.dispose();

      codeLabels.forEach((sp) => {
        sp.material.map?.dispose();
        sp.material.dispose();
      });
      rings.forEach((r) => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="three-portfolio-bg"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Jet Black gradient shade so left-aligned content remains crystal clear */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(10, 10, 10, 0.92) 0%, rgba(10, 10, 10, 0.65) 35%, rgba(10, 10, 10, 0.25) 70%, transparent 100%)',
        }}
      />
    </div>
  );
};
