"use client";

/**
 * Renders the current year on the client so the copyright notice
 * stays correct even in a statically generated build.
 */
export function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}
