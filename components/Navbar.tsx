import { NavLinks } from "@/costants/types";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";

export default function Navbar() {
  const session = false;
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image
            src='/logo.png'
            width={43}
            height={43}
            alt='logomessianico'
          />
        </Link>
        <ul className='md:flex hidden text-xl gap-7'>
          {NavLinks.map((navLinks) => (
            <Link
              key={navLinks.key}
              href={navLinks.href}
            >
              {navLinks.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-6'>
        {session ? (
          <>
            NomeAssistente
            <Link href='/create-project'>Reuniao</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
}
