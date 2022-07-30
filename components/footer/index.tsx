import { KryptonomicLogo } from 'components/images';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="w-full py-8 bg-background">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4">
          <p className="text-white">Powered by </p>
          <div className="relative w-5 h-5">
            <Image layout="fill" src={KryptonomicLogo} alt="Kryptonomic Logo" />
          </div>
          <p className="font-bold text-white">Kryptonomic</p>
        </div>
      </div>
    </div>
  );
}
