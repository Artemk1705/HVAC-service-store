"use client";

import React from "react";
import Link from "next/link";

export default function CareerPositionPage({ params }) {
  const position = positions.find((p) => p.slug === params.slug);

  if (!position) {
    return (
      <div className="not-found">
        <h2>Position Not Found</h2>
        <p>The requested job posting does not exist.</p>
        <Link href="/careers">Back to Careers</Link>
      </div>
    );
  }

  return (
    <div className="position-detail-page">
      <div className="title_apply">
        <h1 className="full_header">{position.title}</h1>
        <Link href="/careerform">
          <div className="apply_button">APPLY</div>
        </Link>
      </div>

      <p className="full_pa">{position.description}</p>

      {position.requirements?.length > 0 && (
        <>
          <h4 className="req_title">Requirements</h4>
          <ul className="req_list">
            {position.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </>
      )}

      {position.responsibilities?.length > 0 && (
        <>
          <h4 className="req_title">Key Responsibilities</h4>
          <ul className="req_list">
            {position.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </>
      )}

      {position.licenses?.length > 0 && (
        <>
          <h4 className="req_title">License / Certification</h4>
          <ul className="req_list">
            {position.licenses.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {position.extra?.length > 0 && (
        <div className="extra">
          {position.extra.map((text, i) => (
            <p key={i} className="full_pa">
              {text}
            </p>
          ))}
        </div>
      )}

      <Link href="/careers">
        <button className="button_back">Back to Career Page</button>
      </Link>
    </div>
  );
}
