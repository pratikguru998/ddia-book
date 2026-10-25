import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Mermaid from '@theme/Mermaid';
import styles from './index.module.css';

const map = `flowchart LR
  P1["🧱 Part I · Foundations<br/>one machine: models, storage, encoding"] --> P2["🌐 Part II · Distributed data<br/>many machines: replication, partitioning, consensus"]
  P2 --> P3["🔁 Part III · Derived data<br/>batch, streams, putting systems together"]
  style P1 fill:#ede9fe,stroke:#8b5cf6,color:#1e1b4b
  style P2 fill:#dbeafe,stroke:#3b82f6,color:#172554
  style P3 fill:#dcfce7,stroke:#10b981,color:#052e16`;

const parts = [
  {icon: '🧱', title: 'Part I · Foundations', color: '#8b5cf6', to: '/docs/chapters/part-1/reliable-scalable-maintainable', items: ['1 · Reliable, scalable, maintainable', '2 · Data models & query languages', '3 · Storage & retrieval', '4 · Encoding & evolution']},
  {icon: '🌐', title: 'Part II · Distributed data', color: '#3b82f6', to: '/docs/chapters/part-2/replication', items: ['5 · Replication', '6 · Partitioning', '7 · Transactions', '8 · Trouble with distributed systems', '9 · Consistency & consensus']},
  {icon: '🔁', title: 'Part III · Derived data', color: '#10b981', to: '/docs/chapters/part-3/batch-processing', items: ['10 · Batch processing', '11 · Stream processing', '12 · The future of data systems']},
];

export default function Home() {
  return (
    <Layout title="Home" description="Visual study notes on designing data-intensive applications">
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>🗄️ Data Systems Book</h1>
          <p className={styles.sub}>Visual, chapter-by-chapter study notes on how databases and distributed systems really work, following the structure of <em>Designing Data-Intensive Applications</em>.</p>
          <div className={styles.ctas}>
            <Link className="button button--primary button--lg" to="/docs/start-here">🗺️ Start here</Link>
            <Link className="button button--secondary button--lg" to="/docs/cheat-sheet">⚡ Cheat sheet</Link>
          </div>
        </div>
      </header>
      <main className="container" style={{padding: '2rem 16px 4rem'}}>
        <h2>The journey</h2>
        <Mermaid value={map} />
        <h2>Chapters</h2>
        <div className="pm-grid">
          {parts.map((p) => (
            <Link key={p.title} to={p.to} className="pm-card" style={{'--accent': p.color}}>
              <div className="pm-card-emoji">{p.icon}</div>
              <div className="pm-card-title">{p.title}</div>
              <div className="pm-card-text">{p.items.map((i) => <div key={i}>{i}</div>)}</div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
