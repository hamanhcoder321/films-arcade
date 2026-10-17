'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="wrap header-row">
        <div className="header-left">
          <h1>🎬 <em>Film & Actors</em> Vocabulary Arcade</h1>
          <div className="subhead">Types of Films · Home vs Cinema · Qualities of Actors · Becoming an Actor</div>
        </div>
        {/* <div className="header-right">
          <Link
            href="/admin"
            className="btn btn-outline btn-sm"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            <i className="fas fa-cog" style={{ marginRight: '6px' }}></i>
            Quản trị CMS
          </Link>
        </div> */}
      </div>
    </header>
  );
}
