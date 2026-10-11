"use client";

import { Certificate } from "@/lib/i18n";

interface CertificateCardProps {
  cert: Certificate;
  t: {
    issued: string;
    expires: string;
    credentialId: string;
    skills: string;
    showCredential: string;
  };
  showIssuerLogo?: boolean;
  compact?: boolean;
}

export default function CertificateCard({ cert, t, showIssuerLogo = true, compact = false }: CertificateCardProps) {
  const parseDate = (dateStr: string) => {
    const issuedMatch = dateStr.match(/(Issued|Diterbitkan)\s+([^·]+)·\s*(Expires|Berlaku hingga)\s+(.+)/i);
    if (issuedMatch) {
      return {
        issued: issuedMatch[2].trim(),
        expires: issuedMatch[4].trim(),
      };
    }
    return { issued: dateStr, expires: "" };
  };

  const { issued, expires } = parseDate(cert.date);

  return (
    <article className={`relative rounded-2xl bg-white p-5 sm:p-6 shadow-card border border-ink/5 transition-all hover:border-ink/10 hover:shadow-md ${compact ? "p-4" : ""}`}>
      {compact && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-ink/70 border border-ink/15 rounded-full hover:border-tealdeep hover:text-tealdeep hover:bg-tealdeep/5 transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            {t.showCredential}
          </a>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
        {/* Issuer Logo */}
        {showIssuerLogo && (
          <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-cream border border-ink/10">
            <span className="text-2xl sm:text-3xl" aria-hidden="true">{cert.issuerLogo}</span>
          </div>
        )}

        {/* Certificate Info */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="font-extrabold text-base sm:text-lg text-ink leading-snug">{cert.title}</h3>

          {/* Issuer */}
          <p className="mt-1 text-sm text-ink/70 font-medium">{cert.issuer}</p>

          {/* Date & Credential ID */}
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 text-[12px] text-ink/50">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-ink/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{issued && `${t.issued} ${issued}`}</span>
              {expires && <span className="mx-1">·</span>}
              {expires && <span>{t.expires} {expires}</span>}
            </div>
            {cert.credentialId && (
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-ink/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-mono text-[11px]">{t.credentialId} {cert.credentialId}</span>
              </div>
            )}
          </div>

          {/* Skills Tags */}
          {cert.skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5" role="list" aria-label={t.skills}>
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-2.5 py-1 text-[11px] font-medium text-ink/70 bg-ink/5 rounded-full border border-ink/10"
                  role="listitem"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Show Credential Button - Full width on mobile, inline on desktop */}
          {!compact && (
            <div className="mt-4 pt-3 border-t border-ink/5">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-ink border border-ink/20 rounded-xl hover:border-tealdeep hover:text-tealdeep hover:bg-tealdeep/5 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span>{t.showCredential}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}