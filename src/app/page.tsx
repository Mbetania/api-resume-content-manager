import Image from 'next/image'
import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>Here you will find all the information about me.</p>
      <Image
        src="/me.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
