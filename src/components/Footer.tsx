import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t bg-card mt-auto p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 [&_a:hover]:underline [&_a:hover]:text-red-500 [&_a]:transition">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <a href="https://www.conflictnations.com/">Official web</a>
        <a href="https://wiki.conflictnations.com/">Official wiki</a>
        <a href="https://forum.conflictnations.com/">Official Forum</a>
      </div>
      <a href="https://github.com/polpobletpallise" aria-label="GitHub" rel="noopener noreferrer" target="_blank"><FaGithub size={24} /></a>
    </footer>
  );
}