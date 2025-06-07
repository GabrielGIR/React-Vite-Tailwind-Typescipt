import { Children } from "react";
import type { Container } from "./Container";

interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className="px-6 py-3 rounder-full outline-non relative overflow-hidden border "
    >
      <span> {text} </span>
    </a>
  );
};
